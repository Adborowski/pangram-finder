function isPangram(string){

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const alphabetArray = alphabet.split('');
    const result = {};
    
    string = string.toLowerCase();
    const stringArray = string.split('');
     
     stringArray.forEach((item)=>{
         
       if (alphabetArray.includes(item)){
        //  console.log("Letter "+item+" is present");
         alphabetArray.splice(alphabetArray.indexOf(item), 1);
       }
    
      });
       
       // show which letters haven't been used
       console.log("letters left: "+alphabetArray.length+" "+alphabetArray);
       result.lettersLeft = alphabetArray; 
    
       if (alphabetArray.length == 0) {result.value = true} else {result.value = false};
       return result;
       
    }
    
    console.log(isPangram("the quick brown fox jumps over a lazy dog"))
    
    const submitButton = document.getElementById("submit");
    
    submitButton.addEventListener("click", function(e){
    
        e.preventDefault();
        const inputValue = document.getElementById("txtSentence").value;
        const result = isPangram(inputValue);
        console.log(result);
    
        if(result.value == true){
            document.querySelector("#result").innerHTML = "<br>'"+inputValue+"' is a pangram";
        } else {
            document.querySelector("#result").innerHTML = "<br>'"+inputValue+"' is not a pangram. <br><br>Letters remaining: "+result.lettersLeft;
    
        }
        
    })