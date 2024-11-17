require('dotenv/config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        dialectOptions: {
            charset: 'utf8',
        },

        define: {
            charset: 'utf8',
            collate: 'utf8_general_ci',
        },

        logging: false
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Include db tables
db.User = require('./user.model.js')(sequelize, Sequelize);
db.UserProfile = require('./user.profile.model.js')(sequelize, Sequelize);
db.UserVerification = require('./user.verification.model.js')(sequelize, Sequelize);

// Associations
db.User.hasOne(db.UserProfile, {
    foreignKey: 'userID',
    sourceKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

db.UserProfile.belongsTo(db.User, {
    foreignKey: 'userID',
    targetKey: 'userID'
});

db.User.hasOne(db.UserVerification, {
    foreignKey: 'userID',
    sourceKey: 'userID',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

db.UserVerification.belongsTo(db.User, {
    foreignKey: 'userID',
    targetKey: 'userID'
});

module.exports = db;