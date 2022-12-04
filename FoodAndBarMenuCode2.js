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
const pageIndicator = document.querySelector("#page-indicator");
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
pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
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
    pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
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
      book.style.width = "100%";
      book.style.height = "100%";
      zoomInAutomator(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
    if (TabWidth <= 100 && TabHeight <= 60 && TabScale <= 1.3) {
      book.style.width = "100%";
      book.style.height = "100%";
      zoomInAutomator(TabScale, TabWidth, TabHeight, 5, 5, 0.005);
    }
  } else {
    if (width <= 95 && height <= 140 && scale <= 1.025) {
      book.style.width = "100%";
      book.style.height = "100%";
      zoomInAutomator(scale, width, height, 5, 10, 0.005);
      scale += 0.005;
      height += 10;
      width += 5;
    }
  }
}
function zoomOutHandler() {
  if (mediaQuery.matches) {
    if (mobileHeight > 30 && mobileWidth > 90 && mobileScale > 1) {
      zoomOutAutomator(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
      mobileScale -= 0.001;
      mobileHeight -= 5;
      mobileWidth -= 2.5;
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
    if (TabHeight > 40 && TabWidth > 80 && TabScale > 1) {
      zoomOutAutomator(TabScale, TabWidth, TabHeight, 5, 5, 0.005);
      TabScale -= 0.005;
      TabHeight -= 5;
      TabWidth -= 5;
    }
  } else {
    if (width > 70 && height > 90 && scale > 1) {
      book.style.width = "100%";
      book.style.height = "100%";
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
      book.style.height = "40vh";
      book.style.width = "50vw";
    } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
      book.style.height = "70vh";
      book.style.width = "50vw";
    } else {
      if (myDocument.requestFullscreen) {
        myDocument.requestFullscreen();
        mainContainer.style.width = "98vw";
        mainContainer.style.height = "98vh";
        book.style.height = "100%";
        book.style.width = "100%";
        controller.style.display = "none";
      } else if (myDocument.msRequestFullscreen) {
        myDocument.msRequestFullscreen();
      } else if (myDocument.mozRequestFullScreen) {
        myDocument.mozRequestFullScreen();
      } else if (myDocument.webkitRequestFullscreen) {
        myDocument.webkitRequestFullscreen();
      }
    }
    isFullScreen = !isFullScreen;
  }
}
zoomIn.addEventListener("click", zoomInHandler);
zoomOut.addEventListener("click", zoomOutHandler);
fullScreen.addEventListener("click", FullScreenHandler);

const prevBtnBar = document.querySelector("#prev-btn-bar");
const nextBtnBar = document.querySelector("#next-btn-bar");
const bookBar = document.querySelector("#book-bar");
const pageIndicatorBar = document.querySelector("#page-indicator-bar");
const myDocumentBar = document.querySelector("#menu-container-bar");
const nextButtonBar = document.querySelector("#next-button-bar");
const prevButtonBar = document.querySelector("#prev-button-bar");
const zoomInBar = document.querySelector("#zoom-in-bar");
const zoomOutBar = document.querySelector("#zoom-out-bar");
const fullScreenBar = document.querySelector("#full-screen-bar");
const controllerBar = document.querySelector("#controller-bar");
const paperBar1 = document.querySelector(`#pb1`);
const paperBar2 = document.querySelector(`#pb2`);
const paperBar3 = document.querySelector(`#pb3`);
const paperBar4 = document.querySelector(`#pb4`);
const paperBar5 = document.querySelector(`#pb5`);
const paperBar6 = document.querySelector(`#pb6`);
const paperBar7 = document.querySelector(`#pb7`);
const paperBar8 = document.querySelector(`#pb8`);
const paperBar9 = document.querySelector(`#pb9`);
const paperBar10 = document.querySelector(`#pb10`);
const paperBar11 = document.querySelector(`#pb11`);
const paperBar12 = document.querySelector(`#pb12`);
const paperBar13 = document.querySelector(`#pb13`);
const mainContainerBar = document.getElementsByClassName("main-container")[1];
let currentLocationBar = 1;
let numOfPapersBar = 13;
let maxLocationBar = numOfPapersBar + 1;
pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
prevBtnBar.addEventListener("click", goPrevPage);
nextBtnBar.addEventListener("click", goNextPage);

function openBookBar() {
  bookBar.style.transform = "translateX(50%)";
}
function closeBookBar(isAtBeginning) {
  if (isAtBeginning) {
    bookBar.style.transform = "translateX(0%)";
  } else {
    bookBar.style.transform = "translateX(100%)";
  }
  prevBtnBar.style.transform = "translateX(0px)";
  nextBtnBar.style.transform = "translateX(0px)";
}
function goNextPageBar() {
  if (currentLocationBar < maxLocationBar) {
    switch (currentLocationBar) {
      case 1:
        openBookBar();
        paperBar1.classList.add("flipped");
        paperBar1.style.zIndex = 1;
        break;
      case 2:
        paperBar2.classList.add("flipped");
        paperBar2.style.zIndex = 2;
        break;
      case 3:
        paperBar3.classList.add("flipped");
        paperBar3.style.zIndex = 3;
        break;
      case 4:
        paperBar4.classList.add("flipped");
        paperBar4.style.zIndex = 4;
        break;
      case 5:
        paperBar5.classList.add("flipped");
        paperBar5.style.zIndex = 5;
        break;
      case 6:
        paperBar6.classList.add("flipped");
        paperBar6.style.zIndex = 6;
        break;
      case 7:
        paperBar7.classList.add("flipped");
        paperBar7.style.zIndex = 7;
        break;
      case 8:
        paperBar8.classList.add("flipped");
        paperBar8.style.zIndex = 8;
        break;
      case 9:
        paperBar9.classList.add("flipped");
        paperBar9.style.zIndex = 9;
        break;
      case 10:
        paperBar10.classList.add("flipped");
        paperBar10.style.zIndex = 10;
        break;
      case 11:
        paperBar11.classList.add("flipped");
        paperBar11.style.zIndex = 11;
        break;
      case 12:
        paperBar12.classList.add("flipped");
        paperBar12.style.zIndex = 12;
        break;
      case 13:
        paperBar13.classList.add("flipped");
        paperBar13.style.zIndex = 13;
        closeBookBar();
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocationBar++;
    pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
  }
}
function goPrevPageBar() {
  if (currentLocationBar > 1) {
    switch (currentLocationBar) {
      case 2:
        closeBook(true);
        paperBar1.classList.remove("flipped");
        paperBar1.style.zIndex = 14;
        break;
      case 3:
        paperBar2.classList.remove("flipped");
        paperBar2.style.zIndex = 13;
        break;
      case 4:
        paperBar3.classList.remove("flipped");
        paperBar3.style.zIndex = 12;
        break;
      case 5:
        paperBar4.classList.remove("flipped");
        paperBar4.style.zIndex = 11;
        break;
      case 6:
        paperBar5.classList.remove("flipped");
        paperBar5.style.zIndex = 10;
        break;
      case 7:
        paperBar6.classList.remove("flipped");
        paperBar6.style.zIndex = 9;
        break;
      case 8:
        paperBar7.classList.remove("flipped");
        paperBar7.style.zIndex = 8;
        break;

      case 9:
        paperBar8.classList.remove("flipped");
        paperBar8.style.zIndex = 7;
        break;

      case 10:
        paperBar9.classList.remove("flipped");
        paperBar9.style.zIndex = 6;
        break;
      case 11:
        paperBar10.classList.remove("flipped");
        paperBar10.style.zIndex = 5;
        break;
      case 12:
        paperBar11.classList.remove("flipped");
        paperBar11.style.zIndex = 4;
        break;
      case 13:
        paperBar12.classList.remove("flipped");
        paperBar12.style.zIndex = 3;
        break;
      case 14:
        paperBar13.classList.remove("flipped");
        paperBar13.style.zIndex = 2;
        openBookBar();
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocationBar--;
    pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
  }
}

prevBtnBar.addEventListener("click", goPrevPageBar);
nextBtnBar.addEventListener("click", goNextPageBar);
nextButtonBar.addEventListener("click", goNextPageBar);
prevButtonBar.addEventListener("click", goPrevPageBar);

function zoomInAutomatorBar(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  bookBar.style.scale = Scale + scaleInc;
  mainContainerBar.style.height = Height + heightInc + "vh";
  mainContainerBar.style.width = Width + widthInc + "vw";
}
function zoomOutAutomatorBar(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  bookBar.style.scale = Scale - scaleInc;
  mainContainerBar.style.height = Height - heightInc + "vh";
  mainContainerBar.style.width = Width - widthInc + "vw";
}
const mediaQueryBarTabMaxBar = window.matchMedia("(max-width:1024px)");
const mediaQueryBarTabMinBar = window.matchMedia("(min-width:500px)");
const mediaQueryBar = window.matchMedia("(max-width: 600px)");
function zoomInHandlerBar() {
  if (mediaQueryBar.matches) {
    if (mobileWidth <= 100 && mobileHeight <= 50 && mobileScale <= 1.3) {
        bookBar.style.width = "100%";
        bookBar.style.height = "100%";
      zoomInAutomatorBar(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
    }
  } else if (mediaQueryBarTabMinBar.matches && mediaQueryBarTabMaxBar.matches) {
    if (TabWidth <= 100 && TabHeight <= 60 && TabScale <= 1.3) {
      bookBar.style.width = "100%";
      bookBar.style.height = "100%";
    }
  } else {
    if (width <= 95 && height <= 140 && scale <= 1.025) {
      zoomInAutomatorBar(scale, width, height, 5, 10, 0.005);
      scale += 0.005;
      bookBar.style.width = "100%";
      bookBar.style.height = "100%";
      height += 10;
      width += 5;
    }
  }
}
function zoomOutHandlerBar() {
  if (mediaQueryBar.matches) {
    if (mobileHeight > 30 && mobileWidth > 90 && mobileScale > 1) {
      zoomOutAutomatorBar(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
      mobileScale -= 0.001;
      mobileHeight -= 5;
      mobileWidth -= 2.5;
    }
  } else if (mediaQueryBarTabMinBar.matches && mediaQueryBarTabMaxBar.matches) {
    if (TabHeight > 40 && TabWidth > 80 && TabScale > 1) {
      zoomOutAutomatorBar(TabScale, TabWidth, TabHeight, 5, 5, 0.005);
      TabScale -= 0.005;
      TabHeight -= 5;
      TabWidth -= 5;
    }
  } else {
    if (width > 70 && height > 90 && scale > 1) {
      zoomOutAutomatorBar(scale, width, height, 5, 10, 0.005);
      bookBar.style.width = "100%";
      bookBar.style.height = "100%";
      scale -= 0.005;
      height -= 10;
      width -= 5;
    }
  }
}
let isFullScreenBar = false;
function FullScreenHandlerBar() {
  if (!isFullScreenBar) {
    const mediaQueryBar = window.matchMedia("(max-width: 600px)");
    if (mediaQueryBar.matches) {

      bookBar.style.height = "40vh";
      bookBar.style.width = "50vw";
    } else if (mediaQueryBarTabMinBar.matches && mediaQueryBarTabMaxBar.matches) {

      bookBar.style.height = "70vh";
      bookBar.style.width = "50vw";
    } else {
      if (myDocumentBar.requestFullscreen) {
        myDocumentBar.requestFullscreen();
        mainContainerBar.style.width = "98vw";
        mainContainerBar.style.height = "98vh";
        bookBar.style.height = "100%";
        bookBar.style.width = "100%";
        controllerBar.style.display = "none";
      } else if (myDocumentBar.msRequestFullscreen) {
        myDocumentBar.msRequestFullscreen();
      } else if (myDocumentBar.mozRequestFullScreen) {
        myDocumentBar.mozRequestFullScreen();
      } else if (myDocumentBar.webkitRequestFullscreen) {
        myDocumentBar.webkitRequestFullscreen();
      }
    }
    isFullScreenBar = !isFullScreenBar;
  }
}
document.addEventListener("keydown", (event) => {
  if (event.key === "e" && isFullScreenBar) {
    document
      .exitFullscreen()
      .then(() => location.reload())
      .catch((err) => console.error(err));
  }
});
zoomInBar.addEventListener("click", zoomInHandlerBar);
zoomOutBar.addEventListener("click", zoomOutHandlerBar);
fullScreenBar.addEventListener("click", FullScreenHandlerBar);
