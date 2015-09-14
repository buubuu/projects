$(document).ready(function(){
	/* hide the span elements*/
	$(".sp1").hide();
	$(".sp2").hide();
	$(".sp3").hide();
	$(".sp4").hide();
	$(".sp5").hide();

	/* show the span elements on keyup() */
	$("#princp").keyup(function(){
		$(".sp1").fadeIn(" slow");
	})
	$("#typeOfp").keyup(function(){
		$(".sp2").fadeIn(" slow");
	})
	$("#aPrValue").keyup(function(){
		$(".sp3").fadeIn(" slow");
	})
	$("#dOp").keyup(function(){
		$(".sp4").fadeIn(" slow");
	})

	/* this checks the value of time and returns noOfPayments as output*/
	function checkTime(){
		time = $("#typeOfp").val();
		dOP = $("#dOp").val();
		if (time == "monthly" || time == "MONTHLY"){/* Calculates for monthly payments in years*/
		 	if ($('#opt2').is(':checked') && dOP != 0) {
		 	 noOfPayments = 12 * dOP;
		 	return noOfPayments;
		 	}
		 	else{
		 		alert("please select YEARS option because you picked a "+ time + " payment method");
		 	}
		}
		else if(time == "weekly" || time == "WEEKLY"){/* Calculates for weekly payments in months*/
		  if ($('#opt1').is(':checked') && dOP != 0){
		 	 noOfPayments = 4 * dOP;
		 	 return noOfPayments;
		 	}
		 else{
		 	alert("please select MONTHS option because you picked a "+ time + " payment method");
		 }
		}
		else{
			alert("Please enter a valid input: weekly or monthly!");
			return;
		}
	}
	/* calculates the rate of interest */
	function genRate(){
		time = $("#typeOfp").val();
		Apr = $("#aPrValue").val();
		if (time == "monthly" || time == "MONTHLY"){
			rate = parseFloat(Apr / 100);
			return rate;
		}
		else if (time == "weekly" || time == "WEEKLY"){
			 rate = parseFloat(Apr / 100);
			 return rate;
		}
	}
	/* calculates the Amortization value */
	function calcAmort(){
		principal = $("#princp").val();
		var newRate = genRate();
		var newNoOfPayments = checkTime();
		var tP = newRate * Math.pow(1 + newRate, newNoOfPayments) ;
		var bP = Math.pow((1 + newRate),newNoOfPayments) - 1;
		Am = principal * tP /bP;
		if (Am != 0 && Am != "NaN"){
			return Am;
		}
		else{
			alert("Pls check your inputs!");
			return;
		}
	}
	/* states the actions to be performed on clicking Submit button */
	$("#Submit").click(function(){
		var aMort = calcAmort();
		$("#Answer").val(Am);
		$(".sp5").fadeIn("slow");
	})

})