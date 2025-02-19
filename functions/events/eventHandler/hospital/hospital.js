import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../..//index.js";
import formatter from "../../../../utils/formatter.js";


const hospitalAnswer = ["100% Gesundheit wiederherstellen", "10 Gesundheit wiederherstellen", "1 Gesundheit wiederherstellen"]

export default function hospital() {
    makeUiHome();
    let exit = false;
    
    while(!exit) {
    let index = rs.keyInSelect(hospitalAnswer, `Deine aktuelle Gesundheit betraegt ${player.Gesundheit}. Wie viel moechtest du wiederherstellen?`);

        if (hospitalAnswer[index] === "100% Gesundheit wiederherstellen") {
            
            if (player.Gesundheit === 100) {
                makeUiHome();
                console.log(chalk.red(`Du bist bei bester Gesundheit und benötigst keinen Arzt!`))
                continue;
            }
            let amount = 100 - player.Gesundheit;
            let price = amount * 500;
            
            if (player.Cash >= price) {
                player.Gesundheit = 100;
                player.Cash = Math.round((player.Cash - price) * 100) / 100;
                makeUiHome();
                console.log(chalk.green(`Deine Gesundheit wurde vollständig wiederhergestellt!`));
                exit = true;
            } else {
                makeUiHome();
                console.log(chalk.red(`Der Preis für die Behandlung in Höhe von ${formatter.format(price)}, übersteigt dein Bargeld. Wähle eine andere Option!`))
                continue;
            }

        } else if (hospitalAnswer[index] === "10 Gesundheit wiederherstellen") {
            
            if (player.Gesundheit === 100) {
                makeUiHome();
                console.log(chalk.red(`Du bist bei bester Gesundheit und benötigst keinen Arzt!`))
                continue;
            }

            if ((player.Gesundheit + 10) < 100) {
                makeUiHome();
                console.log(chalk.red(`Diese Behandlungsmethode ist nicht die richtige für dich, wähle "1 Punkt wiederherstellen", um bares Geld zu sparen!`))
                continue;
            }
            
            let price = 5000;
            
            if (player.Cash >= price) {
                player.Gesundheit += 10;
                player.Cash = Math.round((player.Cash - price) * 100) / 100;
                makeUiHome();
                console.log(chalk.green(`Deine Gesundheit wurde um 10 Punkte wiederhergestellt!`));
                exit = true;
            } else {
                makeUiHome();
                console.log(chalk.red(`Der Preis für die Behandlung in Höhe von ${formatter.format(price)}, übersteigt dein Bargeld. Wähle eine andere Option!`))
                continue;
            }

        } else if (hospitalAnswer[index] === "1 Gesundheit wiederherstellen" ) {
            let price = 500;

            if (player.Gesundheit === 100) {
                makeUiHome();
                console.log(chalk.red(`Du bist bei bester Gesundheit und benötigst keinen Arzt!`))
                continue;
            }
            
            if (player.Cash >= price) {
                player.Gesundheit += 1;
                player.Cash = Math.round((player.Cash - price) * 100) / 100;
                makeUiHome();
                console.log(chalk.green(`Deine Gesundheit wurde um 1 Punkte wiederhergestellt!`));
                exit = true;
            } else {
                makeUiHome();
                console.log(chalk.red(`Der Preis für die Behandlung in Höhe von ${formatter.format(price)}, übersteigt dein Bargeld. Wähle eine andere Option!`))
                continue;
            }

        } else {
            makeUiHome();
            exit = true;
        }
    }
}   