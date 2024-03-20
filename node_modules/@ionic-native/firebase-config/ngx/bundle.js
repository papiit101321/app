'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var FirebaseConfig = /** @class */ (function (_super) {
    tslib.__extends(FirebaseConfig, _super);
    function FirebaseConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfig.prototype.fetch = function (expirationDuration) { return core.cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfig.prototype.activate = function () { return core.cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.fetchAndActivate = function () { return core.cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBoolean = function (key) { return core.cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getString = function (key) { return core.cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getNumber = function (key) { return core.cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfig.prototype.getBytes = function (key) { return core.cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfig.pluginName = "FirebaseConfig";
    FirebaseConfig.plugin = "cordova-plugin-firebase-config";
    FirebaseConfig.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfig.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfig.platforms = ["Android", "iOS"];
    FirebaseConfig.decorators = [
        { type: core$1.Injectable }
    ];
    return FirebaseConfig;
}(core.IonicNativePlugin));

exports.FirebaseConfig = FirebaseConfig;
