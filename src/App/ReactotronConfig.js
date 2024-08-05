"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var reactotron_react_native_1 = __importDefault(require("reactotron-react-native"));
reactotron_react_native_1.default.configure({}) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
//# sourceMappingURL=ReactotronConfig.js.map