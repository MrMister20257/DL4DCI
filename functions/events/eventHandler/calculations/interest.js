import player from "../../../../index.js";


export default function interest() {
    if (player.Kontostand > 0) {
        player.Kontostand *= 1.01;
        return;
    } else {
        return;
    }
};