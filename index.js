const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "black";
c.fillRect(0,0,canvas.width,canvas.height);

class Player{
    constructor({position, velocity}) {
        this.position = position; // {x, y}
        this.velocity = velocity;
        this.rotation = 0;
    }

    draw(){
        c.save();
        c.translate(this.position.x, this.position.y);
        c.rotate(this.rotation);
        c.translate(-this.position.x, -this.position.y);
        c.beginPath();
        c.arc(this.position.x, this.position.y, 5, 0, Math.PI * 2, false);
        c.fillStyle = 'red';
        c.fill();
        c.closePath();
        // c.fillStyle = 'red';
        // c.fillRect = (this.position.x, this.position.y, 100, 100);
        c.beginPath();
        c.moveTo(this.position.x + 30, this.position.y);
        c.lineTo(this.position.x - 10, this.position.y - 10);
        c.lineTo(this.position.x - 10, this.position.y + 10);
        c.closePath();

        c.strokeStyle = 'white';
        c.stroke();
        c.restore();
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    getVertices() {
        const cos = Math.cos(this.rotation)
        const sin = Math.sin(this.rotation)
    
        return [
            {
              x: this.position.x + cos * 30 - sin * 0,
              y: this.position.y + sin * 30 + cos * 0,
            },
            {
              x: this.position.x + cos * -10 - sin * 10,
              y: this.position.y + sin * -10 + cos * 10,
            },
            {
              x: this.position.x + cos * -10 - sin * -10,
              y: this.position.y + sin * -10 + cos * -10,
            },
          ]
        }
  }

  class Projectile {
    constructor({ position, velocity }) {
      this.position = position
      this.velocity = velocity
      this.radius = 5
    }
  
    draw() {
      c.beginPath()
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
      c.closePath()
      c.fillStyle = 'white'
      c.fill()
    }
  
    update() {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    }
  }

  class Asteroid {
    constructor({ position, velocity, radius }) {
      this.position = position
      this.velocity = velocity
      this.radius = radius
    }
  
    draw() {
      c.beginPath()
      c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false)
      c.closePath()
      c.strokeStyle = 'white'
      c.stroke()
    }
  
    update() {
      this.draw()
      this.position.x += this.velocity.x
      this.position.y += this.velocity.y
    }
  }

  
