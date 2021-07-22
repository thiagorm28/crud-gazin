import express from 'express';

// importando o service de developers
import developersService from '../services/developers.service';

class DevelopersController {
    async listDevelopers(req: express.Request, res: express.Response) {
        const query = req.query;
        const developers = await developersService.list(query);
        res.status(200).send(developers);
    }

    async getDeveloperById(req: express.Request, res: express.Response) {
        const developer = await developersService.readById(req.body.id);
        res.status(200).send(developer);
    }

    async createDeveloper(req: express.Request, res: express.Response) {
        const developerId = await developersService.create(req.body);
        res.status(201).send({ id: developerId });
    }

    async put(req: express.Request, res: express.Response) {
        const developer = await developersService.putById(req.body.id, req.body);
        res.status(200).send(developer);
    }

    async removeDeveloper(req: express.Request, res: express.Response) {
        await developersService.deleteById(req.body.id);
        res.status(204).send();
    }
}

export default new DevelopersController();