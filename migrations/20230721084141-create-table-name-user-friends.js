module.exports = {
  up: (qI, Sequelize) =>
    qI.createTable('user_friends', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: Sequelize.ENUM('pending', 'accepted'),
        allowNull: false,
        defaultValue: 'pending',
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', field: 'id' },
      },
      friend_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', field: 'id' },
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    }),
  down: async (qI) => qI.dropTable('user_friends'),
}
