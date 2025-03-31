/* OBJECT   -- Objektas,panasus i (kitose kalbose siek tiek panasu i hashmap, dictionary) */

const empty={};
console.log(empty);

const person={ /// raktas:reiksme,Poras informacines.Geriausia raktus kurti kaip viena zodi.
    age:99,
    name:'Jonas',
    isMaried:true,
};
console.log(person);

// standartine sintakse. kaip paimti reiksme.Su ja visada paeina viskas.

console.log(`Sveiki mano vardas ${person['name']}`);
console.log(`Sveiki mano amzius ${person['age']}`);
console.log(`Sveiki ar as esu vedes ${person['isMaried']}`);  // ${person['name']}; ${person['age']}; ${person['isMaried']}

// nestandartine (supaprastinta sintakse) ne visada veikia.

console.log(person.name);
console.log(person.age);
console.log(person.isMaried);

// 

const demo={
    'color':'red',
    '5': 777,
    55:777,
    'is married': true, /// raktas turi buti vientisas. Techniskai visi objektu raktai turi buti stringai. 

};
console.log(demo['color']);
console.log(demo['5']);
console.log(demo[55]);
console.log(demo['55']);
console.log(demo['is married']);


console.log(demo.color); // vienintelis galima paimti supaprastinta sintakse. Nes vientisas zodis.
console.log('--------------');


const pc={
    cpuCore:8,
    ram:16,
    diskSpace:512,
    diskType:'ssd',
    os:'win10',
};
console.log(pc.cpuCore);
pc.ram=32; /// kaip pakeisti reiksme pvz ramu.
pc.cpuCore=100; /// kaip pakeisti reiksme pvz branduoliu.
console.log(pc.ram);
console.log(pc.cpuCore);
pc.os='Linux'/// kaip pakeisti reiksme pvz operacines
console.log(pc.os);

// This pc has x cores.
const s2=`This pc has ${pc['cpuCore']} cores `;
const s1=`This pc jas ${pc.cpuCore} cores`;
console.log(s2);
console.log(s1);

const student={
    name:'Maryte',
    age:88,
    isMaried:false,
    parents:[ /////// jeigu reiksme turi reiksmes darom [ ir darom irgi {} ]
        {name:'Petras',
        age:77,
        phoneNumbers:[1111111111,333333333],
        },
        {name:'Ona',
            age:66,
            phoneNumbers:[222222,444444444],
        },
    ],

};
console.log(student['name']);
console.log(student.name);


console.log(student.parents.length);
console.log(student.parents[0].name);
console.log(student.parents[1].name);
console.log(student.parents[0].phoneNumbers.length);
console.log(student.parents[1].phoneNumbers);
console.log(student.parents[1].phoneNumbers[1]); /// naujausias numeris onos. 

student.parents[1]='Juozas'

console.log(student.parents[1]);

// kitas variantas.


const studentName1 = 'Jonas';
const studentAge1 = 99;
const studentIsMarried1 = true;
const studentName2 = 'Maryte';
const studentAge2 = 88;
const studentIsMarried2 = false;

//                name, age, isMarried
const student1 = ['Jonas', 99, true];
const student2 = ['Maryte', 88, false];
const student3 = ['Petras', false, 77];
const student4 = [true, 66, 'Ona'];

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
const stud2 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

console.log(stud1.name);
console.log(stud2.name);
























