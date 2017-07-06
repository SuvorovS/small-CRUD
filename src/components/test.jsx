import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './checkbox';


class Test extends Component{
    constructor(props){
        super(props);
        this.state = {
            test : true,
        }
    }
    chackHandler(){
        this.setState({
            test : !this.state.test
        })
    }
    render(){
        return (
            <div className="well">
                <form className="userForm ">
                    <div className="input-group">
                        <span className="input-group-addon">first_name</span>
                        {this.props.user ? <input required name="first-name" type="text" className="form-control" placeholder="first_name" defaultValue={this.props.user.first_name}  />
                        : <input required name="first-name" type="text" className="form-control" placeholder="first_name"  />
                        }
                    </div>
                    <br/>
                    
                    <div className="input-group">  {/* INPUTS Quantity */}
                        <Checkbox name="quantity" checked={true} />
                        <br/>
                        <Checkbox  checked={false} />
                        <ul>
                            {/*{ this.props.inputsQuantity.map((item, index)=>{*/}
                                {/*return <li key={index}><label>{item}Checkbox<input onChange={this.chackHandler.bind(this)} name="quantity" checked={this.state.test} type="checkbox" value={item}/> </label></li>*/}
                                {/*return <li key={index}><label>{item}<Checkbox name="quantity" value={item} /> </label></li>*/}
                                {/*return <li key={index}><label>{item}<Checkbox /> </label></li>*/}
                                {/*})*/}
                            {/*}*/}
                        </ul>
                    </div>
                    <div className="input-group modal-footer">
                        <input className="btn btn-danger"  type="submit" value="save"/>
                        <input className="btn btn-primary" type="reset" value="отмена"/>
                    </div>
                    <br/>
                        {/*<div className="input-group">
                            <span className="input-group-addon">last_name</span>
                            {props.user ? <input required name="last-name" type="text" className="form-control" placeholder="last_name" defaultValue={props.user.last_name} />
                            : <input required name="last-name" type="text" className="form-control"  placeholder="last_name" />
                            }
                        </div>
                        <br/>
                        <div className="input-group">
                            <span className="input-group-addon">birthdate</span>
                            {props.user ? <input className="birthdateInput datepicker" required name="birthdate" defaultValue={props.user.birthdate} type="text"/>
                            :
                            <input className="birthdateInput datepicker" required name="birthdate" defaultValue='' type="text"/>
                            }

                        </div>
                        <br/>
                        <div className="input-group">
                            <span className="input-group-addon">description</span>
                            {props.user ? 
                                <textarea name="description" className="form-control" placeholder="description" defaultValue={props.user.description} ></textarea>
                                :
                                <textarea name="description" className="form-control" placeholder="description" defaultValue="" ></textarea>
                            }
                        </div>
                        <br/>
                        
                        <div className="input-group">
                            <span className="input-group-addon">
                                <label>maried <input required name="marital_status" type="radio" value='maried' /> 
                                </label>
                            </span>
                            <span className="input-group-addon">
                                <label>single <input required name="marital_status"  type="radio" value='single' />
                                </label>
                            </span>
                        </div>
                        <br/>

                        <div className="input-group">
                            <span className="input-group-addon">
                                <label>en <input required name="lang"  type="radio" value='en' /> 
                                </label>
                            </span>
                            <span className="input-group-addon">
                                <label>fr <input required name="lang"  type="radio" value='fr' />
                                </label>
                            </span>
                            <span className="input-group-addon">
                                <label>de <input required name="lang" type="radio" value='de' />
                                </label>
                            </span>
                        </div>
                        <br/>*/}
                </form>
            </div>
        )
    }
};

export default connect(
    state => ({
        user : state.user.userData[0],
        inputsQuantity : ['1', '2', '2+1', '3+2']
    }),
)(Test);