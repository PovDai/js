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

//Parašykite funkciją, kuri apskaičiuoja skirtumą tarp dviejų datų dienomis. 


//Parašykite funkciją, kuri konvertuoja pirmąją raidę į mažąją, jei ji buvo didžioji. 

function convert(duomenys){
    const raidynas='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let skirtas=duomenys.split(' ')
    let naujas=''
   for(const zodziai of skirtas){
    if(raidynas.includes(zodziai[0])){
        naujas+=zodziai[0].toLowerCase()+zodziai.slice(1)+' '
    }else{
        naujas+=' '+zodziai
    }
   }
    return naujas;
}
console.log(convert('Jonas Buvo Aukstas'))

/*Parašykite funkciją, kuri suskaičiuoja, kiek duotame tekste žodžių yra bent 5 simbolių 
ilgio. */

function count(duomenys){
    let count=0;
    let naujas=duomenys.split(' ')
  for(const zodziai of naujas){
    if(zodziai.length>=5){
        count++
    }
  }
    return count;
}
console.log(count('Sveiki gyvi ar jau ne vakaras kartais ir laikas eiti miegoti ?'));

//Parašykite funkciją, kuri grąžina visus skaičius nuo start iki end kaip masyvą. 

function startEnd(start,end){
    let naujas=[];
    for(let i=start;i<=end;i++){
        naujas.push(i)
    }
    return naujas;
}
console.log(startEnd(2,10))

//Parašykite funkciją, kuri randa antrą didžiausią skaičių masyve.

function second(arr){

    return parseInt(arr.sort().splice(-2,1))
}
console.log(second([1,7,3,5,4,6,9,8]))

//Parašykite funkciją, kuri paverčia sekundes į formatą hh:mm:ss. 

function sekundes(duomenys){
    let valandos=Math.trunc(duomenys/3600).toString()
    let minutes=Math.trunc((duomenys-(3600*valandos))/60).toString()
    let sekundes=(((duomenys-(3600*valandos)))-minutes*60).toString()

    if(valandos.length===1&&minutes.length===1&&sekundes.length===1){
        return `0${valandos}:0${minutes}:0${sekundes}`
    } else if(minutes.length===1&&sekundes.length===1){
        return `${valandos}:0${minutes}:0${sekundes}`
    } else if(sekundes.length===1){
        return `${valandos}:${minutes}:0${sekundes}`
    }
    return `${valandos}:${minutes}:${sekundes}`
}
console.log(sekundes(43565));

//Parašykite funkciją, kuri skaičiuoja, kiek kartų duotas simbolis pasikartoja string'e. 

function kartojasi(string,symbol){

    return string.split('').filter(r=>r===symbol).length
}
console.log(kartojasi('Sveiki, gyvi ar jau laikas miegot?','i'));

/*Parašykite funkciją, kuri iš objektų masyvo išfiltruoja tik tuos, kurių reikšmė aktyvus: 
true. */

function filter(duomenys){
    let keys=Object.keys(duomenys)
    let naujas=[];

    for(let i=0;i<keys.length;i++){
        if(duomenys[keys[i]]===true){
            naujas.push(keys[i])
        }
    }
    return naujas;
}
console.log(filter({ "Objektas 1": true,"Objektas 2":  false,"Objektas 3": true, "Objektas 4":  false,"Objektas 5":  true, }));







