window.SpeechRecognition = window.SpeechSrecognition ||webkitrecongnetion;

const recognition = new SpeechRecongnition();
recongnition.lang ='pt-br'
recignition.start()

recognition.addEventlistener('result , onSpeak')

function onspeak(e){
    console.long(e.results[0][0].transcript)

}