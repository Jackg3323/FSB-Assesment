describe("FSB Assessment", function () {
  it("Placeholder", async function () {
    // Step 1 - open google
    await browser.url("https://www.google.com/");

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

    // get what is in search and check the search term is included
    title = await browser.getTitle();
    expect(browser).toHaveTextContaining("Test+Automation+Learning");

    // step 3 - find a link including udemy and click it
    const udemy = $("a*=Udemy");
    await udemy.click();
    title = await browser.getTitle();
    expect(browser).toHaveTextContaining("udemy");

    //
  });
});
