
var container = document.getElementById('animContainer');
var animData = {
       container: container,
       renderer: 'svg',
       autoplay: false,
       loop: false,
       path : 'data11.json'
   };
   var anim = bodymovin.loadAnimation(animData);

   container.addEventListener('click',firstLoop);

   function firstLoop(){
   anim.playSegments([0,50], true);
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
  anim.playSegments([180,395], true);
  this.removeEventListener('click', fourthLoop);
    container.addEventListener('click', fifthLoop);
};
function fifthLoop(){
  anim.playSegments([395,540], true);
  this.removeEventListener('click', fifthLoop);
   container.addEventListener('click',firstLoop);
};
