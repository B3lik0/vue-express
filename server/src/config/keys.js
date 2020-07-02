module.exports = {
        //connectionLimit: 10,
        host: 'localhost',
        dialect: 'mysql',
        username: 'root',
        password: '',
        database: 'database_links',
        //logging: false,
        define: 
        {
                max: 10,
                min: 0,
                acquire: 30000,
                idle: 10000,
                charset: 'utf8',
                collate: 'utf8_unicode_ci', 
        }
       
};