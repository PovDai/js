// Paprastoji funkcija:


function penki (){
    // viduje rasome logika po return sukuriame veiksmus kurie lems atsakyma. 
    return 5;
}
console.log(penki);// gale butinai darom console.loga :)


function hi()   {
    return 'labas';
}




function sveiki () {

    return "viso";
}
console.log(sveiki);

const b= (8+16);
console.log(b);






// Zinomas vardas, man reikes, kad funkcija sugeneruotu pasisveikinima" Labas, "Jonas".

function hiPerson(name ){

     return `Labas ${name}`; /// Veikia su backtiku.  Su kitais neveike pasharinimnas duomenu. 
}
console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));
console.log(hiPerson()); // funkcijai kad ji suveiktu teisingai jai reikia duoti koda jeigu tuscia undefined. 


// 2+2=4, 
// 7+5=12,

function sum (num1,num2 ){
    return num1+num2;///// SUSIKURI CIA FUNKCIONALUMA, KURI PO } GALI VYKDYTI SKIRTINGAIS KINTAMAISIAIS. 
}

const e=sum (2,2);
console.log(e);
const f=sum(7,5);
console.log(f);
const g=sum(15,12);
console.log(g);
// tie patys kintamieji galioja tiktais funkciojos ribose. PVz jeigu pries tai buvo const a nesvarbu. 

// 100 -> 121 Eur. 
// 200 ->242 Eur.
// 73->88.33 Eur.

function priceWithVat(price){
    const updatedPrice=price*1.21;
    return updatedPrice + 'Eur';
}
const p1=priceWithVat(100);
const p2=priceWithVat(200);
const p3=priceWithVat(73);

console.log(p1);
console.log(p2);
console.log(p3);

console.clear();

// Jonas ->rezultatas: Zodis "Jonas" yra sudarytas is 5 raidziu. 
// Maryte ->rezultatas: Zodis "Jonas" yra sudarytas is 6raidziu. 
// Petras ->rezultatas: Zodis "Jonas" yra sudarytas is 6 raidziu. 
// Ona   ->rezultatas: Zodis "Jonas" yra sudarytas is 3 raidziu. 

function nameLength  (name){
    const size=name.length;

    return `Zodis "${name}" yra sudarytas is ${size} raidziu`;
}

const nl1=nameLength('Jonas');
const nl2=nameLength('Maryte');
const nl3=nameLength('Petras');
const nl4=nameLength('ona');
console.log(nl1);
console.log(nl2);
console.log(nl3);
console.log(nl4);

// 5-> Gautas skaicius:5.
//-13 -> Gautas skaicius:-13.
//->777 Gautas skaicius:777.

function number(n){
 return `Gautas skaicius:${n}.`;
}
const gn1=number(5);
const gn2=number(-13);
const gn3=number(777);
console.log(gn1);
console.log(gn2);
console.log(gn3);

//2,2->2+2=4.
//7,5->7+5=12.
//-7,15->-7+15=8.


function sum (a,b){
    const result=a+b;
    return `${a}+${b}=${result}`;
}

console.log(sum(2,2));
console.log(sum(7,5));
console.log(sum( -7, 15));












