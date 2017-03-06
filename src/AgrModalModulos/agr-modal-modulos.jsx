import React, { Component } from 'react';

import Apps from 'material-ui/svg-icons/navigation/apps';
import IconButton from 'material-ui/IconButton';

const appsDiv = {
    minHeight: '196px',
    width: '280px',
    background: '#fff',
    position: 'absolute',
    right: '16px',
    top: '72px',
    border: '1px solid rgba(0, 0, 0, .2)',
    color: '#000',
    padding: '20px'
};

const appsModulosUl = {
    height: '100%',
    listStyle: 'none outside none',
    position: 'relative',

    background: '#fff',
    margin: '0',
    minHeight: '100px',
    padding: '5px',
    textAlign: 'left',
    whiteSpace: 'normal'
};

const appsModuloButton = {
    display: 'inline-block',
    verticalAlign: 'top',
    zIndex: '999',
    height: '70px',
    width: '70px',
    margin: '10px',

    borderRadius: '3px',
    border: 'solid 1px rgb(224, 224, 224)',
    backgroundColor: 'white',
    cursor: 'pointer'
};

class AgrModalModulos extends Component {

    static onClickModulo(modulo) {
        localStorage['ls.moduloAtivo'] = modulo;
        setTimeout(window.location = `${window.location.protocol
            }//${window.location.host}/${modulo}/`, 100);
    }

    constructor(props) {
        super(props);
        this.state = {
            exibirApp: false,
            modulos: [
                {
                    nome: 'ACC'
                }
            ]
        };
    }

    render() {
        let modulosAgrotisHTML = null;
        if (this.state.exibirApp) {
            modulosAgrotisHTML = (
                <div style={ appsDiv }>
                    <div style={ appsModulosUl }>
                        {
                            this.state.modulos.map(
                                modulo => (
                                    <button
                                        style={ appsModuloButton }
                                        key={modulo.nome}
                                        onClick={() => AgrModalModulos.onClickModulo(modulo.nome)}
                                    >
                                            <span style={ { textTransform: 'capitalize' } }>
                                                {modulo.nome}
                                            </span>
                                    </button>
                                ),
                            )
                        }
                    </div>
                </div>
            )
        }

        return (
            <div>
                <IconButton
                    tooltip="Módulos Agrotis"
                    onClick={() => this.setState({ exibirApp: !this.state.exibirApp })}
                >
                    <Apps />
                </IconButton>

                {modulosAgrotisHTML}
            </div>
        )
    }
}

AgrModalModulos.propTypes = {};

export default AgrModalModulos;
