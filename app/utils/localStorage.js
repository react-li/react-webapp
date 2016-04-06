const CityChecked = 'CityChecked'

export function getCityChecked() {
  return localStorage[CityChecked]
}

export function setCityChecked(city) {
  return localStorage.setItem(CityChecked,city)
}