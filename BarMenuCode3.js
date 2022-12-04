const prevBtnBar = document.querySelector("#prev-btn-bar");
const nextBtnBar = document.querySelector("#next-btn-bar");
const bookBar = document.querySelector("#book-bar");
const pageIndicatorBar = document.querySelector("#page-indicator-bar");
const papers = document.getElementsByClassName("paper");
const myDocument = document.querySelector("#menu-container-bar");
const nextButtonBar = document.querySelector("#next-button-bar");
const prevButtonBar = document.querySelector("#prev-button-bar");
const zoomInBar = document.querySelector("#zoom-in-bar");
const zoomOutBar = document.querySelector("#zoom-out-bar");
const fullScreenBar = document.querySelector("#full-screen-bar");
const controllerBar = document.querySelector("#controller-bar");
const mainContainer = document.getElementsByClassName("main-container")[1];
const pageFlipBar = new St.PageFlip(bookBar, {
  width: 400,
  height: 600,
  showCover: true,
});
pageFlipBar.loadFromImages([
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4fa8aeb7181ea813b_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0001.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d5caac0326a7f3bf84_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0002.jpg",
  "https://uploads-ssl.webflow.com/62c2d80c5ea0ee6456ca6b3d/6366a5d4f090ad600d7a5ea2_Taftoon%20Food%20Menu%20-%20May%202022%20-%20New%20Edits%20(1)_page-0003.jpg",
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
let currentLocationBarBar = pageFlipBar.getCurrentPageIndex() + 1; //extract information for pageFlipBar like this
let numOfPapersBarBar = pageFlipBar.getPageCount(); //same for here
let maxLocation = numOfPapersBar + 1; //same for her
pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
let height = 90;
let width = 70;
let scale = 1;
let mobileWidth = 90;
let mobileHeight = 30;
let mobileScale = 1;
let TabScale = 1;
let TabWidth = 80;
let TabHeight = 40;
function zoomInAutomatorBar(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  book.style.scale = Scale + scaleInc;
  bookBar.style.scale = Scale + scaleInc;
  mainContainer.style.height = Height + heightInc + "vh";
  mainContainer.style.width = Width + widthInc + "vw";
}
function zoomOutAutomatorBar(Scale, Width, Height, widthInc, heightInc, scaleInc) {
  book.style.scale = Scale - scaleInc;
  bookBar.style.scale = Scale - scaleInc;
  mainContainer.style.height = Height - heightInc + "vh";
  mainContainer.style.width = Width - widthInc + "vw";
}
const mediaQueryTabMax = window.matchMedia("(max-width:1024px)");
const mediaQueryTabMin = window.matchMedia("(min-width:500px)");
const mediaQuery = window.matchMedia("(max-width: 600px)");
function zoomInHandlerBar() {
  if (mediaQuery.matches) {
    if (mobileWidth <= 100 && mobileHeight <= 50 && mobileScale <= 1.3) {
        bookBar.style.width = "100%";
        bookBar.style.height = "100%";
      zoomInAutomatorBar(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
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
  if (mediaQuery.matches) {
    if (mobileHeight > 30 && mobileWidth > 90 && mobileScale > 1) {
      zoomOutAutomatorBar(mobileScale, mobileWidth, mobileHeight, 2.5, 5, 0.001);
      mobileScale -= 0.001;
      mobileHeight -= 5;
      mobileWidth -= 2.5;
    }
  } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {
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
let isFullScreen = false;
function FullScreenHandlerBar() {
  if (!isFullScreen) {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    if (mediaQuery.matches) {

      bookBar.style.height = "40vh";
      bookBar.style.width = "50vw";
    } else if (mediaQueryTabMin.matches && mediaQueryTabMax.matches) {

      bookBar.style.height = "70vh";
      bookBar.style.width = "50vw";
    } else {
      if (myDocument.requestFullscreen) {
        myDocument.requestFullscreen();
        mainContainer.style.width = "98vw";
        mainContainer.style.height = "98vh";
        bookBar.style.height = "100%";
        bookBar.style.width = "100%";
        controllerBar.style.display = "none";
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
document.addEventListener("keydown", (event) => {
  if (event.key === "e" && isFullScreen) {
    document
      .exitFullscreen()
      .then(() => location.reload())
      .catch((err) => console.error(err));
  }
});
zoomInBar.addEventListener("click", zoomInHandlerBar);
zoomOutBar.addEventListener("click", zoomOutHandlerBar);
fullScreenBar.addEventListener("click", FullScreenHandlerBar);
