var canvas=document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
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

//adding resize canvas on window scroll changes
window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
})

var circleArray=[];

function init(){
    circleArray=[];
    for(let i=0;i<250;i++){
        var x=Math.random() * canvas.width;
        var y=Math.random() * canvas.height;
        var dx=(Math.random() - 0.5)*8;
        var dy=(Math.random() - 0.5)*8;
        var radius=Math.floor(Math.random() * 7) + 2;
        circleArray.push(new Circles(x,y,radius,dx,dy))
    }
}


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
        if( this.x + this.radius > canvas.width || this.x - this.radius < 0 ){ 
            this.dx =- this.dx;
         }    
        if( this.y + this.radius > canvas.height || this.y- this.radius < 0 ){ 
            this.dy =- this.dy;
         }    
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

//to animate we have to increase x and y with some velocity
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }

}

init();
animate();
