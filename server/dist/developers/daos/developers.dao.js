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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const shortid_1 = __importDefault(require("shortid"));
class DevelopersDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.developerSchema = new this.Schema({
            _id: String,
            nome: String,
            sexo: String,
            idade: Number,
            hobby: String,
            dataNascimento: Date,
        }, { id: false });
        this.Developer = mongoose_service_1.default.getMongoose().model('Developers', this.developerSchema);
    }
    addDeveloper(developerFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const developerId = shortid_1.default.generate();
            const dataNascimento = new Date(developerFields.dataNascimento);
            const developer = new this.Developer(Object.assign(Object.assign({ _id: developerId }, developerFields), { dataNascimento: dataNascimento }));
            yield developer.save();
            return developerId;
        });
    }
    getDeveloperById(developerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Developer.findOne({ _id: developerId }).populate('Developer').exec();
        });
    }
    getDevelopers(limit, skip, fields) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Developer.find(fields)
                .skip(skip)
                .limit(limit)
                .exec();
        });
    }
    updateDeveloperById(developerId, developerFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingDeveloper = yield this.Developer.findOneAndUpdate({ _id: developerId }, { $set: developerFields }, { new: true }).exec();
            return existingDeveloper;
        });
    }
    removeDeveloperById(developerId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Developer.deleteOne({ _id: developerId }).exec();
        });
    }
}
exports.default = new DevelopersDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9kZXZlbG9wZXJzL2Rhb3MvZGV2ZWxvcGVycy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFFQSw4RkFBcUU7QUFFckUsc0RBQThCO0FBRTlCLE1BQU0sYUFBYTtJQUFuQjtRQUNJLFdBQU0sR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUU5QyxvQkFBZSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUM5QixHQUFHLEVBQUUsTUFBTTtZQUNYLElBQUksRUFBRSxNQUFNO1lBQ1osSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxNQUFNO1lBQ2IsY0FBYyxFQUFFLElBQUk7U0FDdkIsRUFBRSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRWxCLGNBQVMsR0FBRywwQkFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBdUN4RixDQUFDO0lBckNTLFlBQVksQ0FBQyxlQUFtQzs7WUFDbEQsTUFBTSxXQUFXLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDaEUsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUywrQkFDaEMsR0FBRyxFQUFFLFdBQVcsSUFDYixlQUFlLEtBQ2xCLGNBQWMsRUFBRSxjQUFjLElBQ2hDLENBQUM7WUFDSCxNQUFNLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QixPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFSyxnQkFBZ0IsQ0FBQyxXQUFtQjs7WUFDdEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyRixDQUFDO0tBQUE7SUFFSyxhQUFhLENBQUMsS0FBYSxFQUFFLElBQVksRUFBRSxNQUFXOztZQUN4RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztpQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQztpQkFDVixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLFdBQW1CLEVBQUUsZUFBZ0M7O1lBQzNFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUMzRCxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFDcEIsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEVBQ3pCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUNoQixDQUFDLElBQUksRUFBRSxDQUFDO1lBRVQsT0FBTyxpQkFBaUIsQ0FBQztRQUM3QixDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxXQUFtQjs7WUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pFLENBQUM7S0FBQTtDQUVKO0FBSUQsa0JBQWUsSUFBSSxhQUFhLEVBQUUsQ0FBQyJ9