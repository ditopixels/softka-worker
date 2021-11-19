"use strict";var _passport=_interopRequireDefault(require("passport")),_passportLocal=require("passport-local"),_Users=_interopRequireDefault(require("../models/Users.js"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}_passport["default"].use(new _passportLocal.Strategy({usernameField:"dni"},/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(b,c,d){var e,f;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_Users["default"].findOne({username:b});case 2:if(e=a.sent,e){a.next=7;break}return a.abrupt("return",d(null,!1,{message:"Not User found."}));case 7:return a.next=9,e.matchPassword(c);case 9:if(f=a.sent,!f){a.next=14;break}return a.abrupt("return",d(null,e));case 14:return a.abrupt("return",d(null,!1,{message:"Incorrect Password."}));case 15:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}())),_passport["default"].serializeUser(function(a,b){b(null,a.id)}),_passport["default"].deserializeUser(function(a,b){_Users["default"].findById(a,function(a,c){b(a,c)})});