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
        return {...state, view: 'active-game', opponentHand: {...state.opponentHand, cards: action.payload.opponentCards}};

      case 'setDeck':
        return {...state, ...action.payload};
  
      case 'addCardToHand':
        return addCardToHand(state, action.payload);
  
      case 'removeCardFromHand':
        return removeCardFromHand(state, action.payload);
  
      case 'setActiveCardInHand':
        return setActiveCardInHand(state, action.payload);
  
      case 'doPlayerMove':
        return doPlayerMove(state, action.payload);

      case 'doOpponentMove':
        return doOpponentMove(state);
  
      default:
        throw new Error();
    }
  }

  const addCardToHand = (state: IGame, payload: any): IGame => {
    const handType = payload.handType as keyof Object;
    return {...state, [handType]: {...state[handType], cards: [...state.playerHand.cards, payload.card]}}
  }

  const removeCardFromHand = (state: IGame, payload: any): IGame => {
    const card = payload.card;
    const newCards = cardService.removeCardFromSet(card, state.playerHand.cards);
    return {...state, playerHand: {...state.playerHand, cards: newCards}};
  }

  const setActiveCardInHand = (state: IGame, payload: any): IGame => {
    const handType = payload.handType as keyof Object;
    return {...state, [handType]: {...state[handType], activeIndex: payload.index}};
  }

  const doPlayerMove = (state: IGame, payload: any): IGame => {
    // const cardToPlay: ICard = payload.cardToPlay;
    // const newBoard = {...state.board};
    // const newPlayerCards = cardService.removeCardFromSet(cardToPlay, state.playerHand.cards);
    // const newPlayerHand = {
    //   ...state.playerHand,
    //   cards: newPlayerCards,
    //   activeIndex: newPlayerCards.length > 0 ? 0 : -1
    // }
    // return {...state, playerHand: newPlayerHand, board: newBoard, isPlayerTurn: false};
    return {...state};
  }

  const doOpponentMove = (state: IGame): IGame => {
    debugger;
    const [cell, cardToPlay] = boardService.getBestMove(state.board, state.opponentHand.cards);
    // const [x, y] = cell;
    const newBoard = boardService.getNewBoardFromMove(state.board, cell, cardToPlay);
    newBoard.cells[0][0] = {card: cardToPlay};
    const newOpponentHand = {
      ...state.opponentHand,
      cards: cardService.removeCardFromSet(cardToPlay, state.opponentHand.cards),
      activeIndex: 0
    }
    return {...state, opponentHand: newOpponentHand, board: newBoard, isPlayerTurn: true};
  }

  