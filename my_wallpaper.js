let orangeFur = [251, 140, 50]
let blackFur = [20]
let silverFur = [150]
let whiteFur = [245]
let sandFur = [208, 184, 139]

let eyeOrange = [236, 154, 63]
let eyeBlue = [155, 194, 216]
let eyeGreen = [189, 211, 69]
let eyeYellow = [236, 214, 63]

let backOrange = [255, 223, 187]
let backYellow = [255, 255, 186]
let backGreen = [186, 255, 201]
let backBlue = [186, 255, 255]

//your parameter variables go here!
let backColour = backOrange;
let furColour = orangeFur;
let eyeColour = eyeGreen;
let whisker = true;
let earColour = [255, 166, 191];
let pattern = 3;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(backColour); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(1);
  stroke(furColour);
  fill(furColour);
  ellipse(85, 100, 80, 80);//head
  triangle(50, 110, 35, 125, 55, 160);//muzzle
  triangle(50, 110, 75, 155, 55, 160);//chin
  triangle(75, 155, 95, 190, 170, 120);//neck
  triangle(170, 120, 120, 50, 150, 75);//back
  triangle(80, 60, 90, 10, 110, 65);//earfront1
  triangle(110, 65, 90, 10, 120, 50);//earfront2
  triangle(67, 70, 70, 15, 100, 60);//ear back
  triangle(120, 50, 170, 120, 75, 155);//fillbottom
  triangle(170, 120, 50, 110, 75, 155);//filllength
  triangle(170, 120, 50, 110, 119, 49);//filltop
  triangle(95, 190, 170, 120, 185, 150);//neckbottom
  fill(backColour);
  stroke(backColour);
  ellipse(80, 176, 42, 42);

  //Eyes
  stroke(eyeColour);
  fill(eyeColour);
  ellipse(75, 100, 20, 20);
  triangle(63, 110, 65, 100, 79, 109);//front
  triangle(88, 90, 75, 90, 83.5, 105);//back
  fill(0);
  stroke(0);
  ellipse(70, 100, 5, 14);
  fill(255)
  stroke(255)
  ellipse(75, 105, 4, 4);


  if (whisker){
    stroke(255);
    strokeWeight(2);
    noFill();
    bezier(40, 40, 42, 40, 54, 48, 57, 55);//top1
    point(27, 175);
    point(35, 157);
    bezier(10, 55, 20, 54, 40, 55, 45, 63);//top2
    bezier(10, 190, 13, 170, 28, 152, 30, 150);//bottom1
    bezier(27, 175, 27, 170, 35, 157, 35, 157);//bottom2
    }

  if((pattern == 1)||(pattern == 3) ){ //muzzel patch
    strokeWeight(1);
    stroke(255);
    fill(255);
    triangle(50, 110, 35, 125, 55, 160);//muzzle
    triangle(50, 110, 75, 155, 55, 160);//chin
  }

  fill(earColour); 
  stroke(earColour)
  triangle(35.5, 125, 41, 123, 38, 130);
  triangle(80, 60, 88.5, 20, 105, 63);

  if (furColour == orangeFur) {
    stroke(210, 83, 23);
    fill(210, 83, 23);
  }
  else if (furColour == silverFur) {
    stroke(110);
    fill(110);
  }
  else if(furColour == blackFur) {
    stroke(0);
    fill(0);
  }
  else if(furColour == whiteFur){
    stroke(220);
    fill(220);
  }
  else if(furColour == sandFur){
    stroke(107, 94, 71);
    fill(107, 94, 71);
  }

  if ((pattern == 2)||(pattern ==3)){ //tabby markings
    strokeWeight(1);
    triangle(65, 80, 70, 64, 78, 61);
    triangle(55, 95, 56, 73, 65, 66);
    triangle(100, 93, 135, 105, 130, 95);
    triangle(100, 110, 125, 130, 133, 120);
    triangle(120, 176, 175, 130, 183.5, 147);//neckbottom
  }
  
  if (furColour == whiteFur){
    fill(255); 
    stroke(255);
  }

  //top right
  push();
  translate(75, -115);
  rotate(45);
  pawPrint();
  pop();

  //top left
  push();
  translate(-115, -75);
  rotate(-45);
  pawPrint();
  pop();

  function pawPrint(){
    push();
    ellipse(170, 30, 13, 15);
    ellipse(165, 35, 13, 11);
    ellipse(175, 35, 13, 11);

    translate(157, 22);
    rotate(340);
    ellipse(0, 0, 7, 9);
    ellipse(10, -4, 7, 9);
   pop();
   translate(183, 22);
   rotate(20);
   ellipse(0, 0, 7, 9);
   ellipse(-10, -4, 7, 9);
  }
}