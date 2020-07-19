"use strict";

var _todoListController = _interopRequireDefault(require("../controllers/todoListController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = app => {
  app.route('/tasks').get(_todoListController.default.list_all_tasks).post(_todoListController.default.create_a_task);
  app.route('/tasks/:taskId').get(_todoListController.default.read_a_task).put(_todoListController.default.update_a_task).delete(_todoListController.default.delete_a_task);
};