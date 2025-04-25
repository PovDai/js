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
// reverse() - apsuka rezultatus is kito galo. // jeigu du kartus apsuksim grisim prie pirmnos reiksmes. 

const b=[1,2,3,4,5];
console.log(b.reverse().reverse());
/// concat() - prijungia prie vieno masyvo antra masyva, galima concat() kelis kartus sujungiant kelis. 

const c14=[1,11];
const c2=[2,22];
const c3=[3,33];
const c4=[4,44];

const c12=c14.concat(c2).concat(c4).concat(c3);
console.log(c12);

const c15=c3.concat(c4);
console.log(c15)

const c1234=c12.concat(c14,c3,c4); // galima irasyt i eilute ne viena duomeni, apjungiami skirtingi masyvai. 

const c1111=c12.concat(c14,c14);/// galima ir tuos pacius masyvus panaudoti kelis kartus nera skirtumo. 

// splice()jis paima ir pasalina nurodytas reiksmes is saraso. Grazina sarasa be ju. 

const h=[11,22,33,44,55];

console.log(h.splice(0)); // viska istrina lieka tuscia. 
console.log(h.splice(1,2));// isima 22 ir 33 lieka 11 44 55 
console.log(h.splice(2)); // lieka 11 22  44 55 
console.log(h.splice(0,2))// 

// reverse() funkcija grazina atbulini teksta 

const reverseString=text=> text.split('').reverse().join('');

console.log(reverseString('jonas'));
console.log(reverseString('kedes'));
console.log(reverseString('alus'));
console.clear();

/// map() sudaro nauja objekta per rodykline funkcija. Padaro su veiksmais. 
console.log('---cia MAPAS------')
const f=s=>s[0];

const k=[10,2,8,4,6];
const k2=[];

for(const n of k){ /// [ 20, 4, 16, 8, 12 ] // n yra tas pats kaip i vieta skaiciaus array eiluteje 
  k2.push(n*2)
}
console.log(k2)
//// jeigu patrigubinam. 

function triple(n){
  return n*3;
}

const k3=k.map(triple)///[ 30, 6, 24, 12, 18 ]
console.log(k3)


const quadro =n=>n*4;/// [ 40, 8, 32, 16, 24 ]
const k4=k.map(quadro);
console.log(k4);

const k5=k.map(n=>n*5);//  [ 50, 10, 40, 20, 30 ] // reiskia eilute nauja k5 ima k duomenis kuriuos (n nari => daro i n narys *5 pvz)
console.log(k5);

const k6=k.map(n=>n);
console.log(k6); // kopija gausis. 

const k7=k.map(n=>n+1); /// naujas masyvas su +1 gaunamas. 
console.log(k7);

const dict=['pomidoras','agurkas','bulve','svogunas'];
const dict2=dict.map(w=>w[0]);/// gavome pirmas raides zodziu. 
console.log(dict2);
const d3=dict.map(w=>w.length);
console.log(d3) /// gauname zodziu ilgio reiksmes. 


const people=[
  {name:'Jonas', age:99},
  {name:'Maryte',age:88},
  {name:'Petras',age:77},
  {name:'Ona',age:66},

];
/// p pavadintas sutrumpintas person. 
const people100=people.map(p=>`${p.name} liko ${100-p.age} metai.`) /// 'Petras liko 23 metai.', kaip pvz 
 
console.log(people100);

const peopleNames=people.map(p=>p.name); /// ispauzdina tik vardus. 
console.log(peopleNames)

const peopleAges=people.map(p=>p.age);// isspauzdina tik amziu. 
console.log(peopleAges);

const peopleMarried=people.map(person=>{ /// kaip prideti papildoma rakta i objekta/ 
  person.isMarried=true;
  person.luckyNumber=13
  return person;
});
console.log(peopleMarried);

// filter();pasislepes ciklas, eina per masyva ir atlieka viduja gauta funcija. (n=>n>6);  pvz ar n daugiau negu 6
const p=[10,2,8,4,6];
const p5=[];

for(const n of p){
  if(n>5){
    p5.push(n)
  }
}
console.log(p5);


const p6=p.filter(n=>n>6); // vietoje pasilieka jeigu didesni uz 6.n yra kiekvienas skaicius masyva kuri tikrina funkcija 
console.log(p6);


const p8=p.filter(n=>n>2&&n<8);
console.log(p8);


const texts5=['labas','','rytas','','Lietuva'];
const texts5Updated=texts5.filter(t=>t.length>0); // pasileika teksta be tarpu masyva [ 'labas', 'rytas', 'Lietuva' ]  
console.log(texts5Updated);

const texts5Updated2=texts5.filter(t=>t);   /// irgi toks pats atsakymas. Tuscias tekstas negatyvi reiksme del to jis praleidziamas. 
console.log(texts5Updated2);

/// kai naudojamos FILTER visos 3 reiksmes, pirma reiksme array reiksme, antra indexas jo, trecia pats pirmas array 
const numbers = [10, 20, 30, 40, 50];

const filteredNumbers = numbers.filter((element, index, array) => {
  console.log(`Elementas: ${element}, Indeksas: ${index}, Visas masyvas: [${array}]`);
  
  // Grąžiname `true`, jei:
  // 1. Elementas > 20 IR
  // 2. Indeksas yra lyginis (0, 2, 4...) IR
  // 3. Elementas nėra paskutinis masyve
  return element > 20 && index % 2 === 0 && index !== array.length - 1;
});

console.log("Filtruotas masyvas:", filteredNumbers);


/// ${array1.at(index)} kai reikai ieskoti pirmos raides is 3 zodziu 
//let perdarytas=patikslintas.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')+'';


// sort
/// every 
//fill
// reduce

// Array().fill() array sukuria kiek bus o fill kokios bus. 

const default5=[0,0,0,0,0];
const default7=Array(7).fill(99)// Arrejus 7 poziciju kuriu reiksme bus [99,99,99,99,99,99,99]
console.log(default7);

const zeros=Array(10).fill(0);// array butinas nes sukuriam kiek bus poziciju o fill kokios jos bus 
console.log(zeros)

const emptySpace=Array(4).fill('')//[ '', '', '', '' ]
console.log(emptySpace);

const labas5=Array(5).fill('labas');
console.log(labas5);

const demo=[10,2,8,4,6];

demo.fill(777); // jeigu supildysim uzpildes esama array su nauja reiksme. 
console.log(demo)// Dazniausiai naudojamas kaip kuri nauja masyva norimo dydzio. 

// every() panasu i map ir filter, eina kaip ciklas per visa array Duoda true arba false; TRUE FALSE 

const trees=['uosis','egle','azuolas','tuopa'];


const allTreesValid=trees.every(s=>s.length>0); // arba visi elementai tenkina salyga jeigu netenkina bent 1 fallse. 
console.log(allTreesValid);
const allTreeNameSize5=trees.every(s=>s.length===5);// jeigu ne visi 5 ilgiu, duos false. 
console.log(allTreeNameSize5);

// some() kai kuriam salyga turi tenkinti bent vienas.TRUE FALSE.

const someTreesValid=trees.some(s=>s.length>0);
console.log(someTreesValid); /// ats bus true nes bent 1 bus didesnis uz 0;

/// sort metodas. Rikiuoti reiskia viskas yra abeceles tvarka rusiuojama, is pradziu Didziosios paskui eina mazosios.
//
const texts=['labas','rytas','lietuva','duona','aviza','Zirnis','Anakonda'];

console.log(texts);
texts.sort()
console.log(texts);

const pseudo=['d','b','c','a','bf','ba','cc','db','aaa']//Jis pagal chardoze rusiuoja // is pradziu pagal pirma simboli,paskui pagal antra simboli. 
pseudo.sort();
console.log(pseudo);

///  su skaiciais sort((a, b) => a - b)  jeigu norim kad kaip normalius skaicius susortintu. 

const numbersi= [10,2,8,4,6,1,12].sort((a, b) => a - b) //    1,  2,  4, 6,10,12
console.log(numbersi); // 10-2=8 keicia  / 2-8=-6 nekeicia/8-8=0 irgi nekeicia. 

numbers.sort((a,b)=>b-a); /// atbuline tvarka susortina 12,10,6,4,2,1
console.log(numbers);

/// sort metodas skaicius sukeicia tik tada jeigu funkcija grazina teigiama skaiciu. 

const peopleNamess=[
{name:'Jonas',age:77,isMaried:false},
{name:'Maryte',age:66,isMaried:true},
{name:'Petras',age:99 ,isMaried:true},
{name:'Azuolas',age:88,isMaried:true },

];
peoplee.sort((a,b)=>a.age-b.age); // isrikiuoja pagal amziu. 
peoplee.sort((a,b)=>a.name.length-b.name.length);// pagal vardo ilgi isrikiuoja 
peoplee.sort((a,b)=>a.name>b.name?1:-1);// pagal abecele sulygina charcoda.
peoplee.sort((a, b) => a.isMarried > b.isMarried ? 1 : a.isMarried === b.isMarried ? 0 : -1);
console.log(people);
// reduce () sumazinti, supaprastinti 

const marks=[10,2,8,4,6];
let sum=0;//// ilgasis variantas 
for(const n of marks){
    sum+= n;
}
console.log(sum);

const sum2=marks.reduce((total,n)=>total+n);// total kaupia rezultata o antras n masyvo kiekvienas is elemetu. 
console.log(sum2)

const su3=marks.reduce((total,n)=>total-n);// 10-2-8-4-6 is pirmo atimama kitus. 
console.log(su3)
console.log('------- nuo 0 pvz skaiciuotu----'); // po n irasyti galime nuo kiek pradeti sudeti atimti 

const sum6=marks.reduce((total,n)=>total+n,0);// jeigu nurodai kad nuo 0 skaiciuotu 
console.log(sum6);

const su7=marks.reduce((total,n)=>total-n,0);// jeigu nurodai kad nuo 0 skaiciutu 
console.log(su7);

console.log('------daugyba-----');


const su4=marks.reduce((total,n)=>total*n,1);// 10*2*8*4*6 // nes jeigu 0 irasysim nesuveiks. tai nuo 1 
console.log(su4)
const su5=marks.reduce((total,n)=>total/n,1);// 10/2/8/4/6// nes jeigu 1 irasysim neveiks. 
console.log(su5)


const names=['Jonas','Maryte','Petras','Juozas'];

let abbr='';
for(const name of names){
    abbr=name[0]+'.';
}
console.log(abbr);
/// cia su reduce  pavyzdys kaip paimti pirmas raides. Is daug reiksmiu padaro viena reiksme.

const abbr2=names.reduce((total,name)=>total+name[0]+'.','');
console.log(abbr2);


/// slice() veikia ir masyve. 

const names=['Jonas','Maryte','Petras','Ona'];
const n1=names[0];
const n2=names[1];
const n34=names.slice(2);

console.log(n1);
console.log(n2);
console.log(n34);

//// masyvas.find() // suranda pirmaji nari atitinkanti salyga. pvz /3 === 0 pirma kuris dalinasi is 3 












