function calculateTip(amount, rating) {
  var tip;
  rating=rating.toLowerCase()
  switch(rating){
    case "terrible":
      tip=0*amount;
      break;
    case "poor":
      tip=0.05*amount;
      break;
    case "good":
      tip=0.1*amount;
      break;
    case "great":
      tip=0.15*amount;
      break;
    case "excellent":
      tip=0.2*amount;
      break;
    default:
      return "Rating not recognised"
  }
  return Math.ceil(tip)
}
  var amount=1000;
  var rating="GREAT";
  console.log(calculateTip(amount,rating));


//Use SpecRunner to check the Test Cases.