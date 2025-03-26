const q1= ['Povilas',10,9,8,7,6];
const w1= ["Raimonda",1,2,3,4,5];
const e1 =  ['Barbora',7,6,4,5,4];
const r1 = ['Leonas',8,9,10,4,5];
const t1 =['Jonas',8,8,7,5,1];
const y1 =['Roma',1,4,6,7,10];

   function skaiciuotiVidurki(mokinioDuomenys) {
    const vardas = mokinioDuomenys[0];
    const pazymiai = mokinioDuomenys.slice(1);
    const suma = pazymiai.reduce((a, b) => a + b, 0);
    const vidurkis = suma / pazymiai.length;


    if (vidurkis>=7){ 
        return `${vardas} pazymu vidurkis yra ${vidurkis} ir kursa jis islaike`;
   } else if(vidurkis<7){
       return `${vardas} pazymu vidurkis yra ${vidurkis} ir  mokinys kurso neislaike`;
   }else { return `Po papildomo pazymio naujas ${naujasVidurkis}ir kursa islaike`}};

   console.log(skaiciuotiVidurki(q1));
console.log(skaiciuotiVidurki(w1));
console.log(skaiciuotiVidurki(e1));
console.log(skaiciuotiVidurki(r1));
console.log(skaiciuotiVidurki(t1));
console.log(skaiciuotiVidurki(y1));


function pridetiIrPerskaiciuoti(mokinioDuomenys, papildomasPazymys) {

    mokinioDuomenys.push(papildomasPazymys);
    const naujasVidurkis = skaiciuotiVidurki(mokinioDuomenys);
    return naujasVidurkis;
}



console.log(pridetiIrPerskaiciuoti(q1, 10));
console.log(pridetiIrPerskaiciuoti(w1, 10));
console.log(pridetiIrPerskaiciuoti(e1, 10));
console.log(pridetiIrPerskaiciuoti(r1, 10));
console.log(pridetiIrPerskaiciuoti(t1, 10));
console.log(pridetiIrPerskaiciuoti(y1, 10));


//////////////////////////////////////////////


// 5 filmų sąrašai (pavadinimas, žanras, įvertis)
const filmas1 = ["Inception", "sci-fi", 9];
const filmas2 = ["The Notebook", "romantinis", 8];
const filmas3 = ["Interstellar", "sci-fi", 10];
const filmas4 = ["The Dark Knight", "veiksmo", 9];
const filmas5 = ["La La Land", "miuziklas", 7];

// Mėgstamas žanras ir norimas įvertis
const megstamasZanras = "sci-fi";
const norimasIvertis = 8;

// Funkcija, kuri rekomenduoja filmus pagal žanrą ir įvertį
function rekomenduotiFilmus(filmai, zanras, ivertis) {
    const tinkamiFilmai = filmai.filter(filmas => filmas[1] === zanras && filmas[2] >= ivertis);

    if (tinkamiFilmai.length > 0) {
        console.log("Jums turėtų patikti šie filmai:");
        tinkamiFilmai.forEach(filmas => console.log(filmas[0]));
    } else {
        console.log("Pagal jūsų kriterijus tinkamų filmų nerasta.");
    }
}

// Iškviečiame funkciją su 3 pasirinktais filmais
rekomenduotiFilmus([filmas1, filmas2, filmas3], megstamasZanras, norimasIvertis);

//////////////////////////// Array.filter() funkcija. 
console.clear();

/*numeriai.map(num=>num*num) Supaprastintai padaro nauja eilute is turimos const eilutes
pvz const b=[1,2,3];
const naujas=b.map(b=>b+1);
console.log(naujas); duos atsakyma [2,3,4]; reiskia verte padidinom per +1. 

//  numeriai.filter(num=>num % 2  ===0)

// numeriai.reduce( (acc,val)=>acc.concat(val),[]);

//numeriai.forEach((n,i,arr)=>{arr[i]=n+s});

/*let nauja=numeriai.map((n)=>{
    return n+1;}); */

//// pvz su numeriai.map funkcija/ Ji perdave eilute i nauja eilute ir isspauzdina per loga. 

const numeriai=[1,2,3,4];

const naujaEilute=numeriai.map((n)=>{    
    return n*n
});
console.log(naujaEilute);

const kainos=[100,200,50,40,20]; // kainos su 20 proc nuolaida. 

const naujosKainos=kainos.map(kainos=>kainos*0.8);
console.log(naujosKainos);

const kaina = [100,200,300,400];
const kainaPvm=kaina.map(n=> n*1.21); // cia pasidare map eilutes sutrumpinimas. 
console.log(kainaPvm);

const dydis=[1,2,3,4,5];
const padidintas=dydis.map(dydis=>dydis+1);
console.log(padidintas);

const dydziai=[10,20,30,40,50];
const atimtasPadaugintas=dydziai.map(dydziai=>(dydziai-5)*2);
console.log(atimtasPadaugintas);



// pavyzdys su kintamaisiais kurie yra objektas ir stringai ir numberiai. 

const filmai= [
{filmas:"Inception",zanras:"sci-fi",balas:9},
 {filmas: "The Notebook",zanras:"romantinis", balas:8},
{filmas: "Interstellar",zanras:"sci-fi",  balas:10},
{filmas: "The Dark Knight",zanras:"veiksmo",  balas:9},
{filmas: "La La Land",zanras: "miuziklas",  balas:  7}
];
// sumazinsime bala per -1.
const sumazintasBalas=filmai.map(filmai=>{
    return {...filmai,
        balas:filmai.balas-1
}
});

console.log(sumazintasBalas);

const padidintasBalas=filmai.map(filmai=>{
    return {...filmai,
        balas:filmai.balas*10}
});
console.log(padidintasBalas); // padidinome bala padaugindami is 10. 

// jeigu norime gauti tik filmo pavadinima is eilutes

const filmoPavadinimas=filmai.map(( filmai)=>{
    return filmai.filmas;
});
console.log(filmoPavadinimas);

// jeigu norime gauti zanra is eilutes;

const filmoZanras=filmai.map((filmai)=>{
    return filmai.zanras;
});
console.log(filmoZanras);

// jeigu norime gauti bala

const filmoBalai=filmai.map((filmai)=>{
    return filmai.balas;
});
console.log(filmoBalai);

/* reikalinga funkcija, kuri gauna vartotojo amziu(metais) ir atitinkami grazina zodi;
-suauges
-vaikas
Amziaus ribos kriterijus : >=18metu. 
*/
console.clear();
function isAdult(year){
    if (year>=18){
        return `Vartotojo amžius yra ${year} ir jis yra: suauges `;
    } else {
        return `Vartotjo amžius yra ${year} ir jis yra: vaikas `;
    }
};
console.log(isAdult(99));
console.log(isAdult(18));
console.log(isAdult(17));
console.log(isAdult(1));

/* Reikalinga funkcija kuri gauna teksta, kuri grazina rezultata, priklausomai nuo teksto ilgio.
- jei tuscias:"Tuscias tekstas"
- jei maziau 10 simboli:"Trumpas tekstas is N simboliu"
- jei maziau 20 simboli:"Trumpas tekstas is N simboliu"
-- jei ilgesnis: "Ilgas tekstas is N simboliu"
*/
function textSize(text){
textSum=text.length;
if (textSum===0){
    return `Tuscias tekstas`}
    else if (textSum<10) {
        return  `Trumpas tekstas is ${textSum} simboliu`;
    } else if (textSum<20){
     return `Trumpas tekstas is ${textSum} simboliu`;

} else { return `Ilgas tekstas is ${textSum} simboliu`}

    };

console.log(textSize(''));
console.log(textSize('Labas'));
console.log(textSize('Labanaktis'));
console.log(textSize('Besipasikiskekopusteliaudavome'));

// if(){}else if (){} else { }

/* Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false
*/

function empty(){
    return "false";
}
;
console.log(empty());

// daugyba multiply sukueti folderi, taska,. kuriame tuos padaryti darbus. 

function multiply(a,b ){
    if (typeof a !=='number'){
        return `Pirmasis parametras turi buti skaičius`
    } if(typeof b !=='number') {
        return `Antrasis parametras turi buti skaičius`}
    if (isNaN(a)){
        return `Pirmasis parametras turi buti skaičius`; /// jeigu ieskome a ar nera NaN kuriame isNaN
    } if(isNaN(b)){return `Antras blogas`}
    
    if (isFinite(b)=== false   ){
        return `Antrasis skaicius nera normalus skaicius`;
    };
    if (a===Infinity||a=== -Infinity){
        return `Pirmasis parametras negal but infinitis`;
    } if (b===Infinity||b=== -Infinity){ // ieskome ar a arba b nera infinitis. 
        return `Antras parametras negal but infinitis`;
    }  /// isFinite, tikrina ar ta reiksme normalus skaicius. 
        ats=a*b
    return ats;

// if(){}else if (){} else { }.
};
console.log(multiply(2,2));
console.log(multiply(7,5));
console.log(multiply(7,-5));
console.log(multiply(-7,5));
console.log(multiply(-7,-5));
console.log(multiply(-7,0));
console.log(multiply(0,5));
console.log(multiply(0,5));
console.log(multiply(0,-5));
console.log(multiply(0,Infinity));
console.log(multiply(0,NaN));
console.log(multiply(0,'Labas'));
console.log(multiply(NaN,NaN));
console.log(multiply('labas',0));
console.log(multiply(2,5.5));



/*if (typeof kiekis!=='number'||isNaN(kiekis ))  {
    return "Pateikta netinkamo tipo reiksme";
    } else  {
        const skaiciaus=kiekis.toString().length;
    return skaiciaus;
    }}*/


console.clear();

// Pazymiu vidurkis skaiciuojamas.Suskaiciuoti pazymiu vidurki,
console.clear();


function marksAverage(list){
    if (typeof list==='array')
    // patikriname ar gavome masyva.
    // sumuojame visus  skaicius ir ju kieki;
    let sum=0;
    let count=0;


    // einame per visa masyva ir imame kiekviena skaiciu;
    // jei sutinkame ne skaiciu tai ji, ignoruojame.
    // jeigu sutinkame, skaiciu, kuris nera sveikasis nuo 1 iki 10(imtinai), tai ignoruojame. 
// // jei sutinkame ne skaiciu tai ji, padidinam suma.
// jeigu sutinkame skaiciu, padidiname kieki.

    return sum/ count ;

}
console.log(marksAverage(['n']));
console.log(marksAverage([10]));
console.log(marksAverage([2]));
console.log(marksAverage([10,2,8,4,6]));
console.log(marksAverage([8,4,7,'n']));
console.log(marksAverage([8,4,7]));
console.log(marksAverage(['labas']));
console.log(marksAverage([true]));
console.log(marksAverage(['n',2,8,4,6]));


















