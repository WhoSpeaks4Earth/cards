

import { Board } from './components/board/Board';
import { Layout } from './components/layout/Layout';
import { MainContent } from './components/layout/MainContent';
import { SidePanel } from './components/layout/SidePanel';



function App() {

  return (
      <Layout>
        <SidePanel>
          left side
        </SidePanel>

        <MainContent>
          <Board />
        </MainContent>
        

        <SidePanel>
          right side
        </SidePanel>
      </Layout>
  );
}

export default App;
