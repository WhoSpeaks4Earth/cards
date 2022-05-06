import { CSSProperties } from "react";
import { GAME_SETTINGS } from "../data/game-settings";
import { ICard } from "../models/ICard";

export class DealerService {

  getHand(cardSetToChooseFrom: ICard[]): ICard[] {
    const cards: ICard[] = [];
    while (cards.length < GAME_SETTINGS.MAX_CARDS_PER_HAND) {
      const randomCard = this.getRandomCardFromSet(cardSetToChooseFrom);
      const alreadyChosen = cards.findIndex(card => card.title === randomCard.title) > -1;
      if (!alreadyChosen)
        cards.push(randomCard);
    }
    return cards;
  }

  getRandomCardFromSet(cardSet: ICard[]) {
      const setLength = cardSet.length;
      const randomIndex = Math.floor(Math.random() * setLength) - 1;
      return cardSet[randomIndex === -1 ? 0 : randomIndex];
  }


  getCardDealStyles (): CSSProperties[] {
    const styles: CSSProperties[] = [];

    for (let i = 0; i < GAME_SETTINGS.MAX_CARDS_PER_HAND; i++)
      styles.push({
        position: 'relative',
        top: (-20 * i),
        left: DealerService.#getRandomRange(20),
        transform: `rotateZ(${DealerService.#getRandomRange(2)}deg)`
    })

    return styles;
  }

  static #getRandomRange(range: number) {
    const randomNum = Math.floor(Math.random() * 10);
    return randomNum % 2 === 0
      ? (Math.floor(Math.random() * range)) 
      : (Math.floor(Math.random() * (-1 * range)))
  }

}
