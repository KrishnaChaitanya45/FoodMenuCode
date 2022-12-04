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
const mainContainerBar = document.getElementsByClassName("main-container")[1];
const pageFlipBar = new St.PageFlip(bookBar, {
  width: 400,
  height: 600,
  showCover: true,
});
pageFlipBar.loadFromImages([
"https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
"https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
]);

function goPrevPageBar() {
  if (currentLocationBar > 1) {
    pageFlipBar.flipPrev();
    currentLocationBar--;
    pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
  }
}
prevBtnBar.addEventListener("click", goPrevPage);
nextBtnBar.addEventListener("click", goNextPage);
nextButtonBar.addEventListener("click", goNextPage);
prevButtonBar.addEventListener("click", goPrevPage);
function goNextPageBar() {
  if (currentLocationBar < numOfPapersBar) {
    pageFlipBar.flipNext();
    currentLocationBar++;
    pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
  }
}
let currentLocationBar = pageFlipBar.getCurrentPageIndex() + 1; //extract information for pageFlipBar like this
let numOfPapersBar = pageFlipBar.getPageCount(); //same for here
let maxLocationBar = numOfPapersBar + 1; //same for her
pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;

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
