"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkgolden_fan_shop"] = self["webpackChunkgolden_fan_shop"] || []).push([["client_src_components_relatedProductsAndYourOutfit_RelatedCard_jsx"],{

/***/ "./client/src/components/relatedProductsAndYourOutfit/ComparisonTable.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/relatedProductsAndYourOutfit/ComparisonTable.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar ComparisonTable = function ComparisonTable(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n    _useState2 = _slicedToArray(_useState, 2),\n    primaryName = _useState2[0],\n    setPrimaryName = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    _useState4 = _slicedToArray(_useState3, 2),\n    fullListFeatures = _useState4[0],\n    setFullListFeatures = _useState4[1];\n  // const [parsePrimaryInfo, setParsePrimaryInfo] = useState({});\n  // const [parseRelatedInfo, setParseRelatedInfo] = useState({});\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var compareMaster = [];\n    var compareMasterFiltered = [];\n    (function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(p1, r2) {\n        var myAsyncParseInfo, parsePrimaryInfo, parseRelatedInfo;\n        return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                myAsyncParseInfo = /*#__PURE__*/function () {\n                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(str) {\n                    return _regeneratorRuntime().wrap(function _callee$(_context) {\n                      while (1) {\n                        switch (_context.prev = _context.next) {\n                          case 0:\n                            return _context.abrupt(\"return\", JSON.parse(str));\n                          case 1:\n                          case \"end\":\n                            return _context.stop();\n                        }\n                      }\n                    }, _callee);\n                  }));\n                  return function myAsyncParseInfo(_x4) {\n                    return _ref2.apply(this, arguments);\n                  };\n                }();\n                _context3.prev = 1;\n                _context3.next = 4;\n                return myAsyncParseInfo(p1);\n              case 4:\n                parsePrimaryInfo = _context3.sent;\n                _context3.next = 7;\n                return myAsyncParseInfo(r2);\n              case 7:\n                parseRelatedInfo = _context3.sent;\n                setPrimaryName(parsePrimaryInfo[0].namePrimary);\n                (function () {\n                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(cb) {\n                    var i, objP, j, objR, bothRow, pRow, rRow;\n                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n                      while (1) {\n                        switch (_context2.prev = _context2.next) {\n                          case 0:\n                            try {\n                              for (i = 0; i < parsePrimaryInfo.length; i++) {\n                                objP = parsePrimaryInfo[i];\n                                for (j = 0; j < parseRelatedInfo.length; j++) {\n                                  objR = parseRelatedInfo[j];\n                                  if (objP.featurePrimary === objR.feature && objP.valuePrimary === objR.value && objP.valuePrimary !== null) {\n                                    bothRow = [1, objP.featurePrimary, objP.valuePrimary, 1];\n                                    compareMaster.push(bothRow);\n                                  }\n                                  if (objP.featurePrimary === objR.feature && objP.valuePrimary === objR.value && objP.valuePrimary === null) {\n                                    bothRow = [1, objP.featurePrimary, '', 1];\n                                    compareMaster.push(bothRow);\n                                  }\n                                }\n                              }\n                              for (i = 0; i < parsePrimaryInfo.length; i++) {\n                                objP = parsePrimaryInfo[i];\n                                if (objP.valuePrimary !== null) {\n                                  pRow = [1, objP.featurePrimary, objP.valuePrimary, 0];\n                                  compareMaster.push(pRow);\n                                } else {\n                                  pRow = [1, objP.featurePrimary, '', 0];\n                                  compareMaster.push(pRow);\n                                }\n                              }\n                              for (j = 0; j < parseRelatedInfo.length; j++) {\n                                objR = parseRelatedInfo[j];\n                                if (objR.value !== null) {\n                                  rRow = [0, objR.feature, objR.value, 1];\n                                  compareMaster.push(rRow);\n                                } else {\n                                  rRow = [0, objR.feature, '', 1];\n                                  compareMaster.push(rRow);\n                                }\n                              }\n                            } catch (err) {\n                              console.error(err);\n                            } finally {\n                              cb(null);\n                            }\n                          case 1:\n                          case \"end\":\n                            return _context2.stop();\n                        }\n                      }\n                    }, _callee2);\n                  }));\n                  return function (_x5) {\n                    return _ref3.apply(this, arguments);\n                  };\n                })()(function (err) {\n                  if (err) {\n                    throw err;\n                  } else {\n                    for (var i = 0; i < compareMaster.length; i++) {\n                      var currentCompareMaster = compareMaster[i];\n                      if (compareMasterFiltered.length === 0) {\n                        compareMasterFiltered.push(currentCompareMaster);\n                      } else {\n                        for (var j = 0; j < compareMasterFiltered.length; j++) {\n                          var currentCompareMasterFiltered = compareMasterFiltered[j];\n                          if (currentCompareMasterFiltered[1] === currentCompareMaster[1] && currentCompareMasterFiltered[2] === currentCompareMaster[2]) {\n                            break;\n                          }\n                          if (compareMasterFiltered.length - 1 === j) {\n                            compareMasterFiltered.push(currentCompareMaster);\n                          }\n                        }\n                      }\n                    }\n                  }\n                });\n                _context3.next = 15;\n                break;\n              case 12:\n                _context3.prev = 12;\n                _context3.t0 = _context3[\"catch\"](1);\n                console.error(_context3.t0);\n              case 15:\n                _context3.prev = 15;\n                setFullListFeatures(compareMasterFiltered);\n                return _context3.finish(15);\n              case 18:\n              case \"end\":\n                return _context3.stop();\n            }\n          }\n        }, _callee3, null, [[1, 12, 15, 18]]);\n      }));\n      return function (_x2, _x3) {\n        return _ref.apply(this, arguments);\n      };\n    })()(props.featuresPrimaryProductString, props.featuresRelatedProductString);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n    widgetname: \"Related/YourOutfit\",\n    className: \"row\",\n    \"data-testid\": \"CompareTableTest\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      widgetname: \"Related/YourOutfit\",\n      className: \"compareLeft\",\n      children: \"COMPARING\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      widgetname: \"Related/YourOutfit\",\n      className: \"compareLeftName\",\n      children: primaryName\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n      widgetname: \"Related/YourOutfit\",\n      className: \"compareRightName\",\n      children: props.related_name\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"br\", {}), fullListFeatures.map(function (item, index) {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        widgetname: \"Related/YourOutfit\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"compareLeft\",\n          style: {\n            opacity: item[0]\n          },\n          children: \"\\u2713\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"compareMiddleColumn\",\n          children: [\" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n            widgetname: \"Related/YourOutfit\",\n            className: \"boldFont\",\n            children: item[1]\n          }), \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n            widgetname: \"Related/YourOutfit\",\n            children: ' ' + item[2]\n          }), \" \"]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"compareRight\",\n          style: {\n            opacity: item[3]\n          },\n          children: \"\\u2713\"\n        })]\n      }, index);\n    })]\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComparisonTable);\n\n//# sourceURL=webpack://golden-fan-shop/./client/src/components/relatedProductsAndYourOutfit/ComparisonTable.jsx?");

/***/ }),

/***/ "./client/src/components/relatedProductsAndYourOutfit/RelatedCard.jsx":
/*!****************************************************************************!*\
  !*** ./client/src/components/relatedProductsAndYourOutfit/RelatedCard.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Popup_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Popup.jsx */ \"./client/src/components/Popup.jsx\");\n/* harmony import */ var _ComparisonTable_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComparisonTable.jsx */ \"./client/src/components/relatedProductsAndYourOutfit/ComparisonTable.jsx\");\n/* harmony import */ var _reviews_ProductRating_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviews/ProductRating.jsx */ \"./client/src/components/reviews/ProductRating.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _App_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../App.jsx */ \"./client/src/App.jsx\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n// import getAverageRating from '../../index.jsx';\n\n\n\n\nvar RelatedCard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {\n  // const [formView, setFormView] = useState(false);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n    _useState2 = _slicedToArray(_useState, 2),\n    isOpen = _useState2[0],\n    setIsOpen = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    _useState4 = _slicedToArray(_useState3, 2),\n    imgError = _useState4[0],\n    setImgError = _useState4[1];\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    _useState6 = _slicedToArray(_useState5, 2),\n    ratingRelatedCard = _useState6[0],\n    setRatingRelatedCard = _useState6[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get('/getProductReviews', {\n      params: {\n        id: props.related_id\n      }\n    }).then(function (response) {\n      var reviews = response.data.results;\n      var average = (0,_App_jsx__WEBPACK_IMPORTED_MODULE_5__.getAverageRating)(reviews);\n      setRatingRelatedCard(average);\n    })[\"catch\"](function (error) {});\n  }, []);\n  var togglePopup = function togglePopup(event) {\n    event.stopPropagation();\n    // event.stopImmediatePropagation();\n    setIsOpen(!isOpen);\n  };\n  var combineRelatedFeatures = [];\n\n  // Object entries/values (look into)\n  for (var key in props) {\n    if (key.length === 1) {\n      combineRelatedFeatures.push(props[key]);\n    }\n  }\n  var onClickNavigate = function onClickNavigate(e) {\n    // console.log(\"🚀 ~ file: RelatedCard.jsx:44 ~ onClickNavigate ~ e\", e)\n    // e.preventDefault();\n    props.onClickNavigateToNewProductPage(props.related_id);\n  };\n  var hideImgWhenError = function hideImgWhenError(e) {\n    if (imgError) {\n      setImgError(false);\n      e.target.src = 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80';\n    }\n    ;\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n    widgetname: \"Related/YourOutfit\",\n    className: \"productCard\",\n    ref: ref,\n    \"data-testid\": \"testRelatedCard\",\n    children: [isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Popup_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ComparisonTable_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          related_name: props.related_name,\n          featuresPrimaryProductString: props.featuresPrimaryProductString,\n          featuresRelatedProductString: JSON.stringify(combineRelatedFeatures)\n        })\n      }),\n      handleClose: togglePopup\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"button\", {\n      widgetname: \"Related/YourOutfit\",\n      id: \"star-button-compare\",\n      onClick: togglePopup,\n      className: \"star\",\n      children: \"\\u2605\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"a\", {\n      widgetname: \"Related/YourOutfit\",\n      href: '/ip/' + props.related_id,\n      style: {\n        textDecoration: 'none'\n      },\n      onClick: onClickNavigate,\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n        widgetname: \"Related/YourOutfit\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"img\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"productImageInCard\",\n          src: props.related_thumbnail ? props.related_thumbnail : 'https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/9/9b/Reality_Stone_VFX.png/revision/latest?cb=20190427012609',\n          alt: \"...\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n        widgetname: \"Related/YourOutfit\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          style: {\n            fontSize: 12\n          },\n          className: \"lineSpaceCard\",\n          children: props.related_category.toUpperCase()\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"boldFont lineSpaceCard\",\n          children: props.related_name\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          style: {\n            fontSize: 12\n          },\n          className: \"lineSpaceCard\",\n          children: [\"$\", props.related_price]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          widgetname: \"Related/YourOutfit\",\n          className: \"lineSpaceCard\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_reviews_ProductRating_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            rating: ratingRelatedCard\n          })\n        })]\n      })]\n    })]\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RelatedCard);\n\n//# sourceURL=webpack://golden-fan-shop/./client/src/components/relatedProductsAndYourOutfit/RelatedCard.jsx?");

/***/ })

}]);