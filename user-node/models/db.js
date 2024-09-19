import { createConnection } from 'mysql';

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'product'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL connected');
});

export const query = (sql, callback) => {
    db.query(sql, callback);
};
