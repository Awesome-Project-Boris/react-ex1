class Duck {
    constructor(name, color, age, weight, picture) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.weight = weight;
        this.picture = picture;
        this.quackamount = parseInt((age * weight) / 2);
    }
    Quack() {
        clearInfo();
        const audio = document.getElementById('myAudio');
        audio.volume = 0.5;
        audio.loop = true;
        audio.play();
        setTimeout(() => {
            audio.currentTime = 0;
            audio.pause();
        }, (audio.duration * 3000) + 10);
        document.getElementById("quacks").innerHTML = "";
        for (let i = 0; i < this.quackamount; i++) {
            document.getElementById("quacks").innerHTML += "Quack ";
        }
    }

    Show() {
        clearInfo();
        let div = document.getElementById("detailsdiv");
        div.innerHTML = `<h1>${this.name}</h1><img src="${this.picture}" height=200><ul><li>Age: ${this.age}</li><li>Weight: ${this.weight}</li><li>Color: ${this.color}</li></ul>`;
    }
}
let duck;
document.getElementById("duckform").addEventListener("submit", function (e) {
    e.preventDefault();
    duck = new Duck(
        document.getElementById("txtname").value,
        document.getElementById("txtcolor").value,
        document.getElementById("txtage").value,
        document.getElementById("txtweight").value,
        document.getElementById("txtpic").value
    );
    document.getElementById("ducksubmit").setAttribute("disabled", true);
    document.getElementById("txtname").value = "";
    document.getElementById("txtcolor").value = "";
    document.getElementById("txtage").value = "";
    document.getElementById("txtweight").value = "";
    document.getElementById("txtpic").value = "";
    document.getElementById("duckdetails").classList.remove("not-visible");
});

document.getElementById("quackbtn").addEventListener("click", function () {
    duck.Quack();
});

document.getElementById("showbtn").addEventListener("click", function () {
    duck.Show();
});

function clearInfo(){
    document.getElementById("detailsdiv").innerHTML="";
    document.getElementById("quacks").innerHTML="";

}