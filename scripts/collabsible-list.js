
var coll = document.getElementsByClassName("collapsible__button");
var i;

for (i = 0; i < coll.length; i++) {
    
    coll[i].addEventListener("click", function() {

        this.classList.toggle("active");
        
        if(this.classList.contains("active")){
            this.innerHTML = "-  Hide audio clips";
        }else{
            this.innerHTML = "+  Show audio clips"
        }

        var content = this.nextElementSibling;
        
        if (content.style.display === "block") {
        content.style.display = "none";
        } else {
        content.style.display = "block";
        }
    
    });
        }