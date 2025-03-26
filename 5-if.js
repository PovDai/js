/* IF- palyginimo salyga.

Palyginimo operatoriai:
- visi:>,<, >=, <=, ==, ===, !=, !==./ su sauktuku reikisa nelygy.
-naudotini: >,<, >=, <=,  ===,  !==. === lygu !== nelygu.
-nenaudotini:==, !=.==.

/// === tikrina ir reiskmes. o == nenaudojamas del to kad jis netikrina reiksmiu. 

Kodo sablonai:

if(){}
if(){} else{}
if(){} else if()else{}
if(){}else if (){} else { }

if (a!=='number'||isNAN(a)); tinkamas jeigu atsakymas vienodas ar NaN ar infinity nesvarbu, beti jeigu atsakymas skirtingas darome isFinite(); arba IsNaN.



*/

if (4>2){

    console.log('taip, 4 daugiau uz 2');
}

if (4>=2){

    console.log('taip, 4 daugiau uz 2');
}

if (4===2){

    console.log('taip, 4 daugiau uz 2');
}

if (4===4){

    console.log('taip, 4 lygu 4');
}



if (4>2){

    console.log('----------- taip');

} else {
    console.log ("----- ne");
}
console.log("end");

if (4<2){

    console.log('----------- taip');

} else {
    console.log ("----- ne");
}
console.log("end");


const temp=-2;
if (temp>=18){
    console.log("silta"); 
}else {
    console.log("salta");
}


// jei zemiau 0 - salta
// jeigu zemiau 10 - meh
// jei zemiau 22 - silta
// jeigu daugiau - karsta

const temp2= 25;

if(temp2<0){
    console.log("salta");
}else if (temp2<10){
    console.log("meh");
} else if (temp<22){
    console.log("silta");
}else {
    console.log("karsta");
}

console.clear();

if (4==='4'){
    console.log("Tenkina");
}else {
    console.log("ne-tenkina");
}
///
