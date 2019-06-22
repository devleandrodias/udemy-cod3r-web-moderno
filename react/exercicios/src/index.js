import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import Multiplos from "./components/Multiplos"
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

/* Isso é JSX que será transpilado para JavaScript puro através do runtime que está */
ReactDOM.render(
    <Fragment>
        <Pai nome='Paulo' sobrenome='Castro' >
            <Filho nome='Thaísa' />
            <Filho nome='Beatriz' />
            <Filho nome='Leandro' />
        </Pai>
    </Fragment>
, document.getElementById('root'))