import React from "react";
import {formatRelative} from 'date-fns'

import './comentario.css'
import usrImg from '../../assets/svg/user.svg'

const Comentario = props => {
    return (
            <div className="comentario">
                <img class="avt" src={usrImg} alt={props.name}/>
                <div class="conteudo">
                    <h2 class="nome">{props.name}</h2>
                    <p class="email">{props.email}</p>
                    <p class="mensagem">{props.children}</p>
                    <p class="data">{formatRelative(props.date, new Date())}</p>
                    <button onClick={props.onRemove}>&times;</button>
                </div>
            </div>
    )
}

export default Comentario;