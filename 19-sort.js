/// sort metodas. Rikiuoti reiskia viskas yra abeceles tvarka rusiuojama, is pradziu Didziosios paskui eina mazosios.
//
const texts=['labas','rytas','lietuva','duona','aviza','Zirnis','Anakonda'];

console.log(texts);
texts.sort()
console.log(texts);

const pseudo=['d','b','c','a','bf','ba','cc','db','aaa']//Jis pagal chardoze rusiuoja // is pradziu pagal pirma simboli,paskui pagal antra simboli. 
pseudo.sort();
console.log(pseudo);

///  su skaiciais sort((a, b) => a - b)  jeigu norim kad kaip normalius skaicius susortintu. 

const numbers= [10,2,8,4,6,1,12].sort((a, b) => a - b) //    1,  2,  4, 6,10,12
console.log(numbers); // 10-2=8 keicia  / 2-8=-6 nekeicia/8-8=0 irgi nekeicia. /// nuo maziausio 

numbers.sort((a,b)=>b-a); /// atbuline tvarka susortina 12,10,6,4,2,1 // nuo diziausio 
console.log(numbers);

/// sort metodas skaicius sukeicia tik tada jeigu funkcija grazina teigiama skaiciu. 

const people=[
{name:'Jonas',age:77,isMaried:false},
{name:'Maryte',age:66,isMaried:true},
{name:'Petras',age:99 ,isMaried:true},
{name:'Azuolas',age:88,isMaried:true },

];
people.sort((a,b)=>a.age-b.age); // isrikiuoja pagal amziu. 
people.sort((a,b)=>a.name.length-b.name.length);// pagal vardo ilgi isrikiuoja 
people.sort((a,b)=>a.name>b.name?1:-1);// pagal abecele sulygina charcoda.
people.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);
console.log(people);
