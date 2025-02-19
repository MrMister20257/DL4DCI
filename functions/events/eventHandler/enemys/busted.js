import chalk from "chalk";
import player from "../../../../index.js";
import makeUiHome from "../../../ui/uiHome.js";
import cops from "./cops.js"


export default function busted() {
    let chance = Math.floor(Math.random() * (100 - player.Tag + 1) + player.Tag);

    if (player.Tag > 0 && chance > 80 ) {
        let chance2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (chance2 <= 100) {
            cops();
        } else if (chance2 >= 101) {
            player.drugInventory.forEach(element => {
                if (element.amount > 1) {
                    element.amount -= 1;
                } else if (element.amount === 1) {
                    element.amount -= 1;
                    element.cost = [];
                }
            });
            player.updateCarrys();
            player.median();
            player.Cash = player.Cash * 0.9;
            makeUiHome();
            console.log(chalk.red(`Du wurdest von einer rivalisierenden Bande überfallen. 1 KG von jeder Ware in deinem Besitz und 10% deines Bargelds wurden dir abgenommen.`));
            return;
        }
    } else {
        makeUiHome();
        return;
    }
}