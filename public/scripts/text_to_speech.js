let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // provide all the voices available in the device
    speech.voice = voices[0]; // by default select 1st voice



    //Display each voices on ther drop down
    voices.forEach((voice,i) =>(voiceSelect.options[i] = new Option(voice.name,i)));
};


// change event on the drop down
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});




document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech); /* window.speechSynthesis is the Speech Synthesis API that provides speech services
                                            (i.e., converting text to speech).*/
});

                                                                                     











