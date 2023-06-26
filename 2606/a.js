function cercareCEP() {
    let cep = document.getElementById("input").value
    let indirizzo = document.getElementById("bottone").value
    let cepVerificato = cep.substr(0,5) + "-" + cep.sbustr(5) + ".json"
    let url = "https://cdn.apicep.com/file/apicep/" + cepVerificato
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            indirizzo.innerHTML = data.città + "<br>" +
                                  data.stato + "<br>" +
                                  data.comuna + "<br>" +
                                  data.address + "<br>Brasil"})

}