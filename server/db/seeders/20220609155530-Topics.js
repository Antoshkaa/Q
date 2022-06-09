'use strict';

// module.exports = {
//   async up (queryInterface, Sequelize) {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   async down (queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Topics', [{
      topic_name: 'Phase3',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topic_name: 'Ерунда',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topic_name: 'Elbrus name',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topic_name: 'Типо смешно',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      topic_name: 'Животные',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Topics', null, {});
  },
};
