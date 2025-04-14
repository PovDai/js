const marks=[10,2,8,4,6];
let sum=0;
let i=0;
for(;i<marks.length;){
    sum+=marks[i]
    i++;
}
console.log(sum)

/// while ciklas.lygiai tas pats kaip iprastas ciklas tik kitaip isdeliotas.nelabai naudos yra is while. 

let sum2=0;
let i2=0;
while(i2<marks.length){
    sum2+=marks[i];
    i2++;
}//////////////////////////////////FOR REIKSME PAGRINDIE DARYK TOL KOL PASIEKSI REZULTATA/////////////////
console.log(sum2)

/// kada while uzrasymo budas patogesnis nei eilinis ciklas. 

let count=0;
let sum3=0;

while(sum3 <1000000){// naudojamas kol reikia suzinoti kol pasieks rezultata. kiek prasisuks kartu. 
    sum3+=count++;
}
console.log(count)
console.log(sum3)



for(let i=0;i<=11;i+=((if(i%2===0))))