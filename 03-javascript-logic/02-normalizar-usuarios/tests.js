import { normalizeUsers } from './solution.js';
const input=[{firstName:'  ana ',lastName:'GARCIA',email:' ANA@MAIL.COM '},{firstName:'LUIS',lastName:' pérez ',email:'   '}];
const out=normalizeUsers(input);
console.assert(out.length===1,'debe filtrar email vacío');
console.assert(out[0]?.fullName==='Ana Garcia','nombre incorrecto');
console.assert(out[0]?.email==='ana@mail.com','email incorrecto');
console.assert(input[0].firstName==='  ana ','no modifiques el original');
console.log(out);
