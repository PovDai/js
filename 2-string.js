/* STRING- tekstas simboliu grandinele.

Tekstines reiksmes inicijavimas yra naudojamos "" arba ''
- ' vienguba
-"" dviguba
-` backtikas (naudojamas kaip norimi didesnes apimties teksta sumest)



Specialieji simboliai \ pricercia sekanti simboli buti spausdinimu. 

-\r (return,kursorius grizta i eilutes pradzia);
-\n (new line, kursorius nusileidzia viena eilute zemyn);
-\t (tab) persoka kas kaskiek space mygtuku proga. 


*/

const a='Labas';
console.log(a);

console.log(typeof a)


// Vienguba (') kabute. 
const k1="Vienguba(') kabute.";
console.log(k1);

// Dviguba kabute.
const k2=' Dviguba(")kabute';
console.log(k2);

const name="Jonas";
const surname='Jonaitis';

const fullname=name+' '+surname;
console.log(fullname);

//Vienguba  (') ir dviguba (") kabutes. 

const k12="Vienguba  (') ir"+'dviguba(")kabutes.';
console.log(k12);

// Vienguba(') kabute.

const k3='Vienguba(\' ) kabute.';
console.log(k3);

const k4="dviguba ( \") kabute";
console.log(k4);

 //  Vienguba  (') ir dviguba (") kabutes

 const k5="Vienguba ( \') ir dviguba \") kabutes";
 console.log(k5);

 const backSlash='\\ ';
 const backSlash2="\\";

 console.log(backSlash);
 console.log(backSlash2);


/*
<header>

    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>

    </nav>
</header>

*/

const html1=`<header>

    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>

    </nav>
</header>`;

console.log(html1 );

const html='<header> \r\n\
 \timg>\r\n\
\t  <nav>\r\n\
\t\t   <a></a>\r\n\
\t\t  <a></a>\r\n\
\t\t   <a></a>\r\n\
\t\t</nav>\r\n\
</header';
console.log(html);
/*
-\r (return,kursorius grizta i eilutes pradzia);daro <-----
-\n (new line, kursorius nusileidzia viena eilute zemyn);daro zemyn judesiuka
-\t (tab) persoka kas kaskiek space mygtuku proga. daro ----> judesiuka 
*/




const studentName="Maryte";
const amount=4;


// Maryte yra viena is keturiu legendiniu studentu. 

const student=studentName+' yra viena is '+amount+' legendiniu studentu';

console.log(student);


const b1=`Vienguba  (') ir dviguba (") kabutes`
console.log(b1);
const b2=`<header>

    <img>
    <nav>
        <a></a>
        <a></a>
        <a></a>

    </nav>
</header>`
console.log(b2);

// backtik (`) kabute. 

const b4=`Backtick (\`) kabute.`;
console.log(b4);

// Maryte yra viena is keturiu legendiniu studentu. 

const wtudentName="Maryte";
const wmount=4;


console.log(student);
const student2=`${wtudentName}yra viena is ${wmount} legendiniu studentu`;
console.log(student2);



const we='Mano tekstas';
const se="antras tekstas";
const ats=`${we}yra labai geras, bet yra ${se}, kuris yra dar  geresnis`;
console.log(ats);


const word='pomidoras';
const wordSymbolsCount=word.length;

const size="aaaaaaaaaa".length;

console.log(size);

console.log( word);
console.log( wordSymbolsCount);

const space=" ";
console.log(space.length);

const pi='3.14';
console.log(pi.length);

console.log('---------------------');


const age=99;
const ageDigitscount=(''+age).length;
console.log(ageDigitscount);
const ageDigitscount2=age.toString().length;
console.log(ageDigitscount2);

console.log('---------------------');
const amzius=15000;
const kiekis=amzius.toString();
console.log(kiekis);

console.log('---------------------');
const text="kebabas"
const firstSymbol=text[0];
console.log(firstSymbol);

console.log(text[2]);
console.log(text[5]);
console.log(text[4]);

// Zodyje sachmatai pirmoji raide yra "S".

const game='Mokinys';
const gameSentence=`Zodyje "${game}" pirmoji raide yra "${game[0]}`;

console.log(gameSentence);

const apversti=`${game[8]}${game[7]}${game[6]}${game[5]}${game[4]}${game[3]}${game[2]}${game[1]}${game[0]}`;

console.log(apversti);

let s="tesktas";
let s1=s.split("");
let s2=s1.reverse();
let s3=s2.join("");


console.log(s1);
console.log(s2);
console.log(s3);
