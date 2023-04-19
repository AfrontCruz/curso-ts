export {};

type Persona = {
  nombre: string;
  edad: number;
  estudiando: boolean;
  escolaridad?: "secundaria" | "bachillerato" | "universidad" | 0;
};

type Curso = {
  nombre: string;
  alumnos: Persona[];
};

const array: Persona[] = [
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

const curso: Curso = {
  alumnos: array,
  nombre: "Backend con Node",
};

console.log(JSON.stringify(curso));
