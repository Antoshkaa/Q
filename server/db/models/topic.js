const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Topic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Card }) {
      Topic.hasMany(Card, { foreignKey: 'id_topic' });
    }
  }
  Topic.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      topic_name: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Topic',
    },
  );
  return Topic;
};
