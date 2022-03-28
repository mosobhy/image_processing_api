"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRoute_1 = __importDefault(require("./routes/mainRoute"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use('/api', mainRoute_1.default);
// bind the app to port 3000
app.listen(PORT, () => {
    // console.log(`app is listening to http://localhost:${PORT}`);
});
exports.default = app;
