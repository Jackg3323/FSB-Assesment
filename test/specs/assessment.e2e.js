describe("FSB Assessment", function () {
  it("Placeholder", async function () {
    // Step 1 - open google
    // This test does not need a page object and therefore directly enters the URL rather than pull from a page object file
    browser.url("https://www.google.com/");

    // reject cookies
    const cookie = $("div=Reject all");
    await cookie.click();

    // get what is in title
    let title = await browser.getTitle();

    // check it includes the text google
    expect(title).toEqual("Google");

    // Step 2 - find the input box, enter the search term and press enter to run search
    const gInput = $("input[name='q']");
    await gInput.setValue("Test Automation Learning");
    await browser.keys("\uE007");

    // get what is in search url and check the search term is included
    expect(browser).toHaveTextContaining("Test+Automation+Learning");

    // step 3 and 4 - find a link including Udemy and click it
    // Timer is to stop test from running to quickly and let the page finish loading
    await browser.pause(1000);
    const udemy = $("a*=Udemy");
    await udemy.click();
    expect(browser).toHaveTextContaining("udemy");

    // step 5 - search Udemy for BDD with Cucumber
    // timer to allow page to lode
    await browser.pause(1000);
    const uSearch = $("input[name='q']");
    await uSearch.setValue("BDD with Cucumber");
    // timer to allow text to be typed
    await browser.pause(1000);
    await browser.keys("\uE007");
    // timer to allow to page to load
    await browser.pause(1000);
    expect(browser).toHaveTextContaining("BDD");

    // Step 6 - Filter courses by highest rating and select the top
    const uFilter = $("input[name='sort']");
    await uFilter.click();
    await uFilter.selectByVisibleText("Highest Rated");
    const uResult = await $('div[id="u125-popper-trigger--586"]');
    await uResult.click();
    // assert that the page loaded was the one clicked
    title = await browser.getTitle();
    expect(title).toContain("BDD");
  });

  it("Step 6 - Filter courses by highest rating and select the top result", async function () {
    // Due to issues with a CAPCHA on the udemy site step 6 will be treated as a separate test
    browser.url(
      "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
    );
    const uFilter = $("select[name='sort']");
    await uFilter.click();
    await uFilter.selectByVisibleText("Highest Rated");
    const uResult = await $("a*=BDD");
    await uResult.click();
    await browser.pause(1000);
    const title = await browser.getTitle();
    expect(title).toContain("BDD");
  });

  it("Step 6 - Filter courses by highest rating using the URL and select the top result", async function () {
    // As an attempt to just access a course this test will just manually start at the filtered results and select a result with "BDD" in the link
    browser.url(
      "https://www.udemy.com/courses/search/?q=BDD+with+Cucumber&sort=highest-rated&src=ukw"
    );
    await browser.pause(10000);
    const uResult = await $("a*=BDD");
    await uResult.click();
    await browser.pause(10000);
    expect(browser).toHaveUrlContaining(
      "learn-to-create-bdd-framework-using-cucumber-and-java"
    );
  });
});
