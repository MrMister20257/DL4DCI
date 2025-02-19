import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../index.js";
import loadingScreen from "../loadingScreen/loadingScreen.js";


export default function introInfo() {
    loadingScreen();
    const defaultName = "Max Mustermann";
    let tempName = rs.question(`
${chalk.yellowBright("Wie nennet man dich?")}
Dein Name: `);

    player.Name = tempName.trim()

    if (player.Name.length === 0) {
        player.Name = defaultName;
    }

    while(true) {
        let tempMaxDays = parseInt(rs.question(`       
${chalk.yellowBright("Wie lange soll dein Abenteuer gehen?")}
Max. Tage: `), 10);

        const hasLetters = /[a-zA-Z]/.test(tempMaxDays);
        const hasSpezial = /[^a-zA-Z0-9]/.test(tempMaxDays);
        
        if (isNaN(tempMaxDays) || hasLetters || hasSpezial || tempMaxDays < 2) {
            console.log(chalk.red(`Keine gültige Zahl. Bitte nur ganze Zahlen größer 1 eingeben!`));
            continue;
        }
        
        player.maxDays = tempMaxDays;
            
        break;
    }
                                           
    return;
};