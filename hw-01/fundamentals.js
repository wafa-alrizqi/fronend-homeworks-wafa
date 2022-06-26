// Variables
// 1- Calculate area of a rectangle
function rectangle(){
    let length = 10, width = 5;
    console.log(`The area of the rectangle is: ${length*width}`)
}
rectangle()

// 2- The Temperature Converter
function temperature_converter(){
    let celsius = 10;
    fahrenheit =  (celsius * 1.8) + 32 ;
    console.log(`${celsius}°C is ${fahrenheit}°F`)
    f_to_c = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F is ${f_to_c}°C`)
}
temperature_converter()

// For loop
// 1- Numbers' summations
function summations(){
    let Numbers = [23,54,32,87,47] ,sum = 0;
    console.log(Numbers.length);
    for (let i = 0; i < Numbers.length; i++){
        sum += Numbers[i];
    }
    console.log(`Sum = ${sum}`)
}
summations()

// 2- Maximum number
function maximum_number(){
    let Numbers = [16,4,2,0,19,6] , max = 0 ;
    for (let i = 0; i < Numbers.length; i++){

        if(Numbers[i] >= max){
            max=Numbers[i]
        }
        else{
            continue;
        }
    }
    console.log(`Mximum Number = ${max}`)
}
maximum_number()

// 3- Reverse Array
function reverse_array(){
    let Numbers = [16,4,2,0,19,6] ;
    for (let i = Numbers.length - 1; i >= 0; i--){
        console.log(Numbers[i])
    }
}
reverse_array()

// Nested for loop
// stars pattern
function stars_pattern(){
    let stars = 5 , star = "";
    for (let i = 1; i <= stars; i++){
        for(let x = 0 ; x < i; x++ ){
            star+= "*";
        }
        star+= "\n";
    }
    console.log(`${star}`)
}
stars_pattern()
