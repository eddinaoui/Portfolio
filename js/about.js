function cls(f,s,t,d,r){
    var lines=document.querySelectorAll('#line');
    for(let i=0;i<lines.length;i++){lines[i].classList.remove(f,s,t,r);lines[i].classList.add(d);}
    var l1=document.querySelector(".l1");l1.classList.add(f);
    var l2=document.querySelector(".l2");l2.classList.add(s);
    var l3=document.querySelector(".l3");l3.classList.add(t);
}
window.addEventListener('scroll',function(){
  var w=this.pageYOffset;
  console.log('Yoffset: '+w);
  if(w<200){
      var fe='up';var se='down';var te='down';var ad='white';var re='black';
      window.localStorage.setItem('o1',ad);window.localStorage.setItem('o2',re)
      window.localStorage.setItem('pr',fe);window.localStorage.setItem('se',se)
      window.localStorage.setItem('te',te)
  }
  else if(w>200 && w<900){
      var fe='down';var se='up';var te='down';var ad='black';var re='white';
      window.localStorage.setItem('o1',ad);window.localStorage.setItem('o2',re)
      window.localStorage.setItem('pr',fe);window.localStorage.setItem('se',se)
      window.localStorage.setItem('te',te)
  }
  else{
      var fe='down';var se='down';var te='up';var ad='black';var re='white';
      window.localStorage.setItem('o1',ad);window.localStorage.setItem('o2',re)
      window.localStorage.setItem('pr',fe);window.localStorage.setItem('se',se)
      window.localStorage.setItem('te',te)
  }
  var ad=localStorage.getItem('o1');var re=localStorage.getItem('o2');
  var pr=localStorage.getItem('pr');var sr=localStorage.getItem('se')
  var tr=localStorage.getItem('te')
  cls(pr,sr,tr,ad,re)
})
var width=50;
function move(target,perc,dur){
    var elem=document.querySelector(target)
    var num=document.querySelector(`${target}>p`)
        var tm=setInterval(frame,dur);
        function frame(){
            if(width>=perc){
                clearInterval(tm)
                width=perc;
                $(elem).css('width',width+'%')
                num.innerHTML=width+'%';
            }else{
                width++
                $(elem).css('width',width+'%')
                num.innerHTML=width+'%';
            }
        }
        // elem.style.maxWidth=perc+'%';
    }

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document. documentElement.clientWidth)
        );
    }
    
window.addEventListener('scroll',function(){
    var skills=document.querySelector('.pg3')
    if(isElementInViewport(skills)){
        setTimeout(() => {
            move(".la1 #bar",90,120);move(".la2 #bar",70,120);
            move(".la3 #bar",80,120);move(".la4 #bar",60,120);
            move(".la5 #bar",60,120);move(".pro1 #bar",90,120);
            move(".pro2 #bar",70,120)
        }, 1000);
    }else{
            move(".la1 #bar",10,50);move(".la2 #bar",10,50);
            move(".la3 #bar",10,50);move(".la4 #bar",10,50);
            move(".la5 #bar",10,50);move(".pro1 #bar",10,50);
            move(".pro2 #bar",10,50)
    }
})

var can1=document.querySelector('.can1')
var stele=getComputedStyle(can1)
$('.p1>h1').css('left',stele.left)