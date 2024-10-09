// Defina a data final da contagem regressiva
const countdownDate = new Date("2025-01-03T00:00:00").getTime();

// Atualize a contagem regressiva a cada segundo
const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Cálculos de dias, horas, minutos e segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibir a contagem regressiva
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Se a contagem regressiva terminar
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "A contagem terminou!";
    }
}, 1000);
