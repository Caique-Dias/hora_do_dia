let img = document.querySelector('#img_horas')
let txt = document.querySelector('#horas')

let date = new Date
let horas = date.getHours()

let momento 

if (horas > 4 && horas < 12){
    img.src = "imgs/manha-pq.jpg"
    document.body.style.backgroundColor = "#e2cd9f"
    momento = "manhã"
}

else if(horas >= 12 && horas < 18){
    img.src = "imgs/tarde-pq.png"
    document.body.style.backgroundColor = "#5299CD"
    momento = "tarde"
}

else if(horas >= 18){
    momento = "noite"
    img.src = "imgs/noite-pq.png"
    document.body.style.backgroundColor = "#515154"

}

else{
    momento = "madrugada"
    img.src = "imgs/noite-pq.png"
    document.body.style.backgroundColor = "#515154"
}


txt.innerHTML = `Agora são <strong>${horas}</strong> da <strong>${momento}</strong>.`

