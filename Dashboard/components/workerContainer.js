import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";

import InputForm from './common/inputForm';

class WorkerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    }

    render() {

        const {
            workerDeploymantName,
            onWorkerDeploymantNameChange,
            workerDeploymantReplicas,
            onWorkerDeploymantReplicasChange,
            workerDeploymantImage,
            onWorkerDeploymantImageChange
        } = this.props;

        return (
            <Row className="basicRowSetting">
                <Col
                    xl="12" lg="12" md="12" sm="12" xs="12"
                    className="uploadPrivateContainerInnerTitleCol"
                >
                    مشخصات کانتینر Worker:
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={workerDeploymantName}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام دیپلوی منت'}
                        onInputChange={onWorkerDeploymantNameChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={workerDeploymantReplicas}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'تعداد پادها'}
                        onInputChange={onWorkerDeploymantReplicasChange}
                    />
                </Col>
                <Col
                    className="uploadPrivateContainerInputCol"
                    xl="12" lg="12" md="12" sm="12" xs="12"
                >
                    <InputForm
                        value={workerDeploymantImage}
                        imgUrl={require('../static/images/home/ipod.png')}
                        placeholder={'نام ایمیج'}
                        onInputChange={onWorkerDeploymantImageChange}
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
})(WorkerContainer));