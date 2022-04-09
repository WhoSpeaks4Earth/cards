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
import { gameView, IGame } from './models/IGame';
import { BoardService } from './services/board.service';
import { IBoard } from './models/IBoard';
import { DealerService } from './services/dealer.service';
import { GAME_SETTINGS } from './data/game-settings';
import { ICardHand } from './models/ICardHand';


function App() {
  const [game, setGame] = useState<IGame>({deck: cardDecks[0], view: 'select-deck'});
  const [playerHand, setPlayerHand] = useState<ICardHand>(() => ({cards: [], dealStyles: DealerService.getCardDealStyles()}));

  const boardService = new BoardService();
  const board: IBoard = boardService.createBoard(3,3);
  board.cells[0][0] = {card: {title: "test", ranks: [1,1,1,1]}};




  useEffect(() => {
    const decks = cardDecks;
    setGame({...game, deck: decks[0]})
  }, []);

  const onCardClick = (card: ICard) => {
    const existingCardIndex = playerHand.cards.findIndex(c => c.title === card.title);
    const doesExistInHand = existingCardIndex >= 0;
    if (doesExistInHand)
      setPlayerHand({...playerHand, cards: playerHand.cards.filter(c => c.title !== card.title)});
    else if (playerHand.cards.length < GAME_SETTINGS.MAX_CARDS_PER_HAND && !doesExistInHand)
      setPlayerHand({...playerHand, cards: [...playerHand.cards, card]});
  }

  const onStartRound = () => setGame({...game, view: 'active-game'});
  const onDeckSelected = (deck: ICardDeck) => setGame({deck, view: 'select-cards'});
  
  
  


  const renderView = (view: gameView): any => {

    switch(view) {
      case 'select-deck':
        return <DeckSelection decks={cardDecks} onDeckSelected={(deck: ICardDeck) => onDeckSelected(deck)} />

      case 'select-cards':
        return <CardSelection
                  deck={game.deck}
                  playerHand={playerHand}
                  onCardClick={(card: ICard) => onCardClick(card)}
                  onStartRoundClick={onStartRound} />

        case 'active-game':
          return (
            <GameTable theme={game.deck.theme.table}>
              <SidePanel theme={game.deck.theme.panel}>
                <CardHand hand={playerHand} theme={game.deck.theme.card} />
              </SidePanel>
              <Board board={board} cardTheme={game.deck.theme.card} />
              <SidePanel theme={game.deck.theme.panel}>
                <CardHand hand={playerHand} theme={game.deck.theme.card} />
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
