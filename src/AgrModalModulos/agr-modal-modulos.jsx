import React, { Component } from 'react';
import '../AgrModalModulos/agr-modal-modulos.css';

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
        return (
            <div>
                <button
                    onClick={() => this.setState({ exibirApp: !this.state.exibirApp })}
                >
                    Modulos
                </button>

                <div className={(this.state.exibirApp ? 'apps-div' : 'apps-div not-show-apps')}>
                    <div className="apps-modulos-ul">
                        {
                            this.state.modulos.map(
                                modulo => (
                                    <button
                                        className="apps-modulo-button"
                                        key={modulo.nome}
                                        onClick={() => AgrModalModulos.onClickModulo(modulo.nome)}
                                    >
                                        <span className="btn-modulo-name">
                                            {modulo.nome}
                                        </span>
                                    </button>
                                ),
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

AgrModalModulos.propTypes = {};

export default AgrModalModulos;
