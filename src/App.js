import './App.css';
import Comentario from "./components/comentario/Comentario";

function App() {
    return (
            <div className="App">
                <h1>React Project</h1>
                <Comentario name="Mario" email="texte@email.com" date={new Date()}>
                    this is a default message
                </Comentario>
                <Comentario name="Andrew" email="texte@email.com" date={new Date()}>
                    this is a default message
                </Comentario>
                <Comentario name="Chris" email="texte@email.com" date={new Date()}>
                    this is a default message
                </Comentario>
            </div>
    );
}

export default App;
