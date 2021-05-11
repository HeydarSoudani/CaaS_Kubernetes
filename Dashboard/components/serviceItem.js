import { namespace } from '../config/config';

import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Row, Col } from "reactstrap";


class ServiceItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };  
    }

    render() {

        const { onDeleteClick } = this.props;

        return (
            <Row className="basicRowSetting serviceItemRow">
                <Col
                    xl="4" lg="4" md="4" sm="4" xs="4"
                    className="serviceItemImgCol"
                >
                    <img
                        width={'30px'}
                        src={require('../static/images/myservices/namespace.png')}
                        className="serviceItemImg"
                    />
                </Col>
                <Col
                    xl="8" lg="8" md="8" sm="8" xs="8"
                    className="serviceItemContentCol"
                >
                    <Row className="basicRowSetting">
                        <Col
                            xl="12" lg="12" md="12" sm="12" xs="12"
                            className="serviceItemContentNameCol"
                        >
                            {namespace}
                        </Col>
                        <Col xl="6" lg="6" md="6" sm="6" xs="6">
                            <button className="serviceItemEditBtn">
                                ویرایش
                            </button>
                        </Col>
                        <Col xl="6" lg="6" md="6" sm="6" xs="6">
                            <button
                                className="serviceItemDeleteBtn"
                                onClick={onDeleteClick}
                            >
                                حذف
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>              
        );
    }
}

const mapStateToProps = ({}) => {
    
    return {};
};

export default withTranslation()(connect(mapStateToProps, {
})(ServiceItem));