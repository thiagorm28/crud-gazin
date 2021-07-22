import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/developers");
  }

  get(_id) {
    return http.get(`/developers/${_id}`);
  }

  create(data) {
    return http.post("/developers", data);
  }

  update(_id, data) {
    return http.put(`/developers/${_id}`, data);
  }

  delete(_id) {
    return http.delete(`/developers/${_id}`);
  }

  findByNome(nome) {
    return http.get(`/developers?nome=${nome}`);
  }
}

export default new TutorialDataService();