const { v4: uuidv4 } = require('uuid');
const roles = require('./roles');

module.exports = (sequelize, Sequelize) => {
    const UserVerification = sequelize.define(
        'UserVerification',
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
            phoneVerifiedAt: {
                type: Sequelize.BIGINT,
                defaultValue: null
            },
            mailVerifiedAt: {
                type: Sequelize.BIGINT,
                defaultValue: null
            },
            personaVerifiedAt: {
                type: Sequelize.BIGINT,
                defaultValue: null
            }
        },
        {
            charset: 'utf8',
            collate: 'utf8_general_ci'
        }
    );

    return UserVerification;
};