/// for of eina per masyvus. 
const marks=[10,2,8,4,6];
let sum=0;

for(let i=0; i<marks.length;i++){
    const mark=marks[i]; // susikuriam viduje reiksme. ja prisilygini visiems isspauzdinamiems 
    sum+=mark;
}
console.log(sum)
/////////////// GALIMAS TIK TAIP KAIP IMI VISKA IS EILES IR TASKAS O JEIGU REIKIA APSUKT PRIES TAI ATLIEKI VEIKSMUS. 

/// kitaip ciklas
let sum2=0;
for(const mark of marks){ // supaprastinta ciklo variacija. kaip visus is eiles einame. 
    sum2+=mark;
}
console.log(sum2)

const names=['Jonas','Maryte',"Petras"] // jeigu nori atbulai turi sarasa but pasirinkes. 

for(name of names){
    console.log(name)
}

const nameses=['Jonas','Maryte',"Petras"] 
const nameSizes=[];

for (const name of nameses){
    nameSizes.push(name.length); /// pvz sumeta vardu ilgius. 
}
console.log(nameSizes)

const namo=['Jonas','Maryte',"Petras"] ;
const op=[];

for (const name of namo){
    const details={
        name:namo,
        firstLetter:namo[0],
        lastLetter:namo.length-1,
        size:namo.length,
     
    };
    op.push(details) /// pvz sumeta vardu ilgius. 
}
console.log(op)
