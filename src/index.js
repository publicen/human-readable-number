module.exports = function toReadable (number) {
  let arrNum = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrDes = ['','ten', 'twenty','thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
if (number<0 || number>999) return 'Error input. Try 0-999.'
else
   if (number<20) return arrNum[number];
	else	
        if (number >= 20 && number < 100) {
		    if (number % 10 === 0) return arrDes[number / 10 ];
	  		    else return `${arrDes[Math.trunc(number / 10)]} ${arrNum[number % 10]}`;
	    }
	    else 
            if (number >= 100 && number < 1000) {
	            if (number % 100 === 0) return `${arrNum[number / 100]} hundred`;
	    	       else 
                       if (number % 100 < 20) return `${arrNum[Math.trunc(number / 100)]} hundred ${arrNum[number % 100]}`; 
	                    else
                            if (number % 10 === 0) return `${arrNum[Math.trunc(number / 100)]} hundred ${arrDes[number % 100 / 10]}`;     
	                            else return `${arrNum[Math.trunc(number / 100)]} hundred ${arrDes[Math.trunc(number / 10) % 10]} ${arrNum[number % 10]}`;     
            }
}

