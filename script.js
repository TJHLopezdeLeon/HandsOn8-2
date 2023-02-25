/*Hands-on Project 8-2
TJ H Lopez de Leon
02/25/23*/

//4
"use strict";
//var newAccountArray = {};
//8-2.4
var newAccountObject = {};
var newAccountSubmission;

//5
function createID() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    var account = document.getElementById("accountidbox");
    var fields = document.getElementsByTagName("input");
    var acctid;
    var firstInit;
    var lastInit;
    //6
    if (fname !== "" && fname != null || lname !== "" && lname != null || zip !== "" && zip != null) {
        firstInit = fname.value.charAt(0).toUpperCase();
        lastInit = lname.value.charAt(0).toUpperCase();
        acctid = firstInit + lastInit + zip.value;
        account.value = acctid;
        //8-2.5
        //newAccountArray = [];
        newAccountObject = {};
        for (var i=0; i<fields.length -1; i++) {
            //8-2.6
            //newAccountArray.push(fields[i].value);
            newAccountObject[fields[i].name] = fields[i].value;
        }
    }
}

//8-2.7
function createString() {
    newAccountSubmission = JSON.stringify(newAccountObject);
    //document.write(newAccountSubmission);
}

//7
function createEventListeners() {
    var fname = document.getElementById("fnameinput");
    var lname = document.getElementById("lnameinput");
    var zip = document.getElementById("zipinput");
    if(fname.addEventListener){
        fname.addEventListener("change",createID,false);
        lname.addEventListener("change",createID,false);
        zip.addEventListener("change",createID,false);
    } else if(fname.attachEvent) {
        fname.attachEvent("onchange",createID);
        lname.attachEvent("onchange",createID);
        zip.attachEvent("onchange",createID);
    }
    //8-2.8
    var button = document.getElementById("submitBtn");
    if (button.addEventListener) {
        button.addEventListener("click", createString, false);
    } else if (button.attachEvent) {
        button.attachEvent("onclick", createString);
    }
}
if(window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if(window.attachEvent) {
    window.attachEvent("onload",createEventListeners);
}
