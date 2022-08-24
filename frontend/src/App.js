import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Start from './components/Start.jsx';
import QuestionCard from './components/QuestionCard.jsx';

function App() {
  const [reward, setReward] = useState(0);
  const [level, setLevel] = useState(0);
  
  useEffect(()=>{
    if(level === 0) setReward(0)
  },[level])

  return (
    <div className="App">
        <NavBar reward={reward} setReward={setReward} level={level} setLevel={setLevel}></NavBar>
        <div id='container'>
          {
            level === 0 ? <Start setLevel={setLevel}></Start>
            : <div id='containergame'>
                <QuestionCard reward={reward} setReward={setReward} level={level} setLevel={setLevel}></QuestionCard>
              </div>
          }
        </div>
        <footer id='footer'> Yina Navarro </footer>
    </div>
  );
}

export default App;
