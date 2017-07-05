import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserHandler, userChangeHandler } from '../actions/crud';

import UserForm from './userForm';

import './userData.scss';

class UserData extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         eating : false
    //     }
    // }

    test(e){
        this.props.userChangeHandler(e);




        // this.setState({
        //     eating : true,
        // })

    }
    render() {
        if (this.props.user.editing) { 
            return <UserForm user = {this.props.user} />
        }
        else {
            return (
                
                <div>
                    <div className="well">
                        <p> <span className="alert alert-info">Имя: </span> {this.props.user.first_name} </p>
                        <p> <span className="alert alert-info">Фамилия: </span> {this.props.user.last_name} </p>
                        <p> <span className="alert alert-info">Дата рождения: </span> {this.props.user.birthdate} </p>
                        <p> <span className="alert alert-info">Описание: </span> {this.props.user.description} </p>
                        <p> <span className="alert alert-info">статус: </span> {this.props.user.status} </p>
                        <p> <span className="alert alert-info">язык: </span> {this.props.user.lang} </p>
                        <p> <span className="alert alert-info">выбраны количества: </span>
                            {this.props.user.quantity.map(item=>{ 
                                return <li key={item.id} > {item.label}</li>
                            })}
                        </p>
                        
                    </div>
                    <div className="btn-group" role="group">
                        <button id={this.props.user.id} onClick={this.test.bind(this)} type="button" className="btn btn-primary">change</button>
                        <button id={this.props.user.id} onClick={this.props.deleteUserHandler.bind(this)} type="button" className="btn btn-danger">delete</button>
                    </div>
                </div>
            );
        }
    }
}


export default //UserData;

connect(
    state => ({
        isLoading: state.user.isLoading,
    }),
    dispatch => ({
        deleteUserHandler : (e) => {
            dispatch(deleteUserHandler(e));
        },
        userChangeHandler : (e) =>{
            dispatch(userChangeHandler(e));
        }
    })
)(UserData);
