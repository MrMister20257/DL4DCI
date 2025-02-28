import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import gameBuyDrugsNav from "./gameBuyDrugsNav.js";
import gameSellDrugsNav from "./gameSellDrugsNav.js";
import gameBuyItemNav from "./gameBuyItemNav.js";
import changeCity from "../changeCity/changeCity.js";
import depositAndWithdrawl from "../bank/depositAndWithdrawl.js";
import hospital from "../hospital/hospital.js";
import gameOver from "../../startAndEndGame/gameOver.js";
import gluecksspiel from "../gluecksspiel/gluecksspiel.js";


const navAnswer = ["Drogenmarkt", "Shop", "Stadt wechseln", "Bank", "Krankenhaus", "Gluecksspiel", "Spiel beenden"];
const drugInfo = ["Kaufen", "Verkaufen"];


const cities = ["Hamburg", "Berlin", "Frankfurt", "Muenchen", "Koeln", "Leipzig"];
let firstTime = true;


export default function gameMainNav() {

    if (firstTime) {
        firstTime = false;

        console.log(chalk.magentaBright(`Willkommen im Sumpf des Verbrechens, ${player.Name}!
            
Einsteiger Tutorial:
${chalk.yellow("Drogenmarkt:")} Hier kaufst und verkaufst du deine Ware! Jede Stadt hat ihre individuellen Preise.
            
${chalk.yellow("Shop:")} Hier kannst du Waffen, Schutzkleidung und Extras kaufen. Sehr hilfreich um sich selbstzuverteidigen oder größere Ladungen transportieren zu können.
            
${chalk.yellow("Stadt wechseln:")} Hier kannst du in andere Städte fahren. Sobald man eine andere Stadt betritt, beginnt ein neuer Tag. Cops liegen auf der Lauer!
            
${chalk.yellow("Bank:")} Hier kannst du dein Bargeld auf ein mit 0,5% verzinstes Tagesgeldkonto einzahlen, deinen mit 1% verzinsten Kredit zurückzahlen oder einen neuen Kredit bis zu einer Maximalsumme von 100.000,00 € aufnehmen.
            
${chalk.yellow("Krankenhaus:")} Hier kannst du deine Gesundheit wiederherstellen. Survival of the fittest!

${chalk.yellow("Glücksspiel:")} Hier kannst du ein Würfelspiel spielen. Bei einer 7 gewinnst du. Good luck!

Prinzip verstanden? Dann drücke die Taste 0, um den Bildschirm erneut zu laden. Diese Nachricht wird nur beim ersten Besuch angezeigt!`))

        let index = rs.keyInSelect(navAnswer, chalk.yellowBright(`Was willst du machen, ${player.Name}? `) , {cancel: "Refresh"});

        if (navAnswer[index] === "Drogenmarkt") {
            makeUiHome();
            let index = rs.keyInSelect(drugInfo, chalk.yellowBright(`Was moechtest du tun, ${player.Name}? `), {cancel: "Zurueck"} );
            if (drugInfo[index] === "Kaufen") {
                gameBuyDrugsNav();
            } else if (drugInfo[index] === "Verkaufen") {
                gameSellDrugsNav();
            } else if (index === -1) {
                makeUiHome();
            }
        } else if (index === -1) {
            makeUiHome();
        }

        if (navAnswer[index] === "Shop") {
            gameBuyItemNav();
        }

        if (navAnswer[index] === "Stadt wechseln") {
            changeCity();
        }

        if (navAnswer[index] === "Bank") {
            depositAndWithdrawl();
        }

        if (navAnswer[index] === "Krankenhaus") {
            hospital();
        }

        if (navAnswer[index] === "Gluecksspiel") {
            gluecksspiel();
        }

        if (navAnswer[index] === "Spiel beenden") {
            makeUiHome();
            let index = rs.keyInSelect(["Ja, ich moechte das Spiel beenden!"], chalk.red("Moechtest du das Spiel wirklich beenden? "), {cancel: "Zurueck"});
    
            if (index === 0) {
                console.clear();
                gameOver();
                process.exit();
            }
    
            if (index === -1) {
                makeUiHome();
            } 
        }
    }

    let index = rs.keyInSelect(navAnswer, chalk.yellowBright(`Was willst du machen, ${player.Name}? `), {cancel: "Refresh"});

    if (navAnswer[index] === "Drogenmarkt") {
        makeUiHome();
        let index = rs.keyInSelect(drugInfo, chalk.yellowBright(`Was moechtest du tun, ${player.Name}? `), {cancel: "Zurueck"});
        if (drugInfo[index] === "Kaufen") {
            gameBuyDrugsNav();
        } else if (drugInfo[index] === "Verkaufen") {
            gameSellDrugsNav();
        } else if (index === -1) {
            makeUiHome();
        }
    } else if (index === -1) {
        makeUiHome();
    }

    if (navAnswer[index] === "Shop") {
        gameBuyItemNav();
    }

    if (navAnswer[index] === "Stadt wechseln") {
        changeCity();
    }

    if (navAnswer[index] === "Bank") {
        depositAndWithdrawl();
    }

    if (navAnswer[index] === "Krankenhaus") {
        hospital();
    }

    if (navAnswer[index] === "Gluecksspiel") {
        gluecksspiel();
    }

    if (navAnswer[index] === "Spiel beenden") {
        makeUiHome();
        let index = rs.keyInSelect(["Ja, ich moechte das Spiel beenden!"], chalk.red("Moechtest du das Spiel wirklich beenden? "), {cancel: "Zurueck"});

        if (index === 0) {
            console.clear();
            gameOver();
            process.exit();
        }

        if (index === -1) {
            makeUiHome();
        } 
    }
}