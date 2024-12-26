// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.
// otherAngle(30, 60) return -> 90


// Write the function to find the otherAngle obtained.
function otherAngle(a, b) {
      const sumOfInteriorAngles=180;
      a=Math.abs(a);
      b=Math.abs(b);
      var twoAngles=a+b;
      var thirdAngle=sumOfInteriorAngles-twoAngles;
      return thirdAngle;
  }

//Use SpecRunner to check the Test Cases.