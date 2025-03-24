
// pirmas  pavyzdys stringo apsukimui.

const text="Mokinys";
const text1=text.split("").reverse().join("");
console.log(text1);
console.log(typeof text1);

// Antras pavyzdys stringo apsukimui.

let s="tekstas";
let s1=s.split("");
let s2=s1.reverse();
let s3=s2.join("");


console.log(s1);
console.log(s2);
console.log(s3);

// Zodziu reiksmes apsukimas trecias budas.

const st1="Rytas";
const st2= ` ${st1[4]}${st1[3]}${st1[2]}${st1[1]}${st1[0]}`;

console.log(st2);

// Suskaiciuoti kiek skaitmeu yra skaiciuje.
const amzius=15000;
const kiekis=amzius.toString().length;
console.log(kiekis);

const metai=252525
const vnt=metai.toString().length;
console.log(vnt);

// Raides paimima is teksto.

const pirmas="Vakaras"
const firstSymbol=pirmas[4];
console.log(firstSymbol);

console.log('-------///////---');
console.log(pirmas[0]);
console.log(pirmas[1]);
console.log(pirmas[2]);
console.log(pirmas[3]);
console.log(pirmas[4]);
console.log(pirmas[5]);
console.log(pirmas[6]);


//// Testas su ${} iterpti reiksme prie `` kabuciu: Vakaras buvo ilgas ir net nepastebejom kaip atejo 22 valanda.

const laikas=22;
const laikas1="Vakaras";
const laikas2="valanda";

const tiksli=`${laikas1} buvo ilgas ir net nepastebejom kaip atejo ${laikas} ${laikas2}`;
console.log(tiksli);

function sau (num1,num2,num3){
    return num1*num2/num3;
}
const a=sau(15,12,13);
console.log(a);

/////////////////////////////////////////////


// 5-> Gautas skaicius:5.
function skaicius(n){

   return `Gautas skaicius:${n}.`;
  }
  const gn1=skaicius(5);
    console.log(gn1);


 //ND PADARYTI FUNKCIJAS KURIOS RODYTU. -/ */ dalybos, operacijomis.
//2,2->2+2=4.
//7,5->7+5=12.
//-7,15->-7+15=8.

// ND surasyti visas imanomas kombinacijas su && arba || kai yra naudojamos 4 boolean reiksmes.
// ND ir kiek gavosi kombinaciju?;
// Nd kombinatorikos kuras pasikrint.

// uzduociu: https://docs.google.com/document/d/1UnM5MzO7KPf-atlz3HXPJN8XlaN37nlUJ7fp6GwvIZ8/edit?tab=t.0#heading=h.40g6yguvm5k8

function myFunction(p1, p2) {
  return p1 * p2;
}

let result = myFunction(4, 3);
console.log(result);

function pvmskaic(skaicius){
  return skaicius*1.21;
}
console.log(pvmskaic(100));

function sudetis(s1,s2){
  return s1+s2;

}
console.log(sudetis(10,20));

function atimtis (s1,s2){

  return s1-s2;
}
console.log(atimtis(10,1));

function daugyba(a1,a2){
  return a1*a2;
}
console.log(daugyba(12,10));

function dalyba(a1,a2){
  return a1/a2;
}console.log(dalyba(10,2));


function nameLength  (name){
  const size=name.length;

  return `Zodis "${name}" yra sudarytas is ${size} raidziu`;
}

const nl1=nameLength('Jonas');

function tekstoilgis(tekstas){
  const ilgis=tekstas.length;
  return `Jo ${tekstas} kurio ilgis yra ${ilgis}`;
}
console.log(tekstoilgis("pimpis"));

function dnameSize(name){
const size=name.length;
return `${name} vardo reiksme turi ${size} tiek skaiciu`;

}console.log(dnameSize("Barbora"));
console.log(dnameSize ("Povilas"));
console.log(dnameSize("Raimonda"));

