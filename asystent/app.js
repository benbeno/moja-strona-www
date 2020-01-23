const btn = document.querySelector('.gadaj');
const content = document.querySelector('.content');

//Odpowiedzi
const siema = ['Siema siemanko.', 'hej', 'elo'];

//

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function(){
    console.log('jestem gotowy, możesz mówić do mikrofonu');
};

recognition.onresult = function(event){
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;

    //Pytania
    if(message.includes('siema')){
        const finalText = siema[Math.floor(Math.random() * siema.length)];
        speech.text = finalText;
    }

    //

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
};
