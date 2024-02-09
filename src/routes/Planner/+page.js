import { generator, populateField } from "$lib/functions.ts";

let inpW = 100
let inpH = 300
let inpA = 3

let Project = generator(inpA, inpH, inpW);

let plants = [
    {12:Number, 1:Number},
    {16:Number, 5:Number}
]
//populateField(plants)