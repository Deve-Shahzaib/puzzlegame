
var rows = 3;
var columns = 3;

var currTile;
var otherTile; //blank tile

var turns = 0;

// var imgOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var imgOrder = ["9","8","7","6","5","4","3","2","1"];

window.onload = function() {
    for (let r=0; r < rows; r++) {
        for (let c=0; c < columns; c++) {

            //<img id="0-0" src="1.jpg">
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = imgOrder.shift() + ".jpg";

            //DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);  //click an image to drag
            tile.addEventListener("dragover", dragOver);    //moving image around while clicked
            tile.addEventListener("dragenter", dragEnter);  //dragging image onto another one
            tile.addEventListener("dragleave", dragLeave);  //dragged image leaving anohter image
            tile.addEventListener("drop", dragDrop);        //drag an image over another image, drop the image
            tile.addEventListener("dragend", dragEnd);      //after drag drop, swap the two tiles

            document.getElementById("board").append(tile);

        }
    }
}

function dragStart() {
    currTile = this; //this refers to the img tile being dragged
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave() {

}

function dragDrop() {
    otherTile = this; //this refers to the img tile being dropped on
}

function dragEnd() {
    if (!otherTile.src.includes("7.jpg")) {
        return;
    }

    let currCoords = currTile.id.split("-"); //ex) "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c-1;
    let moveRight = r == r2 && c2 == c+1;

    let moveUp = c == c2 && r2 == r-1;
    let moveDown = c == c2 && r2 == r+1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1;
        document.getElementById("turns").innerText = turns;
    }

    var i00 = document.getElementById('0-0')
    var i00src =i00.src
    var i00src = i00src.charAt(i00src.length-5) 

    var i01 = document.getElementById('0-1')
    var i01src =i01.src
    var i01src = i01src.charAt(i01src.length-5)
    
    var i02 = document.getElementById('0-2')
    var i02src =i02.src
    var i02src = i02src.charAt(i02src.length-5)
    
    var i10 = document.getElementById('1-0')
    var i10src =i10.src
    var i10src = i10src.charAt(i10src.length-5) 

    var i11 = document.getElementById('1-1')
    var i11src =i11.src
    var i11src = i11src.charAt(i11src.length-5)
    
    var i12 = document.getElementById('1-2')
    var i12src =i12.src
    var i12src = i12src.charAt(i12src.length-5)
    
    var i20 = document.getElementById('2-0')
    var i20src =i20.src
    var i20src = i20src.charAt(i20src.length-5)
    
    var i21 = document.getElementById('2-1')
    var i21src =i21.src
    var i21src = i21src.charAt(i21src.length-5)

    var i22 = document.getElementById('2-2')
    var i22src =i22.src
    var i22src = i22src.charAt(i22src.length-5)


   if(i00src == "1" && i01src == "2"  && i02src == "3"  && i10src == "4"  && i11src == "5"  && i12src == "6"  && i20src == "7"   && i21src == "8"  && i22src == "9"){
    alert('you have complete this puzzle  and congrats you winner')
   }
//    setTimeout(() => {
//     alert('You Have Complete This Puzzle And Congrats You Are Winner')
// },250);



}