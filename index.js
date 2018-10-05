function theBeatlesPlay(musicians, instruments) {
  function accessBeatle(musicians, index) {
   console.log(musicians[index]);
   }
  function accessInstrument(instruments, index) {
   console.log(instruments[index]);
   }

  var bi = [ ];
    for (let i = 0; i < 4; i++) {
	    var b = accessBeatle(i);
	    var n = accessInstrument(i);
		 bi.push("${b} plays the ${n}.");
	}
	
}

 function johnLennonFacts(facts) {
   const gotFacts = [ ];
   let i = 0;
   while (i <facts.length) {
   gotFacts.push(`${facts[i]}!!!`)
   i++;
		}
  return gotFacts;
}




function iLoveTheBeatles(number) {
  var beatleLove = [ ];
  
  do {
    "I love the Beatles!";
    beatleLove.push("I love the Beatles!");
    number++;
  }  
    
  while (number < 15);
  return beatleLove;
}


