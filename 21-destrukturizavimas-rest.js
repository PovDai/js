// ...

const a1=[1,11,111,1111];

const a2=[2,22,222,2222];

const a3=[3,33,333,3333];

const a4=[4,44,444,4444];

const a12=a1.concat(a2);/// vienas is metodu sujungti 
console.log(a12);

const b12=[...a1,...a2];/// iskopijuoja a1 ir a2 i viena masyva. 
console.log(b12);

const b234=[...a1,...a3,...a4];
console.log(b234);


/// [7,4,44,444,4444,88]; reikai sukurti. 

const c1=[7,...a4,88]; // 7 ir 88 irasome o kita idedam per tritaski ... 
console.log(c1);

//// su objektais {};


const o1={name:'Jonas'};
const o2={age:99};
const o3={isMarried:true};

const o12={...o1,...o2,...o3};
console.log(o12);/// pasigamino { name: 'Jonas', age: 99 }


const p={a:1};
const p1={b:2};
const p3={c:3, a:7 }; /// itraukiam p3 papildoma reiskme a;7 ja ides pradzioje { a: 7, b: 2, c: 3 }

const p12={...p,...p1,...p3};
console.log(p12);/// gauname { a: 7, b: 2, c: 3 } papildoma a pakeite a7 reiksme. 


const p312={...p3,...p,...p1};/// { c: 3, a: 1, b: 2 } pagamino 
console.log(p312);


const p4={d:4,...p3}; /// galima d;4 paciam irasyti o ant virsaus prideti p3 kuris bus c3 ir papildomas c7 
console.log(p4);/// { d: 4, c: 3, a: 7 } 





