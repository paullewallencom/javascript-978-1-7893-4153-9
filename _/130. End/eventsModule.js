var eventsModule = (function(dModule, uModule, cModule, wModule){
    var addEventListeners = function(){

        //character typing event listener

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
            
            //set active Word: UI Module
            
            //format the active word: UI Module
            
            //focus on text input: UI Module
            
            
            //add avent listeners
            addEventListeners();
        }
    };
             
        
})(dataModule, UIModule, certificateModule, wordsModule);