import { Table } from "console-table-printer";
import chalk from "chalk";
import player from "../../../index.js";

export default function makePlayerDashboard() {
    const formatter = new Intl.NumberFormat("de-DE", {style: "currency", currency: "EUR"});
        
    const playerDashboard = new Table({
        title: `${player.Name}'s Dashboard`,
        columns: [{name: "Eigenschaft", alignment: "left", title: chalk.red("Eigenschaften")}, {name: "Wert", alignment: "right", title: chalk.red("Werte")}, {name: "Droge", alignment: "left", title: chalk.cyan("Drogen")}, {name: "KG", alignment: "right", title: chalk.cyan("KG")}, {name: "Median", alignment: "right", title: chalk.cyan("Median")}, {name: "Waffe", alignment: "left", title: chalk.green("Waffen")}, {name: "Stück", alignment: "rigth", title: chalk.green("Stück")}, {name: "Schutzkleidung", alignment: "left", title: chalk.blue("Schutzkleidung")}, {name: "Stück1", alignment: "rigth", title: chalk.blue("Stück")}, {name: "Extras", alignment: "left", title: chalk.yellow("Extras")}, {name: "Stück2", alignment: "rigth", title: chalk.yellow("Stück")}],
    });

    playerDashboard.addRows([
        {
            Eigenschaft: "Stadt",
            Wert: player.Stadt,
            Droge: "Kokain",
            KG: player.drugInventory[0].amount,
            Median: formatter.format(player.drugInventory[0].median),
            Waffe: "Baseballschläger",
            Stück: player.gunInventory[0].amount,
            Schutzkleidung: "Stichschutzweste",
            Stück1: player.coverInventory[0].amount,
            Extras: "Bauchtasche",
            Stück2: player.extraInventory[0].amount,
        },
        {
            Eigenschaft: "Tag",
            Wert: player.Tag,
            Droge: "Heroin",
            KG: player.drugInventory[1].amount,
            Median: formatter.format(player.drugInventory[1].median),
            Waffe: "Messer",
            Stück: player.gunInventory[1].amount,
            Schutzkleidung: "Schusssichere Weste SK1",
            Stück1: player.coverInventory[1].amount,
            Extras: "Sporttasche",
            Stück2: player.extraInventory[1].amount,
        },
        {
            Eigenschaft: "Cash",
            Wert: formatter.format(player.Cash),
            Droge: "Speed",
            KG: player.drugInventory[2].amount,
            Median: formatter.format(player.drugInventory[2].median),
            Waffe: "Machete",
            Stück: player.gunInventory[2].amount,
            Schutzkleidung: "Schusssichere Weste SK4",
            Stück1: player.coverInventory[2].amount,
            Extras: "Rucksack",
            Stück2: player.extraInventory[2].amount,
        },
        {
            Eigenschaft: "Kontostand",
            Wert: formatter.format(player.Kontostand),
            Droge: "Crystal Meth",
            KG: player.drugInventory[3].amount,
            Median: formatter.format(player.drugInventory[3].median),
            Waffe: "Pistole",
            Stück: player.gunInventory[3].amount,
            Extras: "Rollkoffer",
            Stück2: player.extraInventory[3].amount,
        },
        {
            Eigenschaft: "Schulden",
            Wert: formatter.format(player.Schulden),
            Droge: "Ecstasy",
            KG: player.drugInventory[4].amount,
            Median: formatter.format(player.drugInventory[4].median),
            Waffe: "Schrotflinte",
            Stück: player.gunInventory[4].amount,
            Extras: "VW Golf",
            Stück2: player.extraInventory[4].amount,
        },
        {
            Eigenschaft: "Max. Belastung",
            Wert: player.Belastungsgrenze,
            Droge: "Marihuana",
            KG: player.drugInventory[5].amount,
            Median: formatter.format(player.drugInventory[5].median),
            Waffe: "Sturmgewehr",
            Stück: player.gunInventory[5].amount,
            Extras: "3er BMW",
            Stück2: player.extraInventory[5].amount,
        },
        {
            Eigenschaft: "Akt. Belastung",
            Wert: player.AktuelleBelastung,
            Droge: "Hasch",
            KG: player.drugInventory[6].amount,
            Median: formatter.format(player.drugInventory[6].median),
            Extras: "S-Klasse",
            Stück2: player.extraInventory[6].amount,
        },
        {
            Eigenschaft: "Gesundheit",
            Wert: player.Gesundheit,
            Droge: "LSD",
            KG: player.drugInventory[7].amount,
            Median: formatter.format(player.drugInventory[7].median),
        },
        {   
            Eigenschaft: "Angriff",
            Wert: player.Angriffskraft,
            Droge: "Crack",
            KG: player.drugInventory[8].amount,
            Median: formatter.format(player.drugInventory[8].median),
        },
        {
            Eigenschaft: "Verteidigung",
            Wert: player.Verteidigung,
        },
        {
            Eigenschaft: "Speed",
            Wert: player.speed,
        },
    ]);
    return playerDashboard.printTable();
};
