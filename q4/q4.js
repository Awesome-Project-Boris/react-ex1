class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    show(){
        return `(${this.x}, ${this.y})`;
    }

    Equals(other){
        return this.x == other.x && this.y == other.y;
    }
}

function displayIsPoint(p_arr, res, title){
    let str = "";
    if(title){
        str += title;
    }
    let div = document.createElement("div");
    for(let i = 0; i < p_arr.length; i++){
        if (i==0) {
            str += 'Array: '
        }
        else if (i==2) {
            str += ', Point: '
        }
        str += p_arr[i].show() + " ";
    }
    str += ": ";
    str += res
    div.innerHTML = str;
    document.body.appendChild(div);
}

array = [new Point(1, 2), new Point(3, 4)];

function IsPointInArray(array, x, y){
    let p = new Point(x, y);
    let res = false;
    for(let i = 0; i < array.length; i++){
        if(p.Equals(array[i])){
            res = true;
        }
    }
    array.push(p);
    displayIsPoint(array, res, "IsPoint1: <br>");
    return res;
}

console.log(IsPointInArray([new Point(1, 2), new Point(3, 4)], 1, 2));
console.log(IsPointInArray([new Point(1, 2), new Point(3, 4)], 5, 6));

function IsPointInArray2(array, p){
    let res = false;
    for(let i = 0; i < array.length; i++){
        if(p.Equals(array[i])){
            res = true;
        }
    }
    array.push(p);
    displayIsPoint(array, res, "IsPoint2: <br>");
    return res;
}

console.log(IsPointInArray2([new Point(1, 2), new Point(3, 4)], new Point(1, 2)));
console.log(IsPointInArray2([new Point(1, 2), new Point(3, 4)], new Point(5, 6)));

function calculateDistance(p1, p2){
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

function calculatePathDistance(array){
    let distance = 0;
    for(let i = 0; i < array.length - 1; i++){
        distance += calculateDistance(array[i], array[i + 1]);
    }
    return distance;
}

let pointarr = [new Point(1, 2), new Point(3, 4), new Point(5, 6), new Point(7, 8), new Point(9, 10)];
let pointarr2 = [new Point(10, 2), new Point(5, 9), new Point(1, 1), new Point(4, 3), new Point(24, 15), new Point(11, 12)];
let pointarr3 = [new Point(1, 1), new Point(2, 1), new Point(2, 2), new Point(3, 2)];

function drawpoints(arr){

    
    Plotly.newPlot('plot', [{
        x: arr.map(p => p.x),
        y: arr.map(p => p.y),
        type: 'scatter',
        marker: {
            size: 16
        }
    }]);
    
    for (const p of arr) {
        document.getElementById('distance').innerHTML += p.show() + '  ';
    }
    document.getElementById('distance').innerHTML += `<br>`;
    
    document.getElementById('distance').innerHTML += `Total Distance: ${calculatePathDistance(arr)}\n`;
    
}

drawpoints(pointarr2);