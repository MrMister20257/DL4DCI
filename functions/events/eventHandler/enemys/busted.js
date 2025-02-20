import chalk from "chalk";
import player from "../../../../index.js";
import makeUiHome from "../../../ui/uiHome.js";
import cops from "./cops.js";


export default function busted() {
    let chance = Math.floor(Math.random() * (100 - player.Tag + 1) + player.Tag);

    if (player.Tag > 5 && chance > 80 && player.AktuelleBelastung > 0) {
        let chance2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
        
        if (chance2 <= 100) {
            cops();
        }

    } else {
        makeUiHome();
        return;
    }
}