import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            checked : this.props.checked,
        }
    }
    CheckboxHandler(){
        this.setState({
            checked : !this.state.checked,
        })
    }
        
    render() {
        return (
            <label>
                {this.state.checked ?
                    <i className="fa fa-2x fa-check-square-o" aria-hidden="true"></i>
                :
                    <i className="fa fa-2x fa-square-o" aria-hidden="true"></i>
                }
                {this.props.value} | <input onChange={this.CheckboxHandler.bind(this)} name={this.props.name} type="checkbox" checked={this.state.checked} value={this.props.value} />
            </label>
        )
    }
}


export default Checkbox;

Checkbox.propTypes = {
  value: PropTypes.string
};



Checkbox.defaultProps = {
  value: 'Stranger'
};