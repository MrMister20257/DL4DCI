import rs from "readline-sync";
import chalk from "chalk";
import makeUiShop from "../../../ui/uiShop.js";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import buyItem from "../buyAndSell/buyItem.js";
import gunArray from "../../../../classes/weaponClasses.js";
import coverArray from "../../../../classes/defenseClasses.js";
import extraArray from "../../../../classes/extrasClasses.js";


const waffenAnswer = ["Baseballschlaeger", "Messer", "Machete", "Pistole", "Schrotflinte", "Sturmgewehr"];
const schutzAnswer = ["Stichschutzweste", "Schusssichere Weste SK1", "Schusssichere Weste SK4"];
const extrasAnswer = ["Bauchtasche", "Sporttasche", "Rucksack", "Rollkoffer", "VW Golf", "3er BMW", "S-Klasse"];
const shopAnswer = ["Waffen", "Schutzkleidung", "Extras"];

export default function gameBuyItemNav() {
    makeUiShop();
    let index = rs.keyInSelect(shopAnswer, chalk.yellowBright(`Was moechtest du kaufen, ${player.Name}? `));

    if (shopAnswer[index] === "Waffen") {
        makeUiShop();
        let index = rs.keyInSelect(waffenAnswer, chalk.yellowBright(`Welche Waffe willst du kaufen, ${player.Name}? `));
    
        if (waffenAnswer[index] === "Baseballschlaeger") {
            buyItem(0, player.Cash, gunArray[0].price, gunArray[0].name, "Waffen");
        } else if (waffenAnswer[index] === "Messer") {
            buyItem(1, player.Cash, gunArray[1].price, gunArray[1].name, "Waffen");
        } else if (waffenAnswer[index] === "Machete") {
            buyItem(2, player.Cash, gunArray[2].price, gunArray[2].name, "Waffen");
        } else if (waffenAnswer[index] === "Pistole") {
            buyItem(3, player.Cash, gunArray[3].price, gunArray[3].name, "Waffen");
        } else if (waffenAnswer[index] === "Schrotflinte") {
            buyItem(4, player.Cash, gunArray[4].price, gunArray[4].name, "Waffen");
        } else if (waffenAnswer[index] === "Sturmgewehr") {
            buyItem(5, player.Cash, gunArray[5].price, gunArray[5].name, "Waffen");
        } else if (index === -1) {
            makeUiHome();
        }
    } else if (shopAnswer[index] === "Schutzkleidung") {
        makeUiShop();
        let index = rs.keyInSelect(schutzAnswer, chalk.yellowBright(`Welche Schutzkleidung willst du kaufen, ${player.Name}? `));
    
        if (schutzAnswer[index] === "Stichschutzweste") {
            buyItem(0, player.Cash, coverArray[0].price, coverArray[0].name, "Schutzkleidung");
        } else if (schutzAnswer[index] === "Schusssichere Weste SK1") {
            buyItem(1, player.Cash, coverArray[1].price, coverArray[1].name, "Schutzkleidung");
        } else if (schutzAnswer[index] === "Schusssichere Weste SK4") {
            buyItem(2, player.Cash, coverArray[2].price, coverArray[2].name, "Schutzkleidung");
        } else if (index === -1) {
            makeUiHome();
        }
    } else if (shopAnswer[index] === "Extras") {
        makeUiShop();
        let index = rs.keyInSelect(extrasAnswer, chalk.yellowBright(`Welches Extra willst du kaufen, ${player.Name}? `));
    
        if (extrasAnswer[index] === "Bauchtasche") {
            buyItem(0, player.Cash, extraArray[0].price, extraArray[0].name, "Extras");
        } else if (extrasAnswer[index] === "Sporttasche") {
            buyItem(1, player.Cash, extraArray[1].price, extraArray[1].name, "Extras");
        } else if (extrasAnswer[index] === "Rucksack") {
            buyItem(2, player.Cash, extraArray[2].price, extraArray[2].name, "Extras");
        } else if (extrasAnswer[index] === "Rollkoffer") {
            buyItem(3, player.Cash, extraArray[3].price, extraArray[3].name, "Extras");
        } else if (extrasAnswer[index] === "VW Golf") {
            buyItem(4, player.Cash, extraArray[4].price, extraArray[4].name, "Extras");
        } else if (extrasAnswer[index] === "3er BMW") {
            buyItem(5, player.Cash, extraArray[5].price, extraArray[5].name, "Extras");
        } else if (extrasAnswer[index] === "S-Klasse") {
            buyItem(6, player.Cash, extraArray[6].price, extraArray[6].name, "Extras");
        } else if (index === -1) {
            makeUi();
        }
    } else if (index = -1) {
        makeUiHome();
    }

}
