import Google from "../pageobjects/google.page";
import Udemy from "../pageobjects/udemy.page";

describe("FSB Assessment", function () {
  it("It loads google and rejects cookies", async function () {
    // Step 1 - Go to google site
    Google.open();

    // reject cookies
    await Google.rejectCookie.click();

    // get what is in title
    const title = await browser.getTitle();

    // check it includes the text google
    expect(title).toEqual("Google");
  });

  it("Searches Google for Test Automation Learning", async function () {
    // Step 2 - Search for the keyword 'Test Automation Learning'
    // create a variable with the desired search term and then pass it into the method - needs to be let as it is reused later for Udemy
    const searchTerm = "Test Automation Learning";
    await Google.search(searchTerm);
    // get what is in search url and check the search term is included
    expect(browser).toHaveUrlContaining("Test+Automation+Learning");
  });

  it("Selects the Udemy Link", async function () {
    // step 3 and 4 - find a link including Udemy and click it
    // Timer is to stop test from running to quickly and let the page finish loading
    await browser.pause(1000);
    // create a variable that contains the desired site
    const desiredSite = "Udemy";
    // pass the variable into the method
    await Google.clickResult(desiredSite);
    // Step 4 - check the URL to check it contains "Udemy"
    expect(browser).toHaveUrlContaining("udemy");
  });

  it("Searches Udemy for BDD with Cucumber", async function () {
    // step 5 - search Udemy for BDD with Cucumber
    // timer to allow page to lode
    await browser.pause(1000);
    // set the search variable to what needs to be searched on Udemy
    const searchTerm = "BDD with Cucumber";
    // pass it into the method
    Udemy.search(searchTerm);
    // timer to allow to page to load
    await browser.pause(1000);
    // check URL to see if it includes the search term
    expect(browser).toHaveUrlContaining("BDD+with+Cucumber");
  });

  it("Filters Results and selects highest rated course", async function () {
    // Step 6 - Filter courses by highest rating and select the top
    await Udemy.filterBox.click();
    await Udemy.filterBox.selectByVisibleText("Highest Rated");
    await Udemy.clickResult("BDD");
    // Check the URL to ensure it contains BDD
    expect(browser).toHaveUrlContaining("BDD");
  });

  it("Step 6 - Filter courses by highest rating and select the top result", async function () {
    // Due to issues with a CAPCHA on the udemy site step 6 will be treated as a separate test
    // this test will require the previous "it" and subsequent "it" need to be commented out
    // this test can be prone to failure due to the site not rendering the page correctly
    await Udemy.openUdemySearch();
    await browser.pause(10000);
    await Udemy.filterBox.click();
    await Udemy.filterBox.selectByVisibleText("Highest Rated");
    // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
    expect(browser).toHaveUrlContaining("highest-rated");
  });

  it("Step 6 - Filter courses by highest rating using the URL and select the top result", async function () {
    // As an attempt to just access a course this test will just manually start at the filtered results and select a result with "BDD" in the link
    await Udemy.openFilteredUdemySearch();
    // this time increases the likely hood the courses load and the site not crash
    await browser.pause(10000);
    // this selects the first link with BDD in the title
    await Udemy.clickResult("BDD");
    // click the link
    await browser.pause(10000);
    // during a manual test this was found to be the course that is currently highest rated but a captcha will stop the page loading HOWEVER the course title is still in the URL and can confirm the correct course is loaded
    expect(browser).toHaveUrlContaining(
      "learn-to-create-bdd-framework-using-cucumber-and-java"
    );
  });
});
