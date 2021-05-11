import React from 'react';
import { withTranslation } from 'react-i18next';
import MediaQuery from 'react-responsive';
import { 
    Row, Col,
    Button,
    Popover
} from 'reactstrap';

class LanguagePopover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            langPopoverOpen: false
        };
    }

    languageSvg = (languageCode) => {
        switch (languageCode) {
        case 'en':
            return <img width={'26px'} src={require('../../static/images/header/en.png')} />;
        case 'fa':
            return <img width={'26px'} src={require('../../static/images/header/fa.png')} />;
        case 'ar':
            return <img width={'26px'} src={require('../../static/images/header/ar.png')} />;
        default:
            return <img width={'26px'} src={require('../../static/images/header/en.png')} />;
        }
    }

    languageName = (languageCode) => {
        switch (languageCode) {
        case 'en':
            return 'English';
        case 'fa':
            return 'فارسی';
        case 'ar':
            return 'العربیه';
        default:
            return 'English';
        }
    }

    render() {

        const { i18n } = this.props;
        const { langPopoverOpen } = this.state;

        return (
            <div>
                <Button
                    id="langPopover"
                    type="button"
                    className="changeLangBtn"
                >
                    <Row className="basicRowSetting align-items-center">
                        <Col>
                            {this.languageSvg(i18n && i18n.language)}
                        </Col>
                        <MediaQuery minWidth={767.9}>
                            <Col className="selectedLangNameCol">
                                {this.languageName(i18n && i18n.language)}
                            </Col>
                            <Col> 
                                <img
                                    width={'12px'}
                                    src={require('../../static/images/header/arrows.png')}
                                />
                            </Col>
                        </MediaQuery>
                    </Row>
                </Button>
                <Popover
                    innerClassName="langPopover"
                    placement="bottom"
                    isOpen={langPopoverOpen}
                    target="langPopover"
                    toggle={() => {
                        this.setState({
                            langPopoverOpen: !langPopoverOpen
                        });
                    }}
                >
                    <Row className="basicRowSetting">
                        {Object.keys(i18n.services.resourceStore.data).length === 0 ? (
                            <span />
                        ) : (
                            Object.keys(i18n.services.resourceStore.data).map((language) => {
                                if (language !== i18n.language) {
                                    return <Col 
                                        xl="12" lg="12" md="12" sm="12" xs="12" 
                                        key={language}
                                        className="changeLangPopoverCol"
                                    >
                                        <Row
                                            className="basicRowSetting align-items-center changeLangPopoverInnerRow"
                                            onClick={() => {
                                                i18n.changeLanguage(language, (err) => {
                                                    if (err) 
                                                        return console.log('something went wrong loading', err);
                                                });
                                                localStorage.setItem('language', language);
                                                this.setState({langPopoverOpen: false});
                                            }}
                                        >
                                            <Col
                                                xl="8" lg="8" md="8" sm="8" xs="8" 
                                                className="selectedLangNameCol text-center"
                                            >
                                                {this.languageName(language)}
                                            </Col>
                                            <Col
                                                xl="4" lg="4" md="4" sm="4" xs="4"
                                                className="text-center"
                                            >
                                                {this.languageSvg(language)}
                                            </Col>
                                        </Row>
                                    </Col>; 
                                }
                            })
                        )}      
                    </Row>
                </Popover>
            </div>
        );
    }
}

export default withTranslation()(LanguagePopover);