const { v4: uuidv4 } = require('uuid');
const roles = require('./roles');

module.exports = (sequelize, Sequelize) => {
    const UserProfile = sequelize.define(
        'UserProfile',
        {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            userID: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            profilePhoto: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            systemLanguage: {
                type: Sequelize.STRING,
                defaultValue: 'en-US',
            },
            systemTheme: {
                type: Sequelize.STRING,
                defaultValue: 'dark',
            },
            isTwoFactorEnabled: {
                type: Sequelize.BOOLEAN,
                defaultValue: false
            },
            lastLogin: {
                type: Sequelize.STRING,
                defaultValue: null
            },
            createdAt: {
                type: Sequelize.BIGINT,
                defaultValue: () => Math.floor(Date.now() / 1000)
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: true
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return UserProfile;
};