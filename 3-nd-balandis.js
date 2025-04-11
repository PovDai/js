/*/1. užd. Padarykite funkciją, kuriai perdavus vieną iš (zirkles, popierius, šulinys) reikšmių, 
kompiuteris su jumi sužaistų vaskiči raundą ir išvestų rezultatą į console. Kompiuterio 
pasirinkimai turi būti atsitiktiniai. */

function zaistiVaskici(zaidejoPasirinkimas) {

    const galimiPasirinkimai = ['zirkles', 'popierius', 'šulinys'];
    if (!galimiPasirinkimai.includes(zaidejoPasirinkimas)) {
        return 'Netinkamas pasirinkimas! Galimi variantai: zirkles, popierius, šulinys';
    }

    const kompiuterioPasirinkimas = galimiPasirinkimai[Math.floor(Math.random() * 3)];
    console.log(`Jūs pasirinkote: ${zaidejoPasirinkimas}`);
    console.log(`Kompiuteris pasirinko: ${kompiuterioPasirinkimas}`);

    if (zaidejoPasirinkimas === kompiuterioPasirinkimas) {
        console.log('Rezultatas: Lygiosios!');
        return;
    }

    if (
        (zaidejoPasirinkimas === 'zirkles' && kompiuterioPasirinkimas === 'popierius') ||
        (zaidejoPasirinkimas === 'popierius' && kompiuterioPasirinkimas === 'šulinys') ||
        (zaidejoPasirinkimas === 'šulinys' && kompiuterioPasirinkimas === 'zirkles')
    ) {
        console.log('Rezultatas: Jūs laimėjote!');
    } else {
        console.log('Rezultatas: Kompiuteris laimėjo!');
    }
};
zaistiVaskici('zirkles');
 zaistiVaskici('popierius');
 zaistiVaskici('šulinys');
 zaistiVaskici('sdasdasdasdas');

 /*//2 užd  Parašykite funkcija, kuri parodytų kiek žmonių reikia norint pakelti tam tikro svorio 
krovinį, kai vienas žmogus gali pakelti x kg. Pvz: 10kg svorį turi kelti 5 žmonės, jei vienas jų gali 
pakelti 2.4 kg */

function kelimui(krovinioSvoris,zmogausKelimoGalia){
    return `Reiks ${Math.ceil( krovinioSvoris/zmogausKelimoGalia)} zmoniu pakelti svori`;
}
console.log(kelimui(50,8));

/*/3 užd a) Statybos. Yra planuojamas namo statymas. Parašykite funkciją, kuri, gavusi norimą 
namo aukštį, grąžintų kiek aukštų turės namas. Namo aukštis yra paduodamas tik sveiku 
skaičiumi. Vieno aukšto aukštis gali būti 2 arbe 2.5m aukščio. Vadinasi, 6 metrų namas turės 3 
aukštus (po 2 m), o 5 metrų namas turės 2 aukštus (po 2.5). Taupant vietą yra dedamas 
prioritetas didesniam aukštų skaičiui - jei namo aukštis yra 10 metrų, jis turės 5 2m aukštus. Jei 
namas yra 7 metrų aukščio, jis turės 2 aukštus 2.5 aukščio ir vieną 2 metrų aukščio aukštą. */

function kiekAukstu(NamoAukstis){
if(NamoAukstis%2===0){
    return `Aukstu skaicius po 2m ${NamoAukstis/2} aukstai`;
}if(NamoAukstis%2.5===0){
    return `Aukstu skaicius po 2.5m ${NamoAukstis/2.5} aukstai`;
}else{
    return `Aukstu skaicius po 2.5m ${Math.round((NamoAukstis-(NamoAukstis/2.5-2)*2.5)/2.5)} aukstai plius aukstu skaicius po 2m ${Math.round((NamoAukstis/2.5-2)*2.5)/2}`;
}

};

console.log(kiekAukstu(5));
console.log(kiekAukstu(10));
console.log(kiekAukstu(9));
console.log(kiekAukstu(11));
console.log(kiekAukstu(13));

/*//uzd 3 b) Statome namą iš plytų. Vienos plytos plotis yra 0.2 metrai, o aukštis yra 0.1 metro. 
Parašykite funkciją, kuriai nurodžius namo išmatavimus (plotis, ilgis, aukštis), ji apskaičiuotų 
kiek plytų reikės dėti. (PVZ jei ilgis yra 1m, plotis 2m aukštis yra 2m, turime dėti 600 plytų) */
/*
function plytos(plotis,ilgis,aukstis){
const perimetroPlotis= ((plotis+ilgis)*aukstis)*2
const plytosPlotis=0.2*0.1;
let plytuReikes=perimetroPlotis/plytosPlotis

return `plytu reikes ${Math.round(plytuReikes)}`;
};
console.log(plytos(2,1,2))
console.log(plytos(10,10,10));
/*

/*užd 3 c) Statyti namą kainuoja. Kiekvienas namas turi 1 duris, x plytų ir 6 langus kiekviename 
aukšte. Padarykite funkciją, kuriai pateikus plytų, langų ir durų kainą; bei namo plotį, ilgį ir 
aukštį - ji paskaičiuotų kiek eurų kainuotų pastatyti norimą namą. */

function kaina(plytos,langai,durys,plotis,ilgis,aukstis){
    if(aukstis%2===0){ 
let po2m=aukstis/2
let perimetr= ((plotis+ilgis)*2)*2
let  plytplotis=0.2*0.1;
let plytosKain=(perimetr/plytplotis)*plytos

let  namoKai=po2m*(durys+(6*langai)+plytosKain);

        return `Namo kaina po 2m sienas statant ${Math.round(namoKai)} Eur`;
    }if(aukstis%2.5===0){ 
let po25m=aukstis/2.5
let perimetroPloti= ((plotis+ilgis)*2.5)*2
let  plytosPlot=0.2*0.1;
let plytosKainuos=(perimetroPloti/plytosPlot)*plytos
let  namoKain=po25m*(durys+(6*langai)+plytosKainuos);

        return `Namo kaina po 2.5m sienas statant  ${Math.round(namoKain)} Eur`;
    }else{ 
        let po2m=aukstis/2
        let perimetroPlo= ((plotis+ilgis)*2)*2
        let  plytosPl=0.2*0.1;
        let plytosKainu=(perimetroPlo/plytosPl)*plytos
        
        let    Aukstaipo2m=po2m*(durys+(6*langai)+plytosKainu);
        
        let po25m=aukstis/2.5
        let perimetroPlot= ((plotis+ilgis)*2.5)*2
        let  plytosPlot=0.2*0.1;
        let plytosKai=(perimetroPlot/plytosPlot)*plytos

        let     Aukstaipo25m=po25m*(durys+(6*langai)+plytosKai);

        let    bendraSuma=Aukstaipo2m+Aukstaipo25m;

        return`Namo kaina  ${Math.round(bendraSuma)}Eur`;
    }
};
console.log(kaina(1,1000,500,1,2,12));
console.log(kaina(1,50,100,1,2,6));
console.log(kaina(2,10,100,1,2,7));
console.log(kaina(0.5,30,200,1,2,11));
/*//uzd 4. Kalėdų senelis pakeitė darbą ir tapo gimtadienio dėde. Vietoj gerų ir blogų vaikų, jis 
dosniai apdovanoja ypatingus gimtadienius (1, 5, 10, 15, 16, 18, 20 ir visi kiti jubiliejai) ir nelabai 
gerai apdovanoja paprastus gimtadienius. Padarykite du sąrašus - vieną su nuostabiomis 
dovanomis (vienaragis, pilis, mašina, ...), kitą su nefainomis dovanomis (kojinės, ananasas, jau 
skaityta knyga, ...). Padarykite funkciją, kuriai pateikus jūsų metus, ji pasveikins su gimtadieniu 
ir padovanos atitinkamą dovaną. */

const jubiliejai=[
    {age:1, dovana:'Vienaragis'},
    {age:5, dovana:'Pilis'},
    {age:10, dovana:'dviratis'},
    {age:15, dovana:'Motociklas'},
    {age:18, dovana:'Masina'},
    {age:25, dovana:'Butas'},
    {age:2, dovana:'Ananasas'},
    {age:8, dovana:'Pazymiu knygele'},
    {age:12,dovana:'Kojines'},
    {age:3, dovana:'Bananas'},
    {age:4,dovana:"Nieko"},
    {age:7, dovana:"nieko +1"},
    {age:9, dovana:'Piestukas'},
];
function dovanai(metai){

for(const {age,dovana}of jubiliejai){ 
    if(metai===age){
   return `Gimtadienio  dovana ${age} proga, yra ${dovana}`
    }else {
    }
}
return `Tokiems metams dovana nenumatyta`

};
console.log(dovanai(5));
console.log(dovanai(15));
console.log(dovanai(26));
/// reikia perdaryti su math random, ifais ir sarasu su juo. 

function dovanosPagalMetus(metai){
const geri = ['Vienaragis', 'Masina', 'Butas','Pilis','Sala','Kruizas po pasauly','1000 000 eur']
const nelabai=['Kojines','Bananas','Ananasas','Piestukas','obuolys','pirstines','akiniai','delfi prenumerata']


    if(metai===1||metai===18||metai===16||metai%5===0){
        const jubiliejausDovana = geri[Math.floor(Math.random() * geri.length)];
        return `Labai gera dovana ${metai} jubiliejaus proga: ${jubiliejausDovana}`
    }else{
        const iprastaDovana=nelabai[Math.floor(Math.random()*nelabai.length )];
        return `Numatoma dovana ${metai} gimtadieniui: ${iprastaDovana}`;
    }
    };

    console.log(dovanosPagalMetus(3));
    console.log(dovanosPagalMetus(5));
    console.log(dovanosPagalMetus(18));
    console.log(dovanosPagalMetus(16));
    console.log(dovanosPagalMetus(36));
    console.log(dovanosPagalMetus(35));
    console.log(dovanosPagalMetus(2));

/// kazino rulete :) 
let skaiciai=[];
for(let i=0;i<=35;i++){
    skaiciai.push(i)
};
const atsitiktinis=skaiciai[Math.floor(Math.random()*36)];
console.log('Rulete isrideno skaiciu',atsitiktinis)
/// kauliuko ridenimas. 
let skaicius=[];
for (let i=1;i<=6;i++){
    skaicius.push(i);
};
const ridenu=skaicius[Math.floor(Math.random()*6 )];
console.log('Kamuoliukas isrideno',ridenu);
/*
/// vaskici

const kombinacijos=['zirkles','sulinys','popierius'];

const manoKombinacijos=kombinacijos[Math.floor(Math.random()*kombinacijos.length )];

console.log(manoKombinacijos);

const kompiuterioKombinacijos=kombinacijos[Math.floor(Math.random()*kombinacijos.length )];
console.log(kompiuterioKombinacijos);

if(kompiuterioKombinacijos===manoKombinacijos){
    return `Lygiosios`
}if  (  (manoKombinacijos === 'zirkles' && manoKombinacijos === 'popierius') ||
        (manoKombinacijos === 'popierius' && manoKombinacijos === 'šulinys') ||
        (manoKombinacijos === 'šulinys' && manoKombinacijos === 'zirkles')
){
            return `As laimejau !!!`
        }else{
           
        };
        return `Kompiuteris laimejo`

/// uzbgti su vaskici reiks */


// simple skaiciuotuvas

export function suskaiciuok(a,b,zenklas){
    if(b===0){
        return `Dalyba is nulio negalima`;
    }
    if(zenklas==='+'){
        return `Rezultatas sudedant: ${a}+${b}=${a+b}`;
    }if( zenklas==='-'){
        return `Rezultatas atemant: ${a}-${b}=${a-b}`;
    }if(zenklas==='*'){
        return `Rezultatas dauginant: ${a}*${b}=${a*b}`;
    }if(zenklas==='/'){
        return `Rezultatas daulinant: ${a}/${b}=${a/b}`;
    }if(zenklas==='**'){
        return `Rezultatas keliant laipsniu: ${a}**${b}=${a**b}`;
    }
    };
    console.log(suskaiciuok(2,10,'/'));
    
    function getPlanetName(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury'
            break;
          case 2:
            name = 'Venus'
            break;
          case 3:
            name = 'Earth'
            break;
          case 4:
            name = 'Mars'
            break;
          case 5:
            name = 'Jupiter'
            break;
          case 6:
            name = 'Saturn'
            break;
          case 7:
            name = 'Uranus'
            break;
          case 8:
            name = 'Neptune'
            break;
        }
    
        return name;
    
      }
      console.log(getPlanetName(3));

      /*. Parašykite funkciją, kuri išvestų skaičiaus faktorialą 
2. Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba 
sakinyje 
3. Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50 
4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas 
5. Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje 
6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore) 
7. Sukurk funkciją, kuri padvigubina visus skaičius masyve 
8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje 
9. Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka 
10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7 
11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide 
12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą 
13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų 
reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 
6] ) 
14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose 
yra raidė e  */


// faktorialas

function faktorial(skaicius){
   let naujas=[];/// pasidarom arraiju 
   for(let i=skaicius;i>0;i--){
    naujas.push(i);// ispaudziam arejui viskas reiksmes 
   };
   const ats=naujas.reduce((total,n)=>total*n,1); //reducinam 
 return ats;
}
console.log(faktorial(5))

//  Parašykite funkciją, kuri apskaičiuotų kiek kartų tam tikra raidė pasikartojo žodyje arba sakinyje 

function kartotis (duomenys){
    let count=0;
    let ieskoma='a';
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]===ieskoma){
            count++
        }
    }
    return count;
};
console.log(kartotis('labas rytas lietuva, jau atkeliavome '))
// 3. Padarykite funkciją, kuri grąžintų visus skaičiaus 3 kartotinius nuo 1 iki 50 

function kartotinis(min,max){
    let kartotiniai=[];
    for(let i=min;i<max;i++){
        if([i]%3===0){
            kartotiniai.push(i)
        }
    }
    return kartotiniai;
}
console.log(kartotinis(1,50));

// 4. Parašykite funkciją, kuri patikrintų ar duotas žodis yra palindromas  

function palindro(zodis){
    let naujas='';

    for(let i=zodis.length-1;i>=0;i--){
        naujas+=zodis[i];
        if(naujas===zodis){
            return `${zodis} yra palindromas nes zodis apsukus gaunasi reiksme ${naujas}`        
    } else{
    } 
}
return `${zodis} nera palindromas nes zodis apsukus gaunasi reiksme ${naujas}` 
};
console.log(palindro('aba'));
console.log(palindro('abba'));
console.log(palindro('caca'));

// Parašyk funkciją, kuri suskaičiuoja kiek balsių yra žodyje .

function balses(duomenys){
    let count=0;
    let balses=['a','e','i','o','u']

    for(let i=0; i<duomenys.length;i++){
        if(balses.includes(duomenys[i])){
            count++
        }
    }
    return count;
}
console.log(balses('labas rytas Lietuva'));

// 6. Sukurk funkciją, kuri visus tarpus tekste pakeičia pabraukimais (underscore) 

function pabraukti(tekstas){

    let naujas=tekstas.replaceAll(' ','_');

    return naujas;
}
console.log(pabraukti('Labas rytas Lietuva, kaip laikaisi'));

//7. Sukurk funkciją, kuri padvigubina visus skaičius masyve 

function duX(duomenys){
let skaiciai=[];
for(const n of duomenys){
    skaiciai.push(n*2 )

}
return skaiciai;
}
console.log(duX([5,4,3,2,1]))

function duY(duomenys){
    let nauji=[];
    for(const n of duomenys){
        nauji.push(n*2);
    }
    return nauji;
}
console.log(duY([2,3,5,4,5]));

//8. Sukurk funkciją, kuri suranda ilgiausią žodį sakinyje 

function ilgiausia(duomenys){
    let zodziai=duomenys.split(' ');
    let ilgis=zodziai[0].length

for(let i=0;i<=zodziai.length-1;i++){
    if(zodziai[i].length>ilgis){
       ilgis=zodziai[i].length;
    }
    }
    return`Ilgiausias zodis sakinyje yra ${ilgis} raidziu`
};

console.log(ilgiausia('laba diena kaip jus gyvenate'));
///9.Funkcija, kuri išrikiuoja žodžius pagal ilgį didėjančia tvarka 

function rikiuoti(duomenys){
    let naujas=duomenys.split(' ');
console.log(naujas);

return naujas.sort((a,b)=>a.length-b.length).join(' ')
};
console.log(rikiuoti('Sveiki kaip gyvenate ar yra kazko naujo pas jus'));

function pakartojimui(duomenys){
    let naujiena=duomenys.split(' ');

return naujiena.sort((a,b)=>a.length-b.length).join(' ');
};
console.log(pakartojimui("Sveiki visis kaip laikoties ir ar yra kas gero "))

/// 10. Funkcija, kuri grąžina pirmą skaičių masyve, kuris dalinasi iš 7 

function grazinti(duomenys){
    let skaicius=[];
    for(let i=0;i<duomenys.length;i++){
        if(duomenys[i]%7===0){
            skaicius.push(duomenys[i]);
        }
    }

return skaicius[0];
}
console.log(grazinti([1,2,3,4,5,6,14,21,28]));

// arba  su for of motodu. 

function grazinam(duomenys){
    let number=[];
    for(const numeriai of duomenys){
        if(numeriai%7===0){
            number.push(numeriai);
        }
    }
    return number[0];
};
console.log(grazinam([1,2,3,4,5,6,14,21,28]));







//11. Funkcija, kuri priima masyvą vardų ir grąžina tik tuos, kurie prasideda „A“ raide 

function aPrasideda(duomenys){
    let naujasMasyvas=[];
 for(const vardai of duomenys){
    if(vardai[0]==='A'){
        naujasMasyvas.push(vardai);
    }
    } 
    return naujasMasyvas;
    };

console.log(aPrasideda(['Jonas','Petras','Maryte','Azuolas','Agota']));

//12. Funkcija, kuri turi sąraše rasti skaičių, kuris jame kartojasi daugiau nei vieną kartą 

function radom(duomenys){

return duomenys.filter((skaicius,indeksas)=>duomenys.indexOf(skaicius)!==indeksas);
};
console.log(radom([1,2,3,4,5,2]));
console.log(radom([1,2,3,3,5,8]));

/* 13. Sukurk funkciją, kuri grąžins visus duoto sąrašo skaičius, kurie yra tarp dviejų nurodytų 
reikšmių ([2, 5, 36, 8, 15, 6] masyvui nurodžius 5 20 intervalą, bus grąžinama [5, 8, 15, 
    6] ) */

function ieskome(duomenys, intervalas) {
    const min = Math.min(...intervalas);
    const max = Math.max(...intervalas);
    return duomenys.filter(skaicius => skaicius >= min && skaicius <= max);
}
console.log(ieskome([2, 5, 36, 8, 15, 6], [5, 20]));




/*14. Parašykite funkciją, kuri iš žodžių sąrašo išrinktų ir grąžintų tik tuos žodžius, kuriuose 
yra raidė e  */
function suraskE(sakinys){
    let zodziai=[];
    let raide='e'
    let sakinysMasyvu=sakinys.split(' ');

    for(let i=0;i<sakinysMasyvu.length;i++){
        if(sakinysMasyvu[i].includes(raide)){
            zodziai.push(sakinysMasyvu[i]);
        }
        }
        return zodziai.join(' ')
    };

console.log(suraskE('laba diena jau penktadienis o jums diena praejo jau ?'))














