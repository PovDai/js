// ...

const a1=[1,11,111,1111];

const a2=[2,22,222,2222];

const a3=[3,33,333,3333];

const a4=[4,44,444,4444];

const a12=a1.concat(a2);/// vienas is metodu sujungti 
console.log(a12);

const b12=[...a1,...a2];/// iskopijuoja a1 ir a2 i viena masyva. 
console.log(b12);

const b234=[...a1,...a3,...a4];
console.log(b234);


/// [7,4,44,444,4444,88]; reikai sukurti. 

const c1=[7,...a4,88]; // 7 ir 88 irasome o kita idedam per tritaski ... 
console.log(c1);

//// su objektais {};


const o1={name:'Jonas'};
const o2={age:99};
const o3={isMarried:true};

const o12={...o1,...o2,...o3};
console.log(o12);/// pasigamino { name: 'Jonas', age: 99 }


const p={a:1};
const p1={b:2};
const p3={c:3, a:7 }; /// itraukiam p3 papildoma reiskme a;7 ja ides pradzioje { a: 7, b: 2, c: 3 }

const p12={...p,...p1,...p3};
console.log(p12);/// gauname { a: 7, b: 2, c: 3 } papildoma a pakeite a7 reiksme. 


const p312={...p3,...p,...p1};/// { c: 3, a: 1, b: 2 } pagamino 
console.log(p312);


const p4={d:4,...p3}; /// galima d;4 paciam irasyti o ant virsaus prideti p3 kuris bus c3 ir papildomas c7 
console.log(p4);/// { d: 4, c: 3, a: 7 } 

//// rest -- galima paimti kuriuos norime o paskui rest sudeti paskutinius. Ispjaustytis pirminis duomenis. 



const marks=[10,2,8,4,6];
const [first,second,...rest]=marks;

console.log(first);
console.log(second);
console.log(rest);

const marks2=[first,second,...rest];
console.log(marks2);
/// su slice metodu 
const names=['Jonas','Maryte','Petras','Ona'];
const n1=names[0];
const n2=names[1];
const n34=names.slice(2);

console.log(n1);
console.log(n2);
console.log(n34);
// kai yra ... jis surenka visas reiksmes likusias i masyva, jeigu nebeliko lieka [] masyvas. 
const [x,y,...z  ] = names;/// z tampa paskutiniais 2 vardais. petras ir ona. Pradzioj issirenka individuales reiksmes. 
console.log(x);
console.log(y);
console.log(z);

const [...g]=names;
console.log(g); //// isspauzdins visas reiksmes [ 'Jonas', 'Maryte', 'Petras', 'Ona' ];


const mix=[1,'asd',true,[],{},undefined];
const [m1,m2,m3,mRest]=mix;
console.log(m1);
console.log(m2);
console.log(m3);
console.log(mRest); // liks tik tuscias masyvas;


const person={
    name:'Jonas',
    age:99,
    isMarried:true,
};

const {name,age,...i} =person;//destrukturizuojam padaron const {}= sulyginam pirmajam pvz person cia. 
console.log(name);// parodys varda
console.log(age); // parodys 99 
console.log(i);// parodys visus likusius. 



const students=[
    {name:'Jonas',age:99},
    {name:'maryte' ,age:88},
    {name:'petras',age:66},
    {name:'juozas' ,age:77},
];

// studentui vardu jonas yra 99 metai.

for(let i=0;i<students.length;i++){
    const {name,age} =students;///  jeigu butu daugiau reiksmiu butu tiesiog , ...rest);
    const rezult=`Studentui, vardu ${name}, yra ${age} metai.`
    console.log(rezult);

}///// zemiau su for ofu padaryta 
for(const {name,age}of students){ /// padaro pirmoje eiluteje kad ieskos students objekte {vardo ir amziaus]
   
    const rezult=`Studentui, vardu ${name}, yra ${age} metai.`/// pateikia rezultata. 
    console.log(rezult);

}
///////// jeigu uzduotis [] darome for (const [kazkas ir like pvz] of kazko (duomenu gautu))
console.log('---------------------')
const numbers=[
    [1,11],
    [2,2,222],
    [3,33,333,3333],
    [4],
    [5],
    [6],
];

/// masyvo pirmas skaicius yra X ir dar yra Y papildomu skaiciu.

for(const numberList of numbers){
    const first=numberList[0];//// pirma reiksme 
    const rest=numberList.slice(1);/// likusios reiksmes 
    console.log(numberList)

    const result =`Pirmas skaicius yra ${first} ir dar yra ${rest.length}  papukdomu skaiciu`;

}
////// arba paprastesnis variantas su masyvu 

for(const [first,...rest] of  numbers){// supaprastinant pasivadinama pirmas first, rest likusieji. 
/// likusios reiksmes 
    const result =`Pirmas skaicius yra ${first} ir dar yra ${rest.length}  papukdomu skaiciu`;
    console.log(result); /// jeigu atsakymas praso pirmo ir likusiuju kiek liko. 
};


/// Math.min(...number[]) /// tritaskis reiskia kad gali buti eile skaiciu. 

function min(...list ){ // imetam ... reiskia surenkam visas reiksmes kai ... parasai interpretuoja kaip masyva. 
   let minimum=Infinity;

    for(const number of list){
        if ( number<minimum){
            minimum=number;
        }
    }
    return minimum;
}
console.log(min(1,2,3,4));
console.log(min(-1,1,2,3));

const ddd=[1,2,3]; /// kai is masyvo reikia padaryt pavienus skaicius 
console.log(Math.min(...ddd));
console.log(Math.max(...ddd));

/// Use [...array] to create a copy of the array before sorting /// JEIGU NORIM SORTINT ARRAY EILUTE, REIKIA SUKURTI nauja koipija. 
// nes kitaip javascriptas mano kad originala keiciam ir nieko nesigauna. 

function isSortedAndHow(array) {
  
    let sortintaMaz=[...array].sort((a,b)=>a-b).toString()// nuo maziausios.
    let sortintaDid=[...array].sort((a,b)=>b-a).toString()// nuo didziausios
    let nekeista=array.toString()
  
    console.log(sortintaMaz)
    console.log(sortintaDid)
    console.log(nekeista)
  
    if(nekeista===sortintaMaz){
      return "yes, ascending"
    } if(nekeista===sortintaDid){
      return "yes, descending"
    } else{
  
    }
  
    return 'no'
  }
  console.log(isSortedAndHow([1,2])) // yes 
  console.log(isSortedAndHow([15,7,3,-8]));// no, descending
  console.log(isSortedAndHow([4,2,30]))





