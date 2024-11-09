//Models/AdminModels/LookupModule.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../../Config/database');

const LookupModule = sequelize.define('Lookup_Module', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    moduleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'moduleName'
    },
    moduleDescription: {
        type: DataTypes.STRING,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
});

module.exports = LookupModule;