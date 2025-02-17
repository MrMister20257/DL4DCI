class Drug {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
};

const kokain = new Drug("Kokain", 35200);
const heroin = new Drug("Heroin", 29282);
const speed = new Drug("Speed", 2270);
const meth = new Drug("Crystal Meth", 26607);
const ecstasy = new Drug("Ecstasy", 1950);
const marihuana = new Drug("Marihuana", 3936);
const hasch = new Drug("Hasch", 2775);
const lsd = new Drug("LSD", 3250);
const crack = new Drug("Crack", 4200);


const drugArray = [];
drugArray.push(kokain, heroin, speed, meth, ecstasy, marihuana, hasch, lsd, crack);

export default drugArray;