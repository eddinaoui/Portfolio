// var circle=document.querySelector('.circle');
// window.addEventListener('load',function(){var n=0;window.localStorage.setItem('n',n)})
window.addEventListener('scroll',function(){
  var w=this.pageYOffset;
  console.log('w :'+w);
  if(w>200){
    curs(2)
      //gg();var n=88;window.localStorage.setItem('n',n)
    }else{
      curs(6)
      //FF();var n=0;window.localStorage.setItem('n',n)
    }
  })
function curs(cu){this.document.getElementById('cursor').style.zIndex=cu
    this.document.getElementById('cursor').style.zIndex=cu
}
//   function gg(){
//     circle.style.transform='scale(1.3)';
//     $('.oWrap').css('justify-content','center')
//   }
//   function FF(){
//     $('.oWrap').css('justify-content','flex-end')
//     circle.style.transform='scale(1)';
//   }
  
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
}
function dispe(){
  if(isElementInViewport(scrolle)){
      $('.scroll>hr').css('top','0%');$('.scroll>hr').css('visibility','visible')
      setTimeout(()=>{$('.scroll>h5').css('left','0%');$('.scroll>h5').css('visibility','visible')},1000);
  }else{$('.scroll>hr').css('top','80%');$('.scroll>hr').css('visibility','hidden')
      $('.scroll>h5').css('left','-10%');$('.scroll>h5').css('visibility','hidden')
  }
}
var scrolle=document.querySelector('.scroll>h5')
window.addEventListener('load',function(){curs(6);setTimeout(()=>{dispe();},4000);})
window.addEventListener('scroll',function(){dispe();})
  // var cons=document.querySelectorAll('.img_container')
  // for(let i=0;i<cons.length;i++){
    //   cons[i].addEventListener('mouseover',function(){
      //     let div = document.createElement('div');
      //     div.setAttribute("id","cursore")
      //     this.append(div);
      //     let mouseCursor = document.getElementById('cursore');
      //     window.addEventListener("mousemove",cursor);
      //     function cursor(l){
//         mouseCursor.style.top = (l.pageY) +'px';
//         mouseCursor.style.left= (l.pageX) +'px';
//     }
//   })
// }
// var img3=document.querySelector('.img3');
// img3.addEventListener('mouseover',
//       function (){
//         img3.style.transform="scale(.7) rotate(45deg)";
//         setTimeout(() => {
//           img3.style.background=" conic-gradient(from 90deg, rgba(108, 117, 125,0),rgb(108, 117, 125))";
//         }, 500);
//       }
// )
// function movingShad(){
//   document.body.addEventListener("mousemove",cursor);
//   function cursor(e){
//     var n=localStorage.getItem('n')
//     let f=(e.pageY)-((e.pageY)-((e.pageY)/10));
//     let Y=(f-n)-(88/2);
//     let c=(e.pageX)-((e.pageX)-((e.pageX)/10));
//     let X=c-63;
//       circle.style.boxShadow = `inset ${X+'px'} ${Y+'px'} 6px rgba(73, 49, 49, 0.26)`;
//   }
// }
// movingShad();