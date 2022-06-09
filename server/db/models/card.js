const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Answer, Topic }) {
      Card.hasMany(Answer, { foreignKey: 'id_card' });
      Card.belongsTo(Topic, { foreignKey: 'id_topic' });
    }
  }
  Card.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      card_question: {
        type: DataTypes.TEXT,
      },
      card_answer: {
        type: DataTypes.TEXT,
      },
      card_point: {
        type: DataTypes.INTEGER,
      },
      id_topic: {
        type: DataTypes.INTEGER,

      },
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );
  return Card;
};
