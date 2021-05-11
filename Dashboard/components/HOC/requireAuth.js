import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

export default ChildComponent => {
    class RequireAuth extends Component {
        

        componentDidMount() {
            
            
            
        }

        renderComponent = () => {
            switch (this.props.isAuthenticated) {
                case false:
                    return Router.push('/signin');
                case null:
                    return <div>Loading...</div>;
                default:
                    return <ChildComponent {...this.props} />;
            }
        }

        render() {
            return (
                this.renderComponent()
            )
        }
    }

    function mapStateToProps({ auth }) {
        const { isAuthenticated } = auth;
        return { isAuthenticated };
    }

    return connect(mapStateToProps)(RequireAuth);
};
