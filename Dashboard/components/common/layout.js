import React from 'react';
import {compose} from 'redux';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import { withTranslation } from 'react-i18next';
import Sidebar from 'react-sidebar';
import withSizes from 'react-sizes';

import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'materialize-css/dist/css/materialize.min.css';
import '../../node_modules/react-custom-scroll/dist/customScroll.css';
// import 'react-persian-calendar-date-picker/lib/DatePicker.css';
import '../../styles/style.scss';

import Header from './header';
import SidebarContent from './sidebarContant';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            sidebarOpen: false
        };
    }

    onSetSidebarOpen = (open) => {
        this.setState({sidebarOpen: open});
    }

    dockedButtonAction = (ev) => {
        this.setState({sidebarOpen: !this.state.sidebarOpen});
        if (ev) { ev.preventDefault()}
    }

    render() {
        const { children, i18n, width } = this.props;
        const { sidebarOpen } = this.state;

        return (
            <div> 
                <Header 
                    dockedButtonState={!(width>768)}
                    dockedButtonAction={this.dockedButtonAction}
                />
                <DirectionProvider direction={i18n && i18n.language == 'en'?DIRECTIONS.LTR:DIRECTIONS.RTL}>
                    <Sidebar
                        sidebar={<SidebarContent 
                            onCloseSidebarClick={()=>{
                                this.setState({sidebarOpen: false});
                            }}
                        />}
                        open={sidebarOpen}
                        docked={width>768}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={styles.sidebarStyle({width})}
                        pullRight={i18n && i18n.language === 'en'? false:true}
                    >
                        <div className="layoutChildren" >
                            {children}
                        </div>
                    </Sidebar>
                </DirectionProvider>
            </div>
        );
    }
}

const styles = {
    sidebarStyle:({width}) => ({
        root: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
        },
        sidebar: {
            width: `${width>768?'320px':'220px'}`,
            zIndex: 1100,
            position: 'absolute',
            top: 0,
            bottom: 0,
            transition: 'transform .3s ease-out',
            WebkitTransition: '-webkit-transform .3s ease-out',
            willChange: 'transform',
            overflowY: 'auto',
            backgroundColor: '#FFFFFF',
            textAlign: 'start',
        },
        content: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
            transition: 'left .3s ease-out, right .3s ease-out',
        },
        overlay: {
            zIndex: 1099,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0,
            visibility: 'hidden',
            transition: 'opacity .3s ease-out, visibility .3s ease-out',
            backgroundColor: 'rgba(0,0,0,.3)',
        },
        dragHandle: {
            zIndex: 4,
            position: 'fixed',
            top: 0,
            bottom: 0,
        },
    }),
};

const mapSizesToProps = ({ width }) => ({
    width
});

export default compose(
    withTranslation(),
    withSizes(mapSizesToProps)
)(Layout);