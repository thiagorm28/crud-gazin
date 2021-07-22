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
const developers_service_1 = __importDefault(require("../services/developers.service"));
class DevelopersMiddleware {
    // Facilitando a extração do id do desenvolvedor
    extractDeveloperId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.id = req.params.developerId;
            next();
        });
    }
    validateDeveloperExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const developer = yield developers_service_1.default.readById(req.params.developerId);
            if (developer) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Developer ${req.params.developerId} not found`,
                });
            }
        });
    }
}
exports.default = new DevelopersMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV2ZWxvcGVycy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZGV2ZWxvcGVycy9taWRkbGV3YXJlL2RldmVsb3BlcnMubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLHdGQUE4RDtBQUU5RCxNQUFNLG9CQUFvQjtJQUV0QixnREFBZ0Q7SUFDMUMsa0JBQWtCLENBQ3BCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUN6QixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxTQUFTLEdBQUcsTUFBTSw0QkFBZ0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxRSxJQUFJLFNBQVMsRUFBRTtnQkFDWCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsYUFBYSxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsWUFBWTtpQkFDekQsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksb0JBQW9CLEVBQUUsQ0FBQyJ9