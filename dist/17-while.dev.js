"use strict";

var marks = [10, 2, 8, 4, 6];
var sum = 0;
var i = 0;

for (; i < marks.length;) {
  sum += marks[i];
  i++;
}

console.log(sum); /// while ciklas.lygiai tas pats kaip iprastas ciklas tik kitaip isdeliotas.nelabai naudos yra is while. 

var sum2 = 0;
var i2 = 0;

while (i2 < marks.length) {
  sum2 += marks[i];
  i2++;
} //////////////////////////////////FOR REIKSME PAGRINDIE DARYK TOL KOL PASIEKSI REZULTATA/////////////////


console.log(sum2); /// kada while uzrasymo budas patogesnis nei eilinis ciklas. 

var count = 0;
var sum3 = 0;

while (sum3 < 1000000) {
  // naudojamas kol reikia suzinoti kol pasieks rezultata. kiek prasisuks kartu. 
  sum3 += count++;
}

console.log(count);
console.log(sum3);

function calculateYear(principal, interest, tax, desired) {
  var count = 0;

  while (principal < desired) {
    var procentai = principal * interest;
    console.log(procentai, '--------'); /// procentai gaunami pirma karta. 

    var mokesciai = procentai * tax;
    console.log(mokesciai, 'iiiiiii'); // mokesciai mokami pirma karta 

    principal += procentai - mokesciai; // reiskai startine suma + procentai - mokesciai ir taip suka kol gauna 1100 arba daugiau

    console.log(principal);
    count++; // skaiciuoja kol surenka norima suma apsisukimo ratus 
  }

  return count;
}

;

function nbYea(p0, percent, aug, p) {
  var count = 0;

  while (p0 < p) {
    // nuo kiek iki kiek salyga 
    var prieaugis = Math.floor(p0 * (percent / 100) + aug);
    p0 += prieaugis; // didejimas 

    count++; // skaiciavimas ciklu kiek 
  }

  return count;
}

console.log(nbYea(1500, 5, 100, 5000)); /// kai reikia paskaiciuoti per kiek laiko nugaruos gesintuvas iki nenaudojamos ribos. 

function evaporator(content, evap_per_day, threshold) {
  var days = 0;
  var thresholdAmount = content * (threshold / 100);
  var currentAmount = content;

  while (currentAmount > thresholdAmount) {
    // kiek dienu atliks cikl
    currentAmount -= currentAmount * (evap_per_day / 100); /// esamasminus per cikla  esamas padauginta is nugaravimo. 

    days++;
  }

  return days;
}

console.log(evaporator(10, 10, 10));

function minSum(arr) {
  var sortedArr = arr.sort(function (a, b) {
    return a - b;
  }); /// susirikiuojam nuo maziausio iki diziausio. 

  var sum = 0;
  var left = 0; // deklaruojam kaire ir desine puses 

  var right = sortedArr.length - 1; /// desine puse 

  while (left < right) {
    // leidziam cikla kol kaire maziau uz desine 
    sum += sortedArr[left] * sortedArr[right];
    left++; /// zingsnis kad eina is prieko po 1 

    right--; /// zingsnis kad eina is galo po 1 
  }

  return sum;
}

console.log(minSum([5, 4, 2, 3]));

function re(s) {
  //coding and coding....
  while (s[s.length - 1] === '!') {
    s = s.slice(0, -1);
  }

  return s;
}

console.log(re('hi !!!'));