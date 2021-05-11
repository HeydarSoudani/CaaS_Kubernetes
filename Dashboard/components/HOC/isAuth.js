import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

export default ChildComponent => {
    class IsAuth extends Component {
        componentDidMount() {
            console.log(ChildComponent)
            
        }

        renderComponent = () => {
            switch (this.props.isAuthenticated) {
            case true:
                return Router.push('/home');
                
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

    return connect(mapStateToProps)(IsAuth);
};