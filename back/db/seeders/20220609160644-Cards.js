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
    await queryInterface.bulkInsert(
      'card_question',
      [
        {
          card_question: 'Phase3',
          card_answer: 'lalaila',
          card_point: 200,
          id_topic: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Phase3',
          card_answer: 'lalaila',
          card_point: 400,
          id_topic: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Phase3',
          card_answer: 'lalaila',
          card_point: 600,
          id_topic: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Phase3',
          card_answer: 'lalaila',
          card_point: 800,
          id_topic: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Phase3',
          card_answer: 'lalaila',
          card_point: 1000,
          id_topic: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Ерунда',
          card_answer: 'lalaila',
          card_point: 200,
          id_topic: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Ерунда',
          card_answer: 'lalaila',
          card_point: 400,
          id_topic: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Ерунда',
          card_answer: 'lalaila',
          card_point: 600,
          id_topic: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Ерунда',
          card_answer: 'lalaila',
          card_point: 800,
          id_topic: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Ерунда',
          card_answer: 'lalaila',
          card_point: 1000,
          id_topic: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Elbrus name',
          card_answer: 'lalaila',
          card_point: 200,
          id_topic: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Elbrus name',
          card_answer: 'lalaila',
          card_point: 400,
          id_topic: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Elbrus name',
          card_answer: 'lalaila',
          card_point: 600,
          id_topic: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Elbrus name',
          card_answer: 'lalaila',
          card_point: 800,
          id_topic: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Elbrus name',
          card_answer: 'lalaila',
          card_point: 1000,
          id_topic: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Типо смешно',
          card_answer: 'lalaila',
          card_point: 200,
          id_topic: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Типо смешно',
          card_answer: 'lalaila',
          card_point: 400,
          id_topic: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Типо смешно',
          card_answer: 'lalaila',
          card_point: 600,
          id_topic: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Типо смешно',
          card_answer: 'lalaila',
          card_point: 800,
          id_topic: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Типо смешно',
          card_answer: 'lalaila',
          card_point: 1000,
          id_topic: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Животные',
          card_answer: 'lalaila',
          card_point: 200,
          id_topic: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Животные',
          card_answer: 'lalaila',
          card_point: 400,
          id_topic: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Животные',
          card_answer: 'lalaila',
          card_point: 600,
          id_topic: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Животные',
          card_answer: 'lalaila',
          card_point: 800,
          id_topic: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          card_question: 'Животные',
          card_answer: 'lalaila',
          card_point: 1000,
          id_topic: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('card_question', null, {});
  },
};
