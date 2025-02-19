const suits = {
    hearts: "♥",
    diamonds: "♦",
    spades: "♠",
    clubs: "♣"
};

const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function createCard(rank, suit) {
    const symbol = suits[suit];
    return `
┌─────────┐
│ ${rank.padEnd(2, " ")}      │
│         │
│    ${symbol}    │
│         │
│      ${rank.padStart(2, " ")} │
└─────────┘
`;
}

const deck = [];

for (let suit in suits) {
    for (let rank of ranks) {
        deck.push(createCard(rank, suit));
    }
}

export default deck;