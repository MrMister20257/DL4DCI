class Extra {
    constructor(name, price, Belastungsgrenze, speed) {
        this.name = name;
        this.price = price;
        this.Belastungsgrenze = Belastungsgrenze;
        this.speed = speed;
    }
};

const bauchtasche = new Extra("Bauchtasche", 39.99, 1, 0);
const sporttasche = new Extra("Sporttasche", 89.99, 3, 0);
const rucksack = new Extra("Rucksack", 149.99, 5, 0);
const rollkoffer = new Extra("Rollkoffer", 349.99, 12, 0);
const vwGolf = new Extra("VW Golf", 12500, 500, 180);
const bmw3 = new Extra("3er BMW", 40000, 1700, 200);
const mercedesS = new Extra("S-Klasse", 82000, 3500, 240);

const extraArray = [];
extraArray.push(bauchtasche, sporttasche, rucksack, rollkoffer, vwGolf, bmw3, mercedesS);

export default extraArray;