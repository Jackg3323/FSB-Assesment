class Search {
  open() {
    return browser.url.open("https://www.google.com/");
  }
}

export default new Search();
