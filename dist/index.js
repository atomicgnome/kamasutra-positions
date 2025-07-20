"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = exports.all = void 0;
var unique_random_array_1 = require("unique-random-array");
var kamasutra_positions_json_1 = require("./kamasutra-positions.json");
exports.all = kamasutra_positions_json_1.default;
exports.random = (0, unique_random_array_1.default)(kamasutra_positions_json_1.default);
