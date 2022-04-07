

import { Board } from './components/board/Board';
import { Card } from './components/card/Card';
import { ICard } from './models/ICard';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';

const sampleCard: ICard = {title: 'Tesla', ranks: [2,5,9,10]}

function App() {

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          {/* <Board /> */}
          <Card card={sampleCard} />
        </MainContent>
        

        <SidePanel>
          right side
        </SidePanel>
      </Layout>
  );
}

export default App;
