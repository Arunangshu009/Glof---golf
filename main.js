var canvas=new fabric.canvas('myCanvas');
ctx=canvas.getContext("2d");
ball_width=90;
ball_height=90;
hole_width=100;
hole_height=100;
hole_image="Hole.jpg";
background_image="Golf.jpg";
ball_image="ball.png";
ball_y=0;
ball_x=0;

function load_image()
{
fabric.Image.fromURL("ball.png", function (Img) {
ball_obj = Img;
ball_obj.scaleToWidth (50);
ball_obj.scaleToHeight (50);
ball_object.set({
top: ball_y,
left:ball_x
});
new_image(); 
});

function load_image()
{
fabric.Image.fromURL("ball.png", function (Img) {
hole_obj = Img;
hole_obj.scaleToWidth (50);
hole_obj.scaleToHeight (50);
hole_object.set({
top: ball_y,
left:ball_x
});
new_image(); 
});


if((ball_x==hole_x)&&(ball_y==hole_y)){ 
    canvas.remove(ball_obj);
}
    
    new_image();
function uploadBackground(){
    ctx.drawImage(background_imgTag,200,100,canvas.width,canvas.height);   
}
function uploadball(){
    ctx.drawImage(ball_imgTag,ball_x,ball_y);
}

function uploadball(){
    ctx.drawImage(ball_height,ball_width);
}

function uploadhole(){
    ctx.drawImage(hole_imgTag,hole_x,hole_y,);
}

function uploadhole(){
    ctx.drawImage(hole_height,hole_width);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("up");
    }
    if(keyPressed=='40'){
        down();
        console.log("down");
    }
    if(keyPressed=='37'){
        left();
        console.log("left");
    }
    if(keyPressed=='39'){
        right();
        console.log("right");
    }
    }

    function down()
    {
    if(ball_y<=500)
    {
        ball_y=ball_y+10;
        console.log("when down arrow is pressed, x="+ ball_x + "|y=" +ball_y);
        uploadBackground();
        uploadball();
    }
    }

    function left()
    {
    if(ball_x>=0)
    {
        ball_x=ball_x-10;
        console.log("when left arrow is pressed, x="+ ball_x + "|y=" +ball_y);
        uploadBackground();
        uploadball();
    }
    }

    function right()
    {
    if(ball_x<=700)
    {
        ball_x=ball_x+10;
        console.log("when right arrow is pressed, x="+ ball_x + "|y=" +ball_y);
        uploadBackground();
        uploadball();
    }
    }

    function up()
    {
    if(ball_y>=0)
    {
        ball_y=ball_y-10;
        console.log("when up arrow is pressed, x="+ ball_x + "|y=" +ball_y);
        uploadBackground();
        uploadball();
    }
}
