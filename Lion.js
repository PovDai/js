class Lion{
    constructor(name,age,svoris)
    {
    this.name=name;
    this.age=age;
    this.svoris=svoris;
    this.hungry=true;
    }
pasisveikinimas(){
    return `Sveiki mano vardas ${this.name} mano amzius ${this.age} mano svoris ${this.svoris} as esu ${this.hungry} `
}
alkanas(){
    this.hungry===true;
    return `As esu labai alkanas`
}
nealkanas(){
    this.hungry===false;
    return `As esu pavalges`
}
feed(){
    if(this.hungry===true){
    return `${this.name}: as alkanas`;
    } if (this.hungry===false ){

    return `${this.name}: as pavalgiau`;
}
    }
}

const liutukas=new Lion('Ricka',55,250);

console.log(liutukas.pasisveikinimas());
liutukas.feed();
console.log(liutukas.feed());
liutukas.feed();
console.log(liutukas.feed());

console.log(liutukas.pasisveikinimas());
console.log(liutukas.feed());
liutukas.nealkanas(false);
console.log(liutukas.feed());

if(typeof a!=='number'|| typeof b!=='number'){
    return 'unknown value'
  }
  if(sign==='-'){
    return a-b;
  } if(sign==='+'){
    return a+b;
  }if(sign==='*'){
    return a*b;
  }if(sign==='/'){
    return a/b;
  } else{
  return 'unknown value'

}
console.log(calculator(1,2,'+'))







export class Car {
    constructor(model, color, tankMax, sanaudos100km) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.sanaudos100km = sanaudos100km;
        this.tank = 0;
        this.engineIsOn = false;
    }

    intro() {
        return `This is ${this.color} ${this.model} tank size ${this.tankMax}l consumption per 100 km ${this.sanaudos100km} l.`;
    }

    refill(volume) {
        if (typeof volume !== 'number' || !isFinite(volume)) {
            return 'Error only numbers allowed.';
        }
        if (volume < 0) {
            return `Refill with ${volume} litres is not allowed`;
        }
        if (this.engineIsOn) {
            return 'Error to refill a tank you must turn off engine first';
        }

        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } else {
            this.tank = this.tankMax;
        }
        return `Tank filled to ${this.tank} liters`;
    }

    engineOn() {
        if (this.tank > 0) {
            this.engineIsOn === true;
            return 'Your engine is on';
        }
        return 'Cannot start engine - no fuel';
    }

    engineOff() {
        if(this.engineIsOn){
        this.engineIsOn === false;}
        return 'Your engine is off';
    }

    drive(km) {
        if(this.engineIsOn===false){
            return `your cars engine is turn off`
        }
        const fuelNeeded = (km / 100) * this.sanaudos100km;
        if (fuelNeeded > this.tank) {
            return `To drive ${km}km there are not enough fuel (${this.tank}l in tank).`;
        } else {
            this.tank -= fuelNeeded;
            return `You drove ${km}km and have ${this.tank.toFixed(2)}l fuel left`;
        }
    }
}

