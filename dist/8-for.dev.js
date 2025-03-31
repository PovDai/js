"use strict";

/*
For (loop) - ciklas 
*/
for (var i = 1; i <= 5; i++) {
  console.log('number:', i);
}

console.log('------pirmas ciklas -----'); /// realiai ka jis daro kaip pavz, bet sito rasyti nereikia :) 

for (var _i = 5; _i < 10; _i++) {
  console.log('number:', _i);
}

; // nieko nisspaudins nes loopas nuo 5<5 nesutinka.Spauzdina ne imtinai . nes <

console.log('-----------------------');

for (var _i2 = 5; _i2 > 0; _i2--) {
  // NAUDOJAMAS APSUKIMUI. 
  console.log('APSUKIMAS:', _i2);
}

; // nes pradedame nuo 5 del to jis varys iki infinity -

console.log('------cia ieskoti-------'); // 0,1,2,3,4,
//0,2,4,6,8,   /// jeigu reikia israsyti kas 2 vieneta kas antra reiksme, +=2. 

for (var _i3 = 0; _i3 < 11; _i3 += 2) {
  console.log('number:', _i3);
}

;
console.log('--------------');

for (var k = 4; k < 5; k++) {
  console.log('number:', k);
}

;
console.log('--------------');

for (var _k = 4; _k < 5; _k += 0.1) {
  console.log('number:', _k);
}

; /// su desimtainiais skaiciais. 

for (var _k2 = 0; _k2 < 10; _k2++) {
  console.log('number:', _k2 / 10);
}

; // jeigu padaryti ne desimtinai /10 padarom  jeigu norime iki 0.1 dalies skaicius pateikti. 

console.log('--------------');

for (var _k3 = 0; _k3 < 10; _k3++) {
  console.log('number:', _k3 / 100);
}

; // jeigu reikia atvaizduoti iki ct pvz 1.53 euro. 3.99 eur darysis 399 :) jeigu reikse 3

for (var _k4 = 0; _k4 < 5; _k4++) {
  console.log('Labas:');
}

; // jeigu reikia kad 5 lkartus ispauzdintu zodi labas;. 

console.log('--------------'); // ispauzdinti 7 daugybos lentele iki 10. 

var n = 8; // skaicius kurios daugybos lentele darome. 

for (var _k5 = 1; _k5 < 11; _k5++) {
  console.log("".concat(n, "*").concat(_k5, "=").concat(n * _k5));
}

; // jeigu norime padaryti 10 skaiciu iskarto visu daugybos lentele/. 
// Kaip tiklas naudojamas su masyvais. Jeigu norime masyvo suma susumuoti. 

var marks = [10, 2, 8, 4, 6];
var sum = 0; ////////// cia rankinis budas kaip suskaiciuoti. 

sum += marks[0]; // reiskia suma +10

sum += marks[1]; // reiskia 10+2

sum += marks[2]; // reiskia 12+8

sum += marks[3]; // reiskia 20+4

sum += marks[4]; // reiskia 24+6

console.log(sum);
var sum2 = 0; /// su ciklu suskaiciuojame. 

for (var _i4 = 0; _i4 < 5; _i4++) {
  console.log('i reiskme lygu 0 pozicijoje:', _i4, '--->', marks[_i4]);
  sum2 += marks[_i4];
}

;
console.log('atsakymas bus:', sum2); // jeigu reikia pasidaryti masyvo ilgi ir ji itraukti i for ciklo formule. 

for (var _i5 = 0; _i5 < marks.length; _i5++) {
  /// vietoje ciklo ilgio irasome formule koks ilgis. 
  console.log('i reiskme lygu 0 pozicijoje:', _i5, '--->', marks[_i5]);
  sum2 += marks[_i5]; // reiskia suma + pazymiai iki ciklo galo. 
}

;
console.log('atsakymas bus:', sum2); // isloginame sumos atsakyma. 

var names = ['jonas', 'maryte', 'petras', 'ona']; // sugeneruoti vardas yra VARDAS. 

for (var _i6 = 0; _i6 < names.length; _i6++) {
  console.log("Studento vardas yra '".concat(names[_i6], "'."));
} // arba kitoks .


for (var _i7 = 0; _i7 < names.length; _i7++) {
  var vardai = names[_i7];
  console.log("Vardas yra: ".concat(vardai));
} // Vardas "VARDAS" yra sudarytas is N raidziu.


for (var _i8 = 0; _i8 < names.length; _i8++) {
  var name = names[_i8]; // Susikuriam kontanta kuri duoda visus vardus 

  var s = "Vardas \"".concat(name, "\" yra sudarytas is ").concat(name.length, " raidziu."); // sharinam vardus ir pridedam tekstu jo ilgius. 

  console.log(s);
}

; // kitas budas, bet geriau pirmasis budas su constantom.

for (var _i9 = 0; _i9 < names.length; _i9++) {
  console.log("Vardas ".concat(names[_i9], " yra sudarytas is ").concat(names.length, " raidziu;"));
}

for (var _i10 = 0; _i10 <= 20; _i10++) {
  if (_i10 % 2 === 0) {
    // dalinasi is 2 
    console.log('atsakymas yra:', _i10);
  }
}

; /// kitas jeigu duotas const n=4;

var n5 = 4;

for (var _i11 = 0; _i11 <= 20; _i11++) {
  if (_i11 % n5 === 0) {
    // dalinasi is 2 
    console.log('atsakymas yra:', _i11);
  }
}

;