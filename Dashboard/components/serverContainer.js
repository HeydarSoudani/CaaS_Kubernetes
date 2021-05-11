import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";

import InputForm from './common/inputForm';

class ServerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    }

    render() {

        const {
            backendDeploymantName,
            onBackendDeploymantNameChange,
            backendDeploymantReplicas,
            onBackendDeploymantReplicasChange,
            backendDeploymantImage,
            onBackendDeploymantImageChange,
            backendDeploymantPort,
            onBackendDeploymantPortChange
        } = this.props;

        return (
            <Row className="basicRowSetting">
                <Col
                    xl="12" lg="12" md="12" sm="12" xs="12"
                    className="uploadPrivateContainerInnerTitleCol"
                >
                    مشخصات کانتینر backend:
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={backendDeploymantName}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام دیپلوی منت'}
                        onInputChange={onBackendDeploymantNameChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={backendDeploymantReplicas}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'تعداد پادها'}
                        onInputChange={onBackendDeploymantReplicasChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={backendDeploymantImage}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام ایمیج'}
                        onInputChange={onBackendDeploymantImageChange}
                    />   
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={backendDeploymantPort}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'پورت'}
                        onInputChange={(onBackendDeploymantPortChange)}
                    />   
                </Col>
            </Row>              
        );
    }
}

const mapStateToProps = ({}) => {
    
    return {};
};

export default withTranslation()(connect(mapStateToProps, {
})(ServerContainer));