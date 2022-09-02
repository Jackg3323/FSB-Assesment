describe("FSB Assessment", function () {
  it("opens google and rejects cookies", async function () {
    // Step 1 - open google
    // This test does not need a page object and therefore directly enters the URL rather than pull from a page object file
    browser.url("https://www.google.com/");

    // reject cookies
    const cookie = $("div=Reject all");
    await cookie.click();

    // get what is in title
    const title = await browser.getTitle();

    // check it includes the text google
    expect(title).toEqual("Google");
  });

  it("Searches Google for Test Automation Learning", async function () {
    // Step 2 - find the input box, enter the search term and press enter to run search
    const gInput = $("input[name='q']");
    await gInput.setValue("Test Automation Learning");
    await browser.keys("\uE007");

    // get what is in search url and check the search term is included
    expect(browser).toHaveTextContaining("Test+Automation+Learning");
  });

  it("Selects the Udemy Link", async function () {
    // step 3 and 4 - find a link including Udemy and click it
    // Timer is to stop test from running to quickly and let the page finish loading
    await browser.pause(1000);
    const udemy = $("a*=Udemy");
    await udemy.click();
    expect(browser).toHaveTextContaining("udemy");
  });

  it("Searches Udemy for BDD with Cucumber", async function () {
    // step 5 - search Udemy for BDD with Cucumber
    // timer to allow page to load
    await browser.pause(1000);
    const udemySearch = $("input[name='q']");
    await udemySearch.setValue("BDD with Cucumber");
    // timer to allow text to be typed
    await browser.pause(1000);
    await browser.keys("\uE007");
    // timer to allow to page to load
    await browser.pause(1000);
    expect(browser).toHaveTextContaining("BDD");
  });

  it("Filters Results and selects highest rated course", async function () {
    // Step 6 - Filter courses by highest rating and select the top
    // find the filter box that lets the user sort by ratings
    const udemyFilter = $("select[name='sort']");
    await udemyFilter.click();
    await udemyFilter.selectByVisibleText("Highest Rated");
    const udemyResult = await $("a*=BDD");
    await udemyResult.click();
    // assert that the page loaded was the one clicked
    const title = await browser.getTitle();
    expect(title).toContain("BDD");
  });

  it("Step 6 - Filter courses by highest rating and select the top result", async function () {
    // Due to issues with a CAPCHA on the udemy site step 6 will be treated as a separate test
    browser.newWindow(
      "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
    );
    const udemyFilter = $("select[name='sort']");
    await udemyFilter.click();
    await udemyFilter.selectByVisibleText("Highest Rated");
    // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
    expect(browser).toHaveUrlContaining("highest-rated");
  });

  it("Step 6 - Filter courses by highest rating using the URL and select the top result", async function () {
    // As an attempt to just access a course this test will just manually start at the filtered results and select a result with "BDD" in the link
    browser.newWindow(
      "https://www.udemy.com/courses/search/?q=BDD+with+Cucumber&sort=highest-rated&src=ukw"
    );
    // this time increases the likely hood the courses load and the site not crash
    await browser.pause(10000);
    // this selects the first link with BDD in the title
    const udemyResult = await $("a*=BDD");
    // click the link
    await udemyResult.click();
    await browser.pause(10000);
    // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
    expect(browser).toHaveUrlContaining(
      "learn-to-create-bdd-framework-using-cucumber-and-java"
    );
  });
});
