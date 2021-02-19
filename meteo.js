async function meteo(city) {
  const response = await fetch("https://www.prevision-meteo.ch/services/json/" + city);
  let json = await response.json()

  
  const ville = document.querySelector('.resultat .city')
  const condition = document.querySelector('.resultat .condition')
  const icon = document.querySelector('.resultat .meteo .icon')
  const temp = document.querySelector('.resultat .meteo .temp')
  
  
  ville.innerHTML = json.city_info.name
  condition.innerHTML = json.current_condition.condition
  icon.src = json.current_condition.icon_big
  temp.innerHTML = json.current_condition.tmp + '°C' 
}



document.querySelector('#btn').addEventListener('click', () => {
    let ville = document.querySelector('#city').value
    meteo(ville)
})