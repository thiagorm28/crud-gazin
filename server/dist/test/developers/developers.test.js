"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = __importDefault(require("chai"));
const chai_datetime_1 = __importDefault(require("chai-datetime"));
const shortid_1 = __importDefault(require("shortid"));
const mongoose_1 = __importDefault(require("mongoose"));
chai_1.default.use(chai_datetime_1.default);
let firstDeveloperIdTest = ''; // terá o valor retornado pel a api
const firstDeveloperBody = {
    nome: 'Thiago Rodrigues Moraes',
    sexo: 'Masculino',
    idade: 20,
    hobby: shortid_1.default.generate(),
    dataNascimento: '2001-06-28'
};
describe('developers', function () {
    let request;
    before(function () {
        request = supertest_1.default.agent(app_1.default);
    });
    after(function (done) {
        // delisga o servidor express, fecha a conexao com o MongoDB e avisa o Mocha que terminamos:
        app_1.default.close(() => {
            mongoose_1.default.connection.close(done);
        });
    });
    it('Deve criar um novo desenvolvedor usando o endpoint: POST /developers', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.post('/developers').send(firstDeveloperBody);
            chai_1.default.expect(res.status).to.equal(201);
            chai_1.default.expect(res.body).not.to.be.empty;
            chai_1.default.expect(res.body).to.be.an('object');
            chai_1.default.expect(res.body.id).to.be.a('string');
            firstDeveloperIdTest = res.body.id;
        });
    });
    it('Deve trazer todos os desenvolvedores usando o endpoint: GET /developers', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request
                .get(`/developers`)
                .send();
            chai_1.default.expect(res.status).to.equal(200);
            chai_1.default.expect(res.body).to.be.an('array');
            ;
        });
    });
    it('Deve trazer a quantidade certa de desenvolvedores usando o endpoint: GET /developers?', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const aleatorio = Math.floor(Math.random() * (25 - 1) + 1);
            const res = yield request
                .get(`/developers?limit=${aleatorio}`)
                .send();
            chai_1.default.expect(res.status).to.equal(200);
            chai_1.default.expect(res.body).to.be.an('array');
            ;
            chai_1.default.expect(res.body).to.have.lengthOf(aleatorio);
        });
    });
    it('Deve trazer um desenvoldedor específico usando o endpoint: GET /developers/{id}', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request
                .get(`/developers/${firstDeveloperIdTest}`)
                .send();
            chai_1.default.expect(res.status).to.equal(200);
            chai_1.default.expect(res.body).not.to.be.empty;
            chai_1.default.expect(res.body).to.be.an('object');
            chai_1.default.expect(res.body._id).to.be.a('string');
            chai_1.default.expect(res.body._id).to.equal(firstDeveloperIdTest);
            chai_1.default.expect(res.body.nome).to.equal(firstDeveloperBody.nome);
            chai_1.default.expect(res.body.sexo).to.equal(firstDeveloperBody.sexo);
            chai_1.default.expect(res.body.idade).to.equal(firstDeveloperBody.idade);
            chai_1.default.expect(res.body.hobby).to.equal(firstDeveloperBody.hobby);
            chai_1.default.expect(new Date(res.body.dataNascimento)).to.equalTime(new Date(firstDeveloperBody.dataNascimento));
        });
    });
    it('Deve atualizar um desenvolvedor dado o Id usando o endpoint: PUT /developers/{id}', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const developer = {
                idade: 21,
            };
            const res = yield request
                .put(`/developers/${firstDeveloperIdTest}`)
                .send(developer);
            chai_1.default.expect(res.status).to.equal(200);
            chai_1.default.expect(res.body).not.to.be.empty;
            chai_1.default.expect(res.body).to.be.an('object');
            chai_1.default.expect(res.body._id).to.be.a('string');
            chai_1.default.expect(res.body._id).to.equal(firstDeveloperIdTest);
            chai_1.default.expect(res.body.nome).to.equal(firstDeveloperBody.nome);
            chai_1.default.expect(res.body.sexo).to.equal(firstDeveloperBody.sexo);
            chai_1.default.expect(res.body.idade).to.equal(developer.idade);
            chai_1.default.expect(res.body.hobby).to.equal(firstDeveloperBody.hobby);
            chai_1.default.expect(new Date(res.body.dataNascimento)).to.equalTime(new Date(firstDeveloperBody.dataNascimento));
        });
    });
    it('Deve deletar um desenvolvedor dado o Id usando o endpoint: DELETE /developers/{id}', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request
                .delete(`/developers/${firstDeveloperIdTest}`)
                .send();
            chai_1.default.expect(res.status).to.equal(204);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9kZXZlbG9wZXJzL2RldmVsb3BlcnMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QiwwREFBa0M7QUFDbEMsZ0RBQXdCO0FBQ3hCLGtFQUF5QztBQUN6QyxzREFBOEI7QUFDOUIsd0RBQWdDO0FBRWhDLGNBQUksQ0FBQyxHQUFHLENBQUMsdUJBQVksQ0FBQyxDQUFDO0FBRXZCLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO0FBQ2xFLE1BQU0sa0JBQWtCLEdBQUc7SUFDdkIsSUFBSSxFQUFFLHlCQUF5QjtJQUMvQixJQUFJLEVBQUUsV0FBVztJQUNqQixLQUFLLEVBQUUsRUFBRTtJQUNULEtBQUssRUFBRSxpQkFBTyxDQUFDLFFBQVEsRUFBRTtJQUN6QixjQUFjLEVBQUUsWUFBWTtDQUMvQixDQUFDO0FBRUYsUUFBUSxDQUFDLFlBQVksRUFBRTtJQUNuQixJQUFJLE9BQWlDLENBQUM7SUFDdEMsTUFBTSxDQUFDO1FBQ0gsT0FBTyxHQUFHLG1CQUFTLENBQUMsS0FBSyxDQUFDLGFBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxDQUFDLFVBQVUsSUFBSTtRQUNoQiw0RkFBNEY7UUFDNUYsYUFBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDWCxrQkFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxzRUFBc0UsRUFBRTs7WUFDdkUsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBRXZFLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3RDLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlFQUF5RSxFQUFFOztZQUMxRSxNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU87aUJBQ3BCLEdBQUcsQ0FBQyxhQUFhLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1lBQ1IsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUFBLENBQUM7UUFDakQsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx1RkFBdUYsRUFBRTs7WUFDeEYsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPO2lCQUNwQixHQUFHLENBQUMscUJBQXFCLFNBQVMsRUFBRSxDQUFDO2lCQUNyQyxJQUFJLEVBQUUsQ0FBQztZQUNSLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7WUFBQSxDQUFDO1lBQ3pDLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUZBQWlGLEVBQUU7O1lBQ2xGLE1BQU0sR0FBRyxHQUFHLE1BQU0sT0FBTztpQkFDcEIsR0FBRyxDQUFDLGVBQWUsb0JBQW9CLEVBQUUsQ0FBQztpQkFDMUMsSUFBSSxFQUFFLENBQUM7WUFDWixjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RDLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN0QyxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QyxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUN6RCxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RCxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RCxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvRCxjQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDN0csQ0FBQztLQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtRkFBbUYsRUFBRTs7WUFDcEYsTUFBTSxTQUFTLEdBQUc7Z0JBQ2QsS0FBSyxFQUFFLEVBQUU7YUFDWixDQUFDO1lBQ0YsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPO2lCQUNwQixHQUFHLENBQUMsZUFBZSxvQkFBb0IsRUFBRSxDQUFDO2lCQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFakIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QyxjQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDdEMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDekQsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RELGNBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9ELGNBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqSCxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG9GQUFvRixFQUFFOztZQUNyRixNQUFNLEdBQUcsR0FBRyxNQUFNLE9BQU87aUJBQ3BCLE1BQU0sQ0FBQyxlQUFlLG9CQUFvQixFQUFFLENBQUM7aUJBQzdDLElBQUksRUFBRSxDQUFDO1lBRVIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMifQ==