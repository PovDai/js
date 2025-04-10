// reduce () sumazinti, supaprastinti 

const marks=[10,2,8,4,6];
let sum=0;//// ilgasis variantas 
for(const n of marks){
    sum+= n;
}
console.log(sum);

const sum2=marks.reduce((total,n)=>total+n);// total kaupia rezultata o antras n masyvo kiekvienas is elemetu. 
console.log(sum2)

const su3=marks.reduce((total,n)=>total-n);// 10-2-8-4-6 is pirmo atimama kitus. 
console.log(su3)
console.log('------- nuo 0 pvz skaiciuotu----'); // po n irasyti galime nuo kiek pradeti sudeti atimti 

const sum6=marks.reduce((total,n)=>total+n,0);// jeigu nurodai kad nuo 0 skaiciuotu 
console.log(sum6);

const su7=marks.reduce((total,n)=>total-n,0);// jeigu nurodai kad nuo 0 skaiciutu 
console.log(su7);

console.log('------daugyba-----');


const su4=marks.reduce((total,n)=>total*n,1);// 10*2*8*4*6 // nes jeigu 0 irasysim nesuveiks. tai nuo 1 
console.log(su4)
const su5=marks.reduce((total,n)=>total/n,1);// 10/2/8/4/6// nes jeigu 1 irasysim neveiks. 
console.log(su5)


const names=['Jonas','Maryte','Petras','Juozas'];

let abbr='';
for(const name of names){
    abbr=name[0]+'.';
}
console.log(abbr);
/// cia su reduce  pavyzdys kaip paimti pirmas raides. Is daug reiksmiu padaro viena,. 

const abbr2=names.reduce((total,name)=>total+name[0]+'.','');
console.log(abbr2);


