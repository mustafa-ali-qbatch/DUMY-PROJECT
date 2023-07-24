'use strict'
module.exports = {
  up: (qI, { DataTypes }) =>
    qI.addColumn('comments', 'post_id', {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'posts',
        field: 'id',
      },
    }),
  down: (qI) => qI.removeColumn('comments', 'post_id'),
}
