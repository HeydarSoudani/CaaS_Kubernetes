import App, { Container } from 'next/app';
import Head from 'next/head';
// import Router from 'next/router';
// import withGA from 'next-ga';
// import { NextSeo } from 'next-seo';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';
import makeStore from '../store/store';

// import withReduxStore from '../lib/with-redux-store';

import '../i18n/i18n';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }

    constructor (props) {
        super(props);
        this.persistor = persistStore(props.store);
    }
    
    render () {

        const { 
            Component,
            pageProps,
            store
        } = this.props;
        
        return (
            <Container>
                <Head>
                    <title> CaaS </title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
                </Head>
          
                <Provider store={store}>
                    <PersistGate
                        loading={<Component {...pageProps} />}
                        persistor={this.persistor}
                    >
                        <Component {...pageProps} />
                    </PersistGate>
                </Provider>

            </Container>
        ); 
    }
}

// export default withGA('UA-140658212-1', Router)(withReduxStore(MyApp));
export default withRedux(makeStore)(MyApp);