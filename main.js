//bmi calculator in kilograms and metres

function bmiCalculator(weight, height) {

    var number = weight/(Math.pow(height,2));
    number = Math.round(number*10)/10;

    var interpretation = "";

    if (number < 18.5) {
        interpretation = "Your BMI is " + number + ", so you are underweight.";
    }

    if (number >= 18.5 && number <= 24.9) {
        interpretation = "Your BMI is " + number + ", so you have a normal weight.";
    }

    if (number > 24.9 && number <= 29.9) {
        interpretation = "Your BMI is " + number + ", so you are overweight.";
    }

    if (number > 30 && number <= 34.9) {
        interpretation = "Your BMI is " + number + ", so you are obese.";
    }

    if (number > 35) {
        interpretation = "Your BMI is " + number + ", so you are extremely obese."
    }

    return interpretation;
}

var bmi = bmiCalculator(57, 1.72);

alert(bmi);

