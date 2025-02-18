import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../../index.js"
import makeUiHome from "../../../ui/uiHome.js";

const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});
export default function buyItem(index, playerCash, itemPrice, itemName, shopAnswer) {
    let units;
    if (itemPrice > playerCash) {
        makeUiHome();
        return console.log(chalk.red("Du kannst dir ohne Bargeld keinen Artikel kaufen!"));
    }

    while (true) {
        units = parseInt(rs.question(chalk.yellowBright("Wie viele Einheiten moechtest du kaufen? ")), 10);

        if (isNaN(units) || units <= 0) {
            console.log(chalk.red("Ungültige Eingabe! Bitte eine Zahl größer als 0 eingeben."));
            continue;
        }

        let totalCost = units * itemPrice;

        if (totalCost > playerCash) {
            console.log(chalk.red(`Du hast nicht genug Geld! (${formatter.format(totalCost)}€ noetig, aber nur ${formatter.format(playerCash)}€ verfuegbar.)`));
            console.log("Versuche es nochmal mit einer kleineren Menge.");
            continue;
        } else {
            if (shopAnswer === "Waffen") {
                player.Cash = Math.round((player.Cash - totalCost) * 100) / 100;
                player.gunInventory[index].amount += units;
                player.updateFirepower();
                makeUiHome();
                console.log(chalk.green(`Du hast erfolgreich ${units}x ${itemName} gekauft!`))
                break;
            } else if (shopAnswer === "Schutzkleidung") {
                player.Cash = Math.round((player.Cash - totalCost) * 100) / 100;
                player.coverInventory[index].amount += units;
                player.updateDefense();
                makeUiHome();
                console.log(chalk.green(`Du hast erfolgreich ${units}x ${itemName} gekauft!`))
                break;
            } else if (shopAnswer === "Extras") {
                player.Cash = Math.round((player.Cash - totalCost) * 100) / 100;
                player.extraInventory[index].amount += units;
                player.updateCapacity();
                player.updateSpeed();
                makeUiHome();
                console.log(chalk.green(`Du hast erfolgreich ${units}x ${itemName} gekauft!`))
                break;
            }
        }
    }
}