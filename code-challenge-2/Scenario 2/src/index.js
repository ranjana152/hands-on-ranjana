function hero(bullets, dragons){
  bulletpower=dragons*2;
  return bullets>=bulletpower;
}
var bullets=20;
var dragons=5;
var result=hero(bullets,dragons);
if(result){
  console.log("Maximum power is available!");
}
else{
  console.log("Need more bullets!");
}
//Use SpecRunner to check the Test Cases.