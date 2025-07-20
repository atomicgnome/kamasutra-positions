#!/usr/bin/env node
"use strict";
import meow from "meow";
import { all, random } from "./";

var cli = meow({
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

console.log(cli.flags.all ? all.join("\n") : random());
