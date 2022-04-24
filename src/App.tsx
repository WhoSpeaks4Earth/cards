import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useReducer } from 'react';
import { cardDecks } from './data/card-decks';
import { ICardDeck } from './models/ICardDeck';
import { CardSelection } from './components/selection/card-selection/CardSelection';
import { CardHand } from './components/card-hand/CardHand';
import { ICard } from './models/ICard';
import { Board } from './components/board/Board';
import { GameTable } from './components/game-table/GameTable';
import { DeckSelection } from './components/selection/deck-selection/DeckSelection';
import { gameView } from './models/IGame';
import { GAME_SETTINGS } from './data/game-settings';
import { gameReducer } from './reducers/gameReducer';
import { initialGameState } from './data/initial-game-state';
// import { CardDetails } from './components/card-details/CardDetails';
import { StatusPanel } from './components/status-panel/StatusPanel';
import { CenterPiece } from './components/layout/CenterPiece';
import { BoardService } from './services/board.service';
// import { ICardHand } from './models/ICardHand';
import { CardService } from './services/card.service';

const boardService = new BoardService();
const cardService = new CardService();

function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);


  // useEffect(() => {
  //   // if (opponentCanPlay()) {
  //   //   const timer = setTimeout(() => dispatch({type: 'doOpponentMove'}), 2000);
  //   //   return () => clearTimeout(timer);
  //   // }
  // });

  const opponentCanPlay = (): boolean => {
    const isBoardFull = boardService.isBoardFull(state.board);
    return !state.isPlayerTurn && !isBoardFull && cardService.handHasCards(state.opponentHand);
  }
  const onDeckSelected = (deck: ICardDeck) => dispatch({type: 'setDeck', payload: {deck, view: 'select-cards'}});
  const onStartGame = () => dispatch({type: 'startGame'});
  const onPlayerCardClick = (index: number) => dispatch({type: 'setActiveCardInHand', payload: {handType: 'playerHand', index}});
  const onBoardCellClick = (position: [number, number]) => {
    if (state.isPlayerTurn && cardService.handHasCards(state.playerHand)) {
      dispatch({type: 'doPlayerMove', payload: {position, cardToPlay: state.playerHand.cards[state.playerHand.activeIndex]}});
    }
  }

  const onCardSelectionClick = (card: ICard) => {
    if (cardExistsInHand(card))
      dispatch({type: 'removeCardFromHand', payload: {card, handType: 'playerHand'}});
    else if (shouldAddCardToHand(card))
      dispatch({type: 'addCardToHand', payload: {card, handType: 'playerHand'}});
  }

  const shouldAddCardToHand = (card: ICard) => !cardExistsInHand(card) && state.playerHand.cards.length < GAME_SETTINGS.MAX_CARDS_PER_HAND;
  const cardExistsInHand = (card: ICard): boolean => state.playerHand.cards.findIndex((c: ICard) => c.title === card.title) >= 0;
  

  const renderView = (view: gameView): any => {

    switch(view) {
      case 'select-deck':
        return <DeckSelection decks={cardDecks} onDeckSelected={(deck: ICardDeck) => onDeckSelected(deck)} />
      case 'select-cards':
        return <CardSelection
                  deck={state.deck}
                  playerHand={state.playerHand}
                  onCardClick={(card: ICard) => onCardSelectionClick(card)}
                  onStartGameClick={onStartGame} />
        case 'active-game':
          return (
            <GameTable theme={state.deck.theme.table}>
              <SidePanel theme={state.deck.theme.panel}>
                <CardHand hand={state.opponentHand} theme={state.deck.theme.card} />
              </SidePanel>
              <CenterPiece>
                <Board
                  board={state.board}
                  cardTheme={state.deck.theme.card}
                  onCellClick={(position: [number, number]) => onBoardCellClick(position)}
                  isClickable={state.isPlayerTurn && cardService.handHasCards(state.playerHand)}
                />
                <button onClick={() => dispatch({type: 'doOpponentMove'})}>Opponent Move</button>
                <StatusPanel isPlayerTurn={state.isPlayerTurn} />
              </CenterPiece>
              <SidePanel theme={state.deck.theme.panel}>
                <CardHand
                  hand={state.playerHand}
                  theme={state.deck.theme.card}
                  selection={{
                    activeIndex: state.playerHand.activeIndex,
                    onClick: (index: number) => onPlayerCardClick(index)
                  }}
                />
              </SidePanel>
            </GameTable>
          );
    }
  }

  return (
      <Layout>
        <MainContent>
          {renderView(state.view)}
          {/* <CardDetails card={cardDecks[0].cards[0]} theme={cardDecks[0].theme.card} /> */}
        </MainContent>
      </Layout>
  );
}

export default App;
