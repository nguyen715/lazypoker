import './App.css';

import PlayArea from './components/PlayArea';
import InfoArea from './components/InfoArea';
import ChatArea from './components/ChatArea';
import DecisionArea from './components/DecisionArea';

export default function App() {
  return (
    <div className="App">
      <InfoArea />
      <div className="top">
        <PlayArea />
      </div>
      <div className="bottom flex">
        <ChatArea />
        <DecisionArea />
      </div>
    </div>
  );
}
