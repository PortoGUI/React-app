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
        ],
        novoComentario: {
            nome: '',
            email: '',
            texto: ''
        }
    }

    addComment = event => {
        event.preventDefault()
        const newComment = {...this.state.novoComentario, data: String(new Date())}
        this.setState({
            comentarios: [...this.state.comentarios, newComment],
            novoComentario: {nome: '', email: '', texto: ''}
        })
    }

    removeComment = event => {
        let lista = this.state.comentarios;
        lista = lista.filter(c=> c !== event)

        this.setState({comentarios: lista})
    }

    changeByName = event => {
        this.setState({novoComentario: {...this.state.novoComentario, [event.target.name]: event.target.value}})
    }

    render() {
        return (
                <div className="App">
                    <h1>React Project</h1>
                    {this.state.comentarios.map((comentario, i) => (
                            <Comentario key={i} name={comentario.nome} email={comentario.email}
                                        date={comentario.data} onRemove={this.removeComment.bind(this, comentario)}>
                                {comentario.texto}
                            </Comentario>
                    ))}

                    <form method="post" onSubmit={this.addComment}>
                        <h2>Adicionar Comentario</h2>
                        <div>
                            <input value={this.state.novoComentario.nome} onChange={this.changeByName} type="text"
                                   name="nome" placeholder="Digite um nome"/>
                        </div>
                        <div>
                            <input value={this.state.novoComentario.email} onChange={this.changeByName} type="email"
                                   name="email" placeholder="digite um e-mail"/>
                        </div>
                        <div>
                            <textarea value={this.state.novoComentario.texto} onChange={this.changeByName}
                                      name="texto" rows="4"/>
                        </div>
                        <button>Adicionar</button>
                    </form>

                </div>
        );
    }
}

export default App;
