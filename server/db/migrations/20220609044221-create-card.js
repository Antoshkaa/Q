'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_question: {
        type: Sequelize.TEXT
      },
      card_answer: {
        type: Sequelize.TEXT
      },
      card_point: {
        type: Sequelize.INTEGER
      },
      id_topic: {
        type: Sequelize.INTEGER,
        references: {model: 'Topics', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  }
};
