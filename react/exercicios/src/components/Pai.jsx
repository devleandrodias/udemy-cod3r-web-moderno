import React, { Fragment } from 'react'
import { childrenWhithProps } from '../utils/utils'
// import Filho from "./Filho"

export default props =>
    <Fragment>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome='Pedro' sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome='Carla' /> */}

            {/* {props.children} */}


            {
                childrenWhithProps(props)
                // React.cloneElement(props.children, { ...props,  ...props.children.props })
            }
        </ul>
    </Fragment>
