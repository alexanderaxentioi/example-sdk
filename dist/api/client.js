"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var API_URL = 'https://pokeapi.co/api/v2/';
var client = axios_1.default.create({
    baseURL: API_URL,
});
exports.default = client;
