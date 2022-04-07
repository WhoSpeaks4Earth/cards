import { Card } from './components/card/Card';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';


function App() {

  const FACE_UP_DEFAULT = '';
  const [cardCss, setCardCss] = useState(FACE_UP_DEFAULT);
  const deck: ICardDeck = cardDecks[0];

  const do180Flip = () => {
    let newCss = isFaceUp() ? 'face-down' : 'face-up';
    setCardCss(newCss);
  }

  const isFaceUp = () => cardCss.includes('face-up') || cardCss === FACE_UP_DEFAULT;

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <Card card={deck.cards[0]} cssClass={cardCss} theme={deck.theme} />
          <br />
          <button onClick={do180Flip}>180 Flip</button>
          {/* <button onClick={doOwnershipFlip}>Ownership Flip</button> */}
        </MainContent>
        

        <SidePanel>
          right side
        </SidePanel>
      </Layout>
  );
}

export default App;
