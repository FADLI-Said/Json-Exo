// data à travailler : il s'agit d'un objet contenant un tableau de membres
const data = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality"
            ]
        },
        {
            "name": "Fatality",
            "age": 33,
            "secretIdentity": "Isaac Mewton",
            "powers": [
                "Fatality resistance"
            ]
        },
        {
            "name": "Running Lady",
            "age": 24,
            "secretIdentity": "Britney Sears",
            "powers": [
                "Speed of light"
            ]
        }
    ]
}


document.getElementById("name").innerHTML = data.squadName

document.getElementById("info").innerHTML = `Hometown : ${data.homeTown} // Formed : ${data.formed}`

data.members.forEach((item) => {
    document.getElementById("member").innerHTML += `
    <div class="col-3 bg-light mt-3">
    <h3  class="text-center">${item.name}</h3>
    <p><b>Secret identity : </b>${item.secretIdentity}</p>
    <p><b>age :</b> ${item.age}</p>
    <p><b>Superpowers :</b> ${item.powers}</p>
    </div>`;
})