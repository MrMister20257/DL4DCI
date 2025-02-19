import rs from "readline-sync";
import chalk from "chalk";
import makeUiHome from "../../../ui/uiHome.js";
import player from "../../../../index.js";
import createEnemy from "./createEnemy.js";
import gameOver from "../../startAndEndGame/gameOver.js";


const copsAnswer = ["Fliehen", "Kaempfen", "Ergeben"];
const copsAnswer2 = ["Kaempfen", "Ergeben"];

export default function cops() {
    console.clear();
    const enemyArray = createEnemy();
    let escaped = false;

    while (!escaped) {
        console.log(`Gesundheit: ${player.Gesundheit} - Aktuelle Verteidigung: ${player.Verteidigung}`)
        let index = rs.keyInSelect(copsAnswer, chalk.red(`Verdammt ${player.Name}, ${enemyArray.length} Cops sind hinter dir her! Was willst du machen? `));

        if (index === -1) {
            console.log(chalk.yellow("Keine Auswahl getroffen! Versuche es erneut."));
            continue;
        }

        if (copsAnswer[index] === "Fliehen") {
            console.log(chalk.blue("Du versuchst zu fliehen..."));

            if (player.speed === 0) {
                console.clear()
                console.log(chalk.red("Du kannst ohne Fahrzeug nicht fliehen!"));
                continue;
            }

            if (player.speed > 0) {
                let remainingEnemies = [];

                enemyArray.forEach((enemy, i) => {
                    if (player.speed > enemy.speed) {
                        console.log(chalk.green(`Du hast Cop #${i + 1} abgehängt!`));
                    } else {
                        remainingEnemies.push(enemy);
                        console.log(chalk.red(`Cop #${i + 1} konnte dir folgen!`));
                    }
                });

                enemyArray.length = 0;
                enemyArray.push(...remainingEnemies);

                if (enemyArray.length === 0) {
                    makeUiHome();
                    console.log(chalk.green("Du bist erfolgreich entkommen!"));
                    escaped = true;
                }
            }
            continue;
        }

        if (copsAnswer[index] === "Kaempfen") {
            console.clear();
            console.log(chalk.blue("Du entscheidest dich zu kämpfen..."));

            if (player.Angriffskraft === 0) {
                console.clear();
                console.log(chalk.red("Du kannst ohne Waffen nicht kämpfen!"));
                continue;
            }

            let remainingEnemies = [];
            
            enemyArray.forEach((enemy, i) => {
                let playerAttack = Math.round(player.Angriffskraft / 10)
                let enemyAttack = Math.round(enemy.angriffskraft / 10);

                if (playerAttack > 0 && enemy.verteidigung > 0) {
                    let temp = Math.min(playerAttack, enemy.verteidigung);
                    enemy.verteidigung -= playerAttack;
                    playerAttack -= temp;

                    if (enemy.verteidigung <= 0 && playerAttack > 0) {
                        let temp = Math.min(playerAttack, enemy.health);
                        enemy.health -= playerAttack;
                        playerAttack -= temp;

                        if (enemy.health <= 0) {
                            console.log(chalk.green(`Du hast Cop #${i + 1} besiegt!`));

                        } else {
                            remainingEnemies.push(enemy);
                            console.log(chalk.red(`Cop #${i + 1} hat mit ${enemy.health} Gesundheit und ${enemy.verteidigung} Verteidigung überlebt!`));

                            if (enemyAttack > 0 && player.Verteidigung > 0) {
                                let temp = Math.min(enemyAttack, player.Verteidigung);
                                player.Verteidigung -= enemyAttack;
                                enemyAttack -= temp;
                                if (player.Verteidigung <= 0 && enemyAttack > 0) {
                                    let temp = Math.min(enemyAttack, player.Gesundheit);
                                    player.Gesundheit -= enemyAttack;
                                    enemyAttack -= temp;

                                       if (player.Gesundheit <= 20) {
                                        let days = Math.floor(Math.random() * 3) + 1;
                                        player.drugInventory.forEach(element => { element.amount = 0; element.cost = []; });
                                        player.gunInventory.forEach(element => { element.amount = 0; });
                                        player.Tag += days;
                                        player.Gesundheit = 20;
                                        player.updateDefense();
                                        player.updateFirepower();
                                        player.updateCarrys();
                                        makeUiHome();
                                        console.log(chalk.red(`Du wurdest angeschossen und bist bewusstlos zu Boden gesackt. Alle Drogen und Waffen wurden dir abgenommen. Du warst ${days} Tage im Gefängnis.`));
                                        escaped = true;
                                    }
                                }
                            } else {
                                let temp = Math.min(enemyAttack, player.Gesundheit);
                                player.Gesundheit -= enemyAttack;
                                enemyAttack -= temp;
                                
                                if (player.Gesundheit <= 20) {
                                    let days = Math.floor(Math.random() * 3) + 1;
                                    player.drugInventory.forEach(element => { element.amount = 0; element.cost = []; });
                                    player.gunInventory.forEach(element => { element.amount = 0; });
                                    player.Tag += days;
                                    player.Gesundheit = 20;
                                    player.updateDefense();
                                    player.updateFirepower();
                                    player.updateCarrys();
                                    makeUiHome();
                                    console.log(chalk.red(`Du wurdest angeschossen und bist bewusstlos zu Boden gesackt. Alle Drogen und Waffen wurden dir abgenommen. Du warst ${days} Tage im Gefängnis.`));
                                    escaped = true;
                                }
                            }
                        }

                    } else {
                        remainingEnemies.push(enemy);
                        console.log(chalk.red(`Cop #${i + 1} hat mit ${enemy.health} Gesundheit und ${enemy.verteidigung} Verteidigung überlebt!`));

                    }    

                } else if (playerAttack > 0 && enemy.verteidigung <= 0) {
                    let temp = Math.min(playerAttack, enemy.health);
                    enemy.health -= playerAttack;
                    playerAttack -= temp;

                    if (enemy.health <= 0) {
                        console.log(chalk.green(`Du hast Cop #${i + 1} besiegt!`));

                    } else {
                        remainingEnemies.push(enemy);
                        console.log(chalk.red(`Cop #${i + 1} hat mit ${enemy.health} Gesundheit und ${enemy.verteidigung} Verteidigung überlebt!`));  
                        
                        if (enemyAttack > 0 && player.Verteidigung > 0) {
                            let temp = Math.min(enemyAttack, player.Verteidigung);
                            player.Verteidigung -= enemyAttack;
                            enemyAttack -= temp;

                            if (player.Verteidigung <= 0 && enemyAttack > 0) {
                                let temp = Math.min(enemyAttack, player.Gesundheit);
                                player.Gesundheit -= enemyAttack;
                                enemyAttack -= temp;

                                   if (player.Gesundheit <= 20) {
                                    let days = Math.floor(Math.random() * 3) + 1;
                                    player.drugInventory.forEach(element => { element.amount = 0; element.cost = []; });
                                    player.gunInventory.forEach(element => { element.amount = 0; });
                                    player.Tag += days;
                                    player.Gesundheit = 20;
                                    player.updateDefense();
                                    player.updateFirepower();
                                    player.updateCarrys();
                                    makeUiHome();
                                    console.log(chalk.red(`Du wurdest angeschossen und bist bewusstlos zu Boden gesackt. Alle Drogen und Waffen wurden dir abgenommen. Du warst ${days} Tage im Gefängnis.`));
                                    escaped = true;
                                }
                            }
                        } else {
                            let temp = Math.min(enemyAttack, player.Gesundheit);
                            player.Gesundheit -= enemyAttack;
                            enemyAttack -= temp;
                            
                            if (player.Gesundheit <= 20) {
                                let days = Math.floor(Math.random() * 3) + 1;
                                player.drugInventory.forEach(element => { element.amount = 0; element.cost = []; });
                                player.gunInventory.forEach(element => { element.amount = 0; });
                                player.Tag += days;
                                player.Gesundheit = 20;
                                player.updateDefense();
                                player.updateFirepower();
                                player.updateCarrys();
                                makeUiHome();
                                console.log(chalk.red(`Du wurdest angeschossen und bist bewusstlos zu Boden gesackt. Alle Drogen und Waffen wurden dir abgenommen. Du warst ${days} Tage im Gefängnis.`));
                                escaped = true;
                            }
                        } 
                    }
                } 
            });

            enemyArray.length = 0;
            enemyArray.push(...remainingEnemies);

            if (enemyArray.length === 0 && player.Gesundheit > 0) {
                player.updateDefense();
                makeUiHome();
                console.log(chalk.green("Alle Gegner besiegt!"));
                escaped = true;
            }
            continue;
        }

        if (copsAnswer[index] === "Ergeben") {
            console.log(chalk.blue("Du ergibst dich den Cops..."));
            let days = Math.floor(Math.random() * 3) + 1;
            player.drugInventory.forEach(element => { element.amount = 0; element.cost = []; });
            player.gunInventory.forEach(element => { element.amount = 0; });
            player.Tag += days;
            player.updateDefense();
            player.updateFirepower();
            player.updateCarrys();
            makeUiHome();
            console.log(chalk.red(`Die Cops haben dich erwischt. Alle Drogen und Waffen wurden dir abgenommen. Du warst ${days} Tage im Gefängnis.`));
            escaped = true;
        }
    }
};


