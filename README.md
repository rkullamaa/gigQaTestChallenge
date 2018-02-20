# QA test challenge Part 1&2
## installation for part 2

Clone or donwload this repository

```js
git clone https://github.com/rkullamaa/gigQaTestChallenge.git
```
In terminal navigate to gigQaTestChallenge and run npm install to download 
dependecies for html reporting and few extra pits and pieces.

```js
cd gigQaTestChallenge
npm install
```
Run proctractor command to execute conf.js file

```js
protractor config/conf.js
```
HMTL report and screenshots
```js
reports
    -screenshots
    -xml
-reportHTML.html
```
3rd party modules used
```js
"dependencies": {
    "fs": "^0.0.1-security",
    "fs-extra": "^5.0.0",
    "jasmine-reporters": "^2.3.0",
    "lodash": "^4.17.5",
    "path": "^0.12.7",
    "xmldoc": "^1.1.0"
  }
  "libary":{
      "protractor-xml2html-reporter": "2"
  }
```

## BDD specifications for part 1
```gherkin
Feature: Freebies Vault Section
As a user
I want to see my reward history in the Freebies Vault Section
So I can see my obtained and claimed rewards

Acceptance Criteria
* Any logged in user can redeem rewards
* All rewards have 1 characteristic thumbnail
* Display only the last 8 tokens in reward history section
* Each unique token can be redemeed more than once
* Reward history endpoint accepts 1 parameter 'userName'
* Reward history retunrs a JSON object array
* Each 'user' object has a sub-object which includes following keys:
    - game-slug
    - date 
    - claimed
    - info
    - reason
    - expiry date
* JSON response should return top-lvl and sub-lvl objects in chronological order

Background:
Given I am logged in as MakeMoneyFast
And have an active account

Scenario: MakeMoneyFast claims a reward
Given I have a reward to claim
When I try to claim a reward
Then I will see "Your History" section
And claimed reward(token) will be visible

Scenario: MakeMoneyFast has multiple rewards claimed
Given I have claimed 5 rewards(tokens)
When I visit "Your History" section
Then I see characteristic thumbnail per each reward

Scenario: MakeMoneyFast has more than 8 rewards claimed
Given I have claimed 12 rewards(tokens)
When I visit "Your History" section
Then Only last 8 rewards(tokens) will be displayed

Scenario: MakeMoneyFast is viewing rewards details
Give I have rewards(tokens) in Freebies Vault Section
When I hover mouse over reward thumbnail
Then I can see the name of the reward as a pop-over
```