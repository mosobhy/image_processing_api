"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
const resize = express_1.default.Router();
// note: i am note specifying any uri here 
resize.get('', (req, res) => {
    if (req.query.filename && req.query.width && req.query.height) {
        const pathToHere = path_1.default.resolve();
        const width = req.query.width;
        const height = req.query.height;
        const filename = req.query.filename;
        let thumbedFiles = fs_1.default.readdirSync(pathToHere + '/src' + '/thumbed');
        if (thumbedFiles.includes(`${filename}_${width}_${height}.jpg`)) {
            res.status(200).sendFile(`${pathToHere}/src/thumbed/${filename}_${width}_${height}.jpg`);
            console.log('reading from disk');
        }
        else {
            (() => __awaiter(void 0, void 0, void 0, function* () {
                try {
                    yield (0, sharp_1.default)(`${pathToHere}/src/images/${filename}.jpg`)
                        .resize(Number((width)), Number(height))
                        .toFile(`${pathToHere}/src/thumbed/${filename}_${width}_${height}.jpg`);
                    console.log('resizing image');
                    res.status(200).sendFile(`${pathToHere}/src/thumbed/${filename}_${width}_${height}.jpg`);
                }
                catch (error) {
                    res.status(400).send('<h1>no such file</h1>');
                }
            }))();
        }
    }
});
exports.default = resize;
