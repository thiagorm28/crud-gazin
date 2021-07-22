import app from '../../app';
import supertest from 'supertest';
import chai from 'chai';
import chaiDateTime from 'chai-datetime';
import shortid from 'shortid';
import mongoose from 'mongoose';

chai.use(chaiDateTime);

let firstDeveloperIdTest = ''; // terá o valor retornado pel a api
const firstDeveloperBody = {
    nome: 'Thiago Rodrigues Moraes',
    sexo: 'Masculino',
    idade: 20,
    hobby: shortid.generate(),
    dataNascimento: '2001-06-28'
};

describe('developers', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });
    after(function (done) {
        // delisga o servidor express, fecha a conexao com o MongoDB e avisa o Mocha que terminamos:
        app.close(() => {
            mongoose.connection.close(done);
        });
    });

    it('Deve criar um novo desenvolvedor usando o endpoint: POST /developers', async function () {
        const res = await request.post('/developers').send(firstDeveloperBody);

        chai.expect(res.status).to.equal(201);
        chai.expect(res.body).not.to.be.empty;
        chai.expect(res.body).to.be.an('object');
        chai.expect(res.body.id).to.be.a('string');
        firstDeveloperIdTest = res.body.id;
    });

    it('Deve trazer todos os desenvolvedores usando o endpoint: GET /developers', async function () {
        const res = await request
            .get(`/developers`)
            .send();
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.be.an('array');;
    });

    it('Deve trazer a quantidade certa de desenvolvedores usando o endpoint: GET /developers?', async function () {
        const aleatorio = Math.floor(Math.random() * (25 - 1) + 1);
        const res = await request
            .get(`/developers?limit=${aleatorio}`)
            .send();
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.be.an('array');;
            chai.expect(res.body).to.have.lengthOf(aleatorio);
    });

    it('Deve trazer um desenvoldedor específico usando o endpoint: GET /developers/{id}', async function () {
        const res = await request
            .get(`/developers/${firstDeveloperIdTest}`)
            .send();
        chai.expect(res.status).to.equal(200);
        chai.expect(res.body).not.to.be.empty;
        chai.expect(res.body).to.be.an('object');
        chai.expect(res.body._id).to.be.a('string');
        chai.expect(res.body._id).to.equal(firstDeveloperIdTest);
        chai.expect(res.body.nome).to.equal(firstDeveloperBody.nome);
        chai.expect(res.body.sexo).to.equal(firstDeveloperBody.sexo);
        chai.expect(res.body.idade).to.equal(firstDeveloperBody.idade);
        chai.expect(res.body.hobby).to.equal(firstDeveloperBody.hobby);
        chai.expect(new Date(res.body.dataNascimento)).to.equalTime(new Date(firstDeveloperBody.dataNascimento));
    });

    it('Deve atualizar um desenvolvedor dado o Id usando o endpoint: PUT /developers/{id}', async function () {
        const developer = {
            idade: 21,
        };
        const res = await request
            .put(`/developers/${firstDeveloperIdTest}`)
            .send(developer);

            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).not.to.be.empty;
            chai.expect(res.body).to.be.an('object');
            chai.expect(res.body._id).to.be.a('string');
            chai.expect(res.body._id).to.equal(firstDeveloperIdTest);
            chai.expect(res.body.nome).to.equal(firstDeveloperBody.nome);
            chai.expect(res.body.sexo).to.equal(firstDeveloperBody.sexo);
            chai.expect(res.body.idade).to.equal(developer.idade);
            chai.expect(res.body.hobby).to.equal(firstDeveloperBody.hobby);
            chai.expect(new Date(res.body.dataNascimento)).to.equalTime(new Date(firstDeveloperBody.dataNascimento));
    });

    it('Deve deletar um desenvolvedor dado o Id usando o endpoint: DELETE /developers/{id}', async function () {
        const res = await request
            .delete(`/developers/${firstDeveloperIdTest}`)
            .send();

            chai.expect(res.status).to.equal(204);
    });

});
