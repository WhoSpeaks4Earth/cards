import { IGame } from "../models/IGame";
import { BoardService } from "../services/board.service";
import { DealerService } from "../services/dealer.service";
import { cardDecks } from "./card-decks";

const boardService = new BoardService();
const dealerService = new DealerService();

export const initialGameState: IGame = {
    deck: cardDecks[0],
    view: 'select-deck',
    playerHand: {
      cards: [],
      activeIndex: 0,
      dealStyles: dealerService.getCardDealStyles()
    },
    opponentHand: {
      cards: [],
      activeIndex: 0,
      dealStyles: dealerService.getCardDealStyles()
    },
    board: boardService.createBoard(3,3),
    isPlayerTurn: true
  }