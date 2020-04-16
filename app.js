var container = document.getElementById('animContainer');
var animData = {
       container: container,
       renderer: 'svg',
       autoplay: false,
       loop: false,
       path : 'data4.json'
   };
   var anim = bodymovin.loadAnimation(animData);
setTimeout(function(){
  anim.playSegments([0,50],true); 
  container.addEventListener('click', firstLoop); }, 2000);


   function firstLoop(){
   anim.playSegments([0,50],true);
   this.removeEventListener('click', firstLoop);
   container.addEventListener('click', secondLoop);
   };

function secondLoop(){
  anim.playSegments([50,151], true);
  this.removeEventListener('click', secondLoop);
  container.addEventListener('click', thirdLoop);
};

function thirdLoop() {
    anim.playSegments([151,180], true);
    this.removeEventListener('click', thirdLoop);
      container.addEventListener('click', fourthLoop);
};
function fourthLoop(){
  anim.playSegments([180,275], true);
  this.removeEventListener('click', fourthLoop);
    container.addEventListener('click', fifthLoop);
};
function fifthLoop(){
  anim.playSegments([275,390], true);
  this.removeEventListener('click', fifthLoop);
  container.addEventListener('click', firstLoop);
};
anim.addEventListener('DOMLoaded',startAnimation);
function startAnimation(){
       anim.playSegments([[0,50],[50,151]],true);
   }
