import sequelize from './src/utils/sequelize.js'
import './src/models/userModel.js'
import './src/models/restaurantModel.js'
import './src/models/foodModel.js';

sequelize.sync({ alter: true })
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch(err => {
    console.error('Error syncing models:', err);
  });