// Check if the browser supports SpeechRecognition API
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if ('SpeechRecognition' in window) {
    // Create a new instance of SpeechRecognition
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Set the language
    recognition.interimResults = true; // Show interim results
    recognition.maxAlternatives = 1; // Get the most accurate result

    const startBtn = document.getElementById('startBtn');
    const resultText = document.getElementById('resultText');
    const status = document.getElementById('status');

    // Event when the recognition starts
    startBtn.addEventListener('click', () => {
        recognition.start();
        status.textContent = 'Listening... Please speak.';
    });

    // Event for when a result is returned
    recognition.addEventListener('result', (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('');
        resultText.value = transcript;
        status.textContent = 'You can keep speaking...';
    });

    // Event when recognition ends
    recognition.addEventListener('end', () => {
        status.textContent = 'Press the button to start talking again...';
    });

    // Event for handling errors
    recognition.addEventListener('error', (event) => {
        status.textContent = `Error occurred: ${event.error}`;
    });

} else {
    // If the browser does not support the SpeechRecognition API
    alert('Sorry, your browser does not support Speech Recognition.');
}
