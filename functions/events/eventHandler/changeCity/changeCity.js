import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../../index.js";
import changeCityAnimation from "./changeCityAnimation.js";
import interest from "../calculations/interest.js";
import makeUiHome from "../../../ui/uiHome.js";
import changePrice from "../calculations/changePrice.js";
import busted from "../enemys/busted.js";

const cities = ["Hamburg", "Berlin", "Frankfurt", "Muenchen", "Koeln", "Leipzig"];


export default function changeCity() {
    makeUiHome()
    let index = rs.keyInSelect(cities, `Wo willst du hin, ${player.Name}? `);
    
    if(player.Stadt !== cities[index]) {
        if (cities[index] === "Hamburg") {
            changeCityAnimation();
            player.Stadt = "Hamburg";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (cities[index] === "Berlin") {
            changeCityAnimation();
            player.Stadt = "Berlin";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (cities[index] === "Frankfurt") {
            changeCityAnimation();
            player.Stadt = "Frankfurt";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (cities[index] === "Muenchen") {
            changeCityAnimation();
            player.Stadt = "Muenchen";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (cities[index] === "Koeln") {
            changeCityAnimation();
            player.Stadt = "Koeln";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (cities[index] === "Leipzig") {
            changeCityAnimation();
            player.Stadt = "Leipzig";
            player.Tag += 1;
            interest();
            changePrice();
            busted();
        } else if (index === -1) {
            makeUiHome();
        }
    } else {
        makeUiHome();
        console.log(chalk.red(`Du bist bereits in ${cities[index]}. Waehle eine andere Stadt!`));
    }
}