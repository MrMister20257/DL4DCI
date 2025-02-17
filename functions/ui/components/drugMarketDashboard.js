import { Table } from "console-table-printer";
import chalk from "chalk";
import drugArray from "../../../classes/drugClasses.js";


export default function makeUiDrugMarket() {
    const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});

    const drugMarketDashboard = new Table({
        title: "Drogenmarkt",
        columns: [{name: "Drogen", alignment: "left", title: chalk.cyan("Drogen")}, {name: "Kokain", alignment: "left", title: chalk.cyan("Kokain")}, {name: "Heroin", alignment: "left", title: chalk.cyan("Heroin")}, {name: "Speed", alignment: "left", title: chalk.cyan("Speed")}, {name: "CrystalMeth", alignment: "left", title: chalk.cyan("Crystal Meth")}, {name: "Ecstasy", alignment: "left", title: chalk.cyan("Ecstasy")}, {name: "Marihuana", alignment: "left", title: chalk.cyan("Marihuana")}, {name: "Hasch", alignment: "left", title: chalk.cyan("Hasch")}, {name: "LSD", alignment: "left", title: chalk.cyan("LSD")}, {name: "Crack", alignment: "left", title: chalk.cyan("Crack")}]
    });

    drugMarketDashboard.addRow(
        {
            Drogen: "Preis",
            Kokain: formatter.format(drugArray[0].price),
            Heroin: formatter.format(drugArray[1].price),
            Speed: formatter.format(drugArray[2].price),
            CrystalMeth: formatter.format(drugArray[3].price),
            Ecstasy: formatter.format(drugArray[4].price),
            Marihuana: formatter.format(drugArray[5].price),
            Hasch: formatter.format(drugArray[6].price),
            LSD: formatter.format(drugArray[7].price),
            Crack: formatter.format(drugArray[8].price),
        },
    );
    return drugMarketDashboard.printTable()
};