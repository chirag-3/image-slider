let images = document.getElementsByTagName('img');
let currentImage = 0;
let l = images.length;

for(let i=0;i<l;i++)
  images[i].style.display = 'none';

images[currentImage].style.display = 'inline';

let navigateLeft = document.getElementsByClassName('left')[0];
let navigateRight = document.getElementsByClassName('right')[0];

navigateLeft.addEventListener('click',function(){
    images[currentImage].style.display = 'none';
    let next = currentImage - 1;
    if(next==-1)
      currentImage = l-1;
    else
      currentImage = next;
    images[currentImage].style.display = 'inline';
});

navigateRight.addEventListener('click',function(){
    images[currentImage].style.display = 'none';
    let next = currentImage + 1;
    if(next==l)
      currentImage = 0;
    else
      currentImage = next;
    images[currentImage].style.display = 'inline';
})
