import { namespace } from '../config/config';

import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";

import Layout from "../components/common/layout";
import ServiceItem from '../components/serviceItem';
import DeleteServiceModal from '../components/deleteServiceModal';
import {
    readDeployments
} from "../actions";

class MyServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteModalOpen: false
        };  
    }

    componentDidMount() {
        this.props.readDeployments({namespace});
    }

    render() {

        const { deleteModalOpen } = this.state;
        const { deployments } = this.props;
 
        return (
            <Layout>
                <Container className="myServicesContainer" fluid={true}>
                    <Row className="basicRowSetting justify-content-center">
                        <Col
                            xl="4" lg="6" md="6" sm="6" xs="10"
                            className="myServicesServiceItemCol"
                        >
                            { deployments.length !== 0 && 
                                <ServiceItem
                                    onDeleteClick={()=>{
                                        this.setState({deleteModalOpen: true});
                                    }}
                                />
                            }
                            { deployments.length === 0 && 
                               ` سرویس وجود ندارد`
                            }
                        </Col>
                    </Row>

                    <DeleteServiceModal
                        open={deleteModalOpen}
                        toggle={() => {
                            this.setState({deleteModalOpen: false});
                        }}
                    />
                </Container>
            </Layout>
        );
    }
}

const mapStateToProps = ({K8sRead}) => {
    const { deployments } = K8sRead;
    return { deployments };
};

export default withTranslation()(connect(mapStateToProps, {
    readDeployments
})(MyServices));