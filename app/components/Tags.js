/** @jsx React.DOM */

var React = require('react');
var Tag = require('./Tag');

var Tags = React.createClass({

    propTypes: {
        hidden: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            hidden: true
        };
    },

    getInitialState: function(){
        return {
            text: ''
        };
    },

    getTags: function(){
        var temp = [];
        var me = this;
        this.props.tags.forEach(function(tag,index,array){
            tag.positions.forEach(function(position,i,array){
                temp.push(<Tag tag={tag} position={position} imageX={me.props.imageX} imageY={me.props.imageY} key={tag._id+"$"+i} propKey={tag._id+"$"+i} ondblclick={me.props.onTagDelete} />)
            });
        });
        return temp;
    },

    render: function() {
        return (
        <div className="planetmap" style={{display:"block",position:"absolute"}}>
            {this.getTags()}
        </div>
        )
    }
});

module.exports = Tags;
