$(document).ready(function() {
    $("#checker").click(function() {
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

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}
);