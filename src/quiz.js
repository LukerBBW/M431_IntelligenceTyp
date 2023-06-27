import React, { useRef, useState, useEffect } from 'react';
import Headline from "./Headline";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Form from 'react-bootstrap/Form';
import './App.css';
import {useNavigate} from "react-router-dom";

function Quiz() {
    const navigate=useNavigate();

    const [countPhysical, setCountPhysical] = useState(0);
    const [countAbstract, setCountAbstract] = useState(0);
    const [countMusical, setCountMusical] = useState(0);
    const [countLanguage, setCountLanguage] = useState(0);
    const [countLogical, setCountLogical] = useState(0);
    const [countSocial, setCountSocial] = useState(0);
    const [countFeelings, setCountFeelings] = useState(0);
    const [countNature, setCountNature] = useState(0);

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);

    const [progress, setProgress] = useState(0);
    const [barPosition, setBarPosition] = useState(0);

    const handleClick = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleNextQuestion = () => {
        setProgress((prevProgress) => prevProgress + 12.5);
    };

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const maxScrollTop = documentHeight - windowHeight;
        const percentScrolled = (scrollTop / maxScrollTop) * 100;

        setBarPosition(percentScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("countPhysical: " + countPhysical);
    }, [countPhysical]);

    function sendResults() {
        const intelligenceTypes = [
            {type: 'Physical', value: countPhysical},
            {type: 'Abstract', value: countAbstract},
            {type: 'Musical', value: countMusical},
            {type: 'Language', value: countLanguage},
            {type: 'Logical', value: countLogical},
            {type: 'Social', value: countSocial},
            {type: 'Feelings', value: countFeelings},
            {type: 'Nature', value: countNature},
        ];

        const highestValue = Math.max(...intelligenceTypes.map(type => type.value));
        const highestIntelligenceType = intelligenceTypes.find(type => type.value === highestValue);
        console.log('Highest Intelligence Type:', highestIntelligenceType.type);
        navigate("/result", { state: { typ: highestIntelligenceType.type } });
    }
    return (
        <div style={{ textAlign: "center" }}>
            <div id="scrollBar" style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}>
                <ProgressBar now={progress} style={{ position: 'fixed', top: 0, left: 0, width: '50%' }} />
            </div>

            <div className={"questionBlock"} style={{ height: "1000px" }}>
                <h4 style={{ marginTop: 20 }}>Question 1:</h4>
                <h1> Wie gut bist du darin, körperliche Aktivitäten zu koordinieren und Bewegungen präzise auszuführen? (von 1-10)</h1>
                <Form.Label>Selected: {countPhysical}</Form.Label>
                <Form.Range
                    onChange={(e) => {
                        const value = parseInt(e.target.value);
                        console.log(value);
                        setCountPhysical(value);
                    }}
                    min={1}
                    max={10}
                />
                <button onClick={() => {
                    handleClick(ref1);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref1} text={""}/>

            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 2:</h4>
                <h1>Wie leicht fällt es dir, dich in einer unbekannten Umgebung zurechtzufinden oder komplexe Karten und Diagramme zu interpretieren? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value1 = parseInt(e.target.value);
                        console.log(value1);
                        setCountAbstract(value1);
                    }}
                    min={1}
                    max={10}
                />
                <button onClick={() => {
                    handleClick(ref2);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref2} text={""}/>

            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 3:</h4>
                <h1>Hast du ein ausgeprägtes Gefühl für Rhythmus und Melodie? Spielen oder singen Sie ein Musikinstrument oder haben Sie ein Talent für das Komponieren von Musik? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value2 = parseInt(e.target.value);
                        console.log(value2);
                       setCountMusical(value2);
                    }}
                    min={1}
                    max={10}
                />

                <button onClick={() => {
                    handleClick(ref3);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref3} text={""}/>



            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 4:</h4>
                <h1>Wie gut bist du darin, dich schriftlich und mündlich auszudrücken? Hast du ein starkes Interesse an Wörtern, Sprachen oder dem Verständnis von Texten? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value3 = parseInt(e.target.value);
                        console.log(value3);
                        setCountLanguage(value3);
                    }}
                    min={1}
                    max={10}
                />

                <button onClick={() => {
                    handleClick(ref4);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref4} text={""}/>





            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 5:</h4>
                <h1>Wie gut bist du darin, logische Probleme zu lösen, mathematische Konzepte zu verstehen und komplexe Zusammenhänge zu analysieren? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value4 = parseInt(e.target.value);
                        console.log(value4);
                       setCountLogical(value4);
                    }}
                    min={1}
                    max={10}
                />

                <button onClick={() => {
                    handleClick(ref5);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref5} text={""}/>

            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 6:</h4>
                <h1>Wie gut bist du darin, dich in andere Menschen einzufühlen und ihre Emotionen, Motivationen und Perspektiven zu verstehen? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value5 = parseInt(e.target.value);
                        console.log(value5);
                        setCountSocial(value5);
                    }}
                    min={1}
                    max={10}
                />

                <button onClick={() => {
                    handleClick(ref6);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref6} text={""}/>

            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 7:</h4>
                <h1>Bist du gut darin, deine eigenen Gefühle, Ziele und Stärken zu erkennen und zu reflektieren? Hast du ein starkes Selbstbewusstsein und die Fähigkeit zur Selbstreflexion? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value6 = parseInt(e.target.value);
                        console.log(value6);
                       setCountFeelings(value6);
                    }}
                    min={1}
                    max={10}
                />

                <button onClick={() => {
                    handleClick(ref7);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref7} text={""}/>
            <div style={{height: "1000px"}}>
                <h4 style={{marginTop: 20}}>Question 8:</h4>
                <h1>Wie gut bist du darin, dich mit der natürlichen Umwelt zu verbinden und Pflanzen, Tiere oder natürliche Phänomene zu beobachten und zu verstehen? (von 1-10)</h1>
                <Form.Range
                    onChange={(e) => {
                        const value7 = parseInt(e.target.value);
                        console.log(value7);
                        setCountNature(value7);
                    }}
                    min={1}
                    max={10}
                />
                <button onClick={() => {
                    handleClick(ref8);
                    handleNextQuestion();
                }}>
                    SUBMIT
                </button>
            </div>

            <Headline ref={ref8} text={""}/>
            <div  style={{height: "1000px"}}>
                <button onClick={sendResults}>Get Results</button>
            </div>
        </div>
    );
}

export default Quiz;