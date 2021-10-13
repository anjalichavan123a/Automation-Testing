$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("giftFeature.feature");
formatter.feature({
  "line": 1,
  "name": "sign up feature",
  "description": "",
  "id": "sign-up-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 12,
      "value": "#Gift voucher"
    }
  ],
  "line": 13,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"\u003cCode\u003e\",\"\u003cFrom_Name\u003e\",\"\u003cFrom_E_Mail\u003e\",\"\u003cTo_Name\u003e\",\"\u003cTo_E_Mail\u003e\",\"\u003cMessage\u003e\",\"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;",
  "rows": [
    {
      "cells": [
        "Code",
        "From_Name",
        "From_E_Mail",
        "To_Name",
        "To_E_Mail",
        "Message",
        "Amount"
      ],
      "line": 22,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;1"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 23,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;2"
    },
    {
      "cells": [
        "",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 24,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;3"
    },
    {
      "cells": [
        "1234837",
        "",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 25,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;4"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 26,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;5"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 27,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;6"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "as",
        "",
        "good",
        "123"
      ],
      "line": 28,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;7"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        ""
      ],
      "line": 29,
      "id": "sign-up-feature;gift-vouchers-add-button-with-save;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 22
    },
    {
      "val": "www@gmail.com",
      "offset": 28
    },
    {
      "val": "as",
      "offset": 44
    },
    {
      "val": "awer@gmail.com",
      "offset": 49
    },
    {
      "val": "good",
      "offset": 66
    },
    {
      "val": "123",
      "offset": 73
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 15
    },
    {
      "val": "www@gmail.com",
      "offset": 21
    },
    {
      "val": "as",
      "offset": 37
    },
    {
      "val": "awer@gmail.com",
      "offset": 42
    },
    {
      "val": "good",
      "offset": 59
    },
    {
      "val": "123",
      "offset": 66
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 25,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "",
      "offset": 22
    },
    {
      "val": "www@gmail.com",
      "offset": 25
    },
    {
      "val": "as",
      "offset": 41
    },
    {
      "val": "awer@gmail.com",
      "offset": 46
    },
    {
      "val": "good",
      "offset": 63
    },
    {
      "val": "123",
      "offset": 70
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 26,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"aaa\",\"\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 22
    },
    {
      "val": "",
      "offset": 28
    },
    {
      "val": "as",
      "offset": 31
    },
    {
      "val": "awer@gmail.com",
      "offset": 36
    },
    {
      "val": "good",
      "offset": 53
    },
    {
      "val": "123",
      "offset": 60
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 27,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"aaa\",\"www@gmail.com\",\"\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 22
    },
    {
      "val": "www@gmail.com",
      "offset": 28
    },
    {
      "val": "",
      "offset": 44
    },
    {
      "val": "awer@gmail.com",
      "offset": 47
    },
    {
      "val": "good",
      "offset": 64
    },
    {
      "val": "123",
      "offset": 71
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"aaa\",\"www@gmail.com\",\"as\",\"\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 22
    },
    {
      "val": "www@gmail.com",
      "offset": 28
    },
    {
      "val": "as",
      "offset": 44
    },
    {
      "val": "",
      "offset": 49
    },
    {
      "val": "good",
      "offset": 52
    },
    {
      "val": "123",
      "offset": 59
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Gift Vouchers ADD button with save",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-save;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enter \"1234837\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 22
    },
    {
      "val": "www@gmail.com",
      "offset": 28
    },
    {
      "val": "as",
      "offset": 44
    },
    {
      "val": "awer@gmail.com",
      "offset": 49
    },
    {
      "val": "good",
      "offset": 66
    },
    {
      "val": "",
      "offset": 73
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Gift Vouchers ADD button with cancle",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-cancle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter \"\u003cCode\u003e\",\"\u003cFrom_Name\u003e\",\"\u003cFrom_E_Mail\u003e\",\"\u003cTo_Name\u003e\",\"\u003cTo_E_Mail\u003e\",\"\u003cMessage\u003e\",\"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-cancle;",
  "rows": [
    {
      "cells": [
        "Code",
        "From_Name",
        "From_E_Mail",
        "To_Name",
        "To_E_Mail",
        "Message",
        "Amount"
      ],
      "line": 39,
      "id": "sign-up-feature;gift-vouchers-add-button-with-cancle;;1"
    },
    {
      "cells": [
        "132444233",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 40,
      "id": "sign-up-feature;gift-vouchers-add-button-with-cancle;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 40,
  "name": "Gift Vouchers ADD button with cancle",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-add-button-with-cancle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enter \"132444233\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "132444233",
      "offset": 12
    },
    {
      "val": "aaa",
      "offset": 24
    },
    {
      "val": "www@gmail.com",
      "offset": 30
    },
    {
      "val": "as",
      "offset": 46
    },
    {
      "val": "awer@gmail.com",
      "offset": 51
    },
    {
      "val": "good",
      "offset": 68
    },
    {
      "val": "123",
      "offset": 75
    }
  ],
  "location": "retaildefination.user_enter(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_cancle_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_Gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Gift Vouchers EDIT button with SAVE button",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-save-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on check button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select on edit option",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user edit  \"\u003cCode\u003e\",\"\u003cFrom_Name\u003e\",\"\u003cFrom_E_Mail\u003e\",\"\u003cTo_Name\u003e\",\"\u003cTo_E_Mail\u003e\",\"\u003cMessage\u003e\",\"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user select Theme and Status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.examples({
  "line": 51,
  "name": "",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-save-button;",
  "rows": [
    {
      "cells": [
        "Code",
        "From_Name",
        "From_E_Mail",
        "To_Name",
        "To_E_Mail",
        "Message",
        "Amount"
      ],
      "line": 52,
      "id": "sign-up-feature;gift-vouchers-edit-button-with-save-button;;1"
    },
    {
      "cells": [
        "132443334",
        "aaass",
        "ww123w@gmail.com",
        "awws",
        "awe23r@gmail.com",
        "good one",
        "13323"
      ],
      "line": 53,
      "id": "sign-up-feature;gift-vouchers-edit-button-with-save-button;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 53,
  "name": "Gift Vouchers EDIT button with SAVE button",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-save-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 43,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "user click on check button",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select on edit option",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user edit  \"132443334\",\"aaass\",\"ww123w@gmail.com\",\"awws\",\"awe23r@gmail.com\",\"good one\",\"13323\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user select Theme and Status",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_check_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_on_edit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "132443334",
      "offset": 12
    },
    {
      "val": "aaass",
      "offset": 24
    },
    {
      "val": "ww123w@gmail.com",
      "offset": 32
    },
    {
      "val": "awws",
      "offset": 51
    },
    {
      "val": "awe23r@gmail.com",
      "offset": 58
    },
    {
      "val": "good one",
      "offset": 77
    },
    {
      "val": "13323",
      "offset": 88
    }
  ],
  "location": "retaildefination.user_edit(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_and_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 56,
  "name": "Gift Vouchers EDIT button with CANCLE",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-cancle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click on check button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User select on edit option",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user edit  \"\u003cCode\u003e\",\"\u003cFrom_Name\u003e\",\"\u003cFrom_E_Mail\u003e\",\"\u003cTo_Name\u003e\",\"\u003cTo_E_Mail\u003e\",\"\u003cMessage\u003e\",\"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user select Theme and Status",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
  "name": "",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-cancle;",
  "rows": [
    {
      "cells": [
        "Code",
        "From_Name",
        "From_E_Mail",
        "To_Name",
        "To_E_Mail",
        "Message",
        "Amount"
      ],
      "line": 66,
      "id": "sign-up-feature;gift-vouchers-edit-button-with-cancle;;1"
    },
    {
      "cells": [
        "132443334",
        "aaass",
        "ww123w@gmail.com",
        "awws",
        "awe23r@gmail.com",
        "good one",
        "13323"
      ],
      "line": 67,
      "id": "sign-up-feature;gift-vouchers-edit-button-with-cancle;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 67,
  "name": "Gift Vouchers EDIT button with CANCLE",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-edit-button-with-cancle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 57,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user click on check button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User select on edit option",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user edit  \"132443334\",\"aaass\",\"ww123w@gmail.com\",\"awws\",\"awe23r@gmail.com\",\"good one\",\"13323\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "user select Theme and Status",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_check_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_on_edit_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "132443334",
      "offset": 12
    },
    {
      "val": "aaass",
      "offset": 24
    },
    {
      "val": "ww123w@gmail.com",
      "offset": 32
    },
    {
      "val": "awws",
      "offset": 51
    },
    {
      "val": "awe23r@gmail.com",
      "offset": 58
    },
    {
      "val": "good one",
      "offset": 77
    },
    {
      "val": "13323",
      "offset": 88
    }
  ],
  "location": "retaildefination.user_edit(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_and_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_cancle_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_Gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 70,
  "name": "Gift Vouchers DELETE button",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-delete-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 71,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "User click on the checkbox of new created record and delete record",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_the_checkbox_of_new_created_record_and_delete_record()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_Gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 76,
  "name": "Gift Vouchers BULK action with SEND button",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bulk-action-with-send-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click on the bulk checkbox and Send record",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User navigate to dashboard of Gift voucher",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_the_bulk_checkbox_and_Send_record()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_Gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 81,
  "name": "Gift Vouchers SORT function",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-sort-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 82,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "User want to check the sorting functionality on gift voucher",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_want_to_check_the_sorting_functionality_on_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"\u003cCode\u003e\",\"\u003cFrom_Name\u003e\",\"\u003cFrom_E_Mail\u003e\",\"\u003cTo_Name\u003e\",\"\u003cTo_E_Mail\u003e\",\"\u003cMessage\u003e\",\"\u003cAmount\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.examples({
  "line": 93,
  "name": "",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;",
  "rows": [
    {
      "cells": [
        "Code",
        "From_Name",
        "From_E_Mail",
        "To_Name",
        "To_E_Mail",
        "Message",
        "Amount"
      ],
      "line": 94,
      "id": "sign-up-feature;gift-vouchers-bug;;1"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 95,
      "id": "sign-up-feature;gift-vouchers-bug;;2"
    },
    {
      "cells": [
        "1234837",
        "123",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 96,
      "id": "sign-up-feature;gift-vouchers-bug;;3"
    },
    {
      "cells": [
        "1234837",
        "@#$",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 97,
      "id": "sign-up-feature;gift-vouchers-bug;;4"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "123",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 98,
      "id": "sign-up-feature;gift-vouchers-bug;;5"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "@#$",
        "awer@gmail.com",
        "good",
        "123"
      ],
      "line": 99,
      "id": "sign-up-feature;gift-vouchers-bug;;6"
    },
    {
      "cells": [
        "1234837",
        "aaa",
        "www@gmail.com",
        "as",
        "awer@gmail.com",
        "good",
        "123aaa"
      ],
      "line": 100,
      "id": "sign-up-feature;gift-vouchers-bug;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 95,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "aaa",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "as",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 52
    },
    {
      "val": "good",
      "offset": 69
    },
    {
      "val": "123",
      "offset": 76
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 96,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"123\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "123",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "as",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 52
    },
    {
      "val": "good",
      "offset": 69
    },
    {
      "val": "123",
      "offset": 76
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 97,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"@#$\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "@#$",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "as",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 52
    },
    {
      "val": "good",
      "offset": 69
    },
    {
      "val": "123",
      "offset": 76
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 98,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"aaa\",\"www@gmail.com\",\"123\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "aaa",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "123",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 53
    },
    {
      "val": "good",
      "offset": 70
    },
    {
      "val": "123",
      "offset": 77
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 99,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"aaa\",\"www@gmail.com\",\"@#$\",\"awer@gmail.com\",\"good\",\"123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "aaa",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "@#$",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 53
    },
    {
      "val": "good",
      "offset": 70
    },
    {
      "val": "123",
      "offset": 77
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 100,
  "name": "Gift Vouchers bug",
  "description": "",
  "id": "sign-up-feature;gift-vouchers-bug;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "user click on inner Gift Vouchers",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "user click on add button",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "user enter the\"1234837\",\"aaa\",\"www@gmail.com\",\"as\",\"awer@gmail.com\",\"good\",\"123aaa\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "user select Theme,Status",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "check the display message of gift voucher",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_inner_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234837",
      "offset": 15
    },
    {
      "val": "aaa",
      "offset": 25
    },
    {
      "val": "www@gmail.com",
      "offset": 31
    },
    {
      "val": "as",
      "offset": 47
    },
    {
      "val": "awer@gmail.com",
      "offset": 52
    },
    {
      "val": "good",
      "offset": 69
    },
    {
      "val": "123aaa",
      "offset": 76
    }
  ],
  "location": "retaildefination.user_enter_the(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_Theme_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_gift_voucher()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 102,
      "value": "#VOUCHER THEME"
    }
  ],
  "line": 104,
  "name": "Vouchers Theme ADD with SAVE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-save",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "user click on add button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User enter data of \"\u003cVoucher_Theme_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "user select image",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "click on save button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "check the display message of voucher theme",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-save;",
  "rows": [
    {
      "cells": [
        "Voucher_Theme_Name"
      ],
      "line": 113,
      "id": "sign-up-feature;vouchers-theme-add-with-save;;1"
    },
    {
      "cells": [
        "12236"
      ],
      "line": 114,
      "id": "sign-up-feature;vouchers-theme-add-with-save;;2"
    },
    {
      "cells": [
        ""
      ],
      "line": 115,
      "id": "sign-up-feature;vouchers-theme-add-with-save;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 114,
  "name": "Vouchers Theme ADD with SAVE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-save;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "user click on add button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User enter data of \"12236\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "user select image",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "click on save button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "check the display message of voucher theme",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12236",
      "offset": 20
    }
  ],
  "location": "retaildefination.user_enter_data_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 115,
  "name": "Vouchers Theme ADD with SAVE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-save;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 105,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "user click on add button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "User enter data of \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "user select image",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "click on save button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "check the display message of voucher theme",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "retaildefination.user_enter_data_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_display_message_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 116,
  "name": "Vouchers Theme ADD with CANCLE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-cancle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "user click on add button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User enter data of \"\u003cVoucher_Theme_Name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "user select image",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User navigate to dashboard of voucher theme",
  "keyword": "Then "
});
formatter.examples({
  "line": 124,
  "name": "",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-cancle;",
  "rows": [
    {
      "cells": [
        "Voucher_Theme_Name"
      ],
      "line": 125,
      "id": "sign-up-feature;vouchers-theme-add-with-cancle;;1"
    },
    {
      "cells": [
        "43356"
      ],
      "line": 126,
      "id": "sign-up-feature;vouchers-theme-add-with-cancle;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 126,
  "name": "Vouchers Theme ADD with CANCLE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-add-with-cancle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 117,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "user click on add button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "User enter data of \"43356\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "user select image",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "User click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "User navigate to dashboard of voucher theme",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_add_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "43356",
      "offset": 20
    }
  ],
  "location": "retaildefination.user_enter_data_of(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_cancle_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 128,
  "name": "Vouchers Theme EDIT button with SAVE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-save",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "user click on edit button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User edit the data from \"\u003cVoucher_Theme_code_field\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "user edit the image",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "click on save button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-save;",
  "rows": [
    {
      "cells": [
        "Voucher_Theme_code_field"
      ],
      "line": 138,
      "id": "sign-up-feature;vouchers-theme-edit-button-with-save;;1"
    },
    {
      "cells": [
        "2322"
      ],
      "line": 139,
      "id": "sign-up-feature;vouchers-theme-edit-button-with-save;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 139,
  "name": "Vouchers Theme EDIT button with SAVE",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-save;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "user click on edit button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "User edit the data from \"2322\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "user edit the image",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "click on save button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_edit_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2322",
      "offset": 25
    }
  ],
  "location": "retaildefination.user_edit_the_data_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_edit_the_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_save_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 141,
  "name": "Vouchers Theme EDIT button with cancle",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-cancle",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 142,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "user click on edit button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User edit the data from \"\u003cVoucher_Theme_code_field\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "user edit the image",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User navigate to dashboard of voucher theme",
  "keyword": "Then "
});
formatter.examples({
  "line": 150,
  "name": "",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-cancle;",
  "rows": [
    {
      "cells": [
        "Voucher_Theme_code_field"
      ],
      "line": 151,
      "id": "sign-up-feature;vouchers-theme-edit-button-with-cancle;;1"
    },
    {
      "cells": [
        "23222"
      ],
      "line": 152,
      "id": "sign-up-feature;vouchers-theme-edit-button-with-cancle;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 152,
  "name": "Vouchers Theme EDIT button with cancle",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-edit-button-with-cancle;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 142,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "User click on checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "user click on edit button of voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "User edit the data from \"23222\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "user edit the image",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "User click on cancle button",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "User navigate to dashboard of voucher theme",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_checkbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_edit_button_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "23222",
      "offset": 25
    }
  ],
  "location": "retaildefination.user_edit_the_data_from(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_edit_the_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_cancle_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 155,
  "name": "Vouchers Theme DELETE  button",
  "description": "",
  "id": "sign-up-feature;vouchers-theme-delete--button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 156,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "User click on the checkbox of created record and delete record",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "User navigate to dashboard of voucher theme",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_the_checkbox_of_created_record_and_delete_record()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard_of_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click on Gift Vouchers",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Gift_Vouchers()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 162,
  "name": "Vuchers Theme SORT function",
  "description": "",
  "id": "sign-up-feature;vuchers-theme-sort-function",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 163,
  "name": "user click on  Vouchers Theme",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "User want to check the sorting functionality on voucher theme",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "User check bulk functionality",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_Vouchers_Theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_want_to_check_the_sorting_functionality_on_voucher_theme()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_check_bulk_functionality()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("retail.feature");
formatter.feature({
  "line": 1,
  "name": "sign up feature",
  "description": "",
  "id": "sign-up-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Returns",
  "description": "",
  "id": "sign-up-feature;returns",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter the \"\u003cOrder ID\u003e\",\"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\",\"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cE-Mail\u003e\",\"\u003cTelephone\u003e\",\"\u003cProduct\u003e\",\"\u003cModel\u003e\",\"\u003cQuantity\u003e\",\"\u003cComment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User click on save  button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "check the displayed message",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "sign-up-feature;returns;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "E-Mail",
        "Telephone",
        "Product",
        "Model",
        "Quantity",
        "Comment"
      ],
      "line": 20,
      "id": "sign-up-feature;returns;;1"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 21,
      "id": "sign-up-feature;returns;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Returns",
  "description": "",
  "id": "sign-up-feature;returns;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User click on save  button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "check the displayed message",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 11
    },
    {
      "val": "2010-9-7",
      "offset": 25
    },
    {
      "val": "anju",
      "offset": 37
    },
    {
      "val": "anju",
      "offset": 44
    },
    {
      "val": "cha",
      "offset": 51
    },
    {
      "val": "anju@gmail.com",
      "offset": 57
    },
    {
      "val": "23456789",
      "offset": 74
    },
    {
      "val": "Adfd",
      "offset": 85
    },
    {
      "val": "12345",
      "offset": 92
    },
    {
      "val": "12",
      "offset": 100
    },
    {
      "val": "not a good",
      "offset": 105
    }
  ],
  "location": "retaildefination.enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 23,
      "value": "#| qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 24,
      "value": "#| 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 25,
      "value": "# | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 26,
      "value": "#| 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 27,
      "value": "#| 12344344234 | 2010-9-7   | anju1233 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 28,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 29,
      "value": "#| 12344344234 | 2010-9-7   |    12345 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 30,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju12334  | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 31,
      "value": "#| 12344344234 | 2010-9-7   | anju1    |       1234 | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 32,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | @#$%       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 33,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       |      1234 | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 34,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha123    | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 35,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | @!$%      | anju@gmail.com | 234567891234 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 36,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | avfsdsgdjf   | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 37,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | 23achsd      | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 38,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 |     123 | 12345 |       12 | not a good |"
    },
    {
      "line": 39,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd123 | 12345 |       12 | not a good |"
    },
    {
      "line": 40,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | @#$     | 12345 |       12 | not a good |"
    },
    {
      "line": 41,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | efdf  |       12 | not a good |"
    },
    {
      "line": 42,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12aaa |       12 | not a good |"
    },
    {
      "line": 43,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | @#$   |       12 | not a good |"
    },
    {
      "line": 44,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12345 | asd      | not a good |"
    },
    {
      "line": 45,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | asd12    | not a good |"
    },
    {
      "line": 46,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 47,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 48,
      "value": "#|          | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 49,
      "value": "#|      123 | 2010-9-7   | @#$%     |            | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 50,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       |           | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 51,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       | cha       |                |  23456789 | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 52,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |           | Adfd    | 12345 | @#$      | not a good |"
    },
    {
      "line": 53,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 |         | 12345 | @#$      | not a good |"
    },
    {
      "line": 54,
      "value": "#|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    |       | @#$      | not a good |"
    }
  ],
  "line": 55,
  "name": "Returns",
  "description": "",
  "id": "sign-up-feature;returns",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Enter the \"\u003cOrder ID\u003e\",\"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\",\"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cE-Mail\u003e\",\"\u003cTelephone\u003e\",\"\u003cProduct\u003e\",\"\u003cModel\u003e\",\"\u003cQuantity\u003e\",\"\u003cComment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User click on cancle button",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user navigate to dashboard",
  "keyword": "And "
});
formatter.examples({
  "line": 63,
  "name": "",
  "description": "",
  "id": "sign-up-feature;returns;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "E-Mail",
        "Telephone",
        "Product",
        "Model",
        "Quantity",
        "Comment"
      ],
      "line": 64,
      "id": "sign-up-feature;returns;;1"
    },
    {
      "comments": [
        {
          "line": 65,
          "value": "#| 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 66,
          "value": "#| qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 67,
          "value": "#| 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 68,
          "value": "# | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 69,
          "value": "#| 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 70,
          "value": "#| 12344344234 | 2010-9-7   | anju1233 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 71,
          "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 72,
          "value": "#| 12344344234 | 2010-9-7   |    12345 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 73,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju12334  | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 74,
          "value": "#| 12344344234 | 2010-9-7   | anju1    |       1234 | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 75,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | @#$%       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 76,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       |      1234 | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 77,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha123    | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 78,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | @!$%      | anju@gmail.com | 234567891234 | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 79,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | avfsdsgdjf   | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 80,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | 23achsd      | Adfd    | 12345 |       12 | not a good |"
        },
        {
          "line": 81,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 |     123 | 12345 |       12 | not a good |"
        },
        {
          "line": 82,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd123 | 12345 |       12 | not a good |"
        },
        {
          "line": 83,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | @#$     | 12345 |       12 | not a good |"
        },
        {
          "line": 84,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | efdf  |       12 | not a good |"
        },
        {
          "line": 85,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12aaa |       12 | not a good |"
        },
        {
          "line": 86,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | @#$   |       12 | not a good |"
        },
        {
          "line": 87,
          "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12345 | asd      | not a good |"
        },
        {
          "line": 88,
          "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | asd12    | not a good |"
        },
        {
          "line": 89,
          "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | @#$      | not a good |"
        }
      ],
      "cells": [
        "12345",
        "2010-9-7",
        "@#$%",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "@#$",
        "not a good"
      ],
      "line": 90,
      "id": "sign-up-feature;returns;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "comments": [
    {
      "line": 65,
      "value": "#| 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 66,
      "value": "#| qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 67,
      "value": "#| 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 68,
      "value": "# | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 69,
      "value": "#| 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 70,
      "value": "#| 12344344234 | 2010-9-7   | anju1233 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 71,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 72,
      "value": "#| 12344344234 | 2010-9-7   |    12345 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 73,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju12334  | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 74,
      "value": "#| 12344344234 | 2010-9-7   | anju1    |       1234 | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 75,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | @#$%       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 76,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       |      1234 | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 77,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha123    | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 78,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | @!$%      | anju@gmail.com | 234567891234 | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 79,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | avfsdsgdjf   | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 80,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | 23achsd      | Adfd    | 12345 |       12 | not a good |"
    },
    {
      "line": 81,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 |     123 | 12345 |       12 | not a good |"
    },
    {
      "line": 82,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd123 | 12345 |       12 | not a good |"
    },
    {
      "line": 83,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | @#$     | 12345 |       12 | not a good |"
    },
    {
      "line": 84,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | efdf  |       12 | not a good |"
    },
    {
      "line": 85,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12aaa |       12 | not a good |"
    },
    {
      "line": 86,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | @#$   |       12 | not a good |"
    },
    {
      "line": 87,
      "value": "#| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12345 | asd      | not a good |"
    },
    {
      "line": 88,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | asd12    | not a good |"
    },
    {
      "line": 89,
      "value": "#| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | @#$      | not a good |"
    }
  ],
  "line": 90,
  "name": "Returns",
  "description": "",
  "id": "sign-up-feature;returns;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Click on Add button",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Enter the \"12345\",\"2010-9-7\", \"@#$%\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"@#$\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "Then "
});
formatter.step({
  "line": 60,
  "name": "User click on cancle button",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user navigate to dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12345",
      "offset": 11
    },
    {
      "val": "2010-9-7",
      "offset": 19
    },
    {
      "val": "@#$%",
      "offset": 31
    },
    {
      "val": "anju",
      "offset": 38
    },
    {
      "val": "cha",
      "offset": 45
    },
    {
      "val": "anju@gmail.com",
      "offset": 51
    },
    {
      "val": "23456789",
      "offset": 68
    },
    {
      "val": "Adfd",
      "offset": 79
    },
    {
      "val": "12345",
      "offset": 86
    },
    {
      "val": "@#$",
      "offset": 94
    },
    {
      "val": "not a good",
      "offset": 100
    }
  ],
  "location": "retaildefination.enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_cancle_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "line": 92,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"\u003cOrder ID\u003e\",\"\u003cOrder_Date\u003e\", \"\u003cCustomer\u003e\",\"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cE-Mail\u003e\",\"\u003cTelephone\u003e\",\"\u003cProduct\u003e\",\"\u003cModel\u003e\",\"\u003cQuantity\u003e\",\"\u003cComment\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.examples({
  "line": 100,
  "name": "",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;",
  "rows": [
    {
      "cells": [
        "Order ID",
        "Order_Date",
        "Customer",
        "First Name",
        "Last Name",
        "E-Mail",
        "Telephone",
        "Product",
        "Model",
        "Quantity",
        "Comment"
      ],
      "line": 101,
      "id": "sign-up-feature;bug-present-in-return-product;;1"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 102,
      "id": "sign-up-feature;bug-present-in-return-product;;2"
    },
    {
      "cells": [
        "qqqqqqq",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789121312",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 103,
      "id": "sign-up-feature;bug-present-in-return-product;;3"
    },
    {
      "cells": [
        "12344qqqqq",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "dfdsaf",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 104,
      "id": "sign-up-feature;bug-present-in-return-product;;4"
    },
    {
      "cells": [
        "@#$%",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "dsfsa345",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 105,
      "id": "sign-up-feature;bug-present-in-return-product;;5"
    },
    {
      "cells": [
        "12344344234",
        "7-9-2010",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "@#$%",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 106,
      "id": "sign-up-feature;bug-present-in-return-product;;6"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "aaaa",
        "not a good"
      ],
      "line": 107,
      "id": "sign-up-feature;bug-present-in-return-product;;7"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "asas12",
        "not a good"
      ],
      "line": 108,
      "id": "sign-up-feature;bug-present-in-return-product;;8"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "23456789",
        "Adfd",
        "12345",
        "@@#$",
        "not a good"
      ],
      "line": 109,
      "id": "sign-up-feature;bug-present-in-return-product;;9"
    },
    {
      "cells": [
        "qqqqqqq",
        "2010-9-7",
        "anju",
        "1234",
        "cha",
        "anju@gmail.com",
        "23456789121312",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 110,
      "id": "sign-up-feature;bug-present-in-return-product;;10"
    },
    {
      "cells": [
        "12344qqqqq",
        "2010-9-7",
        "anju",
        "@#$",
        "cha",
        "anju@gmail.com",
        "dfdsaf",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 111,
      "id": "sign-up-feature;bug-present-in-return-product;;11"
    },
    {
      "cells": [
        "@#$%",
        "2010-9-7",
        "anju",
        "anju",
        "123",
        "anju@gmail.com",
        "dsfsa345",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 112,
      "id": "sign-up-feature;bug-present-in-return-product;;12"
    },
    {
      "cells": [
        "qqqqqqq",
        "2010-9-7",
        "anju",
        "anju",
        "@#$%",
        "anju@gmail.com",
        "23456789121312",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 113,
      "id": "sign-up-feature;bug-present-in-return-product;;13"
    },
    {
      "cells": [
        "12344344234",
        "2010-9-7",
        "anju",
        "anju",
        "cha",
        "anju@gmail.com",
        "dfdsaf",
        "Adfd",
        "12345",
        "12",
        "not a good"
      ],
      "line": 114,
      "id": "sign-up-feature;bug-present-in-return-product;;14"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 102,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "23456789",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 90
    },
    {
      "val": "12345",
      "offset": 97
    },
    {
      "val": "12",
      "offset": 105
    },
    {
      "val": "not a good",
      "offset": 110
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 103,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"qqqqqqq\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789121312\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qqqqqqq",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 26
    },
    {
      "val": "anju",
      "offset": 38
    },
    {
      "val": "anju",
      "offset": 45
    },
    {
      "val": "cha",
      "offset": 52
    },
    {
      "val": "anju@gmail.com",
      "offset": 58
    },
    {
      "val": "23456789121312",
      "offset": 75
    },
    {
      "val": "Adfd",
      "offset": 92
    },
    {
      "val": "12345",
      "offset": 99
    },
    {
      "val": "12",
      "offset": 107
    },
    {
      "val": "not a good",
      "offset": 112
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 104,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344qqqqq\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"dfdsaf\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344qqqqq",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 29
    },
    {
      "val": "anju",
      "offset": 41
    },
    {
      "val": "anju",
      "offset": 48
    },
    {
      "val": "cha",
      "offset": 55
    },
    {
      "val": "anju@gmail.com",
      "offset": 61
    },
    {
      "val": "dfdsaf",
      "offset": 78
    },
    {
      "val": "Adfd",
      "offset": 87
    },
    {
      "val": "12345",
      "offset": 94
    },
    {
      "val": "12",
      "offset": 102
    },
    {
      "val": "not a good",
      "offset": 107
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 105,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"@#$%\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"dsfsa345\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 23
    },
    {
      "val": "anju",
      "offset": 35
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "cha",
      "offset": 49
    },
    {
      "val": "anju@gmail.com",
      "offset": 55
    },
    {
      "val": "dsfsa345",
      "offset": 72
    },
    {
      "val": "Adfd",
      "offset": 83
    },
    {
      "val": "12345",
      "offset": 90
    },
    {
      "val": "12",
      "offset": 98
    },
    {
      "val": "not a good",
      "offset": 103
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 106,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"7-9-2010\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"@#$%\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "7-9-2010",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "@#$%",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 86
    },
    {
      "val": "12345",
      "offset": 93
    },
    {
      "val": "12",
      "offset": 101
    },
    {
      "val": "not a good",
      "offset": 106
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 107,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"aaaa\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "23456789",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 90
    },
    {
      "val": "12345",
      "offset": 97
    },
    {
      "val": "aaaa",
      "offset": 105
    },
    {
      "val": "not a good",
      "offset": 112
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 108,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"asas12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "23456789",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 90
    },
    {
      "val": "12345",
      "offset": 97
    },
    {
      "val": "asas12",
      "offset": 105
    },
    {
      "val": "not a good",
      "offset": 114
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 109,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"23456789\",\"Adfd\",\"12345\",\"@@#$\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "23456789",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 90
    },
    {
      "val": "12345",
      "offset": 97
    },
    {
      "val": "@@#$",
      "offset": 105
    },
    {
      "val": "not a good",
      "offset": 112
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 110,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"qqqqqqq\",\"2010-9-7\", \"anju\",\"1234\",\"cha\",\"anju@gmail.com\",\"23456789121312\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qqqqqqq",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 26
    },
    {
      "val": "anju",
      "offset": 38
    },
    {
      "val": "1234",
      "offset": 45
    },
    {
      "val": "cha",
      "offset": 52
    },
    {
      "val": "anju@gmail.com",
      "offset": 58
    },
    {
      "val": "23456789121312",
      "offset": 75
    },
    {
      "val": "Adfd",
      "offset": 92
    },
    {
      "val": "12345",
      "offset": 99
    },
    {
      "val": "12",
      "offset": 107
    },
    {
      "val": "not a good",
      "offset": 112
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 111,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344qqqqq\",\"2010-9-7\", \"anju\",\"@#$\",\"cha\",\"anju@gmail.com\",\"dfdsaf\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344qqqqq",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 29
    },
    {
      "val": "anju",
      "offset": 41
    },
    {
      "val": "@#$",
      "offset": 48
    },
    {
      "val": "cha",
      "offset": 54
    },
    {
      "val": "anju@gmail.com",
      "offset": 60
    },
    {
      "val": "dfdsaf",
      "offset": 77
    },
    {
      "val": "Adfd",
      "offset": 86
    },
    {
      "val": "12345",
      "offset": 93
    },
    {
      "val": "12",
      "offset": 101
    },
    {
      "val": "not a good",
      "offset": 106
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 112,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"@#$%\",\"2010-9-7\", \"anju\",\"anju\",\"123\",\"anju@gmail.com\",\"dsfsa345\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "@#$%",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 23
    },
    {
      "val": "anju",
      "offset": 35
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "123",
      "offset": 49
    },
    {
      "val": "anju@gmail.com",
      "offset": 55
    },
    {
      "val": "dsfsa345",
      "offset": 72
    },
    {
      "val": "Adfd",
      "offset": 83
    },
    {
      "val": "12345",
      "offset": 90
    },
    {
      "val": "12",
      "offset": 98
    },
    {
      "val": "not a good",
      "offset": 103
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 113,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"qqqqqqq\",\"2010-9-7\", \"anju\",\"anju\",\"@#$%\",\"anju@gmail.com\",\"23456789121312\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "qqqqqqq",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 26
    },
    {
      "val": "anju",
      "offset": 38
    },
    {
      "val": "anju",
      "offset": 45
    },
    {
      "val": "@#$%",
      "offset": 52
    },
    {
      "val": "anju@gmail.com",
      "offset": 59
    },
    {
      "val": "23456789121312",
      "offset": 76
    },
    {
      "val": "Adfd",
      "offset": 93
    },
    {
      "val": "12345",
      "offset": 100
    },
    {
      "val": "12",
      "offset": 108
    },
    {
      "val": "not a good",
      "offset": 113
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 3,
  "name": "Login the user",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on the Retail application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User navigate to the Dashboard",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User click on Button-menue",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Sales",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_is_on_the_Retail_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_enter_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_navigate_to_the_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Button_menue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_Sales()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 114,
  "name": "Bug present in Return product",
  "description": "",
  "id": "sign-up-feature;bug-present-in-return-product;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 93,
  "name": "User click on returns",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Click on Add button",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "User Enter the \"12344344234\",\"2010-9-7\", \"anju\",\"anju\",\"cha\",\"anju@gmail.com\",\"dfdsaf\",\"Adfd\",\"12345\",\"12\",\"not a good\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "User select the Return_Reason and Opened and Return_Action and Return_Status",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "User click on save  button",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "check the displayed message",
  "keyword": "Then "
});
formatter.match({
  "location": "retaildefination.user_click_on_returns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.click_on_Add_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12344344234",
      "offset": 16
    },
    {
      "val": "2010-9-7",
      "offset": 30
    },
    {
      "val": "anju",
      "offset": 42
    },
    {
      "val": "anju",
      "offset": 49
    },
    {
      "val": "cha",
      "offset": 56
    },
    {
      "val": "anju@gmail.com",
      "offset": 62
    },
    {
      "val": "dfdsaf",
      "offset": 79
    },
    {
      "val": "Adfd",
      "offset": 88
    },
    {
      "val": "12345",
      "offset": 95
    },
    {
      "val": "12",
      "offset": 103
    },
    {
      "val": "not a good",
      "offset": 108
    }
  ],
  "location": "retaildefination.user_Enter_the(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_select_the_Return_Reason_and_Opened_and_Return_Action_and_Return_Status()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.user_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "retaildefination.check_the_displayed_message()"
});
formatter.result({
  "status": "skipped"
});
});