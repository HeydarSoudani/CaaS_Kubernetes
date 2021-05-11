import React from 'react';
import Router from 'next/router';

import Layout from '../components/common/layout';

class Index extends React.Component {
    static async getInitialProps({ res }) {
        if (res) {
            res.writeHead(302, {
                Location: '/home'
            });
            res.end();
        } else {
            Router.push('/home');
        }
        return {};
    }

    render() {
        return (
            <Layout>
                    index
            </Layout>
        );
    }
}


export default Index;