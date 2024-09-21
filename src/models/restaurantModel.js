import { Sequelize, DataTypes, Model } from 'sequelize'
import User from './userModel.js'
import sequelize from '../utils/sequelize.js'

class Restaurant extends Model {}

Restaurant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        address: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Restaurant',
        tableName: 'restaurants',
        timestamps: true
    }
)

Restaurant.belongsTo(User, {foreignKey: 'userId'})


export default Restaurant