import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";

const bankAnswer =["Einzahlen", "Abheben", "Schulden tilgen", "Geld leihen"];


export default function depositAndWithdrawl() {
    makeUiHome();
    while(true) {
        let index = rs.keyInSelect(bankAnswer, `Was moechtest du tun, ${player.Name}? `, {cancel: "Zurueck"});
        
        if(bankAnswer[index] === "Einzahlen") {
            if (player.Cash !== 0) {
                makeUiHome();
                let amount = parseFloat(rs.question(`Wie viel moechtest du einzahlen? `));

                if (amount > player.Cash) {
                    makeUiHome();
                    console.log(chalk.red("Du hast nicht so viel Geld!"));
                } else {
                    player.Cash = Math.round((player.Cash - amount) * 100) / 100;
                    player.Kontostand = Math.round((player.Kontostand + amount) * 100) / 100;
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
                        player.Kontostand = Math.round((player.Kontostand - amount) * 100) / 100;
                        player.Cash = Math.round((player.Cash + amount) * 100) / 100;
                        makeUiHome();
                        break;
                    }
                } else {
                    makeUiHome();
                    console.log(chalk.red("Du hast kein Geld auf dem Konto, welches du abheben könntest!"))
                }
            } else if (bankAnswer[index] === "Abheben") {
            if (player.Kontostand !== 0) {
                    makeUiHome();
                    let amount = parseFloat(rs.question(`Wie viel moechtest du abheben? `));
                        
                    if (amount > player.Kontostand) {
                        makeUiHome();
                        console.log(chalk.red("Du hast nicht so viel Geld auf deinem Konto!"));
                    } else {
                        player.Kontostand = Math.round((player.Kontostand - amount) * 100) / 100;
                        player.Cash = Math.round((player.Cash + amount) * 100) / 100;
                        makeUiHome();
                        break;
                    }
                } else {
                    makeUiHome();
                    console.log(chalk.red("Du hast kein Geld auf dem Konto, welches du abheben könntest!"))
                }
            } else if (bankAnswer[index] === "Schulden tilgen") {
                if (player.Schulden !== 0) {
                        makeUiHome();
                        let amount = parseFloat(rs.question(`Wie viel moechtest du tilgen? `));
                            
                        if (amount > player.Schulden) {
                            makeUiHome();
                            console.log(chalk.red("Du hast nicht so viele Schulden!"));
                        } else {
                            player.Schulden = Math.round((player.Schulden - amount) * 100) / 100;
                            player.Cash = Math.round((player.Cash - amount) * 100) / 100;
                            makeUiHome();
                            break;
                        }
                    } else {
                        makeUiHome();
                        console.log(chalk.red("Du hast keine Schulden, die du tilgen koenntest!"))
                    }
            } else if (bankAnswer[index] === "Geld leihen") {
                if (player.Schulden < 100000) {
                        makeUiHome();
                        let amount = parseFloat(rs.question(`Wie viel Geld moechtest du dir leihen? `));
                            
                        if (amount > 100000) {
                            makeUiHome();
                            console.log(chalk.red("Du kannst dir maximal 100.000,00 € leihen!"));
                        } else {
                            player.Schulden = Math.round((player.Schulden + amount) * 100) / 100;
                            player.Cash = Math.round((player.Cash + amount) * 100) / 100;
                            makeUiHome();
                            break;
                        }
                    } else {
                        makeUiHome();
                        console.log(chalk.red("Du hast das Maximum von 100.000,00 € bereits erreicht!"))
                    }
            } else if (index === -1) {
            makeUiHome();
            break;
        }
    }
}
