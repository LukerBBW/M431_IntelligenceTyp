import logo from './logo.svg';
import './App.css';
import {useNavigate} from "react-router-dom";


function App() {
    const start=useNavigate()
  return (
    <div className="App">
      <h1>Find out what youre Inteligents type is.</h1>
        <div style={{width:"50vw"}}>
            <h4>Willkommen auf unserer Webseite zur Bestimmung deines Intelligenztyps!
                Möchtest du herausfinden, welchem Bereich deine mentalen Stärken am besten entsprechen?
                Dann bist du hier genau richtig! Mit Hilfe unseres intelligenten Algorithmus kannst du
                deinen individuellen Intelligenztyp entdecken und mehr über deine einzigartigen Fähigkeiten erfahren.
                Ob es um soziale Intelligenz, mathematisches Denken oder kreatives Potenzial geht,
                wir bieten dir eine spannende Reise, um dein geistiges Profil besser zu verstehen. Tauche ein in die Welt
                der Intelligenz und lass uns gemeinsam erkunden, auf welchem Gebiet du am meisten glänzt!</h4>
        </div>
        <button  onClick={()=>start("./quiz")}><p>GET STARTED</p></button>


    </div>
  );
}

export default App;
