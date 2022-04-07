import { Card } from './components/card/Card';
import { ICard } from './models/ICard';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';


function App() {

  const [flipCard, setFlipCard] = useState(true);

  const flipCardOver = () => {
    setFlipCard(!flipCard);
  }

  const deck: ICardDeck = cardDecks[0];

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <Card card={deck.cards[0]} shouldFaceUp={flipCard} theme={deck.theme} />
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
