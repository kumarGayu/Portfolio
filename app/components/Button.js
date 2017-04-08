var React = require('react');
var Button = React.createClass({

    propTypes: {
        lable: React.PropTypes.string
    },

    onClick: function(event) {
        event.preventDefault();

        if(this.props.onClick){
            this.props.onClick(event);
        }
    },

    render: function() {
        return (
            <button className = {'btn btn-space '+this.props.className} onClick = {this.onClick}> {this.props.lable}</button>
        );
    }
});

module.exports = Button;
