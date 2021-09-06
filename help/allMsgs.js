function allMsgs(){
	const allMsgsObj = {
					  "m-number": {
						  "error":"This field is required",
						  "minimum_value_error":"Please choose number greater than/equal to {min_val}",
						  "maximum_value_error":"Please choose number less than/equal to {max_val}",
					  },
					  "contact-person": {
						 "error":"This field is required" 
					  }
					}

	return allMsgsObj;
}
const templateAllMsgs = allMsgs();