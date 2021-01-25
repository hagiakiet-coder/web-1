document.addEventListener("DOMContentLoaded",function() {
    var back = document.querySelectorAll('div.back-to-top');
    var back = back[0];
       
        var status=" < 300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 800){
            if(status == " < 300")
            {
                status=" > 680";
                back.classList.add('back-2-top');
            }
        }
        else if (x < 200){
            if(status==" > 680"){
            back.classList.remove('back-2-top');
            status=" < 300";}
        }
    
    })
})   
