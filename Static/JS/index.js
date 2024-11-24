
let now
let now1
let milliSeconds = 0
let milliseconds2 = 0
let score = 0

function delayed() {
    elemento.classList.remove("off")
    elemento2.classList.remove("off")
    elemento3.classList.remove("off")

    elemento.classList.add("red")
    elemento2.classList.add("red")
    elemento3.classList.add("red")

    setTimeout(firstGreen, 1500) // il primo semaforo diventa verde, dopo 1,5 secondi
}

function firstGreen() {
    elemento.classList.remove("red")
    elemento.classList.add("green")

    setTimeout(secondGreen, 1000) // il secondo semaforo diventa verde, dopo 1 secondo
}

function secondGreen() {
    elemento2.classList.remove("red")
    elemento2.classList.add("green")

    setTimeout(lastGreen, 2000) // l'ultimo semaforo diventa verde e parte il gioco, dopo 2 secondi
}

function lastGreen() {
    elemento3.classList.remove("red")
    elemento3.classList.add("green")

    now = new Date()

    button.classList.remove("disabled")
    button.disabled = false
}

function attivaGioco() {
    elemento = document.querySelector(".semaforo-1")
    elemento2 = document.querySelector(".semaforo-2")
    elemento3 = document.querySelector(".semaforo-3")
    button = document.querySelector(".gameButton")

    elemento.classList.add("off")
    elemento2.classList.add("off")
    elemento3.classList.add("off")
    button.classList.add("disabled")
    button.disabled = true

    setTimeout(delayed, 1000) // 1000 millisecondi = 1 secondo

}

function punteggioGioco() {
    now1 = new Date()

    milliSeconds = now.getMilliseconds()
    milliSeconds2 = now1.getMilliseconds()
    score = milliSeconds2 - milliSeconds
    document.querySelector(".risultati").innerHTML = "I tuoi riflessi sono di: " + score + "ms"
}