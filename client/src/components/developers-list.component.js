import React, { Component } from "react";
import DeveloperDataService from "../services/developer.service";
import { Link } from "react-router-dom";

export default class DevelopersList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchNome = this.onChangeSearchNome.bind(this);
    this.retrieveDevelopers = this.retrieveDevelopers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveDeveloper = this.setActiveDeveloper.bind(this);
    this.searchNome = this.searchNome.bind(this);

    this.state = {
      developers: [],
      currentDeveloper: null,
      currentIndex: -1,
      searchNome: ""
    };
  }

  componentDidMount() {
    this.retrieveDevelopers();
  }

  onChangeSearchNome(e) {
    const searchNome = e.target.value;

    this.setState({
      searchNome: searchNome
    });
  }

  retrieveDevelopers() {
    DeveloperDataService.getAll()
      .then(response => {
        this.setState({
          developers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveDevelopers();
    this.setState({
      currentDeveloper: null,
      currentIndex: -1
    });
  }

  setActiveDeveloper(developer, index) {
    this.setState({
      currentDeveloper: developer,
      currentIndex: index
    });
  }

  searchNome() {
    DeveloperDataService.findByNome(this.state.searchNome)
      .then(response => {
        this.setState({
          developers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchNome, developers, currentDeveloper, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por nome nome"
              value={searchNome}
              onChange={this.onChangeSearchNome}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchNome}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Lista de Desenvolvedores</h4>

          <ul className="list-group">
            {developers &&
              developers.map((developer, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveDeveloper(developer, index)}
                  key={index}
                >
                  {developer.nome}
                </li>
              ))}
          </ul>

        </div>
        <div className="col-md-6">
          {currentDeveloper ? (
            <div>
              <h4>Desenvolvedor</h4>
              <div>
                <label>
                  <strong>Nome:</strong>
                </label>{" "}
                {currentDeveloper.nome}
              </div>
              <div>
                <label>
                  <strong>Sexo:</strong>
                </label>{" "}
                {currentDeveloper.sexo}
              </div>
              <div>
                <label>
                  <strong>Idade:</strong>
                </label>{" "}
                {currentDeveloper.idade}
              </div>
              <div>
                <label>
                  <strong>Hobby:</strong>
                </label>{" "}
                {currentDeveloper.hobby}
              </div>
              <div>
                <label>
                  <strong>Data de Nascimento:</strong>
                </label>{" "}
                {currentDeveloper.dataNascimento}
              </div>

              <Link
                to={"/developers/" + currentDeveloper._id}
                className="badge badge-warning"
              >
                <button 
                className="btn btn-outline-secondary"
                type="button">
                  Editar
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Por favor selecione um Desenvolvedor...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}