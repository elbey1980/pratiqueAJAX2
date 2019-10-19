/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* global vtc */

function initRequest(){
    if (window.XMLHttpRequest){
        if (navigator.userAgent.indexOf('MSIE')!=-1) {
            isIE = true;
        }
        return new XMLHttpRequest();
    } else if (window.ActiveXobject) {
        isIE = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
        
    }
}

var requete;
function calculer()
{
    requete = new XMLHttpRequest();
    vtc=document.maForm.vtc.value;
    url="ConvertirTemp";
    requete.open("POST",url,true);
    requete.onreadystatechange = afficher;
    requete.setRequestHeader('Content-type','application/x-www-form-urlencoded');
   var parametres="vtc="+vtc;
    requete.send(parametres);
}

function afficher(){
    console.log('message');
    if((requete.readyState == 4)&& (requete.status == 200)) 
    {
        alert(requete.responseText);
        document.maForm.resultat.value=requete.responseText;
        document.getElementById("res").innerHTML=requete.responseText;
    }
}