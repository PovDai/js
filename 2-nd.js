/* Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų 
atstumai iki Vilniaus ([‘Kaunas’, 89.6, ‘Klaipėda’, 307.3, … ).

a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x 
km/h greičiu per y valandų 
b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x 
valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) 
c. Parašykite funkciją, kuri nurodytų į kokį tolimiausią miestą mes galėtume 
nuvažiuoti su k kiekiu pinigų, jei už vieną litrą degalų turime mokėti j eurų. 
Kelionę pradedame su 30 litrų benzino bakelyje, už kuriuos mokėti nereikia. 
Nuvažiuodami vieną kilometrą sudeginame x kiekį degalų 
d. Susikurkite sąrašą kelio sąlygoms iki kiekvieno miesto apibūdinti (pavyzdžiui: 
geras, prastas, taisomas). Geromis kelio sąlygomis iki miesto važiuojame 
paprastai, prastomis kelio sąlygomis iki miesto važiuojame 1.5 karto ilgiau, o 
taisomo kelio sąlygomis važiuojame 2 kartus ilgiau. Parašykite funkciją, kuri 
pagal kelio sąlygas ir duotus atstumus, parašytų kiek laiko tektų važiuoti iki 
kiekvieno miesto*/


/*a. Parašykite funkciją, kuri pasakytų, kur toliausiai nuvažiuotume važiuodami x 
km/h greičiu per y valandų */


// 1. Miestų sąrašas su atstumais iki Vilniaus (array formatu)
const miestai = [
    'Kaunas', 102,
    'Klaipėda', 312,
    'Šiauliai', 213,
    'Panevėžys', 135,
    'Alytus', 105,
    'Marijampolė', 138,
    'Mažeikiai', 279,
    'Utena', 95,
    'Tauragė', 193,
    'Telšiai', 232
];

// 2. Funkcija, kuri nustato tolimiausią pasiekiamą miestą
function rastiToliausiaMiesta(greitis, valandos) {
    const galimasAtstumas = greitis * valandos;
    let tolimiausiasMiestas = '';
    let tolimiausiasAtstumas = 0;
    
    // Einame per miestų sąrašą žingsniu po 2 (nes kas antra reikšmė yra atstumas)
    for (let i = 0; i < miestai.length; i += 2) {
        const miestoPavadinimas = miestai[i];
        const atstumas = miestai[i + 1];
        //kai i=0, c=a,d=10 
        //kai i=2, c=B, d=20
        // kai i=4 c=c, d=30
        
        // Tikriname ar miestas pasiekiamas ir ar toliau nei ankstesnis rekordininkas
        if (atstumas <= galimasAtstumas && atstumas > tolimiausiasAtstumas) {
            tolimiausiasMiestas = miestoPavadinimas;
            tolimiausiasAtstumas = atstumas;
        }
    }
    
    // Rezultato grąžinimas
    if (tolimiausiasMiestas === '') {
        return `Vaiduodami ${greitis} km/h greičiu per ${valandos} val. nepavyktų pasiekti nė vieno miesto iš sąrašo.`;
    } else {
        return `Vaiduodami ${greitis} km/h greičiu per ${valandos} val. galėtumėte pasiekti tolimiausią miestą: ${tolimiausiasMiestas} (${tolimiausiasAtstumas} km nuo Vilniaus).`;
    }
}

// 3. Funkcijos panaudojimo pavyzdžiai
console.log(rastiToliausiaMiesta(80, 2));  // Greitis 80 km/h, laikas 2 val.
console.log(rastiToliausiaMiesta(120, 1.5)); // Greitis 120 km/h, laikas 1.5 val.
console.log(rastiToliausiaMiesta(60, 1));   // Greitis 60 km/h, laikas 1 val.



 /*b. Parašykite funkciją, kuri pasakytų, ar spėtume pasiekti norimą miestą per x 
valandų ir kokiu greičiu turėtume važiuoti? (padarykite limitą 120 km/h) */





//Užduotis: atvirukų gamintojas nori tam tikras atviruko raides užklijuoti blizgančių raidžių lipdukais.
//Padėkite gamintojui paskaičiuoti, kiek raidžių lipdukų reikės jam nusipirkti.
//Kas bus, jei atvirukų gamintojas norės visas balses išpuošti lipdukais?




let atvirukoTekstas = 'labai geras daiktas yra televizorius aš su juo galiu matyti jus';
let atvirukoRaide = 'a';
let atvirukoSuma = 0;



function AtvirukoLipdukai (Raide)
{
    atvirukoSuma = 0;
    for (let i = 0; i <atvirukoTekstas.length; i++)
    {
        if(atvirukoTekstas[i] === Raide)
            {
                atvirukoSuma += 1;
            }
            
    }

    return atvirukoSuma;
}



const AtvirukoBalses = ['a', 'e', 'o', 'u', 'i', 't', 'z', 'g'];

for (let i = 0; i < AtvirukoBalses.length; i++)
{
    console.log("Raidė " + AtvirukoBalses[i] + " pasikartoja " + AtvirukoLipdukai(AtvirukoBalses[i]))
}
















//Noriu rasti, kaip dažnai natūraliame tekste pasitaiko žodžių su tam tikra raide. Noriu rašyti tekstą tol
// kol surasiu pirmąsias n norimų raidžių


let manoraide = 'y'
let tekstasilgas = 'kazin kas tokio idomaus gali buti programavime. Daug dalykų, galbūt, tik reikia juos atrasti.'
let rastosraides = 0
let norimaskiekis = 4
let einamastekstas = '';


for (let i = 0; rastosraides < norimaskiekis; i++)
{
    einamastekstas += tekstasilgas[i];
    if (tekstasilgas[i] === manoraide)
    {
        rastosraides += 1;
    }
    if (i === tekstasilgas.length -1)
    {
        rastosraides = 4
    }
}

console.log(einamastekstas)



/*2. Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų 
skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą  [1, 1, 2, 3, 3, 3, 4] rezultatas 
būtų gaunamas toks: */

const sarasas=[1,1,2,3,3,3,4];
//1:**
//2:*

function sudedam(sarasas){
let sum=sarasas[0];
for(let i=0;i<sarasas.length;i++){
    if(sarasas[i]===1){
        sum+='*'
    }if(sarasas[i]===2){
        sum+='*';
    }
    }return sum;
}
console.log(sudedam(sarasas));

/*

Susikurkite 7 sąrašus, kuriose yra talpinamos skirtingų dienų temperatūros vertės 
a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą. 
b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausią 
temperatūrą. 
c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą. 
d. Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną 
buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra 
e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą 
f. 
Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos 
numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų 
kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir 
šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir 
pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Kokia 
temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta 
turėtų būti bent 0 laipsnių kad kristų sniegas .*/


const a = [12, 14, 16, 18, 17, 15, 13];

const b = [10, 11, 13, 16, 18, 16, 14];

const c = [5, 7, 8, 7, 6, 5, 4];

const d = [5, 4, 3, 2, 1, 0, -1];

const e = [20, 19, 18, 17, 16, 16]

const f = [16, 15, 15, 14, 14, 14]

const h =[-7, -8, -8, -7, -5, -3];

//a. Parašykite funkciją, kuri apskaičiuotų norimos dienos vidutinę temperatūrą. 

function vid(duomenys){
    let tempVid=0;
    let tempSum=0;

    for(let i=0;i<duomenys.length;i++){
        tempSum+=duomenys[i];
        tempVid=tempSum/duomenys.length;

    }

    return`Vidutine dienos temperatura:${tempVid}`;
}

console.log(vid(a));
console.log(vid(b));
console.log(vid(c));
console.log(vid(d));
console.log(vid(e));
console.log(vid(f));
console.log(vid(h));
//b. Parašykite funkciją, kuri apskaičiuotų norimos dienos aukščiausia temperatura. 

function auksciausia(duomenys){
    let max=duomenys[0]
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]>max){
            max=duomenys[i]
        }

        } return `Auksciausia dienos temperatura ${max}`;
    }
    console.log(auksciausia(a));
    console.log(auksciausia(b));
    console.log(auksciausia(c));
    console.log(auksciausia(d));
//c. Parašykite funkciją, kuri apskaičiuotų norimos dienos žemiausią temperatūrą. 


function zemiau(duomenys){
    let min =duomenys[0]
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]<min){
            min=duomenys[i]
        }

        } return `Zemiausia dienos temperatura ${min}`;
    }
    console.log(zemiau(a));
    console.log(zemiau(b));
    console.log(zemiau(c));
    console.log(zemiau(d));

/*Parašykite funkciją, kuriai davus visas savaitės dienas, ji suranda kurią dieną 
buvo žemiausia temperatūra, ir kurią dieną buvo aukščiausia temperatūra */


console.log('------------------------')

function kuriaDiena(duomenys){
    let min=duomenys[0];
    let max=duomenys[0];
    let minDiena=0;
    let maxDiena=0;
    for(let i=0; i<duomenys.length;i++){
        if(duomenys[i]>max){
            max=duomenys[i];
            maxDiena=i
        }if(duomenys[i]<min){
            min=duomenys[i]
            minDiena=i

            }
        } return `Minimali  ${minDiena+1}  diena temp ${min} maksimali ${maxDiena+1} diena  temp  ${max}`
    };

console.log(kuriaDiena(a));
console.log(kuriaDiena(b));
console.log(kuriaDiena(c));
console.log(kuriaDiena(d));
console.log(kuriaDiena(e));
console.log(kuriaDiena(f));
console.log(kuriaDiena(h));

//e. Parašykite funkciją, kuri apskaičiuotų visos savaitės vidutinę temperatūrą.


function vid(duomenys){
    let tempVid=0;
    let tempSum=0;
    let savaitesVid=0;

    for(let i=0;i<duomenys.length;i++){
        tempSum+=duomenys[i];
        tempVid=tempSum/duomenys.length;

    }
 return tempVid //// kazkaip reikia paimt vidurki ir padalint is dienu skaiciaus. 
}

console.log(vid(a));
console.log(vid(b));
console.log(vid(c));
console.log(vid(d));
console.log(vid(e));
console.log(vid(f));
console.log(vid(h));
/*
Parašykite funkciją, kuriai nurodžius vieną savaitės dieną ir tos dienos 
numatomą kritulių kiekį (saulėta (nelis) / debesuota (lis)), funkcija praneštų 
kaip siūloma pasiruošti einant į lauką: Pasitepti saulės kremu (jei saulėta ir 
šilta), Pasiimti skėtį (jei debesuota ir nešalta), Užsidėti striukę (Jei šalta), ir 
pasiimti morką besmegeniui lipdyti (Jei šalta ir debesuota). Kokia 
temperatūra yra šilta/nešalta/šalta įsivardinkite patys skaičiais. Šalta 
turėtų būti bent 0 laipsnių kad kristų sniegas .*/

console.clear();

/*Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą

patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą

patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”

*/
function pickLeter(text,number){
    let zodis='';
    if(typeof text!=='string'){
        return `Pirmasis kintamasis yra netinkamo tipo.`
    }if(text.length===0||text.length>100){
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }if(typeof number!=='number'){
        return `Antrasis kintamasis yra netinkamo tipo`
    }if(number<=0){
        return `Antrasis kintamasis turi būti didesnis už nulį`
    }if(number>text.length){
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį`
        
    } for(let i=number-1;i<text.length;i+=number){ // reiskia 
        zodis+=text[i]

    } return zodis;
};
console.log(pickLeter('abcdefg',2));
console.log(pickLeter('abcdefghijk',3));
console.log(pickLeter('abc',0));
console.log(pickLeter('abc',4));
console.log(pickLeter('1561',2));



