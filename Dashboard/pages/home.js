import { namespace } from '../config/config';

import React from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";

import Layout from "../components/common/layout";

import InputForm from '../components/common/inputForm';
import ClientContainer from '../components/clientContainer';
import ServerContainer from '../components/serverContainer';
import WorkerContainer from '../components/workerContainer';

import {
    createDeployment,
    createService,
    createSecret,
    createPersistentVolumeClaim,
    createIngress,
    watchDeployment,

    servicesTabChange
} from "../actions";

import {
    ClientDeployment,
    ClientClusterIpService,
    ServerDeployment,
    ServerClusterIpService,
    WorkerDeployment,
    PostgresDeployment,
    PostgresClusterIpService,
    PostgresPasswordSecret,
    RedisDeployment,
    RedisClusterIpService,
    DatabasePersistentVolumeClaim,
    IngressService,
} from '../k8s';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frontendDeploymantName: 'client',
            frontendDeploymantReplicas: 3,
            frontendDeploymantImage: 'heydar/multi-client',
            frontendDeploymantPort: 3000,
            backendDeploymantName: 'server',
            backendDeploymantReplicas: 3,
            backendDeploymantImage: 'heydar/multi-server',
            backendDeploymantPort: 5000,
            workerDeploymantName: 'worker',
            workerDeploymantReplicas: 1,
            workerDeploymantImage: 'heydar/multi-worker',
            postgresDeploymentPasswordName: 'pgpassword',
            postgresDeploymentPassword: '1234asdf',
            selectPostgres: true,
            selectRadis: true,

            clientMsg: null,
            serverMsg: null,
            postgresMsg: null
        };  
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props.servicesTab, prevProps.servicesTab)) {
            switch (this.props.servicesTab) {
            case 'FB':
                    this.setState({
                        frontendDeploymantName: 'client',
                        frontendDeploymantReplicas: 3,
                        frontendDeploymantImage: 'heydar/multi-client-test2',
                        frontendDeploymantPort: 3000,
                        backendDeploymantName: 'server',
                        backendDeploymantReplicas: 3,
                        backendDeploymantImage: 'heydar/multi-server-test2',
                        backendDeploymantPort: 5000,
                        // workerDeploymantName: 'worker',
                        // workerDeploymantReplicas: 1,
                        // workerDeploymantImage: 'heydar/multi-worker',
                        postgresDeploymentPasswordName: 'pgpassword',
                        postgresDeploymentPassword: '1234asdf',
                        selectPostgres: true,
                        selectRadis: false,
                    });
                    break;
                
            case 'FBW':
                this.setState({
                    frontendDeploymantName: 'client',
                    frontendDeploymantReplicas: 3,
                    frontendDeploymantImage: 'heydar/multi-client',
                    frontendDeploymantPort: 3000,
                    backendDeploymantName: 'server',
                    backendDeploymantReplicas: 3,
                    backendDeploymantImage: 'heydar/multi-server',
                    backendDeploymantPort: 5000,
                    workerDeploymantName: 'worker',
                    workerDeploymantReplicas: 1,
                    workerDeploymantImage: 'heydar/multi-worker',
                    postgresDeploymentPasswordName: 'pgpassword',
                    postgresDeploymentPassword: '1234asdf',
                    selectPostgres: true,
                    selectRadis: true,
                });
                break;
            default:
                this.setState({
                    frontendDeploymantName: 'client',
                    frontendDeploymantReplicas: 3,
                    frontendDeploymantImage: 'heydar/multi-client',
                    frontendDeploymantPort: 3000,
                    backendDeploymantName: 'server',
                    backendDeploymantReplicas: 3,
                    backendDeploymantImage: 'heydar/multi-server',
                    backendDeploymantPort: 5000,
                    workerDeploymantName: 'worker',
                    workerDeploymantReplicas: 1,
                    workerDeploymantImage: 'heydar/multi-worker',
                    postgresDeploymentPasswordName: 'pgpassword',
                    postgresDeploymentPassword: '1234asdf',
                    selectPostgres: true,
                    selectRadis: true,
                });
                break;
            }
        }
    }

    onApplyConfigurationClick = () => {

        const { 
            frontendDeploymantName,
            frontendDeploymantReplicas,
            frontendDeploymantImage,
            frontendDeploymantPort,
            backendDeploymantName,
            backendDeploymantReplicas,
            backendDeploymantImage,
            backendDeploymantPort,
            workerDeploymantName,
            workerDeploymantReplicas,
            workerDeploymantImage,

            postgresDeploymentPasswordName,
            postgresDeploymentPassword,
            selectPostgres,
            selectRadis,
        } = this.state;

        const {
            createDeployment,
            createService,
            createSecret,
            createPersistentVolumeClaim,
            createIngress,
            watchDeployment,

            servicesTab
        } = this.props;

        if (
            frontendDeploymantName &&
            frontendDeploymantReplicas &&
            frontendDeploymantImage &&
            frontendDeploymantPort
        ) {

            const clientDeployment = ClientDeployment({
                name: frontendDeploymantName,
                replicas: frontendDeploymantReplicas,
                image: frontendDeploymantImage,
                port: frontendDeploymantPort,
            });
    
            const clientClusterIpService = ClientClusterIpService({
                name: frontendDeploymantName,
                port: frontendDeploymantPort
            });

            createDeployment({
                namespace,
                deployment: clientDeployment
            });
            createService({
                namespace,
                service: clientClusterIpService
            });

            setTimeout(() => {
                watchDeployment({
                    namespace,
                    deploymentName: `${frontendDeploymantName}-deployment`
                })
            }, 500);
        } else {
            this.setState({
                clientMsg: 'اطلاعات frontend را کامل وارد کنید'
            });
        }

        if (
            backendDeploymantName &&
            backendDeploymantReplicas &&
            backendDeploymantImage &&
            backendDeploymantPort
        ) {
            const serverDeployment = ServerDeployment({
                name: backendDeploymantName,
                replicas: backendDeploymantReplicas,
                image: backendDeploymantImage,
                port: backendDeploymantPort,
                redisServiceName: 'redis',
                postgresServiceName: 'postgres',
                postgresSecretName: postgresDeploymentPasswordName
            });
    
            const serverClusterIpService = ServerClusterIpService({
                name: backendDeploymantName,
                port: backendDeploymantPort
            });

            createDeployment({
                namespace,
                deployment: serverDeployment
            });
            createService({
                namespace,
                service: serverClusterIpService
            });
            setTimeout(() => {
                watchDeployment({
                    namespace,
                    deploymentName: `${backendDeploymantName}-deployment`
                })
            }, 500);

        } else {
            this.setState({
                serverMsg: 'اطلاعات backend را کامل وارد کنید'
            });
        }

        if ( servicesTab === 'FBW' ) {
            const workerDeployment = WorkerDeployment({
                name: workerDeploymantName,
                replicas: workerDeploymantReplicas,
                image: workerDeploymantImage,
                redisServiceName: 'redis'
            });
            createDeployment({
                namespace,
                deployment: workerDeployment
            });
            setTimeout(() => {
                watchDeployment({
                    namespace,
                    deploymentName: `${workerDeploymantName}-deployment`
                })
            }, 500);
        }

        if (
            selectPostgres &&
            postgresDeploymentPasswordName &&
            postgresDeploymentPassword 
        ) {
            const postgresDeployment = PostgresDeployment({
                name: 'postgres',
                replicas: 1,
                persistentVolumeClaimName: 'database',
                postgresSecretName: postgresDeploymentPasswordName
            });
            const postgresClusterIpService = PostgresClusterIpService({
                name: 'postgres'
            });
            const postgresPasswordSecret = PostgresPasswordSecret({
                name: postgresDeploymentPasswordName,
                password: postgresDeploymentPassword
            });
            const databasePersistentVolumeClaim = DatabasePersistentVolumeClaim({
                persistentVolumeClaimName: 'database',
                accessModes: ["ReadWriteOnce"],
                storage: "2Gi"
            });

            createDeployment({
                namespace,
                deployment: postgresDeployment
            });
            createService({
                namespace,
                service: postgresClusterIpService
            });
            createSecret({
                namespace,
                secret: postgresPasswordSecret
            });
            // createPersistentVolumeClaim({
            //     namespace,
            //     persistentvolumeclaim: databasePersistentVolumeClaim
            // });

            setTimeout(() => {
                watchDeployment({
                    namespace,
                    deploymentName: `postgres-deployment`
                })
            }, 500);
        } else {
            this.setState({
                postgresMsg: 'اطلاعات postgres را کامل وارد کنید'
            });
        }

        if ( selectRadis ) {
            const redisDeployment = RedisDeployment({
                name: 'redis',
                replicas: 1
            });
            const redisClusterIpService = RedisClusterIpService({
                name: 'redis'
            });

            this.props.createDeployment({
                namespace,
                deployment: redisDeployment
            });

            this.props.createService({
                namespace,
                service: redisClusterIpService
            });

            setTimeout(() => {
                watchDeployment({
                    namespace,
                    deploymentName: `redis-deployment`
                })
            }, 500);
        }

        // const ingressService = IngressService({
        //     name: 'ingress-service',
        //     clientPath: '/?(.*)',
        //     clientServiceName: 'client',
        //     clientServicePort: 3000,
        //     serverPath: '/api/?(.*)',
        //     serverServiceName: 'server',
        //     serverServicePort: 5000
        // });
        // createIngress({
        //     namespace,
        //     ingress: ingressService
        // });
    }

    render() {

        const { 
            frontendDeploymantName,
            frontendDeploymantReplicas,
            frontendDeploymantImage,
            frontendDeploymantPort,
            backendDeploymantName,
            backendDeploymantReplicas,
            backendDeploymantImage,
            backendDeploymantPort,
            workerDeploymantName,
            workerDeploymantReplicas,
            workerDeploymantImage,
            postgresDeploymentPasswordName,
            postgresDeploymentPassword,
            selectPostgres,
            selectRadis
        } = this.state;

        const {
            servicesTabChange,
            deployments,
            servicesTab
        } = this.props;

        return (
            <Layout>
                <Container className="homeContainer" fluid={true}>

                    <Row className="basicRowSetting justify-content-center">
                        
                        <Col xl="4" lg="4" md="4" sm="4" xs="6">
                            <Row
                                className="servicesContantBodyTabItemRow"
                                style={{
                                    margin: '0 0 30px 0',
                                    backgroundColor: servicesTab=='FB'?'rgba(0, 159, 157, 0.03)':'#FFFFFF'
                                }}
                                onClick={() => {
                                    servicesTabChange('FB');
                                }}
                            >
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemImgCol"
                                >
                                    <img
                                        width={'30px'}
                                        src={require('../static/images/home/ipod.png')}
                                    />
                                </Col>
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemTextCol"
                                >
                                    Front + Back
                                </Col>
                            </Row>
                        </Col>
                        <Col xl="4" lg="4" md="4" sm="4" xs="6">
                            <Row
                                className="servicesContantBodyTabItemRow"
                                style={{
                                    margin: '0 0 30px 0',
                                    backgroundColor: servicesTab=='FBW'?'rgba(0, 159, 157, 0.03)':'#FFFFFF'
                                }}
                                onClick={() => {
                                    servicesTabChange('FBW');
                                }}
                            >
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemImgCol"
                                >
                                    <img
                                        width={'30px'}
                                        src={require('../static/images/home/ipod.png')}
                                    />
                                </Col>
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemTextCol"
                                >
                                    Front + Back + Worker
                                </Col>
                            </Row>
                        </Col>
                        {/* <Col xl="4" lg="4" md="4" sm="4" xs="6">
                            <Row
                                className="servicesContantBodyTabItemRow"
                                style={{
                                    margin: '0 0 30px 0',
                                    backgroundColor: servicesTab=='OW'?'rgba(0, 159, 157, 0.03)':'#FFFFFF'                                                
                                }}
                                onClick={() => {
                                    servicesTabChange('OW');
                                }}
                            >
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemImgCol"
                                >
                                    <img
                                        width={'30px'}
                                        src={require('../static/images/home/ipod.png')}
                                    />
                                </Col>
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="servicesContantBodyTabItemTextCol"
                                >
                                    Open whick
                                </Col>
                            </Row>
                        </Col> */}
                    
                    </Row>

                    <Row className="basicRowSetting servicesContantRow">
                        <Col
                            xl="12" lg="12" md="12" sm="12" xs="12"
                            className="servicesContantCol"
                        >

                            <Row className="basicRowSetting homePartRow justify-content-around">
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="uploadPrivateContainerTitleCol"
                                >
                                    محل آپلود کانتینرهای شخصی:‌
                                </Col>

                                <Col
                                    xl={servicesTab==='FBW'?'3':'5'} lg={servicesTab==='FBW'?'3':'5'} md="5" sm="12" xs="12"
                                    className="uploadPrivateContainerCol"
                                >
                                    <ClientContainer
                                        frontendDeploymantName={frontendDeploymantName}
                                        onFrontendDeploymantNameChange={(e) => {
                                            this.setState({frontendDeploymantName: e.target.value});
                                        }}
                                        frontendDeploymantReplicas={frontendDeploymantReplicas}
                                        onFrontendDeploymantReplicasChange={(e) => {
                                            this.setState({frontendDeploymantReplicas: e.target.value});
                                        }}
                                        frontendDeploymantImage={frontendDeploymantImage}
                                        onFrontendDeploymantImageChange={(e) => {
                                            this.setState({frontendDeploymantImage: e.target.value});
                                        }}
                                        frontendDeploymantPort={frontendDeploymantPort}
                                        onFrontendDeploymantPortChange={(e) => {
                                            this.setState({frontendDeploymantPort: e.target.value});
                                        }}
                                    />

                                </Col>

                                <Col
                                    xl={servicesTab==='FBW'?'3':'5'} lg={servicesTab==='FBW'?'3':'5'} md="5" sm="12" xs="12"
                                    className="uploadPrivateContainerCol"
                                >
                                    <ServerContainer
                                        backendDeploymantName={backendDeploymantName}
                                        onFrontendDeploymantNameChange={(e) => {
                                            this.setState({backendDeploymantName: e.target.value});
                                        }}
                                        backendDeploymantReplicas={backendDeploymantReplicas}
                                        onBackendDeploymantReplicasChange={(e) => {
                                            this.setState({backendDeploymantReplicas: e.target.value});
                                        }}
                                        backendDeploymantImage={backendDeploymantImage}
                                        onBackendDeploymantImageChange={(e) => {
                                            this.setState({backendDeploymantImage: e.target.value});
                                        }}
                                        backendDeploymantPort={backendDeploymantPort}
                                        onBackendDeploymantPortChange={(e) => {
                                            this.setState({backendDeploymantPort: e.target.value});
                                        }}
                                    />
                                </Col>
                                
                                {servicesTab==='FBW' &&
                                    <Col
                                        xl="3" lg="5" md="5" sm="12" xs="12"
                                        className="uploadPrivateContainerCol"
                                    >
                                        <WorkerContainer
                                            workerDeploymantName={workerDeploymantName}
                                            onWorkerDeploymantNameChange={(e) => {
                                                this.setState({workerDeploymantName: e.target.value});
                                            }}
                                            workerDeploymantReplicas={workerDeploymantReplicas}
                                            onWorkerDeploymantReplicasChange={(e) => {
                                                this.setState({workerDeploymantReplicas: e.target.value});
                                            }}
                                            workerDeploymantImage={workerDeploymantImage}
                                            onWorkerDeploymantImageChange={(e) => {
                                                this.setState({workerDeploymantImage: e.target.value});
                                            }}
                                        />
                                    </Col>
                                }
                                

                            </Row>

                            <Row className="basicRowSetting justify-content-around">
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="uploadPrivateContainerTitleCol"
                                >
                                سرویس ها:‌
                                </Col>
                            </Row>

                            <Row className="basicRowSetting homeSrviceRow">
                                <Col
                                    xl="1" lg="1" md="1" sm="1" xs="1"
                                    className="homeSelectServiceCheckboxCol"
                                >
                                    <input
                                        className="homeSelectServiceCheckbox"
                                        type="checkbox"
                                        name="postgres"
                                        value="postgres"
                                        checked={selectPostgres} 
                                        onChange={() => {this.setState({selectPostgres: !selectPostgres})}}
                                    />
                                </Col>
                                <Col
                                    xl="2" lg="2" md="2" sm="2" xs="3"
                                    className="homeSelectServiceTitleCol"
                                >
                                    postgres DB
                                </Col>

                                <Col xl="3" lg="4" md="4" sm="6" xs="8">
                                    <InputForm
                                        value={postgresDeploymentPasswordName}
                                        type="text"
                                        imgUrl={require('../static/images/home/password.png')}
                                        placeholder={'نام رمز عبور'}
                                        onInputChange={(e) => {
                                            this.setState({postgresDeploymentPasswordName: e.target.value});
                                        }}
                                    />
                                </Col>
                                <Col xl="3" lg="4" md="4" sm="6" xs="8">
                                    <InputForm
                                        value={postgresDeploymentPassword}
                                        type="password"
                                        imgUrl={require('../static/images/home/password.png')}
                                        placeholder={'رمز عبور'}
                                        onInputChange={(e) => {
                                            this.setState({postgresDeploymentPassword: e.target.value});
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="basicRowSetting homeSrviceRow">
                                <Col
                                    xl="1" lg="1" md="1" sm="1" xs="1"
                                    className="homeSelectServiceCheckboxCol"
                                >
                                    <input
                                        className="homeSelectServiceCheckbox"
                                        type="checkbox"
                                        name="radis"
                                        value="radis"
                                        checked={selectRadis} 
                                        onChange={() => {this.setState({selectRadis: !selectRadis})}}
                                    />
                                </Col>
                                <Col
                                    xl="2" lg="2" md="2" sm="2" xs="3"
                                    className="homeSelectServiceTitleCol"
                                >
                                    Radis
                                </Col>
                            </Row>

                            


                        </Col>
                    </Row>

                    <Row className="servicesLogsRow">
                        <Col
                            xl="12" lg="12" md="12" sm="12" xs="12"
                            className="servicesLogsCol"
                        >

                            <Row className="basicRowSetting homeLogsTitleRow justify-content-around">
                                <Col
                                    xl="12" lg="12" md="12" sm="12" xs="12"
                                    className="uploadPrivateContainerTitleCol"
                                >
                                Logs:‌
                                </Col>
                            </Row>

                            <Row className="basicRowSetting">
                                { Object.keys(deployments).length === 0 ? (
                                    <span />
                                ) : (
                                    Object.keys(deployments).map( (key, index) => {
                                        return <Col xl="12" lg="12" md="12" sm="4" xs="4">
                                            <Row className="basicRowSetting">
                                                <Col xl="2" lg="2" md="2" sm="2" xs="2">
                                                    {deployments[key] && deployments[key].status?'true':'false'}
                                                </Col>
                                                <Col xl="10" lg="10" md="10" sm="10" xs="10">
                                                    {key}
                                                </Col>
                                            </Row>
                                        </Col>;
                                    })
                                )}
                            </Row>

                        </Col>
                    </Row>


                    <Row className="basicRowSetting homeOnSubmitRow justify-content-center">
                        <Col
                            xl="2" lg="3" md="3" sm="4" xs="6"
                            className="text-center"
                        >
                            <button 
                                className="homeOnSubmitBtn"
                                onClick={this.onApplyConfigurationClick}
                            >
                                ثبت اطلاعات
                            </button>
                        </Col>     
                    </Row>
                    
                </Container>
            </Layout>
        );
    }
}

const mapStateToProps = ({K8sWatch, setting}) => {
    const { deployments } = K8sWatch;
    const { servicesTab } = setting;
    
    return {
        deployments,
        servicesTab
    };
};

export default withTranslation()(connect(mapStateToProps, {
    createDeployment,
    createService,
    createSecret,
    createPersistentVolumeClaim,
    createIngress,
    watchDeployment,
    servicesTabChange
})(Home));