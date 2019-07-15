'use strict';

//url do api oraz zmienna listy krajów
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

//buttonowi o id search przypisujemy eventlistener wywołujący funkcję szkukania krajów
document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;//pobieramy wartość wpisana przez użytkownika
    if(!countryName.length) countryName = 'Poland';//jesli nie wpisano wartości z automatu szukamy poland
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

//funkcja generująca listę wyników
function showCountriesList(resp) {
    countriesList.innerHTML = '';//resetujemy listę
    resp.forEach(function(item) {//dla każdego elemntu
        var liEl = document.createElement('li');//tworzymy <li>
        liEl.innerText = item.name;//dodajemy tekst do <li>
        countriesList.appendChild(liEl);//dodajemy element do dokumentu
    });
}

