import $ from 'jquery';

export function ajaxRequest(url,postBody,methodType,successCallback, errorCallback)  {
    var options = {
        url:  url,
        dataType: 'json',
        cache: false,
        type: methodType,
        beforeSend: function(xhr){xhr.setRequestHeader('clientID', 'menulife');
                                  xhr.setRequestHeader('tokenID', 'MANULIFEWEBAPP');
                                  xhr.setRequestHeader('sessionID', 'xsiood34567$232');
                                  xhr.setRequestHeader('Content-Type','application/json')
                                 },
        success: function(response, textStatus, xhr) {
            if(successCallback !== null) {
                successCallback(response, textStatus);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            if(errorCallback){
                errorCallback(jqXHR);
            }
        }
    };
    if(methodType !== "GET" && postBody){
        options["data"] = JSON.stringify(postBody);
    };
    $.support.cors = true;
    $.ajax(options);
}