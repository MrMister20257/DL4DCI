class Cover {
    constructor(name, price, defense) {
        this.name = name;
        this.price = price;
        this.defense = defense;
    }
};

const stichschutz = new Cover("Stichschutzweste", 140, 6);
const schussSk1 = new Cover("Schusssichere Weste SK1", 1500, 80);
const schussSk4 = new Cover("Schusssichere Weste SK4", 5000, 350);

const coverArray = [];
coverArray.push(stichschutz, schussSk1, schussSk4)

export default coverArray;