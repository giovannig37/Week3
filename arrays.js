// Question 1 part: a 
// However we are not allowed to use any numbers at all...
        ages = [3,9,23,64,2,8,28];
		lengthOfArr = ages.length;
		difference = (ages[lengthOfArr - lengthOfArr] - ages[lengthOfArr - 1]);
		console.log("Difference of first and last element in ages[] = " + difference);
		newAges = [ages.length];
		console.log(ages,  0, newAges, 0, ages.length);
// put my own random age in to make sure step above was dynamic
// Question 1 part : b 
		lengthOfArr = newAges.length;
		newAges[lengthOfArr - 1] = 100;
		difference = (newAges[lengthOfArr - lengthOfArr] - newAges[lengthOfArr - 1]);
		console.log("Difference of first and last element in newAges[] = " + difference);
// used a loop below to calculate average
// Question 1 part : c
        var ages = [3,9,23,64,2,8,93];
        let sum = 0;
        for(age of ages){
        sum += age;
}
        let total = ages.length;
        let avg = sum/total;
        console.log(avg);
// created a loop below to calculate average amount of chracters in each name in the array, and then printed all names spaced out
// Question 2 part : a & b
        names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
		sum = 0;
		for (i = 0; i < names.length; i++) 
			sum += names.length;
		
		average = sum / names.length;
		console.log("The average number of letters per name in names[] = " + average );

		allNames = "";
		for ( i = 0; i < names.length; i++) {
			allNames += names[i] + " ";
		}
		console.log(allNames);

// Question 3 
console.log("Use array[arr.length] to access the last element of an array");
// Question 4 
console.log("Use array[0] to access the first element of an array");
// Question 5  
nameLengths = [names.length];
		for ( i = 0; i < names.length; i++) {
			nameLengths = names.length; 
		}
// Question 6
nameLengths = [names.length];
sum = 0;
		for ( i = 0; i < nameLengths.length; i++) {
			sum += nameLengths;
		}
		console.log("The sum of all lengths in nameLengths[] = " + sum);


// Question 7 
function repeat(word,  n); 
                { 
		 duplicatedWord = "";
		for ( i = 0; i < n; i++) {
			duplicatedWord += word;
		}
		return ("duplicatedWord() returns => " + duplicatedWord);
}



// Question 8
        
        get fullName( firstName,  lastName); {
    return "getullName() returns => " + firstName + " " + lastName;
}
        console.log(getFullName("Bruce", "Banner"));



// Question 9 
checkIfSumGreaterThan100([] (arr)); {
    return Arrays.stream(arr).sum() > 100;
        console.log("checkIfSumGreaterThan100() returns => " + checkIfSumGreaterThan100(ages));



// Question 10 
        doubleArr = [0.1,1.0,236.4592,1000.1];
		emptyDoubleArr = {};
		console.log("getAverageOfDoubleArr() returns => " + getAverageOfDoubleArr(doubleArr));
		console.log("Passing empty double[] to getAverageOfDoubleArr() returns => " + getAverageOfDoubleArr(emptyDoubleArr));



// Question 11 
        anotherDoubleArr = [2.2, 3.3, 4.4, 5.5];
		console.log("isFirstArrAvgGreater returns => " + isFirstArrAvgGreater(doubleArr, anotherDoubleArr));

        