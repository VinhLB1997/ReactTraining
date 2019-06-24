import React from 'react';
import Message from '../components/Message'
import { connect } from 'react-redux';

function MessageContainer(props) {
    var { message } = props
    return (
        <Message message={message} />
    );
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);