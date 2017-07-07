import React, { Component } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';
import { userFormSaveHandler, resetUserFormHandler } from '../actions/crud';

import DateField from './dataPicker';
import Checkbox from './checkbox';

import './userForm.scss';

class UserForm extends Component {
    componentDidMount(){
        $( function() {
            $( ".datepicker" ).datepicker({dateFormat: "yy-mm-dd"});
        } );
    }

    componentWillUpdate(){
        
    }
    
    render(){

        return (
            <form className="userForm" onReset={this.props.resetUserFormHandler} onSubmit={this.props.sabmitUserFormHandler} id={this.props.user.id } >
                <div className="well">
                    <div className="input-group">
                        <span className="input-group-addon">first_name</span>
                        {this.props.user ? <input required name="first-name" type="text" className="form-control" placeholder="first_name" defaultValue={this.props.user.first_name}  />
                        : <input required name="first-name" type="text" className="form-control" placeholder="first_name"  aria-describedby="basic-addon1"/>
                        }
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">last_name</span>
                        {this.props.user ? <input required name="last-name" type="text" className="form-control" placeholder="last_name" defaultValue={this.props.user.last_name} aria-describedby="basic-addon1"/>
                        : <input required name="last-name" type="text" className="form-control"  placeholder="last_name" aria-describedby="basic-addon1"/>
                        }
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">birthdate</span>
                        <input className="birthdateInput datepicker" required name="birthdate" defaultValue={this.props.user.birthdate} type="text"/>
                    </div>
                    <br/>
                    <div className="input-group">
                        <span className="input-group-addon">description</span>
                        <textarea name="description" className="form-control" placeholder="description" defaultValue={this.props.user.description} ></textarea>
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
                    <br/>
                    <div className="input-group">
                        {this.props.user.quantityTypes.length === 0 ?
                            this.props.quantityTypes.map((item, i)=>{
                                return (
                                    <div key={i}>
                                        <Checkbox name="quantity" checked={item.checked} value={item.label} />
                                    </div>
                                )
                            })
                        :
                            this.props.user.quantityTypes.map((item, i)=>{
                                return (
                                    <div key={i}>
                                        <Checkbox name="quantity" checked={item.checked} value={item.label} />
                                    </div>
                                )
                            })
                        }


                    </div>
                    <div className="input-group modal-footer">
                        <input className="btn btn-danger"  type="submit" value="save"/>
                        <input className="btn btn-primary" type="reset" value="отмена"/>
                    </div>
                    <br/>
                </div>
            </form>
        );
    
    }
}


export default connect(
    state => ({
        isLoading: state.user.isLoading,
        quantityTypes: state.user.quantityTypes,
        
    }),
  dispatch => ({
    sabmitUserFormHandler : (e) => {
        dispatch(userFormSaveHandler(e));
    },
    resetUserFormHandler : (e)=>{
        dispatch(resetUserFormHandler(e))
    }
})

)(UserForm);




UserForm.defaultProps = { // props по умолчанию, на случай если user не передан извне
    user: {
        id : '',
        first_name : '',
        last_name : '',
        birthdate : '',
        // description : '',
        quantityTypes : []

    },
};





