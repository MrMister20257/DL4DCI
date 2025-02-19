export default class Player {
    constructor(Name = "", Tag = 1, maxDays = 0, Stadt = "Hamburg", Gesundheit = 100, Cash = 5000, Kontostand = 0, Schulden = 5000, Belastungsgrenze = 40, AktuelleBelastung = 0, Angriffskraft = 0, Verteidigung = 0, speed = 0) {
        this.Name = Name;
        this.Stadt = Stadt;
        this.Tag = Tag;
        this.maxDays = maxDays;
        this.Cash = Cash;
        this.Kontostand = Kontostand;
        this.Schulden = Schulden;
        this.Belastungsgrenze = Belastungsgrenze;
        this.AktuelleBelastung = AktuelleBelastung;
        this.Gesundheit = Gesundheit;
        this.Angriffskraft = Angriffskraft;
        this.Verteidigung = Verteidigung;
        this.speed = speed;
        this.drugInventory = [
            {name: "Kokain", amount: 0, cost: [], median: 0},
            {name: "Heroin", amount: 0, cost: [], median: 0},
            {name: "Speed", amount: 0, cost: [], median: 0},
            {name: "Crystal Meth", amount: 0, cost: [], median: 0},
            {name: "Ecstasy", amount: 0, cost: [], median: 0},
            {name: "Marihuana", amount: 0, cost: [], median: 0},
            {name: "Hasch", amount: 0, cost: [], median: 0},
            {name: "LSD", amount: 0, cost: [], median: 0},
            {name: "Crack", amount: 0, cost: [], median: 0}
        ];
        this.gunInventory = [
            {name: "Baseballschlaeger", power: 2, amount: 0},
            {name: "Messer", power: 5.5, amount: 0},
            {name: "Machete", power: 11, amount: 0},
            {name: "Pistole", power: 135, amount: 0},
            {name: "Schrotflinte", power: 450, amount: 0},
            {name: "Sturmgewehr", power: 1500, amount: 0}
        ];
        this.coverInventory = [
            {name: "Stichschutzweste", defense: 6, amount: 0},
            {name: "Schusssichere Weste SK1", defense: 80, amount: 0},
            {name: "Schusssichere Weste SK4", defense: 350, amount: 0}
        ];
        this.extraInventory = [
            {name: "Bauchtasche", Belastungsgrenze: 1, amount: 0, speed: 0},
            {name: "Sporttasche", Belastungsgrenze: 3, amount: 0, speed: 0},
            {name: "Rucksack", Belastungsgrenze: 5, amount: 0, speed: 0},
            {name: "Rollkoffer", Belastungsgrenze: 12, amount: 0, speed: 0},
            {name: "VW Golf", Belastungsgrenze: 500, amount: 0, speed: 180},
            {name: "3er BMW", Belastungsgrenze: 1700, amount: 0, speed: 200},
            {name: "S-Klasse", Belastungsgrenze: 3500, amount: 0, speed: 240}
        ];
        };

        updateCapacity() {
            this.Belastungsgrenze = this.extraInventory.reduce((total, item) => total + (item.Belastungsgrenze * item.amount), 40)
        }

        updateCarrys() {
            this.AktuelleBelastung = this.drugInventory.reduce((total, item) => total + item.amount, 0)
        }

        updateFirepower() {
            this.Angriffskraft = this.gunInventory.reduce((total, item) => total + (item.amount * item.power), 0)
        }

        updateDefense() {
            this.Verteidigung = this.coverInventory.reduce((total, item) => total + (item.amount * item.defense), 0)
        }

        updateSpeed() {
            this.speed = this.extraInventory.reduce((total, item) => total + (item.speed * item.amount), 0)
        }

        median() {
          this.drugInventory.forEach(element => {
            if (element.cost.length !== 0) {
                let sum = 0;
                for (let i = 0; i < element.cost.length; i++) {
                   sum += element.cost[i];
                }
                let total = sum / element.cost.length;
                element.median = (element.amount * total) / element.amount;      
            } else {
                element.cost = [];
                element.median = 0;
            }
          });
        }
};