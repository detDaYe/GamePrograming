const gravity = 9.8;
const density = 1.28;


function init_projectile(_drag, _surface, _mass, _vx0, _vy0, _x0, _y0){

    var projectile = {

        position:{
            x: _x0,
            y: _y0
        },

        velocity:{
            vx:_vx0,
            vy:_vy0
        },

        constants:{
            drag: _drag,
            surface: _surface,
            mass:_mass
        },
        
        update_status : function(dt){
            var alpha = 0.5 * this.constants.drag * density * this.constants.surface;
            var g = gravity;
            var m = this.constants.mass;

            var t = dt;

            var vx0 = this.velocity.vx;
            var vy0 = this.velocity.vy;

            var _vx = undefined;
            var _vy = undefined;

            var p = Math.sqrt(m * g / alpha);
            var k = alpha * p / m;
            if(vy0 <= 0){
                var c2 = Math.atanh(vy0 / p);
                _vy = p * Math.tanh(c2 - k * t);
            }else{
                var _temp = vy0 / p;
                if(Math.abs(_temp) > Math.PI / 2)
                    console.log("vy0 / p Out of Range!!");
                var c1 = Math.atan(_temp);
                _vy = p * Math.tan(c1 - k * t);
        
                if(_vy < 0){
                    t = c1 / k;
                    _vy = 0;
                    console.log("dt changed");
                }
            }
            _vx = m * vx0 / (alpha * vx0 * t + m);

            this.velocity.vx = _vx;
            this.velocity.vy = _vy;

            this.position.x += t * this.velocity.vx;
            this.position.y += t * this.velocity.vy;

            return t;

        }

    };

    return projectile;
}