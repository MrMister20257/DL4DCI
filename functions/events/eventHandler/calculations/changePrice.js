import drugArray from "../../../../classes/drugClasses.js";

export default function changePrice() {
    drugArray.forEach(element => {
        let chance = Math.floor(Math.random() * (100 - 1 + 1) + 1)
        if (chance >= 0 && chance <= 36) {
            element.price *= 1.05;
        } else if (chance > 36 && chance <= 69) {
            element.price;
        } else if (chance > 69 && chance <= 100) {
            element.price *= 0.97;
        }
    });
}