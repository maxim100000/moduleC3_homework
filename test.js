"use strict";

class HouseholdDevice {
    isPlugged = false;
    
    turnOn(){
        this.isPlugged = true
    }
    
    turnOff(){
        this.isPlugged = false
    }
}

class TelevisorClass extends HouseholdDevice{
    constructor(manufacturer, productionYear, price) {
        super();
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.price = price
    }
} 
    
class MicrowaveClass extends HouseholdDevice{
    constructor(manufacturer, price, color, power) {
        super();
        this.manufacturer = manufacturer;
        this.price = price;
        this.color = color;
        this.power = power
        
    }
}

const televisor = new TelevisorClass('Panasonic', 1980, 50_000);
const microwave = new MicrowaveClass('Toshiba', 'green', 20_000);