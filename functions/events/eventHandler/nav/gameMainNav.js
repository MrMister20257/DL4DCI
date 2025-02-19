import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import gameBuyDrugsNav from "./gameBuyDrugsNav.js";
import gameSellDrugsNav from "./gameSellDrugsNav.js";
import gameBuyItemNav from "./gameBuyItemNav.js";
import changeCity from "../changeCity/changeCity.js";
import depositAndWithdrawl from "../bank/depositAndWithdrawl.js";
import hospital from "../hospital/hospital.js";


const navAnswer = ["Drogenmarkt", "Shop", "Stadt wechseln", "Bank", "Krankenhaus"];
const drugInfo = ["Kaufen", "Verkaufen"];


const cities = ["Hamburg", "Berlin", "Frankfurt", "Muenchen", "Koeln", "Leipzig"];


export default function gameMainNav() {
    let index = rs.keyInSelect(navAnswer, chalk.yellowBright(`Was willst du machen, ${player.Name}? `));

    if (navAnswer[index] === "Drogenmarkt") {
        makeUiHome();
        let index = rs.keyInSelect(drugInfo, chalk.yellowBright(`Was moechtest du tun, ${player.Name}? `));
        if (drugInfo[index] === "Kaufen") {
            gameBuyDrugsNav();
        } else if (drugInfo[index] === "Verkaufen") {
            gameSellDrugsNav();
        } else if (index === -1) {
            makeUiHome();
        }
    } else if (index === -1) {
        makeUiHome();
    }

    if (navAnswer[index] === "Shop") {
        gameBuyItemNav();
    }

    if (navAnswer[index] === "Stadt wechseln") {
        changeCity();
    }

    if (navAnswer[index] === "Bank") {
        depositAndWithdrawl();
    }

    if (navAnswer[index] === "Krankenhaus") {
        hospital();
    }
}