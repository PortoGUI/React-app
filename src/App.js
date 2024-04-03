import {Component} from "react";
import './App.css';
import Comentario from "./components/comentario/Comentario";

class App extends Component {

    state = {
        comentarios: [
            {
                nome: 'Jhon',
                email: 'Jhon@email.com',
                data: String(new Date()),
                texto: 'this is a default message'
            },
            {
                nome: 'Hanna',
                email: 'Hanna@email.com',
                data: String(new Date()),
                texto: 'this is a default message too'
            },
        ]
    }

    render() {
        return (
                <div className="App">
                    <h1>React Project</h1>
                    {
                        this.state.comentarios.map((comentario, i) => (
                                <Comentario key={i} name={comentario.nome} email={comentario.email}
                                            date={comentario.data}>
                                    {comentario.texto}
                                </Comentario>
                        ))
                    }
                </div>
        );
    }
}

export default App;
