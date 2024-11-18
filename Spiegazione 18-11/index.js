function displayDateTime() {
    const now = new Date(); // Data e ora corrente
  
    // Estrai le parti di data utili
    const day = now.getDate(); // Giorno del mese
    const month = now.getMonth() + 1; // Mese (inizia da 0, quindi aggiungere 1)
    const year = now.getFullYear(); // Anno
    const hours = now.getHours(); // Ore
    const minutes = now.getMinutes(); // Minuti
    const seconds = now.getSeconds(); // Secondi
  
    // Formatta la data in maniera che sia "user friendly"
    const formattedDateTime = `Date: ${day}/${month}/${year}, Time: ${hours}:${minutes}:${seconds}`;
  
    // Mostra i risultati
    document.querySelector('#date-time').textContent = formattedDateTime;
}
  
  // Event listener per il pulsante
  document.querySelector('#update-button').addEventListener('click', displayDateTime);
  
  // Invoca la funzione per mostrare subito i dati sulla data e ora odierna
  displayDateTime();