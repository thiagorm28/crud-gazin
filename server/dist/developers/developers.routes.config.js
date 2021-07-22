"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const developers_controller_1 = __importDefault(require("./controllers/developers.controller"));
const developers_middleware_1 = __importDefault(require("./middleware/developers.middleware"));
const routes = express_1.Router();
routes
    .route(`/developers`)
    .get(developers_controller_1.default.listDevelopers)
    .post(developers_controller_1.default.createDeveloper);
routes.param(`developerId`, developers_middleware_1.default.extractDeveloperId);
routes
    .route(`/developers/:developerId`)
    .all(developers_middleware_1.default.validateDeveloperExists) // validando se o usuário existe sempre que o endpoint `/developers/:developerId` for chamado
    .get(developers_controller_1.default.getDeveloperById)
    .delete(developers_controller_1.default.removeDeveloper)
    .put(developers_controller_1.default.put);
exports.default = routes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vZGV2ZWxvcGVycy9kZXZlbG9wZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBaUM7QUFDakMsZ0dBQXVFO0FBQ3ZFLCtGQUFzRTtBQUV0RSxNQUFNLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7QUFFeEIsTUFBTTtLQUNELEtBQUssQ0FBQyxhQUFhLENBQUM7S0FDcEIsR0FBRyxDQUFDLCtCQUFvQixDQUFDLGNBQWMsQ0FBQztLQUN4QyxJQUFJLENBQUMsK0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFaEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsK0JBQW9CLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNyRSxNQUFNO0tBQ0QsS0FBSyxDQUFDLDBCQUEwQixDQUFDO0tBQ2pDLEdBQUcsQ0FBQywrQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLDZGQUE2RjtLQUMvSSxHQUFHLENBQUMsK0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7S0FDMUMsTUFBTSxDQUFDLCtCQUFvQixDQUFDLGVBQWUsQ0FBQztLQUM1QyxHQUFHLENBQUMsK0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7QUFFbEMsa0JBQWUsTUFBTSxDQUFDIn0=