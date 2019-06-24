import React from 'react'

export default function Message(props) {
    return (
        <div className="alert alert-success">
            {props.message}
        </div>
    );
}