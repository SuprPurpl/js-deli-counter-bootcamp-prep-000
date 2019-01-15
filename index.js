//DELI!

var katzDeli=[];
var otherDeli=["Steven", "Blake", "Avi"];

//Step 1: "Take a number"

function takeANumber(array,entry){
array.push(entry);
return `Welcome, ${entry}. You are number ${array.length} in line.`;
}


//Step 2: "Get served"

function nowServing(array) {
	if (array.length <= 0){
		console.log('There is nobody waiting to be served!');
    }else{ 
		console.log(array[0]);
		array.shift(array[0]);
	}
}


function emptyline(){
  return "There is nobody waiting to be served!"
}




