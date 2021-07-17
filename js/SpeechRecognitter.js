import { EventEmitter } from "./EventEmitter.js";
export class SpeechRecognitter extends EventEmitter {
    constructor() {
        super();
        const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = 'ja-JP';
        recognition.interimResults = true;
        recognition.continuous = true;

        let interimResult = ""
        recognition.addEventListener('result', (event) => {
            console.log("hoge")
            let i = event.resultIndex;
            let transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
                this.emit("final", transcript);
                interimResult = "";
            } else {
                this.emit("interim", transcript);
                interimResult = transcript;
            }
        });
        let isStarted = false;
        recognition.addEventListener('start', (event) => {
            console.log("start")
            isStarted = true
        });
        recognition.addEventListener('end', (event) => {
            if (isStarted) {
                console.log("end")
                isStarted = false;
                if(interimResult){
                    this.emit("final", interimResult);
                    interimResult = "";
                }
                recognition.start()
            }
        });
        this._recognition = recognition;
    }
    start() {
        this._recognition.start();
    }
    stop() {
        this._recognition.stop();
    }
}