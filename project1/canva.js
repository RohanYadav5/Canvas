var canvas=document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
innerWidth=window.innerWidth;
innerHeight=window.innerHeight;
var c = canvas.getContext('2d');

c.beginPath();
c.arc(700,200,40,0,Math.PI*2 ,false);
c.strokeStyle='blue';
c.stroke();

function Circles(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;

    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2 ,false);
        if(this.radius>20){
            c.strokeStyle="#ffffff";
        } else {
            c.strokeStyle="#0d8b73";
        }

        c.stroke();
    }

    this.update=function(){
        if( this.x + this.radius > innerWidth || this.x - this.radius < 0 ){ 
            this.dx =- this.dx;
         }    
        if( this.y + this.radius > innerHeight || this.y- this.radius < 0 ){ 
            this.dy =- this.dy;
         }    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray=[];

for(let i=0;i<70;i++){
    var x=Math.random() * innerWidth;
    var y=Math.random() * innerHeight;
    var dx=(Math.random() - 0.5)*8;
    var dy=(Math.random() - 0.5)*8;
    var radius=Math.floor(Math.random() * 30) + 1
    circleArray.push(new Circles(x,y,radius,dx,dy))
}

//to animate we have to increase x and y with some velocity
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(let i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }

}

animate();
