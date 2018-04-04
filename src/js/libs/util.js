    
    
/**
 * author:mj
 */

import $ from 'jquery';
var B64 = require('js-base64').Base64;


class Util{
    constructor(){

    }

    
    request(type,url, data, success, complete, error, dataType){
            success = success || function(){};
            return $.ajax({
                url : url,
                data : data,
                dataType : dataType || 'json',
                //contentType: "application/json",
                cache : false,
                timeout : 120000,
                xhrFields: {
                    //withCredentials: true
                },
                complete : function(){
                    complete && complete.call(this);
                },
                type : type.toUpperCase(),
                error : function(){
                    console.log("-error-");
                    error && error.call(this, {
                        code : 99
                    });
                },
                success : function(data){
                    if(data.response){
                        data = data.response;
                        if(data.code != undefined && data.code == 0){
                            success.call(this, data);
                        }else{
                            error && error.call(this, data);
                        }
                    }else{
                        error && error.call(this, {
                            code : 99
                        });
                    }
                }
            });
    }


    Base64(){
        return B64;
    }







}




export default new Util();


    
    
    
    
    