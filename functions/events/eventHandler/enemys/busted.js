import chalk from "chalk";
import player from "../../../../index.js";
import makeUiHome from "../../../ui/uiHome.js";


export default function busted() {
    let chance = Math.floor(Math.random() * (100 - player.Tag + 1) + player.Tag);

    if (player.Tag > 5 && chance > 80) {
        let chance2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        if (chance2 <= 34) {
            let days = Math.floor(Math.random() * (3 - 1 + 1) + 1);

            player.drugInventory.forEach(element => {
                element.amount = 0;
                element.cost = [];
            });
            player.updateCarrys();
            player.median();
            player.Tag += days;
            makeUiHome();
            console.log(chalk.red(`Die Cops haben dich erwischt. Dir wurde deine Ware abgenommen und du wurdest für ${days} Tage inhaftiert.`));
            return;
        } else if (chance2 >= 35) {
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