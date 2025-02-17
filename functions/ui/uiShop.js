import makePlayerDashboard from "../ui/components/playerDashboard.js"
import makeShopDashboard from "./components/shopDashboard.js";

export default function makeUiShop() {
    console.clear();
    makePlayerDashboard();
    makeShopDashboard();
}