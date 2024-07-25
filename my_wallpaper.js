//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let backColour = [240, 255, 240];
let furColour = [22, 22, 22];
let eyeColour = [236, 207, 58]

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(backColour); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  strokeWeight(0);
  fill(furColour);
  ellipse(93, 93, 65, 65);
  rectMode(CENTER);
  rect(100, 100, 60, 60);
  triangle(70.1, 130, 50, 105, 71, 90); //mouth
  fill(238, 172, 186);
  triangle(50, 105, 55, 101, 54, 110);//nose
  //ears
  triangle(85, 62, 90, 25, 100, 65);
  fill(furColour);
  triangle(90, 25, 100, 71, 130, 70.1)
  triangle(130, 70, 95, 150, 150, 120);
  rect(100, 130, 10, 20);
  //neck
  fill(backColour);
  ellipse(95, 140, 20, 20);
  //eyes
  strokeWeight(0);
  fill(eyeColour);
  ellipse(78, 87, 11, 15);
  triangle(73, 84, 77, 94.5, 71, 92); //top, bottom, edge FRONT
  triangle(80, 80, 85, 83, 81.5, 93); //top, edge, bottom BACK
  fill(0);
  ellipse(76, 87, 6, 12); //pupil
}
