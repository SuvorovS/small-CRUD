import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteUserHandler, userChangeHandler } from '../actions/crud';

import UserForm from './userForm';

import './userData.scss';

function UserData(props) {
    if (props.isEditing) { 
        return <UserForm user = {props.user} />
    }
    else {
        return (
            <div>
                <div className="well">
                    <p> <span className="alert alert-info">Имя: </span> {props.user.first_name} </p>
                    <p> <span className="alert alert-info">Фамилия: </span> {props.user.last_name} </p>
                    <p> <span className="alert alert-info">Дата рождения: </span> {props.user.birthdate} </p>
                    <p> <span className="alert alert-info">Описание: </span> {props.user.description} </p>
                    <p> <span className="alert alert-info">статус: </span> {props.user.status} </p>
                    <p> <span className="alert alert-info">язык: </span> {props.user.lang} </p>
                    <p> <span className="alert alert-info">выбраны количества: </span>
                        {props.user.quantity.map(item=>{ 
                            return <li key={item.id} > {item.label}</li>
                        })}
                    </p>
                </div>
                <div className="btn-group" role="group">
                    <button id={props.user.id} onClick={props.userChangeHandler} type="button" className="btn btn-primary">change</button>
                    <button id={props.user.id} onClick={props.deleteUserHandler} type="button" className="btn btn-danger">delete</button>
                </div>
            </div>
        );
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
