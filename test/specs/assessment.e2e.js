import Google from "../pageobjects/google.page";

describe("FSB Assessment", function () {
  it("Placeholder", async function () {
    // Step 1 - Go to google site
    Google.open();

    // reject cookies
    await Google.rejectCookie.click();

    // get what is in title
    let title = await browser.getTitle();

    // check it includes the text google
    expect(title).toEqual("Google");

    // Step 2 - Search for the keyword 'Test Automation Learning'
    // create a variable with the desired search term and then pass it into the method - needs to be let as it is reused later for Udemy
    let searchTerm = "Test Automation Learning";
    await Google.search(searchTerm);
    // get what is in search url and check the search term is included
    expect(browser).toHaveURLContaining("Test+Automation+Learning");

    // step 3 and 4 - find a link including Udemy and click it
    // Timer is to stop test from running to quickly and let the page finish loading
    await browser.pause(1000);
    // create a variable that contains the desired site
    const desiredSite = "Udemy";
    // pass the variable into the method
    await Google.clickResult(desiredSite);
    // Step 4 - check the URL to check it contains "Udemy"
    expect(browser).toHaveURLContaining("udemy");

  //   // step 5 - search Udemy for BDD with Cucumber
  //   // timer to allow page to lode
  //   await browser.pause(1000);
  //   const udemySearch = $("input[name='q']");
  //   await udemySearch.setValue("BDD with Cucumber");
  //   // timer to allow text to be typed
  //   await browser.pause(1000);
  //   await browser.keys("\uE007");
  //   // timer to allow to page to load
  //   await browser.pause(1000);
  //   expect(browser).toHaveTextContaining("BDD");

  //   // Step 6 - Filter courses by highest rating and select the top
  //   // find the filter box that lets the user sort by ratings
  //   const udemyFilter = $("select[name='sort']");
  //   await udemyFilter.click();
  //   await udemyFilter.selectByVisibleText("Highest Rated");
  //   const udemyResult = await $("a*=BDD");
  //   await udemyResult.click();
  //   // assert that the page loaded was the one clicked
  //   title = await browser.getTitle();
  //   expect(title).toContain("BDD");
  // });

  // it("Step 6 - Filter courses by highest rating and select the top result", async function () {
  //   // Due to issues with a CAPCHA on the udemy site step 6 will be treated as a separate test
  //   browser.newWindow(
  //     "https://www.udemy.com/courses/search/?src=ukw&q=BDD+with+Cucumber"
  //   );
  //   const udemyFilter = $("select[name='sort']");
  //   await udemyFilter.click();
  //   await udemyFilter.selectByVisibleText("Highest Rated");
  //   // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
  //   expect(browser).toHaveUrlContaining("highest-rated");
  // });

  // it("Step 6 - Filter courses by highest rating using the URL and select the top result", async function () {
  //   // As an attempt to just access a course this test will just manually start at the filtered results and select a result with "BDD" in the link
  //   browser.newWindow(
  //     "https://www.udemy.com/courses/search/?q=BDD+with+Cucumber&sort=highest-rated&src=ukw"
  //   );
  //   // this time increases the likely hood the courses load and the site not crash
  //   await browser.pause(10000);
  //   // this selects the first link with BDD in the title
  //   const udemyResult = await $("a*=BDD");
  //   // click the link
  //   await udemyResult.click();
  //   await browser.pause(10000);
  //   // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
  //   expect(browser).toHaveUrlContaining(
  //     "learn-to-create-bdd-framework-using-cucumber-and-java"
  //   );
  // });
});
