

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

console.clear()


// Parašykite for ciklą, kuris apskaičiuotų visų skaičių nuo 5 iki 15 sumą.
let sum=0;
for(i=5;i<15;i++){
    sum+=i  /// nes cia ir eina konkretus skaiciai ne is duomenu.
};
console.log(`suma yra:${sum}`)

// Parašykite for ciklą, kuris į console išvestų visas žodžio ‘Vakaras’ raides po vieną
let zodis='Vakaras'
let naujas='';
for(let i=0;i<zodis.length;i++){
    console.log(`${i} pozicijoje raide ${zodis[i]}`)
}
// . Parašykite for ciklą, kuris išvestų šešeto daugybos lentelę

let n=6;
for (let i=1;i<=10;i++){
    console.log(`Daugybos lentele ${i}*${n}=${i*n} `)
}
/*Parašykite for ciklą, kuris į consolę išvestų nuo 5 iki 1, ir po vieneto (vietoje 0) į
ekraną išvestų žodį ‘BOOM’*/
for( let i=5;i>=0;i--){
    console.log(i) // is pradziu loginasi skaiciai 
    if(i===0){
        console.log('boom') // kai pasiekia skaicius 0, darom boom. 
    }
}
//Parašykite for ciklą, kuris isudėtų visus lyginius skaičius nuo 3 iki 18

let c8=0;

for(let i=3;i<18;i++){ /// i yra skaicius [i] spauzdimnamas
    if(i%2===0){
   c8+=i
    }
}
console.log(`Visu lyginiu suma:`,c8)

//Parašykite for ciklą, kuris išvestų visus sąrašo elementus į console.
let sarasa=[1,2,3,4,]
for (let i=0;i<sarasas.length;i++){
    console.log(`visi ${sarasa[i]} `)
};

/*Parašykite ciklą, kuris iš vardų sąrašo išvestų visus elementus, pridėdamas ‘Mano
vardas - ’ console log eilutės pradžioje */

const vardai=['Jonas','Petras','Maryte']

for(let i=0; i<vardai.length;i++){
    console.log(`Mano vardas - ${vardai[i]}`)
}

//Parašykite for ciklą, kuris sudėtų visus sąrašo skaitinius elementus.

let sarasas5=[1,2,3,4,];
let sumsum=0;

for(let i=0;i<sarasas5.length;i++){
    sumsum+=sarasas5[i];
}
console.log(`Saraso viso suma`,sumsum)
/* Parašykite for ciklą, kuris išvestų į console visus sąrašo elementus nuo paskutinio iki
pirmo */
let sarasas6=[1,2,3,4,];

for(let i=sarasas6.length;i>0;i--){
    console.log(`Numeriukai`,i)
}

/*Parašykite for ciklą, kuris išvestų į console tik tuos skaičius, jei jie yra pinigų reikšmės
(1, 2, 5, 10, 20, 50, 100, 200, 500) */

for(let i=0;i<500;i++){
    if(i===1||i===5||i===10||i===100){
        console.log(i)
    }
};


/*Parašykite for ciklą, kuris iš sąrašo Raidės [ ‘L’, ‘a’, ‘b’, ‘a’, ‘s’] sudėliotų kintamąjį
Žodis, kurio reikšmė yra ‘Labas’*/

const raides=['L','a','b','a','s']
let zodelis='';// reiskia bus string tipo zodis; 

for(let i=0;i<raides.length;i++){
    zodelis+=raides[i]
}
console.log(`Sudejus raides gaunasi ${zodelis}`)

/* Parašykite for ciklą, kuris atskirai atspausdintų kiekvieną žodžio Programavimas
raidę.*/

const duomenys='Programavimas';
for(let i=0;i<duomenys.length;i++){
    console.log(`${i} pozicijoje raide ${duomenys[i]}`)
};


/*Parašykite for ciklą, kuris sudaugintų skaičius nuo 2 iki 10. Už ciklo išveskite į
consolę reikšmę */
for (let i=2;i<10;i++){
}
console.log(`${i}pozicijoje daugybos reiksme ${i*i} `)

// Parašykite for ciklą, kuris apskaičiuos visų nelyginių skaičių nuo 1 iki 30 sumą
let su=0;
for(let i=1;i<30;i++){
    if (i%2===1){
        su+=i
    }
};
console.log(`suma bus`,su)

// Parašykite for ciklą, kuris į console išvestų skaičius nuo 20 iki 10
for(let i=20;i>10;i--){
    console.log(i,`pozicijoje skaicius`,i)
};
/*Parašykite for ciklą, kuris į console išvestų sąrašo RaidėsAtbulai [ ‘s’, ‘a’, ‘b’, ‘a’, ‘L’]
elementus vienas po kito nuo galo iki pradžios*/

let sar=['s','a','b','a','L'];
let ras='';
for(let i=sar.length;i>=0;i--){
    ras+=sar[i];
};
console.log(`Naujas zodis yra ${ras}`);

/*Parašykite for ciklą, kuris į console išvestų kintamojo ŽodisAtbulas =
‘samivamargorP’ atskiras raides vieną po kitos */

let zodisAtbulas='samivamargorP'
for(let i=0;i<zodisAtbulas.length;i++){
    console.log(i,`pozicijoje raide`,zodisAtbulas[i])
};
/*Parašykite for ciklą, kuris į consolę išveda skaičius nuo 1 iki 100. Jei skaičius dalinasi
iš 7, papildomai į consolę yra išvedamas žodis ‘lucky’*/

for(let i=1;i<100;i++){
    if(i%7===0){
        console.log(`Lucky`)
    } else{
        console.log(i)
    }
};

/*Parašykite for ciklą, kuris į console po vieną atskirai išvestų dvigubas sąrašo
Dvigubinti [2, 3, 6, 8] reikšmes (Gaunamas atsakymas: 4, 6, 12, 16)*/

const e8=[2,3,6,8];
for(let i=0;i<e8.length;i++){
    console.log(`2x skaicia`,e8[i]*2 )
}
/* Parašykite for ciklą, kuris iš sąrašo DaugSkaičių [2, 14, 10, 1000, 503, 8, 0] išvestų
visus skaičius, kurie yra mažesni už 100*/ 

const daugSkaiciu=[2,14,10,1000,503,8,0]
for(let i=0;i<daugSkaiciu.length;i++){
    if(daugSkaiciu[i]<100 ){
        console.log(`Skaiciai mazesni negu 100:`,daugSkaiciu[i])
    }
}

//Parašykite for ciklą, kuris apskaičiuotų kiek raidžių a yra žodyje abrakadabra

const z7='abrakadabra'
let sk=0;
for(let i=0;i<z7.length;i++){
    sk++;
}
console.log(`raidziu zodyje yra`,sk)

/*. Parašykite for ciklą, kuris išvestų, kokios būtų sąrašo PridėsiuSkaičių [2, 8, 88, 14]
elementų reikšmės, jei prie kiekvieno elemento pridėtume dvejetą*/

const e4=[2,8,88,14]
for(let i=0;i<e4.length;i++){
    console.log(`Pridejus 2 reiksmes butu `,e4[i]+2)
};

/*Parašykite for ciklą, kuris suskaičiuotų kiek žodyje Nebeprisikiškiakopūstėliaudavome
yra raidžių e. */

const zodis8='Nebeprisikiškiakopūstėliaudavome'
let skaicius5=0;
for(let i=0;i<=zodis8.length;i++){
    if(zodis8[i]==='e'){
        skaicius5++;
    }
}
console.log(`e Raidziu skaicius:`,skaicius5)

/*. Parašykite for ciklą, kuris į consolę išvestų kiekvieną žodžio
Nebeprisikiškiakopūstėliaudavome e raidę, ir parašytų, kurioje žodžio vietoje ji yra:
PVZ: Žodžiui Keletą būtų išvedama:
e raidė yra 2 vietoje
e raidė yra 4 vietoje
*/

const zodis9='Nebeprisikiškiakopūstėliaudavome'
for(let i=0;i<=zodis9.length;i++){
    if(zodis8[i]==='e'){
        console.log(`e raide yra siose vietose`,i)
    }
}

/*. Parašykite for ciklą, kuris išvestų kokia kintamojo let Lobis = 150 reikšmė būtų, jei
mes iš jo atimtume reikšmes nuo 20 iki 15. Į consolę išveskite kaip mažėja turtas.*/

let lobis=150;

for(let i=20;i>15;i--){
    console.log(`Reiksmes kitimas`,lobis-i)
};

// Parašykite funkciją, kuri grąžina dviejų skaičių sumą.

function suma(a,b){
let su5=a+b;
    return su5;
}
console.log(suma(1,2));

//Parašykite funkciją, kuri grąžina dviejų skaičių skirtumą.
function skirtumas(a,b){
    let su7=a-b;
    return su7;
}
console.log(skirtumas(1,2));

//Parašykite funkciją, kuri grąžina dviejų skaičių sandaugą
function daugyba(a,b){
    let d5=a*b;
    return d5;
}
console.log(daugyba(1,2));

// Parašykite funkciją, kuri grąžina dviejų skaičių dalybą.

function dalyba(a,b){
    let z9=a/b;
    return z9;
}
console.log(dalyba(1,2));

//Parašykite funkciją, kuri grąžina dviejų skaičių vidurkį.

function vidurkis(a,b){
    let vidurkis=a+b/2
    return vidurkis;
}
console.log(vidurkis(2,1));

//Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas.

function tikrink(a){
    if(a>0){
       return `Skaicius teigiamas`
    }else {
        return `Skaicius neigiamas`
    }
}console.log(tikrink(5));

//Parašykite funkciją, kuri patikrina, ar skaičius yra lyginis.
function lyginis(a){
    if(a%2===0){
        return`Skaicius lyginis`
    }else{
        return `Skaicius nelyginis`
    }
}
console.log(lyginis(2));
//Parašykite funkciją, kuri patikrina, ar skaičius yra nelyginis.
function lyginis(a){
    if(a%2===0){
        return`Skaicius lyginis`
    }else{
        return `Skaicius nelyginis`
    }
}
console.log(lyginis(3));
//Parašykite funkciją, kuri patikrina, ar skaičius dalijasi iš 5 be liekanos.
function beLiekanos(a){
    if(a%5===0){
        return `Skaicius dalijasi is 5 be liekanos`
    } else {
        return `Nesidalija be liekanos`
    }
}
console.log(beLiekanos(10));
// Parašykite funkciją, kuri patikrina, ar skaičius yra lygus 100.

function lygu(a){
    if(a===100){
        return `Skaicius lygus 100`
    }else {
        return `Skaicius nelygus`
    }
}
console.log(lygu(100));

//Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 10.
function didenis(a){
    if(a>10){
        return `Skaicius didesnis`
    }else{
        return `Skaicius mazesnis`
    }
}
console.log(didenis(11));

//Parašykite funkciją, kuri grąžina didesnį iš dviejų skaičių.
function retur(a,b){
    if(a>b){
        return a
    }else{
        return b
    }
}
console.log(retur(1,3));

//Parašykite funkciją, kuri grąžina mažesnį iš dviejų skaičių.

function returo(a,b){
    if(a>b){
        return b
    }else{
        return a
    }
}
console.log(returo(1,3));

// Parašykite funkciją, kuri patikrina, ar trys skaičiai yra vienodi.

function vienodi(a,b,c){
    if(a===b&&a===c&&b===c){
        return `vienodi`
    } else {
        return `Nevienodi`
    }
}
console.log(vienodi(1,1,1));
console.log(vienodi(1,2,3));

// Parašykite funkciją, kuri patikrina, ar du skaičiai yra lygūs.
function tikrina(a,b){
    if(a===b){
        return `lygus`
    } else{
        return `Nelygus`
    }
}
console.log(tikrina(1,1));

//Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 1 ir 10.

function skaicius(skaicius){
    if(skaicius>=1&&skaicius<=10){ // return skaicius >= 1 && skaicius <= 10;
        return `ne`
    }else{
        return `taip `
    }
}
console.log(skaicius(5));

/// Parašykite funkciją, kuri patikrina, ar skaičius yra tarp 50 ir 100.

function skaicius(skaicius){
    if(50<skaicius<100){
        return `ne`
    }else{
        return `taip `
    }
}
console.log(skaicius(60));

//Parašykite funkciją, kuri patikrina, ar skaičius yra neigiamas.

function neigiamas(a){
    if(a<0){
        return `Neigiamas `
    }else{
        return `teigiamas`
    }
}
console.log(neigiamas(1))

/*19. Parašykite funkciją, kuri grąžina „Teigiamas“ arba „Neigiamas“ priklausomai nuo
skaičiaus, kurį nusiunčiate funkcijai.*/

function neigiamas(a){
    if(a<0){
        return `Neigiamas `
    }else{
        return `teigiamas`
    }
}
console.log(neigiamas(-3))

/*Parašykite funkciją, kuri patikrina, ar skaičius yra didesnis nei 18 (pvz., patikrinimas,
ar žmogus pilnametis).*/

function pilnametis(a){
    if(a>=18){
        return `pilnametis`
    }else {
        return `nepilnametis`
    }
}
console.log(pilnametis(a));

//Parašykite funkciją, kuri patikrina, ar perduotas žodis yra „labas“.

function labas(a){
    if(a==='labas'){
      return `taip`
    }else{
        return `ne`
    }
};

//Parašykite funkciją, kuri patikrina, ar žodis yra ilgesnis nei 5 simboliai.

function penki(a){
    if(a.length>5){
        return `ilgesnis`
    } else{
        return `Trumpenis`
    }
}
console.log(penki('zodelis'));

//Parašykite funkciją, kuri grąžina pirmąją perduoto žodžio raidę.

function pirma(a){
    return a[0];
}
console.log(pirma('jonas'));
//Parašykite funkciją, kuri grąžina paskutinę perduoto žodžio raidę.

function paskutine(a){
    return a[a.length-1]
}
console.log(paskutine('Jonas'));

//Parašykite funkciją, kuri patikrina, ar žodis prasideda raide „A“.

function patikrinti(a){
    let zodis='';
    for(let i=0;i<a.length;i++){
        if(a[i]==='A'){
            return `Taip zodis prasideda raide A`
        } else {
            return `NE`
        }
    }
}
console.log(patikrinti('Azuoliukas'));
console.log(patikrinti('azuoliukas'));

//Parašykite funkciją, kuri grąžina žodžio ilgį.

function ilgis(a){
    let ilgis=0;
    for(let i=0;i<a.length;i++){
        ilgis++;
    } return ilgis;
}
console.log(ilgis('ilgis'));

/*. Parašykite funkciją, kuri grąžina „Ilgas“ arba „Trumpas“, priklausomai nuo žodžio
ilgio. Ilgas žodis yra 7 simbolių ilgio arba didesnis, o trumpas yra 6 simbolių ilgio arba
trumpesnis
*/

function ilgis2(a){
    let ilgis2=0
    for(let i=0;i<a.length;i++){
        ilgis2++;
    } if(ilgis2>= 7  ){
        return `Ilgas `
    }else{
        return `Trumpas`
    }
}
console.log(ilgis2('labadiena'));
console.log(ilgis2('ne'));

//Parašykite funkciją, kuri patikrina, ar du žodžiai yra vienodi.

function tikrinti(a,b){
    if(a===b){
        return`Taip vienodi`
    } else{

    } return   `Nevienodi`
};
console.log(tikrinti('jonas','jonas'));
console.log(tikrinti('Jonas','jonas'));
/*Parašykite funkciją, kuri grąžina „Diena“ arba „Naktis“, priklausomai nuo perduotos
valandos (0–23).*/

function diena(valanda){
    if(valanda>=8&&valanda<=20){
        return`Diena`
    }else{
        return `Naktis`
    }
}
console.log(diena(13));
console.log(diena(24));
/*Parašykite vieną funkciją, kuri patikrina skaičiaus vertę, ir jęi:
a. Skaičius yra teigiamas, išveda į console ‘esu teigiamas’
b. Skaičius yra neigiamas, išveda į console ‘esu neigiamas’
c. Skaičius yra nulis, išveda į console ‘esu nulis’
d. Skaičius yra didesnis už 100, išveda ‘didžiulis skaičius’
e. Jei skaičius nėra didesnis už 100, išveda ‘esu mažiukas*/

function tik(skaicius){
    if(skaicius>0){
        return `Esu teigiamas`
    }else if(skaicius<0){
        return `Esu neigiamas`
    }else if(skaicius===0){
        return `Esu nulis`
    }else if(skaicius>100){
        return `Didziulis skaicius`
    }if(skaicius<100){
        return `Esu maziukas`
    }
    
}
console.log(tik(100));
console.log(tik(-100));
console.log(tik(0));
console.log(tik(5));

/*Parašyti funkciją, kuri apskaičiuotų kiek sveikųjų teigiamų skaičių sąraše yra tam tikrų 
skaičių ir išvestų resultatą grafiškai. PVZ: turint sąrašą  [1, 1, 2, 3, 3, 3, 4] rezultatas 
būtų gaunamas toks: */

const sara=[1,1,2,3,3,3,4]

/*
function tiktik(duomenys){
    let skaicius1=duomenys[0];
    let skaicius2=duomenys[1];
    let skaicius3=duomenys[2];
    let skaicius4=duomenys[3];
    
for(let i=0;i<duomenys.length;i++){
    if(duomenys[i]===skaicius1){
        skaicius1++;
        console.log(skaicius1)
    }
}
}
console.log(tiktik(skaicius1));*/

/*. Susikurkite sąrašą 10 miestų, kuriame būtų įvardinami miesto pavadinimai ir jų 
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
kiekvieno miesto. */

//1. 
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
    
    for (let i = 0; i < miestai.length; i += 2) {
        const miestoPavadinimas = miestai[i];
        const atstumas = miestai[i + 1];
       
        if (atstumas <= galimasAtstumas && atstumas > tolimiausiasAtstumas) {
            tolimiausiasMiestas = miestoPavadinimas;
            tolimiausiasAtstumas = atstumas;
        }
    }
    

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
























