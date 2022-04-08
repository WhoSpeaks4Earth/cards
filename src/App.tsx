import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useEffect, useState } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';
import { CardSelection } from './components/selection/card-selection/CardSelection';
import { CardHand } from './components/card-hand/CardHand';
import { ICard } from './models/ICard';
import { Board } from './components/board/Board';
import { GameTable } from './components/game-table/GameTable';
import { DeckSelection } from './components/selection/deck-selection/DeckSelection';
import { Selection } from './components/selection/Selection';
import { gameView, IGame } from './models/IGame';
import { SelectionHeader } from './components/selection/selection-header/SelectionHeader';


function App() {
  const [game, setGame] = useState<IGame>({deck: cardDecks[0], view: 'select-deck'});
  const [playerHand, setPlayerHand] = useState<ICard[]>([]);
  const MAX_CARDS_PER_HAND = 5;


  useEffect(() => {
    const decks = cardDecks; // todo: get from service
    setGame({...game, deck: decks[0]})
  }, []);

  const onCardClick = (card: ICard) => {
    const existingCardIndex = playerHand.findIndex(c => c.title === card.title);
    const doesExistInHand = existingCardIndex >= 0;
    if (doesExistInHand)
      setPlayerHand(playerHand.filter(c => c.title !== card.title))
    else if (playerHand.length < MAX_CARDS_PER_HAND && !doesExistInHand)
      setPlayerHand([...playerHand, card]);
  }

  const onStartRound = () => setGame({...game, view: 'active-game'});
  const onDeckSelected = (deck: ICardDeck) => setGame({deck, view: 'select-cards'});


  const renderView = (view: gameView): any => {
    switch(view) {
      case 'select-deck':
        return (
          <Selection>
            <MainContent>
              <SelectionHeader title='Select a deck' />
              <DeckSelection decks={cardDecks} onDeckSelected={(deck: ICardDeck) => onDeckSelected(deck)} />
            </MainContent>
          </Selection>
        )
      case 'select-cards':
        return (
          <Selection>
            <MainContent>
              <SelectionHeader title={game.deck.name} />
              <CardSelection
                deck={game.deck}
                playerHand={playerHand}
                maxCards={MAX_CARDS_PER_HAND} 
                onCardClick={(card: ICard) => onCardClick(card)}
                onStartRoundClick={onStartRound} />
            </MainContent>
            <SidePanel theme={game.deck.theme.panel}>
              <CardHand cards={playerHand} theme={game.deck.theme.card} />
            </SidePanel>
          </Selection>
        )
        case 'active-game':
          return (
            <GameTable theme={game.deck.theme.table}>
              <SidePanel theme={game.deck.theme.panel}>
                <CardHand cards={playerHand} theme={game.deck.theme.card} />
              </SidePanel>
              <Board board={{}} />
              <SidePanel theme={game.deck.theme.panel}>
                <CardHand cards={playerHand} theme={game.deck.theme.card} />
              </SidePanel>
            </GameTable>
          );
    }
  }

  return (
      <Layout>
        <MainContent>
          {renderView(game.view)}
        </MainContent>
      </Layout>
  );
}

export default App;
