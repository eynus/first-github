var tabs=document.querySelectorAll('.info-box li a');
var panels=doucument.querySelectorAll('info-box article');
for(i=0;i<tabs.length;i++){
    var tab=tabs[i];
    setTabHandler(tab,i);
}
function setTabHandler(tab,tabpos){
    tab.onclick=fuction(){
        for(i=0;i<tabs.length;i++){
            if(tabs[i].getAttribute('class')){
                tabs[i].removeAttribute('class');
            }
        }
        tab.setAttribute('class','active');
        for(i=0;i<panels.length;i++){
            if(panels[i].getattrbute('class')){
                panels[i].removeAttribute('class');
            }
        }
        panels[tabpos].setAttribute('class','active');
    }
}

