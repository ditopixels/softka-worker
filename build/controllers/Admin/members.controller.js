"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderMember=void 0;var _Users=_interopRequireDefault(require("../../models/Users.js")),_nav=require("../../helpers/nav.js"),_config=require("../../config.js");function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var renderMember=/*#__PURE__*/function(){var a=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(b,c){var d,e;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_Users["default"].find({},"username email rol");case 2:d=a.sent,e={title:"GikEdu - Miembros",contentHeader:{partial:function partial(){return"profile"}},contentRol:{partial:function partial(){return"rol/admin/miembros"},args:{class:"pad"}},data:{username:b.user.username},members:[]},d.forEach(function(a){e.members.push({_id:a._id,username:a.username,rol:a.rol})}),e.navigator=(0,_nav.admin)(b.path),e.host=_config.host,c.render("user/dashboard",e);case 8:case"end":return a.stop();}},a)}));return function(){return a.apply(this,arguments)}}();exports.renderMember=renderMember;