import makeUiDrugMarket from "./components/drugMarketDashboard.js";
import makePlayerDashboard from "./components/playerDashboard.js";


export default function makeUiHome() {
    console.clear();
    makePlayerDashboard();
    makeUiDrugMarket();
};