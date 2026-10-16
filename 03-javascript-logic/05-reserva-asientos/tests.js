import { canReserve } from "./solution.js";
window.canReserve = canReserve;
console.assert(
  canReserve(["A1", "A2"], ["B1"], 4).ok === true,
  "debería permitir",
);
console.assert(canReserve([], [], 4).ok === false, "vacío no permitido");
console.assert(
  canReserve(["A1", "A1"], [], 4).ok === false,
  "duplicados no permitidos",
);
console.assert(
  canReserve(["A1"], ["A1"], 4).ok === false,
  "ocupado no permitido",
);
console.assert(
  canReserve(["A1", "A2", "A3"], [], 2).ok === false,
  "máximo superado",
);
console.log("Checks ejecutados");
