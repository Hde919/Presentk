// Setze das Datum dynamisch
const dateElement = document.getElementById('date');
const eventDate = new Date('2024-11-05');
dateElement.innerHTML = eventDate.toLocaleDateString('de-DE', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
});

// Funktion zum Anzeigen der Überraschung und Starten der Musik
function showSurprise() {
    const surpriseElement = document.getElementById('surprise');
    
    // Überprüfen, ob die Überraschung versteckt ist
    if (surpriseElement.classList.contains('hidden')) {
        surpriseElement.classList.remove('hidden'); // Zeige die Überraschung an
    } else {
        surpriseElement.classList.add('hidden'); // Verstecke die Überraschung wieder
    }

    // Musik abspielen oder anhalten
    const music = document.getElementById('background-music');
    if (surpriseElement.classList.contains('hidden')) {
        music.pause();
    } else {
        music.play();
    }
}
