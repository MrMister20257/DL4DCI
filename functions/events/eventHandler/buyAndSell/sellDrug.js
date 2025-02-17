import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../../index.js"
import makeUiHome from "../../../ui/uiHome.js";

export default function sellDrug(index, playerInventory, itemPrice, itemName) {
    let units;
    if (player.drugInventory[index].amount === 0) {
        makeUiHome();
        return console.log(chalk.red("Du hast diese Droge nicht auf Lager!"));
    }
    
    while (true) {
        units = parseInt(rs.question(chalk.yellowBright("Wie viele Einheiten moechtest du verkaufen? ")), 10);

        if (isNaN(units) || units <= 0) {
            console.log(chalk.red("Ungültige Eingabe! Bitte eine Zahl größer als 0 eingeben."));
            continue;
        }

        if ((player.drugInventory[index].amount - units) < 0) {
            console.log(chalk.red("Netter versuch..."));
            continue;
        }

        let total = units * itemPrice;

        player.Cash += parseFloat(total);
        player.drugInventory[index].amount -= units;
        
        if (player.drugInventory[index].amount === 0) {
            player.drugInventory[index].cost = [];
        };

        player.median();
        player.updateCarrys();
        makeUiHome();
        console.log(chalk.green(`Du hast erfolgreich ${units}x ${itemName} verkauft!`))
        break;
    }
}