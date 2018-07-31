$(document).ready(function () {
$("#loginbutton").click(function (e){
		                               e.preventDefault
                                    if($("#wrapper").hasClass("toggledregister")){
		                               $("#wrapper").removeClass("toggledregister")
                                       $("#wrapper").addClass("toggledlogin")
                                        }
                                    else if($("#wrapper").hasClass("toggledlogin")){
                                        $("#wrapper").removeClass("toggledlogin")
                                    }
                                    else{
                                        $("#wrapper").addClass("toggledlogin")
                                    }
                                    
		                               });
$("#registerbutton").click(function (e){
		                               e.preventDefault
		                               if($("#wrapper").hasClass("toggledlogin")){
                                           $("#wrapper").removeClass("toggledlogin")
                                           $("#wrapper").addClass("toggledregister")
                                       }
                                        else if($("#wrapper").hasClass("toggledregister")){
                                        $("#wrapper").removeClass("toggledregister")
                                    }
                                       else{
                                            $("#wrapper").addClass("toggledregister")
                                       }
		                               
                                       });
            
 })