var canvas=new fabric.Canvas('myCanvas');

block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

var player_obj="";
var block_img_obj="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(IMG){
    player_obj=IMG;
    player_obj.scaleToWidth(150);
    player_obj.scaleToHeight(140);
    player_obj.set({top:player_y,left:player_x});
    canvas.add(player_obj);
    }
    );
}

function newImg(get_image){
    fabric.Image.fromURL(get_image,function(IMG){
        block_img_obj=IMG;
        block_img_obj.scaleToWidth(block_img_width);
        block_img_obj.scaleToHeight(block_img_height);
        block_img_obj.set({top:player_y,left:player_x});
        canvas.add(block_img_obj);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '80') {
        console.log("p and shift are pressed together");
        block_img_width=block_img_width+10;
        block_img_height=block_img_height+10;
        document.getElementById("cur_width").innerHTML=block_img_width;
        document.getElementById("cur_height").innerHTML=block_img_height;
    }
    if (e.shiftKey == true && keyPressed == '77') {
        console.log("m and shift are pressed together");
        block_img_width=block_img_width-10;
        block_img_height=block_img_height-10;
        document.getElementById("cur_width").innerHTML=block_img_width;
        document.getElementById("cur_height").innerHTML=block_img_height;
    }
    if (keyPressed == '38'){
        up();
        console.log("up");
    }
    if (keyPressed == '40'){
        down();
        console.log("down");
    }
    if (keyPressed == '37'){
        left();
        console.log("left");
    }
    if (keyPressed == '39'){
        right();
        console.log("right");
    }
    if (keyPressed == '87'){
        newImg('wall.jpg');
        console.log("w");
    }
    if (keyPressed == '71'){
        newImg('ground.png');
        console.log("g");
    }
    if (keyPressed == '76'){
        newImg('light_green.png');
        console.log("l");
    }
    if (keyPressed == '84'){
        newImg('trunk.jpg');
        console.log("t");
    }
    if (keyPressed == '82'){
        newImg('roof.jpg');
        console.log("r");
    }
    if (keyPressed == '89'){
        newImg('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '68'){
        newImg('dark_green.png');
        console.log("d");
    }
    if (keyPressed == '89'){
        newImg('yellow_wall.png');
        console.log("y");
    }
    if (keyPressed == '85'){
        newImg('unique.png');
        console.log("u");
    }
    if (keyPressed == '67'){
        newImg('cloud.jpg');
        console.log("c");
    }
    if (keyPressed == '79'){
        newImg('obsidianm.png');
        console.log("o");
    }
}
function up() { 
    if(player_y >=0) {
    player_y = player_y - block_img_height;
    console.log("When up arrow is pressed, x = " + player_x + " | y = " +player_y);
    console.log("block image height= "+ block_img_height);
    canvas.remove(player_obj);
    playerupdate();
} } function down() {
          if(player_y <=500) { 
              player_y =player_y+ block_img_height;
               console.log("When down arrow is pressed, x = " + player_x + " | y = " +player_y);
               console.log("block image height= "+ block_img_height);
               canvas.remove(player_obj);
               playerupdate();
                } 
 }
function left() { 
if(player_x >= 0) {
 player_x =player_x - block_img_width;
 console.log("When left arrow is pressed, x = " + player_x + " | y = " +player_y);
                          console.log("block image width= "+ block_img_width);
                          canvas.remove(player_obj);
                          playerupdate();
                        }
                        }
function right() { 
if(player_x <= 850) { 
 player_x =player_x + block_img_width;
console.log("When right arrow is pressed, x = " + player_x + " | y = " + player_y);
console.log("block image width= "+ block_img_width);
canvas.remove(player_obj);
playerupdate();
} }