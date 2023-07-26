'use strict'
module.exports = {
  up: (qI, Sequelize) => qI.addColumn('likes', 'like_type', { type: Sequelize.ENUM('laugh', 'like', 'love')}),
  down: (qI) => qI.removeColumn('likes', 'like_type'),
}
