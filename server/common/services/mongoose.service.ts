import mongoose from 'mongoose';

class MongooseService {
    private count = 0;
    private mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
        useFindAndModify: false,
    };

    constructor() {
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    // fica tentando conectar com o banco de dados indefinidamente
    connectWithRetry = () => {
        mongoose
            .connect('mongodb://localhost:27017/api-db', this.mongooseOptions)
            .then(() => {
            })
            .catch((err) => {
                const retrySeconds = 5;
                setTimeout(this.connectWithRetry, retrySeconds * 1000);
            });
    };
}
export default new MongooseService();