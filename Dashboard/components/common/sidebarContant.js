import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import { Container, Row, Col } from 'reactstrap';
import DirectionProvider, { DIRECTIONS } from 'react-with-direction/dist/DirectionProvider';
import { withTranslation } from 'react-i18next';
import { FaTimes } from 'react-icons/fa';

class SidebarContant extends React.Component {
    render() {
        const { 
            t, i18n,
            onCloseSidebarClick
        } = this.props;
        return(
            <DirectionProvider direction={i18n && i18n.language == 'en'?DIRECTIONS.LTR:DIRECTIONS.RTL}>
                <Container fluid={true} className="sidebarContantContainer">
                    
                    <MediaQuery minWidth={768}>
                        <Row className="basicRowSetting align-items-center sidebarContantHeadRow">
                            {/* <Col xl="3" lg="3" md="3" sm="3" xs="3">
                                <img 
                                    width={'40px'}
                                    src={require('../../static/images/header/fleet_logo.png')}
                                />
                            </Col>
                            <Col xl="9" lg="9" md="9" sm="9" xs="9">
                                <img 
                                    width={'110px'}
                                    src={require('../../static/images/header/fleetak.png')}
                                />
                            </Col> */}
                        </Row>
                        <Row className="basicRowSetting sidebarContantRow align-items-start">
                            <Col 
                                xl="12" lg="12" md="12" sm="12" xs="12"
                                className="sidebarContantItemCol"
                                style={{backgroundColor: 'rgba(0, 159, 157, 0.03)'}}
                            >
                                <Link prefetch href='/home'>
                                    <a>
                                        <Row className="basicRowSetting align-items-center">
                                            <Col
                                                xl="3" lg="4" md="4" sm="4" xs="4"
                                                className="sidebarContantItemPhotoCol"
                                            >
                                                <img 
                                                    width={'34px'}
                                                    src={require('../../static/images/sidebar/home.png')}
                                                />
                                            </Col>
                                            <Col
                                                xl="9" lg="8" md="8" sm="8" xs="8"
                                                className="sidebarContantItemTextCol"
                                            >
                                                ساخت سرویس  
                                            </Col>
                                        </Row>
                                    </a>
                                </Link>
                            </Col>
                            <Col 
                                xl="12" lg="12" md="12" sm="12" xs="12"
                                className="sidebarContantItemCol"
                                style={{backgroundColor: 'rgba(0, 159, 157, 0.03)'}}
                            >
                                <Link prefetch href='/myServices'>
                                    <a>
                                        <Row className="basicRowSetting align-items-center">
                                            <Col
                                                xl="3" lg="4" md="4" sm="4" xs="4"
                                                className="sidebarContantItemPhotoCol"
                                            >
                                                <img 
                                                    width={'34px'}
                                                    src={require('../../static/images/sidebar/myServices.png')}
                                                />
                                            </Col>
                                            <Col
                                                xl="9" lg="8" md="8" sm="8" xs="8"
                                                className="sidebarContantItemTextCol"
                                            >
                                                سرویس های من 
                                            </Col>
                                        </Row>
                                    </a>
                                </Link>
                            </Col>
                            {/* <Col 
                                xl="12" lg="12" md="12" sm="12" xs="12"
                                className="sidebarContantItemCol"
                                style={{backgroundColor: 'rgba(0, 159, 157, 0.03)'}}
                            >
                                <Link prefetch href='/monitorServices'>
                                    <a>
                                        <Row className="basicRowSetting align-items-center">
                                            <Col
                                                xl="3" lg="4" md="4" sm="4" xs="4"
                                                className="sidebarContantItemPhotoCol"
                                            >
                                                <img 
                                                    width={'34px'}
                                                    src={require('../../static/images/sidebar/serviceMonitoring.png')}
                                                />
                                            </Col>
                                            <Col
                                                xl="9" lg="8" md="8" sm="8" xs="8"
                                                className="sidebarContantItemTextCol"
                                            >
                                               مانیتورینگ سرویس 
                                            </Col>
                                        </Row>
                                    </a>
                                </Link>
                            </Col> */}

                        </Row>
                    
                    </MediaQuery>
                    <MediaQuery maxWidth={767.9}>
                        
                        <Row className="basicRowSetting">
                            <Col
                                sm="12" xs="12"
                                className="sidebarContantMobileVerHeadCol"
                            >
                                <FaTimes
                                    size={24}
                                    color={'#9B9B9B'}
                                    onClick={onCloseSidebarClick}
                                />
                            </Col>
                        </Row>

                        <Row className="basicRowSetting align-items-center sidebarContantMobileVerContentRow">
                            {/* <Col 
                                sm="12" xs="12"
                                className="sidebarContantMobileVerContentCol"
                            >
                                <Link prefetch href='/home'>
                                    <a>
                                        <Row className="basicRowSetting align-items-center">
                                            <Col
                                                sm="12" xs="12"
                                                className="sidebarContantMobileVerContentPhotoCol"
                                            >
                                                <img 
                                                    width={'40px'}
                                                    src={require('../../static/images/sidebar/home.png')}
                                                />
                                            </Col>
                                            <Col
                                                sm="12" xs="12"
                                                className="sidebarContantMobileVerContentTextCol"
                                            >
                                                {t('Home')}   
                                            </Col>
                                        </Row>
                                    </a>
                                </Link>
                            </Col> */}
                        </Row>
                    </MediaQuery>

                </Container>
            </DirectionProvider>
        );
    }
}

const mapStateToProps = ({  }) => {
  
    return {  };
};

export default withTranslation()(connect(mapStateToProps, {})(SidebarContant));