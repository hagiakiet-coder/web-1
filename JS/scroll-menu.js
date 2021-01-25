document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.header-nav');
    var menu = menu[0];
       
        var status=" < 300";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 180){
            if(status == " < 300")
            {
                status=" > 680";
                menu.classList.add('menutora');
            }
        }
        else if (x < 200){
            if(status==" > 680"){
            menu.classList.remove('menutora');
            status=" < 300";}
        }
    
    })
})   
