//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let backColour = [240, 255, 240];
let furColour = [0];
let eyeColour = [236, 207, 58];
let whisker = true;
let earColour = [92, 81, 81];

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(backColour); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(0.3);
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

  if (whisker == true){
    stroke(0);
    strokeWeight(1);
    noFill();
    bezier(40, 40, 42, 40, 54, 48, 57, 55);//top1
    point(27, 175);
    point(35, 157);
    bezier(10, 55, 20, 54, 40, 55, 45, 63);//top2
    bezier(10, 190, 13, 170, 28, 152, 30, 150);//bottom1
    bezier(27, 175, 27, 170, 35, 157, 35, 157);//bottom2
    }
  stroke(eyeColour);
  //eyes
  fill(eyeColour);
  ellipse(75, 100, 20, 20);
  triangle(63, 110, 65, 100, 79, 109);//front
  triangle(88, 90, 75, 90, 83.5, 105);//back
  fill(0);
  stroke(0);
  ellipse(70, 100, 5, 14);

  fill(earColour); 
  stroke(earColour)
  triangle(35.5, 125, 41, 123, 38, 130);
  triangle(80, 60, 88.5, 20, 105, 63);


 // ellipse(93, 93, 65, 65);
 // rectMode(CENTER);
 // rect(100, 100, 60, 60);
 // triangle(70.1, 130, 50, 105, 71, 90); //mouth
 // fill(238, 172, 186);
 // triangle(50, 105, 55, 101, 54, 110);//nose
 // //ears
 // triangle(85, 62, 90, 25, 100, 65);
 // fill(furColour);
 // triangle(90, 25, 100, 71, 130, 70.1)
 // triangle(130, 70, 95, 150, 150, 120);
 // rect(100, 130, 10, 20);
 // //neck
 // fill(backColour);
 // ellipse(95, 140, 20, 20);
 // //eyes
 // strokeWeight(0);
 // fill(eyeColour);
 // ellipse(78, 87, 11, 15);
 // triangle(73, 84, 77, 94.5, 71, 92); //top, bottom, edge FRONT
 // triangle(80, 80, 85, 83, 81.5, 93); //top, edge, bottom BACK
 // fill(0);
 // ellipse(76, 87, 6, 12); //pupil
}
