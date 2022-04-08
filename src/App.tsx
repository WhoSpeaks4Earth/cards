import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useEffect, useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';
import { CardSelection } from './components/card-selection/CardSelection';
import { CardHand } from './components/card-hand/CardHand';
import { ICard } from './models/ICard';
import { Board } from './components/board/Board';
import { GameTable } from './components/game-table/GameTable';


function App() {
  const deck: ICardDeck = cardDecks[0];
  const [view, setView] = useState<'select' | 'game'>(() => 'select');
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const MAX_CARDS_PER_HAND = 5;

  useEffect(() => {
    if (view === 'select')
      setPlayerHand([]);
  }, [view]);


  const onCardClick = (card: ICard) => {
    const existingCardIndex = playerHand.findIndex(c => c.title === card.title);
    const doesExistInHand = existingCardIndex >= 0;
    if (doesExistInHand)
      setPlayerHand(playerHand.filter(c => c.title !== card.title))
    else if (playerHand.length < MAX_CARDS_PER_HAND && !doesExistInHand)
      setPlayerHand([...playerHand, card]);
  }

  const setViewState = (view: 'select' | 'game') => {
    setView(view);
  }

  return (
      <Layout>
        <MainContent>
          { view === 'select' ? (
              <>
                <CardSelection
                  deck={deck}
                  playerHand={playerHand}
                  maxCards={MAX_CARDS_PER_HAND} 
                  onCardClick={(card: ICard) => onCardClick(card)}
                  onStartRoundClick={() => setViewState('game')} />
                <SidePanel>
                  <CardHand cards={playerHand} theme={deck.theme} />
                </SidePanel>
              </>
            ) : (
              <>
              <GameTable>
                <SidePanel>
                  <CardHand cards={playerHand} theme={deck.theme} />
                </SidePanel>
                <Board board={{}} />
                <SidePanel>
                  <CardHand cards={playerHand} theme={deck.theme} />
                </SidePanel>
              </GameTable>
              {/* <button onClick={() => setViewState('select')}>Reset</button> */}
              </>
          )}
          
        </MainContent>
        
        
      </Layout>
  );
}

export default App;
