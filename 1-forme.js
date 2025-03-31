function didziausiasSkaiciusSarase(duomenys) {
    for (let i = 0; i < duomenys.length; i++){
    if (typeof duomenys[i] !== 'number') {
        return `Pateiktas sąrašas negali būti tuščias.`;
    }

    for (let i = 0; i < duomenys.length; i++) {
        if (!Array.isArray(duomenys) || duomenys.length === 0) {
            return `Pateikta netinkamo tipo reikšmė: ${duomenys[i]}`;
        }
    }

    let didziausias = duomenys[0];
    for (let i = 1; i < duomenys.length; i++) {
        if (duomenys[i] > didziausias) {
            didziausias = duomenys[i];
        }
    }

    return `Didžiausias skaičius sąraše: ${didziausias}`;
}};
    const e7=[-1, -2, -3, -4, -5, -6, -7, -8];
    const b1='Pomidoras'
    console.log(didziausiasSkaiciusSarase(e7));
    console.log(didziausiasSkaiciusSarase(b1));



function string(text){ //// pirmas sprendimo budas. 
    let result='';
for (let i=text.length-1;i>=0;i--){
    result +=text[i];
};
return result;
} ;

console.log(string('abc'));
console.log(string('sula'));
console.log(string('sedek'));

function string(text){ //// kaip kitaip galima apsukti teksta/ 
    let result='';
// 0 [text.length-i]; gaunasi [3-0]= [3]=undefined
// 1[text.length-i];gaunasi [3-1]= [2]= c
// 2 [text.length-i];gaunasi [3-2]= [1]= b 

for (let i=0;i<text.length;i++){
    result+=text[text.length-i-1]; // veidrodinis principas. 
};
return result;
} ;
console.log(string('abc'));
console.log(string('sula'));
console.log(string('sedek'));

function string(text){
    let result='';
    //a  tur ibuti cba
    //b -- tur turi buti cba 
    //c turi gautias cba


    for (let i=0;i<text.length;i++){
        result= text[i]+result; /// uzraso ant virsaus. 
       

//// vienas paprastesniu budu apsukti zodi :) 

    }
    return result;
};

console.log(string('abc'));
console.log(string('sula'));
console.log(string('sedek'));

// ketvirtas budas. 
function string(text){
    if (typeof text!=='string'){
        return `Netinkamo tipo reiksme`;
    }
    let result='';

    for (let i=0;i<text.length;i++){
        result= text[i]+result; /// uzraso ant virsaus. 
       /*
        ""= a+''= 'a'
        'a'=b+'a'='ba'
        'ba'=c+'ba'='cba'*/

    }
    return result;
};
console.log(string('abc'));
console.log(string('sula'));
console.log(string('sedek'));
console.log(string('true'));
console.log(string('stringReverse'));
console.log(string('null'));
console.log(string('null'));
console.log(string('123456'));

console.clear();


function intervalCount(start,end,divider){
    let count=0;
for (let i=start;i<=end;i++){
    if (i%divider===0){
        count++; // reiskia 0+1+1+1.
    }
}
 return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vientai;`
};


console.log(intervalCount(0,11,3));
console.log(intervalCount(0,11,5));
console.log(intervalCount(0,11,7));

// patobutlintas
function intervalCount(start,end,divider){
    let count=0;
    const trueStart=start;
// surasti tikraji starta. 

/// GALUTINIS TIKSLAS YRA FORMULE KURIUOS UZUOMINA  Count=(end-start)/divider;

for (let i=start;i<=end;i+=divider){ // kada vietoje i++ irasome divider. 
    if (i%divider===0){
        count++; // reiskia 0+1+1+1.
    }
}
 return `Skaiciu intervale tarp ${start} ir ${end}, besidalijanciu be liekanos is ${divider} yra ${count} vientai;`
};
console.log(intervalCount(0,11,3));
console.log(intervalCount(0,11,5));
console.log(intervalCount('asd',11,7));
console.log(intervalCount(5,'asd',7));
console.log(intervalCount('asd',11,7));
console.log(intervalCount('asd',true,7));
console.log(intervalCount('null',true,7));
console.log(intervalCount('null',true,intervalCount));

console.log(intervalCount(0,11,5));
console.log(intervalCount(NaN,11,7.1));
console.log(intervalCount(Infinity,11,7.1));
console.log(intervalCount(0,11,Infinity));
console.log(intervalCount(100,11,5));
console.clear();


console.clear();

for (let i=0;i<=20;i++){
    if (i%2===0){
      console.log('Even');
    }else {
      console.log("Odd"); 
    }};






