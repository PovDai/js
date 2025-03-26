
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

/*Susikurkite bent 6 sąrašo (array) tipo kintamuosius, kurių pirmas narys yra mokinio vardas, o toliau yra 5 skaičiaus tipo mokinio pažymiai
Sukurkite funkciją, kuri padaro šiuos veiksmus:
Į console išveda mokinio vardą
Į console išveda mokinio pažymių vidurkį ir praneša ar mokinys išlaikė ar neišlaikė kurso
Jei mokinys neišlaiko kurso, parašykite ar mokinys, gavęs vieną gerą įvertį, galėtų pasitaisyti savo vidurkį.
*/
console.clear();

const q1=['Povilas',8,9,8,7,6];
const w1=['Raimonda',1,2,3,4,5];
const e1 =['Barbora',7,6,4,5,4];
const r1 =['Leonas',8,9,9,4,5];
const t1 =['Jonas',8,8,7,5,1];
const y1 =['Roma',1,4,6,7,9];

function vidurkioSkaiciavimas(info){
const vardas='Mokinio vardas:' + info[0];
const vidurkis=(info[1]+info[2]+info[3]+info[4]+info[5])/5;


if (vidurkis>=8){
  return `${vardas} pažymiu vidurkis yra  ${vidurkis} ir kursą mokinys išlaikė `;
} else {
  let vidurkisNaujas=(((vidurkis*5)+10)/6);

  return `${vardas} neislaike kurso. Jo vabartinis vidurkis ${vidurkisNaujas}`;
  if (vidurkisNaujas>=8){
    return `${vardas} islaikytu kursa jeigu gautu viena desimtuka`;
  }
}};


console.log(vidurkioSkaiciavimas(q1));
console.log(vidurkioSkaiciavimas(w1));
console.log(vidurkioSkaiciavimas(e1));
console.log(vidurkioSkaiciavimas(r1));
console.log(vidurkioSkaiciavimas(t1));
console.log(vidurkioSkaiciavimas(y1));

/*2 užduotis - filmų rekomendacija:

Susikurkite bent 5 sąrašo tipo kintamuosius, kurių pirmas narys yra filmo pavadinimas, antras narys yra filmo žanras, o trečias narys yra skaičiaus tipo filmo įvertis.
Susikurkite 2 kintamuosius kurie -pirmas nurodo jūsų mėgstamą žanrą ir antras nurodo jūsų norimą matyti filmo įvertį.
Padarykite funkciją, kuri iš pasirinktų 3 filmų, pagal jūsų norimą žanrą ir įvertį išveda į console kokie filmai jums patiktų. Jei joks filmas netinka, turi tai pranešti.
*/
console.clear();

const filmas1 = ["Inception", "sci-fi", 8];
const filmas2 = ["The Notebook", "romantinis", 8];
const filmas3 = ["Interstellar", "sci-fi", 10];
const filmas4 = ["The Dark Knight", "veiksmo", 9];
const filmas5 = ["La La Land", "miuziklas", 7];

const megstamasZanras = "sci-fi";
const norimasIvertis = 9;

function rekomendacija(filmai){
  if (filmai[1]===megstamasZanras&&filmai[2]>=norimasIvertis){
    return `Man patiktų šis filmas: ${filmai[0]}`; 
  } else {  return `Mėgstamo filmo dėja nėra ! `}
};

console.log(rekomendacija(filmas1));
console.log(rekomendacija(filmas2));
console.log(rekomendacija(filmas3));
console.log(rekomendacija(filmas4));
console.log(rekomendacija(filmas5));

/* Užduotys su funkcijomis 
1. Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas. 
2. Sukurkite funkciją skaičiaus kvadratui apskaičiuoti. 
3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį. 
4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“. 
5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis. 
6. Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas, 
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite 
kokio ilgio žodis turi būti gaunamas! ar 4, ar 5 ar kiek raidžių! imkite vieną 
variantą kolkas) 
7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą. 
a. Padaryti su sąrašo (array) tipo kintamuoju 
b. Padaryti su keliais skaičių tipo kintamaisiais 
8. Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3. 
9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'. 
10. Sukurkite funkciją trijų skaičių vidurkiui rasti. 
11. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį. 
12. Sukurkite funkciją dviem eilutėms sujungti. 
13. Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai)
*/
let z=1;  //Sukurkite funkciją, skirtą patikrinti, ar skaičius yra teigiamas. 
let b=2;
let c=-2;
function teigiamas(skaicius){
  if (skaicius>0) {
    return `Skaičius yra teigiamas`
  } else {return `Skaičius yra neigiamas`}
}; 
console.log(teigiamas(z));
console.log(teigiamas(b));
console.log(teigiamas(c));

function kvadratas(skaicius){ // Sukurkite funkciją skaičiaus kvadratui apskaičiuoti.
  return skaicius*skaicius;
}
console.log(kvadratas(c));

const g=[2,5];//3. Sukurkite funkciją, kuri paima du skaičius ir išveda į console didesnįjį. 
const s12=[0,0];
function didesnis(skaiciai){
  if (skaiciai[0]>skaiciai[1]){
    return `Pirmas ${skaiciai[0]} didesnis negu ${skaiciai[1]}`;
  } if (skaiciai[0]<skaiciai[1]) {
    return `Antras ${skaiciai[1]} didesnis negu ${skaiciai[0]}`;
  } if (skaiciai[0]===skaiciai[1]){
    return `Skaičiai yra lygus`;
  }
};
console.log(didesnis(g));
console.log(didesnis(s12));

//4. Sukurkite funkciją, kuri patikrintų, ar eilutėje yra žodis „JavaScript“.

let l='Javascript';
let u='Java';
let p="Javabike";

function patikrinti(zodis){
  if (zodis==='Javascript'){
    return ` Eiluteje yra žodis 'Javascript';`
  }if (zodis!=='Javascript'){
    return ` Eiluteje nera reikiamo žodžio`;
  }
};
console.log(patikrinti(l));
console.log(patikrinti(u));
console.log(patikrinti(p));
//5. Sukurkite funkciją, tikrinančią, ar skaičius yra lyginis. 

const j1=2;
const t5=1;
const r5=-1;
const e4=-2;

function lyginis(skaicius){
  if (skaicius%2===0){
    return `${skaicius} yra lyginis `
   } else { return `${skaicius} nera lyginis `;}
  }
console.log(lyginis(j1));
console.log(lyginis(t5));
console.log(lyginis(r5));
console.log(lyginis(e4));
/*6.  Sukurkite funkciją, kuri į console išvestų priešingą reikšmę (jei skaičius teigiamas, 
išvestų neigiamą, jei yra gaunamas žodis tai žodį turi parašyti atvirkčiai. Apsibrėžkite 
kokio ilgio žodis turi būti gaunamas! ar 4 zodis yra 4 raidziu ? 

function apsukt(duomenys){
  if (typeof duomenys==='number'){
    return `skaičius tapo -${duomenys}`;
  } if (typeof duomenys==='string'){
    return `
  }
};
*/

/*7. Sukurkite funkciją, kuri apskaičiuotų stačiakampio plotą. 
a. Padaryti su sąrašo (array) tipo kintamuoju 
b. Padaryti su keliais skaičių tipo kintamaisiais */

const w2=[5,4];
const w3=[7,8];

const w5=5;
const w4=4;

function plotas(duomenys){
 let plotas=duomenys[0]*duomenys[1];
  return `Stačiakampio plotas yra lygus:${plotas}`;
}

console.log(plotas(w2));
console.log(plotas(w3));

function plotas1(a,b){
  const plotas=a*b;
  return `Stačiakampio plotas yra lygus:${plotas}`
};
console.log(plotas1(w5,w4));

/* 8.  Sukurkite funkciją, kuri tikrina, ar skaičius dalijasi iš 3. */

let a5=5;
let a6=3;
let a8=1;




console.log(dalyba3(a5));
console.log(dalyba3(a6));
console.log(dalyba3(a8));

//9. Sukurkite funkciją, kuri tikrina, ar teksto tipo kintamasis prasideda raide 'a'. 

const r8=['agrastas'];
const r7=['obuolys'];

function aPaieska(duomenys){
  if (duomenys[0]==='a'||'A'){
    return `${duomenys} žodis prasideda pirma raide a`;
  }else { return `${duomenys} žodis neprasideda raide a`}
};
console.log(aPaieska(r8));
// Sukurkite funkciją trijų skaičių vidurkiui rasti.

const a9=5;
const b9=6;
const c8=7;
function vidurkis(a,b,c){
  let vid=(a+b+c)/3;
  return `Vidurkis yra ${vid}`
};
console.log(vidurkis(a9,b9,c8));

// arba jeigu kintamasis array tipo

const f8=[5,6,7];
function vidurkis1(duomenys){
  let ilgis=duomenys.length;
  let ats=(duomenys[0]+duomenys[1]+ duomenys[2])/ilgis;
  return `Vidurkis yra ${ats}`
}
console.log(vidurkis1(f8));

//10. Sukurkite funkciją, grąžinančią teksto tipo kintamojo ilgį. 

const z5='Meskutis'
function ilgis(duomenys){
  ilgis1=duomenys.length;
  return `Žodžio ${duomenys} iligis yra ${ilgis1} `;
}
console.log(ilgis(z5));

// 11. Sukurkite funkciją dviem eilutėms sujungti.

const a10='Aš'
const by6ž= 'Žinau'

function sujungimas(a1,b1){
  return `Žodis bus: ${a1} ${b1}`
};
console.log(sujungimas(a10,by6ž));

//12.  Sukurkite funkciją, kuri tikrina, ar skaičius yra tarp dviejų reikšmių (imtinai).

const f3=1;
const r71=10;
const r9=20;

function tikrinimas(duomenys){
  if (0<=duomenys>=20){
    return `Skaičius ${duomenys} yra tarp dvieju reikšmių 0 ir 20`;
  } else {
      return `Skaičius ${duomenys} tarp reikšmių 0 ir 20  nepapuola`}
  };

console.log(tikrinimas(f3));
console.log(tikrinimas(r71));
console.log(tikrinimas(r9));

/*
Užduotys su IF 
1. Patikrinkite, ar skaičius teigiamas. 
a. Pavyzdys: Patikrinkite, ar skaičius = 3 yra teigiamas. 
2. Patikrinkite, ar skaičius dalijasi iš 5. 
a. Pavyzdys: Pavyzdys: Patikrinkite, ar skaičius = 15 dalijasi iš 5. 
3. Patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai. 
a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai. 
4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų). 
a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų. 
5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų). 
a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių.. 
6. Patikrinkite, ar skaičius yra nelyginis. 
a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis. 
7. Patikrinkite, ar eilutė lygi "JavaScript". 
a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript". 
8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai). 
a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20. 
9. Patikrinkite, ar skaičius yra didesnis arba lygus 100. 
a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100.*/

//1. Patikrinkite, ar skaičius teigiamas. 

function teigiamas(skaicius){
  if (skaicius>0) {
    return `Skaičius yra teigiamas`
  } else {return `Skaičius yra neigiamas`}
}; console.log(teigiamas(3));
//2. Patikrinkite, ar skaičius dalijasi iš 5. 
function dalyba3(duomenys){
  if (duomenys%5===0){
    return `Taip  skaičius ${duomenys} dalijasi iš 5`;
  } else {
    return `Skaičius ${duomenys} nesidalija iš 5 `
  }
};
console.log(dalyba3(15));
/* 3.patikrinkite, ar teksto tipo kintamajame yra daugiau nei 5 simboliai
a. Pavyzdys: Patikrinkite, ar eilutėje str = 'hello' yra daugiau nei 5 simboliai.*/
const str="hello";
function ilgis(duomenys){
  ilgis1=duomenys.length;
  if (ilgis1>5) {
    return `Teksto tipo kintamajame:${duomenys} yra ${ilgis1}simboliai`;
  } else {return `Teksto tipo kintamajame:${duomenys} nera 5 simbolių`}};
console.log(ilgis(str));

/*4. Patikrinkite, ar asmuo turi teisę balsuoti (amžius didesnis arba lygus 18 metų). 
a. Pavyzdys: Patikrinkite, ar asmuo turi teisę balsuoti, jei jo amžius = 20 metų. */

function teise(duomenys){
  if (duomenys>=18){
    return `Asmuo kurio amzius yra ${duomenys}  metu turi teise balsuoti`;
  }else {
    return `Asmuo kurio amzius yra  ${duomenys} metu  neturi teises balsuoti`
  }
};
console.log(teise(20));
/*5. Patikrinkite, ar asmuo yra paauglys (nuo 13 iki 19 metų). 
a. Pavyzdys: Patikrinkite, ar amžius = 15 metų atitinka paauglio amžių.. */

function tikrinimas(duomenys){
  if (13<=duomenys<=19){
    return `Paauglio  amzius ${duomenys} yra Atitinka paauglio amzius`;
  } else {
      return `Paauglio amzius ${ duomenys} tarp reikšmių 13 ir 19  nepapuola`}
  };
console.log(tikrinimas(15));
/*6. Patikrinkite, ar skaičius yra nelyginis. 
a. Pavyzdys: Patikrinkite, ar skaičius = 7 yra nelyginis*/

function   neLyginis(skaicius){
  if (skaicius%2!==0){
    return `Skaicius ${skaicius} yra nelyginis`;
   } else { return `${skaicius} yra lyginis`;
  }};
  console.log(neLyginis(7));

/*7. Patikrinkite, ar eilutė lygi "JavaScript". 
a. Pavyzdys: Patikrinkite, teksto kintamasis = "JavaScript" yra lygus "JavaScript"*/

function patikrinti(zodis){
  if (zodis==="JavaScript"){
    return ` Eiluteje žodis "JavaScript" yra lygus "JavaScript`;
  }if (zodis!=='Javascript'){
    return ` Eiluteje nera reikiamo žodžio`;
  }
};
console.log(patikrinti("JavaScript"));

/*8. Patikrinkite, ar skaičius yra nuo 10 iki 20 (imtinai). 
a. Pavyzdys: Patikrinkite, ar skaičius = 15 yra tarp 10 ir 20. */

function tikrinimas(duomenys){
  if (10<=duomenys<=20){
    return `Skaicius  ${duomenys} yra tarp 10 ir 20`;
  } else {
      return `Skaicius ${ duomenys} tarp reikšmių 10 ir 20  nepapuola`}
  };
console.log(tikrinimas(15));
/* 9. Patikrinkite, ar skaičius yra didesnis arba lygus 100. 
a. Pavyzdys: Patikrinkite, ar skaičius = 150 yra didesnis arba lygus 100.*/

function tikrinimas1(duomenys){
  if(duomenys>=100){
    return `Skaicis ${duomenys} yra didesnis arba lygus 100`;
  }
};
console.log(tikrinimas1(150));

/*Užduotys su IF ir sąrašais(array) 
1. Patikrinkite, ar sąraše yra tam tikras skaičius. 
a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3. 
2. Patikrinkite, ar masyvas tuščias. 
a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias. 
3. Nustatyti, ar sąraše yra teigiamas skaičius. 
a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių. 
4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai. 
a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai. 
5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas. 
a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas. 
6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį. 
a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už 
paskutinį. 
7. Patikrinkite, ar sąrašo ilgis didesnis už 5. 
a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5. 
8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji 
a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai. 
9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10. 
a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis 
nei 10. 
10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai. 
a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2 
elementus.*/

/*1. Patikrinkite, ar sąraše yra tam tikras skaičius. 
a. Pavyzdys: Patikrinkite, ar sąraše [1, 2, 3, 4] yra skaičius 3.*/
const d5=[1,2,3,4];
function patikrinimas2(duomenys){
  if (duomenys[0]===3){
    return`taip yra skaicius 3`;
  }if (duomenys[1]===3){
    return`taip yra skaicius 3`;
  } if (duomenys[2]===3){
    return `taip yra skaicius 3`;
  } if (duomenys[3]===3) {
    return `taip yra skaicius 3`;
  } else {
    return `Tokio skaiciaus nera`;
  }
};
console.log(patikrinimas2(d5));
/* 2. Patikrinkite, ar masyvas tuščias. 
a. Pavyzdys: Patikrinkite, ar sąrašas [] yra tuščias.*/

const d3=[];

function masyvas(duomenys){
  if(duomenys.length===0){
    return  `Masyvas yra tuscias`;
  } else {
    return `Masyvas nera tuscias`;
  }
};
console.log(masyvas(d3));
/* 3. Nustatyti, ar sąraše yra teigiamas skaičius. 
a. Pavyzdys: Patikrinkite, ar sąraše [1, -2, 3, -4] yra teigiamų skaičių. */
const e2=[1, -2, 3, -4];
function patikrinimas2(duomenys){
  if (duomenys[0]>0){
    return`taip yra teigiamas skaicius`;
  }if (duomenys[1]>0){
    return`taip yra teigiamas skaicius`;
  } if (duomenys[2]>0){
    return `taip yra teigiamas skaicius`;
  } if (duomenys[3]>0) {
    return `taip yra teigiamas skaicius`;
  } else {
    return `Tokio skaiciaus nera`;
  }
};
console.log(patikrinimas2(e2));
/* 4. Patikrinkite, ar visi sąrašo skaičiai yra lyginiai. 
a. Pavyzdys: Patikrinkite, ar [2, 4, 6] yra tik lyginiai skaičiai. */
 const e3=[2,4,6];
 function patikrinimas3(duomenys){
  if (duomenys[0]%2===0 ){
    return `Taip tik lyginiai`;
  }if (duomenys[1]%2===0){
    return `Taip tik lyginiai`;
  }if (duomenys[2]%2===0){
    return `Taip tik lyginiai`//// reikia patikslinti 
  } else {
    return `Ne skaiciai ne vien lyginiai`;
  }
 };
 console.log(patikrinimas3(e3));

 /* 5.
 
5. Patikrinkite, ar kuris nors skaičius sąraše yra neigiamas. 
a. Pavyzdys: Patikrinkite, ar kuris nors skaičius sąraše [3, 5, -2] yra neigiamas. */

const e7=[3,5,-2,1];
function patikrinimas3(duomenys){
  if (duomenys[0]<0){
    return`taip yra neigiamas skaicius`;
  }if (duomenys[1]<0){
    return`taip yra neigiamas skaicius`;
  } if (duomenys[2]<0){
    return `taip yra neigiamas skaicius`;
  } if (duomenys[3]<0) {
    return `taip yra neigiamas skaicius`;
  } else {
    return `Tokio skaiciaus nera`;
  }
};
console.log(patikrinimas3(e7));

/*6. Patikrinkite, ar pirmas skaičius sąraše yra didesnis už paskutinį. 
a. Pavyzdys: Patikrinkite, ar pirmas skaičius sąraše [1, 3, 5] yra didesnis už 
paskutinį. */

const e10=[1,3,5];
function patikrinimas7(duomenys){
  if (duomenys[0]>duomenys[2]){
    return ` Taip pirmas skaicius sarase yra didesnis uz paskutini skaiciu`;
  }else {
    return `Ne! pirmas skaicius sarase nera dedesnis uz paskutini skaiciu`;
  }
};
console.log(patikrinimas7(e10));

/*7. Patikrinkite, ar sąrašo ilgis didesnis už 5. 
a. Pavyzdys: Patikrinkite, ar sąrašo [1, 2, 3, 4, 5, 6] ilgis yra didesnis nei 5. */
console.clear();

const z6=[1,2,3,4,5,6];
function ilgis4(duomenys){
   l3=duomenys.length;

  if(l3>5){
    return `Taip saraso ilgis didesnis negu 5`;
  }else {
    return `Ne saraso ilgis trumpenis negu 5`;
  }
};
console.log(ilgis4(z6));
/*8. Patikrinkite, ar sąraše yra tik teksto tipo kintamieji 
a. Pavyzdys: Patikrinkite, ar [„obuolys“, ‚bananas‘, „vyšnia“] yra tik tekstai. */

const z4=['obuolys', 'bananas','vyšnia'];


function tikrinti(duomenys){
  if (typeof duomenys[0]==='string'){
    return `Taip`;
  }if ( typeof duomenys[1]==='string'){
    return `Taip`;
   } if ( typeof duomenys[2]==='string'){
    return  `Ne`;
}};

console.log(tikrinti(z4));

/*9. Raskite didžiausią skaičių sąraše ir patikrinkite, ar jis didesnis už 10. 
a. Pavyzdys: Patikrinkite, ar didžiausias skaičius sąraše [2, 5, 12, 4] yra didesnis 
nei 10. */

const e9=[2, 5, 12, 4];
function rasti(duomenys){
  if (duomenys[0]&&duomenys[1]&&duomenys[2]&&duomenys[3]){
    return `Pirmas skaicius didziausias`;
  }if (duomenys[1]&&duomenys[2]&&duomenys[3]){
    return `Antras skaicius didiziausias`;
}if (duomenys[2]&&duomenys[3]){
  return `Trecias skaicius didziausias`;
}
};
console.log(rasti(e9));//// reikis issiaiskinti. 






/*10. Patikrinkite, ar masyve yra daugiau nei 3 to paties skaičiaus elementai. 
a. Pavyzdys: Patikrinkite, ar [2, 2, 2, 2, 2, 5, 6] turi daugiau nei 3 skaičiaus 2 
elementus.*/

.
















































