import { buildSalesRanking } from './solution.js';
const sales=[{seller:'Ana',amount:100},{seller:'Luis',amount:200},{seller:'Ana',amount:150},{seller:'Marta',amount:200},{seller:'Luis',amount:100}];
const out=buildSalesRanking(sales,2);
console.assert(out[0]?.seller==='Luis' && out[0]?.total===300,'Luis debería ir primero');
console.assert(out[1]?.seller==='Ana' && out[1]?.total===250,'Ana debería ir segunda');
console.log(out);
