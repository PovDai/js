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

namoKaina=po2m*(durys+(6*langai)+plytosKain);

        return `Namo kaina po 2m sienas statant ${Math.round(namoKaina)} Eur`;
    }if(aukstis%2.5===0){ 
let po25m=aukstis/2.5
let perimetroPloti= ((plotis+ilgis)*2.5)*2
let  plytosPlot=0.2*0.1;
let plytosKainuos=(perimetroPloti/plytosPlot)*plytos
namoKaina=po25m*(durys+(6*langai)+plytosKainuos);

        return `Namo kaina po 2.5m sienas statant  ${Math.round( namoKaina)} Eur`;
    }else{ 
        let po2m=aukstis/2
        let perimetroPlo= ((plotis+ilgis)*2)*2
        let  plytosPl=0.2*0.1;
        let plytosKainu=(perimetroPlo/plytosPl)*plytos
        
        Aukstaipo2m=po2m*(durys+(6*langai)+plytosKainu);
        
        let po25m=aukstis/2.5
        let perimetroPlot= ((plotis+ilgis)*2.5)*2
        let  plytosPlot=0.2*0.1;
        let plytosKai=(perimetroPlot/plytosPlot)*plytos

        Aukstaipo25m=po25m*(durys+(6*langai)+plytosKai);

        bendraSuma=Aukstaipo2m+Aukstaipo25m;

        return`Namo kaina  ${Math.round( bendraSuma)}Eur`;
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

function dovanosPagalMetus(metai,vardas){
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



