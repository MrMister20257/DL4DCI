import { Table } from "console-table-printer";
import chalk from "chalk";
import { drugArrayHamburg, drugArrayBerlin, drugArrayFrankfurt, drugArrayMuenchen, drugArrayKoeln, drugArrayLeipzig } from "../../../classes/drugClasses.js";
import player from "../../../index.js";

let drugArray = [];

export default function makeUiDrugMarket() {
    const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});

    const drugMarketDashboard = new Table({
        title: "Drogenmarkt",
        columns: [{name: "Drogen", alignment: "left", title: chalk.cyan("Drogen")}, {name: "Kokain", alignment: "left", title: chalk.cyan("Kokain")}, {name: "Heroin", alignment: "left", title: chalk.cyan("Heroin")}, {name: "Speed", alignment: "left", title: chalk.cyan("Speed")}, {name: "CrystalMeth", alignment: "left", title: chalk.cyan("Crystal Meth")}, {name: "Ecstasy", alignment: "left", title: chalk.cyan("Ecstasy")}, {name: "Marihuana", alignment: "left", title: chalk.cyan("Marihuana")}, {name: "Hasch", alignment: "left", title: chalk.cyan("Hasch")}, {name: "LSD", alignment: "left", title: chalk.cyan("LSD")}, {name: "Crack", alignment: "left", title: chalk.cyan("Crack")}]
    });

    if (player.Stadt === "Hamburg") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayHamburg[0].price),
                Heroin: formatter.format(drugArrayHamburg[1].price),
                Speed: formatter.format(drugArrayHamburg[2].price),
                CrystalMeth: formatter.format(drugArrayHamburg[3].price),
                Ecstasy: formatter.format(drugArrayHamburg[4].price),
                Marihuana: formatter.format(drugArrayHamburg[5].price),
                Hasch: formatter.format(drugArrayHamburg[6].price),
                LSD: formatter.format(drugArrayHamburg[7].price),
                Crack: formatter.format(drugArrayHamburg[8].price),
            },
        );
        drugArray = drugArrayHamburg;   
    }

    if (player.Stadt === "Berlin") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayBerlin[0].price),
                Heroin: formatter.format(drugArrayBerlin[1].price),
                Speed: formatter.format(drugArrayBerlin[2].price),
                CrystalMeth: formatter.format(drugArrayBerlin[3].price),
                Ecstasy: formatter.format(drugArrayBerlin[4].price),
                Marihuana: formatter.format(drugArrayBerlin[5].price),
                Hasch: formatter.format(drugArrayBerlin[6].price),
                LSD: formatter.format(drugArrayBerlin[7].price),
                Crack: formatter.format(drugArrayBerlin[8].price),
            },
        );
        drugArray = drugArrayBerlin;   
    }

    if (player.Stadt === "Frankfurt") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayFrankfurt[0].price),
                Heroin: formatter.format(drugArrayFrankfurt[1].price),
                Speed: formatter.format(drugArrayFrankfurt[2].price),
                CrystalMeth: formatter.format(drugArrayFrankfurt[3].price),
                Ecstasy: formatter.format(drugArrayFrankfurt[4].price),
                Marihuana: formatter.format(drugArrayFrankfurt[5].price),
                Hasch: formatter.format(drugArrayFrankfurt[6].price),
                LSD: formatter.format(drugArrayFrankfurt[7].price),
                Crack: formatter.format(drugArrayFrankfurt[8].price),
            },
        );
        drugArray = drugArrayFrankfurt;   
    }

    if (player.Stadt === "Muenchen") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayMuenchen[0].price),
                Heroin: formatter.format(drugArrayMuenchen[1].price),
                Speed: formatter.format(drugArrayMuenchen[2].price),
                CrystalMeth: formatter.format(drugArrayMuenchen[3].price),
                Ecstasy: formatter.format(drugArrayMuenchen[4].price),
                Marihuana: formatter.format(drugArrayMuenchen[5].price),
                Hasch: formatter.format(drugArrayMuenchen[6].price),
                LSD: formatter.format(drugArrayMuenchen[7].price),
                Crack: formatter.format(drugArrayMuenchen[8].price),
            },
        );   
        drugArray = drugArrayMuenchen;
    }

    if (player.Stadt === "Koeln") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayKoeln[0].price),
                Heroin: formatter.format(drugArrayKoeln[1].price),
                Speed: formatter.format(drugArrayKoeln[2].price),
                CrystalMeth: formatter.format(drugArrayKoeln[3].price),
                Ecstasy: formatter.format(drugArrayKoeln[4].price),
                Marihuana: formatter.format(drugArrayKoeln[5].price),
                Hasch: formatter.format(drugArrayKoeln[6].price),
                LSD: formatter.format(drugArrayKoeln[7].price),
                Crack: formatter.format(drugArrayKoeln[8].price),
            },
        );   
        drugArray = drugArrayKoeln;
    }

    if (player.Stadt === "Leipzig") {
        drugMarketDashboard.addRow(
            {
                Drogen: "Preis",
                Kokain: formatter.format(drugArrayLeipzig[0].price),
                Heroin: formatter.format(drugArrayLeipzig[1].price),
                Speed: formatter.format(drugArrayLeipzig[2].price),
                CrystalMeth: formatter.format(drugArrayLeipzig[3].price),
                Ecstasy: formatter.format(drugArrayLeipzig[4].price),
                Marihuana: formatter.format(drugArrayLeipzig[5].price),
                Hasch: formatter.format(drugArrayLeipzig[6].price),
                LSD: formatter.format(drugArrayLeipzig[7].price),
                Crack: formatter.format(drugArrayLeipzig[8].price),
            },
        );   
        drugArray = drugArrayLeipzig;
    }


    drugMarketDashboard.printTable()
};

export {drugArray};