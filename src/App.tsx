
import { Card } from './components/card/Card';
import { ICard } from './models/ICard';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';
import { useState } from 'react';
import { ICardTheme } from './models/ICardDeck';
import { SpaceCatTheme } from './data/themes';

const sampleCard: ICard = {title: 'Tesla', ranks: [2,4,9,10]}

function App() {

  const [flipCard, setFlipCard] = useState(true);

  const flipCardOver = () => {
    setFlipCard(!flipCard);
  }

  const theme: ICardTheme = SpaceCatTheme;

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <Card card={sampleCard} shouldFaceUp={flipCard} theme={theme} />
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
