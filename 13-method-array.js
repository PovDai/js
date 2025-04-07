/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*/

// .push () i gala nustumiam nauja kintamaji.Galima ir daugiau reiksmiu itraukti i gala. 

const list=[];
console.log(list);

/*[ 10 ]
[ 10, 2 ]
[ 10, 2, 8 ]
*/

list.push(10);
console.log(list);

list.push(2);
console.log(list);
list.push(8);
console.log(list);
list.push(8,6);
console.log(list);
list.push(8,6,5,3,2,1,); // neribotas kiekis galima pagal ideja. 
console.log(list);
list.push(8,'awdawsd');// galima ir stringus ipushint
console.log(list);

const numbers=[10,2,8,4,6]
const daubleNumbers=[];
for(let i=0;i<numbers.length;i++){
    const number=numbers[i] /// isspauzdino visa eilute tiesiog.// bet ja panaikina 
    daubleNumbers.push(number*2);// isspauzdina per naujo visa eilute ir padauginam is 2 
}
console.log(daubleNumbers);// isspauzdinam 
//// 
const names=['Jonas','Maryte','Petras','Ona'];
const nameSize=[];
const nameFirstLetters=[];
const upperCaseNames=[];
//// JEIGU SURASTI vardus, VARDO ILGI, PIRMA RAIDE, VISUS VARDUS DIZIOSIOMIS PADAROM. 



for(let i=0;i<names.length;i++){
    const name=names[i];// parodo visus vardus. ir visus nunulina 
    console.log('---',name, name.length,name[0])
    nameSize.push(name.length) // vardo ilgi sukuria 
    nameFirstLetters.push(name[0]); // pirma raide paima
    upperCaseNames.push(name.toLocaleUpperCase()); /// visus vardus padarom DIDZIOSIOMIS.
}
console.log(nameSize);
console.log(upperCaseNames);
console.log(nameFirstLetters);

const n1=[1,11,11];
const n2=[2,22,222,2222];
const n12=[];

// const n12=[1,11,111,2,22,222,2222];

for(let i=0;i<n1.length;i++){/// vienas bus vienoje dalyje 
    n12.push(n1[i]);// jeigu cia irasysim n2[i] papildomai eitu pirmas antras pirmas antras n1 n2 n1 n2 
}
for(let i=0;i<n2.length;i++){ ///kitas kitoje dalyje 
    n12.push(n2[i]);
};

console.log(n12);

function wave(str){
    let zodziai=[];
  for(let i=0;i<str.length;i++){
    const zodis=str[i];
  }
    return zodziai;
  }
  console.log(wave('hello'));
  

  const numbers2=[10,2,8,4,6];
  console.log(numbers2)

  numbers2.push(9)
  console.log(numbers2);
//// .pop() PASALINA PASKUTINI ELEMENTA, IR JI GRAZINA JEIGU REIKIA. 
  numbers2.pop()
  const g1=numbers2.pop()/// jeigu pavadinam ji per let arba const gale po masyvo ji parodo ka pasalino. 
  console.log(numbers2,g1);


/// unshift() itraukia i prieki elemento 

numbers2.unshift(1);
console.log(numbers2)

/// shift() is prieko pasalina nari. 


numbers2.shift();
const g2=numbers2.shift()
console.log(numbers2,g2) /// irgi grazina ka pasalina is priekio 

/// includes() patikrina ar egzistuoja siame sarase reiksme arba ne ir grazina true arba false reiksme. 

const magic=[11,22,33,44,55,66];
console.log(magic.includes(55));
console.log(magic.indexOf(44));

// ondexOf() grazina skaiciaus arba zodzio reiksme. 

console.log(magic.indexOf(44));

/// join() sujungs norimus saraso elementus. Jeigu jokio tekso neidesim, per kalbeli sujungs. 

const text=['agurkas','pomidoras','svogunas','paprika'];
// reikalingi produktai:a,b,c,d.

const products=`Reikalingi produktai:${text.join(',')}`

console.log(products)







