import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import buyDrug from "../buyAndSell/buyDrug.js";
import { drugArray } from "../../../ui/components/drugMarketDashboard.js";

const drugAnswer = ["Kokain", "Heroin", "Speed", "Crystal Meth", "Ecstasy", "Marihuana", "Hasch", "LSD", "Crack"];

export default function gameBuyDrugsNav() {
    makeUiHome();
    let index = rs.keyInSelect(drugAnswer, chalk.yellowBright(`Was moechtest du kaufen, ${player.Name}? `), {cancel: "Zurueck"});

    if (drugAnswer[index] === "Kokain") {
        buyDrug(0, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[0].price, drugArray[0].name);
    } else if (drugAnswer[index] === "Heroin") {
        buyDrug(1, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[1].price, drugArray[1].name);
    } else if (drugAnswer[index] === "Speed") {
        buyDrug(2, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[2].price, drugArray[2].name);
    } else if (drugAnswer[index] === "Crystal Meth") {
        buyDrug(3, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[3].price, drugArray[3].name);
    } else if (drugAnswer[index] === "Ecstasy") {
        buyDrug(4, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[4].price, drugArray[4].name);
    } else if (drugAnswer[index] === "Marihuana") {
        buyDrug(5, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[5].price, drugArray[5].name);   
    } else if (drugAnswer[index] === "Hasch") {
        buyDrug(6, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[6].price, drugArray[6].name);
    } else if (drugAnswer[index] === "LSD") {
        buyDrug(7, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[7].price, drugArray[7].name);  
    } else if (drugAnswer[index] === "Crack") {
        buyDrug(8, player.Cash, player.AktuelleBelastung, player.Belastungsgrenze, drugArray[8].price, drugArray[8].name);
    } else if (index === -1) {
        makeUiHome();
    }
};