import React from "react";
import './comentario.css'

const Comentario = props => (
        <div className="comentario">
            <h2><b>{props.name}</b></h2>
            <p>{props.email}</p>
            <p>{props.children}</p>
            <p>{String(props.date)}</p>
        </div>
)

export default Comentario;