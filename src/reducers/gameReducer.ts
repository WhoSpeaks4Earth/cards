import { ICard } from "../models/ICard";
import { IGame } from "../models/IGame";
import { DealerService } from "../services/dealer.service";

const dealerService = new DealerService();

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
        return getOpponentMoveNewState(state);
  
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
    const newCards = dealerService.removeCardFromSet(card, state.playerHand.cards);
    return {...state, playerHand: {...state.playerHand, cards: newCards}};
  }

  const getSetActiveCardNewState = (state: IGame, payload: any): IGame => {
    const handType = payload.handType as keyof Object;
    return {...state, [handType]: {...state[handType], activeIndex: payload.index}};
  }

  const getPlayerMoveNewState = (state: IGame, payload: any): IGame => {
    const [x, y] = payload.position;
    const cardToPlay: ICard = state.playerHand.cards[state.playerHand.activeIndex];
    const newBoard = Object.assign({}, state.board);
    newBoard.cells[y][x] = {card: cardToPlay};
    const newPlayerCards = dealerService.removeCardFromSet(cardToPlay, state.playerHand.cards);
    const newPlayerHand = {
      ...state.playerHand,
      cards: newPlayerCards,
      activeIndex: newPlayerCards.length > 0 ? 0 : -1
    }
    return {...state, playerHand: newPlayerHand, board: newBoard, isPlayerTurn: !state.isPlayerTurn};
  }

  const getOpponentMoveNewState = (state: IGame): IGame => {
    const cardToPlay: ICard = state.opponentHand.cards[0];
    const newBoard = Object.assign({}, state.board);
    newBoard.cells[0][0] = {card: cardToPlay};
    const newOpponentHand = {
      ...state.opponentHand,
      cards: dealerService.removeCardFromSet(cardToPlay, state.opponentHand.cards),
      activeIndex: 0
    }
    return {...state, opponentHand: newOpponentHand, board: newBoard, isPlayerTurn: !state.isPlayerTurn};
  }

  