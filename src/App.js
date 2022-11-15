import './App.css';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import Card from './components/Card';
import { data } from "./data.js"




function App() {
  let card = data.map(card => {
    return <Card
      key={card.id}
      {...card}

    />
  })

  return (
    <div>
      <NavBar />
      <Hero />
      <div className="cards--container">
        {card}
      </div>
    </div >
  );
}

export default App;
