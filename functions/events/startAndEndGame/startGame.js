import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../index.js";
import gameOver from "./gameOver.js";
import gameMainNav from "../eventHandler/nav/gameMainNav.js";
import makeUiHome from "../../ui/uiHome.js";
import introInfo from "../introInfo/introInfo.js";

export default function startGame() {
    introInfo();
    if (rs.keyInYN(`
${chalk.yellowBright(`Bist du bereit, ${player.Name}? `)}`)) {
        makeUiHome();
        while (player.Tag < player.maxDays) {
            gameMainNav();
        }
        if (player.Tag >= player.maxDays || player.Gesundheit <= 0) {
            gameOver();    
        }
    } else {
        return console.log(chalk.red(`${player.Name} du bist ein elendiger Feigling!`))
    }
}