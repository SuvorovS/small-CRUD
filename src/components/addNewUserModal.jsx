import React from 'react';
import UserForm from './userForm';

function AddNewUserModal() {
    return (
                    <div className="row">
                    <div className="col-sm-12">

                        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                            Add new User
                        </button>

                        {/*<!-- Modal -->*/}
                        <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                        <h4 className="modal-title" id="myModalLabel">Новый пользователь</h4>
                                    </div>
                                    <div className="modal-body">
                                        <UserForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    );
};

export default AddNewUserModal;