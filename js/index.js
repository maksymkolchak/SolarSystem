$(document).ready(function(){
    $("#checker").click(function(){
        $("#panel").slideToggle("slow");
    });
});

document.querySelector('#checker').addEventListener('click', loadJsonAjax);

function loadJsonAjax() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
           const marsData = JSON.parse(xhr.responseText);
           document.querySelector('.mars-checker-status').innerText = marsData.statuss;
           document.querySelector('.mars-checker-start').innerText = marsData.start;
        }
    }
    xhr.open('GET', 'js/trip_data_mars.json', true);
    xhr.send();
}

// function loadJsonAjax() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           const venusData = JSON.parse(xhr.responseText);
//           document.querySelector('.venus-checker-status').innerText = venusData.statuss;
//           document.querySelector('.venus-checker-start').innerText = venusData.start;
//         }
//     }
//     xhr.open('GET', 'js/trip_data_venus.json', true);
//     xhr.send();
// }

// function loadJsonAjax() {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           const mercuryData = JSON.parse(xhr.responseText);
//           document.querySelector('.mercury-checker-status').innerText = mercuryData.statuss;
//           document.querySelector('.mercury-checker-start').innerText = mercuryData.start;
//         }
//     }
//     xhr.open('GET', 'js/trip_data_mercury.json', true);
//     xhr.send();
// }