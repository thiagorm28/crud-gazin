import { CreateDeveloperDto } from '../dto/create.developer.dto';
import { PutDeveloperDto } from '../dto/put.developer.dto';
import mongooseService from '../../common/services/mongoose.service';

import shortid from 'shortid';

class DevelopersDao {
    Schema = mongooseService.getMongoose().Schema;

    developerSchema = new this.Schema({
        _id: String,
        nome: String,
        sexo: String,
        idade: Number,
        hobby: String,
        dataNascimento: Date,
    }, { id: false });

    Developer = mongooseService.getMongoose().model('Developers', this.developerSchema);

    async addDeveloper(developerFields: CreateDeveloperDto) {
        const developerId = shortid.generate();
        const dataNascimento = new Date(developerFields.dataNascimento);
        const developer = new this.Developer({
            _id: developerId,
            ...developerFields,
            dataNascimento: dataNascimento,
        });
        await developer.save();
        return developerId;
    }
    
    async getDeveloperById(developerId: string) {
        return this.Developer.findOne({ _id: developerId }).populate('Developer').exec();
    }
    
    async getDevelopers(limit: number, skip: number, fields: any) {
        return this.Developer.find(fields)
            .skip(skip)
            .limit(limit)
            .exec();
    }

    async updateDeveloperById(developerId: string, developerFields: PutDeveloperDto) {
        const existingDeveloper = await this.Developer.findOneAndUpdate(
            { _id: developerId },
            { $set: developerFields },
            { new: true },  // retorna o novo registro e não o antigo
        ).exec();
    
        return existingDeveloper;
    }

    async removeDeveloperById(developerId: string) {
        return this.Developer.deleteOne({ _id: developerId }).exec();
    }

}



export default new DevelopersDao();