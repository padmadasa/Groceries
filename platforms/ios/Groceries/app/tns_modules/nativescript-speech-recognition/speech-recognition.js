"use strict";
var SpeechRecognition = (function () {
    function SpeechRecognition() {
        this.recognitionRequest = null;
        this.audioEngine = null;
        this.speechRecognizer = null;
        this.recognitionTask = null;
        this.inputNode = null;
        this.audioSession = null;
        this.audioEngine = AVAudioEngine.new();
    }
    SpeechRecognition.prototype.available = function () {
        return new Promise(function (resolve, reject) {
            resolve(SFSpeechRecognizer.new().available);
        });
    };
    ;
    SpeechRecognition.prototype.startListening = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (options.locale) {
                var locale = NSLocale.alloc().initWithLocaleIdentifier(options.locale);
                _this.speechRecognizer = SFSpeechRecognizer.alloc().initWithLocale(locale);
            }
            else {
                _this.speechRecognizer = SFSpeechRecognizer.new();
            }
            if (_this.recognitionTask !== null) {
                _this.recognitionTask.cancel();
                _this.recognitionTask = null;
            }
            SFSpeechRecognizer.requestAuthorization(function (status) {
                if (status !== 3) {
                    reject("Not authorized");
                    return;
                }
                _this.audioSession = AVAudioSession.sharedInstance();
                _this.audioSession.setCategoryError(AVAudioSessionCategoryRecord);
                _this.audioSession.setModeError(AVAudioSessionModeMeasurement);
                _this.audioSession.setActiveWithOptionsError(true, 1);
                _this.recognitionRequest = SFSpeechAudioBufferRecognitionRequest.new();
                if (!_this.recognitionRequest) {
                    reject("Unable to create an SFSpeechAudioBufferRecognitionRequest object");
                    return;
                }
                _this.inputNode = _this.audioEngine.inputNode;
                if (!_this.inputNode) {
                    reject("Audio engine has no input node");
                    return;
                }
                _this.recognitionRequest.shouldReportPartialResults = options.returnPartialResults;
                _this.recognitionTask = _this.speechRecognizer.recognitionTaskWithRequestResultHandler(_this.recognitionRequest, function (result, error) {
                    if (result !== null) {
                        options.onResult({
                            finished: result.final,
                            text: result.bestTranscription.formattedString
                        });
                    }
                    if (error !== null || (result !== null && result.final)) {
                        _this.audioEngine.stop();
                        _this.inputNode.removeTapOnBus(0);
                        _this.recognitionRequest = null;
                        _this.recognitionTask = null;
                    }
                    if (error !== null) {
                        console.log("error in handler: " + error.localizedDescription);
                    }
                });
                var that = _this;
                var recordingFormat = _this.inputNode.outputFormatForBus(0);
                _this.inputNode.installTapOnBusBufferSizeFormatBlock(0, 1024, recordingFormat, function (buffer, when) {
                    that.recognitionRequest.appendAudioPCMBuffer(buffer);
                });
                _this.audioEngine.prepare();
                resolve(_this.audioEngine.startAndReturnError());
            });
        });
    };
    SpeechRecognition.prototype.stopListening = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.audioEngine.running) {
                _this.audioEngine.stop();
                _this.recognitionRequest.endAudio();
                _this.speechRecognizer = null;
                _this.recognitionTask = null;
                resolve();
            }
            else {
                reject("Not running");
            }
        });
    };
    return SpeechRecognition;
}());
exports.SpeechRecognition = SpeechRecognition;
//# sourceMappingURL=speech-recognition.js.map