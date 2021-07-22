import { Router } from "express";
import DevelopersController from './controllers/developers.controller';
import DevelopersMiddleware from './middleware/developers.middleware';

const routes = Router();

routes
    .route(`/developers`)
    .get(DevelopersController.listDevelopers)
    .post(DevelopersController.createDeveloper);

routes.param(`developerId`, DevelopersMiddleware.extractDeveloperId);
routes
    .route(`/developers/:developerId`)
    .all(DevelopersMiddleware.validateDeveloperExists) // validando se o usuário existe sempre que o endpoint `/developers/:developerId` for chamado
    .get(DevelopersController.getDeveloperById)
    .delete(DevelopersController.removeDeveloper)
    .put(DevelopersController.put)

export default routes;