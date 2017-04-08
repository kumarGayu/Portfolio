var Dispatcher = require('flux').Dispatcher;
var dispatcher = new Dispatcher();

dispatcher.handleAction = function(action){
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

module.exports = dispatcher;
