function daa() {
	document.getElementById('demo').innerHTML="dadadsda";
}

		var cost = 25;
// declaring these globally below helps in further use

  var  p = document.getElementById("out");
  console.log(typeof input)


function update(value) {
    var totalcost = (cost * value); // you had redeclared `cost` here in local scope
    p.innerHTML = totalcost; // set value of `totalcost` to `span` using `.innerHTML` property
    return totalcost;
}

// input.oninput =  function(){                // when something in input
//     var val = parseFloat(input.value, 10); // get the value from `input` 
//     update(val); // update the value of `span`

function f()
{
	var input = document.getElementById('ooo').value;
	// var val = parseFloat(input, 10); // get the value from `input` 
	console.log(input) ;var val = input;
    update(val); // update the value of `span`
}

function sumbit() {
    	document.getElementById('out').innerHTML;
      
    }


