import { ICard } from "../models/ICard";
import { ICardHand } from "../models/ICardHand";

export class CardService {

    public handHasCards(hand: ICardHand): boolean {
        return hand.cards.length > 0;
    } 

    public removeCardFromSet(cardToRemove: ICard, cardSet: ICard[]): ICard[] {
        const newCardSet = cardSet.filter((c: ICard) => c.title !== cardToRemove.title);
        return newCardSet;
    }
}