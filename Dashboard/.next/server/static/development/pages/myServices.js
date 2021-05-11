module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/K8sCreateActions.js":
/*!*************************************!*\
  !*** ./actions/K8sCreateActions.js ***!
  \*************************************/
/*! exports provided: createDeployment, createService, createSecret, createPersistentVolumeClaim, createIngress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDeployment", function() { return createDeployment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return createService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSecret", function() { return createSecret; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPersistentVolumeClaim", function() { return createPersistentVolumeClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIngress", function() { return createIngress; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./actions/types.js");




var createDeployment = function createDeployment(_ref) {
  var namespace = _ref.namespace,
      deployment = _ref.deployment;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"], "/apis/apps/v1/namespaces/").concat(namespace, "/deployments"), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(deployment)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var createService = function createService(_ref2) {
  var namespace = _ref2.namespace,
      service = _ref2.service;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/services"), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(service)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var createSecret = function createSecret(_ref3) {
  var namespace = _ref3.namespace,
      secret = _ref3.secret;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/secrets"), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(secret)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var createPersistentVolumeClaim = function createPersistentVolumeClaim(_ref4) {
  var namespace = _ref4.namespace,
      persistentvolumeclaim = _ref4.persistentvolumeclaim;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/persistentvolumeclaims"), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(persistentvolumeclaim)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var createIngress = function createIngress(_ref5) {
  var namespace = _ref5.namespace,
      ingress = _ref5.ingress;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_2__["API_BASE_URL"], "/apis/networking.k8s.io/v1beta1/namespaces/").concat(namespace, "/ingresses"), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(ingress)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};

/***/ }),

/***/ "./actions/K8sDeleteCollectionActions.js":
/*!***********************************************!*\
  !*** ./actions/K8sDeleteCollectionActions.js ***!
  \***********************************************/
/*! exports provided: deleteCollectionDeployments, deleteCollectionServices, deleteCollectionSecrets, deleteCollectionPvcs, deleteCollectionIngresses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionDeployments", function() { return deleteCollectionDeployments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionServices", function() { return deleteCollectionServices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionSecrets", function() { return deleteCollectionSecrets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionPvcs", function() { return deleteCollectionPvcs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionIngresses", function() { return deleteCollectionIngresses; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./actions/types.js");



var deleteCollectionDeployments = function deleteCollectionDeployments(_ref) {
  var namespace = _ref.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/apis/apps/v1/namespaces/").concat(namespace, "/deployments"), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var deleteCollectionServices = function deleteCollectionServices(_ref2) {
  var namespace = _ref2.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/services"), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);

      if (response.items.length !== 0) {
        response.items.map(function (item, key) {
          if (item.metadata.name !== 'kubernetes') {
            isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/services/").concat(item.metadata.name), {
              method: 'DELETE',
              headers: {
                Accept: 'application/json'
              }
            }).then(function (response) {
              return response.json();
            }).then(function (response) {
              console.log(response);
            }).catch(function () {});
          }
        });
      }
    }).catch(function () {});
  };
};
var deleteCollectionSecrets = function deleteCollectionSecrets(_ref3) {
  var namespace = _ref3.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/secrets"), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var deleteCollectionPvcs = function deleteCollectionPvcs(_ref4) {
  var namespace = _ref4.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/api/v1/namespaces/").concat(namespace, "/persistentvolumeclaims"), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};
var deleteCollectionIngresses = function deleteCollectionIngresses(_ref5) {
  var namespace = _ref5.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/apis/networking.k8s.io/v1beta1/namespaces/").concat(namespace, "/ingresses"), {
      method: 'DELETE',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      console.log(response);
    }).catch(function () {});
  };
};

/***/ }),

/***/ "./actions/K8sReadActions.js":
/*!***********************************!*\
  !*** ./actions/K8sReadActions.js ***!
  \***********************************/
/*! exports provided: readDeployments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readDeployments", function() { return readDeployments; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./actions/types.js");



var readDeployments = function readDeployments(_ref) {
  var namespace = _ref.namespace;
  return function (dispatch) {
    isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/apis/apps/v1/namespaces/").concat(namespace, "/deployments"), {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_2__["READ_DEPLOYMENTS"],
        payload: response.items ? response.items : []
      });
    }).catch(function () {});
  };
};

/***/ }),

/***/ "./actions/K8sWatchActions.js":
/*!************************************!*\
  !*** ./actions/K8sWatchActions.js ***!
  \************************************/
/*! exports provided: watchDeployment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchDeployment", function() { return watchDeployment; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./actions/types.js");



var watchDeployment = function watchDeployment(_ref) {
  var namespace = _ref.namespace,
      deploymentName = _ref.deploymentName;
  return function (dispatch) {
    var watchDeploymentInterval = setInterval(function () {
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config_config__WEBPACK_IMPORTED_MODULE_1__["API_BASE_URL"], "/apis/apps/v1/namespaces/").concat(namespace, "/deployments/").concat(deploymentName, "?watch=true"), {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.json();
      }).then(function (response) {
        dispatch({
          type: _types__WEBPACK_IMPORTED_MODULE_2__["WATCH_DEPLOYMENT_UPDATE"],
          payload: {
            deploymentName: deploymentName,
            status: response.status.conditions && response.status.conditions[0] && response.status.conditions[0].status === "True" ? true : false
          }
        });

        if (response.status.conditions && response.status.conditions[0] && response.status.conditions[0].status === "True") {
          clearInterval(watchDeploymentInterval);
        }
      }).catch(function () {
        clearInterval(watchDeploymentInterval);
      });
    }, 500);
  };
};

/***/ }),

/***/ "./actions/SettingActions.js":
/*!***********************************!*\
  !*** ./actions/SettingActions.js ***!
  \***********************************/
/*! exports provided: servicesTabChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesTabChange", function() { return servicesTabChange; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./actions/types.js");

var servicesTabChange = function servicesTabChange(tab) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SERVICES_TAB_CHANGE"],
    payload: tab
  };
};

/***/ }),

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: createDeployment, createService, createSecret, createPersistentVolumeClaim, createIngress, watchDeployment, readDeployments, deleteCollectionDeployments, deleteCollectionServices, deleteCollectionSecrets, deleteCollectionPvcs, deleteCollectionIngresses, servicesTabChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./K8sCreateActions */ "./actions/K8sCreateActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDeployment", function() { return _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__["createDeployment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createService", function() { return _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__["createService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSecret", function() { return _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__["createSecret"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createPersistentVolumeClaim", function() { return _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__["createPersistentVolumeClaim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createIngress", function() { return _K8sCreateActions__WEBPACK_IMPORTED_MODULE_0__["createIngress"]; });

/* harmony import */ var _K8sWatchActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./K8sWatchActions */ "./actions/K8sWatchActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchDeployment", function() { return _K8sWatchActions__WEBPACK_IMPORTED_MODULE_1__["watchDeployment"]; });

/* harmony import */ var _K8sReadActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./K8sReadActions */ "./actions/K8sReadActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readDeployments", function() { return _K8sReadActions__WEBPACK_IMPORTED_MODULE_2__["readDeployments"]; });

/* harmony import */ var _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./K8sDeleteCollectionActions */ "./actions/K8sDeleteCollectionActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionDeployments", function() { return _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__["deleteCollectionDeployments"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionServices", function() { return _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__["deleteCollectionServices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionSecrets", function() { return _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__["deleteCollectionSecrets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionPvcs", function() { return _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__["deleteCollectionPvcs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteCollectionIngresses", function() { return _K8sDeleteCollectionActions__WEBPACK_IMPORTED_MODULE_3__["deleteCollectionIngresses"]; });

/* harmony import */ var _SettingActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SettingActions */ "./actions/SettingActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "servicesTabChange", function() { return _SettingActions__WEBPACK_IMPORTED_MODULE_4__["servicesTabChange"]; });







/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: WATCH_DEPLOYMENT_UPDATE, WATCH_SERVICE_UPDATE, WATCH_PVC_UPDATE, WATCH_SECRET_UPDATE, WATCH_INGRESS_UPDATE, READ_DEPLOYMENTS, SERVICES_TAB_CHANGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATCH_DEPLOYMENT_UPDATE", function() { return WATCH_DEPLOYMENT_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATCH_SERVICE_UPDATE", function() { return WATCH_SERVICE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATCH_PVC_UPDATE", function() { return WATCH_PVC_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATCH_SECRET_UPDATE", function() { return WATCH_SECRET_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WATCH_INGRESS_UPDATE", function() { return WATCH_INGRESS_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "READ_DEPLOYMENTS", function() { return READ_DEPLOYMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICES_TAB_CHANGE", function() { return SERVICES_TAB_CHANGE; });
// -- K8s watch ---------------------------------------------
var WATCH_DEPLOYMENT_UPDATE = 'watch_deployment_update';
var WATCH_SERVICE_UPDATE = 'watch_service_update';
var WATCH_PVC_UPDATE = 'watch_pvc_update';
var WATCH_SECRET_UPDATE = 'watch_secret_update';
var WATCH_INGRESS_UPDATE = 'watch_ingress_update'; // -- K8s read ----------------------------------------------

var READ_DEPLOYMENTS = 'read_deployments'; // -- setting -----------------------------------------------

var SERVICES_TAB_CHANGE = 'services_tab_change';

/***/ }),

/***/ "./components/common/header.js":
/*!*************************************!*\
  !*** ./components/common/header.js ***!
  \*************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-with-direction/dist/DirectionProvider */ "react-with-direction/dist/DirectionProvider");
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _languagePopover__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./languagePopover */ "./components/common/languagePopover.js");














var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onUserProfileClick", function () {});

    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          i18n = _this$props.i18n,
          dockedButtonAction = _this$props.dockedButtonAction,
          dockedButtonState = _this$props.dockedButtonState;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10___default.a, {
        direction: i18n && i18n.language === 'en' ? react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10__["DIRECTIONS"].LTR : react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_10__["DIRECTIONS"].RTL
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("header", {
        className: "header",
        style: styles.headerStyle({
          smallPage: dockedButtonState
        })
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        fluid: true,
        className: "headerContainer"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "basicRowSetting headerRow justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xl: "6",
        lg: "6",
        md: "6",
        sm: "8",
        xs: "6"
      }, dockedButtonState && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: dockedButtonAction,
        className: "headerSidebarBtn"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        width: '50px',
        src: __webpack_require__(/*! ../../static/images/header/sidebar.png */ "./static/images/header/sidebar.png")
      }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_12___default.a, {
        maxWidth: 767.9
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        sm: "2",
        xs: "3",
        className: "headerUserProfileCol"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        prefetch: true,
        href: "/userProfile"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", null)))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xl: "6",
        lg: "6",
        md: "6",
        sm: "2",
        xs: "3",
        className: "headerChangeLangCol"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_languagePopover__WEBPACK_IMPORTED_MODULE_13__["default"], null))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);
var styles = {
  headerStyle: function headerStyle(_ref) {
    var smallPage = _ref.smallPage;
    return {
      zIndex: !smallPage ? '1111' : '998'
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_11__["withTranslation"])()(Header));

/***/ }),

/***/ "./components/common/languagePopover.js":
/*!**********************************************!*\
  !*** ./components/common/languagePopover.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);













var LanguagePopover =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(LanguagePopover, _React$Component);

  function LanguagePopover(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LanguagePopover);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LanguagePopover).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "languageSvg", function (languageCode) {
      switch (languageCode) {
        case 'en':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            width: '26px',
            src: __webpack_require__(/*! ../../static/images/header/en.png */ "./static/images/header/en.png")
          });

        case 'fa':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            width: '26px',
            src: __webpack_require__(/*! ../../static/images/header/fa.png */ "./static/images/header/fa.png")
          });

        case 'ar':
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            width: '26px',
            src: __webpack_require__(/*! ../../static/images/header/ar.png */ "./static/images/header/ar.png")
          });

        default:
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            width: '26px',
            src: __webpack_require__(/*! ../../static/images/header/en.png */ "./static/images/header/en.png")
          });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "languageName", function (languageCode) {
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
    });

    _this.state = {
      langPopoverOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LanguagePopover, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var i18n = this.props.i18n;
      var langPopoverOpen = this.state.langPopoverOpen;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        id: "langPopover",
        type: "button",
        className: "changeLangBtn"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "basicRowSetting align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], null, this.languageSvg(i18n && i18n.language)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_10___default.a, {
        minWidth: 767.9
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        className: "selectedLangNameCol"
      }, this.languageName(i18n && i18n.language)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        width: '12px',
        src: __webpack_require__(/*! ../../static/images/header/arrows.png */ "./static/images/header/arrows.png")
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Popover"], {
        innerClassName: "langPopover",
        placement: "bottom",
        isOpen: langPopoverOpen,
        target: "langPopover",
        toggle: function toggle() {
          _this2.setState({
            langPopoverOpen: !langPopoverOpen
          });
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "basicRowSetting"
      }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(i18n.services.resourceStore.data).length === 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null) : _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(i18n.services.resourceStore.data).map(function (language) {
        if (language !== i18n.language) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
            xl: "12",
            lg: "12",
            md: "12",
            sm: "12",
            xs: "12",
            key: language,
            className: "changeLangPopoverCol"
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
            className: "basicRowSetting align-items-center changeLangPopoverInnerRow",
            onClick: function onClick() {
              i18n.changeLanguage(language, function (err) {
                if (err) return console.log('something went wrong loading', err);
              });
              localStorage.setItem('language', language);

              _this2.setState({
                langPopoverOpen: false
              });
            }
          }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
            xl: "8",
            lg: "8",
            md: "8",
            sm: "8",
            xs: "8",
            className: "selectedLangNameCol text-center"
          }, _this2.languageName(language)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
            xl: "4",
            lg: "4",
            md: "4",
            sm: "4",
            xs: "4",
            className: "text-center"
          }, _this2.languageSvg(language))));
        }
      }))));
    }
  }]);

  return LanguagePopover;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["withTranslation"])()(LanguagePopover));

/***/ }),

/***/ "./components/common/layout.js":
/*!*************************************!*\
  !*** ./components/common/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-with-direction/dist/DirectionProvider */ "react-with-direction/dist/DirectionProvider");
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-sidebar */ "react-sidebar");
/* harmony import */ var react_sidebar__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_sidebar__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-sizes */ "react-sizes");
/* harmony import */ var react_sizes__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_sizes__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! normalize.css/normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "./node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _node_modules_react_custom_scroll_dist_customScroll_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../node_modules/react-custom-scroll/dist/customScroll.css */ "./node_modules/react-custom-scroll/dist/customScroll.css");
/* harmony import */ var _node_modules_react_custom_scroll_dist_customScroll_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_custom_scroll_dist_customScroll_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header */ "./components/common/header.js");
/* harmony import */ var _sidebarContant__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidebarContant */ "./components/common/sidebarContant.js");














 // import 'materialize-css/dist/css/materialize.min.css';

 // import 'react-persian-calendar-date-picker/lib/DatePicker.css';





var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSetSidebarOpen", function (open) {
      _this.setState({
        sidebarOpen: open
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "dockedButtonAction", function (ev) {
      _this.setState({
        sidebarOpen: !_this.state.sidebarOpen
      });

      if (ev) {
        ev.preventDefault();
      }
    });

    _this.state = {
      sidebarOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          i18n = _this$props.i18n,
          width = _this$props.width;
      var sidebarOpen = this.state.sidebarOpen;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_17__["default"], {
        dockedButtonState: !(width > 768),
        dockedButtonAction: this.dockedButtonAction
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9___default.a, {
        direction: i18n && i18n.language == 'en' ? react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9__["DIRECTIONS"].LTR : react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_9__["DIRECTIONS"].RTL
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_sidebar__WEBPACK_IMPORTED_MODULE_11___default.a, {
        sidebar: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_sidebarContant__WEBPACK_IMPORTED_MODULE_18__["default"], {
          onCloseSidebarClick: function onCloseSidebarClick() {
            _this2.setState({
              sidebarOpen: false
            });
          }
        }),
        open: sidebarOpen,
        docked: width > 768,
        onSetOpen: this.onSetSidebarOpen,
        styles: styles.sidebarStyle({
          width: width
        }),
        pullRight: i18n && i18n.language === 'en' ? false : true
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "layoutChildren"
      }, children))));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var styles = {
  sidebarStyle: function sidebarStyle(_ref) {
    var width = _ref.width;
    return {
      root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden'
      },
      sidebar: {
        width: "".concat(width > 768 ? '320px' : '220px'),
        zIndex: 1100,
        position: 'absolute',
        top: 0,
        bottom: 0,
        transition: 'transform .3s ease-out',
        WebkitTransition: '-webkit-transform .3s ease-out',
        willChange: 'transform',
        overflowY: 'auto',
        backgroundColor: '#FFFFFF',
        textAlign: 'start'
      },
      content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        transition: 'left .3s ease-out, right .3s ease-out'
      },
      overlay: {
        zIndex: 1099,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity .3s ease-out, visibility .3s ease-out',
        backgroundColor: 'rgba(0,0,0,.3)'
      },
      dragHandle: {
        zIndex: 4,
        position: 'fixed',
        top: 0,
        bottom: 0
      }
    };
  }
};

var mapSizesToProps = function mapSizesToProps(_ref2) {
  var width = _ref2.width;
  return {
    width: width
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(), react_sizes__WEBPACK_IMPORTED_MODULE_12___default()(mapSizesToProps))(Layout));

/***/ }),

/***/ "./components/common/sidebarContant.js":
/*!*********************************************!*\
  !*** ./components/common/sidebarContant.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-with-direction/dist/DirectionProvider */ "react-with-direction/dist/DirectionProvider");
/* harmony import */ var react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__);















var SidebarContant =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SidebarContant, _React$Component);

  function SidebarContant() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SidebarContant);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(SidebarContant).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SidebarContant, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n,
          onCloseSidebarClick = _this$props.onCloseSidebarClick;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11___default.a, {
        direction: i18n && i18n.language == 'en' ? react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11__["DIRECTIONS"].LTR : react_with_direction_dist_DirectionProvider__WEBPACK_IMPORTED_MODULE_11__["DIRECTIONS"].RTL
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Container"], {
        fluid: true,
        className: "sidebarContantContainer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_9___default.a, {
        minWidth: 768
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting align-items-center sidebarContantHeadRow"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting sidebarContantRow align-items-start"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "12",
        lg: "12",
        md: "12",
        sm: "12",
        xs: "12",
        className: "sidebarContantItemCol",
        style: {
          backgroundColor: 'rgba(0, 159, 157, 0.03)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        prefetch: true,
        href: "/home"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "3",
        lg: "4",
        md: "4",
        sm: "4",
        xs: "4",
        className: "sidebarContantItemPhotoCol"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        width: '34px',
        src: __webpack_require__(/*! ../../static/images/sidebar/home.png */ "./static/images/sidebar/home.png")
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "9",
        lg: "8",
        md: "8",
        sm: "8",
        xs: "8",
        className: "sidebarContantItemTextCol"
      }, "\u0633\u0627\u062E\u062A \u0633\u0631\u0648\u06CC\u0633"))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "12",
        lg: "12",
        md: "12",
        sm: "12",
        xs: "12",
        className: "sidebarContantItemCol",
        style: {
          backgroundColor: 'rgba(0, 159, 157, 0.03)'
        }
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        prefetch: true,
        href: "/myServices"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "3",
        lg: "4",
        md: "4",
        sm: "4",
        xs: "4",
        className: "sidebarContantItemPhotoCol"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        width: '34px',
        src: __webpack_require__(/*! ../../static/images/sidebar/myServices.png */ "./static/images/sidebar/myServices.png")
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "9",
        lg: "8",
        md: "8",
        sm: "8",
        xs: "8",
        className: "sidebarContantItemTextCol"
      }, "\u0633\u0631\u0648\u06CC\u0633 \u0647\u0627\u06CC \u0645\u0646"))))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_responsive__WEBPACK_IMPORTED_MODULE_9___default.a, {
        maxWidth: 767.9
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        sm: "12",
        xs: "12",
        className: "sidebarContantMobileVerHeadCol"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaTimes"], {
        size: 24,
        color: '#9B9B9B',
        onClick: onCloseSidebarClick
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting align-items-center sidebarContantMobileVerContentRow"
      }))));
    }
  }]);

  return SidebarContant;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {})(SidebarContant)));

/***/ }),

/***/ "./components/deleteServiceModal.js":
/*!******************************************!*\
  !*** ./components/deleteServiceModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./actions/index.js");














var DeleteServiceModal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DeleteServiceModal, _React$Component);

  function DeleteServiceModal() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DeleteServiceModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DeleteServiceModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onDeleteServiceClick", function () {
      var _this$props = _this.props,
          toggle = _this$props.toggle,
          deleteCollectionDeployments = _this$props.deleteCollectionDeployments,
          deleteCollectionServices = _this$props.deleteCollectionServices,
          deleteCollectionSecrets = _this$props.deleteCollectionSecrets,
          deleteCollectionPvcs = _this$props.deleteCollectionPvcs,
          deleteCollectionIngresses = _this$props.deleteCollectionIngresses;
      deleteCollectionDeployments({
        namespace: _config_config__WEBPACK_IMPORTED_MODULE_7__["namespace"]
      });
      deleteCollectionServices({
        namespace: _config_config__WEBPACK_IMPORTED_MODULE_7__["namespace"]
      });
      deleteCollectionSecrets({
        namespace: _config_config__WEBPACK_IMPORTED_MODULE_7__["namespace"]
      }); // deleteCollectionPvcs({namespace});
      // deleteCollectionIngresses({namespace});

      toggle();
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DeleteServiceModal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          toggle = _this$props2.toggle;
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Modal"], {
        isOpen: open,
        toggle: toggle,
        centered: true,
        modalClassName: "modalOutside",
        contentClassName: "modalContent",
        backdropClassName: "modalBackdrop"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalHeader"], {
        toggle: toggle,
        className: "modalHeaderContent",
        style: {
          paddingBottom: '0'
        }
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ModalBody"], {
        className: "modalBodyContent"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "basicRowSetting justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xl: "10",
        lg: "10",
        md: "10",
        sm: "10",
        xs: "10",
        className: "modalLogoutTitleCol"
      }, "\u0622\u06CC\u0627 \u0645\u06CC \u062E\u0648\u0627\u0647\u06CC\u062F \u0633\u0631\u0648\u06CC\u0633 \u0631\u0627 \u062D\u0630\u0641 \u06A9\u0646\u06CC\u062F\u061F")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], {
        className: "basicRowSetting justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xl: "4",
        lg: "3",
        md: "3",
        sm: "4",
        xs: "5"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "modalLogoutNoBtn",
        onClick: toggle
      }, "\u062E\u06CC\u0631")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
        xl: "4",
        lg: "3",
        md: "3",
        sm: "4",
        xs: "5"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Button"], {
        className: "modalLogoutYesBtn",
        onClick: this.onDeleteServiceClick
      }, "\u0628\u0644\u0647")))));
    }
  }]);

  return DeleteServiceModal;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(null, {
  deleteCollectionDeployments: _actions__WEBPACK_IMPORTED_MODULE_12__["deleteCollectionDeployments"],
  deleteCollectionServices: _actions__WEBPACK_IMPORTED_MODULE_12__["deleteCollectionServices"],
  deleteCollectionSecrets: _actions__WEBPACK_IMPORTED_MODULE_12__["deleteCollectionSecrets"],
  deleteCollectionPvcs: _actions__WEBPACK_IMPORTED_MODULE_12__["deleteCollectionPvcs"],
  deleteCollectionIngresses: _actions__WEBPACK_IMPORTED_MODULE_12__["deleteCollectionIngresses"]
})(DeleteServiceModal)));

/***/ }),

/***/ "./components/serviceItem.js":
/*!***********************************!*\
  !*** ./components/serviceItem.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_10__);












var ServiceItem =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ServiceItem, _React$Component);

  function ServiceItem(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ServiceItem);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ServiceItem).call(this, props));
    _this.state = {};
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ServiceItem, [{
    key: "render",
    value: function render() {
      var onDeleteClick = this.props.onDeleteClick;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting serviceItemRow"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "4",
        lg: "4",
        md: "4",
        sm: "4",
        xs: "4",
        className: "serviceItemImgCol"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        width: '30px',
        src: __webpack_require__(/*! ../static/images/myservices/namespace.png */ "./static/images/myservices/namespace.png"),
        className: "serviceItemImg"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "8",
        lg: "8",
        md: "8",
        sm: "8",
        xs: "8",
        className: "serviceItemContentCol"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
        className: "basicRowSetting"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "12",
        lg: "12",
        md: "12",
        sm: "12",
        xs: "12",
        className: "serviceItemContentNameCol"
      }, _config_config__WEBPACK_IMPORTED_MODULE_6__["namespace"]), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "6",
        lg: "6",
        md: "6",
        sm: "6",
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "serviceItemEditBtn"
      }, "\u0648\u06CC\u0631\u0627\u06CC\u0634")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
        xl: "6",
        lg: "6",
        md: "6",
        sm: "6",
        xs: "6"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
        className: "serviceItemDeleteBtn",
        onClick: onDeleteClick
      }, "\u062D\u0630\u0641")))));
    }
  }]);

  return ServiceItem;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, {})(ServiceItem)));

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: API_BASE_URL, namespace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
var API_BASE_URL = 'http://127.0.0.1:8001';
var namespace = 'default';

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-custom-scroll/dist/customScroll.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-custom-scroll/dist/customScroll.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/I18nextProvider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  (0, _context.usedI18nextProvider)(true);
  return _react.default.createElement(_context.I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Trans.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Trans.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesToString = nodesToString;
exports.Trans = Trans;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__(/*! html-parse-stringify2 */ "html-parse-stringify2"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return _react.default.isValidElement(child);
  });
}

function nodesToString(mem, children, index, i18nOptions) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      mem = "".concat(mem).concat(child);
    } else if (hasChildren(child)) {
      var elementTag = keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 1 && typeof hasChildren(child) === 'string' ? child.type : elementKey;

      if (child.props && child.props.i18nIsDynamicList) {
        // we got a dynamic list like "<ul>{['a', 'b'].map(item => ( <li key={item}>{item}</li> ))}</ul>""
        // the result should be "<0></0>" and not "<0><0>a</0><1>b</1></0>"
        mem = "".concat(mem, "<").concat(elementTag, "></").concat(elementTag, ">");
      } else {
        // regular case mapping the inner children
        mem = "".concat(mem, "<").concat(elementTag, ">").concat(nodesToString('', getChildren(child), i + 1, i18nOptions), "</").concat(elementTag, ">");
      }
    } else if (_react.default.isValidElement(child)) {
      if (keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 0) {
        mem = "".concat(mem, "<").concat(child.type, "/>");
      } else {
        mem = "".concat(mem, "<").concat(elementKey, "></").concat(elementKey, ">");
      }
    } else if ((0, _typeof2.default)(child) === 'object') {
      var clone = (0, _objectSpread2.default)({}, child);
      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return mem;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts) {
  if (targetString === '') return []; // check if contains tags we need to replace from html string to react nodes

  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString); // no need to replace tags in the targetstring

  if (!children && !emptyChildrenButNeedsHandling) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    if (Object.prototype.toString.call(childs) !== '[object Array]') childs = [childs];
    childs.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2.default)(child) === 'object' && !_react.default.isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  targetString = i18n.services.interpolator.interpolate(targetString, (0, _objectSpread2.default)({}, data, combinedTOpts), i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify.default.parse("<0>".concat(targetString, "</0>"));

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content;

      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react.default.isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var childs = getChildren(child);
          var mappedChildren = mapAST(childs, node.children);
          var inner = hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), inner));
        } else if (emptyChildrenButNeedsHandling && (0, _typeof2.default)(child) === 'object' && child.dummy && !isElement) {
          // we have a empty Trans node (the dummy element) with a targetstring that contains html tags needing
          // conversion to react nodes
          // so we just need to map the inner stuff
          var _inner = mapAST(reactNodes
          /* wrong but we need something */
          , node.children);

          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), _inner));
        } else if (isNaN(node.name) && i18nOptions.transSupportBasicHtmlNodes) {
          if (node.voidElement) {
            mem.push(_react.default.createElement(node.name, {
              key: "".concat(node.name, "-").concat(i)
            }));
          } else {
            var _inner2 = mapAST(reactNodes
            /* wrong but we need something */
            , node.children);

            mem.push(_react.default.createElement(node.name, {
              key: "".concat(node.name, "-").concat(i)
            }, _inner2));
          }
        } else if ((0, _typeof2.default)(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          // If component does not have children, but translation - has
          // with this in component could be components={[<span class='make-beautiful'/>]} and in translation - 'some text <0>some highlighted message</0>'
          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          }), translationContent));
        } else {
          mem.push(_react.default.cloneElement(child, (0, _objectSpread2.default)({}, child.props, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      tOptions = _ref.tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      additionalProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"]);

  var _ref2 = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  var reactI18nextOptions = (0, _objectSpread2.default)({}, (0, _context.getDefaults)(), i18n.options && i18n.options.react);
  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent; // prepare having a namespace

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString('', children, 0, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? {} : {
    interpolation: {
      prefix: '#$?',
      suffix: '?$#'
    }
  };
  var combinedTOpts = (0, _objectSpread2.default)({}, tOptions, values, interpolationOverride, {
    defaultValue: defaultValue,
    count: count,
    ns: namespaces
  });
  var translation = key ? t(key, combinedTOpts) : defaultValue;
  if (!useAsParent) return renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts);
  return _react.default.createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts));
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Translation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Translation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translation = Translation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = (0, _objectWithoutProperties2.default)(props, ["ns", "children"]);

  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
      _useTranslation2 = (0, _slicedToArray2.default)(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/context.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usedI18nextProvider = usedI18nextProvider;
exports.getHasUsedI18nextProvider = getHasUsedI18nextProvider;
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.composeInitialProps = composeInitialProps;
exports.getInitialProps = getInitialProps;
exports.initReactI18next = exports.ReportNamespaces = exports.I18nContext = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var defaultOptions = {
  bindI18n: 'languageChanging languageChanged',
  bindI18nStore: '',
  // nsMode: 'fallback' // loop through all namespaces given to hook, HOC, render prop for key lookup
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  // hashTransKey: key => key // calculate a key for Trans component based on defaultValue
  useSuspense: true
};
var i18nInstance;
var hasUsedI18nextProvider;

var I18nContext = _react.default.createContext();

exports.I18nContext = I18nContext;

function usedI18nextProvider(used) {
  hasUsedI18nextProvider = used;
}

function getHasUsedI18nextProvider() {
  return hasUsedI18nextProvider;
}

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = (0, _objectSpread2.default)({}, defaultOptions, options);
}

function getDefaults() {
  return defaultOptions;
}

var ReportNamespaces =
/*#__PURE__*/
function () {
  function ReportNamespaces() {
    (0, _classCallCheck2.default)(this, ReportNamespaces);
    this.usedNamespaces = {};
  }

  (0, _createClass2.default)(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();

exports.ReportNamespaces = ReportNamespaces;

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.initReactI18next = initReactI18next;

function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve((0, _objectSpread2.default)({}, componentsInitialProps, i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  }; // Avoid async for now - so we do not need to pull in regenerator
  // return async ctx => {
  //   const componentsInitialProps = ForComponent.getInitialProps
  //     ? await ForComponent.getInitialProps(ctx)
  //     : {};
  //   const i18nInitialProps = getInitialProps();
  //   return {
  //     ...componentsInitialProps,
  //     ...i18nInitialProps,
  //   };
  // };
}

function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.withTranslation;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _Translation.Translation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withSSR", {
  enumerable: true,
  get: function get() {
    return _withSSR.withSSR;
  }
});
Object.defineProperty(exports, "useSSR", {
  enumerable: true,
  get: function get() {
    return _useSSR.useSSR;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "initReactI18next", {
  enumerable: true,
  get: function get() {
    return _context.initReactI18next;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "composeInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.composeInitialProps;
  }
});
Object.defineProperty(exports, "getInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.getInitialProps;
  }
});

var _Trans = __webpack_require__(/*! ./Trans */ "./node_modules/react-i18next/dist/commonjs/Trans.js");

var _useTranslation = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _withTranslation = __webpack_require__(/*! ./withTranslation */ "./node_modules/react-i18next/dist/commonjs/withTranslation.js");

var _Translation = __webpack_require__(/*! ./Translation */ "./node_modules/react-i18next/dist/commonjs/Translation.js");

var _I18nextProvider = __webpack_require__(/*! ./I18nextProvider */ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js");

var _withSSR = __webpack_require__(/*! ./withSSR */ "./node_modules/react-i18next/dist/commonjs/withSSR.js");

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useSSR.js":
/*!************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useSSR.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSSR = useSSR;

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) : {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)(); // opt out if is a cloned instance, eg. created by i18next-express-middleware on request
  // -> do not set initial stuff on server side

  if (i18n.options && i18n.options.isClone) return; // nextjs / SSR: getting data from next.js or other ssr stack

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.initializedStoreOnce = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useTranslation.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useTranslation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // assert we have the needed i18nInstance
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using initReactI18next');
    var retNotReady = [function (k) {
      return k;
    }, {}, true];

    retNotReady.t = function (k) {
      return k;
    };

    retNotReady.i18n = {};
    retNotReady.ready = true;
    return retNotReady;
  }

  var i18nOptions = (0, _objectSpread2.default)({}, (0, _context.getDefaults)(), i18n.options.react);
  var _props$useSuspense = props.useSuspense,
      useSuspense = _props$useSuspense === void 0 ? i18nOptions.useSuspense : _props$useSuspense; // prepare having a namespace

  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation']; // report namespaces as used

  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces); // are we ready? yes if all namespaces in first language are loaded already (either with data or empty object on failed load)

  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0, _utils.hasLoadedNamespace)(n, i18n);
  }); // binding t function to namespace (acts also as rerender trigger)

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = (0, _react.useState)(getT()),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1]; // seems we can't have functions as value -> wrap it in obj


  (0, _react.useEffect)(function () {
    var isMounted = true;
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore; // if not ready and not using suspense load the namespaces
    // in side effect and do not call resetT if unmounted

    if (!ready && !useSuspense) {
      (0, _utils.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted) setT(getT());
    } // bind events to trigger change, like languageChanged


    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset); // unbinding on unmount

    return function () {
      isMounted = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]); // re-run effect whenever list of namespaces changes

  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready; // return hook stuff if ready

  if (ready) return ret; // not yet loaded namespaces -> load them -> and return if useSuspense option set false

  if (!ready && !useSuspense) return ret; // not yet loaded namespaces -> load them -> and trigger suspense

  throw new Promise(function (resolve) {
    (0, _utils.loadNamespaces)(i18n, namespaces, function () {
      setT(getT());
      resolve();
    });
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.loadNamespaces = loadNamespaces;
exports.hasLoadedNamespace = hasLoadedNamespace;
exports.getDisplayName = getDisplayName;

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
} // not needed right now
//
// export function deprecated(...args) {
//   if (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
//     if (typeof args[0] === 'string') args[0] = `deprecation warning -> ${args[0]}`;
//     warnOnce(...args);
//   }
// }


function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    // delay ready if not yet initialized i18n instance
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        // due to emitter removing issue in i18next we need to delay remove
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function hasLoadedNamespace(ns, i18n) {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1]; // we're in cimode so this shall pass

  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  }; // loaded -> SUCCESS


  if (i18n.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

  if (!i18n.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withSSR.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withSSR.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSSR = withSSR;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = (0, _objectWithoutProperties2.default)(_ref, ["initialI18nStore", "initialLanguage"]);
      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
      return _react.default.createElement(WrappedComponent, (0, _objectSpread2.default)({}, rest));
    }

    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withTranslation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withTranslation.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = withTranslation;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(props, ref) {
      var _useTranslation = (0, _useTranslation3.useTranslation)(ns, props),
          _useTranslation2 = (0, _slicedToArray2.default)(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = (0, _objectSpread2.default)({}, props, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && ref) {
        passDownProps.ref = ref;
      }

      return _react.default.createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    return options.withRef ? _react.default.forwardRef(I18nextWithTranslation) : I18nextWithTranslation;
  };
}

/***/ }),

/***/ "./pages/myServices.js":
/*!*****************************!*\
  !*** ./pages/myServices.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_common_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/common/layout */ "./components/common/layout.js");
/* harmony import */ var _components_serviceItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/serviceItem */ "./components/serviceItem.js");
/* harmony import */ var _components_deleteServiceModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/deleteServiceModal */ "./components/deleteServiceModal.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
















var MyServices =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MyServices, _React$Component);

  function MyServices(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MyServices);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MyServices).call(this, props));
    _this.state = {
      deleteModalOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MyServices, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.readDeployments({
        namespace: _config_config__WEBPACK_IMPORTED_MODULE_5__["namespace"]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var deleteModalOpen = this.state.deleteModalOpen;
      var deployments = this.props.deployments;
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_common_layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Container"], {
        className: "myServicesContainer",
        fluid: true
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "basicRowSetting justify-content-center"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xl: "4",
        lg: "6",
        md: "6",
        sm: "6",
        xs: "10",
        className: "myServicesServiceItemCol"
      }, deployments.length !== 0 && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_serviceItem__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onDeleteClick: function onDeleteClick() {
          _this2.setState({
            deleteModalOpen: true
          });
        }
      }), deployments.length === 0 && " \u0633\u0631\u0648\u06CC\u0633 \u0648\u062C\u0648\u062F \u0646\u062F\u0627\u0631\u062F")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_deleteServiceModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        open: deleteModalOpen,
        toggle: function toggle() {
          _this2.setState({
            deleteModalOpen: false
          });
        }
      })));
    }
  }]);

  return MyServices;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(_ref) {
  var K8sRead = _ref.K8sRead;
  var deployments = K8sRead.deployments;
  return {
    deployments: deployments
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])()(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, {
  readDeployments: _actions__WEBPACK_IMPORTED_MODULE_14__["readDeployments"]
})(MyServices)));

/***/ }),

/***/ "./static/images/header/ar.png":
/*!*************************************!*\
  !*** ./static/images/header/ar.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ar-a26e10bc38bef1e7a8bedd4a9193a5bf.png";

/***/ }),

/***/ "./static/images/header/arrows.png":
/*!*****************************************!*\
  !*** ./static/images/header/arrows.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAMAAAAF48UCAAAAZlBMVEUAAACWlpacnJyenp6bm5uenp6bm5uZmZmbm5ucnJybm5udnZ2ampqcnJybm5ucnJyampqcnJyampqbm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5ubm5v///8H+v0JAAAAIHRSTlMAERIVFyIzPD0+RUZHS09QUVpbXNbc3eTy8/b3+Pn6/MXSa9AAAAABYktHRCHEbA0WAAAAWklEQVQI11WOVw7AIAxD3T1p6Z6U3P+UJVAk+r5eJNsKYBBLjY9Bk+qcjpqIVM86sRI9EpAPOW6BlTwz4swTISTNPckvH+6gvaweFTeak7V0dXPshd8Sm/3zBZAuCfVuX5OCAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/header/en.png":
/*!*************************************!*\
  !*** ./static/images/header/en.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/header/fa.png":
/*!*************************************!*\
  !*** ./static/images/header/fa.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/images/header/sidebar.png":
/*!******************************************!*\
  !*** ./static/images/header/sidebar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAjCAMAAADlnnmAAAAAmVBMVEUAAAD////////////////////////////////////////////////9///y+fny+fny+fnx+vry+vr0+/v3/PzZ8PDn9vbw+vrO7ez1+/vd8vL1+/v7/v6S1tX7/f38/v78/v79/v4An50Bn50QpaMRpaQSpqTE2C7I2zzK3ELM3UrN3k7O7ObR4Fvd8u3m9e3v+PLz+vX////0JNudAAAAInRSTlMAAQUHDBEYIiUnLzc8e4mKi8vc5fHy9PX3+Pn5+vv7+/39mFzt/AAAAAFiS0dEMkDSTMgAAACiSURBVDjLYxCQMSIByPAxyKsokQBU5RiMlPQMiQZ6SkZADQbaGkQCbQOIBk11IoEmVIOuFpFAF6JBR59ooAPUIKdKSiipyTDwK5ISD4p8DMMBjCa+0cQ3WBOfMAdYFbOgApGJT5YXrIFHVBmR+KQk8QARLrAGFiFpEE8KHNPinKy4ARPU5YwgDqc4RAMbsf5lg2rgZicScEM0SIgRDSTokfgA+nS4Dc7cMhgAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/myservices/namespace.png":
/*!************************************************!*\
  !*** ./static/images/myservices/namespace.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAbCAMAAAC+/9RaAAABvFBMVEUAAAAAAACAgIBVVVWAgIBmZmZVVYBgYIBVcXFmZoBdXXRiYnZbbYBmZndgYHBaaXhjY3FmZnNhYXldaHRcZnpeaHthYXtjY3NgaHhdZHRiYnhfZnVgZ3VeZXlgZnlhZ3lfZXdgZndeZHRiZ3deY3hhZnViZ3ZfY3lgZHVhZXVfZ3ZiZXhfZnhhZXdeZXdhZXVgY3dfZXZhZHdgZnZeZXhgZnhhZHdgZXZfZHdhZnZhZHZgZXhgZXdfZHhgZXZhZnZfZnZgZXdhZnhfZndgZXhhZXZfZXdgZHZgZnhhZHhgZHdgZXZgZXdgZndgZXdhZHhfZXhgZXZhZnZfZHZfZndhZXdgZXhfZndgZXhgZHdgZnZgZXdfZXdgZXdgZXdhZXhfZXhgZXZgZHZgZHdgZHdgZXhgZXZgZXdhZHZgZXdgZXdgZXdfZHdhZndgZXdfZnZgZXdgZXdgZndgZXdgZXdfZXdgZXdgZndgZXdgZXhgZnZfZXdgZXdgZXdgZXdgZXdgZXdfZXdgZXdgZXdgZXdgZXdfZXdgZXdgZXdgZXdgZXdgZXdgZXdgZXdfZXdgZXdgZXdgZXdgZXf///9Qg20mAAAAknRSTlMAAQIDBAUGCAkKCw0ODxAREhQVFhkbHR8gISIjJSYoKistLi8xMjQ7PT9DREZHSUxNTk9QUVVcXV5fYWJlZmpsbm9xdnd5fn+AhIeIjY+QkZOXmZueoaKjpKWoqqussLGztbe8wcLExcbHyMnLztLT1dfY2drb3N3e4OLj5OXo6err7fDx8vP09fb3+Pn6+/z9/trVFUcAAAABYktHRJPhA9+2AAABUklEQVQoz73S1z9CARQH8F9UdkZmIpTIyE72XoXIntkzIiPZcSOj273nL/Zykcar83Z+3895Oj/gZ9TLvolshI/Wxp+PeT6teSF57Q4d1IogNV5ya6VBuW6T6NkQCwDxXdeBBZWQV26RvbF8gy7aJAAgbXdxy2oAVXu0XQ0A2lXe3RkHAOLmU95WDD9tpAnHJYvcXW8iACid5ADt+7xmuWCFM+zjQHLRPOs+dIKMcpPXN54lmML6+cKdtUpMTpARSB16+pjMBQBoVjgajAEEAZL67v3TSpSt80ctVI8gAeK7bwIOsteJUkIFkI5QE4AIAj1lAIh710URyBBN8M/it1eHi9jgOkbFLh3WiP6IpO2Ct6kBaJb4E6P4RxL6Hz4siu+XzQauOsTQUwZkw543S05QR/KtrLungQrMDDMsD+mVao5liHkdzYzQxfyp25H03/ULcgZm0oEvB0UAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/sidebar/home.png":
/*!****************************************!*\
  !*** ./static/images/sidebar/home.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAMAAACXfxyGAAABL1BMVEUAAAAA//8AqqoAgIAAlZUAnZ0ApKQAmZkAn58AoaEAmZkAoqIAm5sAn58AoaEAnp4AoKAAn58AnZ0AopsAnp4An58AoZwAoJsAoJwAnp4Anp4Anp4Anp4An5wAoJ0AoZ0AoJ0Anp4AnpwAoJ4An50Anp4An5wAn50An5wAoJ4AoJwAnpwAn50An50An50An54AoJ0An5wAn54AoJ0An50An50Anp0An500r4AAoJ0An50Anp0gqIsAn50gp4tdu2kAn50An50Anp0An54ap5Abp44An50XppGUyUqXy0cAn5wGoZkAn50GoZoAn50An50An50An50An50An50Cn5wAn5200jcAn5221TUAn50Bn5wAn50An50An50An50An50An50An50An53E2C7///9cdrEnAAAAYnRSTlMAAQMEDA0ODxATFBYXGBsdIyUnKSotMTM7P0RHTE1OUVtcX2ZoaWptb3aGiYqUl5ieqKqrrK+xuLm7vL6/wMDCxMXGx8fHyMnW2Nzc3d7f4OLk5ejo6e3v7/Dw8vT19vj8/hyFPWQAAAABYktHRGTC2rgJAAAA7UlEQVQoz+XQ11rCQBRF4R1sGBQbGnsvgD2CYu8Nu6hgCeLK+7+DFxolmDyB62rm+y9mzpGq6z7cT0gatW3bTqmmSOodyklDtwA0+LV9j8LQyCMbbfdXpdIp0Wo0Jt/ImFIsS7F84brHPo6vURz7Oo4/8/DkY2PilWzMu7Ws8rJ79MtmBmfaqHpoxsH54eECBx3+b3aewKAkqXEJNiO1Q9Zt87FQL/XdkGdZf1ohz2Wv7irpeDC3zlauNdAjM5ijsvolhfP3XB4nLMuyusI4CQBTITzHVi63QzqUz1337P9wM4E1eetfXA9oXpI+AVerWTfP8Rz0AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/sidebar/myServices.png":
/*!**********************************************!*\
  !*** ./static/images/sidebar/myServices.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAkCAYAAAAHKVPcAAAABmJLR0QA/wD/AP+gvaeTAAAE4klEQVRYhe2WW2yURRTHf2e+3W5Ll1IK2iBQBAXsA0gISMCoEXzgpvGCJURT2C0F8YGIQFAD2GgC+GYMCHXZbrcaiJhIDImVBLmoqSJgTLiYKGi4COWWSu/b3W+OD4WWBVvYheqL/+R7OTPzP785M9/kCD2pbdsyaGpYC8wGBl43chHRL3DldUpKGkyPQjTWrwaZBGYmGbE8MmJ5iKwAfKgUYuR9AE+PQoh5FmUpwcDPHbFIeBCWGUADRvcCJT0MoX0w1AMQDU/DqhIoWQxAKDQIY3Lh+kpUbp4BZipWM7p31lrE2UggUHvbMFWhQqxzCiduO2Jerw91AWi/E9HQaFQ+RXERqev4jLoI8xEZ0RmTSWCjtw2gGsQ1+/E2n6W49BcAyst7oe7Wa1PaK+E6IxAOg2zCmIvMnXsZgEi4CnQH2b2LKCpqawcOTwS23T6EFGGZzkuv1l1XhWxEj6CM76yEWAEdAvYHXHcckUgm0Wg/EnY5J8/M6gBIR4Z5lJR8B8DH5QOoDC8lGLyImo3JlWhXPiKLsFqD6C5cdy+lpSuTDMvKDEppihi1HQAJz25Eq4lERoHd0cnZIfkRV7diqEa5jD/nnSQrVWHI4E0oRSlCQDh8HwnPHpB9uLIF7B5EPvsHCM3G8BXoFRqbipKOQFWojGwEpiAEUwKwvIxhN9AX4SyGXcBZsA3XpgiRSCbYt4BVwAXQZUBrspOZimgx8AZIJuhrqJlMIHC4u/yZ0Y8ujPSf79vH02JvHGtxPXLwSoGjgfmOJ8uJVfudtkfyffX1QCawvgvPZmA1gFX4tSn/UKKiYjrB4K6uIET02MO9/3xsQUHNTY/i9trReqRh4IkWwBO3ZsLiB/Zljcy+0N2mbtJ7v0+JH6ovmAR0CdGizpKt58Z+823dMJPjicm1eKvr0RPN/Z0E8gqA+Co3L4uja62alJ5wn+OejKGPU7zwVLcTQ6F8PDIFMf7OoLZiEntvufZ//ReSW0+5hTZs8JMrXlx/G8XFTf8uRDT8HJY3gXFXfSzKfhzeZW5JdSpW6bV3kfAHWMqBLWCGkRHLQ2U46OdYPqFy85qeh4BaLGMQToMtp833Peh6HDmKyhiUK6mYpX8ckdDzYMLAGgxHUBmL6gqwzxAo3ZuK1R30mJ4v8XqHEG8ZizovYNmOmAJOnm5M1enO/45IxTpQHyIJ5gWXp2PRPUQkMh6AQOBAOuZJCoXycZxRxOMHWLgw6c50fTErKgJgd4H9mspw8R0BbNjgx2sOIlqJ17MH1aTN31yJaHgirs7AyGxUrhJrDsqetCFE+oPOBLYA84AwsJ+GpioWL44lQ1RUzPE6ieiTeb/Ze3yNvrST3kJx67g1dUPbLif8x1p8fSckQWRVbTq98sGdg57IO9FT+TtB1OHFQ4HmS272rKQ70eJ6Bxam2NykK6+4jMw+L1hG3vhOCCgAOy8+RPWlQnKcGKuG76QpkcG6E0/Rqh7mDPiJCbkn7xhE2s+h626qIKuOyf2O4xEXj1gynTiP9v0DFSHf19DVsrSUBJFh3L9qYzm59/oaKfSfp9B/vmMs0yR4Ov/IXU1+pjXXgp5NgrBWP3z7+LQlCwbXZGWaxF1NeKNq6oa2nWvNaabNrU7+RcvKjLl/4KJeTnyWqO3VYwQiGrPeo22up4xg8PTfsxPY1KI5en8AAAAASUVORK5CYII="

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/myServices.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/heydar/Desktop/bachelor_project/Dashboard/pages/myServices.js */"./pages/myServices.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "html-parse-stringify2":
/*!****************************************!*\
  !*** external "html-parse-stringify2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-sidebar":
/*!********************************!*\
  !*** external "react-sidebar" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sidebar");

/***/ }),

/***/ "react-sizes":
/*!******************************!*\
  !*** external "react-sizes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sizes");

/***/ }),

/***/ "react-with-direction/dist/DirectionProvider":
/*!**************************************************************!*\
  !*** external "react-with-direction/dist/DirectionProvider" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-with-direction/dist/DirectionProvider");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=myServices.js.map