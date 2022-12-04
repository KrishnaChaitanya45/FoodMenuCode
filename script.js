const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const paper1 = document.querySelector(`#p1`);
const paper2 = document.querySelector(`#p2`);
const myDocument = document.querySelector("#menu-container");
const paper3 = document.querySelector(`#p3`);
const paper4 = document.querySelector(`#p4`);
const paper5 = document.querySelector(`#p5`);
const paper6 = document.querySelector(`#p6`);
const paper7 = document.querySelector(`#p7`);
const paper8 = document.querySelector(`#p8`);
const paper9 = document.querySelector(`#p9`);
const paper10 = document.querySelector(`#p10`);
const paper11 = document.querySelector(`#p11`);
const paper12 = document.querySelector(`#p12`);
const paper13 = document.querySelector(`#p13`);
const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");
const fullScreen = document.querySelector("#full-screen");
const controller = document.querySelector("#controller");
const mainContainer = document.getElementsByClassName("main-container")[0];
let currentLocation = 1;
let numOfPapers = 13;
let maxLocation = numOfPapers + 1;
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

function openBook() {
  book.style.transform = "translateX(50%)";
}
function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}
function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;
      case 5:
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        break;
      case 6:
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        break;
      case 7:
        paper7.classList.add("flipped");
        paper7.style.zIndex = 7;
        break;
      case 8:
        paper8.classList.add("flipped");
        paper8.style.zIndex = 8;
        break;
      case 9:
        paper9.classList.add("flipped");
        paper9.style.zIndex = 9;
        break;
      case 10:
        paper10.classList.add("flipped");
        paper10.style.zIndex = 10;
        break;
      case 11:
        paper11.classList.add("flipped");
        paper11.style.zIndex = 11;
        break;
      case 12:
        paper12.classList.add("flipped");
        paper12.style.zIndex = 12;
        break;
      case 13:
        paper13.classList.add("flipped");
        paper13.style.zIndex = 13;
        closeBook();
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
    pageIndicator.innerText = ` ${
      currentLocation < 14 ? currentLocation : currentLocation - 1
    } / ${numOfPapers}`;
  }
}
function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 14;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 13;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 12;
        break;
      case 5:
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 11;
        break;
      case 6:
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 10;
        break;
      case 7:
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 9;
        break;
      case 8:
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 8;
        break;

      case 9:
        paper8.classList.remove("flipped");
        paper8.style.zIndex = 7;
        break;

      case 10:
        paper9.classList.remove("flipped");
        paper9.style.zIndex = 6;
        break;
      case 11:
        paper10.classList.remove("flipped");
        paper10.style.zIndex = 5;
        break;
      case 12:
        paper11.classList.remove("flipped");
        paper11.style.zIndex = 4;
        break;
      case 13:
        paper12.classList.remove("flipped");
        paper12.style.zIndex = 3;
        break;
      case 14:
        paper13.classList.remove("flipped");
        paper13.style.zIndex = 2;
        openBook();
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation--;
    pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
  }
}
let height = 90;
let width = 70;
let scale = 1;
let mobileWidth = 90;
let mobileHeight = 30;
let mobileScale = 1;
let TabScale = 1;
let TabWidth = 80;
let TabHeight = 40;
function zoomInAutomator(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  book.style.scale = Scale + scaleInc;
  mainContainer.style.height = Height + heightInc + "vh";
  mainContainer.style.width = Width + widthInc + "vw";
  
}
function zoomOutAutomator(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  book.style.scale = Scale - scaleInc;
  mainContainer.style.height = Height - heightInc + "vh";
  mainContainer.style.width = Width - widthInc + "vw";
  
}
const mediaQueryTabMax = window.matchMedia("(max-width:1024px)");
const mediaQueryTabMin = window.matchMedia("(min-width:500px)");
const mediaQuery = window.matchMedia("(max-width: 600px)");
function zoomInHandler() {
  if (mediaQuery.matches) {
    if (mobileWidth <= 100 && mobileHeight <= 50 && mobileScale <= 1.3) {
      book.style.width = "45vw";
      book.style.height = "100%";
      zoomInAutomator(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
      
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
    if (TabWidth <= 100 && TabHeight <= 60 && TabScale <= 1.3) {
      book.style.width = "45vw";
      book.style.height = "100%";
      zoomInAutomator(TabScale, TabWidth, TabHeight, 5, 5, 0.005);
    }
  } else {
    if (width <= 95 && height <= 140 && scale <= 1.025) {
      book.style.width = "45vw";
      book.style.height = "100%";
      zoomInAutomator(scale, width, height, 5, 10, 0.005);
      scale += 0.005;
  height += 10;
  width += 5;
      console.log(scale,height,width)
    }
  }
}
function zoomOutHandler() {
  if (mediaQuery.matches) {
    if (mobileHeight > 30 && mobileWidth > 90 && mobileScale > 1) {
      book.style.scale = mobileScale - 0.001;
      mainContainer.style.height = mobileHeight - 5 + "vh";
      mainContainer.style.width = mobileWidth - 2.5 + "vw";
      mobileScale -= 0.001;
      mobileHeight -= 5;
      mobileWidth -= 2.5;
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
    if (TabHeight > 40 && TabWidth > 80 && TabScale > 1) {
      book.style.scale = TabScale - 0.005;
      mainContainer.style.height = TabHeight - 5 + "vh";
      mainContainer.style.width = TabWidth - 5 + "vw";
      TabScale -= 0.005;
      TabHeight -= 5;
      TabWidth -= 5;
    }
  } else {
    if (width > 70 && height > 90 && scale > 1) {
      book.style.width = "40%";
      book.style.height = "90vh";
zoomOutAutomator(scale, width, height, 5, 10, 0.005);
scale -= 0.005;
height -= 10;
width -= 5;
    }
  }
}
let isFullScreen = false;
function FullScreenHandler() {
  if (!isFullScreen) {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    if (mediaQuery.matches) {
      mainContainer.style.width = "100vw";
      mainContainer.style.height = "40vh";
      book.style.height = "40vh";
      box.style.width = "50vw";
    } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
      mainContainer.style.width = "100vw";
      mainContainer.style.height = "70vh";
      book.style.height = "70vh";
      book.style.width = "50vw";
    } else {
      if (myDocument.requestFullscreen) {
        myDocument.requestFullscreen();
        mainContainer.style.width = "98vw";
        mainContainer.style.height = "98vh";
        book.style.height = "98vh";
        book.style.width = "48vw";
        mainContainer.style.marginTop = "5vh";
        mainContainer.style.overflow = "hidden";
        controller.style.display = "none";
      } else if (myDocument.msRequestFullscreen) {
        myDocument.msRequestFullscreen();
      } else if (myDocument.mozRequestFullScreen) {
        myDocument.mozRequestFullScreen();
      } else if (myDocument.webkitRequestFullscreen) {
        myDocument.webkitRequestFullscreen();
      }
      isFullScreen = !isFullScreen;
    }
  } else {
    if (myDocument.exitFullscreen) {
      location.reload();
      myDocument.exitFullscreen();
    } else if (myDocument.msexitFullscreen) {
      location.reload();
      myDocument.msexitFullscreen();
    } else if (myDocument.mozexitFullscreen) {
      location.reload();
      myDocument.mozexitFullscreen();
    } else if (myDocument.webkitexitFullscreen) {
      location.reload();
      myDocument.webkitexitFullscreen();
    }
    isFullScreen = !isFullScreen;
  }
}
zoomIn.addEventListener("click", zoomInHandler);
zoomOut.addEventListener("click", zoomOutHandler);
fullScreen.addEventListener("click", FullScreenHandler);
