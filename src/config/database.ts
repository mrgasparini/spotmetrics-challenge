import mongoose from 'mongoose';
import logging from './logging';

const NAMESPACE = 'Database Configuration';

const connect = () => {
    let databaseUri = process.env.MONGO_CONNECTION_STRING;
    let databaseName = process.env.DATABASE;

    if (databaseUri && databaseName) {
        mongoose.connect(`${databaseUri}/${databaseName}`, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
            if (err) {
                logging.error(NAMESPACE, 'Failed to connect to the database.', err);
            } else {
                logging.info(NAMESPACE, 'Successfully connect to database.');
            }
        });
    } else {
        logging.error(NAMESPACE, 'Empty database connection string.');
    }
};

const closeConnection = () => {
    mongoose.disconnect();
};

export default { connect, closeConnection };
