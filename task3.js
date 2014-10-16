$(document).ready(function (argument) {  

       $('.form-horizontal').on('submit', function(event){
            event = event || window.event;
            var target = event.target || event.srcElement;
           
            event.preventDefault();

            var comment = target.elements[0].value;                        
            if (comment == '' || comment == false) return false; // игнорировать пустой submit
            var date = new Date();
            var formated_date = date.format("isoDateTime");            
            var currentForm = target.name;

            var currentTable = document.getElementById(currentForm);
            $(currentTable)
                .find('tbody tr')
                .each(function(){
                var flag = true;
                $(this).find('td').each(function(){
                   if ( $(this).html() == false) {
                   $(this)
                        .text(comment)
                        .next()
                        .text(formated_date); 

                   flag = false;                 
                   return false;
                    } 
                })
                if (flag == false) {
                    return false;
                }
            })

             


            target.reset();
        });
     
    });