Feature: sign up feature

  Background: Login the user
    Given User is on the Retail application
    And User enter the username and password
    And click on login button
    And User navigate to the Dashboard
    And User click on Button-menue
    And User click on Sales
    Then user click on Gift Vouchers

  #Gift voucher
  Scenario Outline: Gift Vouchers ADD button with save
    And user click on inner Gift Vouchers
    And user click on add button
    And user enter "<Code>","<From_Name>","<From_E_Mail>","<To_Name>","<To_E_Mail>","<Message>","<Amount>"
    And user select Theme,Status
    And click on save button
    Then check the display message of gift voucher

    Examples: 
      | Code    | From_Name | From_E_Mail   | To_Name | To_E_Mail      | Message | Amount |
      | 1234837 | aaa       | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      |         | aaa       | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      | 1234837 |           | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       |               | as      | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       | www@gmail.com |         | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       | www@gmail.com | as      |                | good    |    123 |
      | 1234837 | aaa       | www@gmail.com | as      | awer@gmail.com | good    |        |

  Scenario Outline: Gift Vouchers ADD button with cancle
    And user click on inner Gift Vouchers
    And user click on add button
    And user enter "<Code>","<From_Name>","<From_E_Mail>","<To_Name>","<To_E_Mail>","<Message>","<Amount>"
    And user select Theme,Status
    And click on cancle button
    Then User navigate to dashboard of Gift voucher

    Examples: 
      | Code      | From_Name | From_E_Mail   | To_Name | To_E_Mail      | Message | Amount |
      | 132444233 | aaa       | www@gmail.com | as      | awer@gmail.com | good    |    123 |

  Scenario Outline: Gift Vouchers EDIT button with SAVE button
    And user click on inner Gift Vouchers
    And user click on check button
    And User select on edit option
    And user edit  "<Code>","<From_Name>","<From_E_Mail>","<To_Name>","<To_E_Mail>","<Message>","<Amount>"
    And user select Theme and Status
    And click on save button
    Then check the displayed message

    Examples: 
      | Code      | From_Name | From_E_Mail      | To_Name | To_E_Mail        | Message  | Amount |
      | 132443334 | aaass     | ww123w@gmail.com | awws    | awe23r@gmail.com | good one |  13323 |

  Scenario Outline: Gift Vouchers EDIT button with CANCLE
    And user click on inner Gift Vouchers
    And user click on check button
    And User select on edit option
    And user edit  "<Code>","<From_Name>","<From_E_Mail>","<To_Name>","<To_E_Mail>","<Message>","<Amount>"
    And user select Theme and Status
    And click on cancle button
    Then User navigate to dashboard of Gift voucher

    Examples: 
      | Code      | From_Name | From_E_Mail      | To_Name | To_E_Mail        | Message  | Amount |
      | 132443334 | aaass     | ww123w@gmail.com | awws    | awe23r@gmail.com | good one |  13323 |

  Scenario: Gift Vouchers DELETE button
    And user click on inner Gift Vouchers
    And User click on the checkbox of new created record and delete record
    And User navigate to dashboard of Gift voucher

  Scenario: Gift Vouchers BULK action with SEND button
    And user click on inner Gift Vouchers
    And User click on the bulk checkbox and Send record
    And User navigate to dashboard of Gift voucher

  Scenario: Gift Vouchers SORT function
    And user click on inner Gift Vouchers
    And User want to check the sorting functionality on gift voucher

  Scenario Outline: Gift Vouchers bug
    And user click on inner Gift Vouchers
    And user click on add button
    And user enter the"<Code>","<From_Name>","<From_E_Mail>","<To_Name>","<To_E_Mail>","<Message>","<Amount>"
    And user select Theme,Status
    And click on save button
    Then check the display message of gift voucher

    Examples: 
      | Code    | From_Name | From_E_Mail   | To_Name | To_E_Mail      | Message | Amount |
      | 1234837 | aaa       | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      | 1234837 |       123 | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      | 1234837 | @#$       | www@gmail.com | as      | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       | www@gmail.com |     123 | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       | www@gmail.com | @#$     | awer@gmail.com | good    |    123 |
      | 1234837 | aaa       | www@gmail.com | as      | awer@gmail.com | good    | 123aaa |

  #VOUCHER THEME
  Scenario Outline: Vouchers Theme ADD with SAVE
    And user click on  Vouchers Theme
    And user click on add button of voucher theme
    And User enter data of "<Voucher_Theme_Name>"
    And user select image
    And click on save button of voucher theme
    Then check the display message of voucher theme

    Examples: 
      | Voucher_Theme_Name |
      |              12236 |
      |                    |

  Scenario Outline: Vouchers Theme ADD with CANCLE
    And user click on  Vouchers Theme
    And user click on add button of voucher theme
    And User enter data of "<Voucher_Theme_Name>"
    And user select image
    And User click on cancle button
    Then User navigate to dashboard of voucher theme

    Examples: 
      | Voucher_Theme_Name |
      |              43356 |

  Scenario Outline: Vouchers Theme EDIT button with SAVE
    And user click on  Vouchers Theme
    And User click on checkbox
    And user click on edit button of voucher theme
    And User edit the data from "<Voucher_Theme_code_field>"
    And user edit the image
    And click on save button of voucher theme
    Then check the displayed message

    Examples: 
      | Voucher_Theme_code_field |
      |                     2322 |

  Scenario Outline: Vouchers Theme EDIT button with cancle
    And user click on  Vouchers Theme
    And User click on checkbox
    And user click on edit button of voucher theme
    And User edit the data from "<Voucher_Theme_code_field>"
    And user edit the image
    And User click on cancle button
    Then User navigate to dashboard of voucher theme

    Examples: 
      | Voucher_Theme_code_field |
      |                    23222 |

  Scenario: Vouchers Theme DELETE  button
    And user click on  Vouchers Theme
    And User click on the checkbox of created record and delete record
    Then User navigate to dashboard of voucher theme

  Scenario: Vuchers Theme SORT function
    And user click on  Vouchers Theme
    And User want to check the sorting functionality on voucher theme
    And User check bulk functionality
