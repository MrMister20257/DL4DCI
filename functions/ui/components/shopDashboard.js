import { Table } from "console-table-printer";
import chalk from "chalk";
import gunArray from "../../../classes/weaponClasses.js";
import coverArray from "../../../classes/defenseClasses.js";
import extraArray from "../../../classes/extrasClasses.js";

export default function makeShopDashboard() {
    const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});
    
    const shopDashboard = new Table({
        title: "Shop Inventar",
        columns: [{name: "Waffen", alignment: "left", title: chalk.green("Waffen")}, {name: "Preis", alignment: "right", title: chalk.green("Preis")}, {name: "Schaden", alignment: "right", title: chalk.green("Schaden")}, {name: "Schutzkleidung", alignment: "left", title: chalk.blue("Schutzkleidung")}, {name: "Preis1", alignment: "right", title: chalk.blue("Preis")}, {name: "Schutz", alignment: "right", title: chalk.blue("Schutz")}, {name: "Extras", alignment: "left", title: chalk.yellow("Extras")}, {name: "Preis2", alignment: "right", title: chalk.yellow("Preis")}, {name: "Kapazität", alignment: "right", title: chalk.yellow("Kapazität")}]
    });

    shopDashboard.addRows([
        {
            Waffen: "Baseballschläger",
            Preis: formatter.format(gunArray[0].price),
            Schaden: gunArray[0].power,
            Schutzkleidung: "Stichschutzweste",
            Preis1: formatter.format(coverArray[0].price),
            Schutz: coverArray[0].defense,
            Extras: "Bauchtasche",
            Preis2: formatter.format(extraArray[0].price),
            Kapazität: extraArray[0].Belastungsgrenze,
        },
        {
            Waffen: "Messer",
            Preis: formatter.format(gunArray[1].price),
            Schaden: gunArray[1].power,
            Schutzkleidung: "Schusssichere Weste SK1",
            Preis1: formatter.format(coverArray[1].price),
            Schutz: coverArray[1].defense,
            Extras: "Sporttasche",
            Preis2: formatter.format(extraArray[1].price),
            Kapazität: extraArray[1].Belastungsgrenze,
        },
        {
            Waffen: "Machete",
            Preis: formatter.format(gunArray[2].price),
            Schaden: gunArray[2].power,
            Schutzkleidung: "Schusssichere Weste SK4",
            Preis1: formatter.format(coverArray[2].price),
            Schutz: coverArray[2].defense,
            Extras: "Rucksack",
            Preis2: formatter.format(extraArray[2].price),
            Kapazität: extraArray[2].Belastungsgrenze,
        },
        {
            Waffen: "Pistole",
            Preis: formatter.format(gunArray[3].price),
            Schaden: gunArray[3].power,
            Extras: "Rollkoffer",
            Preis2: formatter.format(extraArray[3].price),
            Kapazität: extraArray[3].Belastungsgrenze,
        },
        {
            Waffen: "Schrotflinte",
            Preis: formatter.format(gunArray[4].price),
            Schaden: gunArray[4].power,
            Extras: "VW Golf",
            Preis2: formatter.format(extraArray[4].price),
            Kapazität: extraArray[4].Belastungsgrenze,
        },
        {
            Waffen: "Sturmgewehr",
            Preis: formatter.format(gunArray[5].price),
            Schaden: gunArray[5].power,
            Extras: "3er BMW",
            Preis2: formatter.format(extraArray[5].price),
            Kapazität: extraArray[5].Belastungsgrenze,
        },
        {
            Extras: "S-Klasse",
            Preis2: formatter.format(extraArray[6].price),
            Kapazität: extraArray[6].Belastungsgrenze,
        },
    ])
    return shopDashboard.printTable();
}