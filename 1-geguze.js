//Parašykite funkciją, kuri grąžina visų sveikų skaičių nuo 1 iki n kvadratų sumą. 

function sum(n){
let suma=0;
let skaiciai=[];

for(let i=1;i<=n;i++){
    skaiciai.push(i)
}
    return skaiciai.reduce((total,n)=>total+n**2,0)
}
console.log(sum(5));

//Parašykite funkciją, kuri patikrina, ar du žodžiai yra anagramos.  

function anagram(pirmas,antras){
    let a=pirmas.split('').sort().join('')
    let b=antras.split('').sort().join('')
   
    return a===b
}
console.log(anagram('jonas','sjona'));

//Parašykite funkciją, kuri pašalina dublikatus iš masyvo.

function dublis(duomenys){
    let naujas=duomenys.sort((a,b)=>a-b)
    let perdarytas=[];
    for(let i=0;i<naujas.length;i++){
        if(naujas[i]!==naujas[i+1]){
            perdarytas.push(naujas[i])
        }
    }
    return perdarytas;
}
console.log(dublis([1,2,3,2,4,5,4]));
//Parašykite funkciją, kuri grąžina pirmą pasikartojantį elementą masyve. 

function dublisPirmas(duomenys){
let naujas=duomenys.sort((a,b)=>a-b)
let skaicius=[];
for(let i=0;i<naujas.length;i++){
    if(naujas[i]===naujas[i+1]){
        skaicius.push(naujas[i])
    }
}
    return skaicius[0]
}
console.log(dublisPirmas([1,3,2,3,2,4,5,4]));

//Parašykite funkciją, kuri patikrina, ar skaičius yra pirminis.  

function pirminis(skaicius){
if(skaicius<=1){
 return false;
}if(skaicius===2){
    return true;
}
if(skaicius%2===0){
    return false;
} else{
}
return true;
}

console.log(pirminis(9));

//Parašykite funkciją, kuri grąžina skaičiaus faktorialą. 

function fakto(skaicius){
    let eilute=[];
    for(let i=1;i<=skaicius;i++){
        eilute.push(i)
    }
    return eilute.reduce((total,n)=>total*n,1);
}
console.log(fakto(5));

/*Parašykite funkciją, kuri patikrina, ar žodis yra palindromas (skaitomas vienodai iš 
abiejų pusių).*/

function palindromas(zodis){
    
    return zodis.split('').reverse().join('')===zodis
}
console.log(palindromas('sedes'))
console.log(palindromas('gules'))

// Parašykite funkciją, kuri grąžina dažniausiai pasikartojantį elementą masyve. 

// Parašykite funkciją, kuri grąžina n-tą Fibonacci sekos narį. 

/*Parašykite funkciją, kuri sukeičia kiekvieną gretimą masyvo porą (jeigu pora 
neegzistuoja, paskutinis lieka nepakitęs). Pvz: masyvo [1234] elementai turėtų pasikeisti 
į [2143] */

function sukeisk(masyvas){

    let naujas=masyvas.map(String).join().split('')
    let geras=[];
    for(let i=0;i<naujas.length;i+=2){
        geras.push(naujas[i]+naujas[i+1])
    }

    return geras[0].split('').reverse().join('')+geras[1].split('').reverse().join('')
}
console.log(sukeisk([1234]));

//Parašykite funkciją, kuri grąžina masyvą tik su lyginiais skaičiais. 

function map(masyvas){

    return [...masyvas].filter(s=>s%2===0)
}
console.log(map([1,2,3,4,5,6]))

//Parašykite funkciją, kuri grąžina didžiausią skaičių masyve. 

function max(arr){
    
    return Math.max(...arr)
}
console.log(max([1,2,3,4,5,7]));

//Parašykite funkciją, kuri apskaičiuoja vidurkį masyvo elementų. 

function vidurkis(arr){

    return arr.reduce((total,n)=>total+n,0)/arr.length
}
console.log(vidurkis([2,3,4,6,8,9,10]))

/* Parašykite funkciją, kuri grąžina masyvą, kuriame kiekvienas elementas yra 
padaugintas iš 2. */

function x2(arr){

    return arr.map(s=>s*2)
}
console.log(x2([1,2,3,4,5]))

/*Parašykite funkciją, kuri iš duoto teksto paverčia pirmą raidę kiekviename žodyje į
didžiąją. */

function capital(sakinys){
    let naujas=sakinys.split(' ')
    let pakeistas=[]

   for(const zodis of naujas){
    pakeistas.push(zodis[0].toUpperCase()+zodis.slice(1).toLowerCase())
   }
    return pakeistas.join(' ')
}
console.log(capital('jonas buvo nedidelio ugio'))

//Parašykite funkciją, kuri suskaičiuoja balsių kiekį tekste. 

function balses(sakinys){
    const balses='aeiouy'
    let count=0;
    let naujas=sakinys.toLowerCase().split('')
    for(const raides of naujas){
        if(balses.includes(raides)){
            count++
        }
    }
    return count;
}
console.log(balses('Jojo, jonas, per miesta ir sutiko poną'))

//Parašykite funkciją, kuri apverčia masyvą nenaudodama .be reverse. 

function reverse(arr){
let naujas=[];
for(let i=arr.length-1;i>=0;i--){
    naujas.push(arr[i])
}
    return naujas;
}
console.log(reverse([1,2,3,4,5,6]))

//Parašykite funkciją, kuri patikrina, ar masyvas yra simetriškas (vienodas iš abiejų galų). 

function simetri(arr){
    return [...arr].splice(0,arr.length/2).reverse().join('')===[...arr].splice(-(arr.length/2)).join('')
}
console.log(simetri([1,2,3,4,4,3,2,1]));

//Parašykite funkciją, kuri sukuria atsitiktinį sveiką skaičių tarp min ir max (imtinai). 

function random(min,max){

    return Math.floor(Math.random()*(max-min+1)+min)
}
console.log(random(1,5));

//Parašykite funkciją, kuri patikrina, ar visi masyvo elementai yra unikalūs. 

function uni(arr){
    let naujas=arr.sort((a,b)=>a-b)

    for(let i=0;i<naujas.length;i++){
        if(naujas[i]===naujas[i+1]){
            return false;
        }
        else{
        }
    }
    return true;
}
console.log(uni([1,2,3,4,5]));

/*Parašykite funkciją, kuri grąžina true, jei masyvas yra nuolat didėjantis. Pvz: masyvas 
[1 4 6] bus true, o masyvas [ 1 2 4 1] bus false */





//Parašykite funkciją, kuri grąžina žodžių kiekį sakinyje. 

function kiekis(sakinys){

    return sakinys.split(' ').length
}
console.log(kiekis('sveiki gyvi visi jau laikas namo'));

// Parašykite funkciją, kuri surūšiuoja masyvą mažėjančia tvarka.

function mazeja(arr){

    return arr.sort((a,b)=>b-a)
}
console.log(mazeja([1,2,3,4,5,6]));

/* Parašykite funkciją, kuri pakeičia visus simbolius string'e į žvaigždutes, išskyrus 
paskutinius 4. */

function pakeist(zodis){

    let naujas='';
    for(let i=0;i<zodis.length;i++){
        naujas+='*'
    }
    return naujas.slice(0,-4)+zodis.split('').splice(-4).join('')
}
console.log(pakeist('nebeprisikiskekoputeliavome'))







