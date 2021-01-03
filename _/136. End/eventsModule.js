var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){

        //character typing event listener
        uModule.getDOMElements().textInput.addEventListener('input', function(event){
            
            //if the test ended, do nothing
            if(dModule.testEnded()){
                return;
            }
            
            //if the test has not started yet, start the test and countdown
            if(!dModule.testStarted()){
                //start the test
            }
            
            //get typed word: UI module
            var typedWord = uModule.getTypedWord();
            
            //update current word: data module
            dModule.updateCurrentWord(typedWord);
            
            //format the active word
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            //check if the user pressed space or enter
            if(uModule.spacePressed() || uModule.enterPressed()){
                
                //empty text input
                
                //deactivate current word
                
                //move to a new word: data module
                
                //set active word: UI module
                
                //format the active word: UI module
                
                //scroll word into the middle view
            }
        });
        //click on download button event listener

    };

                    
    return {
        //init function, initializes the test before start
        init: function(duration, textNumber){
            
            //fill the list of test words: data Module
          
            var words = wModule.getWords(textNumber);
            dModule.fillListOfTestWords(textNumber, words);
            
            //fill the list of test words: UI Module
            var lineReturn = dModule.getLineReturn();
            var testWords = dModule.getListofTestWords();
            uModule.fillContent(testWords, lineReturn);
            
            //set the total test time: data Module
            dModule.setTestTime(duration);
            
            //update time left: data Module
            dModule.initializeTimeLeft();
            
            //update time left: UI module
            var timeLeft = dModule.getTimeLeft();
            uModule.updateTimeLeft(timeLeft);
            
            //move to a new word: data Module
            dModule.moveToNewWord();
            
            //set active Word: UI Module
            var index = dModule.getCurrentWordIndex();
            uModule.setActiveWord(index);
            
            //format the active word: UI Module
            var currentWord = dModule.getCurrentWord();
            uModule.formatWord(currentWord);
            
            //focus on text input: UI Module
            uModule.inputFocus();
            
            //add avent listeners
            addEventListeners();
        }
    };
             
        
})(dataModule, UIModule, certificateModule, wordsModule);