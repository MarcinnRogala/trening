class Main {
  constructor(mainSelector) {
    this.onDOMContentLoaded = this.onDOMContentLoaded.bind(this);
    this.mainSelector = mainSelector;
  }

  init() {
    document.addEventListener("DOMContentLoaded", this.onDOMContentLoaded);
  }

  onDOMContentLoaded() {
    const buttonOpen = document.querySelector(".window-open");
    const buttonClose = document.querySelector(".window-close");

    const main = this.getMain();

    if (!main) {
      return;
    }

    if (!buttonOpen || !buttonClose) {
      console.warn("Podałeś błędy selektor, lub nie ma tu okna!");
      return;
    }

    buttonOpen.addEventListener("click", () => {
      const main = this.getMain();

      if (!main) {
        return;
      }

      this.showMain(main);
    });

    buttonClose.addEventListener("click", () => {
      const main = this.getMain();

      if (!main) {
        return;
      }

      this.hideMain(main);
    });

    main.addEventListener("click", (event) => {
      const clickedElement = event.target;

      if (!clickedElement.classList.contains("main")) {
        return;
      }

      this.hideMain(clickedElement);
    });
  }

  getMain() {
    const main = document.querySelector(this.mainSelector);

    if (!main) {
      console.warn("Podałeś błędy selektor okna!");
      return false;
    }

    return main;
  }

  showMain(element) {
    if (!element) {
      console.warn("showMain: Podany argument jest niepoprawny.");
      return false;
    }

    element.classList.add("active");
  }

  hideMain(element) {
    if (!element) {
      console.warn("hideMain: Podany argument jest niepoprawny.");
      return false;
    }
    element.classList.remove("active");
  }
}

const importantMain = new Main(".main");
importantMain.init();