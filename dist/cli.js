#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meow_1 = require("meow");
var _1 = require("./");
var cli = (0, meow_1.default)({
    help: [
        "Examples",
        "  $ kamasutra-positions",
        "  Classic",
        "",
        "  $ kamasutra-positions --all",
        "  display all positions",
        "",
        "Options",
        "  --all   Get all positions instead of a random one",
    ],
});
console.log(cli.flags.all ? _1.all.join("\n") : (0, _1.random)());
