import express from 'express';
import developerService from '../services/developers.service';

class DevelopersMiddleware {

    // Facilitando a extração do id do desenvolvedor
    async extractDeveloperId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        req.body.id = req.params.developerId;
        next();
    }
    
    async validateDeveloperExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const developer = await developerService.readById(req.params.developerId);
        if (developer) {
            next();
        } else {
            res.status(404).send({
                error: `Developer ${req.params.developerId} not found`,
            });
        }
    }
}

export default new DevelopersMiddleware();