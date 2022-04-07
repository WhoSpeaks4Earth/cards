import { Card } from './components/card/Card';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';


function App() {

  const [cardCss, setCardCss] = useState('face-down');

  const flipCardOver = () => {
    setCardCss(cardCss === 'face-down' ? 'face-up' : 'face-down');
  }

  const deck: ICardDeck = cardDecks[0];

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <div onClick={flipCardOver}>
          <Card card={deck.cards[0]} cssClass={cardCss} theme={deck.theme} />
          </div>
          <br />
          <button onClick={flipCardOver}>Flip</button>
        </MainContent>
        

        <SidePanel>
          right side
        </SidePanel>
      </Layout>
  );
}

export default App;
