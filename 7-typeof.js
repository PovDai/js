// Typeof - duomenu tipo nustatymo operatorius. 

console.log(typeof 5);
console.log(typeof 'tuscias');
console.log(typeof true );
console.log(typeof false);
console.log(typeof 3.145145 );
console.log(typeof ['stop',1,2,3,4]);
console.log(typeof [1,2,3,4,5]);
console.log(typeof null);
console.log(typeof{} );


const a=null;
if (a===null){
    console.log("null");
    
}
const c=[];
if (Array.isArray(c)){ // ar yra arejus lentele. komanda (Array.isArray(imetam kintamaji))
    console.log("Array"); 
} else {console.log('ne arejus');
 }

const b=['jonas',1,2,2,5];
const f=123456
if(Array.isArray(f)){
    console.log('Array');
    
}else (console.log("ne- Array"));






