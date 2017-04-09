/** @jsx React.DOM */
var React = require('react');

var Close = React.createClass({
    propTypes: {
        position: React.PropTypes.object
    },
    onClose: function(event) {
        event.preventDefault();

        if(this.props.onClose){
            this.props.onClose();
        }
    },

    render: function() {
        return (
            <button type="button" className="close" aria-label="Close" value = {this.props.lable} onClick = {this.onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
});

module.exports = Close;
