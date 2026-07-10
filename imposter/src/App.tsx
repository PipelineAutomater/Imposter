import { type JSX } from 'react'
import text from './assets/Categories.txt'
import './App.css'
function App() {
  return (<>
    <DisplayPlayersBoxes />
    <AddPlayer />
  </>);
}

function AddPlayer() {
  return <button>Add Player</button>
}

function DisplayPlayersBoxes() {
  const lines:string[] = text.split(/\r\n/);
  const categories: string[] = lines.filter((line) => line.startsWith("Category:"));
  const category:string = categories[Math.random()*categories.length];
  const index = lines.indexOf(category);
  const word:string = lines.slice(index + 1, index + 1000)[Math.random()*1000];
  const players:string[] = ["John", "Jack", "Jill"];
  const divs: JSX.Element[] = [];
  for (let i:number = 0; i < players.length; i++) {
    divs.push(<div className = "player-box">{players[i]}</div>);
  }
  return <div id = "player-box-container">{divs}</div>;
}

export default App
