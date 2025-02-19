import npcArray from "../../../../classes/npcClasses.js";

export default function createEnemy() {
    const enemy = [];
    let numOfEnemys = Math.floor(Math.random() * 4) + 1;
    for (let i = 0; i < numOfEnemys; i++) {
        let indexOfNpcArray = Math.floor(Math.random() * npcArray.length);
        let temp = npcArray[indexOfNpcArray];
        enemy.push(temp);
    };

    return enemy;
};