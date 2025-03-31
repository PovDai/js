/*
For (loop) - ciklas 
*/

for (let i=1;i<=5;i++){
    console.log('number:',i)
};

for (let i=5;i<10;i++){
    console.log('number:',i)}; // nieko nisspaudins nes loopas nuo 5<5 nesutinka.Spauzdina ne imtinai . nes <

console.log('-----------------------');


    for (let i=5;i>0;i--){ // NAUDOJAMAS APSUKIMUI. 
        console.log('APSUKIMAS:',i)};  // nes pradedame nuo 5 del to jis varys iki infinity -




console.log('------cia ieskoti-------');
// 0,1,2,3,4,
//0,2,4,6,8,   /// jeigu reikia israsyti kas 2 vieneta kas antra reiksme, +=2. 

for (let i=0;i<11;i+=2){
    console.log('number:',i)};

    console.log('-------------');
    
    for (let k=4;k<5;k++){
        console.log('number:',k)};

        console.log('--------------');

 for (let k=4;k<5;k+=0.1){
     console.log('number:',k)}; /// su desimtainiais skaiciais. 

     for (let k=0;k<10;k++){
        console.log('number:',k/10)};// jeigu padaryti ne desimtinai /10 padarom  jeigu norime iki 0.1 dalies skaicius pateikti. 
    console.log('--------------');
    for (let k=0;k<10;k++){
        console.log('number:',k/100)};// jeigu reikia atvaizduoti iki ct pvz 1.53 euro. 3.99 eur darysis 399 :) jeigu reikse 3
    
        for (let k=0;k<5;k++){
            console.log('Labas:')}; // jeigu reikia kad 5 lkartus ispauzdintu zodi labas;. 

            console.log('--------------');
// ispauzdinti 7 daugybos lentele iki 10. 

const n=8;// skaicius kurios daugybos lentele darome. 


for (let k=1;k<11;k++){
    console.log(`${n}*${k}=${n*k}`);
};
// jeigu norime padaryti 10 skaiciu iskarto visu daugybos lentele/. 

// Kaip tiklas naudojamas su masyvais. Jeigu norime masyvo suma susumuoti. 

const marks=[10,2,8,4,6];
let sum=0; ////////// cia rankinis budas kaip suskaiciuoti. 
sum+= marks[0];// reiskia suma +10
sum+= marks[1];// reiskia 10+2
sum+= marks[2];// reiskia 12+8
sum+= marks[3];// reiskia 20+4
sum+= marks[4];// reiskia 24+6

console.log(sum);

let sum2=0; /// su ciklu suskaiciuojame. 

for(let i=0;i<5;i++){
    console.log('i reiskme lygu 0 pozicijoje:',i,'--->', marks[i] );
    sum2+=marks[i];

};
console.log('atsakymas bus:', sum2);

// jeigu reikia pasidaryti masyvo ilgi ir ji itraukti i for ciklo formule. 

console.log('----------------cia-------------');

for(let i=0;i< marks.length ;i++){ /// vietoje ciklo ilgio irasome formule koks ilgis. 
    console.log('i reiskme lygu 0 pozicijoje:',i,'--->', marks[i] );
    sum2+=marks[i];// reiskia suma + pazymiai iki ciklo galo.  // i yra skaicius, [i] pozicije arejuje. 

};
console.log('atsakymas bus:', sum2);// isloginame sumos atsakyma. 

const names=['jonas','maryte','petras','ona'];

// sugeneruoti vardas yra VARDAS. 

for (let i=0;i<names.length;i++){
    console.log( `Studento vardas yra '${names[i]}'.` )};

// arba kitoks .


for (let i=0;i<names.length;i++){
    const vardai=names[i];
    console.log(`Vardas yra: ${vardai}`);
}

// Vardas "VARDAS" yra sudarytas is N raidziu.

for (let i = 0; i < names.length; i++) {
    const name = names[i]; // Susikuriam kontanta kuri duoda visus vardus 
    const s = `Vardas "${name}" yra sudarytas is ${name.length} raidziu.`;// sharinam vardus ir pridedam tekstu jo ilgius. 
    console.log(s);
};
// kitas budas, bet geriau pirmasis budas su constantom.

for (let i = 0; i < names.length; i++){
    console.log(`Vardas ${names[i]} yra sudarytas is ${names.length} raidziu;`);
}
console.log('----------------cia----------');

for (let i=0;i<=20;i++){
    if (i%2===0){// dalinasi is 2 
        console.log('atsakymas yra:',i);
        
    }
};

/// kitas jeigu duotas const n=4;

const n5=4;

for (let i=0;i<=20;i++){
    if (i%n5===0){// dalinasi is 2 
        console.log('atsakymas yra:',i);
        
    }
};



