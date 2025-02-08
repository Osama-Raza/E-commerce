"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: 'iwckd9gc', // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token: 'sk3rTBMz71AyqIgxMpeoEh18UCx6sEX66uienXNW2NtlM0LRch3TI8D44zQXEN9vvc6fD90k3jmytGTvZXgnqqyDjcwWS6g3y8FwOniBFKbqNkleNgcpPfK043dZUIByacOUUIEZAXBUUWlYjqIFJ2X49nrnZNgagF9fEDsTMv13IwLMD26U',
});