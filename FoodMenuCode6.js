const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const pageIndicator = document.querySelector("#page-indicator");
const papers = document.getElementsByClassName("paper");
const nextButton = document.querySelector("#next-button");
const prevButton = document.querySelector("#prev-button");
const myDocument = document.querySelector("#menu-container");
const zoomIn = document.querySelector("#zoom-in");
const zoomOut = document.querySelector("#zoom-out");
const fullScreen = document.querySelector("#full-screen");
const controller = document.querySelector("#controller");
const mainContainer = document.getElementsByClassName("main-container")[0];
const pageFlip = new St.PageFlip(book, {
  width: 400,
  height: 600,
  showCover: true,
});
pageFlip.loadFromImages([
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
function goPrevPage() {
  if (currentLocation > 1) {
    pageFlip.flipPrev();
    currentLocation--;
    pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
  }
} 
function goNextPage() {
  if (currentLocation < numOfPapers) {
    pageFlip.flipNext();
    currentLocation++;
    pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;
  }
} 
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
nextButton.addEventListener("click", goNextPage);
prevButton.addEventListener("click", goPrevPage);
let currentLocation = pageFlip.getCurrentPageIndex() + 1; 
let numOfPapers = pageFlip.getPageCount();
let maxLocation = numOfPapers + 1; 
pageIndicator.innerText = ` ${currentLocation} / ${numOfPapers}`;

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
document.addEventListener("keydown", (event) => {
  if (event.key === "e" && isFullScreen) {
    document
      .exitFullscreen()
      .then(() => location.reload())
      .catch((err) => console.error(err));
  }
});
zoomIn.addEventListener("click", zoomInHandler);
zoomOut.addEventListener("click", zoomOutHandler);
fullScreen.addEventListener("click", FullScreenHandler);
document.getElementById("bar-btn").addEventListener("click", () => {
  document.getElementById("food-btn").style.backgroundColor = "transparent";
  document.getElementById("food-btn").style.color = "black";
  document.getElementById("bar-btn").style.backgroundColor = "black";
  document.getElementById("bar-btn").style.color = "white";
});
document.getElementById("food-btn").addEventListener("click", () => {
  document.getElementById("bar-btn").style.backgroundColor = "transparent";
  document.getElementById("bar-btn").style.color = "black";
  document.getElementById("food-btn").style.backgroundColor = "black";
  document.getElementById("food-btn").style.color = "white";
});
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
    console.log("Pressed");
  }
  console.log("Out of If");
}
function goNextPageBar() {
  if (currentLocationBar < numOfPapersBar) {
    pageFlipBar.flipNext();
    currentLocationBar++;
    console.log("Pressed Next");
    
    pageIndicatorBar.innerText = ` ${currentLocationBar} / ${numOfPapersBar}`;
  }
  console.log("Out of If Next");
}
prevBtnBar.addEventListener("click", goPrevPageBar);
nextBtnBar.addEventListener("click", goNextPageBar);
nextButtonBar.addEventListener("click", goNextPageBar);
prevButtonBar.addEventListener("click", goPrevPageBar);
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
