import { ICard } from "../models/ICard";
import { IGame } from "../models/IGame";
import { BoardService } from "../services/board.service";
import { CardService } from "../services/card.service";
import { DealerService } from "../services/dealer.service";

const dealerService = new DealerService();
const boardService = new BoardService();
const cardService = new CardService();

export const gameReducer = (state: IGame, action: {type: string, payload?: any}) => {
    switch (action.type) {
      case 'startGame':
        return {...state, view: 'active-game', opponentHand: {...state.opponentHand, cards: dealerService.getHand(state.deck.cards)}};

      case 'setDeck':
        return {...state, ...action.payload};

      case 'setOpponentHand':
        return {...state, opponentHand: dealerService.getHand(state.deck.cards)}
  
      case 'addCardToHand':
        return getAddCardToHandNewState(state, action.payload);
  
      case 'removeCardFromHand':
        return getRemoveCardFromHandNewState(state, action.payload);
  
      case 'setActiveCardInHand':
        return getSetActiveCardNewState(state, action.payload);
  
      case 'doPlayerMove':
        return getPlayerMoveNewState(state, action.payload);

      case 'doOpponentMove':
        return getOpponentMoveNewState(state, action.payload);
  
      default:
        throw new Error();
    }
  }

  const getAddCardToHandNewState = (state: IGame, payload: any): IGame => {
    const handType = payload.handType as keyof Object;
    return {...state, [handType]: {...state[handType], cards: [...state.playerHand.cards, payload.card]}}
  }

  const getRemoveCardFromHandNewState = (state: IGame, payload: any): IGame => {
    const card = payload.card;
    const newCards = cardService.removeCardFromSet(card, state.playerHand.cards);
    return {...state, playerHand: {...state.playerHand, cards: newCards}};
  }

  const getSetActiveCardNewState = (state: IGame, payload: any): IGame => {
    const handType = payload.handType as keyof Object;
    return {...state, [handType]: {...state[handType], activeIndex: payload.index}};
  }

  const getPlayerMoveNewState = (state: IGame, payload: any): IGame => {
    const cardToPlay: ICard = payload.cardToPlay;
    const newBoard = {...state.board};
    const newPlayerCards = cardService.removeCardFromSet(cardToPlay, state.playerHand.cards);
    const newPlayerHand = {
      ...state.playerHand,
      cards: newPlayerCards,
      activeIndex: newPlayerCards.length > 0 ? 0 : -1
    }
    return {...state, playerHand: newPlayerHand, board: newBoard, isPlayerTurn: false};
  }

  const getOpponentMoveNewState = (state: IGame, payload: any): IGame => {
    const cardToPlay: ICard = payload.cardToPlay;
    const newBoard = {...state.board};
    const newOpponentHand = {
      ...state.opponentHand,
      cards: cardService.removeCardFromSet(cardToPlay, state.opponentHand.cards),
      activeIndex: 0
    }
    return {...state, opponentHand: newOpponentHand, board: newBoard, isPlayerTurn: true};
  }

  