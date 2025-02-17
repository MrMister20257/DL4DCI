import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../index.js";
import loadingScreen from "../loadingScreen/loadingScreen.js";


export default function introInfo() {
    loadingScreen();
    player.Name = rs.question(`
${chalk.yellowBright("Wie nennet man dich?")}
Dein Name: `);

    player.maxDays = rs.question(`       
${chalk.yellowBright("Wie lange soll dein Abenteuer gehen?")}
Max. Tage: `);
                                           
    return;
};