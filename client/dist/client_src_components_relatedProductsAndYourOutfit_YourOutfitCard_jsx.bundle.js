"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgolden_fan_shop"] = self["webpackChunkgolden_fan_shop"] || []).push([["client_src_components_relatedProductsAndYourOutfit_YourOutfitCard_jsx"],{

/***/ "./client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reviews_ProductRating_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reviews/ProductRating.jsx */ \"./client/src/components/reviews/ProductRating.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../App.jsx */ \"./client/src/App.jsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n// import getAverageRating from '../../index.jsx';\n\n\n\nvar YourOutfitCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState2 = _slicedToArray(_useState, 2),\n    ratingYourOutfitCard = _useState2[0],\n    setRatingYourOutfitCard = _useState2[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/getProductReviews', {\n      params: {\n        id: props.current_id\n      }\n    }).then(function (response) {\n      var reviews = response.data.results;\n      var average = (0,_App_jsx__WEBPACK_IMPORTED_MODULE_3__.getAverageRating)(reviews);\n      setRatingYourOutfitCard(average);\n    })[\"catch\"](function (error) {});\n  }, []);\n  var onClickDeleteProduct = function onClickDeleteProduct(event) {\n    event.stopPropagation();\n    props.onClickDeleteProductYourOutfit(props.current_id);\n  };\n  var onClickNavigate = function onClickNavigate() {\n    props.onClickNavigateToNewProductPage(props.current_id);\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n    widgetname: \"Related/YourOutfit\",\n    className: \"productCard\",\n    onClick: onClickNavigate,\n    ref: ref,\n    \"data-testid\": \"testYourOutfitCard\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"a\", {\n      widgetname: \"Related/YourOutfit\",\n      href: props.current_id ? '/ip/' + props.current_id : null,\n      style: {\n        textDecoration: 'none'\n      },\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"img\", {\n        widgetname: \"Related/YourOutfit\",\n        className: \"productImageInCard\",\n        src: props.current_thumbnail ? props.current_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609',\n        alt: \"...\"\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n        widgetname: \"Related/YourOutfit\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          style: {\n            fontSize: 12\n          },\n          className: \"lineSpaceCard\",\n          children: props.current_category ? props.current_category.toUpperCase() : null\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"boldFont lineSpaceCard\",\n          children: props.current_name ? props.current_name : null\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          style: {\n            fontSize: 12\n          },\n          className: \"lineSpaceCard\",\n          children: [\"$\", props.current_price ? props.current_price : null]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"lineSpaceCard\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_reviews_ProductRating_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            rating: ratingYourOutfitCard\n          })\n        })]\n      })]\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"button\", {\n      onClick: onClickDeleteProduct,\n      \"aria-label\": \"remove outfit icon\",\n      className: \"close-icon-yourOutfit\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(\"div\", {\n        className: \"x-icon\"\n      })\n    })]\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YourOutfitCard);\n\n//# sourceURL=webpack://golden-fan-shop/./client/src/components/relatedProductsAndYourOutfit/YourOutfitCard.jsx?");

/***/ })

}]);