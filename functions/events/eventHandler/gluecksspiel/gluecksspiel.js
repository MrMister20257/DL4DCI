import rs from "readline-sync";
import chalk from "chalk";
import player from "../../../../index.js";
import makePlayerDashboard from "../../../ui/components/playerDashboard.js";
import formatter from "../../../../utils/formatter.js";
import makeUiHome from "../../../ui/uiHome.js";

const glueckspielAnswer = ["Wuerfelspiel"];
const answerKeepPlaying = ["Weiter spielen"];

export default function gluecksspiel() {
    console.clear();
    makePlayerDashboard();
    console.log(`
        
                               ▄████████    ▄███████▄  ▄█     ▄████████  ▄█        ▄██████▄      ███        ▄█    █▄       ▄████████    ▄█   ▄█▄ 
                              ███    ███   ███    ███ ███    ███    ███ ███       ███    ███ ▀█████████▄   ███    ███     ███    ███   ███ ▄███▀ 
                              ███    █▀    ███    ███ ███▌   ███    █▀  ███       ███    ███    ▀███▀▀██   ███    ███     ███    █▀    ███▐██▀   
                              ███          ███    ███ ███▌  ▄███▄▄▄     ███       ███    ███     ███   ▀  ▄███▄▄▄▄███▄▄  ▄███▄▄▄      ▄█████▀    
                            ▀███████████ ▀█████████▀  ███▌ ▀▀███▀▀▀     ███       ███    ███     ███     ▀▀███▀▀▀▀███▀  ▀▀███▀▀▀     ▀▀█████▄    
                                     ███   ███        ███    ███    █▄  ███       ███    ███     ███       ███    ███     ███    █▄    ███▐██▄   
                               ▄█    ███   ███        ███    ███    ███ ███▌    ▄ ███    ███     ███       ███    ███     ███    ███   ███ ▀███▄ 
                             ▄████████▀   ▄████▀      █▀     ██████████ █████▄▄██  ▀██████▀     ▄████▀     ███    █▀      ██████████   ███   ▀█▀ 
                                                                        ▀                                                              ▀         
`)

    let index = rs.keyInSelect(glueckspielAnswer, `Bei welchem Spiel moechtest du dein Glueck versuchen, ${player.Name}`, {cancel: "Zurueck"});
    
    if (glueckspielAnswer[index] === "Wuerfelspiel") {
        let keepPlaying = true;
        
        while (keepPlaying && player.Cash > 0) {
            let random1 = Math.floor(Math.random() * 6) + 1;
            let random2 = Math.floor(Math.random() * 6) + 1;
            let money = parseInt(rs.question(chalk.yellow("Wie viel moechtest du setzen? ")));
            
            const hasLetters = /[a-zA-Z]/.test(money);
            const hasSpezial = /[^a-zA-Z0-9]/.test(money);
    
            if (isNaN(money) || hasLetters || hasSpezial || money === 0) {
                console.log(chalk.red(`Keine gültige Zahl. Bitte nur ganze Zahlen größer 0 eingeben!`));
                continue;
            }

            let result = random1 + random2;

            if (result === 7) {
                money *= 2;
                player.Cash += money;
                console.log(`Würfelergebnis: ${result}`)
                console.log(chalk.green(`Du hast gewonnen! Dir wurden ${formatter.format(money)} ausgezahlt.`))
            } else {
                player.Cash -= money;
                console.log(`Würfelergebnis: ${result}`)
                console.log(chalk.red(`Du hast verloren!`))
            }

            let answer = rs.keyInSelect(answerKeepPlaying, "Was moechtest du machen?", {cancel: "Beenden"});

            if (answerKeepPlaying[answer] === "Weiter spielen") {
                console.clear();
                makePlayerDashboard();
                console.log(`
        
                               ▄████████    ▄███████▄  ▄█     ▄████████  ▄█        ▄██████▄      ███        ▄█    █▄       ▄████████    ▄█   ▄█▄ 
                              ███    ███   ███    ███ ███    ███    ███ ███       ███    ███ ▀█████████▄   ███    ███     ███    ███   ███ ▄███▀ 
                              ███    █▀    ███    ███ ███▌   ███    █▀  ███       ███    ███    ▀███▀▀██   ███    ███     ███    █▀    ███▐██▀   
                              ███          ███    ███ ███▌  ▄███▄▄▄     ███       ███    ███     ███   ▀  ▄███▄▄▄▄███▄▄  ▄███▄▄▄      ▄█████▀    
                            ▀███████████ ▀█████████▀  ███▌ ▀▀███▀▀▀     ███       ███    ███     ███     ▀▀███▀▀▀▀███▀  ▀▀███▀▀▀     ▀▀█████▄    
                                     ███   ███        ███    ███    █▄  ███       ███    ███     ███       ███    ███     ███    █▄    ███▐██▄   
                               ▄█    ███   ███        ███    ███    ███ ███▌    ▄ ███    ███     ███       ███    ███     ███    ███   ███ ▀███▄ 
                             ▄████████▀   ▄████▀      █▀     ██████████ █████▄▄██  ▀██████▀     ▄████▀     ███    █▀      ██████████   ███   ▀█▀ 
                                                                        ▀                                                              ▀         
`)
                continue;
            }

            if (answer === -1) {
                keepPlaying = false;
                makeUiHome();
                break;
            }
        }
    } 
    if (index === -1) {
        makeUiHome();
    }
}