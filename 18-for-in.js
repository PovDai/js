//// for in eina per objektus


const person={
    name:'Jonas',
    age:99,
    isMarried:true,
};// pirmas budas 
const keys=Object.keys(person); //object.keys automatizuota eilute grazina array raktu [ 'name', 'age', 'isMarried' ] pagamina masyva toki. 
console.log(keys);

for(const key of keys){
    console.log(person[key]);
}

//// antras budas 
for(const key in person){ //// for inas reiskia issitraukia is objecto reiksmes visas. 
    console.log(person[key]);
}
///////////////// kaip automatizuoti objekta. surasti didziausia raides kieki. ISSIANALIZUOTI SITA SPRENDIMA 
const text='pavasaris'; // uzdavinys rasti is zodzio daugiausiai vienodu raidziu ir kiek ju yra. 
const symbols={};
for(const s of text){
    if(symbols[s]){ /// cia ifas eina teigiamas del to pridedines. 
        symbols[s]++;

    }else{
        symbols[s]=1;
    }
}
let max=0;
for(const s in symbols){/// surandame kieki didziausia pasikartojancios raides. 
    if(symbols[s]>max){
        max=symbols[s];
    }

}
console.log(max);

const maxSymbols=[]; //// surasti raide kuri turi didziausia skaiciu. 
for(const s in symbols){
    if(symbols[s]===max){
        maxSymbols.push(s);
    }
}
console.log(maxSymbols);


function myLanguages(results) {
    const keys=Object.keys(results) /// issidaliname raktus [Java Ruby Python ]
      let naujas=[];
    
        for(let i=0;i<keys.length;i++){
          if(results[keys[i]]>=60){
            naujas.push(keys[i])
          }
        }
        naujas.sort((a, b) => results[b] - results[a]);
    
    return naujas;
    
    }
    console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));





