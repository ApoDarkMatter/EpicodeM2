/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- da ogni inserzione trovata, elimina i campi "description", "requirements", "benefits" e "company_profile" per semplificare il risultato

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]

//PARTE 1 - FUNZIONE DI RICERCA
function search(tit,loc) {
  let count = 0
  let results = new Object()

  //CICLO PER LA RICERCA
  for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].title.toLowerCase().includes(tit.toLowerCase()) && jobs[i].location.toLowerCase().includes(loc.toLowerCase())) {
          results[count] = {title: jobs[i].title,location: jobs[i].location}
          count++
      }
  }

  //RETURN DI UN OGGETTO CHE CONTIENE COME PRIMO ELEMENTO L'OGGETTO CON I RISULTATI CON DUE OPZIONI (TITLE E LOCATION) E COME SECONDO ELEMENTO LA VARIABILE COUNT CHE E' LA SOMMA DEI RISULTATI OTTENUTI
  return {results, count}
}

//LOG PER CONTROLLO ESERCIZIO PARTE 1
console.log(search("dev","US"))

//PARTE 2 - STAMPA RISULTATI SU HTML
let totalJobs = jobs.length

//STAMPA DI TUTTI I LAVORI DISPONIBILI CONTROLLANDO IL LENGTH DELL?OGGETTO
document.getElementById('totalJobs').innerHTML = `Total available jobs: ${totalJobs}`

//FUNZIONE PER PRENDERE I VALORI DEI DUE INPUT E PASSARLI NELLA FUNZIONE PER LA STAMPA SU HTML
function searchButton() {
  let tit = document.getElementById('title').value
  let loc = document.getElementById('location').value
  
  printResult(search(tit,loc).results,search(tit,loc).count)
}

//FUNZIONE PER LA STAMPA DEI RISULTATI SU HTML
function printResult(resObj,count) {
  if (count != 0) {
    //SE LA VARIABILE COUNT DIVERSA DA 0 STAMPALA
    document.getElementById('resultData').innerHTML  = `Total search results: ${count}`

    //CREAZIONE E STAMPA DELLA TABELLA CON TUTTI I RISULTATI OTTENUTI
    let table = "<table><tr><th>Title</th><th>Location</th></tr>"
    for (let x = 0; x < count; x++) {
      table = `${table}<tr><td>${resObj[x].title}</td><td>${resObj[x].location}</td></tr>`
    }
    table = `${table}</table>`

    document.getElementById('resultTable').innerHTML = table
  } else {
    //SE VARIABILE COUNT E' 0 ALLORA STAMPA CHE NON CI SONO LAVORI DISPONIBILI E CANCELLA EVENTUALE TABELLA DI RISULTATI PRECEDENTE
    document.getElementById('resultData').innerHTML  = `No jobs available`
    document.getElementById('resultTable').innerHTML = ``
  }
}

//CONTROLLA SE VIENE PREMUTO IL TASTO INVIO E NEL CASO RICHIAMA LA FUNZIONE searchButton()
document.addEventListener("keydown", function(event) {
  if (event.code === "Enter") {
    searchButton()
  }
});
  
//EXTRA - INFO BOX DATA
//QUESTA FUNZIONE CONTROLLA TUTTE LE LOCATION DELL'OGGETTO JOBS E RESTITUISCE I PAESI UNIVOCI PER POI STAMPARLI SU UNA BOX CHE SI VISUALIZZA SOLO NEL CASO SI FACCIA HOVER CON IL MOUSE SU UNA STRINGA
function availableCountry () {
  let totalStr = ""
  let infoBox = ""

  for (let j=0; j<jobs.length; j++) {
    totalStr = `${totalStr}${jobs[j].location},`
  }

  let splitArray = totalStr.split(",").sort()
  let onlyAvailableCountry = []

  for (let k=0; k<splitArray.length; k++) {
    if (onlyAvailableCountry.includes(splitArray[k]) === false) {
      onlyAvailableCountry.push(splitArray[k])
    }
  }
  
  for (country of onlyAvailableCountry) {
    if (country != "") {
      infoBox = `${infoBox} ${country} -`
    }
  }
  infoBox = infoBox.slice(0,-1)
  
  document.getElementById('info').innerHTML = infoBox
}