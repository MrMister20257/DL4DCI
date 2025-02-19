import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import sellDrug from "../buyAndSell/sellDrug.js";
import { drugArray }  from "../../../ui/components/drugMarketDashboard.js";

const drugAnswer = ["Kokain", "Heroin", "Speed", "Crystal Meth", "Ecstasy", "Marihuana", "Hasch", "LSD", "Crack"];

export default function gameSellDrugsNav() {
    makeUiHome();
    let index = rs.keyInSelect(drugAnswer, chalk.yellowBright(`Was moechtest du verkaufen, ${player.Name}? `), {cancel: "Zurueck"});
    
    if (drugAnswer[index] === "Kokain") {
        sellDrug(0, player.drugInventory[0], drugArray[0].price, drugArray[0].name);
    } else if (drugAnswer[index] === "Heroin") {
        sellDrug(1, player.drugInventory[1], drugArray[1].price, drugArray[1].name);
    } else if (drugAnswer[index] === "Speed") {
        sellDrug(2, player.drugInventory[2], drugArray[2].price, drugArray[2].name);
    } else if (drugAnswer[index] === "Crystal Meth") {
        sellDrug(3, player.drugInventory[3], drugArray[3].price, drugArray[3].name);
    } else if (drugAnswer[index] === "Ecstasy") {
        sellDrug(4, player.drugInventory[4], drugArray[4].price, drugArray[4].name);
    } else if (drugAnswer[index] === "Marihuana") {
        sellDrug(5, player.drugInventory[5], drugArray[5].price, drugArray[5].name);
    } else if (drugAnswer[index] === "Hasch") {
        sellDrug(6, player.drugInventory[6], drugArray[6].price, drugArray[6].name);
    } else if (drugAnswer[index] === "LSD") {
        sellDrug(7, player.drugInventory[7], drugArray[7].price, drugArray[7].name);
    } else if (drugAnswer[index] === "Crack") {
        sellDrug(8, player.drugInventory[8], drugArray[8].price, drugArray[8].name);
    } else if (index === -1) {
        makeUiHome();
    }
};