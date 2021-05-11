import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button } from 'reactstrap';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import { withTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';

import LanguagePopover from './languagePopover';

export class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    onUserProfileClick = () => {

    }

    render() {

        const {
            i18n,
            dockedButtonAction,
            dockedButtonState
        } = this.props;

        return (
            <DirectionProvider direction={i18n && i18n.language === 'en'?DIRECTIONS.LTR:DIRECTIONS.RTL}>
                <header
                    className="header"
                    style={styles.headerStyle({smallPage: dockedButtonState})}
                >
                    <Container fluid={true} className="headerContainer">
                        <Row className="basicRowSetting headerRow justify-content-between align-items-center">
                            <Col xl="6" lg="6" md="6" sm="8" xs="6" >
                                { dockedButtonState && 
                                    <Button onClick={dockedButtonAction} className="headerSidebarBtn">
                                        <img 
                                            width={'50px'}
                                            src={require('../../static/images/header/sidebar.png')}
                                        />
                                    </Button>
                                }
                            </Col>
                            {/* <Col xl="5" lg="4" md="6" sm="6" xs="6" >
                                <Row className="basicRowSetting align-items-center">
                                    <Col xl="1" lg="3" md="3" sm="3" xs="3">
                                        <img 
                                            width={'50px'}
                                            src={require('../../static/images/header/fleet_logo.png')}
                                        />
                                    </Col>
                                    <Col xl="11" lg="9" md="9" sm="9" xs="9">
                                        <img 
                                            width={'140px'}
                                            src={require('../../static/images/header/fleetak.png')}
                                        />
                                    </Col>
                                </Row>
                            </Col> */}

                            <MediaQuery maxWidth={767.9}>
                                <Col sm="2" xs="3" className="headerUserProfileCol">
                                    <Link prefetch href='/userProfile'>
                                        <a>
                                            {/* <img 
                                                width={'32px'}
                                                src={require('../../static/images/sidebar/user.png')}
                                            /> */}
                                        </a>
                                    </Link>
                                </Col>
                            </MediaQuery>

                            <Col 
                                xl="6" lg="6" md="6" sm="2" xs="3"
                                className="headerChangeLangCol"
                            >
                                <LanguagePopover />
                            </Col>
                        </Row>
                    </Container>
                </header>
            </DirectionProvider>
        );
    }
}

const styles = {
    headerStyle: ({smallPage}) => ({
        zIndex: !smallPage?'1111':'998',
    }),
}

export default withTranslation()(Header);