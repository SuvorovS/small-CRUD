import React from 'react';
import { connect } from 'react-redux';
import UserData from './userData';

function UsersPanel (props) {
    return (

        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {props.users.map((item)=>{
                return (
                    <div key={item.id} className="panel panel-default">
                        <div className="panel-heading" role="tab" id={`heading${item.id}`}>
                        <h4 className="panel-title">
                            {item.editing ? 
                                <a className="btn btn-danger" role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                    {`Пользователь ${item.first_name} ${item.last_name}`}
                                </a>
                            :
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                    {`Пользователь ${item.first_name} ${item.last_name}`}
                                </a>
                            }


                        </h4>
                        </div>
                        <div id={`collapse${item.id}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${item.id}`}>
                            <div className="panel-body">
                                <UserData key={item.id} user={item} isEditing={item.editing}/> 
                            </div>
                        </div>

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
