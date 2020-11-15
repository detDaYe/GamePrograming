var objects =  {
    projectile:null,
    target:null,
    projectileInterval:null,
    displayInterval:null,
    conflicted: false
};

function startGame(){
    setContext();
    objects.projectile = init_projectile(0.47, 25.132741228718345 * 0.000001, 2.7 * 0.001, 0, 0, 0, 0);
    objects.target = init_target(20, 10, 2);
    getCanvas().addEventListener('mouseup', target.mouseUpListener, false);
    getCanvas().addEventListener('mousedown', target.mouseDownListener, false);
    getCanvas().addEventListener('mousemove', target.mouseMoveListener, false);
    if(objects.target == null) console.log("target is NULL");
    draw_projectile(objects.projectile);
    drawObjects();
}

function reset(){
    objects.projectile.position.x = 0;
    objects.projectile.position.y = 0;
    document.getElementById("v0").disabled = false;
    document.getElementById("angle").disabled = false;
    document.getElementById("fire").value = "Fire!";
    document.getElementById("fire").disabled = false;
    objects.conflicted = false;
}

function fireProjectile(){
    objects.projectileInterval = setInterval(projectileUpdater, 25);
    var v0 = document.getElementById("v0").value;
    var angle = document.getElementById("angle").value * Math.PI / 180;

    objects.projectile.velocity.vx = v0 * Math.cos(angle);
    objects.projectile.velocity.vy = v0 * Math.sin(angle);
    
    document.getElementById("v0").disabled = true;
    document.getElementById("angle").disabled = true;
    document.getElementById("fire").value = "FIRED";
    document.getElementById("fire").disabled = true;
    
    document.getElementById("reset").disabled = true;

    function projectileUpdater(){
        objects.projectile.update_status(0.025);
        document.getElementById("ball_x").innerHTML = objects.projectile.position.x;
        document.getElementById("ball_y").innerHTML = objects.projectile.position.y;
        document.getElementById("ball_vx").innerHTML = objects.projectile.velocity.vx;
        document.getElementById("ball_vy").innerHTML = objects.projectile.velocity.vy;
        
        var conflict = objects.target.isConflict(objects.projectile.position.x, objects.projectile.position.y, 0.02);
        var flag = false;
        if(conflict)
            objects.conflicted = true;
        if(objects.projectile.position.y < 0) flag = true;
        if(objects.projectile.position.x > transform_coordinate(getCanvas().width, 0).px) flag = true;

        if(flag){
            clearInterval(objects.projectileInterval);
            objects.projectileInterval = null;
            document.getElementById("reset").disabled = false;
        } 
    }
}

function drawObjects(){

    objects.displayInterval = setInterval(loopFunction, 50);
    
    function loopFunction(){
        getContext().clearRect(0,0, getCanvas().width, getCanvas().height);
        if(objects.conflicted) draw_distoryed(objects.target);
        else draw_target(objects.target);
        draw_projectile(objects.projectile);
    }
}



