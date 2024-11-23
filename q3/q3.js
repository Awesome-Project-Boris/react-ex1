class Clock {
    static id = 0;
    constructor(hours, minutes, seconds, country) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        this.country = country;
        this.id = Clock.id++;
        let clockdiv = document.createElement("div");
        clockdiv.id = "clockdiv"+this.id;
        clockdiv.className = "clockdiv";
        document.getElementById("clocks").appendChild(clockdiv);
    }

    ConvertToSeconds() {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }

    Show() {
        let div = document.getElementById("clockdiv"+this.id);
        div.innerHTML = `<h1>${this.country}</h1><h2>${this.hours.toString().padStart(2, '0')}:${this.minutes.toString().padStart(2, '0')}:${this.seconds.toString().padStart(2, '0')}</h2><br><h3>${this.ConvertToSeconds()}</h3>`
    }

    UpdateTime() {
        this.seconds++;
        if (this.seconds == 60) {
            this.seconds = 0;
            this.minutes++;
        }
        if (this.minutes == 60) {
            this.minutes = 0;
            this.hours++;
        }
        if (this.hours == 24) {
            this.hours = 0;
        }
    }
}

let clockcount = 0;

let clocksarray = [];

function AddClock() {
    let country = document.getElementById("txtcountry").value;
    let hours = parseInt(document.getElementById("txthours").value);
    let minutes = parseInt(document.getElementById("txtminutes").value);
    let seconds = parseInt(document.getElementById("txtseconds").value);

    if (country === "" || hours === "" || minutes === "" || seconds === "") {
        alert("Please fill all the fields");
        return;
    }
    
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
        alert("Please enter valid time");
        return;
    }

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        alert("Please enter valid time");
        return;
    }

    let clock = new Clock(hours, minutes, seconds, country);
    clockcount++;
    document.getElementById("addedcounter").innerHTML = clockcount;
    clocksarray.push(clock);
    if (clockcount >= 5) {
        try {
            document.getElementById("clocks").classList.remove("hidden");
        } catch (error) {
            
        }
    }

    document.getElementById("txtseconds").value = "";
    document.getElementById("txtminutes").value = "";
    document.getElementById("txthours").value = "";
    document.getElementById("txtcountry").value = "";
}

function UpdateClocks() {
    clocksarray.forEach(clock => {
        clock.UpdateTime()
        clock.Show();
    });
}

document.getElementById("clockform").addEventListener("submit", function (e) {
    e.preventDefault();
    AddClock();
});

setInterval(UpdateClocks, 1000);