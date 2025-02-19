import { drugArrayHamburg, drugArrayBerlin, drugArrayFrankfurt, drugArrayMuenchen, drugArrayKoeln, drugArrayLeipzig } from "../../../../classes/drugClasses.js";

export default function changePrice() {
    drugArrayHamburg.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });

    drugArrayBerlin.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });

    drugArrayFrankfurt.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });

    drugArrayMuenchen.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });

    drugArrayKoeln.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });

    drugArrayLeipzig.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance === 1) {
            element.price = Math.round((element.price * 1.1) * 100) / 100;
        } else if (chance >= 2 && chance <= 36) {
            element.price = Math.round((element.price * 1.02) * 100) / 100;      
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 99) {
            element.price = Math.round((element.price * 0.98) * 100) / 100;
        } else if (chance === 100) {
            element.price = Math.round((element.price * 0.90) * 100) / 100;
        }
    });
}