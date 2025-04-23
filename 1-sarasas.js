const inventory  = {
    Fruits: {
        Apples: {quantity: 10, threshold: 5},
        Banana: {quantity: 3, threshold: 5}
    },
    Electronics: {
        Phone: {quantity: 2, threshold: 2},
        Laptpot: {quantity: 0, threshold: 1}
    }
};

//logs 
const logs =[];

function addItem(category, name, quantity, threshold = 5) // funkcija kuri eis per inventoriu jojo deklaruoja. kategorija varda kieki ir likuti 
{
    if(!inventory[category]) // Tikrinama, ar inventoriuje nėra nurodytos kategorijos 
    {
        inventory[category] = {};//Jei kategorijos nėra, sukuriamas naujas tuščias objektas tos kategorijos pavadinimu
    }
    if(inventory[category][name]) //Tikrinama, ar šioje kategorijoje jau yra prekė su nurodytu pavadinimu
    {
        inventory[category][name].quantity += quantity; //Jei prekė jau egzistuoja, prie esamo kiekio pridedamas naujas kiekis
    }
    else{ // Else sąlygos bloko pradžia (jei prekės dar nėra)
        inventory[category][name] = {quantity, threshold}; //Sukuriamas naujas prekės įrašas su nurodytu pradiniu kiekiu ir slenksčio reikšme
    }
    logTransaction("ADD", category, name, quantity) // Iškviečiama funkcija, kuri registruoja operaciją (pridėjimą) į transakcijų žurnalą
}

function removeItem(category, name, quantity)
{
    let item;

    if(inventory[category]) //Tikrinama, ar inventoriuje egzistuoja nurodyta kategorija
    {
        item = inventory[category][name]; //Jei kategorija egzistuoja, bandome gauti prekę pagal pavadinimą
    }

    if(item) //Tikrinama, ar prekė buvo rasta (ar item turi reikšmę)
    {
        item.quantity -= quantity; //Iš prekės kiekio atimamas nurodytas kiekis
        if(item.quantity<=0)
        {
            console.log("Išpirkta prekė"); // jeigu prekes kiekio nera arba 0 isveda ispirkta 
            delete inventory[category][name];// istrinama kategorija  Prekė pašalinama iš inventoriaus
        }
        logTransaction("REMOVE", category, name, quantity) // Iškviečiama funkcija, kuri registruoja pašalinimo operaciją į transakcijų žurnalą
    }
}

function logTransaction(type, category, item, quantity)
{
    logs.push({type, category, item, quantity, timestamp: new Date().toLocaleString()})
}


function checkLowStock()
{
    for(let category in inventory)
    {
        for(let item in inventory[category])
        {
            const {quantity, threshold} = inventory[category][item];
            if(quantity<=threshold)
            {
                console.warn(`Low stock alert for ${item} in ${category}: ${quantity} left`);
            }
        }
    }
}


function searchItem(name)
{
    for(category in inventory)
    {
        for(item in inventory[category])
        {
            if(item.toLowerCase().includes(name.toLowerCase()))
            {
                console.log(`FOUND ${item} in ${category}:`, inventory[category][item])
            }
        }
    }
}


console.log(inventory)
addItem("Fruits", "Apples", 30)
console.log(inventory)
let n;

addItem("Fruits", "Pineapple", 30, 10)
console.log(inventory)



function showLogs() {
    console.table(logs);
  }

showLogs();
checkLowStock();
addItem("Fruits", "Banana", 8);
console.log("----------------")
checkLowStock();
showLogs();
searchItem("Banana")


let a = [1, 2, 3]
let b = [4, 5, 6]

console.log(b.unshift(a.pop()))
console.log(b)

