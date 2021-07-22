import DevelopersDao from '../daos/developers.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateDeveloperDto } from '../dto/create.developer.dto';
import { PutDeveloperDto } from '../dto/put.developer.dto';

class DevelopersService implements CRUD {
    async create(resource: CreateDeveloperDto) {
        return DevelopersDao.addDeveloper(resource);
    }

    async deleteById(id: string) {
        return DevelopersDao.removeDeveloperById(id);
    }

    async list(query: any) {
        const limit = Number(query.limit);
        const skip = Number(query.skip);
        let fields = {}
        for (const key in query) {
            fields = {
                [key]: query[key]
            }
        }
        console.log(fields);
        return DevelopersDao.getDevelopers(limit, skip, fields);
    }

    async readById(id: string) {
        return DevelopersDao.getDeveloperById(id);
    }

    async putById(id: string, resource: PutDeveloperDto) {
        return DevelopersDao.updateDeveloperById(id, resource);
    }

}

export default new DevelopersService();