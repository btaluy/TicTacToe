"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../async-await");
var permissions = require("nativescript-permissions");
var app = require("tns-core-modules/application");
var common_1 = require("../common");
var TNSRecorder = (function () {
    function TNSRecorder() {
    }
    Object.defineProperty(TNSRecorder.prototype, "android", {
        get: function () {
            return this._recorder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSRecorder.prototype, "debug", {
        set: function (value) {
            common_1.TNSRecorderUtil.debug = value;
        },
        enumerable: true,
        configurable: true
    });
    TNSRecorder.CAN_RECORD = function () {
        var pManager = app.android.context.getPackageManager();
        var canRecord = pManager.hasSystemFeature(android.content.pm.PackageManager.FEATURE_MICROPHONE);
        if (canRecord) {
            return true;
        }
        else {
            return false;
        }
    };
    TNSRecorder.prototype.requestRecordPermission = function (explanation) {
        var _this = this;
        if (explanation === void 0) { explanation = ''; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, permissions.requestPermission(android.Manifest.permission.RECORD_AUDIO).catch(function (err) {
                                common_1.TNS_Recorder_Log('Error getting RECORD_AUDIO permission.', err);
                                reject(err);
                            })];
                    case 1:
                        _a.sent();
                        resolve();
                        return [3, 3];
                    case 2:
                        error_1 = _a.sent();
                        common_1.TNS_Recorder_Log('requestRecordPermission error', error_1);
                        reject(error_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    TNSRecorder.prototype.hasRecordPermission = function () {
        var permission = permissions.hasPermission(android.Manifest.permission.RECORD_AUDIO);
        return !0 === permission ? !0 : !1;
    };
    TNSRecorder.prototype.start = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var audioSource, outFormat, encoder, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4, this.requestRecordPermission().catch(function (err) {
                                console.log(err);
                                reject('Permission to record audio is not granted.');
                            })];
                    case 1:
                        _a.sent();
                        if (this._recorder) {
                            this._recorder.reset();
                        }
                        else {
                            common_1.TNS_Recorder_Log('recorder is not initialized, creating new instance of android MediaRecorder.');
                            this._recorder = new android.media.MediaRecorder();
                        }
                        audioSource = options.source ? options.source : 0;
                        common_1.TNS_Recorder_Log('setting audio source', audioSource);
                        this._recorder.setAudioSource(audioSource);
                        outFormat = options.format ? options.format : 0;
                        common_1.TNS_Recorder_Log('setting output format', outFormat);
                        this._recorder.setOutputFormat(outFormat);
                        encoder = options.encoder ? options.encoder : 0;
                        common_1.TNS_Recorder_Log('setting audio encoder', encoder);
                        this._recorder.setAudioEncoder(encoder);
                        if (options.channels) {
                            this._recorder.setAudioChannels(options.channels);
                        }
                        if (options.sampleRate) {
                            this._recorder.setAudioSamplingRate(options.sampleRate);
                        }
                        if (options.bitRate) {
                            this._recorder.setAudioEncodingBitRate(options.bitRate);
                        }
                        this._recorder.setOutputFile(options.filename);
                        this._recorder.setOnErrorListener(new android.media.MediaRecorder.OnErrorListener({
                            onError: function (recorder, error, extra) {
                                options.errorCallback({ recorder: recorder, error: error, extra: extra });
                            }
                        }));
                        this._recorder.setOnInfoListener(new android.media.MediaRecorder.OnInfoListener({
                            onInfo: function (recorder, info, extra) {
                                options.infoCallback({ recorder: recorder, info: info, extra: extra });
                            }
                        }));
                        this._recorder.prepare();
                        this._recorder.start();
                        resolve();
                        return [3, 3];
                    case 2:
                        ex_1 = _a.sent();
                        reject(ex_1);
                        return [3, 3];
                    case 3: return [2];
                }
            });
        }); });
    };
    TNSRecorder.prototype.getMeters = function () {
        if (this._recorder != null)
            return this._recorder.getMaxAmplitude();
        else
            return 0;
    };
    TNSRecorder.prototype.pause = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._recorder) {
                    common_1.TNS_Recorder_Log('pausing recorder...');
                    _this._recorder.pause();
                }
                resolve();
            }
            catch (ex) {
                common_1.TNS_Recorder_Log('pause error', ex);
                reject(ex);
            }
        });
    };
    TNSRecorder.prototype.resume = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._recorder) {
                    common_1.TNS_Recorder_Log('resuming recorder...');
                    _this._recorder.resume();
                }
                resolve();
            }
            catch (ex) {
                common_1.TNS_Recorder_Log('resume error', ex);
                reject(ex);
            }
        });
    };
    TNSRecorder.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._recorder) {
                    common_1.TNS_Recorder_Log('stopping recorder...');
                    _this._recorder.stop();
                }
                resolve();
            }
            catch (ex) {
                common_1.TNS_Recorder_Log('stop error', ex);
                reject(ex);
            }
        });
    };
    TNSRecorder.prototype.dispose = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                common_1.TNS_Recorder_Log('disposing recorder...');
                if (_this._recorder) {
                    _this._recorder.release();
                }
                _this._recorder = undefined;
                resolve();
            }
            catch (ex) {
                common_1.TNS_Recorder_Log('dispose error', ex);
                reject(ex);
            }
        });
    };
    return TNSRecorder;
}());
exports.TNSRecorder = TNSRecorder;
//# sourceMappingURL=recorder.js.map