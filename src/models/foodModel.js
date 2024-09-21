import { DataTypes, Sequelize, Model } from "sequelize"
import Restaurant from './restaurantModel.js'
import sequelize from "../utils/sequelize.js"

class Food extends Model {}

Food.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        restaurantId: {
            type: DataTypes.INTEGER,
            references: {
                model: Restaurant,
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'Food',
        tableName: 'foods',
        timestamps: true
    }
)

Food.belongsTo(Restaurant, { foreignKey: 'restaurantId' })


export default Food