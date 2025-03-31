"use strict";

/*
Kintamuju iniciavimas: JEIGU SKAICIUOJAM PINIGUS 3.99 DAROME 399 kad galetume /100 apvalint iki 3.99
- const (default)
- let (kai reiksme turi galeti kisti)
- var (nenaudoti, nebent zinai ka darai)

NUMBER - skaiciai

- sveikieji, desimtainiai
- teigiami, neigiami
- Infinity, -Infinity
- NaN (skaiciaus tipo klaida)

Aritmetiniai operatoriai:
+, -, *, /, ** (kelimas laipsniu), % (dalybos liekana)

Aritmetiniai priskyrimo operatoriai:
+=- let x = 5;
x += 3; // Tas pats kaip x = x + 3;Jis prideda reikšmę prie esamos kintamojo reikšmės ir priskiria naują reikšmę atgal tam pačiam kintamajam.
 -=, *=, /=, **= (kelimas laipsniu), %= (dalybos liekana)

++ - pridedama vienas. 
-0 ir 0 yra lygus. 
-infinity.

a%1!==0 tai atskiriame desimtaines. palieka tik 0.12454 dali. 


 /// jeigu ieskome a ar nera NaN kuriame isNaN
 /// isFinite, tikrina ar ta reiksme normalus skaicius. 

 !isFinite ar yra baigtinis skaicius. su sauktuku. 

*/
console.log("labas rytas");
console.log(Infinity);
console.log(Infinity + 1);
console.log(Infinity * 2);
console.log(Math.pow(2, 2)); // Kelimas nulinio laispnios:

console.log(Math.pow(3, 0)); // Dalyba is nulio:

console.log(15 / 0);
console.log(0 / 0);
console.log(54554 / 0); //  kvadratine saktinis (**1/2) arba kubine saknis  **(1/3);

console.log(Math.pow(81, 1 / 2));
console.log(Math.pow(8, 1 / 3));
console.log(Math.pow(64, 1 / 3));