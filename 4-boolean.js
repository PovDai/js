/*
BOOLEAN - logine reiksme
- true
- false

Loginiai operatoriai:
&& - and (ir) (prioritetas, kaip daugybos)
|| - or (arba)
*/

const isEven = true;
const isOdd = false;

console.log('&& ---------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('|| ---------');
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('Ar mergina eis i pasimatyma?');
const arGrazus = true;
const arTurtingas = true;

console.log(arGrazus && arTurtingas);

console.log('Ar vaikinas eis i pasimatyma?');
const arGrazi = true;
const arTurtinga = false;

console.log(arGrazi || arTurtinga);


// skaiciuoja is eiles????
console.log(1, true && true || true);
console.log(2, true && true || false);
console.log(3, true && false || true);
console.log(4, true && false || false);
console.log(5, false && true || true);
console.log(6, false && true || false);
console.log(7, false && false || true);
console.log(8, false && false || false);

console.clear();
console.log(1, true || true && true);
console.log(2, true || true && false);
console.log(3, true || false && true);
console.log(4, true || false && false);
console.log(5, false || true && true);
console.log(6, false || true && false);
console.log(7, false || false && true);
console.log(8, false || false && false);

// ND: Surasyti visas imanomas kombinacijas, su && ir ||, kai yra naudojamos 4 boolean reiksmes.
// ND: Kiek gavosi kombinaciju?




console.log(4**4);// Atrodo tiek kombinaciju bus loginiu operatoriu.256

console.log(true && true && true && false);
console.log(true && true && true && false);
console.log(true && true && false&&true);
console.log(true && true && false&& false);

console.log(true && true && true|| true);
console.log(true && true && true||false);
console.log(true || false && false|| true);
console.log(true && true && false||false);


const a='true && true';
const b='true && false';
const c='false && true';
const d='false && false';

const a1='true || true';
const b1='true || false';
const c1='false || true';
const d1='false || false';

// Kombinacijos a/a1

