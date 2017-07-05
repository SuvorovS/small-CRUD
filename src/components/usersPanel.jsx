import React from 'react';
import { connect } from 'react-redux';
import UserData from './userData';

function UsersPanel (props) {
    return (
        <div className="well">
            {props.users.map((item, index)=>{
                return (
                    <div key={item.id}>
                        <h3>
                            {`Пользователь ${item.first_name} ${item.last_name}`}
                        </h3>
                        {/*<UserData key={item.id} user={item} />*/}
                        <UserData  user={item} isEditing={item.editing}/>
                    </div>
                )
            })}
        </div>
    );
};

export default connect(
    state => ({
        isLoading: state.user.isLoading,
        users : state.user.userData,
    }),
    dispatch => ({
        resiveData : (event) => {
        dispatch(CRUD.resiveData());
    }
})

)(UsersPanel);