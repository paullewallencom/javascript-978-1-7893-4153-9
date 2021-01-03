var UIModule = (function(){
    
    //classes used to select HTML elements
    var DOMElements = {
        //indicators - test control
        timeLeft:'', //HTML element displaying time left
        //test results
        wpm:'',
        wpmChange:'',
        cpm:'',
        cpmChange:'',
        accuracy:'',
        accuracyChange:'',
        //user input
        textInput:'',
        nameInput:'',
        //test words
        content:document.getElementById('content'),
        activeWord:'',
        //modal
        modal:''
    };

    var splitArray = function(string){
        return string.split('');
    };
    
    var addSpace = function(array){
        array.push(' ');
        return array;
    };
    
    var addSpanTags = function(array){
        return array.map(function(currentCharacter){
            return '<span>' + currentCharacter + '</span>';
        });
    };
    
    var addWordSpanTags = function(array){
        array.push('</span>');
        array.unshift('<span>');
        return array;
    };
    
    var joinEachWord = function(array){
        return array.join('');
    };
    
    return {
        
    //get DOM elements
        
        getDOMElements: function(){},
        
    //Indicators - Test Control
    
        updateTimeLeft: function(){},
        
    //results
        
        updateResults: function(){}, 
        
        fillModal: function(){}, 
        
        showModal: function(){},
        
    //user input
    
        inputFocus: function(){}, 
        
        isNameEmpty: function(){},
        
        flagNameInput: function(){},   
    
        spacePressed: function(){}, 
        
        enterPressed: function(){}, 
        
        emptyInput: function(){},  
    
        getTypedWord: function(){},
        
    //test words
    
        fillContent: function(array, lineReturn){
            //['word1,', 'word2']
            var content = array.map(splitArray);
            console.log(content);
            //[['w', 'o', 'r', 'd', '1', ',' ], ['w', 'o', 'r', 'd', '2']]
            content = content.map(addSpace);
            console.log(content);
            //[['w', 'o', 'r', 'd', '1', ',', ' ' ], ['w', 'o', 'r', 'd', '2', ' ']]
            content = content.map(addSpanTags);
            console.log(content);
            //[['<span>w</span>', '<span>o</span>', '<span>r</span>', '<span>d</span>', '<span>1</span>', '<span>,</span>', '<span> </span>'], ['<span>w</span>', '<span>o</span>', '<span>r</span>', '<span>d</span>', '<span>1</span>', '<span> </span>']]
            content = content.map(addWordSpanTags);
            console.log(content);
            //[['<span>', '<span>w</span>', '<span>o</span>', '<span>r</span>', '<span>d</span>', '<span>1</span>', '<span>,</span>', '<span> </span>', '</span>'], ['<span>', '<span>w</span>', '<span>o</span>', '<span>r</span>', '<span>d</span>', '<span>1</span>', '<span> </span>', '</span>']]
            content = content.map(joinEachWord);
            console.log(content);
            content = content.join('');
            console.log(content);
            
            //<span><span>w</span><span>o</span><span>r</span><span>d</span><span>1</span><span>,</span><span> </span></span><span><span>w</span><span>o</span><span>r</span><span>d</span><span>2</span><span> </span></span>
            
            
            //replace the line return special code with the HTML entity (line return)
            
            // <span>|</span>
            // <span>&crarr;</span>
//            content = content.replace('<span>|</span>', '<span>&crarr;</span>');
            //split, join
            content = content.split('<span>' + lineReturn + '</span>').join('<span>&crarr;</span>');
            
            
            //fill content
            DOMElements.content.innerHTML = content;
        }, 
        
        formatWord: function(wordObject, wordHTML){}, 
        
        setActiveWord: function(index){}, 
        
        deactivateCurrentWord: function(){}, 
        
        scroll: function(){}
        
    }
})();