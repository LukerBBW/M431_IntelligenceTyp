import logo from './logo.svg';
import './App.css';
import img from "./img.png"
import {useNavigate} from "react-router-dom";

function App() {

    const start = useNavigate();

    return (

        <div className="App">
            <div className={"nav"}>
                <h1 style={{marginTop: "30px",marginLeft:"10px", fontSize: "4rem", color: "#6a00ff", fontWeight: "bold"}}>Find out what
                    your Intelligence type is!</h1>
                <img style={{width: "200px"}} src={img}/>
            </div>
            <div id={"appText"}>
                <div style={{width: "80vw",marginLeft:"10px"}}>
                    <h4>Willkommen auf unserer Webseite zur Bestimmung deines Intelligenztyps!
                        Möchtest du herausfinden, welchem Bereich deine mentalen Stärken am besten entsprechen?
                        Dann bist du hier genau richtig! Mit Hilfe unseres intelligenten Algorithmus kannst du
                        deinen individuellen Intelligenztyp entdecken und mehr über deine einzigartigen Fähigkeiten
                        erfahren.
                        Ob es um soziale Intelligenz, mathematisches Denken oder kreatives Potenzial geht,
                        wir bieten dir eine spannende Reise, um dein geistiges Profil besser zu verstehen. Tauche ein in
                        die Welt
                        der Intelligenz und lass uns gemeinsam erkunden, auf welchem Gebiet du am meisten glänzt!</h4>
                </div>
                <button style={{width: "30vw", marginTop: "30px",marginLeft:"10px"}} onClick={() => start("./quiz")}><p>GET STARTED</p>
                </button>
            </div>
        </div>
    );
}

export default App;
