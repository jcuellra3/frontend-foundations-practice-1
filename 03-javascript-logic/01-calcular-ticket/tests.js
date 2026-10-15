import { calculateCartTotal } from './solution.js';
const items=[{name:'Teclado',price:50,quantity:2},{name:'Ratón',price:25,quantity:1}];
const result=calculateCartTotal(items,0.21);
console.assert(result?.subtotal===125,'subtotal debería ser 125');
console.assert(result?.itemCount===3,'itemCount debería ser 3');
console.assert(result?.tax===26.25,'tax debería ser 26.25');
console.assert(result?.total===151.25,'total debería ser 151.25');
console.log('Resultado:',result);
