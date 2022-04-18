import { ICard } from "../models/ICard";
import { IGame } from "../models/IGame";

export const gameReducer = (state: IGame, action: {type: string, payload: any}) => {
    switch (action.type) {
      case 'setView':
      case 'setDeck':
        return {...state, ...action.payload};
  
      case 'addCardToHand':
        const addCardHandType = action.payload.handType as keyof Object;
        return {...state, [addCardHandType]: {...state[addCardHandType], cards: [...state.playerHand.cards, action.payload.card]}}
  
      case 'removeCardFromHand':
        const card = action.payload.card;
        const newCards = removeCardFromSet(card, state.playerHand.cards);
        return {...state, playerHand: {...state.playerHand, cards: newCards}};
  
      case 'setActiveCardInHand':
        const activeCardHandType = action.payload.handType as keyof Object;
        return {...state, [activeCardHandType]: {...state[activeCardHandType], activeIndex: action.payload.index}};
  
      case 'placeCardOnBoard':
        const [x, y] = action.payload.position;
        const cardToPlace: ICard = state.playerHand.cards[state.playerHand.activeIndex];
        const newBoard = Object.assign({}, state.board);
        newBoard.cells[y][x] = {card: cardToPlace};
        const newPlayerHand = {...state.playerHand, cards: removeCardFromSet(cardToPlace, state.playerHand.cards)}
        return {...state, playerHand: newPlayerHand, board: newBoard};
  
      default:
        throw new Error();
    }
  }

  const removeCardFromSet = (cardToRemove: ICard, cardSet: ICard[]) => {
    return cardSet.filter((c: ICard) => c.title !== cardToRemove.title);
  }