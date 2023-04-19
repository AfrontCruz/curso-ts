"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array = [
    {
        nombre: "Name 1",
        edad: 10,
        estudiando: false,
        escolaridad: 0,
    },
    {
        nombre: "Name 2",
        edad: 11,
        estudiando: false,
    },
];
var curso = {
    alumnos: array,
    nombre: "Backend con Node",
};
console.log(JSON.stringify(curso));
