class Drug {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const drugList = [
    new Drug("Kokain", 35200),
    new Drug("Heroin", 29282),
    new Drug("Speed", 2270),
    new Drug("Crystal Meth", 26607),
    new Drug("Ecstasy", 1950),
    new Drug("Marihuana", 3936),
    new Drug("Hasch", 2775),
    new Drug("LSD", 3250),
    new Drug("Crack", 4200)
];

const createDrugArray = () => drugList.map(drug => new Drug(drug.name, drug.price));

const drugArrayHamburg = createDrugArray();
const drugArrayBerlin = createDrugArray();
const drugArrayFrankfurt = createDrugArray();
const drugArrayMuenchen = createDrugArray();
const drugArrayKoeln = createDrugArray();
const drugArrayLeipzig = createDrugArray();

export { drugArrayHamburg, drugArrayBerlin, drugArrayFrankfurt, drugArrayMuenchen, drugArrayKoeln, drugArrayLeipzig };