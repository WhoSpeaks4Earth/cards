import { CSSProperties } from "react";
import { GAME_SETTINGS } from "../data/game-settings";

export class DealerService {

    static getCardDealStyles (): CSSProperties[] {
        const styles: CSSProperties[] = [];
    
        for (let i = 0; i < GAME_SETTINGS.MAX_CARDS_PER_HAND; i++)
          styles.push({
            position: 'relative',
            top: (-100 * i),
            left: (i % 2 === 0 ? (Math.floor(Math.random() * 20)) : (Math.floor(Math.random() * -20)))
        })
    
        return styles;
      }
}
