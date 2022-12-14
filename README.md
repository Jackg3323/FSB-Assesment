# FSB Assessment - Jack Guthrie

Hello,
This is my attempt at the technical assessment provided by FSB. The scenario was as follows,

> 1. Go to google site
> 2. Search for the keyword 'Test Automation Learning'
> 3. Select the link with Udemy course
> 4. Verify if the Udemy site has opened
> 5. Search for BDD with Cucumber
> 6. Click on the course with highest rating from the list of search results

The task provided was to create an automated test for the above scenario using either Selenium Webdriver or WebdriverIO.
I have elected to use WebdriverIO as this is the framework that is more directly suited towards testing JS whereas Selenium Webdriver is a framework that was only adapted to JS. Another consideration for using the WebdriverIO framework allows me to abstract the code easier which makes for more declarative test. I have heavily commented the code for the purposes of this assessment to show what that line or section of code is intended to do or my thoughts/reasoning on why have elected to write it that way.

# Branches

In this Repo I have 2 active branches. The Main branch is a version of the test that is all contained in a single e2e.js file. I have also created a branch called Refactor which has had the single e2e file abstracted to use pageObject files.

# Issues encountered

As you are aware there is an issue with Udemy site providing blockers in the form of anti-bot protection such as CAPTCHA and pages refusing to load correctly. To compensate for this I have written a multiple iterations of step 6. There are three iterations of this step. The first iteration is intended as what would be implemented if there were no blockers. This is then followed by an iteration that continues as if the page had loaded without the CAPTCHA and then verifies the code that had been ran until it hit the next blocker. The last iteration is based on if the last page had loaded and verifying the correct course had been loaded. For my purposes of creating these tests I have used browser.pause to allow me to visually confirm what is happening to do to the issue with the bots. I am aware that this is would not be beneficial in a larger test suite as it would not scale due to the increased time for completion.

It is also worth noting that the tests of steps 5 and 6 can fail due to the site refusing to load as seen in the below images.

![Error 1](/Images/Udemy%20Issue%201.jpg)
![Error 2](/Images/Udemy%20Issue%202.jpg)
![Error 3](/Images/Udemy%20Issue%203.jpg)
