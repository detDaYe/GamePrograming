function init_target(x0, y0, r0){
    target = {
        x:x0,
        y:y0,
        r:r0,
        clicked:false,

        mouseUpListener: function(event){
            getTarget().clicked = false;
        },
        mouseDownListener: function(event){
            var pos = getMousePosition(event);
            var distance = Math.sqrt(Math.pow(pos.x - getTarget().x, 2) + Math.pow(pos.y - getTarget().y, 2));
            console.log(distance);
            //console.log(this);
            if(distance > getTarget().r) return;
            getTarget().clicked = true;
        },

        mouseMoveListener: function(event){
            //console.log(getTarget()
            if(!getTarget().clicked)  return;
            var pos = getMousePosition(event);
            getTarget().x = pos.x;
            getTarget().y = pos.y;
        },


        isConflict: function(x_in, y_in, r_in){
            //console.log(this.x, this.y, this.r, x_in, y_in, r_in);
            //console.log(Math.sqrt(Math.pow(this.x - x_in, 2) + Math.pow(this.y - y_in, 2)), this.r + r_in);
            var distance = Math.sqrt(Math.pow(this.x - x_in, 2) + Math.pow(this.y - y_in, 2));
            if(distance <= this.r + r_in){
                console.log("conflict!");
                return true;
            }
            else return false;
        },

        say: function(){
            console.log(this.x, this.y, this.r);
        }
    };
    
    target.say();
    return target;
}


function getMousePosition(event_in){
    if(event_in.layerX || event_in.layerX == 0){
        return inverse_coordinate(event_in.layerX, event_in.layerY);
    }
    else if(event_in.offsetX || event_in.offsetX == 0){
        return inverse_coordinate(event_in.offsetX, event_in.offsetY);
    }
    else return null;
}
function getTarget(){
    return objects.target;
}