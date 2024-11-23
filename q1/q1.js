class Counter{
    constructor() {
        this.count = 0;
    }

    Initialize(num){
        this.count = num;
    }

    Increment(){
        this.count++;
    }

    Go(){
        if (this.count < 0) {
            alert("Please enter a non negative number");
            return;
        }
        let arr = [];
        for (let i = 0; i <= this.count; i++) {
            arr.push(i);
        }
        return arr;
    }
}

let counter = new Counter();
document.getElementById("startbtn").addEventListener("click", function(){
    let num = parseInt(document.getElementById("txtinp").value);
    counter.Initialize(num);    
});
document.getElementById("plusbtn").addEventListener("click", function(){
    counter.Increment();
    document.getElementById("txtinp").value = counter.count;
});
document.getElementById("gobtn").addEventListener("click", function(){
    let arr = counter.Go();
    if (arr == undefined) {
        return;
    }
    if (document.getElementById("resultdiv") != undefined) {
        document.getElementById("resultdiv").remove();
    }
    let result = document.createElement("div");
    result.id = "resultdiv";
    result.innerHTML = arr.join(", ");
    document.body.appendChild(result);
});