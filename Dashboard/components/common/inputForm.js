import React from 'react';
import { Row, Col, Input } from 'reactstrap';

class InputForm extends React.Component {
    render() {

        const {
            imgUrl,
            placeholder,
            onInputChange,
            type,
            value
        } = this.props;

        return (
            <Row className="basicRowSetting inputFormRow justify-content-center">
                <Col 
                    className="align-self-center inputFormImgCol"
                    xl="2" lg="2" md="2" sm="2" xs="2"
                > 
                    <img
                        src={imgUrl}
                    />
                </Col>
                <Col 
                    className="colWithoutPadding inputFormInputCol"
                    xl="9" lg="9" md="9" sm="9" xs="9"
                >
                    <Input
                        className="inputFormInput"
                        placeholder={placeholder}
                        onChange={onInputChange}
                        type={type?type:'text'}
                        value={value}
                    />
                </Col>
                
            </Row>
        );
    }
}

export default InputForm;