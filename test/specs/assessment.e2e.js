describe("FSB Assessment", function () {
  it("Placeholder", async function () {
    // Step 1 - open google
    browser.url("https://www.google.com/");

    // reject cookies
    const cookie = $("div=Reject all");
    await cookie.click();

    // get what is in title
    const title = await browser.getTitle();

    // check it includes the text google
    expect(title).toEqual("Google");

    // Step 2 - find the input box, enter the search term and press enter to run search
    const gInput = $("input[name='q']");
    await gInput.setValue("Test Automation Learning");
    await browser.keys("\uE007");

    // get what is in search url and check the search term is included
    expect(browser).toHaveTextContaining("Test+Automation+Learning");

    // step 3 and 4 - find a link including Udemy and click it
    const udemy = $("a*=Udemy");
    await udemy.click();
    expect(browser).toHaveTextContaining("udemy");

    // step 5 - search Udemy for BDD with Cucumber
    await browser.pause(1000);
    const uSearch = $("input[name='q']");
    await uSearch.setValue("BDD with Cucumber");
    await browser.pause(1000);
    await browser.keys("\uE007");
    await browser.pause(1000);
    expect(browser).toHaveTextContaining("BDD");
  });
});
