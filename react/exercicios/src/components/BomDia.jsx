import React, { Fragment } from 'react'

/* Pode ser usado tanto uma <div>, Fragment, Array para elementes adjacentes*/
export default props => 
    <Fragment>
        <h1>Bom Diaa! Sr. {props.nome}</h1>
        <h2>Até breve senhor</h2>
    </Fragment>