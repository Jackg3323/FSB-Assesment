import Page from "./page";

class Udemy extends Page {
  get filterBox() {
    return $("select[name='sort']");
  }

  async clickResult(neededLink) {
    await $(`a*=${neededLink}`).click();
  }

  openUdemySearch() {
    return browser.url(
      "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
    );
  }

  openFilteredUdemySearch() {
    return browser.url(
      "https://www.udemy.com/courses/search/?q=BDD+with+Cucumber&sort=highest-rated&src=ukw"
    );
  }
}

export default new Udemy();
