
<script src="https://cdn.jsdelivr.net/npm/page-flip@2.0.7/dist/js/page-flip.browser.min.js"></script>
<script>
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const prevBtnBar = document.querySelector("#prev-btn-bar");
const nextBtnBar = document.querySelector("#next-btn-bar");
const bookBar = document.querySelector("#book-bar");
const pageIndicatorBar = document.querySelector('#page-indicator-bar');
const book = document.querySelector("#book");
const pageIndicator = document.querySelector('#page-indicator');
const papers= document.getElementsByClassName('paper');
const nextButton = document.querySelector('#next-button');
const prevButton = document.querySelector('#prev-button');
const myDocument = document.querySelector('#menu-container');
const nextButtonBar = document.querySelector('#next-button-bar');
const prevButtonBar = document.querySelector('#prev-button-bar');
const zoomInBar = document.querySelector('#zoom-in-bar');
const zoomOutBar = document.querySelector('#zoom-out-bar');
const fullScreenBar = document.querySelector('#full-screen-bar');
const controllerBar = document.querySelector('#controller-bar');
const zoomIn = document.querySelector('#zoom-in');
const zoomOut = document.querySelector('#zoom-out');
const fullScreen = document.querySelector('#full-screen');
const controller = document.querySelector('#controller');
const mainContainer = document.getElementsByClassName('main-container')[0];
const pageFlip = new St.PageFlip(book,
{
        width: 400,
        height: 600,
        showCover: true
    }
);
const pageFlipBar = new St.PageFlip(bookBar,
{
        width: 400,
        height: 600,
        showCover: true
    }
);//Make a new flip book object with all the bar menu images
pageFlip.loadFromImages(
['https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg',
'https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg']
);//Load images for Bar  here the lines are get exceeded so i have not done this 
//pageFlipBar.loadFromImages(['--Images Here--'])
function goPrevPage(){
if(currentLocation > 1){
pageFlip.flipPrev();
currentLocation--;
pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
pageIndicatorBar.innerText = ` ${currentLocation} / ${numOfPapers}`;
}
}//Add a new function for bar because this will be same for bar if we dont
function goNextPage(){
if(currentLocation < numOfPapers){
pageFlip.flipNext();
currentLocation++;
pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
pageIndicatorBar.innerText = ` ${currentLocation} / ${numOfPapers}`;
}
}//same goes here
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
nextButton.addEventListener('click',goNextPage);
prevButton.addEventListener('click',goPrevPage);
prevBtnBar.addEventListener("click", goPrevPage);
nextBtnBar.addEventListener("click", goNextPage);
nextButtonBar.addEventListener('click',goNextPage);
prevButtonBar.addEventListener('click',goPrevPage);
let currentLocation = pageFlip.getCurrentPageIndex()+1;//extract information for pageFlipBar like this
let numOfPapers = pageFlip.getPageCount();//same for here
let maxLocation = numOfPapers + 1;//same for her
pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
pageIndicatorBar.innerText = ` ${currentLocation} / ${numOfPapers}`;
//Everything from here remains same for both the Menu's
let height = 90;
let width = 70;
let scale = 1;
let mobileWidth = 90;
let mobileHeight = 30;
let mobileScale = 1;
let TabScale = 1;
let TabWidth = 80;
let TabHeight = 40;
function zoomInAutomator(Scale,Width,Height,widthInc,heightInc,scaleInc){
book.style.scale = Scale + scaleInc;bookBar.style.scale = Scale + scaleInc;
mainContainer.style.height = Height + heightInc + "vh";
mainContainer.style.width = Width + widthInc + "vw";

}
function zoomOutAutomator(Scale, Width, Height, widthInc, heightInc, scaleInc) {
book.style.scale = Scale - scaleInc;bookBar.style.scale = Scale - scaleInc;
mainContainer.style.height = Height - heightInc + "vh";
mainContainer.style.width = Width - widthInc + "vw";
}
const mediaQueryTabMax = window.matchMedia('(max-width:1024px)');
const mediaQueryTabMin = window.matchMedia('(min-width:500px)');
const mediaQuery = window.matchMedia('(max-width: 600px)');
function zoomInHandler() {
if (mediaQuery.matches) {if (mobileWidth <= 100 && mobileHeight <= 50 && mobileScale <= 1.3) {book.style.width = "100%";book.style.height = "100%";zoomInAutomator(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);}
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
    if (TabWidth <= 100 && TabHeight <= 60 && TabScale <= 1.3) {
book.style.width = "100%";book.style.height = "100%";zoomInAutomator(TabScale, TabWidth, TabHeight, 5, 5, 0.005);bookBar.style.width = "100%";bookBar.style.height = "100%";
}}else{
if(width <= 95 && height <= 140 && scale <= 1.025){book.style.width = "100%";book.style.height = "100%";zoomInAutomator(scale, width, height, 5, 10, 0.005);scale += 0.005;bookBar.style.width = "100%";bookBar.style.height = "100%";
  height += 10;
  width += 5;
    }
  }
}
function zoomOutHandler(){
if(mediaQuery.matches){
if(mobileHeight > 30 && mobileWidth > 90 && mobileScale > 1){
zoomOutAutomator(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001)
mobileScale -= 0.001;
mobileHeight -= 5;
mobileWidth -= 2.5;
}
}
else if(mediaQueryTabMin.matches && mediaQueryTabMax.matches){
if(TabHeight > 40 && TabWidth > 80 && TabScale > 1){
zoomOutAutomator(TabScale, TabWidth, TabHeight, 5, 5, 0.005);TabScale -= 0.005;TabHeight -= 5;TabWidth -= 5;
}}
else{
if(width>70 && height>90 && scale>1){book.style.width = "100%";book.style.height = "100%";zoomOutAutomator(scale, width, height, 5, 10, 0.005);bookBar.style.width = "100%";bookBar.style.height = "100%";
scale -= 0.005;
height -= 10;
width -= 5;}}}
let isFullScreen = false;
function FullScreenHandler(){
if(!isFullScreen){const mediaQuery = window.matchMedia('(max-width: 600px)');
    if(mediaQuery.matches){book.style.height = "40vh";book.style.width = "50vw";bookBar.style.height = "40vh";bookBar.style.width = "50vw";
    }else if(mediaQueryTabMin.matches && mediaQueryTabMax.matches){
     book.style.height = "70vh";book.style.width = "50vw";bookBar.style.height = "70vh";bookBar.style.width = "50vw";}
    else{
    if (myDocument.requestFullscreen){
    myDocument.requestFullscreen();
		mainContainer.style.width = "98vw";mainContainer.style.height = "98vh";book.style.height = "100%";book.style.width = "100%";controller.style.display="none";bookBar.style.height = "100%";bookBar.style.width = "100%";controllerBar.style.display="none";} 
    else if (myDocument.msRequestFullscreen){myDocument.msRequestFullscreen();} 
    else if (myDocument.mozRequestFullScreen){
    myDocument.mozRequestFullScreen()}
    else if(myDocument.webkitRequestFullscreen){
    myDocument.webkitRequestFullscreen();}
    }isFullScreen=!isFullScreen}
}
   document.addEventListener('keydown',(event)=>{
   if(event.key === "e" && isFullScreen){
    document.exitFullscreen()
      .then(() => location.reload())
      .catch((err) => console.error(err));
  }});
zoomIn.addEventListener('click',zoomInHandler);
zoomOut.addEventListener('click',zoomOutHandler);
fullScreen.addEventListener('click',FullScreenHandler);
zoomInBar.addEventListener('click',zoomInHandler);
zoomOutBar.addEventListener('click',zoomOutHandler);
fullScreenBar.addEventListener('click',FullScreenHandler);
document.getElementById('bar-btn').addEventListener('click',()=>{
 document.getElementById('food-btn').style.backgroundColor = "transparent"; document.getElementById('food-btn').style.color = "black"; document.getElementById('bar-btn').style.backgroundColor = "black"; document.getElementById('bar-btn').style.color = "white";
});
document.getElementById('food-btn').addEventListener('click',()=>{
 document.getElementById('bar-btn').style.backgroundColor = "transparent"; document.getElementById('bar-btn').style.color = "black";document.getElementById('food-btn').style.backgroundColor = "black"; document.getElementById('food-btn').style.color = "white";
});
</script>