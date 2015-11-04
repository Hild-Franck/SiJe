/**
 * Created by Knaufux on 11/3/2015.
 */

function Square(_x, _y, _side, _color, _filled, _width){
    this.x = _x;
    this.y = _y;
    this.side = _side;
    this.color = _color || "black";
    this.filled = _filled || false;
    this.width = _width || 1;
}

Square.prototype.area = function(){
    return (this.side * this.side);
};

Square.prototype.draw = function(context){
    context.beginPath();
    context.rect(this.x - this.side/2, this.y - this.side/2, this.side, this.side);
    if(this.filled){
        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.stroke();
    }
    else {
        context.fillStyle = this.color;
        context.fill();
    }
};

function Arc(_x, _y, _radius, _angleStart, _angleEnd, _color, _filled, _width){
    this.x = _x;
    this.y = _y;
    this.radius = _radius;
    this.angleStart = _angleStart;
    this.angleEnd = _angleEnd;
    this.color = _color || 'black';
    this.filled = _filled || false;
    this.width = _width || 1;
}

Arc.prototype.draw = function(context){
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.angleStart, this.angleEnd, true);
    if(this.filled){
        context.lineWidth = this.width;
        context.strokeStyle = this.color;
        context.stroke();
    }
    else {
        context.fillStyle = this.color;
        context.fill();
    }
};