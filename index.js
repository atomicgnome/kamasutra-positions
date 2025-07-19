"use strict";
import uniqueRandomArray from "unique-random-array";
import kamasutraPositions from "./kamasutra-positions.json";

export const all = kamasutraPositions;
export const random = uniqueRandomArray(kamasutraPositions);
