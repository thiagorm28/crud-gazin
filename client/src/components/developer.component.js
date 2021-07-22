import React, { Component } from "react";
import DeveloperDataService from "../services/developer.service";

export default class Developer extends Component {
    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeSexo = this.onChangeSexo.bind(this);
        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeHobby = this.onChangeHobby.bind(this);
        this.onChangeDataNascimento = this.onChangeDataNascimento.bind(this);
        this.getDeveloper = this.getDeveloper.bind(this);
        this.updateDeveloper = this.updateDeveloper.bind(this);
        this.deleteDeveloper = this.deleteDeveloper.bind(this);

        this.state = {
            currentDeveloper: {
                _id: null,
                nome: "",
                sexo: "",
                idade: "",
                hobby: "",
                dataNascimento: "",
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getDeveloper(this.props.match.params._id);
    }

    onChangeNome(e) {
        const nome = e.target.value;

        this.setState(function (prevState) {
            return {
                currentDeveloper: {
                    ...prevState.currentDeveloper,
                    nome: nome
                }
            };
        });
    }

    onChangeSexo(e) {
        const sexo = e.target.value;

        this.setState(prevState => ({
            currentDeveloper: {
                ...prevState.currentDeveloper,
                sexo: sexo
            }
        }));
    }

    onChangeIdade(e) {
        const idade = e.target.value;

        this.setState(prevState => ({
            currentDeveloper: {
                ...prevState.currentDeveloper,
                idade: idade
            }
        }));
    }

    onChangeHobby(e) {
        const hobby = e.target.value;

        this.setState(prevState => ({
            currentDeveloper: {
                ...prevState.currentDeveloper,
                hobby: hobby
            }
        }));
    }
    onChangeDataNascimento(e) {
        const dataNascimento = e.target.value;

        this.setState(prevState => ({
            currentDeveloper: {
                ...prevState.currentDeveloper,
                dataNascimento: dataNascimento
            }
        }));
    }

    getDeveloper(_id) {
        DeveloperDataService.get(_id)
            .then(response => {
                this.setState({
                    currentDeveloper: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateDeveloper() {
        DeveloperDataService.update(
            this.state.currentDeveloper._id,
            this.state.currentDeveloper
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "O desenvolvedor foi atualizado com sucesso!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteDeveloper() {
        DeveloperDataService.delete(this.state.currentDeveloper._id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/developers')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const { currentDeveloper } = this.state;

    return (
      <div>
        {currentDeveloper ? (
          <div className="edit-form">
            <h4>Desenvolvedor</h4>
            <form>
              <div className="form-group">
              <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      required
                      value={this.state.nome}
                      onChange={this.onChangeNome}
                      name="nome"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="sexo">Sexo</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sexo"
                      required
                      value={this.state.sexo}
                      onChange={this.onChangeSexo}
                      name="sexo"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="idade">Idade</label>
                    <input
                      type="number"
                      className="form-control"
                      id="idade"
                      required
                      value={this.state.idade}
                      onChange={this.onChangeIdade}
                      name="idade"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="hobby">Hobby</label>
                    <input
                      type="text"
                      className="form-control"
                      id="hobby"
                      required
                      value={this.state.hobby}
                      onChange={this.onChangeHobby}
                      name="description"
                    />
                  </div>
      
                  <div className="form-group">
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input
                      type="date"
                      className="form-control"
                      id="dataNascimento"
                      required
                      value={this.state.dataNascimento}
                      onChange={this.onChangeDataNascimento}
                      name="dataNascimento"
                    />
                  </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteDeveloper}
            >
              Remover
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateDeveloper}
            >
              Atualizar
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Por favor selecione um desenvolvedor...</p>
          </div>
        )}
      </div>
    );
    }
}