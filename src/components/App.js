import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../sass/App.scss';
import logements from '../data/logements.json';
import Header from './Header';


function App() {
  console.log('Logements:', logements);
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Liste des logements</h1>
        <ul>
          {logements.map(logement => (
            <li key={logement.id}>
              <h2>{logement.title}</h2>
              <p>{logement.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
