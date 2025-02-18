import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../../index.js"
import makeUiHome from "../../../ui/uiHome.js";

const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});
export default function buyDrug(index, playerCash, playerCarry, playerMaxCarry, itemPrice, itemName) {
    let units;
    if(playerCash < itemPrice) {
        makeUiHome();
        return console.log(chalk.red("Du hast nicht genug Bargeld!"));
    }

    if (player.AktuelleBelastung === player.Belastungsgrenze) {
        makeUiHome();
        return console.log(chalk.red("Du kannst nicht noch mehr tragen!"))
    }
    
    while (true) {
        units = parseInt(rs.question(chalk.yellowBright("Wie viele Einheiten moechtest du kaufen? ")), 10);

        if (isNaN(units) || units <= 0) {
            console.log(chalk.red("Ungültige Eingabe! Bitte eine Zahl größer als 0 eingeben."));
            continue;
        }
1
        let totalCost = units * itemPrice;

        if (totalCost > playerCash) {
            makeUiHome();
            console.log(chalk.red(`Du hast nicht genug Geld! (${formatter.format(totalCost)} noetig, aber nur ${formatter.format(playerCash)} verfuegbar.)`));
            console.log("Versuche es nochmal mit einer kleineren Menge.");
            continue;
        } else if (playerCarry + units > playerMaxCarry) {
            makeUiHome()
            console.log(chalk.red(`Du kannst nicht so viel Tragen. Deine aktuelle Belastungsgrenze ist ${playerMaxCarry} KG!`))
            continue;
        } 
        else {
            let total = parseFloat(totalCost);
            player.Cash = Math.round((player.Cash - total) * 100) / 100;
            player.drugInventory[index].cost.push(itemPrice);
            player.drugInventory[index].amount += units;
            player.updateCarrys();
            player.median();
            makeUiHome();
            console.log(chalk.green(`Du hast erfolgreich ${units}x ${itemName} gekauft!`))
            break;
        }
    }
}