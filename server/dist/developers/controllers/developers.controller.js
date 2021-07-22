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
// importando o service de developers
const developers_service_1 = __importDefault(require("../services/developers.service"));
class DevelopersController {
    listDevelopers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = req.query;
            const developers = yield developers_service_1.default.list(query);
            res.status(200).send(developers);
        });
    }
    getDeveloperById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const developer = yield developers_service_1.default.readById(req.body.id);
            res.status(200).send(developer);
        });
    }
    createDeveloper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const developerId = yield developers_service_1.default.create(req.body);
            res.status(201).send({ id: developerId });
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const developer = yield developers_service_1.default.putById(req.body.id, req.body);
            res.status(200).send(developer);
        });
    }
    removeDeveloper(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield developers_service_1.default.deleteById(req.body.id);
            res.status(204).send();
        });
    }
}
exports.default = new DevelopersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGV2ZWxvcGVycy9jb250cm9sbGVycy9kZXZlbG9wZXJzLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsd0ZBQStEO0FBRS9ELE1BQU0sb0JBQW9CO0lBQ2hCLGNBQWMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUM1RCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1lBQ3hCLE1BQU0sVUFBVSxHQUFHLE1BQU0sNEJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLGdCQUFnQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzlELE1BQU0sU0FBUyxHQUFHLE1BQU0sNEJBQWlCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdELE1BQU0sV0FBVyxHQUFHLE1BQU0sNEJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNqRCxNQUFNLFNBQVMsR0FBRyxNQUFNLDRCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUssZUFBZSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzdELE1BQU0sNEJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksb0JBQW9CLEVBQUUsQ0FBQyJ9