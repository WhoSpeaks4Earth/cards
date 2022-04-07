import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';
import { CardSelection } from './components/card-selection/CardSelection';
import { CardHand } from './components/card-hand/CardHand';
import { ICard } from './models/ICard';


function App() {

  const deck: ICardDeck = cardDecks[1];
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);

  const onCardClick = (card: ICard) => setPlayerHand([...playerHand, card]);

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <CardSelection deck={deck} onCardClick={(card: ICard) => onCardClick(card)} />
        </MainContent>
        
        <SidePanel>
          <CardHand cards={playerHand} theme={deck.theme} />
        </SidePanel>
      </Layout>
  );
}

export default App;
