// Hämta hamburgermenyn och länkarna
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// För att visa och dölja länkarna vid klick på hamburgermenyn
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('nav-active'); // Toggle för att visa/dölja länkarna

    if (navLinks.classList.contains('nav-active')) {
        this.innerHTML = '&times;'; // Ändrar hamburgermenyn till "X"
    } else {
        this.innerHTML = '&#9776;'; // Återställer hamburgermenyn till originalsymbolen
    }
});


// Förstora profilbilden till helskärm vid klick
const profileImg = document.getElementById('profileImg');
profileImg.addEventListener('click', function() {
    // Växla mellan vanlig och fullscreen-läge
    this.classList.toggle('fullscreen'); // Växla mellan vanlig och fullscreen-läge


    // // Ta bort positionering och justera bara transform när den aktiveras
    // if (this.classList.contains('fullscreen')) {
    //     this.style.position = 'fixed';
    //     this.style.top = '50%'; 
    //     this.style.left = '50%'; 
    //     this.style.transform = 'translate(-50%, -50%)'; // Centrera bilden direkt
    // } else {
    //     // Om du vill återgå till dess ursprungliga stil, ta bort inline-stilarna
       
    //     // Återställ till standard
    //     this.style.top = '0';
    //     this.style.left = '';
    //     this.style.transform = '';
    // }
    // this.classList.toggle('active'); // Togglar aktiv klass för hamburgermenyn
});

// Färgändringsanimering för texten "Hello World!" bokstav för bokstav
const textContainer = document.getElementById('animatedText');
const text = textContainer.textContent;

// Delar upp texten i enskilda bokstäver och wrappar varje bokstav i en <span> med klassen 'letter'
textContainer.innerHTML = text
  .split('')
  .map(letter => `<span class="letter">${letter}</span>`)
  .join('');

// Hämtar alla bokstäver med klassen 'letter'
const letters = document.querySelectorAll('.letter');
let currentIndex = 0;

// Animeringsfunktion för att byta färg på bokstäver en efter en
function animateText() {
    // Tar bort den aktiva klassen från alla bokstäver
    letters.forEach(letter => letter.classList.remove('active'));

    // Lägger till den aktiva klassen på den aktuella bokstaven
    if (letters[currentIndex]) {
        letters[currentIndex].classList.add('active'); // Tänd nuvarande bokstav
    }
    if (letters[currentIndex + 1]) {
        letters[currentIndex + 1].classList.add('active'); // Tänd nästa bokstav
    }

    // Släck tidigare bokstav när tredje bokstaven lyser upp
    if (letters[currentIndex - 1]) {
        letters[currentIndex - 1].classList.remove('active');
    }

    // Flytta till nästa bokstav, och börja om från början vid slutet av texten
    currentIndex++;
    if (currentIndex >= letters.length) {
        // Stoppa intervallet när vi har nått slutet av texten
        clearInterval(animationInterval);

         // Släck och återställ den sista bokstaven
         letters[letters.length - 1].classList.remove('active');

        // Starta om animeringen efter 5 sekunder (5000 ms)
        setTimeout(startAnimationCycle, 5000);

        // Återställ indexet
        currentIndex = 0;
    }
}

// Funktion för att starta animeringscykeln
function startAnimationCycle() {
    // Starta animeringen med ett intervall på 100 ms
    animationInterval = setInterval(animateText, 100);
}

// Starta första animeringscykeln
startAnimationCycle();