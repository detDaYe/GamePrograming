var configuration = {
    px_per_meter: 20,
    origin_px: 10,
    origin_py: 480,
    px_max: 1200,
    py_max: 500
};

var pbd_canvas = undefined;
var context = undefined;

function setContext(){
    pbd_canvas = document.getElementById("primary_ballistic_display");
    context = pbd_canvas.getContext("2d");
    if(context != null) console.log("context is not null!");
}
function getCanvas(){
    return pbd_canvas;
}
function getContext(){
    return context;
}


function transform_coordinate(x, y){
    var px_coord = {
        px: parseInt(x * configuration.px_per_meter + configuration.origin_px),
        py: parseInt(-1 * y * configuration.px_per_meter + configuration.origin_py)
    };

    return px_coord;
    
}

function inverse_coordinate(px, py){

    var origin_coord = {
        x: (px - configuration.origin_px) / configuration.px_per_meter,
        y: (-1 * py + configuration.origin_py) / configuration.px_per_meter
    };

    return origin_coord;
}

function draw_projectile(projectile_in){

    var pos = transform_coordinate(projectile_in.position.x, projectile_in.position.y);

    //console.log(pos.px, pos.py);

    context.beginPath();
    context.fillStyle=getComputedStyle(document.documentElement).getPropertyValue('--projectile-color');
    var r = Math.max(5, configuration.px_per_meter * 0.02);
    context.arc(pos.px, pos.py, r, 0, 2 * Math.PI, true);
    context.fill();
}

function draw_target(target_in){
    context.beginPath();
    var pos = transform_coordinate(target_in.x, target_in.y);
    //console.log(pos.px, pos.py);
    context.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--target-color');
    var r = Math.max(2, target_in.r * configuration.px_per_meter);
    context.arc(pos.px, pos.py, r, 0, 2 * Math.PI, true);
    context.fill();

}

var feather = new Image();
feather.src = "img/feathers.gif";

function draw_distoryed(target_in){
    var pos = transform_coordinate(target_in.x, target_in.y);
    context.drawImage(feather,pos.px - feather.width / 2, pos.py - feather.height / 2);
}

function v0_bar(bar){
    document.getElementById("v0_text").innerHTML = bar.value + " m/s";
}

function angle_bar(bar){
    document.getElementById("angle_text").innerHTML = bar.value + " deg";
}