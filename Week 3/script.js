
    var offset = 0
    function validateForm() {
        var radioButtons = document.getElementsByName("timezone");
        var output = (radioButtons[0].value);
        
        for (var i = 0; i < radioButtons.length; i++) {
            
            if (radioButtons[i].checked == true) {
                output = (radioButtons[i].value);
                //document.getElementById("result").innerHTML = output;//#endregion
                switch (output) {
            case "est":
            offset = -4;
            break;
            case "cst":
            offset = -5;
            break;
            case "mst":
            offset = -6;
            break;
            case "pst":
            offset = -7;
            break;
            case "ast":
            offset = -8;
            break;
            case "hst":
            offset = -10;
            break;
            default:
            offset = 0;
            break;
            }
            
            }
        
             
        }
    
        
    }
   /* function digitalClock() {
        var today = new Date();
        var hour = today.getHours() + offset;
        var minute = ('0' + today.getMinutes()).slice(-2);
        var second = ('0' + today.getSeconds()).slice(-2);
        var time = hour + ":" + minute + ":" + second;
        //document.getElementById("clock").innerHTML = time;
        setTimeout(() => {
            digitalClock();
        }, 1000);
    
}
    digitalClock();
*/

