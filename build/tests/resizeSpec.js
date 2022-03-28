"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("../image_processing/resize"));
describe('testing the resizeImage function', () => {
    it('should return a promise that resolve with 200 when rigth inputs are given', () => (0, resize_1.default)('fjord', 150, 150).then((result) => {
        expect(result).toEqual(200);
    }));
});
