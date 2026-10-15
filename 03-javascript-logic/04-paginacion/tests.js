import { paginate } from './solution.js';
const items=Array.from({length:23},(_,i)=>i+1);
const p=paginate(items,2,10);
console.assert(p.data?.[0]===11,'segunda página debe empezar por 11');
console.assert(p.data?.length===10,'debe contener 10');
console.assert(p.totalPages===3,'totalPages debe ser 3');
console.assert(p.hasPrevious===true && p.hasNext===true,'flags incorrectos');
console.log(p);
