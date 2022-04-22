import { ICard } from "../models/ICard";
import { IGame } from "../models/IGame";
import { DealerService } from "../services/dealer.service";

const dealerService = new DealerService();

export const gameReducer = (state: IGame, action: {type: string, payload?: any}) => {
    switch (action.type) {
      case 'startGame':
        return {
          ...state, 
          view: 'active-game',
          opponentHand: {
            ...state.opponentHand, 
            cards: dealerService.getHand(state.deck.cards)
          }
        }

      case 'setDeck':
        return {...state, ...action.payload};

      case 'setOpponentHand':
        const opponentHand = dealerService.getHand(state.deck.cards);
        console.log(opponentHand)
        return {...state, opponentHand}
  
      case 'addCardToHand':
        const addCardHandType = action.payload.handType as keyof Object;
        return {...state, [addCardHandType]: {...state[addCardHandType], cards: [...state.playerHand.cards, action.payload.card]}}
  
      case 'removeCardFromHand':
        const card = action.payload.card;
        const newCards = dealerService.removeCardFromSet(card, state.playerHand.cards);
        return {...state, playerHand: {...state.playerHand, cards: newCards}};
  
      case 'setActiveCardInHand':
        const activeCardHandType = action.payload.handType as keyof Object;
        return {...state, [activeCardHandType]: {...state[activeCardHandType], activeIndex: action.payload.index}};
  
      case 'doPlayerMove':
        const [x, y] = action.payload.position;
        const cardToPlace: ICard = state.playerHand.cards[state.playerHand.activeIndex];
        const newBoard = Object.assign({}, state.board);
        newBoard.cells[y][x] = {card: cardToPlace};
        const newPlayerCards = dealerService.removeCardFromSet(cardToPlace, state.playerHand.cards);
        const newPlayerHand = {
          ...state.playerHand,
          cards: newPlayerCards,
          activeIndex: newPlayerCards.length > 0 ? 0 : -1
        }
        return {...state, playerHand: newPlayerHand, board: newBoard, isPlayerTurn: !state.isPlayerTurn};

        case 'doOpponentMove':
          const bestCard: ICard = state.opponentHand.cards[0];
          const newBoardFromOpponentMove = Object.assign({}, state.board);
          newBoardFromOpponentMove.cells[0][0] = {card: bestCard};
          const newOpponentHand = {
            ...state.opponentHand,
            cards: dealerService.removeCardFromSet(bestCard, state.opponentHand.cards),
            activeIndex: 0
          }
          return {...state, opponentHand: newOpponentHand, board: newBoardFromOpponentMove, isPlayerTurn: !state.isPlayerTurn};
  
      default:
        throw new Error();
    }
  }

  