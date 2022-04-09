import { CSSProperties } from "react";
import { GAME_SETTINGS } from "../data/game-settings";

export class DealerService {

    static #getRandomRange(range: number) {
      const randomNum = Math.floor(Math.random() * 10);
      return randomNum % 2 === 0
        ? (Math.floor(Math.random() * range)) 
        : (Math.floor(Math.random() * (-1 * range)))
    }

    static getCardDealStyles (): CSSProperties[] {
        const styles: CSSProperties[] = [];
    
        for (let i = 0; i < GAME_SETTINGS.MAX_CARDS_PER_HAND; i++)
          styles.push({
            position: 'relative',
            top: (-100 * i),
            left: DealerService.#getRandomRange(20),
            transform: `rotateZ(${DealerService.#getRandomRange(2)}deg)`
        })
    
        return styles;
      }
}
