const formElement = document.querySelector(".form-block");

$(".form-block").on("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(formElement);
    const film = formData.get("film");
    const type = formData.get("type");

    console.log(type);
    getAPI(film, type, render);
});

function getAPI(name, genre, callback) {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=d357825&t=${name}&type=${genre}`)
        .then(response => response.json())
        .then(filmInfo => callback(filmInfo))
        .catch((error) => {
            console.log(error);
        });
}


function render(filmInfo) {
    $(".film-info").html(`
        <p>Название: ${filmInfo.Title}</p>
        <p>Год: ${filmInfo.Year}</p>
        <p>Длительность: ${filmInfo.Runtime}</p>
    `)
}