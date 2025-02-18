import player from "../../../../index.js";


export default function interest() {
    if (player.Kontostand > 0 || player.Schulden > 0) {
        player.Kontostand = Math.round((player.Kontostand * 1.005) * 100) / 100;
        player.Schulden = Math.round((player.Schulden * 1.01) * 100) / 100;
        return;
    } else {
        return;
    }
};