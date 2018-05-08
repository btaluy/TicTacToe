"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
var observable_1 = require("tns-core-modules/data/observable");
var utils_1 = require("tns-core-modules/utils/utils");
var common_1 = require("../common");
var options_1 = require("../options");
var TNSPlayer = (function () {
    function TNSPlayer() {
        var _this = this;
        this._mAudioFocusGranted = false;
        this._mOnAudioFocusChangeListener = new android.media.AudioManager.OnAudioFocusChangeListener({
            onAudioFocusChange: function (focusChange) {
                switch (focusChange) {
                    case android.media.AudioManager.AUDIOFOCUS_GAIN:
                        common_1.TNS_Player_Log('AUDIOFOCUS_GAIN');
                        common_1.TNS_Player_Log('this._lastPlayerVolume', _this._lastPlayerVolume);
                        if (_this._lastPlayerVolume && _this._lastPlayerVolume >= 10) {
                            _this.volume = 1.0;
                        }
                        else if (_this._lastPlayerVolume) {
                            _this.volume = parseFloat('0.' + _this._lastPlayerVolume.toString());
                        }
                        _this.resume();
                        break;
                    case android.media.AudioManager.AUDIOFOCUS_GAIN_TRANSIENT:
                        common_1.TNS_Player_Log('AUDIOFOCUS_GAIN_TRANSIENT');
                        break;
                    case android.media.AudioManager.AUDIOFOCUS_LOSS:
                        common_1.TNS_Player_Log('AUDIOFOCUS_LOSS');
                        _this.pause();
                        break;
                    case android.media.AudioManager.AUDIOFOCUS_LOSS_TRANSIENT:
                        common_1.TNS_Player_Log('AUDIOFOCUS_LOSS_TRANSIENT');
                        _this.pause();
                        break;
                    case android.media.AudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK:
                        common_1.TNS_Player_Log('AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK');
                        _this._lastPlayerVolume = _this.volume;
                        common_1.TNS_Player_Log('this._lastPlayerVolume', _this._lastPlayerVolume);
                        _this.volume = 0.2;
                        break;
                }
            }
        });
        this._mAudioFocusGranted = this._requestAudioFocus();
        common_1.TNS_Player_Log('_mAudioFocusGranted', this._mAudioFocusGranted);
    }
    Object.defineProperty(TNSPlayer.prototype, "events", {
        get: function () {
            if (!this._events) {
                this._events = new observable_1.Observable();
            }
            return this._events;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSPlayer.prototype, "android", {
        get: function () {
            return this._player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSPlayer.prototype, "debug", {
        set: function (value) {
            common_1.TNSPlayerUtil.debug = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSPlayer.prototype, "volume", {
        get: function () {
            var ctx = this._getAndroidContext();
            var mgr = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
            return mgr.getStreamVolume(android.media.AudioManager.STREAM_MUSIC);
        },
        set: function (value) {
            if (this._player && value) {
                this._player.setVolume(value, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSPlayer.prototype, "duration", {
        get: function () {
            if (this._player) {
                return this._player.getDuration();
            }
            else {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TNSPlayer.prototype, "currentTime", {
        get: function () {
            return this._player ? this._player.getCurrentPosition() : 0;
        },
        enumerable: true,
        configurable: true
    });
    TNSPlayer.prototype.initFromFile = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            options.autoPlay = false;
            _this.playFromFile(options).then(resolve, reject);
        });
    };
    TNSPlayer.prototype.playFromFile = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (options.autoPlay !== false) {
                    options.autoPlay = true;
                }
                var audioPath = common_1.resolveAudioFilePath(options.audioFile);
                common_1.TNS_Player_Log('audioPath', audioPath);
                if (!_this._player) {
                    common_1.TNS_Player_Log('android mediaPlayer is not initialized, creating new instance');
                    _this._player = new android.media.MediaPlayer();
                }
                _this._mAudioFocusGranted = _this._requestAudioFocus();
                common_1.TNS_Player_Log('_mAudioFocusGranted', _this._mAudioFocusGranted);
                _this._player.setAudioStreamType(android.media.AudioManager.STREAM_MUSIC);
                common_1.TNS_Player_Log('resetting mediaPlayer...');
                _this._player.reset();
                common_1.TNS_Player_Log('setting datasource', audioPath);
                _this._player.setDataSource(audioPath);
                if (utils_1.isFileOrResourcePath(audioPath)) {
                    common_1.TNS_Player_Log('preparing mediaPlayer...');
                    _this._player.prepare();
                }
                else {
                    common_1.TNS_Player_Log('preparing mediaPlayer async...');
                    _this._player.prepareAsync();
                }
                if (options.completeCallback) {
                    _this._player.setOnCompletionListener(new android.media.MediaPlayer.OnCompletionListener({
                        onCompletion: function (mp) {
                            if (options.loop === true) {
                                mp.seekTo(5);
                                mp.start();
                            }
                            options.completeCallback({ player: mp });
                        }
                    }));
                }
                if (options.errorCallback) {
                    _this._player.setOnErrorListener(new android.media.MediaPlayer.OnErrorListener({
                        onError: function (player, error, extra) {
                            _this._player.reset();
                            common_1.TNS_Player_Log('errorCallback', error);
                            options.errorCallback({ player: player, error: error, extra: extra });
                            return true;
                        }
                    }));
                }
                if (options.infoCallback) {
                    _this._player.setOnInfoListener(new android.media.MediaPlayer.OnInfoListener({
                        onInfo: function (player, info, extra) {
                            common_1.TNS_Player_Log('infoCallback', info);
                            options.infoCallback({ player: player, info: info, extra: extra });
                            return true;
                        }
                    }));
                }
                _this._player.setOnPreparedListener(new android.media.MediaPlayer.OnPreparedListener({
                    onPrepared: function (mp) {
                        if (options.autoPlay) {
                            common_1.TNS_Player_Log('options.autoPlay', options.autoPlay);
                            _this.play();
                        }
                        resolve();
                    }
                }));
            }
            catch (ex) {
                common_1.TNS_Player_Log('playFromFile error', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype.initFromUrl = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            options.autoPlay = false;
            _this.playFromUrl(options).then(resolve, reject);
        });
    };
    TNSPlayer.prototype.playFromUrl = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            resolve(_this.playFromFile(options));
        });
    };
    TNSPlayer.prototype.pause = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._player && _this._player.isPlaying()) {
                    common_1.TNS_Player_Log('pausing player');
                    _this._player.pause();
                    _this._sendEvent(options_1.AudioPlayerEvents.paused);
                }
                resolve(true);
            }
            catch (ex) {
                common_1.TNS_Player_Log('pause error', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype.play = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._player && !_this._player.isPlaying()) {
                    _this._sendEvent(options_1.AudioPlayerEvents.started);
                    app.android.foregroundActivity.setVolumeControlStream(android.media.AudioManager.STREAM_MUSIC);
                    app.android.registerBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY, function (context, intent) {
                        common_1.TNS_Player_Log('ACTION_AUDIO_BECOMING_NOISY onReceiveCallback');
                        common_1.TNS_Player_Log('intent', intent);
                        _this.pause();
                    });
                    _this._player.start();
                }
                resolve(true);
            }
            catch (ex) {
                common_1.TNS_Player_Log('Error trying to play audio.', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype.resume = function () {
        if (this._player) {
            common_1.TNS_Player_Log('resume');
            this._player.start();
            this._sendEvent(options_1.AudioPlayerEvents.started);
        }
    };
    TNSPlayer.prototype.seekTo = function (time) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._player) {
                    common_1.TNS_Player_Log('seekTo', time);
                    _this._player.seekTo(time);
                    _this._sendEvent(options_1.AudioPlayerEvents.seek);
                }
                resolve(true);
            }
            catch (ex) {
                common_1.TNS_Player_Log('seekTo error', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype.changePlayerSpeed = function (speed) {
        if (android.os.Build.VERSION.SDK_INT >= 23 && this.play) {
            common_1.TNS_Player_Log('setting the mediaPlayer playback speed', speed);
            if (this._player.isPlaying()) {
                this._player.setPlaybackParams(this._player.getPlaybackParams().setSpeed(speed));
            }
            else {
                this._player.setPlaybackParams(this._player.getPlaybackParams().setSpeed(speed));
                this._player.pause();
            }
        }
        else {
            common_1.TNS_Player_Log('Android device API is not 23+. Cannot set the playbackRate on lower Android APIs.');
        }
    };
    TNSPlayer.prototype.dispose = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                if (_this._player) {
                    common_1.TNS_Player_Log('disposing of mediaPlayer instance', _this._player);
                    _this._player.stop();
                    _this._player.reset();
                    common_1.TNS_Player_Log('unregisterBroadcastReceiver ACTION_AUDIO_BECOMING_NOISY...');
                    app.android.unregisterBroadcastReceiver(android.media.AudioManager.ACTION_AUDIO_BECOMING_NOISY);
                    common_1.TNS_Player_Log('abandoning audio focus...');
                    _this._abandonAudioFocus();
                }
                resolve();
            }
            catch (ex) {
                common_1.TNS_Player_Log('dispose error', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype.isAudioPlaying = function () {
        if (this._player) {
            return this._player.isPlaying();
        }
        else {
            return false;
        }
    };
    TNSPlayer.prototype.getAudioTrackDuration = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var duration = _this._player ? _this._player.getDuration() : 0;
                common_1.TNS_Player_Log('audio track duration', duration);
                resolve(duration.toString());
            }
            catch (ex) {
                common_1.TNS_Player_Log('getAudioTrackDuration error', ex);
                reject(ex);
            }
        });
    };
    TNSPlayer.prototype._sendEvent = function (eventName, data) {
        if (this.events) {
            this.events.notify({
                eventName: eventName,
                object: this,
                data: data
            });
        }
    };
    TNSPlayer.prototype._requestAudioFocus = function () {
        var result = false;
        if (!this._mAudioFocusGranted) {
            var ctx = this._getAndroidContext();
            var am = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
            var focusResult = am.requestAudioFocus(this._mOnAudioFocusChangeListener, android.media.AudioManager.STREAM_MUSIC, android.media.AudioManager.AUDIOFOCUS_GAIN);
            if (focusResult === android.media.AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
                result = true;
            }
            else {
                common_1.TNS_Player_Log('Failed to get audio focus.');
                result = false;
            }
        }
        return result;
    };
    TNSPlayer.prototype._abandonAudioFocus = function () {
        var ctx = this._getAndroidContext();
        var am = ctx.getSystemService(android.content.Context.AUDIO_SERVICE);
        var result = am.abandonAudioFocus(this._mOnAudioFocusChangeListener);
        if (result === android.media.AudioManager.AUDIOFOCUS_REQUEST_GRANTED) {
            this._mAudioFocusGranted = false;
        }
        else {
            common_1.TNS_Player_Log('Failed to abandon audio focus.');
        }
        this._mOnAudioFocusChangeListener = null;
    };
    TNSPlayer.prototype._getAndroidContext = function () {
        var _this = this;
        var ctx = app.android.context;
        if (ctx === null) {
            setTimeout(function () {
                _this._getAndroidContext();
            }, 200);
            return;
        }
        else {
            return ctx;
        }
    };
    return TNSPlayer;
}());
exports.TNSPlayer = TNSPlayer;
//# sourceMappingURL=player.js.map