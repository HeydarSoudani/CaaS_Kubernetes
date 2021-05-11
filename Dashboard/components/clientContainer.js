import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";

import InputForm from './common/inputForm';

class ClientContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    }

    render() {

        const {
            frontendDeploymantName,
            onFrontendDeploymantNameChange,
            frontendDeploymantReplicas,
            onFrontendDeploymantReplicasChange,
            frontendDeploymantImage,
            onFrontendDeploymantImageChange,
            frontendDeploymantPort,
            onFrontendDeploymantPortChange
        } = this.props;

        return (
            <Row className="basicRowSetting">
                <Col
                    xl="12" lg="12" md="12" sm="12" xs="12"
                    className="uploadPrivateContainerInnerTitleCol"
                >
                    مشخصات کانتینر frontend:
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={frontendDeploymantName}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام دیپلوی منت'}
                        onInputChange={onFrontendDeploymantNameChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={frontendDeploymantReplicas}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'تعداد پادها'}
                        onInputChange={onFrontendDeploymantReplicasChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={frontendDeploymantImage}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام ایمیج'}
                        onInputChange={onFrontendDeploymantImageChange}
                    />   
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={frontendDeploymantPort}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'پورت'}
                        onInputChange={onFrontendDeploymantPortChange}
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
})(ClientContainer));