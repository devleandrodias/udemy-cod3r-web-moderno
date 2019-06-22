import React from 'react'

/* Exportanto multiplos componentes */

const BoaTarde = props => <h1>Boa Tarde! {props.nome}</h1>

const BoaNoite = props => <h1>Boa Noite! {props.nome}</h1>

export { BoaTarde, BoaNoite }

export default { BoaTarde, BoaNoite }