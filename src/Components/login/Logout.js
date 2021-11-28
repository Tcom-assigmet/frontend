import React, { Component } from 'react';

import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../../src/store/actions/index';

class Logout extends Component {
    componentDidMount () {
         this.props.onLogout();

        // this.props.history.push('/')
    }

    render () {
        return (
            <div>
                <Link to="/login"></Link>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);