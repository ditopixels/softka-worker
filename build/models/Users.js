"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var _mongoose=_interopRequireDefault(require("mongoose")),_bcryptjs=_interopRequireDefault(require("bcryptjs"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}require("babel-polyfill");var Schema=_mongoose["default"].Schema,model=_mongoose["default"].model,schema=new Schema({username:{type:String,required:!0},email:{type:String,required:!0},password:{type:String,required:!0},rol:{type:String},salary:{type:String}});schema.methods.encryptPassword=/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(b){var c,d;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_bcryptjs["default"].genSalt(10);case 2:return c=a.sent,a.next=5,_bcryptjs["default"].hash(b,c);case 5:return d=a.sent,a.abrupt("return",d);case 7:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}(),schema.methods.matchPassword=/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(b){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_bcryptjs["default"].compare(b,this.password);case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}();var _default=model("User",schema);exports["default"]=_default;