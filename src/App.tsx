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


function App() {
  const [state, dispatch] = useReducer(gameReducer, initialGameState);

  const onDeckSelected = (deck: ICardDeck) => dispatch({type: 'setDeck', payload: {deck, view: 'select-cards'}});
  const onStartRound = () => dispatch({type: 'setView', payload: {view: 'active-game'}});
  const onPlayerCardClick = (index: number) => dispatch({type: 'setActiveCardInHand', payload: {handType: 'playerHand', index}});
  const onBoardCellClick = (position: [number, number]) => dispatch({type: 'placeCardOnBoard', payload: {position}});

  const onCardSelectionClick = (card: ICard) => {
    if (shouldRemoveCardFromHand(card))
      dispatch({type: 'removeCardFromHand', payload: {card, handType: 'playerHand'}});
    else if (shouldAddCardToHand(card))
      dispatch({type: 'addCardToHand', payload: {card, handType: 'playerHand'}});
  }

  const shouldRemoveCardFromHand = (card: ICard) => cardExistsInHand(card);
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
                  onStartRoundClick={onStartRound} />
        case 'active-game':
          return (
            <GameTable theme={state.deck.theme.table}>
              <SidePanel theme={state.deck.theme.panel}>
                <CardHand hand={state.opponentHand} theme={state.deck.theme.card} />
              </SidePanel>
              <Board
                board={state.board}
                cardTheme={state.deck.theme.card}
                onCellClick={(position: [number, number]) => onBoardCellClick(position)}
              />
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
        </MainContent>
      </Layout>
  );
}

export default App;
