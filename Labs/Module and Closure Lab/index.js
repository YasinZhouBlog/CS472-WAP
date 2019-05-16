"use strict";
window.onload = function(){
    var btn = this.document.getElementById("create-new-account");
    btn.onclick = createAccountModule;
}


var accountInfoList = [];
var index = 0;
function createAccountModule(){
    var myaccouninfo = (function(){
        var accname = document.getElementById("account-name").value;
        var depositamount = document.getElementById("deposit-balance").value;
        return{
            account : function(){return accname;},
            deposit : function(){return depositamount;}
        }
    })();
    var textarea = document.getElementById("text-area");
    accountInfoList[index] = "The account name is " + myaccouninfo.account() + " and the amount deposited is " + myaccouninfo.deposit();
    var displaytext = "";
    for(var i = 0; i < accountInfoList.length; i++) {
        displaytext += accountInfoList[i] + "\n";
    }
    textarea.value = displaytext;
    index++;
}
