type GemColor = "black" | "red" | "green" | "blue" | "white";
type TokenColor = GemColor | "gold";
type TokenInventory = Map<TokenColor, number>;

interface Noble {
  id: string;
  gemsOnCardsRequiredToEarn: Map<GemColor, number>;
}

interface Card {
  id: string;
  tier: 1 | 2 | 3;
  gemColor: GemColor;
  pointValue: number;
  gemsRequiredToBuy: Map<GemColor, number>;
}

interface PlayerData {
  id: string;
  displayName: string;
  tokens: TokenInventory;
  cardsPurchased: Array<Card>;
  cardsReserved: Array<Card>;
  noblesEarned: Array<Noble>;
}

interface GameState {
  id: string;
  players: Map<PlayerData["id"], PlayerData>;
  playerTurnOrder: Array<PlayerData["id"]>;
  indexOfCurrentPlayer: number;
  endgameTriggered: boolean;
  tokensAvailable: TokenInventory;
  noblesAvailable: Array<Noble>;
  cardsAvailable: {
    [Tier in Card["tier"]]: {
      deck: Array<Card>;
      row: [Card?, Card?, Card?, Card?];
    };
  };
}

export {};
