import './App.css';
import { Presentation } from './PresentationComponent/presentation'
import { Project } from './ProjectComponent/Project'

function App() {
  return (
    <div className="App">
      <Presentation></Presentation>
      <div id='space'></div>
      <Project></Project>
    </div>
  );
}

export default App;