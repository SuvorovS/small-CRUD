import React from 'react';
import UserData from './userData';

function usersPanel (props) {
    return (
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {props.users.map((item, index)=>{
                return (
                    <div key={item.id} className="panel panel-default">
                        <div className="panel-heading" role="tab" id={`heading${item.id}`}>
                        <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${item.id}`} aria-expanded="true" aria-controls={`collapse${item.id}`}>
                                {`Пользователь ${item.first_name} ${item.last_name}`}
                            </a>
                        </h4>
                        </div>
                        <div id={`collapse${item.id}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${item.id}`}>
                            <div className="panel-body">
                                <UserData key={item.id} user={item} />
                            </div>
                        </div>
                    </div>
                )
        })}
        </div>
    );
};

export default usersPanel;