!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="/",r(r.s=2)}([function(e,n){e.exports=require("mongoose")},function(e,n){e.exports=require("express")},function(e,n,r){"use strict";r.r(n);r(3),r(4),r(5),r(6),r(7),r(8),r(9),r(10);var t=r(1),o=r.n(t),i=r(0),u=r.n(i);function a(e,n,r,t,o,i,u){try{var a=e[i](u),s=a.value}catch(e){return void r(e)}a.done?n(s):Promise.resolve(s).then(t,o)}function s(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var i=e.apply(n,r);function u(e){a(i,t,o,u,s,"next",e)}function s(e){a(i,t,o,u,s,"throw",e)}u(void 0)}))}}var c=o()();c.use(o.a.json());var p=new u.a.Schema({name:{type:String,require:!0},description:{type:String,require:!0}}),d=u.a.model("Genre",p),f=u.a.model("Movie",{title:{type:String,require:!0},description:{type:String,require:!0},copies:{type:Number,require:!0},IsAvailable:{type:Boolean,default:!0},genre:{type:p,require:!0}});c.get("/api/genries",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.find();case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.get("/api/genries/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.findById(n.params.id);case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.post("/api/genries",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t,o,i,u,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.body,o=t.name,i=t.description,u=new d({name:o,description:i}),e.next=4,u.save();case 4:a=e.sent,r.send(a);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.put("/api/genries/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={name:n.body.name,description:n.body.description},e.next=3,d.findByIdAndUpdate(n.params.id,t,{new:!0});case 3:o=e.sent,r.send(o);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.delete("/api/genries/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.findByIdAndDelete(n.params.id);case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.get("/api/movies",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.find();case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.get("/api/movies/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.findById(n.params.id);case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.post("/api/movies",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t,o,i,u,a,s,c,p,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.body,o=t.title,i=t.description,u=t.copies,a=t.genreID,s=t.IsAvailable,e.next=3,d.findById(a);case 3:return c=e.sent,p=new f({title:o,description:i,copies:u,IsAvailable:s,genre:{_id:c._id,name:c.name}}),e.next=7,p.save();case 7:l=e.sent,r.send(l);case 9:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.put("/api/movies/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={title:n.body.title,description:n.body.description,copies:n.body.copies,IsAvailable:n.body.IsAvailable},e.next=3,f.findByIdAndUpdate(n.params.id,t,{new:!0});case 3:o=e.sent,r.send(o);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),c.delete("/api/movies/:id",function(){var e=s(regeneratorRuntime.mark((function e(n,r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.findByIdAndDelete(n.params.id);case 2:t=e.sent,r.send(t);case 4:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}()),function(){var e=s(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.connect("mongodb://localhost/movieDB",{useNewUrlParser:!0});case 3:console.log("connected to mongoDB..."),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("could not connect to mongoDB...");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}()(),c.listen(3001,(function(){return console.log("Listening to Port 3001")}))},function(e,n){e.exports=require("core-js/modules/es.symbol")},function(e,n){e.exports=require("core-js/modules/es.symbol.description")},function(e,n){e.exports=require("core-js/modules/es.array.find")},function(e,n){e.exports=require("core-js/modules/es.function.name")},function(e,n){e.exports=require("core-js/modules/es.number.constructor")},function(e,n){e.exports=require("core-js/modules/es.object.to-string")},function(e,n){e.exports=require("core-js/modules/es.promise")},function(e,n){e.exports=require("regenerator-runtime/runtime")}]);