import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('menudb','root','root',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
})

// sequelize.sync({ force: true })
//   .then(() => {
//     console.log('Database & tables created!');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

export default sequelize