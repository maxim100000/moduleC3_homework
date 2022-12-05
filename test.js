"use strict";

function HouseholdDevice() {
    this.isPlugged = false
}

HouseholdDevice.prototype.turnOn = function () {
    this.isPlugged = true
};

HouseholdDevice.prototype.turnOff = function () {
    this.isPlugged = false
};

function TelevisorClass(manufacturer, color, price){
    this.manufacturer = manufacturer;
    this.color = color;
    this.price = price
    
}

TelevisorClass.prototype = new HouseholdDevice();

function MicrowaveClass(manufacturer, price, color) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.color = color
}

MicrowaveClass.prototype = new HouseholdDevice();

const televisor = new TelevisorClass('Panasonic', 'grey', 50_000);
const microwave = new MicrowaveClass('Toshiba', 'green', 20_000);
