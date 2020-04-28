$(document).ready(function(){

    var hofEntries = $(".hofEntry");
    var hofImages = $(".hofImage"); 
    
    var showEntry = function(){
    
    
    
        // fjerner display på alle entries
        for(i = 0; i < hofEntries.length; i++){
            hofEntries[i].style.display = "none";
        }
    
        for(i = 0; i < $(".active").length; i++){
            $(".active")[i].classList.remove("active");
        }
    
        this.classList.add("active");
    
        // tilføjer active til den entry som matcher
        id = "entry-" + this.id;    
        
        hofEntry = document.getElementById(id);
        hofEntry.style.display = "flex";        
    
    }
    
    // Give all hofImages the onclick function.
    for(i = 0; i < hofImages.length; i++){
        hofImages[i].onclick = showEntry;
    }
    


});


