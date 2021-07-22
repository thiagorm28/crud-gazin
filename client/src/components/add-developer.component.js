import React, { Component } from "react";
import DeveloperDataService from "../services/developer.service";

export default class AddDeveloper extends Component {
    constructor(props) {
        super(props);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeSexo = this.onChangeSexo.bind(this);
        this.onChangeIdade = this.onChangeIdade.bind(this);
        this.onChangeHobby = this.onChangeHobby.bind(this);
        this.onChangeDataNascimento = this.onChangeDataNascimento.bind(this);
        this.saveDeveloper = this.saveDeveloper.bind(this);
        this.newDeveloper = this.newDeveloper.bind(this);

        this.state = {
            _id: null,
            nome: "",
            sexo: "",
            idade: "",
            hobby: "",
            dataNascimento: "",

            submitted: false
        };
    }

    onChangeNome(e) {
        this.setState({
            nome: e.target.value
        });
    }

    onChangeSexo(e) {
        this.setState({
            sexo: e.target.value
        });
    }

    onChangeIdade(e) {
        this.setState({
            idade: e.target.value
        });
    }

    onChangeHobby(e) {
        this.setState({
            hobby: e.target.value
        });
    }

    onChangeDataNascimento(e) {
        this.setState({
            dataNascimento: e.target.value
        });
    }

    saveDeveloper() {
        var data = {
            nome: this.state.nome,
            sexo: this.state.sexo,
            idade: this.state.idade,
            hobby: this.state.hobby,
            dataNascimento: this.state.dataNascimento,
        };

        DeveloperDataService.create(data)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    nome: response.data.nome,
                    sexo: response.data.sexo,
                    idade: response.data.idade,
                    hobby: response.data.hobby,
                    dataNascimento: response.data.dataNascimento,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newDeveloper() {
        this.setState({
            _id: null,
            nome: "",
            sexo: "",
            idade: "",
            hobby: "",
            dataNascimento: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
              {this.state.submitted ? (
                <div>
                  <h4>Você enviou com sucesso!</h4>
                  <button className="btn btn-success" onClick={this.newDeveloper}>
                    Adicionar
                  </button>
                </div>
              ) : (
                <div>
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
      
                  <button onClick={this.saveDeveloper} className="btn btn-success">
                    Enviar
                  </button>
                </div>
              )}
            </div>
        );
    }
}