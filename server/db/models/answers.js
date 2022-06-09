const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card }) {
      Answer.belongsTo(Card, { foreignKey: 'id' });
    }
  }
  Answer.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        type: DataTypes.TEXT,
      },
      id_card: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};
