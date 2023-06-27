import React, {useRef, useState, useEffect} from 'react';
import Headline from "./Headline";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import './App.css';
import {useLocation} from "react-router-dom";

function Result(typ) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const location = useLocation();
    const obj = location.state;
    console.log(obj)
    console.log(location.state)
    useEffect(() => {
        if (obj.typ == "Physical") {
            setTitle("Bodily-kinesthetic intelligence");
            setText("Du bist körperlich-kinästhetisch intelligent, was bedeutet, dass du über eine außergewöhnliche Geschicklichkeit und Koordination in Bezug auf Körperbewegungen verfügst. Du bist in der Lage, Bewegungen mit Leichtigkeit zu beherrschen und behältst stets eine exzellente Körperwahrnehmung bei, sei es beim Ausüben von Sportarten, Tanzen oder bei handwerklichen Tätigkeiten.")
        }
        if (obj.typ == "Abstract") {
            setTitle("Spatial intelligence");
            setText("Deine räumliche Intelligenz ist bemerkenswert ausgeprägt, was dir die Fähigkeit verleiht, komplexe räumliche Beziehungen zu verstehen und dich mühelos in dreidimensionalen Umgebungen zu orientieren. Deine außergewöhnliche Vorstellungskraft für Formen, Farben und Muster ermöglicht es dir, den Raum in deinem Geist lebendig zu visualisieren und dich darin zu bewegen.");
        }
        if (obj.typ == "Musical") {
            setTitle("Musical intelligence")
            setText("Mit deiner musikalischen Intelligenz bist du in der Lage, Klänge, Rhythmen und Melodien in einer tiefgründigen und emotionalen Weise wahrzunehmen. Dein Gehör ist äußerst sensibel, und du hast die Fähigkeit, Musik zu interpretieren, eigene Stücke zu komponieren oder ein Instrument meisterhaft zu beherrschen. Die Welt der Musik ist für dich eine Quelle der Inspiration und eine bedeutungsvolle Ausdrucksform.");
        }
        if (obj.typ == "Language") {
            setTitle("Linguistic intelligence");
            setText("Dank deiner sprachlichen Intelligenz besitzt du eine bemerkenswerte Fähigkeit, dich mit Worten klar und präzise auszudrücken. Du beherrschst die Kunst der Kommunikation auf höchstem Niveau und verfügst über ein tiefes Verständnis für die Feinheiten der Sprache. Lesen, Schreiben und Debattieren sind Aktivitäten, bei denen du glänzt und dich in deinem Element fühlst.");
        }
        if (obj.typ == "Logical") {
            setTitle("Logical-mathematical intelligence");
            setText("Deine logisch-mathematische Intelligenz ist beeindruckend, da du ein Meister des logischen Denkens und der Analyse von Problemen bist. Du bist in der Lage, komplexe mathematische Aufgaben mit Leichtigkeit zu lösen und besitzt die Fähigkeit, Muster zu erkennen, abstrakt zu denken und logische Schlussfolgerungen zu ziehen. Dein Verstand arbeitet auf höchstem Niveau, um die Geheimnisse der Zahlen und der Logik zu entschlüsseln.");
        }
        if (obj.typ == "Social") {
            setTitle("Interpersonal intelligence");
            setText("Aufgrund deiner interpersonalen Intelligenz bist du ein wahrer Meister der zwischenmenschlichen Interaktion und in der Lage, starke und authentische Beziehungen zu anderen Menschen aufzubauen. Du zeigst außergewöhnliche Empathie und bist in der Lage, die Gefühle, Motivationen und Bedürfnisse anderer zu verstehen. Als hervorragender Zuhörer und Teamplayer bist du ein wichtiger Teil jeder Gemeinschaft.");
        }
        if (obj.typ == "Feelings") {
            setTitle("Intrapersonal intelligence");
            setText("Deine intrapersonale Intelligenz ermöglicht es dir, eine bemerkenswerte Selbstreflexion zu haben und ein tiefes Verständnis für deine eigenen Gefühle, Stärken, Schwächen und Ziele zu entwickeln. Du bist in der Lage, dich selbst zu motivieren, klare Ziele zu setzen und eine starke innere Ausrichtung zu haben. Dein Bewusstsein für deine persönliche Entwicklung ist außergewöhnlich und treibt dich dazu an, das Beste aus dir selbst herauszuholen.");
        } if(obj.typ=="Nature") {
            setTitle("Naturalistic intelligence");
            setText("Als jemand mit naturalistischer Intelligenz hast du eine tiefe Verbindung zur Natur und ein ausgeprägtes Verständnis und Wertschätzung für die natürliche Welt. Du bist besonders gut darin, Muster in der Natur zu erkennen, Tiere und Pflanzen zu beobachten und ein umfassendes Verständnis für ökologische Zusammenhänge zu entwickeln. Die Natur ist für dich eine endlose Quelle der Inspiration und du setzt dich aktiv für den Schutz und die Erhaltung unserer Umwelt ein.");
        }
    }, [])


    return (
        <div>
            <h1>{title}</h1>
            <h4>{text}</h4>

            <div>

            </div>
        </div>
    )
}

export default Result