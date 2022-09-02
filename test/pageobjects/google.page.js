import Page from "./page";

class Google extends Page {
  async clickResult(neededLink) {
    await $(`h3*=${neededLink}`).click();
  }

  open() {
    return browser.url("https://www.google.com");
  }
}

export default new Google();
