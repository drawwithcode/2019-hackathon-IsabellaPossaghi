var t;
var rot;

var theme;
var analyzer;


function preload() {

  _t = loadImage("./assets/t.png");
  g = loadImage("./assets/g.png");
  _1 = loadImage("./assets/1.png");

  tg1 = loadImage("./assets/TG1.png");
  tg1_y = loadImage("./assets/TG1_yellow.png");
  tg1_b = loadImage("./assets/TG1_blue.png");
  tg1_g = loadImage("./assets/TG1_green.png");
  tg1_n = loadImage("./assets/TG1_black.png");
  tg1_p = loadImage("./assets/TG1_purple.png");
  theme = loadSound("./assets/TG1_new.mp3");

  earth = loadImage("./assets/earth.jpg")
  earth_2 = loadImage("./assets/earth_2.jpg")
  earth_3 = loadImage("./assets/earth_3.jpg")
  earth_4 = loadImage("./assets/earth_4.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  t = 0.0; // starting point
  z = 0.0; // starting point

  imageMode(CENTER)

  analyzer = new p5.Amplitude();
  analyzer.setInput(theme);
}

function draw() {
  background(0);


  t = t + 0.15;
  z = z + 0.05;

  var volume = 0;
  if (mouseIsPressed) {
    if (theme.isPlaying() == false) {
      theme.play();
    }
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
  } else {
    theme.pause();
  }




  if (mouseIsPressed) {

    image(earth, windowWidth/2, windowHeight, 1200, 700)
    image(earth_2, windowWidth/2, windowHeight/5, 1000, 400)

    //create a grid
    for (var x = 20; x < windowWidth; x += 120) {
      for (var y = 20; y < windowHeight; y += 120) {

        // var distance = dist(x,y,mouseX,mouseY);
        // var remapx = map(distance, 0, 300, 0, 10);
        // var remapy = map(distance, 0, 300, 0, 20);

        rectMode(CENTER);
        noStroke()

        fill((Math.random() * 255), (Math.random() * 255), 255)
        rect(x, y , volume/3, volume/3)



        noStroke()
        fill((Math.random() * 255),  255, (Math.random() * 255))
        rect(x, y + cos(t) * 30, volume/8, volume/8)
        rect(x, y + sin(t) * 30, volume/8, volume/8)
        rect(x+ sin(t) * 30, y, volume/8, volume/8)
        rect(x+ cos(t) * 30, y, volume/8, volume/8)
      }
    }

    push()
    translate(width / 2, height / 2);
    rotate(frameCount / 180);
    rot = frameCount / 180;

    image(tg1_n, 0, 0 + sin(z) * 1, 340, 230);
    image(tg1_b, 0, 0 + sin(z) * -10, 340, 230);
    image(tg1_y, 0, 0 + sin(z) * -20, 340, 230);
    image(tg1_b, 0, 0 + sin(z) * -30, 340, 230);
    image(tg1_p, 0, 0 + sin(z) * -40, 340, 230);
    image(tg1_g, 0, 0 + sin(z) * -50, 340, 230);
    image(tg1, 0, 0 + sin(z) * -60, 340, 230);

    pop()


  } else {

    image(earth_3, windowWidth/2, windowHeight, 1200, 700)
    image(earth_4, windowWidth/2, windowHeight/5, 1000, 400)

    push()
    translate(width / 2, height / 2);
    rotate(frameCount / 180);
    rot = frameCount / 180;

    image(tg1_n, 0, 0 + sin(z) * 1, 340, 230);
    image(tg1_b, 0, 0 + sin(z) * -10, 340, 230);
    image(tg1_y, 0, 0 + sin(z) * -20, 340, 230);
    image(tg1_b, 0, 0 + sin(z) * -30, 340, 230);
    image(tg1_p, 0, 0 + sin(z) * -40, 340, 230);
    image(tg1_g, 0, 0 + sin(z) * -50, 340, 230);
    image(tg1, 0, 0 + sin(z) * -60, 340, 230);

    pop()
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}