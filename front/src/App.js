import './styles/style.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Wilder from './components/Wilder';

function App() {

  const [wildersState, setWilders] = useState ([]);

  useEffect(() => {
    const fetchData = async () => {
      const wildersData = await axios.get("http://localhost:5000/api/wilder");
      console.log(wildersData);
      setWilders(wildersData.data);
    };
    fetchData();
  },[])
console.log(wildersState, "wilder");
  return (
    <div>
    <header>
      <div className="container">
        <h1>Wilders Book</h1>
      </div>
    </header>
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
      {wildersState?.map((wilder) => (
        <Wilder
        key={wilder.id}
        name={wilder.name}
        city={wilder.city}
        skills={wilder.skills}
      />
      ))}
      </section>
    </main>
    <footer>
      <div className="container">
        <p>&copy; 2022 Wild Code School</p>
      </div>
    </footer>
  </div>
  );
      }

export default App;
