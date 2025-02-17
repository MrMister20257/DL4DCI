import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";

const bankAnswer =["Einzahlen", "Abheben"];


export default function depositAndWithdrawl() {
    makeUiHome();
    while(true) {
        let index = rs.keyInSelect(bankAnswer, `Was moechtest du tun, ${player.Name}? `);
        
        if(bankAnswer[index] === "Einzahlen") {
            if (player.Cash !== 0) {
                makeUiHome();
                let amount = parseFloat(rs.question(`Wie viel moechtest du einzahlen? `));

                if (amount > player.Cash) {
                    makeUiHome();
                    console.log(chalk.red("Du hast nicht so viel Geld!"));
                } else {
                    player.Cash -= amount;
                    player.Kontostand += amount;
                    makeUiHome();
                    break;
                }
            } else {
                makeUiHome();
                console.log(chalk.red("Du hast kein Bargeld, welches du einzahlen könntest!"))
            }
        } else if (bankAnswer[index] === "Abheben") {
            if (player.Kontostand !== 0) {
                    makeUiHome();
                    let amount = parseFloat(rs.question(`Wie viel moechtest du abheben? `));
                        
                    if (amount > player.Kontostand) {
                        makeUiHome();
                        console.log(chalk.red("Du hast nicht so viel Geld auf deinem Konto!"));
                    } else {
                        player.Kontostand -= amount;
                        player.Cash += amount;
                        makeUiHome();
                        break;
                    }
                } else {
                    makeUiHome();
                    console.log(chalk.red("Du hast kein Geld auf dem Konto, welches du abheben könntest!"))
                }
            } else if (index === -1) {
                makeUiHome();
                break;
            }
    }
}
