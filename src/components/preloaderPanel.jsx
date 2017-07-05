import React, { Component } from 'react';

function PreloaderPanel () {
    
    return (
        <div className="container">
            <div className="row">
                <div className="well text-center" >
                    <i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}


export default PreloaderPanel;