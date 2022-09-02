export default class Page {
  get searchBar() {
    return $("input[name='q']");
  }

  async search(searchTerm) {
    await this.searchBar.click();
    await this.searchBar.setValue(searchTerm);
    await this.searchBar.keys("\uE007");
  }

  get rejectCookie() {
    return $("div=Reject all");
  }
}
