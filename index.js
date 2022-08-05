'use strict';

document.querySelector("body > section > div > form").addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("THIS:", this);

    const body = {
        age: event.target.age.value,
        name: event.target.name.value,
        habitat: event.target.habitat.value,
        gender: event.target.gender.value,
    };

    console.log("BODY:", body);

    axios
    .post("http://localhost:8080/duck/create", body)
        .then(response => {
            console.log(response);
            event.target.reset();
            event.target.name.focus();
        })
        .catch(err => console.error(err));
        

    });


    function getAllDucks() {

        axios
        .get("http://localhost:8080/duck/readAll")
        .then(response => {
            console.log("ducks: ", response.data);
        })
        .catch(err => console.error(err));
};
   

function getDuckByID(id) {
        axios
        .get("http://localhost:8080/duck/readById/" + id)
        .then(response => {
        console.log("duck: ", response.data);
        })
        .catch(err => console.error(err));
};

function delDuckbyID(id) {
    axios
    .delete("http://localhost:8080/duck/delete/" + id)
    .then(response => {
    console.log("duck: ", response.data);
    })
    .catch(err => console.error(err));
};
