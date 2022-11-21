(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b ||= {})
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          "default": obj
        };
      }
      module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/defineProperty.js
  var require_defineProperty = __commonJS({
    "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }
      module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/classCallCheck.js
  var require_classCallCheck = __commonJS({
    "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/createClass.js
  var require_createClass = __commonJS({
    "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        Object.defineProperty(Constructor, "prototype", {
          writable: false
        });
        return Constructor;
      }
      module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
      function _typeof(obj) {
        "@babel/helpers - typeof";
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
          return typeof obj2;
        } : function(obj2) {
          return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(obj);
      }
      module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/setPrototypeOf.js
  var require_setPrototypeOf = __commonJS({
    "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
      function _setPrototypeOf(o, p) {
        module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
          o2.__proto__ = p2;
          return o2;
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _setPrototypeOf(o, p);
      }
      module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/inherits.js
  var require_inherits = __commonJS({
    "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
      var setPrototypeOf = require_setPrototypeOf();
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        Object.defineProperty(subClass, "prototype", {
          writable: false
        });
        if (superClass)
          setPrototypeOf(subClass, superClass);
      }
      module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/assertThisInitialized.js
  var require_assertThisInitialized = __commonJS({
    "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
      function _assertThisInitialized(self2) {
        if (self2 === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self2;
      }
      module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
  var require_possibleConstructorReturn = __commonJS({
    "node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"(exports, module) {
      var _typeof = require_typeof()["default"];
      var assertThisInitialized = require_assertThisInitialized();
      function _possibleConstructorReturn(self2, call) {
        if (call && (_typeof(call) === "object" || typeof call === "function")) {
          return call;
        } else if (call !== void 0) {
          throw new TypeError("Derived constructors may only return object or undefined");
        }
        return assertThisInitialized(self2);
      }
      module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/getPrototypeOf.js
  var require_getPrototypeOf = __commonJS({
    "node_modules/@babel/runtime/helpers/getPrototypeOf.js"(exports, module) {
      function _getPrototypeOf(o) {
        module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
          return o2.__proto__ || Object.getPrototypeOf(o2);
        }, module.exports.__esModule = true, module.exports["default"] = module.exports;
        return _getPrototypeOf(o);
      }
      module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@math.gl/core/dist/es5/lib/assert.js
  var require_assert = __commonJS({
    "node_modules/@math.gl/core/dist/es5/lib/assert.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = assert;
      function assert(condition, message) {
        if (!condition) {
          throw new Error("math.gl assertion ".concat(message));
        }
      }
    }
  });

  // node_modules/@math.gl/core/dist/es5/lib/common.js
  var require_common = __commonJS({
    "node_modules/@math.gl/core/dist/es5/lib/common.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.configure = configure;
      exports.formatValue = formatValue;
      exports.isArray = isArray;
      exports.clone = clone;
      exports.toRadians = toRadians;
      exports.toDegrees = toDegrees;
      exports.radians = radians;
      exports.degrees = degrees;
      exports.sin = sin;
      exports.cos = cos;
      exports.tan = tan;
      exports.asin = asin;
      exports.acos = acos;
      exports.atan = atan;
      exports.clamp = clamp;
      exports.lerp = lerp;
      exports.equals = equals;
      exports.exactEquals = exactEquals;
      exports.withEpsilon = withEpsilon;
      exports.config = void 0;
      var _typeof2 = _interopRequireDefault(require_typeof());
      var _assert = _interopRequireDefault(require_assert());
      var RADIANS_TO_DEGREES = 1 / Math.PI * 180;
      var DEGREES_TO_RADIANS = 1 / 180 * Math.PI;
      var config = {
        EPSILON: 1e-12,
        debug: false,
        precision: 4,
        printTypes: false,
        printDegrees: false,
        printRowMajor: true
      };
      exports.config = config;
      function configure(options) {
        for (var key in options) {
          (0, _assert.default)(key in config);
          config[key] = options[key];
        }
        return config;
      }
      function formatValue(value) {
        var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$precision = _ref.precision, precision = _ref$precision === void 0 ? config.precision : _ref$precision;
        value = round(value);
        return "".concat(parseFloat(value.toPrecision(precision)));
      }
      function isArray(value) {
        return Array.isArray(value) || ArrayBuffer.isView(value) && !(value instanceof DataView);
      }
      function clone(array) {
        return "clone" in array ? array.clone() : array.slice();
      }
      function toRadians(degrees2) {
        return radians(degrees2);
      }
      function toDegrees(radians2) {
        return degrees(radians2);
      }
      function radians(degrees2, result) {
        return map(degrees2, function(degrees3) {
          return degrees3 * DEGREES_TO_RADIANS;
        }, result);
      }
      function degrees(radians2, result) {
        return map(radians2, function(radians3) {
          return radians3 * RADIANS_TO_DEGREES;
        }, result);
      }
      function sin(radians2, result) {
        return map(radians2, function(angle) {
          return Math.sin(angle);
        }, result);
      }
      function cos(radians2, result) {
        return map(radians2, function(angle) {
          return Math.cos(angle);
        }, result);
      }
      function tan(radians2, result) {
        return map(radians2, function(angle) {
          return Math.tan(angle);
        }, result);
      }
      function asin(radians2, result) {
        return map(radians2, function(angle) {
          return Math.asin(angle);
        }, result);
      }
      function acos(radians2, result) {
        return map(radians2, function(angle) {
          return Math.acos(angle);
        }, result);
      }
      function atan(radians2, result) {
        return map(radians2, function(angle) {
          return Math.atan(angle);
        }, result);
      }
      function clamp(value, min, max2) {
        return map(value, function(value2) {
          return Math.max(min, Math.min(max2, value2));
        });
      }
      function lerp(a, b, t) {
        if (isArray(a)) {
          return a.map(function(ai, i) {
            return lerp(ai, b[i], t);
          });
        }
        return t * b + (1 - t) * a;
      }
      function equals(a, b, epsilon) {
        var oldEpsilon = config.EPSILON;
        if (epsilon) {
          config.EPSILON = epsilon;
        }
        try {
          if (a === b) {
            return true;
          }
          if (isArray(a) && isArray(b)) {
            if (a.length !== b.length) {
              return false;
            }
            for (var i = 0; i < a.length; ++i) {
              if (!equals(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
          if (a && a.equals) {
            return a.equals(b);
          }
          if (b && b.equals) {
            return b.equals(a);
          }
          if (typeof a === "number" && typeof b === "number") {
            return Math.abs(a - b) <= config.EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
          }
          return false;
        } finally {
          config.EPSILON = oldEpsilon;
        }
      }
      function exactEquals(a, b) {
        if (a === b) {
          return true;
        }
        if (a && (0, _typeof2.default)(a) === "object" && b && (0, _typeof2.default)(b) === "object") {
          if (a.constructor !== b.constructor) {
            return false;
          }
          if (a.exactEquals) {
            return a.exactEquals(b);
          }
        }
        if (isArray(a) && isArray(b)) {
          if (a.length !== b.length) {
            return false;
          }
          for (var i = 0; i < a.length; ++i) {
            if (!exactEquals(a[i], b[i])) {
              return false;
            }
          }
          return true;
        }
        return false;
      }
      function withEpsilon(epsilon, func) {
        var oldPrecision = config.EPSILON;
        config.EPSILON = epsilon;
        var value;
        try {
          value = func();
        } finally {
          config.EPSILON = oldPrecision;
        }
        return value;
      }
      function round(value) {
        return Math.round(value / config.EPSILON) * config.EPSILON;
      }
      function duplicateArray(array) {
        return array.clone ? array.clone() : new Array(array.length);
      }
      function map(value, func, result) {
        if (isArray(value)) {
          var array = value;
          result = result || duplicateArray(array);
          for (var i = 0; i < result.length && i < array.length; ++i) {
            result[i] = func(value[i], i, result);
          }
          return result;
        }
        return func(value);
      }
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/base/math-array.js
  var require_math_array = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/base/math-array.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _common = require_common();
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      function _extendableBuiltin(cls) {
        function ExtendableBuiltin() {
          var instance = Reflect.construct(cls, Array.from(arguments));
          Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
          return instance;
        }
        ExtendableBuiltin.prototype = Object.create(cls.prototype, {
          constructor: {
            value: cls,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(ExtendableBuiltin, cls);
        } else {
          ExtendableBuiltin.__proto__ = cls;
        }
        return ExtendableBuiltin;
      }
      var MathArray = function(_extendableBuiltin2) {
        (0, _inherits2.default)(MathArray2, _extendableBuiltin2);
        var _super = _createSuper(MathArray2);
        function MathArray2() {
          (0, _classCallCheck2.default)(this, MathArray2);
          return _super.apply(this, arguments);
        }
        (0, _createClass2.default)(MathArray2, [{
          key: "clone",
          value: function clone() {
            return new this.constructor().copy(this);
          }
        }, {
          key: "fromArray",
          value: function fromArray(array) {
            var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = array[i + offset];
            }
            return this.check();
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var targetArray = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              targetArray[offset + i] = this[i];
            }
            return targetArray;
          }
        }, {
          key: "from",
          value: function from(arrayOrObject) {
            return Array.isArray(arrayOrObject) ? this.copy(arrayOrObject) : this.fromObject(arrayOrObject);
          }
        }, {
          key: "to",
          value: function to(arrayOrObject) {
            if (arrayOrObject === this) {
              return this;
            }
            return (0, _common.isArray)(arrayOrObject) ? this.toArray(arrayOrObject) : this.toObject(arrayOrObject);
          }
        }, {
          key: "toTarget",
          value: function toTarget(target) {
            return target ? this.to(target) : this;
          }
        }, {
          key: "toFloat32Array",
          value: function toFloat32Array() {
            return new Float32Array(this);
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.formatString(_common.config);
          }
        }, {
          key: "formatString",
          value: function formatString(opts) {
            var string = "";
            for (var i = 0; i < this.ELEMENTS; ++i) {
              string += (i > 0 ? ", " : "") + (0, _common.formatValue)(this[i], opts);
            }
            return "".concat(opts.printTypes ? this.constructor.name : "", "[").concat(string, "]");
          }
        }, {
          key: "equals",
          value: function equals(array) {
            if (!array || this.length !== array.length) {
              return false;
            }
            for (var i = 0; i < this.ELEMENTS; ++i) {
              if (!(0, _common.equals)(this[i], array[i])) {
                return false;
              }
            }
            return true;
          }
        }, {
          key: "exactEquals",
          value: function exactEquals(array) {
            if (!array || this.length !== array.length) {
              return false;
            }
            for (var i = 0; i < this.ELEMENTS; ++i) {
              if (this[i] !== array[i]) {
                return false;
              }
            }
            return true;
          }
        }, {
          key: "negate",
          value: function negate() {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = -this[i];
            }
            return this.check();
          }
        }, {
          key: "lerp",
          value: function lerp(a, b, t) {
            if (t === void 0) {
              return this.lerp(this, a, b);
            }
            for (var i = 0; i < this.ELEMENTS; ++i) {
              var ai = a[i];
              this[i] = ai + t * (b[i] - ai);
            }
            return this.check();
          }
        }, {
          key: "min",
          value: function min(vector) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = Math.min(vector[i], this[i]);
            }
            return this.check();
          }
        }, {
          key: "max",
          value: function max2(vector) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = Math.max(vector[i], this[i]);
            }
            return this.check();
          }
        }, {
          key: "clamp",
          value: function clamp(minVector, maxVector) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = Math.min(Math.max(this[i], minVector[i]), maxVector[i]);
            }
            return this.check();
          }
        }, {
          key: "add",
          value: function add() {
            for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
              vectors[_key] = arguments[_key];
            }
            for (var _i = 0, _vectors = vectors; _i < _vectors.length; _i++) {
              var _vector = _vectors[_i];
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] += _vector[i];
              }
            }
            return this.check();
          }
        }, {
          key: "subtract",
          value: function subtract() {
            for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              vectors[_key2] = arguments[_key2];
            }
            for (var _i2 = 0, _vectors2 = vectors; _i2 < _vectors2.length; _i2++) {
              var _vector2 = _vectors2[_i2];
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] -= _vector2[i];
              }
            }
            return this.check();
          }
        }, {
          key: "scale",
          value: function scale(_scale) {
            if (typeof _scale === "number") {
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] *= _scale;
              }
            } else {
              for (var _i3 = 0; _i3 < this.ELEMENTS && _i3 < _scale.length; ++_i3) {
                this[_i3] *= _scale[_i3];
              }
            }
            return this.check();
          }
        }, {
          key: "multiplyByScalar",
          value: function multiplyByScalar(scalar) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] *= scalar;
            }
            return this.check();
          }
        }, {
          key: "check",
          value: function check() {
            if (_common.config.debug && !this.validate()) {
              throw new Error("math.gl: ".concat(this.constructor.name, " some fields set to invalid numbers'"));
            }
            return this;
          }
        }, {
          key: "validate",
          value: function validate() {
            var valid = this.length === this.ELEMENTS;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              valid = valid && Number.isFinite(this[i]);
            }
            return valid;
          }
        }, {
          key: "sub",
          value: function sub(a) {
            return this.subtract(a);
          }
        }, {
          key: "setScalar",
          value: function setScalar(a) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = a;
            }
            return this.check();
          }
        }, {
          key: "addScalar",
          value: function addScalar(a) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] += a;
            }
            return this.check();
          }
        }, {
          key: "subScalar",
          value: function subScalar(a) {
            return this.addScalar(-a);
          }
        }, {
          key: "multiplyScalar",
          value: function multiplyScalar(scalar) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] *= scalar;
            }
            return this.check();
          }
        }, {
          key: "divideScalar",
          value: function divideScalar(a) {
            return this.multiplyByScalar(1 / a);
          }
        }, {
          key: "clampScalar",
          value: function clampScalar(min, max2) {
            for (var i = 0; i < this.ELEMENTS; ++i) {
              this[i] = Math.min(Math.max(this[i], min), max2);
            }
            return this.check();
          }
        }, {
          key: "elements",
          get: function get() {
            return this;
          }
        }]);
        return MathArray2;
      }(_extendableBuiltin(Array));
      exports.default = MathArray;
    }
  });

  // node_modules/@math.gl/core/dist/es5/lib/validators.js
  var require_validators = __commonJS({
    "node_modules/@math.gl/core/dist/es5/lib/validators.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.validateVector = validateVector;
      exports.checkNumber = checkNumber;
      exports.checkVector = checkVector;
      exports.deprecated = deprecated;
      var _common = require_common();
      function validateVector(v, length) {
        if (v.length !== length) {
          return false;
        }
        for (var i = 0; i < v.length; ++i) {
          if (!Number.isFinite(v[i])) {
            return false;
          }
        }
        return true;
      }
      function checkNumber(value) {
        if (!Number.isFinite(value)) {
          throw new Error("Invalid number ".concat(value));
        }
        return value;
      }
      function checkVector(v, length) {
        var callerName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        if (_common.config.debug && !validateVector(v, length)) {
          throw new Error("math.gl: ".concat(callerName, " some fields set to invalid numbers'"));
        }
        return v;
      }
      var map = {};
      function deprecated(method, version) {
        if (!map[method]) {
          map[method] = true;
          console.warn("".concat(method, " has been removed in version ").concat(version, ", see upgrade guide for more information"));
        }
      }
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/base/vector.js
  var require_vector = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/base/vector.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _mathArray = _interopRequireDefault(require_math_array());
      var _validators = require_validators();
      var _assert = _interopRequireDefault(require_assert());
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var Vector = function(_MathArray) {
        (0, _inherits2.default)(Vector2, _MathArray);
        var _super = _createSuper(Vector2);
        function Vector2() {
          (0, _classCallCheck2.default)(this, Vector2);
          return _super.apply(this, arguments);
        }
        (0, _createClass2.default)(Vector2, [{
          key: "x",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "y",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "len",
          value: function len() {
            return Math.sqrt(this.lengthSquared());
          }
        }, {
          key: "magnitude",
          value: function magnitude() {
            return this.len();
          }
        }, {
          key: "lengthSquared",
          value: function lengthSquared() {
            var length = 0;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              length += this[i] * this[i];
            }
            return length;
          }
        }, {
          key: "magnitudeSquared",
          value: function magnitudeSquared() {
            return this.lengthSquared();
          }
        }, {
          key: "distance",
          value: function distance(mathArray) {
            return Math.sqrt(this.distanceSquared(mathArray));
          }
        }, {
          key: "distanceSquared",
          value: function distanceSquared(mathArray) {
            var length = 0;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              var dist = this[i] - mathArray[i];
              length += dist * dist;
            }
            return (0, _validators.checkNumber)(length);
          }
        }, {
          key: "dot",
          value: function dot(mathArray) {
            var product = 0;
            for (var i = 0; i < this.ELEMENTS; ++i) {
              product += this[i] * mathArray[i];
            }
            return (0, _validators.checkNumber)(product);
          }
        }, {
          key: "normalize",
          value: function normalize() {
            var length = this.magnitude();
            if (length !== 0) {
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] /= length;
              }
            }
            return this.check();
          }
        }, {
          key: "multiply",
          value: function multiply() {
            for (var _len = arguments.length, vectors = new Array(_len), _key = 0; _key < _len; _key++) {
              vectors[_key] = arguments[_key];
            }
            for (var _i = 0, _vectors = vectors; _i < _vectors.length; _i++) {
              var vector = _vectors[_i];
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] *= vector[i];
              }
            }
            return this.check();
          }
        }, {
          key: "divide",
          value: function divide() {
            for (var _len2 = arguments.length, vectors = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              vectors[_key2] = arguments[_key2];
            }
            for (var _i2 = 0, _vectors2 = vectors; _i2 < _vectors2.length; _i2++) {
              var vector = _vectors2[_i2];
              for (var i = 0; i < this.ELEMENTS; ++i) {
                this[i] /= vector[i];
              }
            }
            return this.check();
          }
        }, {
          key: "lengthSq",
          value: function lengthSq() {
            return this.lengthSquared();
          }
        }, {
          key: "distanceTo",
          value: function distanceTo(vector) {
            return this.distance(vector);
          }
        }, {
          key: "distanceToSquared",
          value: function distanceToSquared(vector) {
            return this.distanceSquared(vector);
          }
        }, {
          key: "getComponent",
          value: function getComponent(i) {
            (0, _assert.default)(i >= 0 && i < this.ELEMENTS, "index is out of range");
            return (0, _validators.checkNumber)(this[i]);
          }
        }, {
          key: "setComponent",
          value: function setComponent(i, value) {
            (0, _assert.default)(i >= 0 && i < this.ELEMENTS, "index is out of range");
            this[i] = value;
            return this.check();
          }
        }, {
          key: "addVectors",
          value: function addVectors(a, b) {
            return this.copy(a).add(b);
          }
        }, {
          key: "subVectors",
          value: function subVectors(a, b) {
            return this.copy(a).subtract(b);
          }
        }, {
          key: "multiplyVectors",
          value: function multiplyVectors(a, b) {
            return this.copy(a).multiply(b);
          }
        }, {
          key: "addScaledVector",
          value: function addScaledVector(a, b) {
            return this.add(new this.constructor(a).multiplyScalar(b));
          }
        }]);
        return Vector2;
      }(_mathArray.default);
      exports.default = Vector;
    }
  });

  // node_modules/gl-matrix/cjs/common.js
  var require_common2 = __commonJS({
    "node_modules/gl-matrix/cjs/common.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setMatrixArrayType = setMatrixArrayType;
      exports.toRadian = toRadian;
      exports.equals = equals;
      exports.RANDOM = exports.ARRAY_TYPE = exports.EPSILON = void 0;
      var EPSILON = 1e-6;
      exports.EPSILON = EPSILON;
      var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
      exports.ARRAY_TYPE = ARRAY_TYPE;
      var RANDOM = Math.random;
      exports.RANDOM = RANDOM;
      function setMatrixArrayType(type) {
        exports.ARRAY_TYPE = ARRAY_TYPE = type;
      }
      var degree = Math.PI / 180;
      function toRadian(a) {
        return a * degree;
      }
      function equals(a, b) {
        return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
      }
      if (!Math.hypot)
        Math.hypot = function() {
          var y = 0, i = arguments.length;
          while (i--) {
            y += arguments[i] * arguments[i];
          }
          return Math.sqrt(y);
        };
    }
  });

  // node_modules/gl-matrix/cjs/vec2.js
  var require_vec2 = __commonJS({
    "node_modules/gl-matrix/cjs/vec2.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.clone = clone;
      exports.fromValues = fromValues;
      exports.copy = copy;
      exports.set = set;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;
      exports.ceil = ceil;
      exports.floor = floor;
      exports.min = min;
      exports.max = max2;
      exports.round = round;
      exports.scale = scale;
      exports.scaleAndAdd = scaleAndAdd;
      exports.distance = distance;
      exports.squaredDistance = squaredDistance;
      exports.length = length;
      exports.squaredLength = squaredLength;
      exports.negate = negate;
      exports.inverse = inverse;
      exports.normalize = normalize;
      exports.dot = dot;
      exports.cross = cross;
      exports.lerp = lerp;
      exports.random = random;
      exports.transformMat2 = transformMat2;
      exports.transformMat2d = transformMat2d;
      exports.transformMat3 = transformMat3;
      exports.transformMat4 = transformMat4;
      exports.rotate = rotate;
      exports.angle = angle;
      exports.zero = zero;
      exports.str = str;
      exports.exactEquals = exactEquals;
      exports.equals = equals;
      exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(2);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
        }
        return out;
      }
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }
      function fromValues(x, y) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = x;
        out[1] = y;
        return out;
      }
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }
      function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
      }
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
      }
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
      }
      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
      }
      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
      }
      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
      }
      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
      }
      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
      }
      function max2(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
      }
      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
      }
      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
      }
      function scaleAndAdd(out, a, b, scale2) {
        out[0] = a[0] + b[0] * scale2;
        out[1] = a[1] + b[1] * scale2;
        return out;
      }
      function distance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return Math.hypot(x, y);
      }
      function squaredDistance(a, b) {
        var x = b[0] - a[0], y = b[1] - a[1];
        return x * x + y * y;
      }
      function length(a) {
        var x = a[0], y = a[1];
        return Math.hypot(x, y);
      }
      function squaredLength(a) {
        var x = a[0], y = a[1];
        return x * x + y * y;
      }
      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
      }
      function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        return out;
      }
      function normalize(out, a) {
        var x = a[0], y = a[1];
        var len2 = x * x + y * y;
        if (len2 > 0) {
          len2 = 1 / Math.sqrt(len2);
        }
        out[0] = a[0] * len2;
        out[1] = a[1] * len2;
        return out;
      }
      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }
      function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
      }
      function lerp(out, a, b, t) {
        var ax = a[0], ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
      }
      function random(out, scale2) {
        scale2 = scale2 || 1;
        var r = glMatrix.RANDOM() * 2 * Math.PI;
        out[0] = Math.cos(r) * scale2;
        out[1] = Math.sin(r) * scale2;
        return out;
      }
      function transformMat2(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
      }
      function transformMat2d(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
      }
      function transformMat3(out, a, m) {
        var x = a[0], y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
      }
      function transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
      }
      function rotate(out, a, b, rad) {
        var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];
        return out;
      }
      function angle(a, b) {
        var x1 = a[0], y1 = a[1], x2 = b[0], y2 = b[1], mag = Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2), cosine = mag && (x1 * x2 + y1 * y2) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      function zero(out) {
        out[0] = 0;
        out[1] = 0;
        return out;
      }
      function str(a) {
        return "vec2(" + a[0] + ", " + a[1] + ")";
      }
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
      }
      function equals(a, b) {
        var a0 = a[0], a1 = a[1];
        var b0 = b[0], b1 = b[1];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1));
      }
      var len = length;
      exports.len = len;
      var sub = subtract;
      exports.sub = sub;
      var mul = multiply;
      exports.mul = mul;
      var div = divide;
      exports.div = div;
      var dist = distance;
      exports.dist = dist;
      var sqrDist = squaredDistance;
      exports.sqrDist = sqrDist;
      var sqrLen = squaredLength;
      exports.sqrLen = sqrLen;
      var forEach = function() {
        var vec = create();
        return function(a, stride, offset, count, fn, arg) {
          var i, l;
          if (!stride) {
            stride = 2;
          }
          if (!offset) {
            offset = 0;
          }
          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }
          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
          }
          return a;
        };
      }();
      exports.forEach = forEach;
    }
  });

  // node_modules/@math.gl/core/dist/es5/lib/gl-matrix-extras.js
  var require_gl_matrix_extras = __commonJS({
    "node_modules/@math.gl/core/dist/es5/lib/gl-matrix-extras.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.vec2_transformMat4AsVector = vec2_transformMat4AsVector;
      exports.vec3_transformMat4AsVector = vec3_transformMat4AsVector;
      exports.vec3_transformMat2 = vec3_transformMat2;
      exports.vec4_transformMat2 = vec4_transformMat2;
      exports.vec4_transformMat3 = vec4_transformMat3;
      function vec2_transformMat4AsVector(out, a, m) {
        var x = a[0];
        var y = a[1];
        var w = m[3] * x + m[7] * y || 1;
        out[0] = (m[0] * x + m[4] * y) / w;
        out[1] = (m[1] * x + m[5] * y) / w;
        return out;
      }
      function vec3_transformMat4AsVector(out, a, m) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z || 1;
        out[0] = (m[0] * x + m[4] * y + m[8] * z) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z) / w;
        return out;
      }
      function vec3_transformMat2(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        out[2] = a[2];
        return out;
      }
      function vec4_transformMat2(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      function vec4_transformMat3(out, a, m) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        out[0] = m[0] * x + m[3] * y + m[6] * z;
        out[1] = m[1] * x + m[4] * y + m[7] * z;
        out[2] = m[2] * x + m[5] * y + m[8] * z;
        out[3] = a[3];
        return out;
      }
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/vector2.js
  var require_vector2 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/vector2.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _vector = _interopRequireDefault(require_vector());
      var _common = require_common();
      var _validators = require_validators();
      var vec2 = _interopRequireWildcard(require_vec2());
      var _glMatrixExtras = require_gl_matrix_extras();
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var Vector2 = function(_Vector) {
        (0, _inherits2.default)(Vector22, _Vector);
        var _super = _createSuper(Vector22);
        function Vector22() {
          var _this;
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          (0, _classCallCheck2.default)(this, Vector22);
          _this = _super.call(this, 2);
          if ((0, _common.isArray)(x) && arguments.length === 1) {
            _this.copy(x);
          } else {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(x);
              (0, _validators.checkNumber)(y);
            }
            _this[0] = x;
            _this[1] = y;
          }
          return _this;
        }
        (0, _createClass2.default)(Vector22, [{
          key: "set",
          value: function set(x, y) {
            this[0] = x;
            this[1] = y;
            return this.check();
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            return this.check();
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(object.x);
              (0, _validators.checkNumber)(object.y);
            }
            this[0] = object.x;
            this[1] = object.y;
            return this.check();
          }
        }, {
          key: "toObject",
          value: function toObject(object) {
            object.x = this[0];
            object.y = this[1];
            return object;
          }
        }, {
          key: "ELEMENTS",
          get: function get() {
            return 2;
          }
        }, {
          key: "horizontalAngle",
          value: function horizontalAngle() {
            return Math.atan2(this.y, this.x);
          }
        }, {
          key: "verticalAngle",
          value: function verticalAngle() {
            return Math.atan2(this.x, this.y);
          }
        }, {
          key: "transform",
          value: function transform(matrix4) {
            return this.transformAsPoint(matrix4);
          }
        }, {
          key: "transformAsPoint",
          value: function transformAsPoint(matrix4) {
            vec2.transformMat4(this, this, matrix4);
            return this.check();
          }
        }, {
          key: "transformAsVector",
          value: function transformAsVector(matrix4) {
            (0, _glMatrixExtras.vec2_transformMat4AsVector)(this, this, matrix4);
            return this.check();
          }
        }, {
          key: "transformByMatrix3",
          value: function transformByMatrix3(matrix3) {
            vec2.transformMat3(this, this, matrix3);
            return this.check();
          }
        }, {
          key: "transformByMatrix2x3",
          value: function transformByMatrix2x3(matrix2x3) {
            vec2.transformMat2d(this, this, matrix2x3);
            return this.check();
          }
        }, {
          key: "transformByMatrix2",
          value: function transformByMatrix2(matrix2) {
            vec2.transformMat2(this, this, matrix2);
            return this.check();
          }
        }]);
        return Vector22;
      }(_vector.default);
      exports.default = Vector2;
    }
  });

  // node_modules/gl-matrix/cjs/vec3.js
  var require_vec3 = __commonJS({
    "node_modules/gl-matrix/cjs/vec3.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.clone = clone;
      exports.length = length;
      exports.fromValues = fromValues;
      exports.copy = copy;
      exports.set = set;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;
      exports.ceil = ceil;
      exports.floor = floor;
      exports.min = min;
      exports.max = max2;
      exports.round = round;
      exports.scale = scale;
      exports.scaleAndAdd = scaleAndAdd;
      exports.distance = distance;
      exports.squaredDistance = squaredDistance;
      exports.squaredLength = squaredLength;
      exports.negate = negate;
      exports.inverse = inverse;
      exports.normalize = normalize;
      exports.dot = dot;
      exports.cross = cross;
      exports.lerp = lerp;
      exports.hermite = hermite;
      exports.bezier = bezier;
      exports.random = random;
      exports.transformMat4 = transformMat4;
      exports.transformMat3 = transformMat3;
      exports.transformQuat = transformQuat;
      exports.rotateX = rotateX;
      exports.rotateY = rotateY;
      exports.rotateZ = rotateZ;
      exports.angle = angle;
      exports.zero = zero;
      exports.str = str;
      exports.exactEquals = exactEquals;
      exports.equals = equals;
      exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(3);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
        }
        return out;
      }
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }
      function length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return Math.hypot(x, y, z);
      }
      function fromValues(x, y, z) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }
      function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
      }
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
      }
      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
      }
      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
      }
      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
      }
      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
      }
      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
      }
      function max2(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
      }
      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
      }
      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
      }
      function scaleAndAdd(out, a, b, scale2) {
        out[0] = a[0] + b[0] * scale2;
        out[1] = a[1] + b[1] * scale2;
        out[2] = a[2] + b[2] * scale2;
        return out;
      }
      function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return Math.hypot(x, y, z);
      }
      function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return x * x + y * y + z * z;
      }
      function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return x * x + y * y + z * z;
      }
      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
      }
      function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        out[2] = 1 / a[2];
        return out;
      }
      function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var len2 = x * x + y * y + z * z;
        if (len2 > 0) {
          len2 = 1 / Math.sqrt(len2);
        }
        out[0] = a[0] * len2;
        out[1] = a[1] * len2;
        out[2] = a[2] * len2;
        return out;
      }
      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }
      function cross(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2];
        var bx = b[0], by = b[1], bz = b[2];
        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
      }
      function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
      }
      function hermite(out, a, b, c, d, t) {
        var factorTimes2 = t * t;
        var factor1 = factorTimes2 * (2 * t - 3) + 1;
        var factor2 = factorTimes2 * (t - 2) + t;
        var factor3 = factorTimes2 * (t - 1);
        var factor4 = factorTimes2 * (3 - 2 * t);
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      function bezier(out, a, b, c, d, t) {
        var inverseFactor = 1 - t;
        var inverseFactorTimesTwo = inverseFactor * inverseFactor;
        var factorTimes2 = t * t;
        var factor1 = inverseFactorTimesTwo * inverseFactor;
        var factor2 = 3 * t * inverseFactorTimesTwo;
        var factor3 = 3 * factorTimes2 * inverseFactor;
        var factor4 = factorTimes2 * t;
        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
        return out;
      }
      function random(out, scale2) {
        scale2 = scale2 || 1;
        var r = glMatrix.RANDOM() * 2 * Math.PI;
        var z = glMatrix.RANDOM() * 2 - 1;
        var zScale = Math.sqrt(1 - z * z) * scale2;
        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale2;
        return out;
      }
      function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
      }
      function transformMat3(out, a, m) {
        var x = a[0], y = a[1], z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
      }
      function transformQuat(out, a, q) {
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
        var x = a[0], y = a[1], z = a[2];
        var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
        var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
        var w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;
        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;
        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
      }
      function rotateX(out, a, b, rad) {
        var p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[0];
        r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
        r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      function rotateY(out, a, b, rad) {
        var p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      function rotateZ(out, a, b, rad) {
        var p = [], r = [];
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];
        r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
        r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
        r[2] = p[2];
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];
        return out;
      }
      function angle(a, b) {
        var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
      }
      function zero(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        return out;
      }
      function str(a) {
        return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
      }
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }
      function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2];
        var b0 = b[0], b1 = b[1], b2 = b[2];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
      }
      var sub = subtract;
      exports.sub = sub;
      var mul = multiply;
      exports.mul = mul;
      var div = divide;
      exports.div = div;
      var dist = distance;
      exports.dist = dist;
      var sqrDist = squaredDistance;
      exports.sqrDist = sqrDist;
      var len = length;
      exports.len = len;
      var sqrLen = squaredLength;
      exports.sqrLen = sqrLen;
      var forEach = function() {
        var vec = create();
        return function(a, stride, offset, count, fn, arg) {
          var i, l;
          if (!stride) {
            stride = 3;
          }
          if (!offset) {
            offset = 0;
          }
          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }
          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
          }
          return a;
        };
      }();
      exports.forEach = forEach;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/vector3.js
  var require_vector3 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/vector3.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _vector = _interopRequireDefault(require_vector());
      var _common = require_common();
      var _validators = require_validators();
      var vec3 = _interopRequireWildcard(require_vec3());
      var _glMatrixExtras = require_gl_matrix_extras();
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var ORIGIN = [0, 0, 0];
      var ZERO;
      var Vector3 = function(_Vector) {
        (0, _inherits2.default)(Vector32, _Vector);
        var _super = _createSuper(Vector32);
        function Vector32() {
          var _this;
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          (0, _classCallCheck2.default)(this, Vector32);
          _this = _super.call(this, -0, -0, -0);
          if (arguments.length === 1 && (0, _common.isArray)(x)) {
            _this.copy(x);
          } else {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(x);
              (0, _validators.checkNumber)(y);
              (0, _validators.checkNumber)(z);
            }
            _this[0] = x;
            _this[1] = y;
            _this[2] = z;
          }
          return _this;
        }
        (0, _createClass2.default)(Vector32, [{
          key: "set",
          value: function set(x, y, z) {
            this[0] = x;
            this[1] = y;
            this[2] = z;
            return this.check();
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            return this.check();
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(object.x);
              (0, _validators.checkNumber)(object.y);
              (0, _validators.checkNumber)(object.z);
            }
            this[0] = object.x;
            this[1] = object.y;
            this[2] = object.z;
            return this.check();
          }
        }, {
          key: "toObject",
          value: function toObject(object) {
            object.x = this[0];
            object.y = this[1];
            object.z = this[2];
            return object;
          }
        }, {
          key: "ELEMENTS",
          get: function get() {
            return 3;
          }
        }, {
          key: "z",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "angle",
          value: function angle(vector) {
            return vec3.angle(this, vector);
          }
        }, {
          key: "cross",
          value: function cross(vector) {
            vec3.cross(this, this, vector);
            return this.check();
          }
        }, {
          key: "rotateX",
          value: function rotateX(_ref) {
            var radians = _ref.radians, _ref$origin = _ref.origin, origin = _ref$origin === void 0 ? ORIGIN : _ref$origin;
            vec3.rotateX(this, this, origin, radians);
            return this.check();
          }
        }, {
          key: "rotateY",
          value: function rotateY(_ref2) {
            var radians = _ref2.radians, _ref2$origin = _ref2.origin, origin = _ref2$origin === void 0 ? ORIGIN : _ref2$origin;
            vec3.rotateY(this, this, origin, radians);
            return this.check();
          }
        }, {
          key: "rotateZ",
          value: function rotateZ(_ref3) {
            var radians = _ref3.radians, _ref3$origin = _ref3.origin, origin = _ref3$origin === void 0 ? ORIGIN : _ref3$origin;
            vec3.rotateZ(this, this, origin, radians);
            return this.check();
          }
        }, {
          key: "transform",
          value: function transform(matrix4) {
            return this.transformAsPoint(matrix4);
          }
        }, {
          key: "transformAsPoint",
          value: function transformAsPoint(matrix4) {
            vec3.transformMat4(this, this, matrix4);
            return this.check();
          }
        }, {
          key: "transformAsVector",
          value: function transformAsVector(matrix4) {
            (0, _glMatrixExtras.vec3_transformMat4AsVector)(this, this, matrix4);
            return this.check();
          }
        }, {
          key: "transformByMatrix3",
          value: function transformByMatrix3(matrix3) {
            vec3.transformMat3(this, this, matrix3);
            return this.check();
          }
        }, {
          key: "transformByMatrix2",
          value: function transformByMatrix2(matrix2) {
            (0, _glMatrixExtras.vec3_transformMat2)(this, this, matrix2);
            return this.check();
          }
        }, {
          key: "transformByQuaternion",
          value: function transformByQuaternion(quaternion) {
            vec3.transformQuat(this, this, quaternion);
            return this.check();
          }
        }], [{
          key: "ZERO",
          get: function get() {
            if (!ZERO) {
              ZERO = new Vector32(0, 0, 0);
              Object.freeze(ZERO);
            }
            return ZERO;
          }
        }]);
        return Vector32;
      }(_vector.default);
      exports.default = Vector3;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/vector4.js
  var require_vector4 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/vector4.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _vector = _interopRequireDefault(require_vector());
      var _common = require_common();
      var _validators = require_validators();
      var vec4 = _interopRequireWildcard(require_vec3());
      var _glMatrixExtras = require_gl_matrix_extras();
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var ZERO;
      var Vector4 = function(_Vector) {
        (0, _inherits2.default)(Vector42, _Vector);
        var _super = _createSuper(Vector42);
        function Vector42() {
          var _this;
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          var w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
          (0, _classCallCheck2.default)(this, Vector42);
          _this = _super.call(this, -0, -0, -0, -0);
          if ((0, _common.isArray)(x) && arguments.length === 1) {
            _this.copy(x);
          } else {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(x);
              (0, _validators.checkNumber)(y);
              (0, _validators.checkNumber)(z);
              (0, _validators.checkNumber)(w);
            }
            _this[0] = x;
            _this[1] = y;
            _this[2] = z;
            _this[3] = w;
          }
          return _this;
        }
        (0, _createClass2.default)(Vector42, [{
          key: "set",
          value: function set(x, y, z, w) {
            this[0] = x;
            this[1] = y;
            this[2] = z;
            this[3] = w;
            return this.check();
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            this[3] = array[3];
            return this.check();
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            if (_common.config.debug) {
              (0, _validators.checkNumber)(object.x);
              (0, _validators.checkNumber)(object.y);
              (0, _validators.checkNumber)(object.z);
              (0, _validators.checkNumber)(object.w);
            }
            this[0] = object.x;
            this[1] = object.y;
            this[2] = object.z;
            this[3] = object.w;
            return this;
          }
        }, {
          key: "toObject",
          value: function toObject(object) {
            object.x = this[0];
            object.y = this[1];
            object.z = this[2];
            object.w = this[3];
            return object;
          }
        }, {
          key: "ELEMENTS",
          get: function get() {
            return 4;
          }
        }, {
          key: "z",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "w",
          get: function get() {
            return this[3];
          },
          set: function set(value) {
            this[3] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "transform",
          value: function transform(matrix4) {
            vec4.transformMat4(this, this, matrix4);
            return this.check();
          }
        }, {
          key: "transformByMatrix3",
          value: function transformByMatrix3(matrix3) {
            (0, _glMatrixExtras.vec4_transformMat3)(this, this, matrix3);
            return this.check();
          }
        }, {
          key: "transformByMatrix2",
          value: function transformByMatrix2(matrix2) {
            (0, _glMatrixExtras.vec4_transformMat2)(this, this, matrix2);
            return this.check();
          }
        }, {
          key: "transformByQuaternion",
          value: function transformByQuaternion(quaternion) {
            vec4.transformQuat(this, this, quaternion);
            return this.check();
          }
        }, {
          key: "applyMatrix4",
          value: function applyMatrix4(m) {
            m.transform(this, this);
            return this;
          }
        }], [{
          key: "ZERO",
          get: function get() {
            if (!ZERO) {
              ZERO = new Vector42(0, 0, 0, 0);
              Object.freeze(ZERO);
            }
            return ZERO;
          }
        }]);
        return Vector42;
      }(_vector.default);
      exports.default = Vector4;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/base/matrix.js
  var require_matrix = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/base/matrix.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _mathArray = _interopRequireDefault(require_math_array());
      var _validators = require_validators();
      var _common = require_common();
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var Matrix = function(_MathArray) {
        (0, _inherits2.default)(Matrix2, _MathArray);
        var _super = _createSuper(Matrix2);
        function Matrix2() {
          (0, _classCallCheck2.default)(this, Matrix2);
          return _super.apply(this, arguments);
        }
        (0, _createClass2.default)(Matrix2, [{
          key: "toString",
          value: function toString() {
            var string = "[";
            if (_common.config.printRowMajor) {
              string += "row-major:";
              for (var row = 0; row < this.RANK; ++row) {
                for (var col = 0; col < this.RANK; ++col) {
                  string += " ".concat(this[col * this.RANK + row]);
                }
              }
            } else {
              string += "column-major:";
              for (var i = 0; i < this.ELEMENTS; ++i) {
                string += " ".concat(this[i]);
              }
            }
            string += "]";
            return string;
          }
        }, {
          key: "getElementIndex",
          value: function getElementIndex(row, col) {
            return col * this.RANK + row;
          }
        }, {
          key: "getElement",
          value: function getElement(row, col) {
            return this[col * this.RANK + row];
          }
        }, {
          key: "setElement",
          value: function setElement(row, col, value) {
            this[col * this.RANK + row] = (0, _validators.checkNumber)(value);
            return this;
          }
        }, {
          key: "getColumn",
          value: function getColumn(columnIndex) {
            var result = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new Array(this.RANK).fill(-0);
            var firstIndex = columnIndex * this.RANK;
            for (var i = 0; i < this.RANK; ++i) {
              result[i] = this[firstIndex + i];
            }
            return result;
          }
        }, {
          key: "setColumn",
          value: function setColumn(columnIndex, columnVector) {
            var firstIndex = columnIndex * this.RANK;
            for (var i = 0; i < this.RANK; ++i) {
              this[firstIndex + i] = columnVector[i];
            }
            return this;
          }
        }]);
        return Matrix2;
      }(_mathArray.default);
      exports.default = Matrix;
    }
  });

  // node_modules/gl-matrix/cjs/mat3.js
  var require_mat3 = __commonJS({
    "node_modules/gl-matrix/cjs/mat3.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.fromMat4 = fromMat4;
      exports.clone = clone;
      exports.copy = copy;
      exports.fromValues = fromValues;
      exports.set = set;
      exports.identity = identity;
      exports.transpose = transpose;
      exports.invert = invert;
      exports.adjoint = adjoint;
      exports.determinant = determinant;
      exports.multiply = multiply;
      exports.translate = translate;
      exports.rotate = rotate;
      exports.scale = scale;
      exports.fromTranslation = fromTranslation;
      exports.fromRotation = fromRotation;
      exports.fromScaling = fromScaling;
      exports.fromMat2d = fromMat2d;
      exports.fromQuat = fromQuat;
      exports.normalFromMat4 = normalFromMat4;
      exports.projection = projection;
      exports.str = str;
      exports.frob = frob;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiplyScalar = multiplyScalar;
      exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
      exports.exactEquals = exactEquals;
      exports.equals = equals;
      exports.sub = exports.mul = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(9);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
          out[5] = 0;
          out[6] = 0;
          out[7] = 0;
        }
        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
        return out;
      }
      function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
      }
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }
      function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }
      function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      function transpose(out, a) {
        if (out === a) {
          var a01 = a[1], a02 = a[2], a12 = a[5];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a01;
          out[5] = a[7];
          out[6] = a02;
          out[7] = a12;
        } else {
          out[0] = a[0];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a[1];
          out[4] = a[4];
          out[5] = a[7];
          out[6] = a[2];
          out[7] = a[5];
          out[8] = a[8];
        }
        return out;
      }
      function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20;
        var det = a00 * b01 + a01 * b11 + a02 * b21;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
      }
      function adjoint(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        out[0] = a11 * a22 - a12 * a21;
        out[1] = a02 * a21 - a01 * a22;
        out[2] = a01 * a12 - a02 * a11;
        out[3] = a12 * a20 - a10 * a22;
        out[4] = a00 * a22 - a02 * a20;
        out[5] = a02 * a10 - a00 * a12;
        out[6] = a10 * a21 - a11 * a20;
        out[7] = a01 * a20 - a00 * a21;
        out[8] = a00 * a11 - a01 * a10;
        return out;
      }
      function determinant(a) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
      }
      function multiply(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2];
        var a10 = a[3], a11 = a[4], a12 = a[5];
        var a20 = a[6], a21 = a[7], a22 = a[8];
        var b00 = b[0], b01 = b[1], b02 = b[2];
        var b10 = b[3], b11 = b[4], b12 = b[5];
        var b20 = b[6], b21 = b[7], b22 = b[8];
        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;
        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;
        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
      }
      function translate(out, a, v) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a10;
        out[4] = a11;
        out[5] = a12;
        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
      }
      function rotate(out, a, rad) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;
        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;
        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
      }
      function scale(out, a, v) {
        var x = v[0], y = v[1];
        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];
        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }
      function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
      }
      function fromRotation(out, rad) {
        var s = Math.sin(rad), c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = -s;
        out[4] = c;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }
      function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;
        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;
        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
      }
      function fromQuat(out, q) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;
        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;
        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;
        return out;
      }
      function normalFromMat4(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        return out;
      }
      function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
      }
      function str(a) {
        return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
      }
      function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]);
      }
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
      }
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
      }
      function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
      }
      function multiplyScalarAndAdd(out, a, b, scale2) {
        out[0] = a[0] + b[0] * scale2;
        out[1] = a[1] + b[1] * scale2;
        out[2] = a[2] + b[2] * scale2;
        out[3] = a[3] + b[3] * scale2;
        out[4] = a[4] + b[4] * scale2;
        out[5] = a[5] + b[5] * scale2;
        out[6] = a[6] + b[6] * scale2;
        out[7] = a[7] + b[7] * scale2;
        out[8] = a[8] + b[8] * scale2;
        return out;
      }
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
      }
      function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8));
      }
      var mul = multiply;
      exports.mul = mul;
      var sub = subtract;
      exports.sub = sub;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/matrix3.js
  var require_matrix3 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/matrix3.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _matrix = _interopRequireDefault(require_matrix());
      var _validators = require_validators();
      var _glMatrixExtras = require_gl_matrix_extras();
      var mat3 = _interopRequireWildcard(require_mat3());
      var vec2 = _interopRequireWildcard(require_vec2());
      var vec3 = _interopRequireWildcard(require_vec3());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var INDICES;
      (function(INDICES2) {
        INDICES2[INDICES2["COL0ROW0"] = 0] = "COL0ROW0";
        INDICES2[INDICES2["COL0ROW1"] = 1] = "COL0ROW1";
        INDICES2[INDICES2["COL0ROW2"] = 2] = "COL0ROW2";
        INDICES2[INDICES2["COL1ROW0"] = 3] = "COL1ROW0";
        INDICES2[INDICES2["COL1ROW1"] = 4] = "COL1ROW1";
        INDICES2[INDICES2["COL1ROW2"] = 5] = "COL1ROW2";
        INDICES2[INDICES2["COL2ROW0"] = 6] = "COL2ROW0";
        INDICES2[INDICES2["COL2ROW1"] = 7] = "COL2ROW1";
        INDICES2[INDICES2["COL2ROW2"] = 8] = "COL2ROW2";
      })(INDICES || (INDICES = {}));
      var IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 1, 0, 0, 0, 1]);
      var Matrix3 = function(_Matrix) {
        (0, _inherits2.default)(Matrix32, _Matrix);
        var _super = _createSuper(Matrix32);
        function Matrix32(array) {
          var _this;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          (0, _classCallCheck2.default)(this, Matrix32);
          _this = _super.call(this, -0, -0, -0, -0, -0, -0, -0, -0, -0);
          if (arguments.length === 1 && Array.isArray(array)) {
            _this.copy(array);
          } else if (args.length > 0) {
            _this.copy([array].concat(args));
          } else {
            _this.identity();
          }
          return _this;
        }
        (0, _createClass2.default)(Matrix32, [{
          key: "ELEMENTS",
          get: function get() {
            return 9;
          }
        }, {
          key: "RANK",
          get: function get() {
            return 3;
          }
        }, {
          key: "INDICES",
          get: function get() {
            return INDICES;
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            this[3] = array[3];
            this[4] = array[4];
            this[5] = array[5];
            this[6] = array[6];
            this[7] = array[7];
            this[8] = array[8];
            return this.check();
          }
        }, {
          key: "identity",
          value: function identity() {
            return this.copy(IDENTITY_MATRIX);
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            return this.check();
          }
        }, {
          key: "fromQuaternion",
          value: function fromQuaternion(q) {
            mat3.fromQuat(this, q);
            return this.check();
          }
        }, {
          key: "set",
          value: function set(m00, m10, m20, m01, m11, m21, m02, m12, m22) {
            this[0] = m00;
            this[1] = m10;
            this[2] = m20;
            this[3] = m01;
            this[4] = m11;
            this[5] = m21;
            this[6] = m02;
            this[7] = m12;
            this[8] = m22;
            return this.check();
          }
        }, {
          key: "setRowMajor",
          value: function setRowMajor(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
            this[0] = m00;
            this[1] = m10;
            this[2] = m20;
            this[3] = m01;
            this[4] = m11;
            this[5] = m21;
            this[6] = m02;
            this[7] = m12;
            this[8] = m22;
            return this.check();
          }
        }, {
          key: "determinant",
          value: function determinant() {
            return mat3.determinant(this);
          }
        }, {
          key: "transpose",
          value: function transpose() {
            mat3.transpose(this, this);
            return this.check();
          }
        }, {
          key: "invert",
          value: function invert() {
            mat3.invert(this, this);
            return this.check();
          }
        }, {
          key: "multiplyLeft",
          value: function multiplyLeft(a) {
            mat3.multiply(this, a, this);
            return this.check();
          }
        }, {
          key: "multiplyRight",
          value: function multiplyRight(a) {
            mat3.multiply(this, this, a);
            return this.check();
          }
        }, {
          key: "rotate",
          value: function rotate(radians) {
            mat3.rotate(this, this, radians);
            return this.check();
          }
        }, {
          key: "scale",
          value: function scale(factor) {
            if (Array.isArray(factor)) {
              mat3.scale(this, this, factor);
            } else {
              mat3.scale(this, this, [factor, factor]);
            }
            return this.check();
          }
        }, {
          key: "translate",
          value: function translate(vec) {
            mat3.translate(this, this, vec);
            return this.check();
          }
        }, {
          key: "transform",
          value: function transform(vector, result) {
            var out;
            switch (vector.length) {
              case 2:
                out = vec2.transformMat3(result || [-0, -0], vector, this);
                break;
              case 3:
                out = vec3.transformMat3(result || [-0, -0, -0], vector, this);
                break;
              case 4:
                out = (0, _glMatrixExtras.vec4_transformMat3)(result || [-0, -0, -0, -0], vector, this);
                break;
              default:
                throw new Error("Illegal vector");
            }
            (0, _validators.checkVector)(out, vector.length);
            return out;
          }
        }, {
          key: "transformVector",
          value: function transformVector(vector, result) {
            return this.transform(vector, result);
          }
        }, {
          key: "transformVector2",
          value: function transformVector2(vector, result) {
            return this.transform(vector, result);
          }
        }, {
          key: "transformVector3",
          value: function transformVector3(vector, result) {
            return this.transform(vector, result);
          }
        }], [{
          key: "IDENTITY",
          get: function get() {
            return getIdentityMatrix();
          }
        }, {
          key: "ZERO",
          get: function get() {
            return getZeroMatrix();
          }
        }]);
        return Matrix32;
      }(_matrix.default);
      exports.default = Matrix3;
      var ZERO_MATRIX3;
      var IDENTITY_MATRIX3;
      function getZeroMatrix() {
        if (!ZERO_MATRIX3) {
          ZERO_MATRIX3 = new Matrix3([0, 0, 0, 0, 0, 0, 0, 0, 0]);
          Object.freeze(ZERO_MATRIX3);
        }
        return ZERO_MATRIX3;
      }
      function getIdentityMatrix() {
        if (!IDENTITY_MATRIX3) {
          IDENTITY_MATRIX3 = new Matrix3();
          Object.freeze(IDENTITY_MATRIX3);
        }
        return IDENTITY_MATRIX3;
      }
    }
  });

  // node_modules/gl-matrix/cjs/mat4.js
  var require_mat4 = __commonJS({
    "node_modules/gl-matrix/cjs/mat4.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.clone = clone;
      exports.copy = copy;
      exports.fromValues = fromValues;
      exports.set = set;
      exports.identity = identity;
      exports.transpose = transpose;
      exports.invert = invert;
      exports.adjoint = adjoint;
      exports.determinant = determinant;
      exports.multiply = multiply;
      exports.translate = translate;
      exports.scale = scale;
      exports.rotate = rotate;
      exports.rotateX = rotateX;
      exports.rotateY = rotateY;
      exports.rotateZ = rotateZ;
      exports.fromTranslation = fromTranslation;
      exports.fromScaling = fromScaling;
      exports.fromRotation = fromRotation;
      exports.fromXRotation = fromXRotation;
      exports.fromYRotation = fromYRotation;
      exports.fromZRotation = fromZRotation;
      exports.fromRotationTranslation = fromRotationTranslation;
      exports.fromQuat2 = fromQuat2;
      exports.getTranslation = getTranslation;
      exports.getScaling = getScaling;
      exports.getRotation = getRotation;
      exports.fromRotationTranslationScale = fromRotationTranslationScale;
      exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
      exports.fromQuat = fromQuat;
      exports.frustum = frustum;
      exports.perspectiveNO = perspectiveNO;
      exports.perspectiveZO = perspectiveZO;
      exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
      exports.orthoNO = orthoNO;
      exports.orthoZO = orthoZO;
      exports.lookAt = lookAt;
      exports.targetTo = targetTo;
      exports.str = str;
      exports.frob = frob;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiplyScalar = multiplyScalar;
      exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
      exports.exactEquals = exactEquals;
      exports.equals = equals;
      exports.sub = exports.mul = exports.ortho = exports.perspective = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(16);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
          out[4] = 0;
          out[6] = 0;
          out[7] = 0;
          out[8] = 0;
          out[9] = 0;
          out[11] = 0;
          out[12] = 0;
          out[13] = 0;
          out[14] = 0;
        }
        out[0] = 1;
        out[5] = 1;
        out[10] = 1;
        out[15] = 1;
        return out;
      }
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(16);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        var out = new glMatrix.ARRAY_TYPE(16);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
      }
      function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m03;
        out[4] = m10;
        out[5] = m11;
        out[6] = m12;
        out[7] = m13;
        out[8] = m20;
        out[9] = m21;
        out[10] = m22;
        out[11] = m23;
        out[12] = m30;
        out[13] = m31;
        out[14] = m32;
        out[15] = m33;
        return out;
      }
      function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function transpose(out, a) {
        if (out === a) {
          var a01 = a[1], a02 = a[2], a03 = a[3];
          var a12 = a[6], a13 = a[7];
          var a23 = a[11];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a01;
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a02;
          out[9] = a12;
          out[11] = a[14];
          out[12] = a03;
          out[13] = a13;
          out[14] = a23;
        } else {
          out[0] = a[0];
          out[1] = a[4];
          out[2] = a[8];
          out[3] = a[12];
          out[4] = a[1];
          out[5] = a[5];
          out[6] = a[9];
          out[7] = a[13];
          out[8] = a[2];
          out[9] = a[6];
          out[10] = a[10];
          out[11] = a[14];
          out[12] = a[3];
          out[13] = a[7];
          out[14] = a[11];
          out[15] = a[15];
        }
        return out;
      }
      function invert(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
        if (!det) {
          return null;
        }
        det = 1 / det;
        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
        out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
        out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
        out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
        out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
        out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
        out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
        out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
        out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
        out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
        return out;
      }
      function adjoint(out, a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
        out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
        out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
        out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
        out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
        out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
        out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
        out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
        out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
        out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
        out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
        out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
        out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
        out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
        out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
        out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
        return out;
      }
      function determinant(a) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;
        return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
      }
      function multiply(out, a, b) {
        var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
        var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
        var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
        var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[4];
        b1 = b[5];
        b2 = b[6];
        b3 = b[7];
        out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[8];
        b1 = b[9];
        b2 = b[10];
        b3 = b[11];
        out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        b0 = b[12];
        b1 = b[13];
        b2 = b[14];
        b3 = b[15];
        out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
        out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
        out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
        out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
        return out;
      }
      function translate(out, a, v) {
        var x = v[0], y = v[1], z = v[2];
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;
        if (a === out) {
          out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
          out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
          out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
          out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
        } else {
          a00 = a[0];
          a01 = a[1];
          a02 = a[2];
          a03 = a[3];
          a10 = a[4];
          a11 = a[5];
          a12 = a[6];
          a13 = a[7];
          a20 = a[8];
          a21 = a[9];
          a22 = a[10];
          a23 = a[11];
          out[0] = a00;
          out[1] = a01;
          out[2] = a02;
          out[3] = a03;
          out[4] = a10;
          out[5] = a11;
          out[6] = a12;
          out[7] = a13;
          out[8] = a20;
          out[9] = a21;
          out[10] = a22;
          out[11] = a23;
          out[12] = a00 * x + a10 * y + a20 * z + a[12];
          out[13] = a01 * x + a11 * y + a21 * z + a[13];
          out[14] = a02 * x + a12 * y + a22 * z + a[14];
          out[15] = a03 * x + a13 * y + a23 * z + a[15];
        }
        return out;
      }
      function scale(out, a, v) {
        var x = v[0], y = v[1], z = v[2];
        out[0] = a[0] * x;
        out[1] = a[1] * x;
        out[2] = a[2] * x;
        out[3] = a[3] * x;
        out[4] = a[4] * y;
        out[5] = a[5] * y;
        out[6] = a[6] * y;
        out[7] = a[7] * y;
        out[8] = a[8] * z;
        out[9] = a[9] * z;
        out[10] = a[10] * z;
        out[11] = a[11] * z;
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
        return out;
      }
      function rotate(out, a, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;
        var a00, a01, a02, a03;
        var a10, a11, a12, a13;
        var a20, a21, a22, a23;
        var b00, b01, b02;
        var b10, b11, b12;
        var b20, b21, b22;
        if (len < glMatrix.EPSILON) {
          return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        b00 = x * x * t + c;
        b01 = y * x * t + z * s;
        b02 = z * x * t - y * s;
        b10 = x * y * t - z * s;
        b11 = y * y * t + c;
        b12 = z * y * t + x * s;
        b20 = x * z * t + y * s;
        b21 = y * z * t - x * s;
        b22 = z * z * t + c;
        out[0] = a00 * b00 + a10 * b01 + a20 * b02;
        out[1] = a01 * b00 + a11 * b01 + a21 * b02;
        out[2] = a02 * b00 + a12 * b01 + a22 * b02;
        out[3] = a03 * b00 + a13 * b01 + a23 * b02;
        out[4] = a00 * b10 + a10 * b11 + a20 * b12;
        out[5] = a01 * b10 + a11 * b11 + a21 * b12;
        out[6] = a02 * b10 + a12 * b11 + a22 * b12;
        out[7] = a03 * b10 + a13 * b11 + a23 * b12;
        out[8] = a00 * b20 + a10 * b21 + a20 * b22;
        out[9] = a01 * b20 + a11 * b21 + a21 * b22;
        out[10] = a02 * b20 + a12 * b21 + a22 * b22;
        out[11] = a03 * b20 + a13 * b21 + a23 * b22;
        if (a !== out) {
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        return out;
      }
      function rotateX(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
          out[0] = a[0];
          out[1] = a[1];
          out[2] = a[2];
          out[3] = a[3];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[4] = a10 * c + a20 * s;
        out[5] = a11 * c + a21 * s;
        out[6] = a12 * c + a22 * s;
        out[7] = a13 * c + a23 * s;
        out[8] = a20 * c - a10 * s;
        out[9] = a21 * c - a11 * s;
        out[10] = a22 * c - a12 * s;
        out[11] = a23 * c - a13 * s;
        return out;
      }
      function rotateY(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a20 = a[8];
        var a21 = a[9];
        var a22 = a[10];
        var a23 = a[11];
        if (a !== out) {
          out[4] = a[4];
          out[5] = a[5];
          out[6] = a[6];
          out[7] = a[7];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[0] = a00 * c - a20 * s;
        out[1] = a01 * c - a21 * s;
        out[2] = a02 * c - a22 * s;
        out[3] = a03 * c - a23 * s;
        out[8] = a00 * s + a20 * c;
        out[9] = a01 * s + a21 * c;
        out[10] = a02 * s + a22 * c;
        out[11] = a03 * s + a23 * c;
        return out;
      }
      function rotateZ(out, a, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        var a00 = a[0];
        var a01 = a[1];
        var a02 = a[2];
        var a03 = a[3];
        var a10 = a[4];
        var a11 = a[5];
        var a12 = a[6];
        var a13 = a[7];
        if (a !== out) {
          out[8] = a[8];
          out[9] = a[9];
          out[10] = a[10];
          out[11] = a[11];
          out[12] = a[12];
          out[13] = a[13];
          out[14] = a[14];
          out[15] = a[15];
        }
        out[0] = a00 * c + a10 * s;
        out[1] = a01 * c + a11 * s;
        out[2] = a02 * c + a12 * s;
        out[3] = a03 * c + a13 * s;
        out[4] = a10 * c - a00 * s;
        out[5] = a11 * c - a01 * s;
        out[6] = a12 * c - a02 * s;
        out[7] = a13 * c - a03 * s;
        return out;
      }
      function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = v[1];
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = v[2];
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function fromRotation(out, rad, axis) {
        var x = axis[0], y = axis[1], z = axis[2];
        var len = Math.hypot(x, y, z);
        var s, c, t;
        if (len < glMatrix.EPSILON) {
          return null;
        }
        len = 1 / len;
        x *= len;
        y *= len;
        z *= len;
        s = Math.sin(rad);
        c = Math.cos(rad);
        t = 1 - c;
        out[0] = x * x * t + c;
        out[1] = y * x * t + z * s;
        out[2] = z * x * t - y * s;
        out[3] = 0;
        out[4] = x * y * t - z * s;
        out[5] = y * y * t + c;
        out[6] = z * y * t + x * s;
        out[7] = 0;
        out[8] = x * z * t + y * s;
        out[9] = y * z * t - x * s;
        out[10] = z * z * t + c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function fromXRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = c;
        out[6] = s;
        out[7] = 0;
        out[8] = 0;
        out[9] = -s;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function fromYRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = 0;
        out[2] = -s;
        out[3] = 0;
        out[4] = 0;
        out[5] = 1;
        out[6] = 0;
        out[7] = 0;
        out[8] = s;
        out[9] = 0;
        out[10] = c;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function fromZRotation(out, rad) {
        var s = Math.sin(rad);
        var c = Math.cos(rad);
        out[0] = c;
        out[1] = s;
        out[2] = 0;
        out[3] = 0;
        out[4] = -s;
        out[5] = c;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 1;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function fromRotationTranslation(out, q, v) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - (yy + zz);
        out[1] = xy + wz;
        out[2] = xz - wy;
        out[3] = 0;
        out[4] = xy - wz;
        out[5] = 1 - (xx + zz);
        out[6] = yz + wx;
        out[7] = 0;
        out[8] = xz + wy;
        out[9] = yz - wx;
        out[10] = 1 - (xx + yy);
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      function fromQuat2(out, a) {
        var translation = new glMatrix.ARRAY_TYPE(3);
        var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
        var magnitude = bx * bx + by * by + bz * bz + bw * bw;
        if (magnitude > 0) {
          translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
          translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
          translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
        } else {
          translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
          translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
          translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
        }
        fromRotationTranslation(out, a, translation);
        return out;
      }
      function getTranslation(out, mat) {
        out[0] = mat[12];
        out[1] = mat[13];
        out[2] = mat[14];
        return out;
      }
      function getScaling(out, mat) {
        var m11 = mat[0];
        var m12 = mat[1];
        var m13 = mat[2];
        var m21 = mat[4];
        var m22 = mat[5];
        var m23 = mat[6];
        var m31 = mat[8];
        var m32 = mat[9];
        var m33 = mat[10];
        out[0] = Math.hypot(m11, m12, m13);
        out[1] = Math.hypot(m21, m22, m23);
        out[2] = Math.hypot(m31, m32, m33);
        return out;
      }
      function getRotation(out, mat) {
        var scaling = new glMatrix.ARRAY_TYPE(3);
        getScaling(scaling, mat);
        var is1 = 1 / scaling[0];
        var is2 = 1 / scaling[1];
        var is3 = 1 / scaling[2];
        var sm11 = mat[0] * is1;
        var sm12 = mat[1] * is2;
        var sm13 = mat[2] * is3;
        var sm21 = mat[4] * is1;
        var sm22 = mat[5] * is2;
        var sm23 = mat[6] * is3;
        var sm31 = mat[8] * is1;
        var sm32 = mat[9] * is2;
        var sm33 = mat[10] * is3;
        var trace = sm11 + sm22 + sm33;
        var S = 0;
        if (trace > 0) {
          S = Math.sqrt(trace + 1) * 2;
          out[3] = 0.25 * S;
          out[0] = (sm23 - sm32) / S;
          out[1] = (sm31 - sm13) / S;
          out[2] = (sm12 - sm21) / S;
        } else if (sm11 > sm22 && sm11 > sm33) {
          S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
          out[3] = (sm23 - sm32) / S;
          out[0] = 0.25 * S;
          out[1] = (sm12 + sm21) / S;
          out[2] = (sm31 + sm13) / S;
        } else if (sm22 > sm33) {
          S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
          out[3] = (sm31 - sm13) / S;
          out[0] = (sm12 + sm21) / S;
          out[1] = 0.25 * S;
          out[2] = (sm23 + sm32) / S;
        } else {
          S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
          out[3] = (sm12 - sm21) / S;
          out[0] = (sm31 + sm13) / S;
          out[1] = (sm23 + sm32) / S;
          out[2] = 0.25 * S;
        }
        return out;
      }
      function fromRotationTranslationScale(out, q, v, s) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        out[0] = (1 - (yy + zz)) * sx;
        out[1] = (xy + wz) * sx;
        out[2] = (xz - wy) * sx;
        out[3] = 0;
        out[4] = (xy - wz) * sy;
        out[5] = (1 - (xx + zz)) * sy;
        out[6] = (yz + wx) * sy;
        out[7] = 0;
        out[8] = (xz + wy) * sz;
        out[9] = (yz - wx) * sz;
        out[10] = (1 - (xx + yy)) * sz;
        out[11] = 0;
        out[12] = v[0];
        out[13] = v[1];
        out[14] = v[2];
        out[15] = 1;
        return out;
      }
      function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var xy = x * y2;
        var xz = x * z2;
        var yy = y * y2;
        var yz = y * z2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        var sx = s[0];
        var sy = s[1];
        var sz = s[2];
        var ox = o[0];
        var oy = o[1];
        var oz = o[2];
        var out0 = (1 - (yy + zz)) * sx;
        var out1 = (xy + wz) * sx;
        var out2 = (xz - wy) * sx;
        var out4 = (xy - wz) * sy;
        var out5 = (1 - (xx + zz)) * sy;
        var out6 = (yz + wx) * sy;
        var out8 = (xz + wy) * sz;
        var out9 = (yz - wx) * sz;
        var out10 = (1 - (xx + yy)) * sz;
        out[0] = out0;
        out[1] = out1;
        out[2] = out2;
        out[3] = 0;
        out[4] = out4;
        out[5] = out5;
        out[6] = out6;
        out[7] = 0;
        out[8] = out8;
        out[9] = out9;
        out[10] = out10;
        out[11] = 0;
        out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
        out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
        out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
        out[15] = 1;
        return out;
      }
      function fromQuat(out, q) {
        var x = q[0], y = q[1], z = q[2], w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;
        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;
        out[0] = 1 - yy - zz;
        out[1] = yx + wz;
        out[2] = zx - wy;
        out[3] = 0;
        out[4] = yx - wz;
        out[5] = 1 - xx - zz;
        out[6] = zy + wx;
        out[7] = 0;
        out[8] = zx + wy;
        out[9] = zy - wx;
        out[10] = 1 - xx - yy;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
        out[15] = 1;
        return out;
      }
      function frustum(out, left, right, bottom, top, near, far) {
        var rl = 1 / (right - left);
        var tb = 1 / (top - bottom);
        var nf = 1 / (near - far);
        out[0] = near * 2 * rl;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = near * 2 * tb;
        out[6] = 0;
        out[7] = 0;
        out[8] = (right + left) * rl;
        out[9] = (top + bottom) * tb;
        out[10] = (far + near) * nf;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = far * near * 2 * nf;
        out[15] = 0;
        return out;
      }
      function perspectiveNO(out, fovy, aspect, near, far) {
        var f = 1 / Math.tan(fovy / 2), nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          nf = 1 / (near - far);
          out[10] = (far + near) * nf;
          out[14] = 2 * far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -2 * near;
        }
        return out;
      }
      var perspective = perspectiveNO;
      exports.perspective = perspective;
      function perspectiveZO(out, fovy, aspect, near, far) {
        var f = 1 / Math.tan(fovy / 2), nf;
        out[0] = f / aspect;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = f;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[15] = 0;
        if (far != null && far !== Infinity) {
          nf = 1 / (near - far);
          out[10] = far * nf;
          out[14] = far * near * nf;
        } else {
          out[10] = -1;
          out[14] = -near;
        }
        return out;
      }
      function perspectiveFromFieldOfView(out, fov, near, far) {
        var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
        var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
        var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
        var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
        var xScale = 2 / (leftTan + rightTan);
        var yScale = 2 / (upTan + downTan);
        out[0] = xScale;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = yScale;
        out[6] = 0;
        out[7] = 0;
        out[8] = -((leftTan - rightTan) * xScale * 0.5);
        out[9] = (upTan - downTan) * yScale * 0.5;
        out[10] = far / (near - far);
        out[11] = -1;
        out[12] = 0;
        out[13] = 0;
        out[14] = far * near / (near - far);
        out[15] = 0;
        return out;
      }
      function orthoNO(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = 2 * nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = (far + near) * nf;
        out[15] = 1;
        return out;
      }
      var ortho = orthoNO;
      exports.ortho = ortho;
      function orthoZO(out, left, right, bottom, top, near, far) {
        var lr = 1 / (left - right);
        var bt = 1 / (bottom - top);
        var nf = 1 / (near - far);
        out[0] = -2 * lr;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[5] = -2 * bt;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[10] = nf;
        out[11] = 0;
        out[12] = (left + right) * lr;
        out[13] = (top + bottom) * bt;
        out[14] = near * nf;
        out[15] = 1;
        return out;
      }
      function lookAt(out, eye, center, up) {
        var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
        var eyex = eye[0];
        var eyey = eye[1];
        var eyez = eye[2];
        var upx = up[0];
        var upy = up[1];
        var upz = up[2];
        var centerx = center[0];
        var centery = center[1];
        var centerz = center[2];
        if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
          return identity(out);
        }
        z0 = eyex - centerx;
        z1 = eyey - centery;
        z2 = eyez - centerz;
        len = 1 / Math.hypot(z0, z1, z2);
        z0 *= len;
        z1 *= len;
        z2 *= len;
        x0 = upy * z2 - upz * z1;
        x1 = upz * z0 - upx * z2;
        x2 = upx * z1 - upy * z0;
        len = Math.hypot(x0, x1, x2);
        if (!len) {
          x0 = 0;
          x1 = 0;
          x2 = 0;
        } else {
          len = 1 / len;
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }
        y0 = z1 * x2 - z2 * x1;
        y1 = z2 * x0 - z0 * x2;
        y2 = z0 * x1 - z1 * x0;
        len = Math.hypot(y0, y1, y2);
        if (!len) {
          y0 = 0;
          y1 = 0;
          y2 = 0;
        } else {
          len = 1 / len;
          y0 *= len;
          y1 *= len;
          y2 *= len;
        }
        out[0] = x0;
        out[1] = y0;
        out[2] = z0;
        out[3] = 0;
        out[4] = x1;
        out[5] = y1;
        out[6] = z1;
        out[7] = 0;
        out[8] = x2;
        out[9] = y2;
        out[10] = z2;
        out[11] = 0;
        out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
        out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
        out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
        out[15] = 1;
        return out;
      }
      function targetTo(out, eye, target, up) {
        var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
        var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
        var len = z0 * z0 + z1 * z1 + z2 * z2;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
          z0 *= len;
          z1 *= len;
          z2 *= len;
        }
        var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
        len = x0 * x0 + x1 * x1 + x2 * x2;
        if (len > 0) {
          len = 1 / Math.sqrt(len);
          x0 *= len;
          x1 *= len;
          x2 *= len;
        }
        out[0] = x0;
        out[1] = x1;
        out[2] = x2;
        out[3] = 0;
        out[4] = z1 * x2 - z2 * x1;
        out[5] = z2 * x0 - z0 * x2;
        out[6] = z0 * x1 - z1 * x0;
        out[7] = 0;
        out[8] = z0;
        out[9] = z1;
        out[10] = z2;
        out[11] = 0;
        out[12] = eyex;
        out[13] = eyey;
        out[14] = eyez;
        out[15] = 1;
        return out;
      }
      function str(a) {
        return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
      }
      function frob(a) {
        return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
      }
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        out[9] = a[9] + b[9];
        out[10] = a[10] + b[10];
        out[11] = a[11] + b[11];
        out[12] = a[12] + b[12];
        out[13] = a[13] + b[13];
        out[14] = a[14] + b[14];
        out[15] = a[15] + b[15];
        return out;
      }
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        out[9] = a[9] - b[9];
        out[10] = a[10] - b[10];
        out[11] = a[11] - b[11];
        out[12] = a[12] - b[12];
        out[13] = a[13] - b[13];
        out[14] = a[14] - b[14];
        out[15] = a[15] - b[15];
        return out;
      }
      function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        out[9] = a[9] * b;
        out[10] = a[10] * b;
        out[11] = a[11] * b;
        out[12] = a[12] * b;
        out[13] = a[13] * b;
        out[14] = a[14] * b;
        out[15] = a[15] * b;
        return out;
      }
      function multiplyScalarAndAdd(out, a, b, scale2) {
        out[0] = a[0] + b[0] * scale2;
        out[1] = a[1] + b[1] * scale2;
        out[2] = a[2] + b[2] * scale2;
        out[3] = a[3] + b[3] * scale2;
        out[4] = a[4] + b[4] * scale2;
        out[5] = a[5] + b[5] * scale2;
        out[6] = a[6] + b[6] * scale2;
        out[7] = a[7] + b[7] * scale2;
        out[8] = a[8] + b[8] * scale2;
        out[9] = a[9] + b[9] * scale2;
        out[10] = a[10] + b[10] * scale2;
        out[11] = a[11] + b[11] * scale2;
        out[12] = a[12] + b[12] * scale2;
        out[13] = a[13] + b[13] * scale2;
        out[14] = a[14] + b[14] * scale2;
        out[15] = a[15] + b[15] * scale2;
        return out;
      }
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
      }
      function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
        var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
        var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
        var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
        var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
      }
      var mul = multiply;
      exports.mul = mul;
      var sub = subtract;
      exports.sub = sub;
    }
  });

  // node_modules/gl-matrix/cjs/vec4.js
  var require_vec4 = __commonJS({
    "node_modules/gl-matrix/cjs/vec4.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.clone = clone;
      exports.fromValues = fromValues;
      exports.copy = copy;
      exports.set = set;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;
      exports.ceil = ceil;
      exports.floor = floor;
      exports.min = min;
      exports.max = max2;
      exports.round = round;
      exports.scale = scale;
      exports.scaleAndAdd = scaleAndAdd;
      exports.distance = distance;
      exports.squaredDistance = squaredDistance;
      exports.length = length;
      exports.squaredLength = squaredLength;
      exports.negate = negate;
      exports.inverse = inverse;
      exports.normalize = normalize;
      exports.dot = dot;
      exports.cross = cross;
      exports.lerp = lerp;
      exports.random = random;
      exports.transformMat4 = transformMat4;
      exports.transformQuat = transformQuat;
      exports.zero = zero;
      exports.str = str;
      exports.exactEquals = exactEquals;
      exports.equals = equals;
      exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(4);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
        }
        return out;
      }
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      function fromValues(x, y, z, w) {
        var out = new glMatrix.ARRAY_TYPE(4);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
      }
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        return out;
      }
      function set(out, x, y, z, w) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = w;
        return out;
      }
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        return out;
      }
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        return out;
      }
      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        out[3] = a[3] * b[3];
        return out;
      }
      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        out[3] = a[3] / b[3];
        return out;
      }
      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        out[3] = Math.ceil(a[3]);
        return out;
      }
      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        out[3] = Math.floor(a[3]);
        return out;
      }
      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        out[3] = Math.min(a[3], b[3]);
        return out;
      }
      function max2(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        out[3] = Math.max(a[3], b[3]);
        return out;
      }
      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        out[3] = Math.round(a[3]);
        return out;
      }
      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        return out;
      }
      function scaleAndAdd(out, a, b, scale2) {
        out[0] = a[0] + b[0] * scale2;
        out[1] = a[1] + b[1] * scale2;
        out[2] = a[2] + b[2] * scale2;
        out[3] = a[3] + b[3] * scale2;
        return out;
      }
      function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return Math.hypot(x, y, z, w);
      }
      function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        var w = b[3] - a[3];
        return x * x + y * y + z * z + w * w;
      }
      function length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return Math.hypot(x, y, z, w);
      }
      function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        return x * x + y * y + z * z + w * w;
      }
      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = -a[3];
        return out;
      }
      function inverse(out, a) {
        out[0] = 1 / a[0];
        out[1] = 1 / a[1];
        out[2] = 1 / a[2];
        out[3] = 1 / a[3];
        return out;
      }
      function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var w = a[3];
        var len2 = x * x + y * y + z * z + w * w;
        if (len2 > 0) {
          len2 = 1 / Math.sqrt(len2);
        }
        out[0] = x * len2;
        out[1] = y * len2;
        out[2] = z * len2;
        out[3] = w * len2;
        return out;
      }
      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
      }
      function cross(out, u, v, w) {
        var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
        var G = u[0];
        var H = u[1];
        var I = u[2];
        var J = u[3];
        out[0] = H * F - I * E + J * D;
        out[1] = -(G * F) + I * C - J * B;
        out[2] = G * E - H * C + J * A;
        out[3] = -(G * D) + H * B - I * A;
        return out;
      }
      function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        var aw = a[3];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        out[3] = aw + t * (b[3] - aw);
        return out;
      }
      function random(out, scale2) {
        scale2 = scale2 || 1;
        var v1, v2, v3, v4;
        var s1, s2;
        do {
          v1 = glMatrix.RANDOM() * 2 - 1;
          v2 = glMatrix.RANDOM() * 2 - 1;
          s1 = v1 * v1 + v2 * v2;
        } while (s1 >= 1);
        do {
          v3 = glMatrix.RANDOM() * 2 - 1;
          v4 = glMatrix.RANDOM() * 2 - 1;
          s2 = v3 * v3 + v4 * v4;
        } while (s2 >= 1);
        var d = Math.sqrt((1 - s1) / s2);
        out[0] = scale2 * v1;
        out[1] = scale2 * v2;
        out[2] = scale2 * v3 * d;
        out[3] = scale2 * v4 * d;
        return out;
      }
      function transformMat4(out, a, m) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
        out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
        out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
        out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
        return out;
      }
      function transformQuat(out, a, q) {
        var x = a[0], y = a[1], z = a[2];
        var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
        var ix = qw * x + qy * z - qz * y;
        var iy = qw * y + qz * x - qx * z;
        var iz = qw * z + qx * y - qy * x;
        var iw = -qx * x - qy * y - qz * z;
        out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
        out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
        out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
        out[3] = a[3];
        return out;
      }
      function zero(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        return out;
      }
      function str(a) {
        return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      }
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
      }
      function equals(a, b) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
      }
      var sub = subtract;
      exports.sub = sub;
      var mul = multiply;
      exports.mul = mul;
      var div = divide;
      exports.div = div;
      var dist = distance;
      exports.dist = dist;
      var sqrDist = squaredDistance;
      exports.sqrDist = sqrDist;
      var len = length;
      exports.len = len;
      var sqrLen = squaredLength;
      exports.sqrLen = sqrLen;
      var forEach = function() {
        var vec = create();
        return function(a, stride, offset, count, fn, arg) {
          var i, l;
          if (!stride) {
            stride = 4;
          }
          if (!offset) {
            offset = 0;
          }
          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }
          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
          }
          return a;
        };
      }();
      exports.forEach = forEach;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/matrix4.js
  var require_matrix4 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/matrix4.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _matrix = _interopRequireDefault(require_matrix());
      var _validators = require_validators();
      var _glMatrixExtras = require_gl_matrix_extras();
      var mat4 = _interopRequireWildcard(require_mat4());
      var vec2 = _interopRequireWildcard(require_vec2());
      var vec3 = _interopRequireWildcard(require_vec3());
      var vec4 = _interopRequireWildcard(require_vec4());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var INDICES;
      (function(INDICES2) {
        INDICES2[INDICES2["COL0ROW0"] = 0] = "COL0ROW0";
        INDICES2[INDICES2["COL0ROW1"] = 1] = "COL0ROW1";
        INDICES2[INDICES2["COL0ROW2"] = 2] = "COL0ROW2";
        INDICES2[INDICES2["COL0ROW3"] = 3] = "COL0ROW3";
        INDICES2[INDICES2["COL1ROW0"] = 4] = "COL1ROW0";
        INDICES2[INDICES2["COL1ROW1"] = 5] = "COL1ROW1";
        INDICES2[INDICES2["COL1ROW2"] = 6] = "COL1ROW2";
        INDICES2[INDICES2["COL1ROW3"] = 7] = "COL1ROW3";
        INDICES2[INDICES2["COL2ROW0"] = 8] = "COL2ROW0";
        INDICES2[INDICES2["COL2ROW1"] = 9] = "COL2ROW1";
        INDICES2[INDICES2["COL2ROW2"] = 10] = "COL2ROW2";
        INDICES2[INDICES2["COL2ROW3"] = 11] = "COL2ROW3";
        INDICES2[INDICES2["COL3ROW0"] = 12] = "COL3ROW0";
        INDICES2[INDICES2["COL3ROW1"] = 13] = "COL3ROW1";
        INDICES2[INDICES2["COL3ROW2"] = 14] = "COL3ROW2";
        INDICES2[INDICES2["COL3ROW3"] = 15] = "COL3ROW3";
      })(INDICES || (INDICES = {}));
      var DEFAULT_FOVY = 45 * Math.PI / 180;
      var DEFAULT_ASPECT = 1;
      var DEFAULT_NEAR = 0.1;
      var DEFAULT_FAR = 500;
      var IDENTITY_MATRIX = Object.freeze([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      var Matrix4 = function(_Matrix) {
        (0, _inherits2.default)(Matrix42, _Matrix);
        var _super = _createSuper(Matrix42);
        function Matrix42(array) {
          var _this;
          (0, _classCallCheck2.default)(this, Matrix42);
          _this = _super.call(this, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0);
          if (arguments.length === 1 && Array.isArray(array)) {
            _this.copy(array);
          } else {
            _this.identity();
          }
          return _this;
        }
        (0, _createClass2.default)(Matrix42, [{
          key: "ELEMENTS",
          get: function get() {
            return 16;
          }
        }, {
          key: "RANK",
          get: function get() {
            return 4;
          }
        }, {
          key: "INDICES",
          get: function get() {
            return INDICES;
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            this[3] = array[3];
            this[4] = array[4];
            this[5] = array[5];
            this[6] = array[6];
            this[7] = array[7];
            this[8] = array[8];
            this[9] = array[9];
            this[10] = array[10];
            this[11] = array[11];
            this[12] = array[12];
            this[13] = array[13];
            this[14] = array[14];
            this[15] = array[15];
            return this.check();
          }
        }, {
          key: "set",
          value: function set(m00, m10, m20, m30, m01, m11, m21, m31, m02, m12, m22, m32, m03, m13, m23, m33) {
            this[0] = m00;
            this[1] = m10;
            this[2] = m20;
            this[3] = m30;
            this[4] = m01;
            this[5] = m11;
            this[6] = m21;
            this[7] = m31;
            this[8] = m02;
            this[9] = m12;
            this[10] = m22;
            this[11] = m32;
            this[12] = m03;
            this[13] = m13;
            this[14] = m23;
            this[15] = m33;
            return this.check();
          }
        }, {
          key: "setRowMajor",
          value: function setRowMajor(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
            this[0] = m00;
            this[1] = m10;
            this[2] = m20;
            this[3] = m30;
            this[4] = m01;
            this[5] = m11;
            this[6] = m21;
            this[7] = m31;
            this[8] = m02;
            this[9] = m12;
            this[10] = m22;
            this[11] = m32;
            this[12] = m03;
            this[13] = m13;
            this[14] = m23;
            this[15] = m33;
            return this.check();
          }
        }, {
          key: "toRowMajor",
          value: function toRowMajor(result) {
            result[0] = this[0];
            result[1] = this[4];
            result[2] = this[8];
            result[3] = this[12];
            result[4] = this[1];
            result[5] = this[5];
            result[6] = this[9];
            result[7] = this[13];
            result[8] = this[2];
            result[9] = this[6];
            result[10] = this[10];
            result[11] = this[14];
            result[12] = this[3];
            result[13] = this[7];
            result[14] = this[11];
            result[15] = this[15];
            return result;
          }
        }, {
          key: "identity",
          value: function identity() {
            return this.copy(IDENTITY_MATRIX);
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            return this.check();
          }
        }, {
          key: "fromQuaternion",
          value: function fromQuaternion(quaternion) {
            mat4.fromQuat(this, quaternion);
            return this.check();
          }
        }, {
          key: "frustum",
          value: function frustum(view) {
            var left = view.left, right = view.right, bottom = view.bottom, top = view.top, _view$near = view.near, near = _view$near === void 0 ? DEFAULT_NEAR : _view$near, _view$far = view.far, far = _view$far === void 0 ? DEFAULT_FAR : _view$far;
            if (far === Infinity) {
              computeInfinitePerspectiveOffCenter(this, left, right, bottom, top, near);
            } else {
              mat4.frustum(this, left, right, bottom, top, near, far);
            }
            return this.check();
          }
        }, {
          key: "lookAt",
          value: function lookAt(view) {
            var eye = view.eye, _view$center = view.center, center = _view$center === void 0 ? [0, 0, 0] : _view$center, _view$up = view.up, up = _view$up === void 0 ? [0, 1, 0] : _view$up;
            mat4.lookAt(this, eye, center, up);
            return this.check();
          }
        }, {
          key: "ortho",
          value: function ortho(view) {
            var left = view.left, right = view.right, bottom = view.bottom, top = view.top, _view$near2 = view.near, near = _view$near2 === void 0 ? DEFAULT_NEAR : _view$near2, _view$far2 = view.far, far = _view$far2 === void 0 ? DEFAULT_FAR : _view$far2;
            mat4.ortho(this, left, right, bottom, top, near, far);
            return this.check();
          }
        }, {
          key: "orthographic",
          value: function orthographic(view) {
            var _view$fovy = view.fovy, fovy = _view$fovy === void 0 ? DEFAULT_FOVY : _view$fovy, _view$aspect = view.aspect, aspect = _view$aspect === void 0 ? DEFAULT_ASPECT : _view$aspect, _view$focalDistance = view.focalDistance, focalDistance = _view$focalDistance === void 0 ? 1 : _view$focalDistance, _view$near3 = view.near, near = _view$near3 === void 0 ? DEFAULT_NEAR : _view$near3, _view$far3 = view.far, far = _view$far3 === void 0 ? DEFAULT_FAR : _view$far3;
            checkRadians(fovy);
            var halfY = fovy / 2;
            var top = focalDistance * Math.tan(halfY);
            var right = top * aspect;
            return this.ortho({
              left: -right,
              right,
              bottom: -top,
              top,
              near,
              far
            });
          }
        }, {
          key: "perspective",
          value: function perspective(view) {
            var _view$fovy2 = view.fovy, fovy = _view$fovy2 === void 0 ? 45 * Math.PI / 180 : _view$fovy2, _view$aspect2 = view.aspect, aspect = _view$aspect2 === void 0 ? 1 : _view$aspect2, _view$near4 = view.near, near = _view$near4 === void 0 ? 0.1 : _view$near4, _view$far4 = view.far, far = _view$far4 === void 0 ? 500 : _view$far4;
            checkRadians(fovy);
            mat4.perspective(this, fovy, aspect, near, far);
            return this.check();
          }
        }, {
          key: "determinant",
          value: function determinant() {
            return mat4.determinant(this);
          }
        }, {
          key: "getScale",
          value: function getScale() {
            var result = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [-0, -0, -0];
            result[0] = Math.sqrt(this[0] * this[0] + this[1] * this[1] + this[2] * this[2]);
            result[1] = Math.sqrt(this[4] * this[4] + this[5] * this[5] + this[6] * this[6]);
            result[2] = Math.sqrt(this[8] * this[8] + this[9] * this[9] + this[10] * this[10]);
            return result;
          }
        }, {
          key: "getTranslation",
          value: function getTranslation() {
            var result = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [-0, -0, -0];
            result[0] = this[12];
            result[1] = this[13];
            result[2] = this[14];
            return result;
          }
        }, {
          key: "getRotation",
          value: function getRotation(result, scaleResult) {
            result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
            scaleResult = scaleResult || [-0, -0, -0];
            var scale = this.getScale(scaleResult);
            var inverseScale0 = 1 / scale[0];
            var inverseScale1 = 1 / scale[1];
            var inverseScale2 = 1 / scale[2];
            result[0] = this[0] * inverseScale0;
            result[1] = this[1] * inverseScale1;
            result[2] = this[2] * inverseScale2;
            result[3] = 0;
            result[4] = this[4] * inverseScale0;
            result[5] = this[5] * inverseScale1;
            result[6] = this[6] * inverseScale2;
            result[7] = 0;
            result[8] = this[8] * inverseScale0;
            result[9] = this[9] * inverseScale1;
            result[10] = this[10] * inverseScale2;
            result[11] = 0;
            result[12] = 0;
            result[13] = 0;
            result[14] = 0;
            result[15] = 1;
            return result;
          }
        }, {
          key: "getRotationMatrix3",
          value: function getRotationMatrix3(result, scaleResult) {
            result = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0];
            scaleResult = scaleResult || [-0, -0, -0];
            var scale = this.getScale(scaleResult);
            var inverseScale0 = 1 / scale[0];
            var inverseScale1 = 1 / scale[1];
            var inverseScale2 = 1 / scale[2];
            result[0] = this[0] * inverseScale0;
            result[1] = this[1] * inverseScale1;
            result[2] = this[2] * inverseScale2;
            result[3] = this[4] * inverseScale0;
            result[4] = this[5] * inverseScale1;
            result[5] = this[6] * inverseScale2;
            result[6] = this[8] * inverseScale0;
            result[7] = this[9] * inverseScale1;
            result[8] = this[10] * inverseScale2;
            return result;
          }
        }, {
          key: "transpose",
          value: function transpose() {
            mat4.transpose(this, this);
            return this.check();
          }
        }, {
          key: "invert",
          value: function invert() {
            mat4.invert(this, this);
            return this.check();
          }
        }, {
          key: "multiplyLeft",
          value: function multiplyLeft(a) {
            mat4.multiply(this, a, this);
            return this.check();
          }
        }, {
          key: "multiplyRight",
          value: function multiplyRight(a) {
            mat4.multiply(this, this, a);
            return this.check();
          }
        }, {
          key: "rotateX",
          value: function rotateX(radians) {
            mat4.rotateX(this, this, radians);
            return this.check();
          }
        }, {
          key: "rotateY",
          value: function rotateY(radians) {
            mat4.rotateY(this, this, radians);
            return this.check();
          }
        }, {
          key: "rotateZ",
          value: function rotateZ(radians) {
            mat4.rotateZ(this, this, radians);
            return this.check();
          }
        }, {
          key: "rotateXYZ",
          value: function rotateXYZ(angleXYZ) {
            return this.rotateX(angleXYZ[0]).rotateY(angleXYZ[1]).rotateZ(angleXYZ[2]);
          }
        }, {
          key: "rotateAxis",
          value: function rotateAxis(radians, axis) {
            mat4.rotate(this, this, radians, axis);
            return this.check();
          }
        }, {
          key: "scale",
          value: function scale(factor) {
            mat4.scale(this, this, Array.isArray(factor) ? factor : [factor, factor, factor]);
            return this.check();
          }
        }, {
          key: "translate",
          value: function translate(vector) {
            mat4.translate(this, this, vector);
            return this.check();
          }
        }, {
          key: "transform",
          value: function transform(vector, result) {
            if (vector.length === 4) {
              result = vec4.transformMat4(result || [-0, -0, -0, -0], vector, this);
              (0, _validators.checkVector)(result, 4);
              return result;
            }
            return this.transformAsPoint(vector, result);
          }
        }, {
          key: "transformAsPoint",
          value: function transformAsPoint(vector, result) {
            var length = vector.length;
            var out;
            switch (length) {
              case 2:
                out = vec2.transformMat4(result || [-0, -0], vector, this);
                break;
              case 3:
                out = vec3.transformMat4(result || [-0, -0, -0], vector, this);
                break;
              default:
                throw new Error("Illegal vector");
            }
            (0, _validators.checkVector)(out, vector.length);
            return out;
          }
        }, {
          key: "transformAsVector",
          value: function transformAsVector(vector, result) {
            var out;
            switch (vector.length) {
              case 2:
                out = (0, _glMatrixExtras.vec2_transformMat4AsVector)(result || [-0, -0], vector, this);
                break;
              case 3:
                out = (0, _glMatrixExtras.vec3_transformMat4AsVector)(result || [-0, -0, -0], vector, this);
                break;
              default:
                throw new Error("Illegal vector");
            }
            (0, _validators.checkVector)(out, vector.length);
            return out;
          }
        }, {
          key: "transformPoint",
          value: function transformPoint(vector, result) {
            return this.transformAsPoint(vector, result);
          }
        }, {
          key: "transformVector",
          value: function transformVector(vector, result) {
            return this.transformAsPoint(vector, result);
          }
        }, {
          key: "transformDirection",
          value: function transformDirection(vector, result) {
            return this.transformAsVector(vector, result);
          }
        }, {
          key: "makeRotationX",
          value: function makeRotationX(radians) {
            return this.identity().rotateX(radians);
          }
        }, {
          key: "makeTranslation",
          value: function makeTranslation(x, y, z) {
            return this.identity().translate([x, y, z]);
          }
        }], [{
          key: "IDENTITY",
          get: function get() {
            return getIdentityMatrix();
          }
        }, {
          key: "ZERO",
          get: function get() {
            return getZeroMatrix();
          }
        }]);
        return Matrix42;
      }(_matrix.default);
      exports.default = Matrix4;
      var ZERO;
      var IDENTITY;
      function getZeroMatrix() {
        if (!ZERO) {
          ZERO = new Matrix4([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
          Object.freeze(ZERO);
        }
        return ZERO;
      }
      function getIdentityMatrix() {
        if (!IDENTITY) {
          IDENTITY = new Matrix4();
          Object.freeze(IDENTITY);
        }
        return IDENTITY;
      }
      function checkRadians(possiblyDegrees) {
        if (possiblyDegrees > Math.PI * 2) {
          throw Error("expected radians");
        }
      }
      function computeInfinitePerspectiveOffCenter(result, left, right, bottom, top, near) {
        var column0Row0 = 2 * near / (right - left);
        var column1Row1 = 2 * near / (top - bottom);
        var column2Row0 = (right + left) / (right - left);
        var column2Row1 = (top + bottom) / (top - bottom);
        var column2Row2 = -1;
        var column2Row3 = -1;
        var column3Row2 = -2 * near;
        result[0] = column0Row0;
        result[1] = 0;
        result[2] = 0;
        result[3] = 0;
        result[4] = 0;
        result[5] = column1Row1;
        result[6] = 0;
        result[7] = 0;
        result[8] = column2Row0;
        result[9] = column2Row1;
        result[10] = column2Row2;
        result[11] = column2Row3;
        result[12] = 0;
        result[13] = 0;
        result[14] = column3Row2;
        result[15] = 0;
        return result;
      }
    }
  });

  // node_modules/gl-matrix/cjs/quat.js
  var require_quat = __commonJS({
    "node_modules/gl-matrix/cjs/quat.js"(exports) {
      "use strict";
      function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = function _typeof2(obj2) {
            return typeof obj2;
          };
        } else {
          _typeof = function _typeof2(obj2) {
            return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          };
        }
        return _typeof(obj);
      }
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.create = create;
      exports.identity = identity;
      exports.setAxisAngle = setAxisAngle;
      exports.getAxisAngle = getAxisAngle;
      exports.getAngle = getAngle;
      exports.multiply = multiply;
      exports.rotateX = rotateX;
      exports.rotateY = rotateY;
      exports.rotateZ = rotateZ;
      exports.calculateW = calculateW;
      exports.exp = exp;
      exports.ln = ln;
      exports.pow = pow;
      exports.slerp = slerp;
      exports.random = random;
      exports.invert = invert;
      exports.conjugate = conjugate;
      exports.fromMat3 = fromMat3;
      exports.fromEuler = fromEuler;
      exports.str = str;
      exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = void 0;
      var glMatrix = _interopRequireWildcard(require_common2());
      var mat3 = _interopRequireWildcard(require_mat3());
      var vec3 = _interopRequireWildcard(require_vec3());
      var vec4 = _interopRequireWildcard(require_vec4());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { "default": obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj["default"] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function create() {
        var out = new glMatrix.ARRAY_TYPE(4);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
        }
        out[3] = 1;
        return out;
      }
      function identity(out) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 1;
        return out;
      }
      function setAxisAngle(out, axis, rad) {
        rad = rad * 0.5;
        var s = Math.sin(rad);
        out[0] = s * axis[0];
        out[1] = s * axis[1];
        out[2] = s * axis[2];
        out[3] = Math.cos(rad);
        return out;
      }
      function getAxisAngle(out_axis, q) {
        var rad = Math.acos(q[3]) * 2;
        var s = Math.sin(rad / 2);
        if (s > glMatrix.EPSILON) {
          out_axis[0] = q[0] / s;
          out_axis[1] = q[1] / s;
          out_axis[2] = q[2] / s;
        } else {
          out_axis[0] = 1;
          out_axis[1] = 0;
          out_axis[2] = 0;
        }
        return rad;
      }
      function getAngle(a, b) {
        var dotproduct = dot(a, b);
        return Math.acos(2 * dotproduct * dotproduct - 1);
      }
      function multiply(out, a, b) {
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = b[0], by = b[1], bz = b[2], bw = b[3];
        out[0] = ax * bw + aw * bx + ay * bz - az * by;
        out[1] = ay * bw + aw * by + az * bx - ax * bz;
        out[2] = az * bw + aw * bz + ax * by - ay * bx;
        out[3] = aw * bw - ax * bx - ay * by - az * bz;
        return out;
      }
      function rotateX(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + aw * bx;
        out[1] = ay * bw + az * bx;
        out[2] = az * bw - ay * bx;
        out[3] = aw * bw - ax * bx;
        return out;
      }
      function rotateY(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var by = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw - az * by;
        out[1] = ay * bw + aw * by;
        out[2] = az * bw + ax * by;
        out[3] = aw * bw - ay * by;
        return out;
      }
      function rotateZ(out, a, rad) {
        rad *= 0.5;
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bz = Math.sin(rad), bw = Math.cos(rad);
        out[0] = ax * bw + ay * bz;
        out[1] = ay * bw - ax * bz;
        out[2] = az * bw + aw * bz;
        out[3] = aw * bw - az * bz;
        return out;
      }
      function calculateW(out, a) {
        var x = a[0], y = a[1], z = a[2];
        out[0] = x;
        out[1] = y;
        out[2] = z;
        out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
        return out;
      }
      function exp(out, a) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var et2 = Math.exp(w);
        var s = r > 0 ? et2 * Math.sin(r) / r : 0;
        out[0] = x * s;
        out[1] = y * s;
        out[2] = z * s;
        out[3] = et2 * Math.cos(r);
        return out;
      }
      function ln(out, a) {
        var x = a[0], y = a[1], z = a[2], w = a[3];
        var r = Math.sqrt(x * x + y * y + z * z);
        var t = r > 0 ? Math.atan2(r, w) / r : 0;
        out[0] = x * t;
        out[1] = y * t;
        out[2] = z * t;
        out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
        return out;
      }
      function pow(out, a, b) {
        ln(out, a);
        scale(out, out, b);
        exp(out, out);
        return out;
      }
      function slerp(out, a, b, t) {
        var ax = a[0], ay = a[1], az = a[2], aw = a[3];
        var bx = b[0], by = b[1], bz = b[2], bw = b[3];
        var omega, cosom, sinom, scale0, scale1;
        cosom = ax * bx + ay * by + az * bz + aw * bw;
        if (cosom < 0) {
          cosom = -cosom;
          bx = -bx;
          by = -by;
          bz = -bz;
          bw = -bw;
        }
        if (1 - cosom > glMatrix.EPSILON) {
          omega = Math.acos(cosom);
          sinom = Math.sin(omega);
          scale0 = Math.sin((1 - t) * omega) / sinom;
          scale1 = Math.sin(t * omega) / sinom;
        } else {
          scale0 = 1 - t;
          scale1 = t;
        }
        out[0] = scale0 * ax + scale1 * bx;
        out[1] = scale0 * ay + scale1 * by;
        out[2] = scale0 * az + scale1 * bz;
        out[3] = scale0 * aw + scale1 * bw;
        return out;
      }
      function random(out) {
        var u1 = glMatrix.RANDOM();
        var u2 = glMatrix.RANDOM();
        var u3 = glMatrix.RANDOM();
        var sqrt1MinusU1 = Math.sqrt(1 - u1);
        var sqrtU1 = Math.sqrt(u1);
        out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
        out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
        out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
        out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
        return out;
      }
      function invert(out, a) {
        var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
        var dot2 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        var invDot = dot2 ? 1 / dot2 : 0;
        out[0] = -a0 * invDot;
        out[1] = -a1 * invDot;
        out[2] = -a2 * invDot;
        out[3] = a3 * invDot;
        return out;
      }
      function conjugate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        out[3] = a[3];
        return out;
      }
      function fromMat3(out, m) {
        var fTrace = m[0] + m[4] + m[8];
        var fRoot;
        if (fTrace > 0) {
          fRoot = Math.sqrt(fTrace + 1);
          out[3] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot;
          out[0] = (m[5] - m[7]) * fRoot;
          out[1] = (m[6] - m[2]) * fRoot;
          out[2] = (m[1] - m[3]) * fRoot;
        } else {
          var i = 0;
          if (m[4] > m[0])
            i = 1;
          if (m[8] > m[i * 3 + i])
            i = 2;
          var j = (i + 1) % 3;
          var k = (i + 2) % 3;
          fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
          out[i] = 0.5 * fRoot;
          fRoot = 0.5 / fRoot;
          out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
          out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
          out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
        }
        return out;
      }
      function fromEuler(out, x, y, z) {
        var halfToRad = 0.5 * Math.PI / 180;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        var sx = Math.sin(x);
        var cx = Math.cos(x);
        var sy = Math.sin(y);
        var cy = Math.cos(y);
        var sz = Math.sin(z);
        var cz = Math.cos(z);
        out[0] = sx * cy * cz - cx * sy * sz;
        out[1] = cx * sy * cz + sx * cy * sz;
        out[2] = cx * cy * sz - sx * sy * cz;
        out[3] = cx * cy * cz + sx * sy * sz;
        return out;
      }
      function str(a) {
        return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
      }
      var clone = vec4.clone;
      exports.clone = clone;
      var fromValues = vec4.fromValues;
      exports.fromValues = fromValues;
      var copy = vec4.copy;
      exports.copy = copy;
      var set = vec4.set;
      exports.set = set;
      var add = vec4.add;
      exports.add = add;
      var mul = multiply;
      exports.mul = mul;
      var scale = vec4.scale;
      exports.scale = scale;
      var dot = vec4.dot;
      exports.dot = dot;
      var lerp = vec4.lerp;
      exports.lerp = lerp;
      var length = vec4.length;
      exports.length = length;
      var len = length;
      exports.len = len;
      var squaredLength = vec4.squaredLength;
      exports.squaredLength = squaredLength;
      var sqrLen = squaredLength;
      exports.sqrLen = sqrLen;
      var normalize = vec4.normalize;
      exports.normalize = normalize;
      var exactEquals = vec4.exactEquals;
      exports.exactEquals = exactEquals;
      var equals = vec4.equals;
      exports.equals = equals;
      var rotationTo = function() {
        var tmpvec3 = vec3.create();
        var xUnitVec3 = vec3.fromValues(1, 0, 0);
        var yUnitVec3 = vec3.fromValues(0, 1, 0);
        return function(out, a, b) {
          var dot2 = vec3.dot(a, b);
          if (dot2 < -0.999999) {
            vec3.cross(tmpvec3, xUnitVec3, a);
            if (vec3.len(tmpvec3) < 1e-6)
              vec3.cross(tmpvec3, yUnitVec3, a);
            vec3.normalize(tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
          } else if (dot2 > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
          } else {
            vec3.cross(tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot2;
            return normalize(out, out);
          }
        };
      }();
      exports.rotationTo = rotationTo;
      var sqlerp = function() {
        var temp1 = create();
        var temp2 = create();
        return function(out, a, b, c, d, t) {
          slerp(temp1, a, d, t);
          slerp(temp2, b, c, t);
          slerp(out, temp1, temp2, 2 * t * (1 - t));
          return out;
        };
      }();
      exports.sqlerp = sqlerp;
      var setAxes = function() {
        var matr = mat3.create();
        return function(out, view, right, up) {
          matr[0] = right[0];
          matr[3] = right[1];
          matr[6] = right[2];
          matr[1] = up[0];
          matr[4] = up[1];
          matr[7] = up[2];
          matr[2] = -view[0];
          matr[5] = -view[1];
          matr[8] = -view[2];
          return normalize(out, fromMat3(out, matr));
        };
      }();
      exports.setAxes = setAxes;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/quaternion.js
  var require_quaternion = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/quaternion.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _mathArray = _interopRequireDefault(require_math_array());
      var _validators = require_validators();
      var _vector = _interopRequireDefault(require_vector4());
      var quat = _interopRequireWildcard(require_quat());
      var vec4 = _interopRequireWildcard(require_vec4());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var IDENTITY_QUATERNION = [0, 0, 0, 1];
      var Quaternion = function(_MathArray) {
        (0, _inherits2.default)(Quaternion2, _MathArray);
        var _super = _createSuper(Quaternion2);
        function Quaternion2() {
          var _this;
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          var w = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
          (0, _classCallCheck2.default)(this, Quaternion2);
          _this = _super.call(this, -0, -0, -0, -0);
          if (Array.isArray(x) && arguments.length === 1) {
            _this.copy(x);
          } else {
            _this.set(x, y, z, w);
          }
          return _this;
        }
        (0, _createClass2.default)(Quaternion2, [{
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            this[3] = array[3];
            return this.check();
          }
        }, {
          key: "set",
          value: function set(x, y, z, w) {
            this[0] = x;
            this[1] = y;
            this[2] = z;
            this[3] = w;
            return this.check();
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            this[0] = object.x;
            this[1] = object.y;
            this[2] = object.z;
            this[3] = object.w;
            return this.check();
          }
        }, {
          key: "fromMatrix3",
          value: function fromMatrix3(m) {
            quat.fromMat3(this, m);
            return this.check();
          }
        }, {
          key: "fromAxisRotation",
          value: function fromAxisRotation(axis, rad) {
            quat.setAxisAngle(this, axis, rad);
            return this.check();
          }
        }, {
          key: "identity",
          value: function identity() {
            quat.identity(this);
            return this.check();
          }
        }, {
          key: "setAxisAngle",
          value: function setAxisAngle(axis, rad) {
            return this.fromAxisRotation(axis, rad);
          }
        }, {
          key: "ELEMENTS",
          get: function get() {
            return 4;
          }
        }, {
          key: "x",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "y",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "z",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "w",
          get: function get() {
            return this[3];
          },
          set: function set(value) {
            this[3] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "len",
          value: function len() {
            return quat.length(this);
          }
        }, {
          key: "lengthSquared",
          value: function lengthSquared() {
            return quat.squaredLength(this);
          }
        }, {
          key: "dot",
          value: function dot(a) {
            return quat.dot(this, a);
          }
        }, {
          key: "rotationTo",
          value: function rotationTo(vectorA, vectorB) {
            quat.rotationTo(this, vectorA, vectorB);
            return this.check();
          }
        }, {
          key: "add",
          value: function add(a) {
            quat.add(this, this, a);
            return this.check();
          }
        }, {
          key: "calculateW",
          value: function calculateW() {
            quat.calculateW(this, this);
            return this.check();
          }
        }, {
          key: "conjugate",
          value: function conjugate() {
            quat.conjugate(this, this);
            return this.check();
          }
        }, {
          key: "invert",
          value: function invert() {
            quat.invert(this, this);
            return this.check();
          }
        }, {
          key: "lerp",
          value: function lerp(a, b, t) {
            if (t === void 0) {
              return this.lerp(this, a, b);
            }
            quat.lerp(this, a, b, t);
            return this.check();
          }
        }, {
          key: "multiplyRight",
          value: function multiplyRight(a) {
            quat.multiply(this, this, a);
            return this.check();
          }
        }, {
          key: "multiplyLeft",
          value: function multiplyLeft(a) {
            quat.multiply(this, a, this);
            return this.check();
          }
        }, {
          key: "normalize",
          value: function normalize() {
            var length = this.len();
            var l = length > 0 ? 1 / length : 0;
            this[0] = this[0] * l;
            this[1] = this[1] * l;
            this[2] = this[2] * l;
            this[3] = this[3] * l;
            if (length === 0) {
              this[3] = 1;
            }
            return this.check();
          }
        }, {
          key: "rotateX",
          value: function rotateX(rad) {
            quat.rotateX(this, this, rad);
            return this.check();
          }
        }, {
          key: "rotateY",
          value: function rotateY(rad) {
            quat.rotateY(this, this, rad);
            return this.check();
          }
        }, {
          key: "rotateZ",
          value: function rotateZ(rad) {
            quat.rotateZ(this, this, rad);
            return this.check();
          }
        }, {
          key: "scale",
          value: function scale(b) {
            quat.scale(this, this, b);
            return this.check();
          }
        }, {
          key: "slerp",
          value: function slerp(arg0, arg1, arg2) {
            var start;
            var target;
            var ratio;
            switch (arguments.length) {
              case 1:
                var _ref = arg0;
                var _ref$start = _ref.start;
                start = _ref$start === void 0 ? IDENTITY_QUATERNION : _ref$start;
                target = _ref.target;
                ratio = _ref.ratio;
                break;
              case 2:
                start = this;
                target = arg0;
                ratio = arg1;
                break;
              default:
                start = arg0;
                target = arg1;
                ratio = arg2;
            }
            quat.slerp(this, start, target, ratio);
            return this.check();
          }
        }, {
          key: "transformVector4",
          value: function transformVector4(vector) {
            var result = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : new _vector.default();
            vec4.transformQuat(result, vector, this);
            return (0, _validators.checkVector)(result, 4);
          }
        }, {
          key: "lengthSq",
          value: function lengthSq() {
            return this.lengthSquared();
          }
        }, {
          key: "setFromAxisAngle",
          value: function setFromAxisAngle(axis, rad) {
            return this.setAxisAngle(axis, rad);
          }
        }, {
          key: "premultiply",
          value: function premultiply(a) {
            return this.multiplyLeft(a);
          }
        }, {
          key: "multiply",
          value: function multiply(a) {
            return this.multiplyRight(a);
          }
        }]);
        return Quaternion2;
      }(_mathArray.default);
      exports.default = Quaternion;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithHoles.js"(exports, module) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr))
          return arr;
      }
      module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"(exports, module) {
      function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null)
          return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err2) {
          _d = true;
          _e = err2;
        } finally {
          try {
            if (!_n && _i["return"] != null)
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayLikeToArray.js"(exports, module) {
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return arrayLikeToArray(o, minLen);
      }
      module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableRest.js"(exports, module) {
      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/slicedToArray.js"(exports, module) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(arr, i) {
        return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
      }
      module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/spherical-coordinates.js
  var require_spherical_coordinates = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/spherical-coordinates.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      var _typeof = require_typeof();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _vector = _interopRequireDefault(require_vector3());
      var _common = require_common();
      var vec3 = _interopRequireWildcard(require_vec3());
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function")
          return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
          return { default: obj };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj.default = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      var EPSILON = 1e-6;
      var EARTH_RADIUS_METERS = 6371e3;
      var SphericalCoordinates = function() {
        function SphericalCoordinates2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$phi = _ref.phi, phi = _ref$phi === void 0 ? 0 : _ref$phi, _ref$theta = _ref.theta, theta = _ref$theta === void 0 ? 0 : _ref$theta, _ref$radius = _ref.radius, radius = _ref$radius === void 0 ? 1 : _ref$radius, bearing = _ref.bearing, pitch = _ref.pitch, altitude = _ref.altitude, _ref$radiusScale = _ref.radiusScale, radiusScale = _ref$radiusScale === void 0 ? EARTH_RADIUS_METERS : _ref$radiusScale;
          (0, _classCallCheck2.default)(this, SphericalCoordinates2);
          (0, _defineProperty2.default)(this, "phi", void 0);
          (0, _defineProperty2.default)(this, "theta", void 0);
          (0, _defineProperty2.default)(this, "radius", void 0);
          (0, _defineProperty2.default)(this, "radiusScale", void 0);
          this.phi = phi;
          this.theta = theta;
          this.radius = radius || altitude || 1;
          this.radiusScale = radiusScale || 1;
          if (bearing !== void 0) {
            this.bearing = bearing;
          }
          if (pitch !== void 0) {
            this.pitch = pitch;
          }
          this.check();
        }
        (0, _createClass2.default)(SphericalCoordinates2, [{
          key: "toString",
          value: function toString() {
            return this.formatString(_common.config);
          }
        }, {
          key: "formatString",
          value: function formatString(_ref2) {
            var _ref2$printTypes = _ref2.printTypes, printTypes = _ref2$printTypes === void 0 ? false : _ref2$printTypes;
            var f = _common.formatValue;
            return "".concat(printTypes ? "Spherical" : "", "[rho:").concat(f(this.radius), ",theta:").concat(f(this.theta), ",phi:").concat(f(this.phi), "]");
          }
        }, {
          key: "equals",
          value: function equals(other) {
            return (0, _common.equals)(this.radius, other.radius) && (0, _common.equals)(this.theta, other.theta) && (0, _common.equals)(this.phi, other.phi);
          }
        }, {
          key: "exactEquals",
          value: function exactEquals(other) {
            return this.radius === other.radius && this.theta === other.theta && this.phi === other.phi;
          }
        }, {
          key: "bearing",
          get: function get() {
            return 180 - (0, _common.degrees)(this.phi);
          },
          set: function set(v) {
            this.phi = Math.PI - (0, _common.radians)(v);
          }
        }, {
          key: "pitch",
          get: function get() {
            return (0, _common.degrees)(this.theta);
          },
          set: function set(v) {
            this.theta = (0, _common.radians)(v);
          }
        }, {
          key: "longitude",
          get: function get() {
            return (0, _common.degrees)(this.phi);
          }
        }, {
          key: "latitude",
          get: function get() {
            return (0, _common.degrees)(this.theta);
          }
        }, {
          key: "lng",
          get: function get() {
            return (0, _common.degrees)(this.phi);
          }
        }, {
          key: "lat",
          get: function get() {
            return (0, _common.degrees)(this.theta);
          }
        }, {
          key: "z",
          get: function get() {
            return (this.radius - 1) * this.radiusScale;
          }
        }, {
          key: "set",
          value: function set(radius, phi, theta) {
            this.radius = radius;
            this.phi = phi;
            this.theta = theta;
            return this.check();
          }
        }, {
          key: "clone",
          value: function clone() {
            return new SphericalCoordinates2().copy(this);
          }
        }, {
          key: "copy",
          value: function copy(other) {
            this.radius = other.radius;
            this.phi = other.phi;
            this.theta = other.theta;
            return this.check();
          }
        }, {
          key: "fromLngLatZ",
          value: function fromLngLatZ(_ref3) {
            var _ref4 = (0, _slicedToArray2.default)(_ref3, 3), lng = _ref4[0], lat = _ref4[1], z = _ref4[2];
            this.radius = 1 + z / this.radiusScale;
            this.phi = (0, _common.radians)(lat);
            this.theta = (0, _common.radians)(lng);
            return this.check();
          }
        }, {
          key: "fromVector3",
          value: function fromVector3(v) {
            this.radius = vec3.length(v);
            if (this.radius > 0) {
              this.theta = Math.atan2(v[0], v[1]);
              this.phi = Math.acos((0, _common.clamp)(v[2] / this.radius, -1, 1));
            }
            return this.check();
          }
        }, {
          key: "toVector3",
          value: function toVector3() {
            return new _vector.default(0, 0, this.radius).rotateX({
              radians: this.theta
            }).rotateZ({
              radians: this.phi
            });
          }
        }, {
          key: "makeSafe",
          value: function makeSafe() {
            this.phi = Math.max(EPSILON, Math.min(Math.PI - EPSILON, this.phi));
            return this;
          }
        }, {
          key: "check",
          value: function check() {
            if (!Number.isFinite(this.phi) || !Number.isFinite(this.theta) || !(this.radius > 0)) {
              throw new Error("SphericalCoordinates: some fields set to invalid numbers");
            }
            return this;
          }
        }]);
        return SphericalCoordinates2;
      }();
      exports.default = SphericalCoordinates;
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/euler.js
  var require_euler = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/euler.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _inherits2 = _interopRequireDefault(require_inherits());
      var _possibleConstructorReturn2 = _interopRequireDefault(require_possibleConstructorReturn());
      var _getPrototypeOf2 = _interopRequireDefault(require_getPrototypeOf());
      var _mathArray = _interopRequireDefault(require_math_array());
      var _quaternion2 = _interopRequireDefault(require_quaternion());
      var _common = require_common();
      var _validators = require_validators();
      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
          var Super = (0, _getPrototypeOf2.default)(Derived), result;
          if (hasNativeReflectConstruct) {
            var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }
          return (0, _possibleConstructorReturn2.default)(this, result);
        };
      }
      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if (typeof Proxy === "function")
          return true;
        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
          return true;
        } catch (e) {
          return false;
        }
      }
      var ERR_UNKNOWN_ORDER = "Unknown Euler angle order";
      var ALMOST_ONE = 0.99999;
      var RotationOrder;
      (function(RotationOrder2) {
        RotationOrder2[RotationOrder2["ZYX"] = 0] = "ZYX";
        RotationOrder2[RotationOrder2["YXZ"] = 1] = "YXZ";
        RotationOrder2[RotationOrder2["XZY"] = 2] = "XZY";
        RotationOrder2[RotationOrder2["ZXY"] = 3] = "ZXY";
        RotationOrder2[RotationOrder2["YZX"] = 4] = "YZX";
        RotationOrder2[RotationOrder2["XYZ"] = 5] = "XYZ";
      })(RotationOrder || (RotationOrder = {}));
      var Euler = function(_MathArray) {
        (0, _inherits2.default)(Euler2, _MathArray);
        var _super = _createSuper(Euler2);
        function Euler2() {
          var _this;
          var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          var order = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Euler2.DefaultOrder;
          (0, _classCallCheck2.default)(this, Euler2);
          _this = _super.call(this, -0, -0, -0, -0);
          if (arguments.length > 0 && Array.isArray(arguments[0])) {
            var _this2;
            (_this2 = _this).fromVector3.apply(_this2, arguments);
          } else {
            _this.set(x, y, z, order);
          }
          return _this;
        }
        (0, _createClass2.default)(Euler2, [{
          key: "ELEMENTS",
          get: function get() {
            return 4;
          }
        }, {
          key: "fromQuaternion",
          value: function fromQuaternion(quaternion) {
            var _quaternion = (0, _slicedToArray2.default)(quaternion, 4), x = _quaternion[0], y = _quaternion[1], z = _quaternion[2], w = _quaternion[3];
            var ysqr = y * y;
            var t0 = -2 * (ysqr + z * z) + 1;
            var t1 = 2 * (x * y + w * z);
            var t2 = -2 * (x * z - w * y);
            var t3 = 2 * (y * z + w * x);
            var t4 = -2 * (x * x + ysqr) + 1;
            t2 = t2 > 1 ? 1 : t2;
            t2 = t2 < -1 ? -1 : t2;
            var roll = Math.atan2(t3, t4);
            var pitch = Math.asin(t2);
            var yaw = Math.atan2(t1, t0);
            return this.set(roll, pitch, yaw, Euler2.RollPitchYaw);
          }
        }, {
          key: "fromObject",
          value: function fromObject(object) {
            throw new Error("not implemented");
          }
        }, {
          key: "copy",
          value: function copy(array) {
            this[0] = array[0];
            this[1] = array[1];
            this[2] = array[2];
            this[3] = Number.isFinite(array[3]) || this.order;
            return this.check();
          }
        }, {
          key: "set",
          value: function set() {
            var x = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            var z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
            var order = arguments.length > 3 ? arguments[3] : void 0;
            this[0] = x;
            this[1] = y;
            this[2] = z;
            this[3] = Number.isFinite(order) ? order : this[3];
            return this.check();
          }
        }, {
          key: "validate",
          value: function validate() {
            return validateOrder(this[3]) && Number.isFinite(this[0]) && Number.isFinite(this[1]) && Number.isFinite(this[2]);
          }
        }, {
          key: "toArray",
          value: function toArray() {
            var array = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            array[offset] = this[0];
            array[offset + 1] = this[1];
            array[offset + 2] = this[2];
            return array;
          }
        }, {
          key: "toArray4",
          value: function toArray4() {
            var array = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            array[offset] = this[0];
            array[offset + 1] = this[1];
            array[offset + 2] = this[2];
            array[offset + 3] = this[3];
            return array;
          }
        }, {
          key: "toVector3",
          value: function toVector3() {
            var result = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [-0, -0, -0];
            result[0] = this[0];
            result[1] = this[1];
            result[2] = this[2];
            return result;
          }
        }, {
          key: "x",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "y",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "z",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "alpha",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "beta",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "gamma",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "phi",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "theta",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "psi",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "roll",
          get: function get() {
            return this[0];
          },
          set: function set(value) {
            this[0] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "pitch",
          get: function get() {
            return this[1];
          },
          set: function set(value) {
            this[1] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "yaw",
          get: function get() {
            return this[2];
          },
          set: function set(value) {
            this[2] = (0, _validators.checkNumber)(value);
          }
        }, {
          key: "order",
          get: function get() {
            return this[3];
          },
          set: function set(value) {
            this[3] = checkOrder(value);
          }
        }, {
          key: "fromVector3",
          value: function fromVector3(v, order) {
            return this.set(v[0], v[1], v[2], Number.isFinite(order) ? order : this[3]);
          }
        }, {
          key: "fromArray",
          value: function fromArray(array) {
            var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            this[0] = array[0 + offset];
            this[1] = array[1 + offset];
            this[2] = array[2 + offset];
            if (array[3] !== void 0) {
              this[3] = array[3];
            }
            return this.check();
          }
        }, {
          key: "fromRollPitchYaw",
          value: function fromRollPitchYaw(roll, pitch, yaw) {
            return this.set(roll, pitch, yaw, RotationOrder.ZYX);
          }
        }, {
          key: "fromRotationMatrix",
          value: function fromRotationMatrix(m) {
            var order = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Euler2.DefaultOrder;
            this._fromRotationMatrix(m, order);
            return this.check();
          }
        }, {
          key: "getRotationMatrix",
          value: function getRotationMatrix(m) {
            return this._getRotationMatrix(m);
          }
        }, {
          key: "getQuaternion",
          value: function getQuaternion() {
            var q = new _quaternion2.default();
            switch (this[4]) {
              case RotationOrder.XYZ:
                return q.rotateX(this[0]).rotateY(this[1]).rotateZ(this[2]);
              case RotationOrder.YXZ:
                return q.rotateY(this[0]).rotateX(this[1]).rotateZ(this[2]);
              case RotationOrder.ZXY:
                return q.rotateZ(this[0]).rotateX(this[1]).rotateY(this[2]);
              case RotationOrder.ZYX:
                return q.rotateZ(this[0]).rotateY(this[1]).rotateX(this[2]);
              case RotationOrder.YZX:
                return q.rotateY(this[0]).rotateZ(this[1]).rotateX(this[2]);
              case RotationOrder.XZY:
                return q.rotateX(this[0]).rotateZ(this[1]).rotateY(this[2]);
              default:
                throw new Error(ERR_UNKNOWN_ORDER);
            }
          }
        }, {
          key: "_fromRotationMatrix",
          value: function _fromRotationMatrix(m) {
            var order = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Euler2.DefaultOrder;
            var m11 = m[0], m12 = m[4], m13 = m[8];
            var m21 = m[1], m22 = m[5], m23 = m[9];
            var m31 = m[2], m32 = m[6], m33 = m[10];
            order = order || this[3];
            switch (order) {
              case Euler2.XYZ:
                this[1] = Math.asin((0, _common.clamp)(m13, -1, 1));
                if (Math.abs(m13) < ALMOST_ONE) {
                  this[0] = Math.atan2(-m23, m33);
                  this[2] = Math.atan2(-m12, m11);
                } else {
                  this[0] = Math.atan2(m32, m22);
                  this[2] = 0;
                }
                break;
              case Euler2.YXZ:
                this[0] = Math.asin(-(0, _common.clamp)(m23, -1, 1));
                if (Math.abs(m23) < ALMOST_ONE) {
                  this[1] = Math.atan2(m13, m33);
                  this[2] = Math.atan2(m21, m22);
                } else {
                  this[1] = Math.atan2(-m31, m11);
                  this[2] = 0;
                }
                break;
              case Euler2.ZXY:
                this[0] = Math.asin((0, _common.clamp)(m32, -1, 1));
                if (Math.abs(m32) < ALMOST_ONE) {
                  this[1] = Math.atan2(-m31, m33);
                  this[2] = Math.atan2(-m12, m22);
                } else {
                  this[1] = 0;
                  this[2] = Math.atan2(m21, m11);
                }
                break;
              case Euler2.ZYX:
                this[1] = Math.asin(-(0, _common.clamp)(m31, -1, 1));
                if (Math.abs(m31) < ALMOST_ONE) {
                  this[0] = Math.atan2(m32, m33);
                  this[2] = Math.atan2(m21, m11);
                } else {
                  this[0] = 0;
                  this[2] = Math.atan2(-m12, m22);
                }
                break;
              case Euler2.YZX:
                this[2] = Math.asin((0, _common.clamp)(m21, -1, 1));
                if (Math.abs(m21) < ALMOST_ONE) {
                  this[0] = Math.atan2(-m23, m22);
                  this[1] = Math.atan2(-m31, m11);
                } else {
                  this[0] = 0;
                  this[1] = Math.atan2(m13, m33);
                }
                break;
              case Euler2.XZY:
                this[2] = Math.asin(-(0, _common.clamp)(m12, -1, 1));
                if (Math.abs(m12) < ALMOST_ONE) {
                  this[0] = Math.atan2(m32, m22);
                  this[1] = Math.atan2(m13, m11);
                } else {
                  this[0] = Math.atan2(-m23, m33);
                  this[1] = 0;
                }
                break;
              default:
                throw new Error(ERR_UNKNOWN_ORDER);
            }
            this[3] = order;
            return this;
          }
        }, {
          key: "_getRotationMatrix",
          value: function _getRotationMatrix(result) {
            var te = result || [-0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0, -0];
            var x = this.x, y = this.y, z = this.z;
            var a = Math.cos(x);
            var c = Math.cos(y);
            var e = Math.cos(z);
            var b = Math.sin(x);
            var d = Math.sin(y);
            var f = Math.sin(z);
            switch (this[3]) {
              case Euler2.XYZ: {
                var ae = a * e, af = a * f, be = b * e, bf = b * f;
                te[0] = c * e;
                te[4] = -c * f;
                te[8] = d;
                te[1] = af + be * d;
                te[5] = ae - bf * d;
                te[9] = -b * c;
                te[2] = bf - ae * d;
                te[6] = be + af * d;
                te[10] = a * c;
                break;
              }
              case Euler2.YXZ: {
                var ce = c * e, cf = c * f, de = d * e, df = d * f;
                te[0] = ce + df * b;
                te[4] = de * b - cf;
                te[8] = a * d;
                te[1] = a * f;
                te[5] = a * e;
                te[9] = -b;
                te[2] = cf * b - de;
                te[6] = df + ce * b;
                te[10] = a * c;
                break;
              }
              case Euler2.ZXY: {
                var _ce = c * e, _cf = c * f, _de = d * e, _df = d * f;
                te[0] = _ce - _df * b;
                te[4] = -a * f;
                te[8] = _de + _cf * b;
                te[1] = _cf + _de * b;
                te[5] = a * e;
                te[9] = _df - _ce * b;
                te[2] = -a * d;
                te[6] = b;
                te[10] = a * c;
                break;
              }
              case Euler2.ZYX: {
                var _ae = a * e, _af = a * f, _be = b * e, _bf = b * f;
                te[0] = c * e;
                te[4] = _be * d - _af;
                te[8] = _ae * d + _bf;
                te[1] = c * f;
                te[5] = _bf * d + _ae;
                te[9] = _af * d - _be;
                te[2] = -d;
                te[6] = b * c;
                te[10] = a * c;
                break;
              }
              case Euler2.YZX: {
                var ac = a * c, ad = a * d, bc = b * c, bd = b * d;
                te[0] = c * e;
                te[4] = bd - ac * f;
                te[8] = bc * f + ad;
                te[1] = f;
                te[5] = a * e;
                te[9] = -b * e;
                te[2] = -d * e;
                te[6] = ad * f + bc;
                te[10] = ac - bd * f;
                break;
              }
              case Euler2.XZY: {
                var _ac = a * c, _ad = a * d, _bc = b * c, _bd = b * d;
                te[0] = c * e;
                te[4] = -f;
                te[8] = d * e;
                te[1] = _ac * f + _bd;
                te[5] = a * e;
                te[9] = _ad * f - _bc;
                te[2] = _bc * f - _ad;
                te[6] = b * e;
                te[10] = _bd * f + _ac;
                break;
              }
              default:
                throw new Error(ERR_UNKNOWN_ORDER);
            }
            te[3] = 0;
            te[7] = 0;
            te[11] = 0;
            te[12] = 0;
            te[13] = 0;
            te[14] = 0;
            te[15] = 1;
            return te;
          }
        }, {
          key: "toQuaternion",
          value: function toQuaternion() {
            var cy = Math.cos(this.yaw * 0.5);
            var sy = Math.sin(this.yaw * 0.5);
            var cr = Math.cos(this.roll * 0.5);
            var sr = Math.sin(this.roll * 0.5);
            var cp = Math.cos(this.pitch * 0.5);
            var sp = Math.sin(this.pitch * 0.5);
            var w = cy * cr * cp + sy * sr * sp;
            var x = cy * sr * cp - sy * cr * sp;
            var y = cy * cr * sp + sy * sr * cp;
            var z = sy * cr * cp - cy * sr * sp;
            return new _quaternion2.default(x, y, z, w);
          }
        }], [{
          key: "ZYX",
          get: function get() {
            return RotationOrder.ZYX;
          }
        }, {
          key: "YXZ",
          get: function get() {
            return RotationOrder.YXZ;
          }
        }, {
          key: "XZY",
          get: function get() {
            return RotationOrder.XZY;
          }
        }, {
          key: "ZXY",
          get: function get() {
            return RotationOrder.ZXY;
          }
        }, {
          key: "YZX",
          get: function get() {
            return RotationOrder.YZX;
          }
        }, {
          key: "XYZ",
          get: function get() {
            return RotationOrder.XYZ;
          }
        }, {
          key: "RollPitchYaw",
          get: function get() {
            return RotationOrder.ZYX;
          }
        }, {
          key: "DefaultOrder",
          get: function get() {
            return RotationOrder.ZYX;
          }
        }, {
          key: "RotationOrders",
          get: function get() {
            return RotationOrder;
          }
        }, {
          key: "rotationOrder",
          value: function rotationOrder(order) {
            return RotationOrder[order];
          }
        }]);
        return Euler2;
      }(_mathArray.default);
      exports.default = Euler;
      function validateOrder(value) {
        return value >= 0 && value < 6;
      }
      function checkOrder(value) {
        if (value < 0 && value >= 6) {
          throw new Error(ERR_UNKNOWN_ORDER);
        }
        return value;
      }
    }
  });

  // node_modules/@math.gl/core/dist/es5/classes/pose.js
  var require_pose = __commonJS({
    "node_modules/@math.gl/core/dist/es5/classes/pose.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _matrix = _interopRequireDefault(require_matrix4());
      var _vector = _interopRequireDefault(require_vector3());
      var _euler = _interopRequireDefault(require_euler());
      var Pose = function() {
        function Pose2() {
          var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, _ref$x = _ref.x, x = _ref$x === void 0 ? 0 : _ref$x, _ref$y = _ref.y, y = _ref$y === void 0 ? 0 : _ref$y, _ref$z = _ref.z, z = _ref$z === void 0 ? 0 : _ref$z, _ref$roll = _ref.roll, roll = _ref$roll === void 0 ? 0 : _ref$roll, _ref$pitch = _ref.pitch, pitch = _ref$pitch === void 0 ? 0 : _ref$pitch, _ref$yaw = _ref.yaw, yaw = _ref$yaw === void 0 ? 0 : _ref$yaw, position = _ref.position, orientation = _ref.orientation;
          (0, _classCallCheck2.default)(this, Pose2);
          (0, _defineProperty2.default)(this, "position", void 0);
          (0, _defineProperty2.default)(this, "orientation", void 0);
          if (Array.isArray(position) && position.length === 3) {
            this.position = new _vector.default(position);
          } else {
            this.position = new _vector.default(x, y, z);
          }
          if (Array.isArray(orientation) && orientation.length === 4) {
            this.orientation = new _euler.default(orientation, orientation[3]);
          } else {
            this.orientation = new _euler.default(roll, pitch, yaw, _euler.default.RollPitchYaw);
          }
        }
        (0, _createClass2.default)(Pose2, [{
          key: "x",
          get: function get() {
            return this.position.x;
          },
          set: function set(value) {
            this.position.x = value;
          }
        }, {
          key: "y",
          get: function get() {
            return this.position.y;
          },
          set: function set(value) {
            this.position.y = value;
          }
        }, {
          key: "z",
          get: function get() {
            return this.position.z;
          },
          set: function set(value) {
            this.position.z = value;
          }
        }, {
          key: "roll",
          get: function get() {
            return this.orientation.roll;
          },
          set: function set(value) {
            this.orientation.roll = value;
          }
        }, {
          key: "pitch",
          get: function get() {
            return this.orientation.pitch;
          },
          set: function set(value) {
            this.orientation.pitch = value;
          }
        }, {
          key: "yaw",
          get: function get() {
            return this.orientation.yaw;
          },
          set: function set(value) {
            this.orientation.yaw = value;
          }
        }, {
          key: "getPosition",
          value: function getPosition() {
            return this.position;
          }
        }, {
          key: "getOrientation",
          value: function getOrientation() {
            return this.orientation;
          }
        }, {
          key: "equals",
          value: function equals(pose) {
            if (!pose) {
              return false;
            }
            return this.position.equals(pose.position) && this.orientation.equals(pose.orientation);
          }
        }, {
          key: "exactEquals",
          value: function exactEquals(pose) {
            if (!pose) {
              return false;
            }
            return this.position.exactEquals(pose.position) && this.orientation.exactEquals(pose.orientation);
          }
        }, {
          key: "getTransformationMatrix",
          value: function getTransformationMatrix() {
            var sr = Math.sin(this.roll);
            var sp = Math.sin(this.pitch);
            var sw = Math.sin(this.yaw);
            var cr = Math.cos(this.roll);
            var cp = Math.cos(this.pitch);
            var cw = Math.cos(this.yaw);
            return new _matrix.default().setRowMajor(cw * cp, -sw * cr + cw * sp * sr, sw * sr + cw * sp * cr, this.x, sw * cp, cw * cr + sw * sp * sr, -cw * sr + sw * sp * cr, this.y, -sp, cp * sr, cp * cr, this.z, 0, 0, 0, 1);
          }
        }, {
          key: "getTransformationMatrixFromPose",
          value: function getTransformationMatrixFromPose(pose) {
            return new _matrix.default().multiplyRight(this.getTransformationMatrix()).multiplyRight(pose.getTransformationMatrix().invert());
          }
        }, {
          key: "getTransformationMatrixToPose",
          value: function getTransformationMatrixToPose(pose) {
            return new _matrix.default().multiplyRight(pose.getTransformationMatrix()).multiplyRight(this.getTransformationMatrix().invert());
          }
        }]);
        return Pose2;
      }();
      exports.default = Pose;
    }
  });

  // node_modules/@math.gl/core/dist/es5/lib/math-utils.js
  var require_math_utils = __commonJS({
    "node_modules/@math.gl/core/dist/es5/lib/math-utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _default = {
        EPSILON1: 0.1,
        EPSILON2: 0.01,
        EPSILON3: 1e-3,
        EPSILON4: 1e-4,
        EPSILON5: 1e-5,
        EPSILON6: 1e-6,
        EPSILON7: 1e-7,
        EPSILON8: 1e-8,
        EPSILON9: 1e-9,
        EPSILON10: 1e-10,
        EPSILON11: 1e-11,
        EPSILON12: 1e-12,
        EPSILON13: 1e-13,
        EPSILON14: 1e-14,
        EPSILON15: 1e-15,
        EPSILON16: 1e-16,
        EPSILON17: 1e-17,
        EPSILON18: 1e-18,
        EPSILON19: 1e-19,
        EPSILON20: 1e-20,
        PI_OVER_TWO: Math.PI / 2,
        PI_OVER_FOUR: Math.PI / 4,
        PI_OVER_SIX: Math.PI / 6,
        TWO_PI: Math.PI * 2
      };
      exports.default = _default;
    }
  });

  // node_modules/@math.gl/core/dist/es5/index.js
  var require_es5 = __commonJS({
    "node_modules/@math.gl/core/dist/es5/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "Vector2", {
        enumerable: true,
        get: function get() {
          return _vector.default;
        }
      });
      Object.defineProperty(exports, "Vector3", {
        enumerable: true,
        get: function get() {
          return _vector2.default;
        }
      });
      Object.defineProperty(exports, "Vector4", {
        enumerable: true,
        get: function get() {
          return _vector3.default;
        }
      });
      Object.defineProperty(exports, "Matrix3", {
        enumerable: true,
        get: function get() {
          return _matrix.default;
        }
      });
      Object.defineProperty(exports, "Matrix4", {
        enumerable: true,
        get: function get() {
          return _matrix2.default;
        }
      });
      Object.defineProperty(exports, "Quaternion", {
        enumerable: true,
        get: function get() {
          return _quaternion.default;
        }
      });
      Object.defineProperty(exports, "SphericalCoordinates", {
        enumerable: true,
        get: function get() {
          return _sphericalCoordinates.default;
        }
      });
      Object.defineProperty(exports, "_SphericalCoordinates", {
        enumerable: true,
        get: function get() {
          return _sphericalCoordinates.default;
        }
      });
      Object.defineProperty(exports, "Pose", {
        enumerable: true,
        get: function get() {
          return _pose.default;
        }
      });
      Object.defineProperty(exports, "_Pose", {
        enumerable: true,
        get: function get() {
          return _pose.default;
        }
      });
      Object.defineProperty(exports, "Euler", {
        enumerable: true,
        get: function get() {
          return _euler.default;
        }
      });
      Object.defineProperty(exports, "_Euler", {
        enumerable: true,
        get: function get() {
          return _euler.default;
        }
      });
      Object.defineProperty(exports, "_MathUtils", {
        enumerable: true,
        get: function get() {
          return _mathUtils.default;
        }
      });
      Object.defineProperty(exports, "assert", {
        enumerable: true,
        get: function get() {
          return _assert.default;
        }
      });
      Object.defineProperty(exports, "config", {
        enumerable: true,
        get: function get() {
          return _common.config;
        }
      });
      Object.defineProperty(exports, "configure", {
        enumerable: true,
        get: function get() {
          return _common.configure;
        }
      });
      Object.defineProperty(exports, "formatValue", {
        enumerable: true,
        get: function get() {
          return _common.formatValue;
        }
      });
      Object.defineProperty(exports, "isArray", {
        enumerable: true,
        get: function get() {
          return _common.isArray;
        }
      });
      Object.defineProperty(exports, "clone", {
        enumerable: true,
        get: function get() {
          return _common.clone;
        }
      });
      Object.defineProperty(exports, "equals", {
        enumerable: true,
        get: function get() {
          return _common.equals;
        }
      });
      Object.defineProperty(exports, "exactEquals", {
        enumerable: true,
        get: function get() {
          return _common.exactEquals;
        }
      });
      Object.defineProperty(exports, "toRadians", {
        enumerable: true,
        get: function get() {
          return _common.toRadians;
        }
      });
      Object.defineProperty(exports, "toDegrees", {
        enumerable: true,
        get: function get() {
          return _common.toDegrees;
        }
      });
      Object.defineProperty(exports, "radians", {
        enumerable: true,
        get: function get() {
          return _common.radians;
        }
      });
      Object.defineProperty(exports, "degrees", {
        enumerable: true,
        get: function get() {
          return _common.degrees;
        }
      });
      Object.defineProperty(exports, "sin", {
        enumerable: true,
        get: function get() {
          return _common.sin;
        }
      });
      Object.defineProperty(exports, "cos", {
        enumerable: true,
        get: function get() {
          return _common.cos;
        }
      });
      Object.defineProperty(exports, "tan", {
        enumerable: true,
        get: function get() {
          return _common.tan;
        }
      });
      Object.defineProperty(exports, "asin", {
        enumerable: true,
        get: function get() {
          return _common.asin;
        }
      });
      Object.defineProperty(exports, "acos", {
        enumerable: true,
        get: function get() {
          return _common.acos;
        }
      });
      Object.defineProperty(exports, "atan", {
        enumerable: true,
        get: function get() {
          return _common.atan;
        }
      });
      Object.defineProperty(exports, "clamp", {
        enumerable: true,
        get: function get() {
          return _common.clamp;
        }
      });
      Object.defineProperty(exports, "lerp", {
        enumerable: true,
        get: function get() {
          return _common.lerp;
        }
      });
      Object.defineProperty(exports, "withEpsilon", {
        enumerable: true,
        get: function get() {
          return _common.withEpsilon;
        }
      });
      var _vector = _interopRequireDefault(require_vector2());
      var _vector2 = _interopRequireDefault(require_vector3());
      var _vector3 = _interopRequireDefault(require_vector4());
      var _matrix = _interopRequireDefault(require_matrix3());
      var _matrix2 = _interopRequireDefault(require_matrix4());
      var _quaternion = _interopRequireDefault(require_quaternion());
      var _sphericalCoordinates = _interopRequireDefault(require_spherical_coordinates());
      var _pose = _interopRequireDefault(require_pose());
      var _euler = _interopRequireDefault(require_euler());
      var _mathUtils = _interopRequireDefault(require_math_utils());
      var _assert = _interopRequireDefault(require_assert());
      var _common = require_common();
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/polygon-utils.js
  var require_polygon_utils = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/polygon-utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.modifyPolygonWindingDirection = modifyPolygonWindingDirection;
      exports.getPolygonWindingDirection = getPolygonWindingDirection;
      exports.getPolygonSignedArea = getPolygonSignedArea;
      exports.forEachSegmentInPolygon = forEachSegmentInPolygon;
      exports.modifyPolygonWindingDirectionPoints = modifyPolygonWindingDirectionPoints;
      exports.getPolygonWindingDirectionPoints = getPolygonWindingDirectionPoints;
      exports.getPolygonSignedAreaPoints = getPolygonSignedAreaPoints;
      exports.forEachSegmentInPolygonPoints = forEachSegmentInPolygonPoints;
      exports.WINDING = void 0;
      var _core = require_es5();
      var WINDING = {
        CLOCKWISE: 1,
        COUNTER_CLOCKWISE: -1
      };
      exports.WINDING = WINDING;
      function modifyPolygonWindingDirection(points, direction) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var windingDirection = getPolygonWindingDirection(points, options);
        if (windingDirection !== direction) {
          reversePolygon(points, options);
          return true;
        }
        return false;
      }
      function getPolygonWindingDirection(points) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Math.sign(getPolygonSignedArea(points, options));
      }
      function getPolygonSignedArea(points) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _options$start = options.start, start = _options$start === void 0 ? 0 : _options$start, _options$end = options.end, end = _options$end === void 0 ? points.length : _options$end;
        var dim = options.size || 2;
        var area = 0;
        for (var i = start, j = end - dim; i < end; i += dim) {
          area += (points[i] - points[j]) * (points[i + 1] + points[j + 1]);
          j = i;
        }
        return area / 2;
      }
      function forEachSegmentInPolygon(points, visitor) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var _options$start2 = options.start, start = _options$start2 === void 0 ? 0 : _options$start2, _options$end2 = options.end, end = _options$end2 === void 0 ? points.length : _options$end2, _options$size = options.size, size = _options$size === void 0 ? 2 : _options$size, isClosed = options.isClosed;
        var numPoints = (end - start) / size;
        for (var i = 0; i < numPoints - 1; ++i) {
          visitor(points[start + i * size], points[start + i * size + 1], points[start + (i + 1) * size], points[start + (i + 1) * size + 1], i, i + 1);
        }
        var endPointIndex = start + (numPoints - 1) * size;
        var isClosedEx = isClosed || (0, _core.equals)(points[start], points[endPointIndex]) && (0, _core.equals)(points[start + 1], points[endPointIndex + 1]);
        if (!isClosedEx) {
          visitor(points[endPointIndex], points[endPointIndex + 1], points[start], points[start + 1], numPoints - 1, 0);
        }
      }
      function reversePolygon(points, options) {
        var _options$start3 = options.start, start = _options$start3 === void 0 ? 0 : _options$start3, _options$end3 = options.end, end = _options$end3 === void 0 ? points.length : _options$end3, _options$size2 = options.size, size = _options$size2 === void 0 ? 2 : _options$size2;
        var numPoints = (end - start) / size;
        var numSwaps = Math.floor(numPoints / 2);
        for (var i = 0; i < numSwaps; ++i) {
          var b1 = start + i * size;
          var b2 = start + (numPoints - 1 - i) * size;
          for (var j = 0; j < size; ++j) {
            var tmp = points[b1 + j];
            points[b1 + j] = points[b2 + j];
            points[b2 + j] = tmp;
          }
        }
      }
      function modifyPolygonWindingDirectionPoints(points, direction) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var currentDirection = getPolygonWindingDirectionPoints(points, options);
        if (currentDirection !== direction) {
          points.reverse();
          return true;
        }
        return false;
      }
      function getPolygonWindingDirectionPoints(points) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return Math.sign(getPolygonSignedAreaPoints(points, options));
      }
      function getPolygonSignedAreaPoints(points) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var _options$start4 = options.start, start = _options$start4 === void 0 ? 0 : _options$start4, _options$end4 = options.end, end = _options$end4 === void 0 ? points.length : _options$end4;
        var area = 0;
        for (var i = start, j = end - 1; i < end; ++i) {
          area += (points[i][0] - points[j][0]) * (points[i][1] + points[j][1]);
          j = i;
        }
        return area / 2;
      }
      function forEachSegmentInPolygonPoints(points, visitor) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var _options$start5 = options.start, start = _options$start5 === void 0 ? 0 : _options$start5, _options$end5 = options.end, end = _options$end5 === void 0 ? points.length : _options$end5, isClosed = options.isClosed;
        for (var i = start; i < end - 1; ++i) {
          visitor(points[i], points[i + 1], i, i + 1);
        }
        var isClosedEx = isClosed || (0, _core.equals)(points[end - 1], points[0]);
        if (!isClosedEx) {
          visitor(points[end - 1], points[0], end - 1, 0);
        }
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/polygon.js
  var require_polygon = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/polygon.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = void 0;
      var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
      var _createClass2 = _interopRequireDefault(require_createClass());
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _core = require_es5();
      var _polygonUtils = require_polygon_utils();
      var Polygon = function() {
        function Polygon2(points) {
          var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          (0, _classCallCheck2.default)(this, Polygon2);
          (0, _defineProperty2.default)(this, "points", void 0);
          (0, _defineProperty2.default)(this, "isFlatArray", void 0);
          (0, _defineProperty2.default)(this, "options", void 0);
          this.points = points;
          this.isFlatArray = !(0, _core.isArray)(points[0]);
          this.options = {
            start: options.start || 0,
            end: options.end || points.length,
            size: options.size || 2,
            isClosed: options.isClosed
          };
          Object.freeze(this);
        }
        (0, _createClass2.default)(Polygon2, [{
          key: "getSignedArea",
          value: function getSignedArea() {
            if (this.isFlatArray)
              return (0, _polygonUtils.getPolygonSignedArea)(this.points, this.options);
            return (0, _polygonUtils.getPolygonSignedAreaPoints)(this.points, this.options);
          }
        }, {
          key: "getArea",
          value: function getArea() {
            return Math.abs(this.getSignedArea());
          }
        }, {
          key: "getWindingDirection",
          value: function getWindingDirection() {
            return Math.sign(this.getSignedArea());
          }
        }, {
          key: "forEachSegment",
          value: function forEachSegment(visitor) {
            if (this.isFlatArray) {
              (0, _polygonUtils.forEachSegmentInPolygon)(this.points, function(x1, y1, x2, y2, i1, i2) {
                visitor([x1, y1], [x2, y2], i1, i2);
              }, this.options);
            } else {
              (0, _polygonUtils.forEachSegmentInPolygonPoints)(this.points, visitor, this.options);
            }
          }
        }, {
          key: "modifyWindingDirection",
          value: function modifyWindingDirection(direction) {
            if (this.isFlatArray) {
              return (0, _polygonUtils.modifyPolygonWindingDirection)(this.points, direction, this.options);
            }
            return (0, _polygonUtils.modifyPolygonWindingDirectionPoints)(this.points, direction, this.options);
          }
        }]);
        return Polygon2;
      }();
      exports.default = Polygon;
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/earcut.js
  var require_earcut = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/earcut.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.earcut = earcut;
      var _polygonUtils = require_polygon_utils();
      function earcut(positions, holeIndices) {
        var dim = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 2;
        var areas = arguments.length > 3 ? arguments[3] : void 0;
        var hasHoles = holeIndices && holeIndices.length;
        var outerLen = hasHoles ? holeIndices[0] * dim : positions.length;
        var outerNode = linkedList(positions, 0, outerLen, dim, true, areas && areas[0]);
        var triangles = [];
        if (!outerNode || outerNode.next === outerNode.prev)
          return triangles;
        var invSize;
        var maxX;
        var maxY;
        var minX;
        var minY;
        var x;
        var y;
        if (hasHoles)
          outerNode = eliminateHoles(positions, holeIndices, outerNode, dim, areas);
        if (positions.length > 80 * dim) {
          minX = maxX = positions[0];
          minY = maxY = positions[1];
          for (var i = dim; i < outerLen; i += dim) {
            x = positions[i];
            y = positions[i + 1];
            if (x < minX)
              minX = x;
            if (y < minY)
              minY = y;
            if (x > maxX)
              maxX = x;
            if (y > maxY)
              maxY = y;
          }
          invSize = Math.max(maxX - minX, maxY - minY);
          invSize = invSize !== 0 ? 1 / invSize : 0;
        }
        earcutLinked(outerNode, triangles, dim, minX, minY, invSize);
        return triangles;
      }
      function linkedList(data, start, end, dim, clockwise, area2) {
        var i;
        var last;
        if (area2 === void 0) {
          area2 = (0, _polygonUtils.getPolygonSignedArea)(data, {
            start,
            end,
            size: dim
          });
        }
        if (clockwise === area2 < 0) {
          for (i = start; i < end; i += dim) {
            last = insertNode(i, data[i], data[i + 1], last);
          }
        } else {
          for (i = end - dim; i >= start; i -= dim) {
            last = insertNode(i, data[i], data[i + 1], last);
          }
        }
        if (last && equals(last, last.next)) {
          removeNode(last);
          last = last.next;
        }
        return last;
      }
      function filterPoints(start, end) {
        if (!start)
          return start;
        if (!end)
          end = start;
        var p = start;
        var again;
        do {
          again = false;
          if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next)
              break;
            again = true;
          } else {
            p = p.next;
          }
        } while (again || p !== end);
        return end;
      }
      function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
        if (!ear)
          return;
        if (!pass && invSize)
          indexCurve(ear, minX, minY, invSize);
        var stop = ear;
        var prev;
        var next;
        while (ear.prev !== ear.next) {
          prev = ear.prev;
          next = ear.next;
          if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            triangles.push(prev.i / dim);
            triangles.push(ear.i / dim);
            triangles.push(next.i / dim);
            removeNode(ear);
            ear = next.next;
            stop = next.next;
            continue;
          }
          ear = next;
          if (ear === stop) {
            if (!pass) {
              earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
            } else if (pass === 1) {
              ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
              earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
            } else if (pass === 2) {
              splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }
            break;
          }
        }
      }
      function isEar(ear) {
        var a = ear.prev;
        var b = ear;
        var c = ear.next;
        if (area(a, b, c) >= 0)
          return false;
        var p = ear.next.next;
        while (p !== ear.prev) {
          if (pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
            return false;
          p = p.next;
        }
        return true;
      }
      function isEarHashed(ear, minX, minY, invSize) {
        var a = ear.prev;
        var b = ear;
        var c = ear.next;
        if (area(a, b, c) >= 0)
          return false;
        var minTX = a.x < b.x ? a.x < c.x ? a.x : c.x : b.x < c.x ? b.x : c.x;
        var minTY = a.y < b.y ? a.y < c.y ? a.y : c.y : b.y < c.y ? b.y : c.y;
        var maxTX = a.x > b.x ? a.x > c.x ? a.x : c.x : b.x > c.x ? b.x : c.x;
        var maxTY = a.y > b.y ? a.y > c.y ? a.y : c.y : b.y > c.y ? b.y : c.y;
        var minZ = zOrder(minTX, minTY, minX, minY, invSize);
        var maxZ = zOrder(maxTX, maxTY, minX, minY, invSize);
        var p = ear.prevZ;
        var n = ear.nextZ;
        while (p && p.z >= minZ && n && n.z <= maxZ) {
          if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
            return false;
          p = p.prevZ;
          if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
            return false;
          n = n.nextZ;
        }
        while (p && p.z >= minZ) {
          if (p !== ear.prev && p !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, p.x, p.y) && area(p.prev, p, p.next) >= 0)
            return false;
          p = p.prevZ;
        }
        while (n && n.z <= maxZ) {
          if (n !== ear.prev && n !== ear.next && pointInTriangle(a.x, a.y, b.x, b.y, c.x, c.y, n.x, n.y) && area(n.prev, n, n.next) >= 0)
            return false;
          n = n.nextZ;
        }
        return true;
      }
      function cureLocalIntersections(start, triangles, dim) {
        var p = start;
        do {
          var a = p.prev;
          var b = p.next.next;
          if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
            triangles.push(a.i / dim);
            triangles.push(p.i / dim);
            triangles.push(b.i / dim);
            removeNode(p);
            removeNode(p.next);
            p = start = b;
          }
          p = p.next;
        } while (p !== start);
        return filterPoints(p);
      }
      function splitEarcut(start, triangles, dim, minX, minY, invSize) {
        var a = start;
        do {
          var b = a.next.next;
          while (b !== a.prev) {
            if (a.i !== b.i && isValidDiagonal(a, b)) {
              var c = splitPolygon(a, b);
              a = filterPoints(a, a.next);
              c = filterPoints(c, c.next);
              earcutLinked(a, triangles, dim, minX, minY, invSize);
              earcutLinked(c, triangles, dim, minX, minY, invSize);
              return;
            }
            b = b.next;
          }
          a = a.next;
        } while (a !== start);
      }
      function eliminateHoles(data, holeIndices, outerNode, dim, areas) {
        var queue = [];
        var i;
        var len;
        var start;
        var end;
        var list;
        for (i = 0, len = holeIndices.length; i < len; i++) {
          start = holeIndices[i] * dim;
          end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          list = linkedList(data, start, end, dim, false, areas && areas[i + 1]);
          if (list === list.next)
            list.steiner = true;
          queue.push(getLeftmost(list));
        }
        queue.sort(compareX);
        for (i = 0; i < queue.length; i++) {
          eliminateHole(queue[i], outerNode);
          outerNode = filterPoints(outerNode, outerNode.next);
        }
        return outerNode;
      }
      function compareX(a, b) {
        return a.x - b.x;
      }
      function eliminateHole(hole, outerNode) {
        outerNode = findHoleBridge(hole, outerNode);
        if (outerNode) {
          var b = splitPolygon(outerNode, hole);
          filterPoints(outerNode, outerNode.next);
          filterPoints(b, b.next);
        }
      }
      function findHoleBridge(hole, outerNode) {
        var p = outerNode;
        var hx = hole.x;
        var hy = hole.y;
        var qx = -Infinity;
        var m;
        do {
          if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
              qx = x;
              if (x === hx) {
                if (hy === p.y)
                  return p;
                if (hy === p.next.y)
                  return p.next;
              }
              m = p.x < p.next.x ? p : p.next;
            }
          }
          p = p.next;
        } while (p !== outerNode);
        if (!m)
          return null;
        if (hx === qx)
          return m;
        var stop = m;
        var mx = m.x;
        var my = m.y;
        var tanMin = Infinity;
        var tan;
        p = m;
        do {
          if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
            tan = Math.abs(hy - p.y) / (hx - p.x);
            if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
              m = p;
              tanMin = tan;
            }
          }
          p = p.next;
        } while (p !== stop);
        return m;
      }
      function sectorContainsSector(m, p) {
        return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
      }
      function indexCurve(start, minX, minY, invSize) {
        var p = start;
        do {
          if (p.z === null)
            p.z = zOrder(p.x, p.y, minX, minY, invSize);
          p.prevZ = p.prev;
          p.nextZ = p.next;
          p = p.next;
        } while (p !== start);
        p.prevZ.nextZ = null;
        p.prevZ = null;
        sortLinked(p);
      }
      function sortLinked(list) {
        var e;
        var i;
        var inSize = 1;
        var numMerges;
        var p;
        var pSize;
        var q;
        var qSize;
        var tail;
        do {
          p = list;
          list = null;
          tail = null;
          numMerges = 0;
          while (p) {
            numMerges++;
            q = p;
            pSize = 0;
            for (i = 0; i < inSize; i++) {
              pSize++;
              q = q.nextZ;
              if (!q)
                break;
            }
            qSize = inSize;
            while (pSize > 0 || qSize > 0 && q) {
              if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                e = p;
                p = p.nextZ;
                pSize--;
              } else {
                e = q;
                q = q.nextZ;
                qSize--;
              }
              if (tail)
                tail.nextZ = e;
              else
                list = e;
              e.prevZ = tail;
              tail = e;
            }
            p = q;
          }
          tail.nextZ = null;
          inSize *= 2;
        } while (numMerges > 1);
        return list;
      }
      function zOrder(x, y, minX, minY, invSize) {
        x = 32767 * (x - minX) * invSize;
        y = 32767 * (y - minY) * invSize;
        x = (x | x << 8) & 16711935;
        x = (x | x << 4) & 252645135;
        x = (x | x << 2) & 858993459;
        x = (x | x << 1) & 1431655765;
        y = (y | y << 8) & 16711935;
        y = (y | y << 4) & 252645135;
        y = (y | y << 2) & 858993459;
        y = (y | y << 1) & 1431655765;
        return x | y << 1;
      }
      function getLeftmost(start) {
        var p = start;
        var leftmost = start;
        do {
          if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
            leftmost = p;
          p = p.next;
        } while (p !== start);
        return leftmost;
      }
      function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
        return (cx - px) * (ay - py) - (ax - px) * (cy - py) >= 0 && (ax - px) * (by - py) - (bx - px) * (ay - py) >= 0 && (bx - px) * (cy - py) - (cx - px) * (by - py) >= 0;
      }
      function isValidDiagonal(a, b) {
        return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && (area(a.prev, a, b.prev) || area(a, b.prev, b)) || equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
      }
      function area(p, q, r) {
        return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
      }
      function equals(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
      }
      function intersects(p1, q1, p2, q2) {
        var o1 = sign(area(p1, q1, p2));
        var o2 = sign(area(p1, q1, q2));
        var o3 = sign(area(p2, q2, p1));
        var o4 = sign(area(p2, q2, q1));
        if (o1 !== o2 && o3 !== o4)
          return true;
        if (o1 === 0 && onSegment(p1, p2, q1))
          return true;
        if (o2 === 0 && onSegment(p1, q2, q1))
          return true;
        if (o3 === 0 && onSegment(p2, p1, q2))
          return true;
        if (o4 === 0 && onSegment(p2, q1, q2))
          return true;
        return false;
      }
      function onSegment(p, q, r) {
        return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
      }
      function sign(num) {
        return num > 0 ? 1 : num < 0 ? -1 : 0;
      }
      function intersectsPolygon(a, b) {
        var p = a;
        do {
          if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
            return true;
          p = p.next;
        } while (p !== a);
        return false;
      }
      function locallyInside(a, b) {
        return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
      }
      function middleInside(a, b) {
        var p = a;
        var inside = false;
        var px = (a.x + b.x) / 2;
        var py = (a.y + b.y) / 2;
        do {
          if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
            inside = !inside;
          p = p.next;
        } while (p !== a);
        return inside;
      }
      function splitPolygon(a, b) {
        var a2 = new Node(a.i, a.x, a.y);
        var b2 = new Node(b.i, b.x, b.y);
        var an = a.next;
        var bp = b.prev;
        a.next = b;
        b.prev = a;
        a2.next = an;
        an.prev = a2;
        b2.next = a2;
        a2.prev = b2;
        bp.next = b2;
        b2.prev = bp;
        return b2;
      }
      function insertNode(i, x, y, last) {
        var p = new Node(i, x, y);
        if (!last) {
          p.prev = p;
          p.next = p;
        } else {
          p.next = last.next;
          p.prev = last;
          last.next.prev = p;
          last.next = p;
        }
        return p;
      }
      function removeNode(p) {
        p.next.prev = p.prev;
        p.prev.next = p.next;
        if (p.prevZ)
          p.prevZ.nextZ = p.nextZ;
        if (p.nextZ)
          p.nextZ.prevZ = p.prevZ;
      }
      function Node(i, x, y) {
        this.i = i;
        this.x = x;
        this.y = y;
        this.prev = null;
        this.next = null;
        this.z = null;
        this.prevZ = null;
        this.nextZ = null;
        this.steiner = false;
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/utils.js
  var require_utils = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.push = push;
      exports.copy = copy;
      exports.getPointAtIndex = getPointAtIndex;
      function push(target, source) {
        var size = source.length;
        var startIndex = target.length;
        if (startIndex > 0) {
          var isDuplicate = true;
          for (var i = 0; i < size; i++) {
            if (target[startIndex - size + i] !== source[i]) {
              isDuplicate = false;
              break;
            }
          }
          if (isDuplicate) {
            return false;
          }
        }
        for (var _i = 0; _i < size; _i++) {
          target[startIndex + _i] = source[_i];
        }
        return true;
      }
      function copy(target, source) {
        var size = source.length;
        for (var i = 0; i < size; i++) {
          target[i] = source[i];
        }
      }
      function getPointAtIndex(positions, index, size, offset) {
        var out = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
        var startI = offset + index * size;
        for (var i = 0; i < size; i++) {
          out[i] = positions[startI + i];
        }
        return out;
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/lineclip.js
  var require_lineclip = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/lineclip.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.clipPolyline = clipPolyline;
      exports.clipPolygon = clipPolygon;
      exports.intersect = intersect;
      exports.bitCode = bitCode;
      var _utils = require_utils();
      function clipPolyline(positions, bbox, options) {
        var _ref = options || {}, _ref$size = _ref.size, size = _ref$size === void 0 ? 2 : _ref$size, _ref$startIndex = _ref.startIndex, startIndex = _ref$startIndex === void 0 ? 0 : _ref$startIndex, _ref$endIndex = _ref.endIndex, endIndex = _ref$endIndex === void 0 ? positions.length : _ref$endIndex;
        var numPoints = (endIndex - startIndex) / size;
        var result = [];
        var part = [];
        var a;
        var b;
        var codeA = -1;
        var codeB;
        var lastCode;
        for (var i = 1; i < numPoints; i++) {
          a = (0, _utils.getPointAtIndex)(positions, i - 1, size, startIndex, a);
          b = (0, _utils.getPointAtIndex)(positions, i, size, startIndex, b);
          if (codeA < 0) {
            codeA = bitCode(a, bbox);
          }
          codeB = lastCode = bitCode(b, bbox);
          while (true) {
            if (!(codeA | codeB)) {
              (0, _utils.push)(part, a);
              if (codeB !== lastCode) {
                (0, _utils.push)(part, b);
                if (i < numPoints - 1) {
                  result.push(part);
                  part = [];
                }
              } else if (i === numPoints - 1) {
                (0, _utils.push)(part, b);
              }
              break;
            } else if (codeA & codeB) {
              break;
            } else if (codeA) {
              intersect(a, b, codeA, bbox, a);
              codeA = bitCode(a, bbox);
            } else {
              intersect(a, b, codeB, bbox, b);
              codeB = bitCode(b, bbox);
            }
          }
          codeA = lastCode;
        }
        if (part.length)
          result.push(part);
        return result;
      }
      function clipPolygon(positions, bbox, options) {
        var _ref2 = options || {}, _ref2$size = _ref2.size, size = _ref2$size === void 0 ? 2 : _ref2$size, _ref2$endIndex = _ref2.endIndex, endIndex = _ref2$endIndex === void 0 ? positions.length : _ref2$endIndex;
        var _ref3 = options || {}, _ref3$startIndex = _ref3.startIndex, startIndex = _ref3$startIndex === void 0 ? 0 : _ref3$startIndex;
        var numPoints = (endIndex - startIndex) / size;
        var result;
        var p;
        var prev;
        var inside;
        var prevInside;
        for (var edge = 1; edge <= 8; edge *= 2) {
          result = [];
          prev = (0, _utils.getPointAtIndex)(positions, numPoints - 1, size, startIndex, prev);
          prevInside = !(bitCode(prev, bbox) & edge);
          for (var i = 0; i < numPoints; i++) {
            p = (0, _utils.getPointAtIndex)(positions, i, size, startIndex, p);
            inside = !(bitCode(p, bbox) & edge);
            if (inside !== prevInside)
              (0, _utils.push)(result, intersect(prev, p, edge, bbox));
            if (inside)
              (0, _utils.push)(result, p);
            (0, _utils.copy)(prev, p);
            prevInside = inside;
          }
          positions = result;
          startIndex = 0;
          numPoints = result.length / size;
          if (!numPoints)
            break;
        }
        return result;
      }
      function intersect(a, b, edge, bbox) {
        var out = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
        var t;
        var snap;
        if (edge & 8) {
          t = (bbox[3] - a[1]) / (b[1] - a[1]);
          snap = 3;
        } else if (edge & 4) {
          t = (bbox[1] - a[1]) / (b[1] - a[1]);
          snap = 1;
        } else if (edge & 2) {
          t = (bbox[2] - a[0]) / (b[0] - a[0]);
          snap = 2;
        } else if (edge & 1) {
          t = (bbox[0] - a[0]) / (b[0] - a[0]);
          snap = 0;
        } else {
          return null;
        }
        for (var i = 0; i < a.length; i++) {
          out[i] = (snap & 1) === i ? bbox[snap] : t * (b[i] - a[i]) + a[i];
        }
        return out;
      }
      function bitCode(p, bbox) {
        var code = 0;
        if (p[0] < bbox[0])
          code |= 1;
        else if (p[0] > bbox[2])
          code |= 2;
        if (p[1] < bbox[1])
          code |= 4;
        else if (p[1] > bbox[3])
          code |= 8;
        return code;
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/cut-by-grid.js
  var require_cut_by_grid = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/cut-by-grid.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cutPolylineByGrid = cutPolylineByGrid;
      exports.cutPolygonByGrid = cutPolygonByGrid;
      var _lineclip = require_lineclip();
      var _utils = require_utils();
      function cutPolylineByGrid(positions, options) {
        var _ref = options || {}, _ref$size = _ref.size, size = _ref$size === void 0 ? 2 : _ref$size, _ref$broken = _ref.broken, broken = _ref$broken === void 0 ? false : _ref$broken, _ref$gridResolution = _ref.gridResolution, gridResolution = _ref$gridResolution === void 0 ? 10 : _ref$gridResolution, _ref$gridOffset = _ref.gridOffset, gridOffset = _ref$gridOffset === void 0 ? [0, 0] : _ref$gridOffset, _ref$startIndex = _ref.startIndex, startIndex = _ref$startIndex === void 0 ? 0 : _ref$startIndex, _ref$endIndex = _ref.endIndex, endIndex = _ref$endIndex === void 0 ? positions.length : _ref$endIndex;
        var numPoints = (endIndex - startIndex) / size;
        var part = [];
        var result = [part];
        var a = (0, _utils.getPointAtIndex)(positions, 0, size, startIndex);
        var b;
        var codeB;
        var cell = getGridCell(a, gridResolution, gridOffset, []);
        var scratchPoint = [];
        (0, _utils.push)(part, a);
        for (var i = 1; i < numPoints; i++) {
          b = (0, _utils.getPointAtIndex)(positions, i, size, startIndex, b);
          codeB = (0, _lineclip.bitCode)(b, cell);
          while (codeB) {
            (0, _lineclip.intersect)(a, b, codeB, cell, scratchPoint);
            var codeAlt = (0, _lineclip.bitCode)(scratchPoint, cell);
            if (codeAlt) {
              (0, _lineclip.intersect)(a, scratchPoint, codeAlt, cell, scratchPoint);
              codeB = codeAlt;
            }
            (0, _utils.push)(part, scratchPoint);
            (0, _utils.copy)(a, scratchPoint);
            moveToNeighborCell(cell, gridResolution, codeB);
            if (broken && part.length > size) {
              part = [];
              result.push(part);
              (0, _utils.push)(part, a);
            }
            codeB = (0, _lineclip.bitCode)(b, cell);
          }
          (0, _utils.push)(part, b);
          (0, _utils.copy)(a, b);
        }
        return broken ? result : result[0];
      }
      var TYPE_INSIDE = 0;
      var TYPE_BORDER = 1;
      function concatInPlace(arr1, arr2) {
        for (var i = 0; i < arr2.length; i++) {
          arr1.push(arr2[i]);
        }
        return arr1;
      }
      function cutPolygonByGrid(positions) {
        var holeIndices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var options = arguments.length > 2 ? arguments[2] : void 0;
        if (!positions.length) {
          return [];
        }
        var _ref2 = options || {}, _ref2$size = _ref2.size, size = _ref2$size === void 0 ? 2 : _ref2$size, _ref2$gridResolution = _ref2.gridResolution, gridResolution = _ref2$gridResolution === void 0 ? 10 : _ref2$gridResolution, _ref2$gridOffset = _ref2.gridOffset, gridOffset = _ref2$gridOffset === void 0 ? [0, 0] : _ref2$gridOffset, _ref2$edgeTypes = _ref2.edgeTypes, edgeTypes = _ref2$edgeTypes === void 0 ? false : _ref2$edgeTypes;
        var result = [];
        var queue = [{
          pos: positions,
          types: edgeTypes ? new Array(positions.length / size).fill(TYPE_BORDER) : null,
          holes: holeIndices || []
        }];
        var bbox = [[], []];
        var cell = [];
        while (queue.length) {
          var _queue$shift = queue.shift(), pos = _queue$shift.pos, types = _queue$shift.types, holes = _queue$shift.holes;
          getBoundingBox(pos, size, holes[0] || pos.length, bbox);
          cell = getGridCell(bbox[0], gridResolution, gridOffset, cell);
          var code = (0, _lineclip.bitCode)(bbox[1], cell);
          if (code) {
            var parts = bisectPolygon(pos, types, size, 0, holes[0] || pos.length, cell, code);
            var polygonLow = {
              pos: parts[0].pos,
              types: parts[0].types,
              holes: []
            };
            var polygonHigh = {
              pos: parts[1].pos,
              types: parts[1].types,
              holes: []
            };
            queue.push(polygonLow, polygonHigh);
            for (var i = 0; i < holes.length; i++) {
              parts = bisectPolygon(pos, types, size, holes[i], holes[i + 1] || pos.length, cell, code);
              if (parts[0]) {
                polygonLow.holes.push(polygonLow.pos.length);
                polygonLow.pos = concatInPlace(polygonLow.pos, parts[0].pos);
                if (edgeTypes) {
                  polygonLow.types = concatInPlace(polygonLow.types, parts[0].types);
                }
              }
              if (parts[1]) {
                polygonHigh.holes.push(polygonHigh.pos.length);
                polygonHigh.pos = concatInPlace(polygonHigh.pos, parts[1].pos);
                if (edgeTypes) {
                  polygonHigh.types = concatInPlace(polygonHigh.types, parts[1].types);
                }
              }
            }
          } else {
            var polygon = {
              positions: pos
            };
            if (edgeTypes) {
              polygon.edgeTypes = types;
            }
            if (holes.length) {
              polygon.holeIndices = holes;
            }
            result.push(polygon);
          }
        }
        return result;
      }
      function bisectPolygon(positions, edgeTypes, size, startIndex, endIndex, bbox, edge) {
        var numPoints = (endIndex - startIndex) / size;
        var resultLow = [];
        var resultHigh = [];
        var typesLow = [];
        var typesHigh = [];
        var scratchPoint = [];
        var p;
        var side;
        var type;
        var prev = (0, _utils.getPointAtIndex)(positions, numPoints - 1, size, startIndex);
        var prevSide = Math.sign(edge & 8 ? prev[1] - bbox[3] : prev[0] - bbox[2]);
        var prevType = edgeTypes && edgeTypes[numPoints - 1];
        var lowPointCount = 0;
        var highPointCount = 0;
        for (var i = 0; i < numPoints; i++) {
          p = (0, _utils.getPointAtIndex)(positions, i, size, startIndex, p);
          side = Math.sign(edge & 8 ? p[1] - bbox[3] : p[0] - bbox[2]);
          type = edgeTypes && edgeTypes[startIndex / size + i];
          if (side && prevSide && prevSide !== side) {
            (0, _lineclip.intersect)(prev, p, edge, bbox, scratchPoint);
            (0, _utils.push)(resultLow, scratchPoint) && typesLow.push(prevType);
            (0, _utils.push)(resultHigh, scratchPoint) && typesHigh.push(prevType);
          }
          if (side <= 0) {
            (0, _utils.push)(resultLow, p) && typesLow.push(type);
            lowPointCount -= side;
          } else if (typesLow.length) {
            typesLow[typesLow.length - 1] = TYPE_INSIDE;
          }
          if (side >= 0) {
            (0, _utils.push)(resultHigh, p) && typesHigh.push(type);
            highPointCount += side;
          } else if (typesHigh.length) {
            typesHigh[typesHigh.length - 1] = TYPE_INSIDE;
          }
          (0, _utils.copy)(prev, p);
          prevSide = side;
          prevType = type;
        }
        return [lowPointCount ? {
          pos: resultLow,
          types: edgeTypes && typesLow
        } : null, highPointCount ? {
          pos: resultHigh,
          types: edgeTypes && typesHigh
        } : null];
      }
      function getGridCell(p, gridResolution, gridOffset, out) {
        var left = Math.floor((p[0] - gridOffset[0]) / gridResolution) * gridResolution + gridOffset[0];
        var bottom = Math.floor((p[1] - gridOffset[1]) / gridResolution) * gridResolution + gridOffset[1];
        out[0] = left;
        out[1] = bottom;
        out[2] = left + gridResolution;
        out[3] = bottom + gridResolution;
        return out;
      }
      function moveToNeighborCell(cell, gridResolution, edge) {
        if (edge & 8) {
          cell[1] += gridResolution;
          cell[3] += gridResolution;
        } else if (edge & 4) {
          cell[1] -= gridResolution;
          cell[3] -= gridResolution;
        } else if (edge & 2) {
          cell[0] += gridResolution;
          cell[2] += gridResolution;
        } else if (edge & 1) {
          cell[0] -= gridResolution;
          cell[2] -= gridResolution;
        }
      }
      function getBoundingBox(positions, size, endIndex, out) {
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        for (var i = 0; i < endIndex; i += size) {
          var x = positions[i];
          var y = positions[i + 1];
          minX = x < minX ? x : minX;
          maxX = x > maxX ? x : maxX;
          minY = y < minY ? y : minY;
          maxY = y > maxY ? y : maxY;
        }
        out[0][0] = minX;
        out[0][1] = minY;
        out[1][0] = maxX;
        out[1][1] = maxY;
        return out;
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/cut-by-mercator-bounds.js
  var require_cut_by_mercator_bounds = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/cut-by-mercator-bounds.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.cutPolylineByMercatorBounds = cutPolylineByMercatorBounds;
      exports.cutPolygonByMercatorBounds = cutPolygonByMercatorBounds;
      var _cutByGrid = require_cut_by_grid();
      var _utils = require_utils();
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      var DEFAULT_MAX_LATITUDE = 85.051129;
      function cutPolylineByMercatorBounds(positions, options) {
        var _ref = options || {}, _ref$size = _ref.size, size = _ref$size === void 0 ? 2 : _ref$size, _ref$startIndex = _ref.startIndex, startIndex = _ref$startIndex === void 0 ? 0 : _ref$startIndex, _ref$endIndex = _ref.endIndex, endIndex = _ref$endIndex === void 0 ? positions.length : _ref$endIndex, _ref$normalize = _ref.normalize, normalize = _ref$normalize === void 0 ? true : _ref$normalize;
        var newPositions = positions.slice(startIndex, endIndex);
        wrapLongitudesForShortestPath(newPositions, size, 0, endIndex - startIndex);
        var parts = (0, _cutByGrid.cutPolylineByGrid)(newPositions, {
          size,
          broken: true,
          gridResolution: 360,
          gridOffset: [-180, -180]
        });
        if (normalize) {
          var _iterator = _createForOfIteratorHelper(parts), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var part = _step.value;
              shiftLongitudesIntoRange(part, size);
            }
          } catch (err2) {
            _iterator.e(err2);
          } finally {
            _iterator.f();
          }
        }
        return parts;
      }
      function cutPolygonByMercatorBounds(positions) {
        var holeIndices = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
        var options = arguments.length > 2 ? arguments[2] : void 0;
        var _ref2 = options || {}, _ref2$size = _ref2.size, size = _ref2$size === void 0 ? 2 : _ref2$size, _ref2$normalize = _ref2.normalize, normalize = _ref2$normalize === void 0 ? true : _ref2$normalize, _ref2$edgeTypes = _ref2.edgeTypes, edgeTypes = _ref2$edgeTypes === void 0 ? false : _ref2$edgeTypes;
        holeIndices = holeIndices || [];
        var newPositions = [];
        var newHoleIndices = [];
        var srcStartIndex = 0;
        var targetIndex = 0;
        for (var ringIndex = 0; ringIndex <= holeIndices.length; ringIndex++) {
          var srcEndIndex = holeIndices[ringIndex] || positions.length;
          var targetStartIndex = targetIndex;
          var splitIndex = findSplitIndex(positions, size, srcStartIndex, srcEndIndex);
          for (var i = splitIndex; i < srcEndIndex; i++) {
            newPositions[targetIndex++] = positions[i];
          }
          for (var _i = srcStartIndex; _i < splitIndex; _i++) {
            newPositions[targetIndex++] = positions[_i];
          }
          wrapLongitudesForShortestPath(newPositions, size, targetStartIndex, targetIndex);
          insertPoleVertices(newPositions, size, targetStartIndex, targetIndex, options === null || options === void 0 ? void 0 : options.maxLatitude);
          srcStartIndex = srcEndIndex;
          newHoleIndices[ringIndex] = targetIndex;
        }
        newHoleIndices.pop();
        var parts = (0, _cutByGrid.cutPolygonByGrid)(newPositions, newHoleIndices, {
          size,
          gridResolution: 360,
          gridOffset: [-180, -180],
          edgeTypes
        });
        if (normalize) {
          var _iterator2 = _createForOfIteratorHelper(parts), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var part = _step2.value;
              shiftLongitudesIntoRange(part.positions, size);
            }
          } catch (err2) {
            _iterator2.e(err2);
          } finally {
            _iterator2.f();
          }
        }
        return parts;
      }
      function findSplitIndex(positions, size, startIndex, endIndex) {
        var maxLat = -1;
        var pointIndex = -1;
        for (var i = startIndex + 1; i < endIndex; i += size) {
          var lat = Math.abs(positions[i]);
          if (lat > maxLat) {
            maxLat = lat;
            pointIndex = i - 1;
          }
        }
        return pointIndex;
      }
      function insertPoleVertices(positions, size, startIndex, endIndex) {
        var maxLatitude = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : DEFAULT_MAX_LATITUDE;
        var firstLng = positions[startIndex];
        var lastLng = positions[endIndex - size];
        if (Math.abs(firstLng - lastLng) > 180) {
          var p = (0, _utils.getPointAtIndex)(positions, 0, size, startIndex);
          p[0] += Math.round((lastLng - firstLng) / 360) * 360;
          (0, _utils.push)(positions, p);
          p[1] = Math.sign(p[1]) * maxLatitude;
          (0, _utils.push)(positions, p);
          p[0] = firstLng;
          (0, _utils.push)(positions, p);
        }
      }
      function wrapLongitudesForShortestPath(positions, size, startIndex, endIndex) {
        var prevLng = positions[0];
        var lng;
        for (var i = startIndex; i < endIndex; i += size) {
          lng = positions[i];
          var delta = lng - prevLng;
          if (delta > 180 || delta < -180) {
            lng -= Math.round(delta / 360) * 360;
          }
          positions[i] = prevLng = lng;
        }
      }
      function shiftLongitudesIntoRange(positions, size) {
        var refLng;
        var pointCount = positions.length / size;
        for (var i = 0; i < pointCount; i++) {
          refLng = positions[i * size];
          if ((refLng + 180) % 360 !== 0) {
            break;
          }
        }
        var delta = -Math.round(refLng / 360) * 360;
        if (delta === 0) {
          return;
        }
        for (var _i2 = 0; _i2 < pointCount; _i2++) {
          positions[_i2 * size] += delta;
        }
      }
    }
  });

  // node_modules/@math.gl/polygon/dist/es5/index.js
  var require_es52 = __commonJS({
    "node_modules/@math.gl/polygon/dist/es5/index.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "Polygon", {
        enumerable: true,
        get: function get() {
          return _polygon.default;
        }
      });
      Object.defineProperty(exports, "_Polygon", {
        enumerable: true,
        get: function get() {
          return _polygon.default;
        }
      });
      Object.defineProperty(exports, "getPolygonSignedArea", {
        enumerable: true,
        get: function get() {
          return _polygonUtils.getPolygonSignedArea;
        }
      });
      Object.defineProperty(exports, "getPolygonWindingDirection", {
        enumerable: true,
        get: function get() {
          return _polygonUtils.getPolygonWindingDirection;
        }
      });
      Object.defineProperty(exports, "forEachSegmentInPolygon", {
        enumerable: true,
        get: function get() {
          return _polygonUtils.forEachSegmentInPolygon;
        }
      });
      Object.defineProperty(exports, "modifyPolygonWindingDirection", {
        enumerable: true,
        get: function get() {
          return _polygonUtils.modifyPolygonWindingDirection;
        }
      });
      Object.defineProperty(exports, "WINDING", {
        enumerable: true,
        get: function get() {
          return _polygonUtils.WINDING;
        }
      });
      Object.defineProperty(exports, "earcut", {
        enumerable: true,
        get: function get() {
          return _earcut.earcut;
        }
      });
      Object.defineProperty(exports, "clipPolygon", {
        enumerable: true,
        get: function get() {
          return _lineclip.clipPolygon;
        }
      });
      Object.defineProperty(exports, "clipPolyline", {
        enumerable: true,
        get: function get() {
          return _lineclip.clipPolyline;
        }
      });
      Object.defineProperty(exports, "cutPolygonByGrid", {
        enumerable: true,
        get: function get() {
          return _cutByGrid.cutPolygonByGrid;
        }
      });
      Object.defineProperty(exports, "cutPolylineByGrid", {
        enumerable: true,
        get: function get() {
          return _cutByGrid.cutPolylineByGrid;
        }
      });
      Object.defineProperty(exports, "cutPolylineByMercatorBounds", {
        enumerable: true,
        get: function get() {
          return _cutByMercatorBounds.cutPolylineByMercatorBounds;
        }
      });
      Object.defineProperty(exports, "cutPolygonByMercatorBounds", {
        enumerable: true,
        get: function get() {
          return _cutByMercatorBounds.cutPolygonByMercatorBounds;
        }
      });
      var _polygon = _interopRequireDefault(require_polygon());
      var _polygonUtils = require_polygon_utils();
      var _earcut = require_earcut();
      var _lineclip = require_lineclip();
      var _cutByGrid = require_cut_by_grid();
      var _cutByMercatorBounds = require_cut_by_mercator_bounds();
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/flat-geojson-to-binary.js
  var require_flat_geojson_to_binary = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/flat-geojson-to-binary.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.flatGeojsonToBinary = flatGeojsonToBinary;
      exports.TEST_EXPORTS = void 0;
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _polygon = require_es52();
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              (0, _defineProperty2.default)(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function flatGeojsonToBinary(features, geometryInfo, options) {
        var propArrayTypes = extractNumericPropTypes(features);
        var numericPropKeys = Object.keys(propArrayTypes).filter(function(k) {
          return propArrayTypes[k] !== Array;
        });
        return fillArrays(features, _objectSpread({
          propArrayTypes
        }, geometryInfo), {
          numericPropKeys: options && options.numericPropKeys || numericPropKeys,
          PositionDataType: options ? options.PositionDataType : Float32Array
        });
      }
      var TEST_EXPORTS = {
        extractNumericPropTypes
      };
      exports.TEST_EXPORTS = TEST_EXPORTS;
      function extractNumericPropTypes(features) {
        var propArrayTypes = {};
        var _iterator = _createForOfIteratorHelper(features), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var feature = _step.value;
            if (feature.properties) {
              for (var _key in feature.properties) {
                var val = feature.properties[_key];
                propArrayTypes[_key] = deduceArrayType(val, propArrayTypes[_key]);
              }
            }
          }
        } catch (err2) {
          _iterator.e(err2);
        } finally {
          _iterator.f();
        }
        return propArrayTypes;
      }
      function fillArrays(features, geometryInfo, options) {
        var pointPositionsCount = geometryInfo.pointPositionsCount, pointFeaturesCount = geometryInfo.pointFeaturesCount, linePositionsCount = geometryInfo.linePositionsCount, linePathsCount = geometryInfo.linePathsCount, lineFeaturesCount = geometryInfo.lineFeaturesCount, polygonPositionsCount = geometryInfo.polygonPositionsCount, polygonObjectsCount = geometryInfo.polygonObjectsCount, polygonRingsCount = geometryInfo.polygonRingsCount, polygonFeaturesCount = geometryInfo.polygonFeaturesCount, propArrayTypes = geometryInfo.propArrayTypes, coordLength = geometryInfo.coordLength;
        var _options$numericPropK = options.numericPropKeys, numericPropKeys = _options$numericPropK === void 0 ? [] : _options$numericPropK, _options$PositionData = options.PositionDataType, PositionDataType = _options$PositionData === void 0 ? Float32Array : _options$PositionData;
        var hasGlobalId = features[0] && "id" in features[0];
        var GlobalFeatureIdsDataType = features.length > 65535 ? Uint32Array : Uint16Array;
        var points = {
          type: "Point",
          positions: new PositionDataType(pointPositionsCount * coordLength),
          globalFeatureIds: new GlobalFeatureIdsDataType(pointPositionsCount),
          featureIds: pointFeaturesCount > 65535 ? new Uint32Array(pointPositionsCount) : new Uint16Array(pointPositionsCount),
          numericProps: {},
          properties: [],
          fields: []
        };
        var lines = {
          type: "LineString",
          pathIndices: linePositionsCount > 65535 ? new Uint32Array(linePathsCount + 1) : new Uint16Array(linePathsCount + 1),
          positions: new PositionDataType(linePositionsCount * coordLength),
          globalFeatureIds: new GlobalFeatureIdsDataType(linePositionsCount),
          featureIds: lineFeaturesCount > 65535 ? new Uint32Array(linePositionsCount) : new Uint16Array(linePositionsCount),
          numericProps: {},
          properties: [],
          fields: []
        };
        var polygons = {
          type: "Polygon",
          polygonIndices: polygonPositionsCount > 65535 ? new Uint32Array(polygonObjectsCount + 1) : new Uint16Array(polygonObjectsCount + 1),
          primitivePolygonIndices: polygonPositionsCount > 65535 ? new Uint32Array(polygonRingsCount + 1) : new Uint16Array(polygonRingsCount + 1),
          positions: new PositionDataType(polygonPositionsCount * coordLength),
          triangles: [],
          globalFeatureIds: new GlobalFeatureIdsDataType(polygonPositionsCount),
          featureIds: polygonFeaturesCount > 65535 ? new Uint32Array(polygonPositionsCount) : new Uint16Array(polygonPositionsCount),
          numericProps: {},
          properties: [],
          fields: []
        };
        for (var _i = 0, _arr = [points, lines, polygons]; _i < _arr.length; _i++) {
          var object = _arr[_i];
          var _iterator2 = _createForOfIteratorHelper(numericPropKeys), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var propName = _step2.value;
              var T = propArrayTypes[propName];
              object.numericProps[propName] = new T(object.positions.length / coordLength);
            }
          } catch (err2) {
            _iterator2.e(err2);
          } finally {
            _iterator2.f();
          }
        }
        lines.pathIndices[linePathsCount] = linePositionsCount;
        polygons.polygonIndices[polygonObjectsCount] = polygonPositionsCount;
        polygons.primitivePolygonIndices[polygonRingsCount] = polygonPositionsCount;
        var indexMap = {
          pointPosition: 0,
          pointFeature: 0,
          linePosition: 0,
          linePath: 0,
          lineFeature: 0,
          polygonPosition: 0,
          polygonObject: 0,
          polygonRing: 0,
          polygonFeature: 0,
          feature: 0
        };
        var _iterator3 = _createForOfIteratorHelper(features), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            var feature = _step3.value;
            var geometry = feature.geometry;
            var properties = feature.properties || {};
            switch (geometry.type) {
              case "Point":
                handlePoint(geometry, points, indexMap, coordLength, properties);
                points.properties.push(keepStringProperties(properties, numericPropKeys));
                if (hasGlobalId) {
                  points.fields.push({
                    id: feature.id
                  });
                }
                indexMap.pointFeature++;
                break;
              case "LineString":
                handleLineString(geometry, lines, indexMap, coordLength, properties);
                lines.properties.push(keepStringProperties(properties, numericPropKeys));
                if (hasGlobalId) {
                  lines.fields.push({
                    id: feature.id
                  });
                }
                indexMap.lineFeature++;
                break;
              case "Polygon":
                handlePolygon(geometry, polygons, indexMap, coordLength, properties);
                polygons.properties.push(keepStringProperties(properties, numericPropKeys));
                if (hasGlobalId) {
                  polygons.fields.push({
                    id: feature.id
                  });
                }
                indexMap.polygonFeature++;
                break;
              default:
                throw new Error("Invalid geometry type");
            }
            indexMap.feature++;
          }
        } catch (err2) {
          _iterator3.e(err2);
        } finally {
          _iterator3.f();
        }
        return makeAccessorObjects(points, lines, polygons, coordLength);
      }
      function handlePoint(geometry, points, indexMap, coordLength, properties) {
        points.positions.set(geometry.data, indexMap.pointPosition * coordLength);
        var nPositions = geometry.data.length / coordLength;
        fillNumericProperties(points, properties, indexMap.pointPosition, nPositions);
        points.globalFeatureIds.fill(indexMap.feature, indexMap.pointPosition, indexMap.pointPosition + nPositions);
        points.featureIds.fill(indexMap.pointFeature, indexMap.pointPosition, indexMap.pointPosition + nPositions);
        indexMap.pointPosition += nPositions;
      }
      function handleLineString(geometry, lines, indexMap, coordLength, properties) {
        lines.positions.set(geometry.data, indexMap.linePosition * coordLength);
        var nPositions = geometry.data.length / coordLength;
        fillNumericProperties(lines, properties, indexMap.linePosition, nPositions);
        lines.globalFeatureIds.fill(indexMap.feature, indexMap.linePosition, indexMap.linePosition + nPositions);
        lines.featureIds.fill(indexMap.lineFeature, indexMap.linePosition, indexMap.linePosition + nPositions);
        for (var i = 0, il = geometry.indices.length; i < il; ++i) {
          var start = geometry.indices[i];
          var end = i === il - 1 ? geometry.data.length : geometry.indices[i + 1];
          lines.pathIndices[indexMap.linePath++] = indexMap.linePosition;
          indexMap.linePosition += (end - start) / coordLength;
        }
      }
      function handlePolygon(geometry, polygons, indexMap, coordLength, properties) {
        polygons.positions.set(geometry.data, indexMap.polygonPosition * coordLength);
        var nPositions = geometry.data.length / coordLength;
        fillNumericProperties(polygons, properties, indexMap.polygonPosition, nPositions);
        polygons.globalFeatureIds.fill(indexMap.feature, indexMap.polygonPosition, indexMap.polygonPosition + nPositions);
        polygons.featureIds.fill(indexMap.polygonFeature, indexMap.polygonPosition, indexMap.polygonPosition + nPositions);
        for (var l = 0, ll = geometry.indices.length; l < ll; ++l) {
          var startPosition = indexMap.polygonPosition;
          polygons.polygonIndices[indexMap.polygonObject++] = startPosition;
          var areas = geometry.areas[l];
          var indices = geometry.indices[l];
          var nextIndices = geometry.indices[l + 1];
          for (var i = 0, il = indices.length; i < il; ++i) {
            var start = indices[i];
            var end = i === il - 1 ? nextIndices === void 0 ? geometry.data.length : nextIndices[0] : indices[i + 1];
            polygons.primitivePolygonIndices[indexMap.polygonRing++] = indexMap.polygonPosition;
            indexMap.polygonPosition += (end - start) / coordLength;
          }
          var endPosition = indexMap.polygonPosition;
          triangulatePolygon(polygons, areas, indices, {
            startPosition,
            endPosition,
            coordLength
          });
        }
      }
      function triangulatePolygon(polygons, areas, indices, _ref) {
        var startPosition = _ref.startPosition, endPosition = _ref.endPosition, coordLength = _ref.coordLength;
        var start = startPosition * coordLength;
        var end = endPosition * coordLength;
        var polygonPositions = polygons.positions.subarray(start, end);
        var offset = indices[0];
        var holes = indices.slice(1).map(function(n) {
          return (n - offset) / coordLength;
        });
        var triangles = (0, _polygon.earcut)(polygonPositions, holes, coordLength, areas);
        for (var t = 0, tl = triangles.length; t < tl; ++t) {
          polygons.triangles.push(startPosition + triangles[t]);
        }
      }
      function wrapProps(obj, size) {
        var returnObj = {};
        for (var _key2 in obj) {
          returnObj[_key2] = {
            value: obj[_key2],
            size
          };
        }
        return returnObj;
      }
      function makeAccessorObjects(points, lines, polygons, coordLength) {
        return {
          points: _objectSpread(_objectSpread({}, points), {}, {
            positions: {
              value: points.positions,
              size: coordLength
            },
            globalFeatureIds: {
              value: points.globalFeatureIds,
              size: 1
            },
            featureIds: {
              value: points.featureIds,
              size: 1
            },
            numericProps: wrapProps(points.numericProps, 1)
          }),
          lines: _objectSpread(_objectSpread({}, lines), {}, {
            positions: {
              value: lines.positions,
              size: coordLength
            },
            pathIndices: {
              value: lines.pathIndices,
              size: 1
            },
            globalFeatureIds: {
              value: lines.globalFeatureIds,
              size: 1
            },
            featureIds: {
              value: lines.featureIds,
              size: 1
            },
            numericProps: wrapProps(lines.numericProps, 1)
          }),
          polygons: _objectSpread(_objectSpread({}, polygons), {}, {
            positions: {
              value: polygons.positions,
              size: coordLength
            },
            polygonIndices: {
              value: polygons.polygonIndices,
              size: 1
            },
            primitivePolygonIndices: {
              value: polygons.primitivePolygonIndices,
              size: 1
            },
            triangles: {
              value: new Uint32Array(polygons.triangles),
              size: 1
            },
            globalFeatureIds: {
              value: polygons.globalFeatureIds,
              size: 1
            },
            featureIds: {
              value: polygons.featureIds,
              size: 1
            },
            numericProps: wrapProps(polygons.numericProps, 1)
          })
        };
      }
      function fillNumericProperties(object, properties, index, length) {
        for (var numericPropName in object.numericProps) {
          if (numericPropName in properties) {
            var value = properties[numericPropName];
            object.numericProps[numericPropName].fill(value, index, index + length);
          }
        }
      }
      function keepStringProperties(properties, numericKeys) {
        var props = {};
        for (var _key3 in properties) {
          if (!numericKeys.includes(_key3)) {
            props[_key3] = properties[_key3];
          }
        }
        return props;
      }
      function deduceArrayType(x, constructor) {
        if (constructor === Array || !Number.isFinite(x)) {
          return Array;
        }
        return constructor === Float64Array || Math.fround(x) !== x ? Float64Array : Float32Array;
      }
    }
  });

  // node_modules/@babel/runtime/helpers/arrayWithoutHoles.js
  var require_arrayWithoutHoles = __commonJS({
    "node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"(exports, module) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr))
          return arrayLikeToArray(arr);
      }
      module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/iterableToArray.js
  var require_iterableToArray = __commonJS({
    "node_modules/@babel/runtime/helpers/iterableToArray.js"(exports, module) {
      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
          return Array.from(iter);
      }
      module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/nonIterableSpread.js
  var require_nonIterableSpread = __commonJS({
    "node_modules/@babel/runtime/helpers/nonIterableSpread.js"(exports, module) {
      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@babel/runtime/helpers/toConsumableArray.js
  var require_toConsumableArray = __commonJS({
    "node_modules/@babel/runtime/helpers/toConsumableArray.js"(exports, module) {
      var arrayWithoutHoles = require_arrayWithoutHoles();
      var iterableToArray = require_iterableToArray();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableSpread = require_nonIterableSpread();
      function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
      }
      module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/extract-geometry-info.js
  var require_extract_geometry_info = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/extract-geometry-info.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.extractGeometryInfo = extractGeometryInfo;
      var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function extractGeometryInfo(features) {
        var pointPositionsCount = 0;
        var pointFeaturesCount = 0;
        var linePositionsCount = 0;
        var linePathsCount = 0;
        var lineFeaturesCount = 0;
        var polygonPositionsCount = 0;
        var polygonObjectsCount = 0;
        var polygonRingsCount = 0;
        var polygonFeaturesCount = 0;
        var coordLengths = /* @__PURE__ */ new Set();
        var _iterator = _createForOfIteratorHelper(features), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var feature = _step.value;
            var geometry = feature.geometry;
            switch (geometry.type) {
              case "Point":
                pointFeaturesCount++;
                pointPositionsCount++;
                coordLengths.add(geometry.coordinates.length);
                break;
              case "MultiPoint":
                pointFeaturesCount++;
                pointPositionsCount += geometry.coordinates.length;
                var _iterator2 = _createForOfIteratorHelper(geometry.coordinates), _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                    var point = _step2.value;
                    coordLengths.add(point.length);
                  }
                } catch (err2) {
                  _iterator2.e(err2);
                } finally {
                  _iterator2.f();
                }
                break;
              case "LineString":
                lineFeaturesCount++;
                linePositionsCount += geometry.coordinates.length;
                linePathsCount++;
                var _iterator3 = _createForOfIteratorHelper(geometry.coordinates), _step3;
                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                    var coord = _step3.value;
                    coordLengths.add(coord.length);
                  }
                } catch (err2) {
                  _iterator3.e(err2);
                } finally {
                  _iterator3.f();
                }
                break;
              case "MultiLineString":
                lineFeaturesCount++;
                var _iterator4 = _createForOfIteratorHelper(geometry.coordinates), _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
                    var line = _step4.value;
                    linePositionsCount += line.length;
                    linePathsCount++;
                    var _iterator5 = _createForOfIteratorHelper(line), _step5;
                    try {
                      for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
                        var _coord = _step5.value;
                        coordLengths.add(_coord.length);
                      }
                    } catch (err2) {
                      _iterator5.e(err2);
                    } finally {
                      _iterator5.f();
                    }
                  }
                } catch (err2) {
                  _iterator4.e(err2);
                } finally {
                  _iterator4.f();
                }
                break;
              case "Polygon":
                polygonFeaturesCount++;
                polygonObjectsCount++;
                polygonRingsCount += geometry.coordinates.length;
                var flattened = geometry.coordinates.flat();
                polygonPositionsCount += flattened.length;
                var _iterator6 = _createForOfIteratorHelper(flattened), _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
                    var _coord2 = _step6.value;
                    coordLengths.add(_coord2.length);
                  }
                } catch (err2) {
                  _iterator6.e(err2);
                } finally {
                  _iterator6.f();
                }
                break;
              case "MultiPolygon":
                polygonFeaturesCount++;
                var _iterator7 = _createForOfIteratorHelper(geometry.coordinates), _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
                    var polygon = _step7.value;
                    polygonObjectsCount++;
                    polygonRingsCount += polygon.length;
                    var _flattened = polygon.flat();
                    polygonPositionsCount += _flattened.length;
                    var _iterator8 = _createForOfIteratorHelper(_flattened), _step8;
                    try {
                      for (_iterator8.s(); !(_step8 = _iterator8.n()).done; ) {
                        var _coord3 = _step8.value;
                        coordLengths.add(_coord3.length);
                      }
                    } catch (err2) {
                      _iterator8.e(err2);
                    } finally {
                      _iterator8.f();
                    }
                  }
                } catch (err2) {
                  _iterator7.e(err2);
                } finally {
                  _iterator7.f();
                }
                break;
              default:
                throw new Error("Unsupported geometry type: ".concat(geometry.type));
            }
          }
        } catch (err2) {
          _iterator.e(err2);
        } finally {
          _iterator.f();
        }
        return {
          coordLength: coordLengths.size > 0 ? Math.max.apply(Math, (0, _toConsumableArray2.default)(coordLengths)) : 2,
          pointPositionsCount,
          pointFeaturesCount,
          linePositionsCount,
          linePathsCount,
          lineFeaturesCount,
          polygonPositionsCount,
          polygonObjectsCount,
          polygonRingsCount,
          polygonFeaturesCount
        };
      }
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/geojson-to-flat-geojson.js
  var require_geojson_to_flat_geojson = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/geojson-to-flat-geojson.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.geojsonToFlatGeojson = geojsonToFlatGeojson;
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      var _toConsumableArray2 = _interopRequireDefault(require_toConsumableArray());
      var _polygon = require_es52();
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              (0, _defineProperty2.default)(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function geojsonToFlatGeojson(features) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          coordLength: 2,
          fixRingWinding: true
        };
        return features.map(function(feature) {
          return flattenFeature(feature, options);
        });
      }
      function flattenPoint(coordinates, data, indices, options) {
        indices.push(data.length);
        data.push.apply(data, (0, _toConsumableArray2.default)(coordinates));
        for (var i = coordinates.length; i < options.coordLength; i++) {
          data.push(0);
        }
      }
      function flattenLineString(coordinates, data, indices, options) {
        indices.push(data.length);
        var _iterator = _createForOfIteratorHelper(coordinates), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var c = _step.value;
            data.push.apply(data, (0, _toConsumableArray2.default)(c));
            for (var i = c.length; i < options.coordLength; i++) {
              data.push(0);
            }
          }
        } catch (err2) {
          _iterator.e(err2);
        } finally {
          _iterator.f();
        }
      }
      function flattenPolygon(coordinates, data, indices, areas, options) {
        var count = 0;
        var ringAreas = [];
        var polygons = [];
        var _iterator2 = _createForOfIteratorHelper(coordinates), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var lineString = _step2.value;
            var lineString2d = lineString.map(function(p) {
              return p.slice(0, 2);
            });
            var area = (0, _polygon.getPolygonSignedArea)(lineString2d.flat());
            var ccw = area < 0;
            if (options.fixRingWinding && (count === 0 && !ccw || count > 0 && ccw)) {
              lineString.reverse();
              area = -area;
            }
            ringAreas.push(area);
            flattenLineString(lineString, data, polygons, options);
            count++;
          }
        } catch (err2) {
          _iterator2.e(err2);
        } finally {
          _iterator2.f();
        }
        if (count > 0) {
          areas.push(ringAreas);
          indices.push(polygons);
        }
      }
      function flattenFeature(feature, options) {
        var geometry = feature.geometry;
        if (geometry.type === "GeometryCollection") {
          throw new Error("GeometryCollection type not supported");
        }
        var data = [];
        var indices = [];
        var areas;
        var type;
        switch (geometry.type) {
          case "Point":
            type = "Point";
            flattenPoint(geometry.coordinates, data, indices, options);
            break;
          case "MultiPoint":
            type = "Point";
            geometry.coordinates.map(function(c) {
              return flattenPoint(c, data, indices, options);
            });
            break;
          case "LineString":
            type = "LineString";
            flattenLineString(geometry.coordinates, data, indices, options);
            break;
          case "MultiLineString":
            type = "LineString";
            geometry.coordinates.map(function(c) {
              return flattenLineString(c, data, indices, options);
            });
            break;
          case "Polygon":
            type = "Polygon";
            areas = [];
            flattenPolygon(geometry.coordinates, data, indices, areas, options);
            break;
          case "MultiPolygon":
            type = "Polygon";
            areas = [];
            geometry.coordinates.map(function(c) {
              return flattenPolygon(c, data, indices, areas, options);
            });
            break;
          default:
            throw new Error("Unknown type: ".concat(type));
        }
        return _objectSpread(_objectSpread({}, feature), {}, {
          geometry: {
            type,
            indices,
            data,
            areas
          }
        });
      }
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/geojson-to-binary.js
  var require_geojson_to_binary = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/geojson-to-binary.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.geojsonToBinary = geojsonToBinary;
      var _extractGeometryInfo = require_extract_geometry_info();
      var _geojsonToFlatGeojson = require_geojson_to_flat_geojson();
      var _flatGeojsonToBinary = require_flat_geojson_to_binary();
      function geojsonToBinary(features) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
          fixRingWinding: true
        };
        var geometryInfo = (0, _extractGeometryInfo.extractGeometryInfo)(features);
        var coordLength = geometryInfo.coordLength;
        var fixRingWinding = options.fixRingWinding;
        var flatFeatures = (0, _geojsonToFlatGeojson.geojsonToFlatGeojson)(features, {
          coordLength,
          fixRingWinding
        });
        return (0, _flatGeojsonToBinary.flatGeojsonToBinary)(flatFeatures, geometryInfo, {
          numericPropKeys: options.numericPropKeys,
          PositionDataType: options.PositionDataType || Float32Array
        });
      }
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/binary-to-geojson.js
  var require_binary_to_geojson = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/binary-to-geojson.js"(exports) {
      "use strict";
      var _interopRequireDefault = require_interopRequireDefault();
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.binaryToGeojson = binaryToGeojson;
      exports.binaryToGeoJson = binaryToGeoJson;
      exports.binaryToGeometry = binaryToGeometry;
      var _defineProperty2 = _interopRequireDefault(require_defineProperty());
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }
          keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
              (0, _defineProperty2.default)(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }
        return target;
      }
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function binaryToGeojson(data, options) {
        var globalFeatureId = options === null || options === void 0 ? void 0 : options.globalFeatureId;
        if (globalFeatureId !== void 0) {
          return getSingleFeature(data, globalFeatureId);
        }
        return parseFeatures(data, options === null || options === void 0 ? void 0 : options.type);
      }
      function binaryToGeoJson(data, type) {
        var format = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "feature";
        switch (format) {
          case "feature":
            return parseFeatures(data, type);
          case "geometry":
            return binaryToGeometry(data);
          default:
            throw new Error(format);
        }
      }
      function getSingleFeature(data, globalFeatureId) {
        var dataArray = normalizeInput(data);
        var _iterator = _createForOfIteratorHelper(dataArray), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var _data = _step.value;
            var lastIndex = 0;
            var lastValue = _data.featureIds.value[0];
            for (var i = 0; i < _data.featureIds.value.length; i++) {
              var currValue = _data.featureIds.value[i];
              if (currValue === lastValue) {
                continue;
              }
              if (globalFeatureId === _data.globalFeatureIds.value[lastIndex]) {
                return parseFeature(_data, lastIndex, i);
              }
              lastIndex = i;
              lastValue = currValue;
            }
            if (globalFeatureId === _data.globalFeatureIds.value[lastIndex]) {
              return parseFeature(_data, lastIndex, _data.featureIds.value.length);
            }
          }
        } catch (err2) {
          _iterator.e(err2);
        } finally {
          _iterator.f();
        }
        throw new Error("featureId:".concat(globalFeatureId, " not found"));
      }
      function parseFeatures(data, type) {
        var dataArray = normalizeInput(data, type);
        return parseFeatureCollection(dataArray);
      }
      function binaryToGeometry(data, startIndex, endIndex) {
        switch (data.type) {
          case "Point":
            return pointToGeoJson(data, startIndex, endIndex);
          case "LineString":
            return lineStringToGeoJson(data, startIndex, endIndex);
          case "Polygon":
            return polygonToGeoJson(data, startIndex, endIndex);
          default:
            var unexpectedInput = data;
            throw new Error("Unsupported geometry type: ".concat(unexpectedInput === null || unexpectedInput === void 0 ? void 0 : unexpectedInput.type));
        }
      }
      function normalizeInput(data, type) {
        var isHeterogeneousType = Boolean(data.points || data.lines || data.polygons);
        if (!isHeterogeneousType) {
          data.type = type || parseType(data);
          return [data];
        }
        var features = [];
        if (data.points) {
          data.points.type = "Point";
          features.push(data.points);
        }
        if (data.lines) {
          data.lines.type = "LineString";
          features.push(data.lines);
        }
        if (data.polygons) {
          data.polygons.type = "Polygon";
          features.push(data.polygons);
        }
        return features;
      }
      function parseFeatureCollection(dataArray) {
        var features = [];
        var _iterator2 = _createForOfIteratorHelper(dataArray), _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
            var data = _step2.value;
            if (data.featureIds.value.length === 0) {
              continue;
            }
            var lastIndex = 0;
            var lastValue = data.featureIds.value[0];
            for (var i = 0; i < data.featureIds.value.length; i++) {
              var currValue = data.featureIds.value[i];
              if (currValue === lastValue) {
                continue;
              }
              features.push(parseFeature(data, lastIndex, i));
              lastIndex = i;
              lastValue = currValue;
            }
            features.push(parseFeature(data, lastIndex, data.featureIds.value.length));
          }
        } catch (err2) {
          _iterator2.e(err2);
        } finally {
          _iterator2.f();
        }
        return features;
      }
      function parseFeature(data, startIndex, endIndex) {
        var geometry = binaryToGeometry(data, startIndex, endIndex);
        var properties = parseProperties(data, startIndex, endIndex);
        var fields = parseFields(data, startIndex, endIndex);
        return _objectSpread({
          type: "Feature",
          geometry,
          properties
        }, fields);
      }
      function parseFields(data) {
        var startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var endIndex = arguments.length > 2 ? arguments[2] : void 0;
        return data.fields && data.fields[data.featureIds.value[startIndex]];
      }
      function parseProperties(data) {
        var startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
        var endIndex = arguments.length > 2 ? arguments[2] : void 0;
        var properties = Object.assign({}, data.properties[data.featureIds.value[startIndex]]);
        for (var key in data.numericProps) {
          properties[key] = data.numericProps[key].value[startIndex];
        }
        return properties;
      }
      function polygonToGeoJson(data) {
        var startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -Infinity;
        var endIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
        var positions = data.positions;
        var polygonIndices = data.polygonIndices.value.filter(function(x) {
          return x >= startIndex && x <= endIndex;
        });
        var primitivePolygonIndices = data.primitivePolygonIndices.value.filter(function(x) {
          return x >= startIndex && x <= endIndex;
        });
        var multi = polygonIndices.length > 2;
        if (!multi) {
          var _coordinates = [];
          for (var i = 0; i < primitivePolygonIndices.length - 1; i++) {
            var startRingIndex = primitivePolygonIndices[i];
            var endRingIndex = primitivePolygonIndices[i + 1];
            var ringCoordinates = ringToGeoJson(positions, startRingIndex, endRingIndex);
            _coordinates.push(ringCoordinates);
          }
          return {
            type: "Polygon",
            coordinates: _coordinates
          };
        }
        var coordinates = [];
        for (var _i = 0; _i < polygonIndices.length - 1; _i++) {
          var startPolygonIndex = polygonIndices[_i];
          var endPolygonIndex = polygonIndices[_i + 1];
          var polygonCoordinates = polygonToGeoJson(data, startPolygonIndex, endPolygonIndex).coordinates;
          coordinates.push(polygonCoordinates);
        }
        return {
          type: "MultiPolygon",
          coordinates
        };
      }
      function lineStringToGeoJson(data) {
        var startIndex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -Infinity;
        var endIndex = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Infinity;
        var positions = data.positions;
        var pathIndices = data.pathIndices.value.filter(function(x) {
          return x >= startIndex && x <= endIndex;
        });
        var multi = pathIndices.length > 2;
        if (!multi) {
          var _coordinates2 = ringToGeoJson(positions, pathIndices[0], pathIndices[1]);
          return {
            type: "LineString",
            coordinates: _coordinates2
          };
        }
        var coordinates = [];
        for (var i = 0; i < pathIndices.length - 1; i++) {
          var ringCoordinates = ringToGeoJson(positions, pathIndices[i], pathIndices[i + 1]);
          coordinates.push(ringCoordinates);
        }
        return {
          type: "MultiLineString",
          coordinates
        };
      }
      function pointToGeoJson(data, startIndex, endIndex) {
        var positions = data.positions;
        var coordinates = ringToGeoJson(positions, startIndex, endIndex);
        var multi = coordinates.length > 1;
        if (multi) {
          return {
            type: "MultiPoint",
            coordinates
          };
        }
        return {
          type: "Point",
          coordinates: coordinates[0]
        };
      }
      function ringToGeoJson(positions, startIndex, endIndex) {
        startIndex = startIndex || 0;
        endIndex = endIndex || positions.value.length / positions.size;
        var ringCoordinates = [];
        for (var j = startIndex; j < endIndex; j++) {
          var coord = Array();
          for (var k = j * positions.size; k < (j + 1) * positions.size; k++) {
            coord.push(Number(positions.value[k]));
          }
          ringCoordinates.push(coord);
        }
        return ringCoordinates;
      }
      function parseType(data) {
        if (data.pathIndices) {
          return "LineString";
        }
        if (data.polygonIndices) {
          return "Polygon";
        }
        return "Point";
      }
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/lib/transform.js
  var require_transform = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/lib/transform.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.transformBinaryCoords = transformBinaryCoords;
      exports.transformGeoJsonCoords = transformGeoJsonCoords;
      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            var F = function F2() {
            };
            return { s: F, n: function n() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            }, e: function e(_e) {
              throw _e;
            }, f: F };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var normalCompletion = true, didErr = false, err2;
        return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();
          normalCompletion = step.done;
          return step;
        }, e: function e(_e2) {
          didErr = true;
          err2 = _e2;
        }, f: function f() {
          try {
            if (!normalCompletion && it.return != null)
              it.return();
          } finally {
            if (didErr)
              throw err2;
          }
        } };
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
      function transformBinaryCoords(binaryFeatures, transformCoordinate) {
        if (binaryFeatures.points) {
          transformBinaryGeometryPositions(binaryFeatures.points, transformCoordinate);
        }
        if (binaryFeatures.lines) {
          transformBinaryGeometryPositions(binaryFeatures.lines, transformCoordinate);
        }
        if (binaryFeatures.polygons) {
          transformBinaryGeometryPositions(binaryFeatures.polygons, transformCoordinate);
        }
        return binaryFeatures;
      }
      function transformBinaryGeometryPositions(binaryGeometry, fn) {
        var positions = binaryGeometry.positions;
        for (var i = 0; i < positions.value.length; i += positions.size) {
          var _coord = Array.from(positions.value.subarray(i, i + positions.size));
          var transformedCoord = fn(_coord);
          positions.value.set(transformedCoord, i);
        }
      }
      function transformGeoJsonCoords(features, fn) {
        var _iterator = _createForOfIteratorHelper(features), _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done; ) {
            var feature = _step.value;
            feature.geometry.coordinates = coordMap(feature.geometry.coordinates, fn);
          }
        } catch (err2) {
          _iterator.e(err2);
        } finally {
          _iterator.f();
        }
        return features;
      }
      function coordMap(array, fn) {
        if (isCoord(array)) {
          return fn(array);
        }
        return array.map(function(item) {
          return coordMap(item, fn);
        });
      }
      function isCoord(array) {
        return Number.isFinite(array[0]) && Number.isFinite(array[1]);
      }
    }
  });

  // node_modules/@loaders.gl/gis/dist/es5/index.js
  var require_es53 = __commonJS({
    "node_modules/@loaders.gl/gis/dist/es5/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      Object.defineProperty(exports, "flatGeojsonToBinary", {
        enumerable: true,
        get: function get() {
          return _flatGeojsonToBinary.flatGeojsonToBinary;
        }
      });
      Object.defineProperty(exports, "geojsonToBinary", {
        enumerable: true,
        get: function get() {
          return _geojsonToBinary.geojsonToBinary;
        }
      });
      Object.defineProperty(exports, "geojsonToFlatGeojson", {
        enumerable: true,
        get: function get() {
          return _geojsonToFlatGeojson.geojsonToFlatGeojson;
        }
      });
      Object.defineProperty(exports, "binaryToGeojson", {
        enumerable: true,
        get: function get() {
          return _binaryToGeojson.binaryToGeojson;
        }
      });
      Object.defineProperty(exports, "binaryToGeoJson", {
        enumerable: true,
        get: function get() {
          return _binaryToGeojson.binaryToGeoJson;
        }
      });
      Object.defineProperty(exports, "binaryToGeometry", {
        enumerable: true,
        get: function get() {
          return _binaryToGeojson.binaryToGeometry;
        }
      });
      Object.defineProperty(exports, "transformBinaryCoords", {
        enumerable: true,
        get: function get() {
          return _transform.transformBinaryCoords;
        }
      });
      Object.defineProperty(exports, "transformGeoJsonCoords", {
        enumerable: true,
        get: function get() {
          return _transform.transformGeoJsonCoords;
        }
      });
      var _flatGeojsonToBinary = require_flat_geojson_to_binary();
      var _geojsonToBinary = require_geojson_to_binary();
      var _geojsonToFlatGeojson = require_geojson_to_flat_geojson();
      var _binaryToGeojson = require_binary_to_geojson();
      var _transform = require_transform();
    }
  });

  // node_modules/ieee754/index.js
  var require_ieee754 = __commonJS({
    "node_modules/ieee754/index.js"(exports) {
      exports.read = function(buffer, offset, isLE, mLen, nBytes) {
        var e, m;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var nBits = -7;
        var i = isLE ? nBytes - 1 : 0;
        var d = isLE ? -1 : 1;
        var s = buffer[offset + i];
        i += d;
        e = s & (1 << -nBits) - 1;
        s >>= -nBits;
        nBits += eLen;
        for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        m = e & (1 << -nBits) - 1;
        e >>= -nBits;
        nBits += mLen;
        for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {
        }
        if (e === 0) {
          e = 1 - eBias;
        } else if (e === eMax) {
          return m ? NaN : (s ? -1 : 1) * Infinity;
        } else {
          m = m + Math.pow(2, mLen);
          e = e - eBias;
        }
        return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
      };
      exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
        var e, m, c;
        var eLen = nBytes * 8 - mLen - 1;
        var eMax = (1 << eLen) - 1;
        var eBias = eMax >> 1;
        var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
        var i = isLE ? 0 : nBytes - 1;
        var d = isLE ? 1 : -1;
        var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
        value = Math.abs(value);
        if (isNaN(value) || value === Infinity) {
          m = isNaN(value) ? 1 : 0;
          e = eMax;
        } else {
          e = Math.floor(Math.log(value) / Math.LN2);
          if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
          }
          if (e + eBias >= 1) {
            value += rt / c;
          } else {
            value += rt * Math.pow(2, 1 - eBias);
          }
          if (value * c >= 2) {
            e++;
            c /= 2;
          }
          if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
          } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
          } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
          }
        }
        for (; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8) {
        }
        e = e << mLen | m;
        eLen += mLen;
        for (; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8) {
        }
        buffer[offset + i - d] |= s * 128;
      };
    }
  });

  // node_modules/pbf/index.js
  var require_pbf = __commonJS({
    "node_modules/pbf/index.js"(exports, module) {
      "use strict";
      module.exports = Pbf;
      var ieee754 = require_ieee754();
      function Pbf(buf) {
        this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
        this.pos = 0;
        this.type = 0;
        this.length = this.buf.length;
      }
      Pbf.Varint = 0;
      Pbf.Fixed64 = 1;
      Pbf.Bytes = 2;
      Pbf.Fixed32 = 5;
      var SHIFT_LEFT_32 = (1 << 16) * (1 << 16);
      var SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;
      var TEXT_DECODER_MIN_LENGTH = 12;
      var utf8TextDecoder = typeof TextDecoder === "undefined" ? null : new TextDecoder("utf8");
      Pbf.prototype = {
        destroy: function() {
          this.buf = null;
        },
        readFields: function(readField, result, end) {
          end = end || this.length;
          while (this.pos < end) {
            var val = this.readVarint(), tag = val >> 3, startPos = this.pos;
            this.type = val & 7;
            readField(tag, result, this);
            if (this.pos === startPos)
              this.skip(val);
          }
          return result;
        },
        readMessage: function(readField, result) {
          return this.readFields(readField, result, this.readVarint() + this.pos);
        },
        readFixed32: function() {
          var val = readUInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
        },
        readSFixed32: function() {
          var val = readInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
        },
        readFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
        },
        readSFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
        },
        readFloat: function() {
          var val = ieee754.read(this.buf, this.pos, true, 23, 4);
          this.pos += 4;
          return val;
        },
        readDouble: function() {
          var val = ieee754.read(this.buf, this.pos, true, 52, 8);
          this.pos += 8;
          return val;
        },
        readVarint: function(isSigned) {
          var buf = this.buf, val, b;
          b = buf[this.pos++];
          val = b & 127;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 7;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 14;
          if (b < 128)
            return val;
          b = buf[this.pos++];
          val |= (b & 127) << 21;
          if (b < 128)
            return val;
          b = buf[this.pos];
          val |= (b & 15) << 28;
          return readVarintRemainder(val, isSigned, this);
        },
        readVarint64: function() {
          return this.readVarint(true);
        },
        readSVarint: function() {
          var num = this.readVarint();
          return num % 2 === 1 ? (num + 1) / -2 : num / 2;
        },
        readBoolean: function() {
          return Boolean(this.readVarint());
        },
        readString: function() {
          var end = this.readVarint() + this.pos;
          var pos = this.pos;
          this.pos = end;
          if (end - pos >= TEXT_DECODER_MIN_LENGTH && utf8TextDecoder) {
            return readUtf8TextDecoder(this.buf, pos, end);
          }
          return readUtf8(this.buf, pos, end);
        },
        readBytes: function() {
          var end = this.readVarint() + this.pos, buffer = this.buf.subarray(this.pos, end);
          this.pos = end;
          return buffer;
        },
        readPackedVarint: function(arr, isSigned) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readVarint(isSigned));
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readVarint(isSigned));
          return arr;
        },
        readPackedSVarint: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readSVarint());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readSVarint());
          return arr;
        },
        readPackedBoolean: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readBoolean());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readBoolean());
          return arr;
        },
        readPackedFloat: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readFloat());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readFloat());
          return arr;
        },
        readPackedDouble: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readDouble());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readDouble());
          return arr;
        },
        readPackedFixed32: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readFixed32());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readFixed32());
          return arr;
        },
        readPackedSFixed32: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readSFixed32());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readSFixed32());
          return arr;
        },
        readPackedFixed64: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readFixed64());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readFixed64());
          return arr;
        },
        readPackedSFixed64: function(arr) {
          if (this.type !== Pbf.Bytes)
            return arr.push(this.readSFixed64());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end)
            arr.push(this.readSFixed64());
          return arr;
        },
        skip: function(val) {
          var type = val & 7;
          if (type === Pbf.Varint)
            while (this.buf[this.pos++] > 127) {
            }
          else if (type === Pbf.Bytes)
            this.pos = this.readVarint() + this.pos;
          else if (type === Pbf.Fixed32)
            this.pos += 4;
          else if (type === Pbf.Fixed64)
            this.pos += 8;
          else
            throw new Error("Unimplemented type: " + type);
        },
        writeTag: function(tag, type) {
          this.writeVarint(tag << 3 | type);
        },
        realloc: function(min) {
          var length = this.length || 16;
          while (length < this.pos + min)
            length *= 2;
          if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
          }
        },
        finish: function() {
          this.length = this.pos;
          this.pos = 0;
          return this.buf.subarray(0, this.length);
        },
        writeFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
        },
        writeSFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
        },
        writeFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
        },
        writeSFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
        },
        writeVarint: function(val) {
          val = +val || 0;
          if (val > 268435455 || val < 0) {
            writeBigVarint(val, this);
            return;
          }
          this.realloc(4);
          this.buf[this.pos++] = val & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = (val >>>= 7) & 127 | (val > 127 ? 128 : 0);
          if (val <= 127)
            return;
          this.buf[this.pos++] = val >>> 7 & 127;
        },
        writeSVarint: function(val) {
          this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
        },
        writeBoolean: function(val) {
          this.writeVarint(Boolean(val));
        },
        writeString: function(str) {
          str = String(str);
          this.realloc(str.length * 4);
          this.pos++;
          var startPos = this.pos;
          this.pos = writeUtf8(this.buf, str, this.pos);
          var len = this.pos - startPos;
          if (len >= 128)
            makeRoomForExtraLength(startPos, len, this);
          this.pos = startPos - 1;
          this.writeVarint(len);
          this.pos += len;
        },
        writeFloat: function(val) {
          this.realloc(4);
          ieee754.write(this.buf, val, this.pos, true, 23, 4);
          this.pos += 4;
        },
        writeDouble: function(val) {
          this.realloc(8);
          ieee754.write(this.buf, val, this.pos, true, 52, 8);
          this.pos += 8;
        },
        writeBytes: function(buffer) {
          var len = buffer.length;
          this.writeVarint(len);
          this.realloc(len);
          for (var i = 0; i < len; i++)
            this.buf[this.pos++] = buffer[i];
        },
        writeRawMessage: function(fn, obj) {
          this.pos++;
          var startPos = this.pos;
          fn(obj, this);
          var len = this.pos - startPos;
          if (len >= 128)
            makeRoomForExtraLength(startPos, len, this);
          this.pos = startPos - 1;
          this.writeVarint(len);
          this.pos += len;
        },
        writeMessage: function(tag, fn, obj) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeRawMessage(fn, obj);
        },
        writePackedVarint: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedVarint, arr);
        },
        writePackedSVarint: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedSVarint, arr);
        },
        writePackedBoolean: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedBoolean, arr);
        },
        writePackedFloat: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedFloat, arr);
        },
        writePackedDouble: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedDouble, arr);
        },
        writePackedFixed32: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedFixed32, arr);
        },
        writePackedSFixed32: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedSFixed32, arr);
        },
        writePackedFixed64: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedFixed64, arr);
        },
        writePackedSFixed64: function(tag, arr) {
          if (arr.length)
            this.writeMessage(tag, writePackedSFixed64, arr);
        },
        writeBytesField: function(tag, buffer) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeBytes(buffer);
        },
        writeFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFixed32(val);
        },
        writeSFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeSFixed32(val);
        },
        writeFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeFixed64(val);
        },
        writeSFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeSFixed64(val);
        },
        writeVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeVarint(val);
        },
        writeSVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeSVarint(val);
        },
        writeStringField: function(tag, str) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeString(str);
        },
        writeFloatField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFloat(val);
        },
        writeDoubleField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeDouble(val);
        },
        writeBooleanField: function(tag, val) {
          this.writeVarintField(tag, Boolean(val));
        }
      };
      function readVarintRemainder(l, s, p) {
        var buf = p.buf, h, b;
        b = buf[p.pos++];
        h = (b & 112) >> 4;
        if (b < 128)
          return toNum(l, h, s);
        b = buf[p.pos++];
        h |= (b & 127) << 3;
        if (b < 128)
          return toNum(l, h, s);
        b = buf[p.pos++];
        h |= (b & 127) << 10;
        if (b < 128)
          return toNum(l, h, s);
        b = buf[p.pos++];
        h |= (b & 127) << 17;
        if (b < 128)
          return toNum(l, h, s);
        b = buf[p.pos++];
        h |= (b & 127) << 24;
        if (b < 128)
          return toNum(l, h, s);
        b = buf[p.pos++];
        h |= (b & 1) << 31;
        if (b < 128)
          return toNum(l, h, s);
        throw new Error("Expected varint not more than 10 bytes");
      }
      function readPackedEnd(pbf) {
        return pbf.type === Pbf.Bytes ? pbf.readVarint() + pbf.pos : pbf.pos + 1;
      }
      function toNum(low, high, isSigned) {
        if (isSigned) {
          return high * 4294967296 + (low >>> 0);
        }
        return (high >>> 0) * 4294967296 + (low >>> 0);
      }
      function writeBigVarint(val, pbf) {
        var low, high;
        if (val >= 0) {
          low = val % 4294967296 | 0;
          high = val / 4294967296 | 0;
        } else {
          low = ~(-val % 4294967296);
          high = ~(-val / 4294967296);
          if (low ^ 4294967295) {
            low = low + 1 | 0;
          } else {
            low = 0;
            high = high + 1 | 0;
          }
        }
        if (val >= 18446744073709552e3 || val < -18446744073709552e3) {
          throw new Error("Given varint doesn't fit into 10 bytes");
        }
        pbf.realloc(10);
        writeBigVarintLow(low, high, pbf);
        writeBigVarintHigh(high, pbf);
      }
      function writeBigVarintLow(low, high, pbf) {
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos++] = low & 127 | 128;
        low >>>= 7;
        pbf.buf[pbf.pos] = low & 127;
      }
      function writeBigVarintHigh(high, pbf) {
        var lsb = (high & 7) << 4;
        pbf.buf[pbf.pos++] |= lsb | ((high >>>= 3) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127 | ((high >>>= 7) ? 128 : 0);
        if (!high)
          return;
        pbf.buf[pbf.pos++] = high & 127;
      }
      function makeRoomForExtraLength(startPos, len, pbf) {
        var extraLen = len <= 16383 ? 1 : len <= 2097151 ? 2 : len <= 268435455 ? 3 : Math.floor(Math.log(len) / (Math.LN2 * 7));
        pbf.realloc(extraLen);
        for (var i = pbf.pos - 1; i >= startPos; i--)
          pbf.buf[i + extraLen] = pbf.buf[i];
      }
      function writePackedVarint(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeVarint(arr[i]);
      }
      function writePackedSVarint(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeSVarint(arr[i]);
      }
      function writePackedFloat(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeFloat(arr[i]);
      }
      function writePackedDouble(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeDouble(arr[i]);
      }
      function writePackedBoolean(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeBoolean(arr[i]);
      }
      function writePackedFixed32(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeFixed32(arr[i]);
      }
      function writePackedSFixed32(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeSFixed32(arr[i]);
      }
      function writePackedFixed64(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeFixed64(arr[i]);
      }
      function writePackedSFixed64(arr, pbf) {
        for (var i = 0; i < arr.length; i++)
          pbf.writeSFixed64(arr[i]);
      }
      function readUInt32(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + buf[pos + 3] * 16777216;
      }
      function writeInt32(buf, val, pos) {
        buf[pos] = val;
        buf[pos + 1] = val >>> 8;
        buf[pos + 2] = val >>> 16;
        buf[pos + 3] = val >>> 24;
      }
      function readInt32(buf, pos) {
        return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16) + (buf[pos + 3] << 24);
      }
      function readUtf8(buf, pos, end) {
        var str = "";
        var i = pos;
        while (i < end) {
          var b0 = buf[i];
          var c = null;
          var bytesPerSequence = b0 > 239 ? 4 : b0 > 223 ? 3 : b0 > 191 ? 2 : 1;
          if (i + bytesPerSequence > end)
            break;
          var b1, b2, b3;
          if (bytesPerSequence === 1) {
            if (b0 < 128) {
              c = b0;
            }
          } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 192) === 128) {
              c = (b0 & 31) << 6 | b1 & 63;
              if (c <= 127) {
                c = null;
              }
            }
          } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 192) === 128 && (b2 & 192) === 128) {
              c = (b0 & 15) << 12 | (b1 & 63) << 6 | b2 & 63;
              if (c <= 2047 || c >= 55296 && c <= 57343) {
                c = null;
              }
            }
          } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 192) === 128 && (b2 & 192) === 128 && (b3 & 192) === 128) {
              c = (b0 & 15) << 18 | (b1 & 63) << 12 | (b2 & 63) << 6 | b3 & 63;
              if (c <= 65535 || c >= 1114112) {
                c = null;
              }
            }
          }
          if (c === null) {
            c = 65533;
            bytesPerSequence = 1;
          } else if (c > 65535) {
            c -= 65536;
            str += String.fromCharCode(c >>> 10 & 1023 | 55296);
            c = 56320 | c & 1023;
          }
          str += String.fromCharCode(c);
          i += bytesPerSequence;
        }
        return str;
      }
      function readUtf8TextDecoder(buf, pos, end) {
        return utf8TextDecoder.decode(buf.subarray(pos, end));
      }
      function writeUtf8(buf, str, pos) {
        for (var i = 0, c, lead; i < str.length; i++) {
          c = str.charCodeAt(i);
          if (c > 55295 && c < 57344) {
            if (lead) {
              if (c < 56320) {
                buf[pos++] = 239;
                buf[pos++] = 191;
                buf[pos++] = 189;
                lead = c;
                continue;
              } else {
                c = lead - 55296 << 10 | c - 56320 | 65536;
                lead = null;
              }
            } else {
              if (c > 56319 || i + 1 === str.length) {
                buf[pos++] = 239;
                buf[pos++] = 191;
                buf[pos++] = 189;
              } else {
                lead = c;
              }
              continue;
            }
          } else if (lead) {
            buf[pos++] = 239;
            buf[pos++] = 191;
            buf[pos++] = 189;
            lead = null;
          }
          if (c < 128) {
            buf[pos++] = c;
          } else {
            if (c < 2048) {
              buf[pos++] = c >> 6 | 192;
            } else {
              if (c < 65536) {
                buf[pos++] = c >> 12 | 224;
              } else {
                buf[pos++] = c >> 18 | 240;
                buf[pos++] = c >> 12 & 63 | 128;
              }
              buf[pos++] = c >> 6 & 63 | 128;
            }
            buf[pos++] = c & 63 | 128;
          }
        }
        return pos;
      }
    }
  });

  // node_modules/@loaders.gl/mvt/dist/helpers/mapbox-util-functions.js
  var require_mapbox_util_functions = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/helpers/mapbox-util-functions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.readTag = exports.readFeature = exports.signedArea = exports.classifyRings = void 0;
      function classifyRings(rings) {
        const len = rings.length;
        if (len <= 1)
          return [rings];
        const polygons = [];
        let polygon;
        let ccw;
        for (let i = 0; i < len; i++) {
          const area = signedArea(rings[i]);
          if (area === 0)
            continue;
          if (ccw === void 0)
            ccw = area < 0;
          if (ccw === area < 0) {
            if (polygon)
              polygons.push(polygon);
            polygon = [rings[i]];
          } else if (polygon)
            polygon.push(rings[i]);
        }
        if (polygon)
          polygons.push(polygon);
        return polygons;
      }
      exports.classifyRings = classifyRings;
      function signedArea(ring) {
        let sum = 0;
        for (let i = 0, j = ring.length - 1, p1, p2; i < ring.length; j = i++) {
          p1 = ring[i];
          p2 = ring[j];
          sum += (p2[0] - p1[0]) * (p1[1] + p2[1]);
        }
        return sum;
      }
      exports.signedArea = signedArea;
      function readFeature(tag, feature, pbf) {
        if (feature && pbf) {
          if (tag === 1)
            feature.id = pbf.readVarint();
          else if (tag === 2)
            readTag(pbf, feature);
          else if (tag === 3)
            feature.type = pbf.readVarint();
          else if (tag === 4)
            feature._geometry = pbf.pos;
        }
      }
      exports.readFeature = readFeature;
      function readTag(pbf, feature) {
        const end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          const key = feature._keys[pbf.readVarint()];
          const value = feature._values[pbf.readVarint()];
          feature.properties[key] = value;
        }
      }
      exports.readTag = readTag;
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile-feature.js
  var require_vector_tile_feature = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile-feature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      var mapbox_util_functions_1 = require_mapbox_util_functions();
      var VectorTileFeature = class {
        constructor(pbf, end, extent, keys, values) {
          this.properties = {};
          this.extent = extent;
          this.type = 0;
          this.id = null;
          this._pbf = pbf;
          this._geometry = -1;
          this._keys = keys;
          this._values = values;
          pbf.readFields(mapbox_util_functions_1.readFeature, this, end);
        }
        static get types() {
          return ["Unknown", "Point", "LineString", "Polygon"];
        }
        loadGeometry() {
          const pbf = this._pbf;
          pbf.pos = this._geometry;
          const end = pbf.readVarint() + pbf.pos;
          let cmd = 1;
          let length = 0;
          let x = 0;
          let y = 0;
          const lines = [];
          let line;
          while (pbf.pos < end) {
            if (length <= 0) {
              const cmdLen = pbf.readVarint();
              cmd = cmdLen & 7;
              length = cmdLen >> 3;
            }
            length--;
            if (cmd === 1 || cmd === 2) {
              x += pbf.readSVarint();
              y += pbf.readSVarint();
              if (cmd === 1) {
                if (line)
                  lines.push(line);
                line = [];
              }
              if (line)
                line.push([x, y]);
            } else if (cmd === 7) {
              if (line) {
                line.push(line[0].slice());
              }
            } else {
              throw new Error(`unknown command ${cmd}`);
            }
          }
          if (line)
            lines.push(line);
          return lines;
        }
        bbox() {
          const pbf = this._pbf;
          pbf.pos = this._geometry;
          const end = pbf.readVarint() + pbf.pos;
          let cmd = 1;
          let length = 0;
          let x = 0;
          let y = 0;
          let x1 = Infinity;
          let x2 = -Infinity;
          let y1 = Infinity;
          let y2 = -Infinity;
          while (pbf.pos < end) {
            if (length <= 0) {
              const cmdLen = pbf.readVarint();
              cmd = cmdLen & 7;
              length = cmdLen >> 3;
            }
            length--;
            if (cmd === 1 || cmd === 2) {
              x += pbf.readSVarint();
              y += pbf.readSVarint();
              if (x < x1)
                x1 = x;
              if (x > x2)
                x2 = x;
              if (y < y1)
                y1 = y;
              if (y > y2)
                y2 = y;
            } else if (cmd !== 7) {
              throw new Error(`unknown command ${cmd}`);
            }
          }
          return [x1, y1, x2, y2];
        }
        _toGeoJSON(transform) {
          let coords = this.loadGeometry();
          let type = VectorTileFeature.types[this.type];
          let i;
          let j;
          switch (this.type) {
            case 1:
              const points = [];
              for (i = 0; i < coords.length; i++) {
                points[i] = coords[i][0];
              }
              coords = points;
              transform(coords, this);
              break;
            case 2:
              for (i = 0; i < coords.length; i++) {
                transform(coords[i], this);
              }
              break;
            case 3:
              coords = (0, mapbox_util_functions_1.classifyRings)(coords);
              for (i = 0; i < coords.length; i++) {
                for (j = 0; j < coords[i].length; j++) {
                  transform(coords[i][j], this);
                }
              }
              break;
          }
          if (coords.length === 1) {
            coords = coords[0];
          } else {
            type = `Multi${type}`;
          }
          const result = {
            type: "Feature",
            geometry: {
              type,
              coordinates: coords
            },
            properties: this.properties
          };
          if (this.id !== null) {
            result.id = this.id;
          }
          return result;
        }
        toGeoJSON(options) {
          if (typeof options === "function") {
            return this._toGeoJSON(options);
          }
          const { x, y, z } = options;
          const size = this.extent * Math.pow(2, z);
          const x0 = this.extent * x;
          const y0 = this.extent * y;
          function project(line) {
            for (let j = 0; j < line.length; j++) {
              const p = line[j];
              p[0] = (p[0] + x0) * 360 / size - 180;
              const y2 = 180 - (p[1] + y0) * 360 / size;
              p[1] = 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
            }
          }
          return this._toGeoJSON(project);
        }
      };
      exports.default = VectorTileFeature;
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile-layer.js
  var require_vector_tile_layer = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile-layer.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var vector_tile_feature_1 = __importDefault(require_vector_tile_feature());
      var VectorTileLayer = class {
        constructor(pbf, end) {
          this.version = 1;
          this.name = "";
          this.extent = 4096;
          this.length = 0;
          this._pbf = pbf;
          this._keys = [];
          this._values = [];
          this._features = [];
          pbf.readFields(readLayer, this, end);
          this.length = this._features.length;
        }
        feature(i) {
          if (i < 0 || i >= this._features.length) {
            throw new Error("feature index out of bounds");
          }
          this._pbf.pos = this._features[i];
          const end = this._pbf.readVarint() + this._pbf.pos;
          return new vector_tile_feature_1.default(this._pbf, end, this.extent, this._keys, this._values);
        }
      };
      exports.default = VectorTileLayer;
      function readLayer(tag, layer, pbf) {
        if (layer && pbf) {
          if (tag === 15)
            layer.version = pbf.readVarint();
          else if (tag === 1)
            layer.name = pbf.readString();
          else if (tag === 5)
            layer.extent = pbf.readVarint();
          else if (tag === 2)
            layer._features.push(pbf.pos);
          else if (tag === 3)
            layer._keys.push(pbf.readString());
          else if (tag === 4)
            layer._values.push(readValueMessage(pbf));
        }
      }
      function readValueMessage(pbf) {
        let value = null;
        const end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          const tag = pbf.readVarint() >> 3;
          value = tag === 1 ? pbf.readString() : tag === 2 ? pbf.readFloat() : tag === 3 ? pbf.readDouble() : tag === 4 ? pbf.readVarint64() : tag === 5 ? pbf.readVarint() : tag === 6 ? pbf.readSVarint() : tag === 7 ? pbf.readBoolean() : null;
        }
        return value;
      }
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile.js
  var require_vector_tile = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/mapbox-vector-tile/vector-tile.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var vector_tile_layer_1 = __importDefault(require_vector_tile_layer());
      var VectorTile = class {
        constructor(pbf, end) {
          this.layers = pbf.readFields(readTile, {}, end);
        }
      };
      exports.default = VectorTile;
      function readTile(tag, layers, pbf) {
        if (tag === 3) {
          if (pbf) {
            const layer = new vector_tile_layer_1.default(pbf, pbf.readVarint() + pbf.pos);
            if (layer.length && layers) {
              layers[layer.name] = layer;
            }
          }
        }
      }
    }
  });

  // node_modules/@loaders.gl/mvt/dist/helpers/binary-util-functions.js
  var require_binary_util_functions = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/helpers/binary-util-functions.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.readTag = exports.readFeature = exports.project = exports.classifyRings = void 0;
      var polygon_1 = require_es52();
      function classifyRings(geom) {
        const len = geom.indices.length;
        const type = "Polygon";
        if (len <= 1) {
          return {
            type,
            data: geom.data,
            areas: [[(0, polygon_1.getPolygonSignedArea)(geom.data)]],
            indices: [geom.indices]
          };
        }
        const areas = [];
        const polygons = [];
        let ringAreas = [];
        let polygon = [];
        let ccw;
        let offset = 0;
        for (let endIndex, i = 0, startIndex; i < len; i++) {
          startIndex = geom.indices[i] - offset;
          endIndex = geom.indices[i + 1] - offset || geom.data.length;
          const shape = geom.data.slice(startIndex, endIndex);
          const area = (0, polygon_1.getPolygonSignedArea)(shape);
          if (area === 0) {
            const before = geom.data.slice(0, startIndex);
            const after = geom.data.slice(endIndex);
            geom.data = before.concat(after);
            offset += endIndex - startIndex;
            continue;
          }
          if (ccw === void 0)
            ccw = area < 0;
          if (ccw === area < 0) {
            if (polygon.length) {
              areas.push(ringAreas);
              polygons.push(polygon);
            }
            polygon = [startIndex];
            ringAreas = [area];
          } else {
            ringAreas.push(area);
            polygon.push(startIndex);
          }
        }
        if (ringAreas)
          areas.push(ringAreas);
        if (polygon.length)
          polygons.push(polygon);
        return { type, areas, indices: polygons, data: geom.data };
      }
      exports.classifyRings = classifyRings;
      function project(data, x0, y0, size) {
        for (let j = 0, jl = data.length; j < jl; j += 2) {
          data[j] = (data[j] + x0) * 360 / size - 180;
          const y2 = 180 - (data[j + 1] + y0) * 360 / size;
          data[j + 1] = 360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90;
        }
      }
      exports.project = project;
      function readFeature(tag, feature, pbf) {
        if (feature && pbf) {
          if (tag === 1)
            feature.id = pbf.readVarint();
          else if (tag === 2)
            readTag(pbf, feature);
          else if (tag === 3)
            feature.type = pbf.readVarint();
          else if (tag === 4)
            feature._geometry = pbf.pos;
        }
      }
      exports.readFeature = readFeature;
      function readTag(pbf, feature) {
        const end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          const key = feature._keys[pbf.readVarint()];
          const value = feature._values[pbf.readVarint()];
          feature.properties[key] = value;
        }
      }
      exports.readTag = readTag;
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile-feature.js
  var require_vector_tile_feature2 = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile-feature.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.TEST_EXPORTS = void 0;
      var binary_util_functions_1 = require_binary_util_functions();
      var endPos;
      var cmd;
      var cmdLen;
      var length;
      var x;
      var y;
      var i;
      exports.TEST_EXPORTS = {
        classifyRings: binary_util_functions_1.classifyRings
      };
      var VectorTileFeature = class {
        constructor(pbf, end, extent, keys, values, geometryInfo) {
          this.properties = {};
          this.extent = extent;
          this.type = 0;
          this.id = null;
          this._pbf = pbf;
          this._geometry = -1;
          this._keys = keys;
          this._values = values;
          this._geometryInfo = geometryInfo;
          pbf.readFields(binary_util_functions_1.readFeature, this, end);
        }
        loadGeometry() {
          const pbf = this._pbf;
          pbf.pos = this._geometry;
          endPos = pbf.readVarint() + pbf.pos;
          cmd = 1;
          length = 0;
          x = 0;
          y = 0;
          i = 0;
          const indices = [];
          const data = [];
          while (pbf.pos < endPos) {
            if (length <= 0) {
              cmdLen = pbf.readVarint();
              cmd = cmdLen & 7;
              length = cmdLen >> 3;
            }
            length--;
            if (cmd === 1 || cmd === 2) {
              x += pbf.readSVarint();
              y += pbf.readSVarint();
              if (cmd === 1) {
                indices.push(i);
              }
              data.push(x, y);
              i += 2;
            } else if (cmd === 7) {
              if (i > 0) {
                const start = indices[indices.length - 1];
                data.push(data[start], data[start + 1]);
                i += 2;
              }
            } else {
              throw new Error(`unknown command ${cmd}`);
            }
          }
          return { data, indices };
        }
        _toBinaryCoordinates(transform) {
          const geom = this.loadGeometry();
          let geometry;
          transform(geom.data, this);
          const coordLength = 2;
          switch (this.type) {
            case 1:
              this._geometryInfo.pointFeaturesCount++;
              this._geometryInfo.pointPositionsCount += geom.indices.length;
              geometry = { type: "Point", ...geom };
              break;
            case 2:
              this._geometryInfo.lineFeaturesCount++;
              this._geometryInfo.linePathsCount += geom.indices.length;
              this._geometryInfo.linePositionsCount += geom.data.length / coordLength;
              geometry = { type: "LineString", ...geom };
              break;
            case 3:
              geometry = (0, binary_util_functions_1.classifyRings)(geom);
              this._geometryInfo.polygonFeaturesCount++;
              this._geometryInfo.polygonObjectsCount += geometry.indices.length;
              for (const indices of geometry.indices) {
                this._geometryInfo.polygonRingsCount += indices.length;
              }
              this._geometryInfo.polygonPositionsCount += geometry.data.length / coordLength;
              break;
            default:
              throw new Error(`Invalid geometry type: ${this.type}`);
          }
          const result = { type: "Feature", geometry, properties: this.properties };
          if (this.id !== null) {
            result.id = this.id;
          }
          return result;
        }
        toBinaryCoordinates(options) {
          if (typeof options === "function") {
            return this._toBinaryCoordinates(options);
          }
          const { x: x2, y: y2, z } = options;
          const size = this.extent * Math.pow(2, z);
          const x0 = this.extent * x2;
          const y0 = this.extent * y2;
          return this._toBinaryCoordinates((data) => (0, binary_util_functions_1.project)(data, x0, y0, size));
        }
      };
      exports.default = VectorTileFeature;
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile-layer.js
  var require_vector_tile_layer2 = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile-layer.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var vector_tile_feature_1 = __importDefault(require_vector_tile_feature2());
      var VectorTileLayer = class {
        constructor(pbf, end) {
          this.version = 1;
          this.name = "";
          this.extent = 4096;
          this.length = 0;
          this._pbf = pbf;
          this._keys = [];
          this._values = [];
          this._features = [];
          pbf.readFields(readLayer, this, end);
          this.length = this._features.length;
        }
        feature(i, geometryInfo) {
          if (i < 0 || i >= this._features.length) {
            throw new Error("feature index out of bounds");
          }
          this._pbf.pos = this._features[i];
          const end = this._pbf.readVarint() + this._pbf.pos;
          return new vector_tile_feature_1.default(this._pbf, end, this.extent, this._keys, this._values, geometryInfo);
        }
      };
      exports.default = VectorTileLayer;
      function readLayer(tag, layer, pbf) {
        if (layer && pbf) {
          if (tag === 15)
            layer.version = pbf.readVarint();
          else if (tag === 1)
            layer.name = pbf.readString();
          else if (tag === 5)
            layer.extent = pbf.readVarint();
          else if (tag === 2)
            layer._features.push(pbf.pos);
          else if (tag === 3)
            layer._keys.push(pbf.readString());
          else if (tag === 4)
            layer._values.push(readValueMessage(pbf));
        }
      }
      function readValueMessage(pbf) {
        let value = null;
        const end = pbf.readVarint() + pbf.pos;
        while (pbf.pos < end) {
          const tag = pbf.readVarint() >> 3;
          value = tag === 1 ? pbf.readString() : tag === 2 ? pbf.readFloat() : tag === 3 ? pbf.readDouble() : tag === 4 ? pbf.readVarint64() : tag === 5 ? pbf.readVarint() : tag === 6 ? pbf.readSVarint() : tag === 7 ? pbf.readBoolean() : null;
        }
        return value;
      }
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile.js
  var require_vector_tile2 = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/binary-vector-tile/vector-tile.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var vector_tile_layer_1 = __importDefault(require_vector_tile_layer2());
      var VectorTile = class {
        constructor(pbf, end) {
          this.layers = pbf.readFields(readTile, {}, end);
        }
      };
      exports.default = VectorTile;
      function readTile(tag, layers, pbf) {
        if (tag === 3) {
          if (pbf) {
            const layer = new vector_tile_layer_1.default(pbf, pbf.readVarint() + pbf.pos);
            if (layer.length && layers) {
              layers[layer.name] = layer;
            }
          }
        }
      }
    }
  });

  // node_modules/@loaders.gl/mvt/dist/lib/parse-mvt.js
  var require_parse_mvt = __commonJS({
    "node_modules/@loaders.gl/mvt/dist/lib/parse-mvt.js"(exports) {
      "use strict";
      var __importDefault = exports && exports.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      var gis_1 = require_es53();
      var pbf_1 = __importDefault(require_pbf());
      var vector_tile_1 = __importDefault(require_vector_tile());
      var vector_tile_2 = __importDefault(require_vector_tile2());
      function parseMVT(arrayBuffer, options) {
        const mvtOptions = normalizeOptions(options);
        const shape = options?.gis?.format || options?.mvt?.shape;
        switch (shape) {
          case "columnar-table":
            return { shape: "columnar-table", data: parseToBinary(arrayBuffer, mvtOptions) };
          case "geojson-row-table": {
            const table = {
              shape: "geojson-row-table",
              data: parseToGeojson(arrayBuffer, mvtOptions)
            };
            return table;
          }
          case "geojson":
            return parseToGeojson(arrayBuffer, mvtOptions);
          case "binary-geometry":
            return parseToBinary(arrayBuffer, mvtOptions);
          case "binary":
            return parseToBinary(arrayBuffer, mvtOptions);
          default:
            throw new Error(shape);
        }
      }
      exports.default = parseMVT;
      function parseToBinary(arrayBuffer, options) {
        const [flatGeoJsonFeatures, geometryInfo] = parseToFlatGeoJson(arrayBuffer, options);
        const binaryData = (0, gis_1.flatGeojsonToBinary)(flatGeoJsonFeatures, geometryInfo);
        binaryData.byteLength = arrayBuffer.byteLength;
        return binaryData;
      }
      function parseToFlatGeoJson(arrayBuffer, options) {
        const features = [];
        const geometryInfo = {
          coordLength: 2,
          pointPositionsCount: 0,
          pointFeaturesCount: 0,
          linePositionsCount: 0,
          linePathsCount: 0,
          lineFeaturesCount: 0,
          polygonPositionsCount: 0,
          polygonObjectsCount: 0,
          polygonRingsCount: 0,
          polygonFeaturesCount: 0
        };
        if (arrayBuffer.byteLength <= 0) {
          return [features, geometryInfo];
        }
        const tile = new vector_tile_2.default(new pbf_1.default(arrayBuffer));
        const selectedLayers = options && Array.isArray(options.layers) ? options.layers : Object.keys(tile.layers);
        selectedLayers.forEach((layerName) => {
          const vectorTileLayer = tile.layers[layerName];
          if (!vectorTileLayer) {
            return;
          }
          for (let i = 0; i < vectorTileLayer.length; i++) {
            const vectorTileFeature = vectorTileLayer.feature(i, geometryInfo);
            const decodedFeature = getDecodedFeatureBinary(vectorTileFeature, options, layerName);
            features.push(decodedFeature);
          }
        });
        return [features, geometryInfo];
      }
      function parseToGeojson(arrayBuffer, options) {
        if (arrayBuffer.byteLength <= 0) {
          return [];
        }
        const features = [];
        const tile = new vector_tile_1.default(new pbf_1.default(arrayBuffer));
        const selectedLayers = Array.isArray(options.layers) ? options.layers : Object.keys(tile.layers);
        selectedLayers.forEach((layerName) => {
          const vectorTileLayer = tile.layers[layerName];
          if (!vectorTileLayer) {
            return;
          }
          for (let i = 0; i < vectorTileLayer.length; i++) {
            const vectorTileFeature = vectorTileLayer.feature(i);
            const decodedFeature = getDecodedFeature(vectorTileFeature, options, layerName);
            features.push(decodedFeature);
          }
        });
        return features;
      }
      function normalizeOptions(options) {
        if (!options?.mvt) {
          throw new Error("mvt options required");
        }
        const wgs84Coordinates = options.mvt?.coordinates === "wgs84";
        const { tileIndex } = options.mvt;
        const hasTileIndex = tileIndex && Number.isFinite(tileIndex.x) && Number.isFinite(tileIndex.y) && Number.isFinite(tileIndex.z);
        if (wgs84Coordinates && !hasTileIndex) {
          throw new Error("MVT Loader: WGS84 coordinates need tileIndex property");
        }
        return options.mvt;
      }
      function getDecodedFeature(feature, options, layerName) {
        const decodedFeature = feature.toGeoJSON(options.coordinates === "wgs84" ? options.tileIndex : transformToLocalCoordinates);
        if (options.layerProperty) {
          decodedFeature.properties[options.layerProperty] = layerName;
        }
        return decodedFeature;
      }
      function getDecodedFeatureBinary(feature, options, layerName) {
        const decodedFeature = feature.toBinaryCoordinates(options.coordinates === "wgs84" ? options.tileIndex : transformToLocalCoordinatesBinary);
        if (options.layerProperty && decodedFeature.properties) {
          decodedFeature.properties[options.layerProperty] = layerName;
        }
        return decodedFeature;
      }
      function transformToLocalCoordinates(line, feature) {
        const { extent } = feature;
        for (let i = 0; i < line.length; i++) {
          const p = line[i];
          p[0] /= extent;
          p[1] /= extent;
        }
      }
      function transformToLocalCoordinatesBinary(data, feature) {
        const { extent } = feature;
        for (let i = 0, il = data.length; i < il; ++i) {
          data[i] /= extent;
        }
      }
    }
  });

  // node_modules/fflate/esm/browser.js
  var u8 = Uint8Array;
  var u16 = Uint16Array;
  var u32 = Uint32Array;
  var fleb = new u8([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]);
  var fdeb = new u8([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]);
  var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var freb = function(eb, start) {
    var b = new u16(31);
    for (var i = 0; i < 31; ++i) {
      b[i] = start += 1 << eb[i - 1];
    }
    var r = new u32(b[30]);
    for (var i = 1; i < 30; ++i) {
      for (var j = b[i]; j < b[i + 1]; ++j) {
        r[j] = j - b[i] << 5 | i;
      }
    }
    return [b, r];
  };
  var _a = freb(fleb, 2);
  var fl = _a[0];
  var revfl = _a[1];
  fl[28] = 258, revfl[258] = 28;
  var _b = freb(fdeb, 0);
  var fd = _b[0];
  var revfd = _b[1];
  var rev = new u16(32768);
  for (i = 0; i < 32768; ++i) {
    x = (i & 43690) >>> 1 | (i & 21845) << 1;
    x = (x & 52428) >>> 2 | (x & 13107) << 2;
    x = (x & 61680) >>> 4 | (x & 3855) << 4;
    rev[i] = ((x & 65280) >>> 8 | (x & 255) << 8) >>> 1;
  }
  var x;
  var i;
  var hMap = function(cd, mb, r) {
    var s = cd.length;
    var i = 0;
    var l = new u16(mb);
    for (; i < s; ++i) {
      if (cd[i])
        ++l[cd[i] - 1];
    }
    var le = new u16(mb);
    for (i = 0; i < mb; ++i) {
      le[i] = le[i - 1] + l[i - 1] << 1;
    }
    var co;
    if (r) {
      co = new u16(1 << mb);
      var rvb = 15 - mb;
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          var sv = i << 4 | cd[i];
          var r_1 = mb - cd[i];
          var v = le[cd[i] - 1]++ << r_1;
          for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
            co[rev[v] >>> rvb] = sv;
          }
        }
      }
    } else {
      co = new u16(s);
      for (i = 0; i < s; ++i) {
        if (cd[i]) {
          co[i] = rev[le[cd[i] - 1]++] >>> 15 - cd[i];
        }
      }
    }
    return co;
  };
  var flt = new u8(288);
  for (i = 0; i < 144; ++i)
    flt[i] = 8;
  var i;
  for (i = 144; i < 256; ++i)
    flt[i] = 9;
  var i;
  for (i = 256; i < 280; ++i)
    flt[i] = 7;
  var i;
  for (i = 280; i < 288; ++i)
    flt[i] = 8;
  var i;
  var fdt = new u8(32);
  for (i = 0; i < 32; ++i)
    fdt[i] = 5;
  var i;
  var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
  var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
  var max = function(a) {
    var m = a[0];
    for (var i = 1; i < a.length; ++i) {
      if (a[i] > m)
        m = a[i];
    }
    return m;
  };
  var bits = function(d, p, m) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
  };
  var bits16 = function(d, p) {
    var o = p / 8 | 0;
    return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
  };
  var shft = function(p) {
    return (p + 7) / 8 | 0;
  };
  var slc = function(v, s, e) {
    if (s == null || s < 0)
      s = 0;
    if (e == null || e > v.length)
      e = v.length;
    var n = new (v.BYTES_PER_ELEMENT == 2 ? u16 : v.BYTES_PER_ELEMENT == 4 ? u32 : u8)(e - s);
    n.set(v.subarray(s, e));
    return n;
  };
  var ec = [
    "unexpected EOF",
    "invalid block type",
    "invalid length/literal",
    "invalid distance",
    "stream finished",
    "no stream handler",
    ,
    "no callback",
    "invalid UTF-8 data",
    "extra field too long",
    "date not in range 1980-2099",
    "filename too long",
    "stream finishing",
    "invalid zip data"
  ];
  var err = function(ind, msg, nt) {
    var e = new Error(msg || ec[ind]);
    e.code = ind;
    if (Error.captureStackTrace)
      Error.captureStackTrace(e, err);
    if (!nt)
      throw e;
    return e;
  };
  var inflt = function(dat, buf, st) {
    var sl = dat.length;
    if (!sl || st && st.f && !st.l)
      return buf || new u8(0);
    var noBuf = !buf || st;
    var noSt = !st || st.i;
    if (!st)
      st = {};
    if (!buf)
      buf = new u8(sl * 3);
    var cbuf = function(l2) {
      var bl = buf.length;
      if (l2 > bl) {
        var nbuf = new u8(Math.max(bl * 2, l2));
        nbuf.set(buf);
        buf = nbuf;
      }
    };
    var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
    var tbts = sl * 8;
    do {
      if (!lm) {
        final = bits(dat, pos, 1);
        var type = bits(dat, pos + 1, 3);
        pos += 3;
        if (!type) {
          var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
          if (t > sl) {
            if (noSt)
              err(0);
            break;
          }
          if (noBuf)
            cbuf(bt + l);
          buf.set(dat.subarray(s, t), bt);
          st.b = bt += l, st.p = pos = t * 8, st.f = final;
          continue;
        } else if (type == 1)
          lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
        else if (type == 2) {
          var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
          var tl = hLit + bits(dat, pos + 5, 31) + 1;
          pos += 14;
          var ldt = new u8(tl);
          var clt = new u8(19);
          for (var i = 0; i < hcLen; ++i) {
            clt[clim[i]] = bits(dat, pos + i * 3, 7);
          }
          pos += hcLen * 3;
          var clb = max(clt), clbmsk = (1 << clb) - 1;
          var clm = hMap(clt, clb, 1);
          for (var i = 0; i < tl; ) {
            var r = clm[bits(dat, pos, clbmsk)];
            pos += r & 15;
            var s = r >>> 4;
            if (s < 16) {
              ldt[i++] = s;
            } else {
              var c = 0, n = 0;
              if (s == 16)
                n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
              else if (s == 17)
                n = 3 + bits(dat, pos, 7), pos += 3;
              else if (s == 18)
                n = 11 + bits(dat, pos, 127), pos += 7;
              while (n--)
                ldt[i++] = c;
            }
          }
          var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
          lbt = max(lt);
          dbt = max(dt);
          lm = hMap(lt, lbt, 1);
          dm = hMap(dt, dbt, 1);
        } else
          err(1);
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
      }
      if (noBuf)
        cbuf(bt + 131072);
      var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
      var lpos = pos;
      for (; ; lpos = pos) {
        var c = lm[bits16(dat, pos) & lms], sym = c >>> 4;
        pos += c & 15;
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (!c)
          err(2);
        if (sym < 256)
          buf[bt++] = sym;
        else if (sym == 256) {
          lpos = pos, lm = null;
          break;
        } else {
          var add = sym - 254;
          if (sym > 264) {
            var i = sym - 257, b = fleb[i];
            add = bits(dat, pos, (1 << b) - 1) + fl[i];
            pos += b;
          }
          var d = dm[bits16(dat, pos) & dms], dsym = d >>> 4;
          if (!d)
            err(3);
          pos += d & 15;
          var dt = fd[dsym];
          if (dsym > 3) {
            var b = fdeb[dsym];
            dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
          }
          if (pos > tbts) {
            if (noSt)
              err(0);
            break;
          }
          if (noBuf)
            cbuf(bt + 131072);
          var end = bt + add;
          for (; bt < end; bt += 4) {
            buf[bt] = buf[bt - dt];
            buf[bt + 1] = buf[bt + 1 - dt];
            buf[bt + 2] = buf[bt + 2 - dt];
            buf[bt + 3] = buf[bt + 3 - dt];
          }
          bt = end;
        }
      }
      st.l = lm, st.p = lpos, st.b = bt, st.f = final;
      if (lm)
        final = 1, st.m = lbt, st.d = dm, st.n = dbt;
    } while (!final);
    return bt == buf.length ? buf : slc(buf, 0, bt);
  };
  var et = /* @__PURE__ */ new u8(0);
  var gzs = function(d) {
    if (d[0] != 31 || d[1] != 139 || d[2] != 8)
      err(6, "invalid gzip data");
    var flg = d[3];
    var st = 10;
    if (flg & 4)
      st += d[10] | (d[11] << 8) + 2;
    for (var zs = (flg >> 3 & 1) + (flg >> 4 & 1); zs > 0; zs -= !d[st++])
      ;
    return st + (flg & 2);
  };
  var gzl = function(d) {
    var l = d.length;
    return (d[l - 4] | d[l - 3] << 8 | d[l - 2] << 16 | d[l - 1] << 24) >>> 0;
  };
  var zlv = function(d) {
    if ((d[0] & 15) != 8 || d[0] >>> 4 > 7 || (d[0] << 8 | d[1]) % 31)
      err(6, "invalid zlib data");
    if (d[1] & 32)
      err(6, "invalid zlib data: preset dictionaries not supported");
  };
  function inflateSync(data, out) {
    return inflt(data, out);
  }
  function gunzipSync(data, out) {
    return inflt(data.subarray(gzs(data), -8), out || new u8(gzl(data)));
  }
  function unzlibSync(data, out) {
    return inflt((zlv(data), data.subarray(2, -4)), out);
  }
  function decompressSync(data, out) {
    return data[0] == 31 && data[1] == 139 && data[2] == 8 ? gunzipSync(data, out) : (data[0] & 15) != 8 || data[0] >> 4 > 7 || (data[0] << 8 | data[1]) % 31 ? inflateSync(data, out) : unzlibSync(data, out);
  }
  var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
  var tds = 0;
  try {
    td.decode(et, { stream: true });
    tds = 1;
  } catch (e) {
  }

  // src/pmt-loader/pmt-loader.ts
  var import_parse_mvt = __toESM(require_parse_mvt());
  var VERSION = true ? "0.0.3" : "latest";
  var DEFAULT_PMT_LOADER_OPTIONS = {
    pmt: {
      raster: false
    },
    mvt: {},
    image: {}
  };
  var PMTWorkerLoader = {
    id: "pmt",
    module: "pmt",
    name: "PMTiles",
    version: VERSION,
    extensions: ["pmtiles"],
    mimeTypes: ["application/x-protobuf"],
    worker: true,
    category: "geometry",
    options: DEFAULT_PMT_LOADER_OPTIONS
  };
  var PMTLoader = __spreadProps(__spreadValues({}, PMTWorkerLoader), {
    parse: (arrayBuffer, options) => __async(void 0, null, function* () {
      return parsePMT(arrayBuffer, options);
    }),
    parseSync: parsePMT,
    binary: true
  });
  function parsePMT(arrayBuffer, options) {
    if (options.pmt.raster) {
      const blob = new Blob([arrayBuffer], { type: "image/png" });
      const url = URL.createObjectURL(blob);
      return createImageBitmap(blob);
    } else {
      let data = new Uint8Array(arrayBuffer);
      if (data[0] === 31 && data[1] === 139) {
        data = decompressSync(data);
      }
      return (0, import_parse_mvt.default)(data, options);
    }
  }

  // node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-utils/get-transfer-list.js
  function getTransferList(object, recursive = true, transfers) {
    const transfersSet = transfers || /* @__PURE__ */ new Set();
    if (!object) {
    } else if (isTransferable(object)) {
      transfersSet.add(object);
    } else if (isTransferable(object.buffer)) {
      transfersSet.add(object.buffer);
    } else if (ArrayBuffer.isView(object)) {
    } else if (recursive && typeof object === "object") {
      for (const key in object) {
        getTransferList(object[key], recursive, transfersSet);
      }
    }
    return transfers === void 0 ? Array.from(transfersSet) : [];
  }
  function isTransferable(object) {
    if (!object) {
      return false;
    }
    if (object instanceof ArrayBuffer) {
      return true;
    }
    if (typeof MessagePort !== "undefined" && object instanceof MessagePort) {
      return true;
    }
    if (typeof ImageBitmap !== "undefined" && object instanceof ImageBitmap) {
      return true;
    }
    if (typeof OffscreenCanvas !== "undefined" && object instanceof OffscreenCanvas) {
      return true;
    }
    return false;
  }

  // node_modules/@loaders.gl/worker-utils/dist/esm/lib/worker-farm/worker-body.js
  function getParentPort() {
    let parentPort;
    try {
      eval("globalThis.parentPort = require('worker_threads').parentPort");
      parentPort = globalThis.parentPort;
    } catch {
    }
    return parentPort;
  }
  var onMessageWrapperMap = /* @__PURE__ */ new Map();
  var WorkerBody = class {
    static inWorkerThread() {
      return typeof self !== "undefined" || Boolean(getParentPort());
    }
    static set onmessage(onMessage) {
      function handleMessage(message) {
        const parentPort3 = getParentPort();
        const {
          type,
          payload
        } = parentPort3 ? message : message.data;
        onMessage(type, payload);
      }
      const parentPort2 = getParentPort();
      if (parentPort2) {
        parentPort2.on("message", handleMessage);
        parentPort2.on("exit", () => console.debug("Node worker closing"));
      } else {
        globalThis.onmessage = handleMessage;
      }
    }
    static addEventListener(onMessage) {
      let onMessageWrapper = onMessageWrapperMap.get(onMessage);
      if (!onMessageWrapper) {
        onMessageWrapper = (message) => {
          if (!isKnownMessage(message)) {
            return;
          }
          const parentPort3 = getParentPort();
          const {
            type,
            payload
          } = parentPort3 ? message : message.data;
          onMessage(type, payload);
        };
      }
      const parentPort2 = getParentPort();
      if (parentPort2) {
        console.error("not implemented");
      } else {
        globalThis.addEventListener("message", onMessageWrapper);
      }
    }
    static removeEventListener(onMessage) {
      const onMessageWrapper = onMessageWrapperMap.get(onMessage);
      onMessageWrapperMap.delete(onMessage);
      const parentPort2 = getParentPort();
      if (parentPort2) {
        console.error("not implemented");
      } else {
        globalThis.removeEventListener("message", onMessageWrapper);
      }
    }
    static postMessage(type, payload) {
      const data = {
        source: "loaders.gl",
        type,
        payload
      };
      const transferList = getTransferList(payload);
      const parentPort2 = getParentPort();
      if (parentPort2) {
        parentPort2.postMessage(data, transferList);
      } else {
        globalThis.postMessage(data, transferList);
      }
    }
  };
  function isKnownMessage(message) {
    const {
      type,
      data
    } = message;
    return type === "message" && data && typeof data.source === "string" && data.source.startsWith("loaders.gl");
  }

  // node_modules/@loaders.gl/loader-utils/dist/esm/lib/worker-loader-utils/create-loader-worker.js
  var requestId = 0;
  function createLoaderWorker(loader) {
    if (!WorkerBody.inWorkerThread()) {
      return;
    }
    WorkerBody.onmessage = async (type, payload) => {
      switch (type) {
        case "process":
          try {
            const {
              input,
              options = {},
              context = {}
            } = payload;
            const result = await parseData({
              loader,
              arrayBuffer: input,
              options,
              context: {
                ...context,
                parse: parseOnMainThread
              }
            });
            WorkerBody.postMessage("done", {
              result
            });
          } catch (error) {
            const message = error instanceof Error ? error.message : "";
            WorkerBody.postMessage("error", {
              error: message
            });
          }
          break;
        default:
      }
    };
  }
  function parseOnMainThread(arrayBuffer, options) {
    return new Promise((resolve, reject) => {
      const id = requestId++;
      const onMessage = (type, payload2) => {
        if (payload2.id !== id) {
          return;
        }
        switch (type) {
          case "done":
            WorkerBody.removeEventListener(onMessage);
            resolve(payload2.result);
            break;
          case "error":
            WorkerBody.removeEventListener(onMessage);
            reject(payload2.error);
            break;
          default:
        }
      };
      WorkerBody.addEventListener(onMessage);
      const payload = {
        id,
        input: arrayBuffer,
        options
      };
      WorkerBody.postMessage("process", payload);
    });
  }
  async function parseData({
    loader,
    arrayBuffer,
    options,
    context
  }) {
    let data;
    let parser;
    if (loader.parseSync || loader.parse) {
      data = arrayBuffer;
      parser = loader.parseSync || loader.parse;
    } else if (loader.parseTextSync) {
      const textDecoder = new TextDecoder();
      data = textDecoder.decode(arrayBuffer);
      parser = loader.parseTextSync;
    } else {
      throw new Error("Could not load data with ".concat(loader.name, " loader"));
    }
    options = {
      ...options,
      modules: loader && loader.options && loader.options.modules || {},
      worker: false
    };
    return await parser(data, {
      ...options
    }, context, loader);
  }

  // src/pmt-loader/workers/pmt-worker.ts
  createLoaderWorker(PMTLoader);
})();
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
