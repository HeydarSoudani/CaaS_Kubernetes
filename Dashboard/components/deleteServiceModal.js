import { namespace } from '../config/config';

import React from 'react';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import {
    Row, Col,
    Modal, ModalHeader, ModalBody,
    Button,
} from 'reactstrap';

import {
    deleteCollectionDeployments,
    deleteCollectionServices,
    deleteCollectionSecrets,
    deleteCollectionPvcs,
    deleteCollectionIngresses
} from "../actions";

class DeleteServiceModal extends React.Component {


    onDeleteServiceClick = () => {
        const {
            toggle,
            deleteCollectionDeployments,
            deleteCollectionServices,
            deleteCollectionSecrets,
            deleteCollectionPvcs,
            deleteCollectionIngresses
        } = this.props;
        
        deleteCollectionDeployments({namespace});
        deleteCollectionServices({namespace});
        deleteCollectionSecrets({namespace});
        // deleteCollectionPvcs({namespace});
        // deleteCollectionIngresses({namespace});
        toggle();
    }

    render() {

        const {
            open, toggle,
        } = this.props;
        
        return (
            <Modal
                isOpen={open}
                toggle={toggle}
                centered
                modalClassName="modalOutside"
                contentClassName="modalContent"
                backdropClassName="modalBackdrop"
            >
                <ModalHeader
                    toggle={toggle}
                    className="modalHeaderContent"
                    style={{paddingBottom: '0'}}
                >
                </ModalHeader>
                <ModalBody className="modalBodyContent">
                    <Row className="basicRowSetting justify-content-center">
                        <Col
                            xl="10" lg="10" md="10" sm="10" xs="10"
                            className="modalLogoutTitleCol"
                        >
                            آیا می خواهید سرویس را حذف کنید؟
                        </Col>
                    </Row>
                    <Row className="basicRowSetting justify-content-center">
                        <Col xl="4" lg="3" md="3" sm="4" xs="5">
                            <Button
                                className="modalLogoutNoBtn"
                                onClick={toggle}
                            >
                                خیر
                            </Button>
                        </Col>
                        <Col xl="4" lg="3" md="3" sm="4" xs="5">
                            <Button
                                className="modalLogoutYesBtn"
                                onClick={this.onDeleteServiceClick}
                            >
                                بله
                            </Button>
                        </Col>

                    </Row>
                </ModalBody>
            </Modal>
        );
    }
}

export default withTranslation()(connect(null, {
    deleteCollectionDeployments,
    deleteCollectionServices,
    deleteCollectionSecrets,
    deleteCollectionPvcs,
    deleteCollectionIngresses
})(DeleteServiceModal));