var canvas=document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
innerWidth=window.innerWidth;
innerHeight=window.innerHeight;
var c = canvas.getContext('2d');

color=[
    // '#001542',
    // '#085454',
    // '#7A7A7A',
    // '#FFFFFF',
    // '#FFB30D',
    '#D99C79',
    '#8C7365',
    '#A69992',
    '#594842',
    '#261C1A'
]

//creating class for handling all 

function Circles(x,y,radius,dx,dy){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.dx=dx;
    this.dy=dy;
    this.colors=color[Math.floor(Math.random() * color.length)];
    this.draw=function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2 ,false);
        c.fillStyle = this.colors;
        c.fill();
        c.strokeStyle=this.colors;
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

for(let i=0;i<200;i++){
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
