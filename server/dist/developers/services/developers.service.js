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
const developers_dao_1 = __importDefault(require("../daos/developers.dao"));
class DevelopersService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return developers_dao_1.default.addDeveloper(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return developers_dao_1.default.removeDeveloperById(id);
        });
    }
    list(query) {
        return __awaiter(this, void 0, void 0, function* () {
            const limit = Number(query.limit);
            const skip = Number(query.skip);
            let fields = {};
            for (const key in query) {
                fields = {
                    [key]: query[key]
                };
            }
            console.log(fields);
            return developers_dao_1.default.getDevelopers(limit, skip, fields);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return developers_dao_1.default.getDeveloperById(id);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return developers_dao_1.default.updateDeveloperById(id, resource);
        });
    }
}
exports.default = new DevelopersService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGV2ZWxvcGVycy9zZXJ2aWNlcy9kZXZlbG9wZXJzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0RUFBbUQ7QUFLbkQsTUFBTSxpQkFBaUI7SUFDYixNQUFNLENBQUMsUUFBNEI7O1lBQ3JDLE9BQU8sd0JBQWEsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sd0JBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO0tBQUE7SUFFSyxJQUFJLENBQUMsS0FBVTs7WUFDakIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQTtZQUNmLEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNyQixNQUFNLEdBQUc7b0JBQ0wsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDO2lCQUNwQixDQUFBO2FBQ0o7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sd0JBQWEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyx3QkFBYSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBeUI7O1lBQy9DLE9BQU8sd0JBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDM0QsQ0FBQztLQUFBO0NBRUo7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==