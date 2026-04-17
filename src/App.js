import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App px-3">
    <header className="App-header">
    <h1>English Dictionary</h1>
    </header>
    <main>
      <Dictionary />
    </main>
    <footer className="App-footer">
     <small> <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer" 
     title="SheCodes React Dictionary Project">SheCodes</a>
    {" "}
    React Project coded in April 2026 by  
    {" "}
        <a href="https://www.shecodes.io/graduates/15505-emily-berner" target="_blank" rel="noreferrer" 
        title="Emily's SheCodes profile">Emily Berner</a>
        , open-sourced on  <a href="https://github.com/Emmily0/react-dictionary-project_shecodes-eb-042026" target="_blank" rel="noreferrer" 
        title="Emily's React Dictionary Project on GitHub">GitHub</a> 
        {" "}
        and hosted on  <a href="https://react-dictionary-p-shecodes-eb-042026.netlify.app/" target="_blank" rel="noreferrer" 
        title="Emily's React Dictionary Project on Netlify">Netlify</a>. 
        {" "}
        <br/>
        Dictionary data and images powered by SheCodes API.
        {" "}
        <br/>
        SVG illustrations generated with AI.
        </small>
        </footer>
    </div>
  );
}

export default App;
