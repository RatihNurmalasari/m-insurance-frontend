import $ from 'jquery';

export function ajaxRequest(url,type,successCallback, errorCallback)  {
    var options = {
        url:  url,
        dataType: 'json',
        cache: false,
        type: 'get',
        beforeSend: function(xhr){xhr.setRequestHeader('clientID', 'menulife');
                                  xhr.setRequestHeader('tokenID', 'MANULIFEWEBAPP');
                                  xhr.setRequestHeader('sessionID', 'xsiood34567$232')},
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
    $.support.cors = true;
    $.ajax(options);
}