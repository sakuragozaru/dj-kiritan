import { SpeechRecognitter } from "./SpeechRecognitter.js";
let id = 1;
let finalTranscripts = [];
let interimTranscript = "";

const recognitter = new SpeechRecognitter();
recognitter.start();
recognitter.on("final", (transcript)=>{
    console.log("final", transcript)
    interimTranscript = "";
    finalTranscripts = [...finalTranscripts, {id:id++, value:transcript}]
    if(document.querySelector("#is_auto_post").checked){
        document.querySelector("#comment").value = transcript;
        onSubmit();
    }
})
recognitter.on("interim", (transcript)=>{
    console.log("interim", transcript);
    interimTranscript = transcript;
    if(document.querySelector("#is_recognition").checked){
        document.querySelector("#comment").value = interimTranscript;
    }
})

window.onload = ()=>{
    file_list.forEach((filepath, i)=>{
        const elm = document.createElement("div");
        const regexp = /(.+)\/(.+)\.wav/
        const filecategory = filepath.match(regexp)[1];
        const filename = filepath.match(regexp)[2];
        elm.innerText = filename;
        const sound = new Howl({
            src: [`${base_dir}/${filepath}`],
            html5: true
        });
        elm.className = filecategory;
        elm.addEventListener("click", e => sound.play() );
        document.body.insertBefore(elm, null)
    })
}
