import { groupOrdersByStatus } from './solution.js';
const result=groupOrdersByStatus([{id:1,status:'pending',total:20},{id:2,status:'paid',total:50},{id:3,status:'pending',total:30}]);
console.assert(result.pending?.count===2,'pending count');
console.assert(result.pending?.total===50,'pending total');
console.assert(result.paid?.count===1,'paid count');
console.log(result);
