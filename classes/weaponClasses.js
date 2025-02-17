class Gun {
    constructor(name, price, power) {
        this.name = name;
        this.price = price;
        this.power = power;
    }
};

const baseballBat = new Gun("Baseballschlaeger", 20, 2);
const messer = new Gun("Messer", 50, 5.5);
const machete = new Gun("Machete", 90, 11);
const pistole = new Gun("Pistole", 900, 135);
const schrotflinte = new Gun("Schrotflinte", 2700, 450);
const sturmgewehr = new Gun("Sturmgewehr", 8450, 1500);

const gunArray = [];
gunArray.push(baseballBat, messer, machete, pistole, schrotflinte, sturmgewehr);

export default gunArray;