import { namespace } from '../config/config';

import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";

import Layout from "../components/common/layout";

class MyServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };  
    }

    render() {

        return (
            <Layout>
                <Container className="myServicesContainer" fluid={true}>
                    <Row className="basicRowSetting justify-content-center">
                    </Row>

                </Container>
            </Layout>
        );
    }
}

const mapStateToProps = ({}) => {
    return {  };
};

export default withTranslation()(connect(mapStateToProps, {
    
})(MyServices));