import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import ReactCSSTransitionGroup from 'react-transition-group'; 


function App() {

  const [cssClass, setCssClass] = useState<string>('');

  const onFlip = () => {
    setCssClass(cssClass === 'card-flip' ? '' : 'card-flip');
    setTimeout(() => setCssClass(''), 1000)
  }

  const onOwnershipFlip = () => {
    setCssClass(cssClass === 'card-ownership-flip' ? '' : 'card-ownership-flip');
    setTimeout(() => setCssClass(''), 1000)
  }


  return (
    <>
    {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>


    </ReactCSSTransitionGroup> */}


    <Card cssClass={cssClass} />
    
    <button onClick={onFlip}>Flip</button>
    <button onClick={onOwnershipFlip}>Ownership Flip</button>
    </>
  );
}

export default App;
