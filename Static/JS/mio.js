let now = 0
        let now2 = 0
        let elemento = ""

        function attivaGioco() {
            elemento = document.querySelector(".container3")

            function delayed () {
                now = new Date()
                elemento.classList.remove("red")
                elemento.classList.add("green")
            }
            setTimeout(delayed, 2500)
            
        }

        function punteggioGioco() {
            now2 = new Date()
            elemento.classList.remove("green")
            elemento.classList.add("red")

            let nowTime = now.getSeconds()
            let now2Time = now2.getSeconds()

            let secondi = now2Time - nowTime
            document.querySelector(".risultati").innerHTML = "I tuoi riflessi sono di: " + secondi + "secondi"
        }