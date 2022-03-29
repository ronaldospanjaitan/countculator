       
        function insert(num){
            cal.field.value = cal.field.value + num
            console.log(cal.field.value)
       }
  
       function equal(){
            
            cal.field.value = eval(cal.field.value)
           
       }
  
       function clean(){ 
            cal.field.value = ""
       }
  
       function back(){ 
            cal.field.value = cal.field.value.substring(0, cal.field.value.length -1)
          
       }