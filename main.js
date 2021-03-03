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