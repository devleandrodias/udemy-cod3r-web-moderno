import React, { Component, Fragment } from 'react'

//Através do this.props você tem acesso aos aparâmetros passados pelo componente de classe
export default class Saudacao extends Component {

    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props) {
        super(props)

        this.setTipo = this.setTipo.bind(this)
    }

    //Somente o estado pode atualizar o componente 

    //Quem manda na rendenização do compoentente é o estado

    setTipo(e) {
        // console.log(e.target.value)
        // this.props.tipo = e.target.value
        // let i = 1
        // setInterval(() => {
        //     this.setState({ tipo: ++i})
        // }, 1000)
        this.setState({ tipo: e.target.value })
    }

    setNome(e) {
        this.setState({ nome: e.target.value })
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <Fragment>
                <h1>{tipo} Sr. {nome}</h1>
                <hr />
                <input type="text" placeholder='Tipo da saudação...' value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder='Nome...' value={nome} onChange={e => this.setNome(e)} />
            </Fragment>
        )
    }
}