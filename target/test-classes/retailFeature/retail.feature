Feature: sign up feature

  Background: Login the user
    Given User is on the Retail application
    And User enter the username and password
    And click on login button
    And User navigate to the Dashboard
    And User click on Button-menue
    Then User click on Sales

Scenario Outline: Returns
    And User click on returns
    Then Click on Add button
    And Enter the "<Order ID>","<Order_Date>", "<Customer>","<First Name>","<Last Name>","<E-Mail>","<Telephone>","<Product>","<Model>","<Quantity>","<Comment>"
    Then User select the Return_Reason and Opened and Return_Action and Return_Status
    Then User click on save  button
    And check the displayed message

    Examples: 
      | Order ID    | Order_Date | Customer | First Name | Last Name | E-Mail         | Telephone | Product | Model | Quantity | Comment    |
      | 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 |       12 | not a good |

  #| qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  # | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1233 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   |    12345 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju12334  | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    |       1234 | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | @#$%       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       |      1234 | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha123    | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | @!$%      | anju@gmail.com | 234567891234 | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | avfsdsgdjf   | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | 23achsd      | Adfd    | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 |     123 | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd123 | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | @#$     | 12345 |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | efdf  |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12aaa |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | @#$   |       12 | not a good |
  #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12345 | asd      | not a good |
  #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | asd12    | not a good |
  #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |
  #|          | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     |            | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       |           | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       | cha       |                |  23456789 | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |           | Adfd    | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 |         | 12345 | @#$      | not a good |
  #|      123 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    |       | @#$      | not a good |
  Scenario Outline: Returns
    And User click on returns
    Then Click on Add button
    And Enter the "<Order ID>","<Order_Date>", "<Customer>","<First Name>","<Last Name>","<E-Mail>","<Telephone>","<Product>","<Model>","<Quantity>","<Comment>"
    Then User select the Return_Reason and Opened and Return_Action and Return_Status
    Then User click on cancle button
    And user navigate to dashboard

    Examples: 
      | Order ID | Order_Date | Customer | First Name | Last Name | E-Mail         | Telephone | Product | Model | Quantity | Comment    |
      #| 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      # | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1233 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   |    12345 | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju12334  | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    |       1234 | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | @#$%       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       |      1234 | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha123    | anju@gmail.com |     23456789 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | @!$%      | anju@gmail.com | 234567891234 | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | avfsdsgdjf   | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com | 23achsd      | Adfd    | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 |     123 | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd123 | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | @#$     | 12345 |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | efdf  |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12aaa |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | @#$   |       12 | not a good |
      #| 12344344234 | 2010-9-7   | anju1    | anju       | cha       | anju@gmail.com |   2345678923 | Adfd    | 12345 | asd      | not a good |
      #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | asd12    | not a good |
      #| 12344344234 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |     23456789 | Adfd    | 12345 | @#$      | not a good |
      |    12345 | 2010-9-7   | @#$%     | anju       | cha       | anju@gmail.com |  23456789 | Adfd    | 12345 | @#$      | not a good |
      
Scenario Outline: Bug present in Return product
    And User click on returns
    And Click on Add button
    And User Enter the "<Order ID>","<Order_Date>", "<Customer>","<First Name>","<Last Name>","<E-Mail>","<Telephone>","<Product>","<Model>","<Quantity>","<Comment>"
    And User select the Return_Reason and Opened and Return_Action and Return_Status
    And User click on save  button
    Then check the displayed message

    Examples: 
      | Order ID    | Order_Date | Customer | First Name | Last Name | E-Mail         | Telephone      | Product | Model | Quantity | Comment    |
      | 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |       23456789 | Adfd    | 12345 |       12 | not a good |
      | qqqqqqq     | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com | 23456789121312 | Adfd    | 12345 |       12 | not a good |
      | 12344qqqqq  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com | dfdsaf         | Adfd    | 12345 |       12 | not a good |
      | @#$%        | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com | dsfsa345       | Adfd    | 12345 |       12 | not a good |
      | 12344344234 | 7-9-2010   | anju     | anju       | cha       | anju@gmail.com | @#$%           | Adfd    | 12345 |       12 | not a good |
      | 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |       23456789 | Adfd    | 12345 | aaaa     | not a good |
      | 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |       23456789 | Adfd    | 12345 | asas12   | not a good |
      | 12344344234 | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com |       23456789 | Adfd    | 12345 | @@#$     | not a good |
      | qqqqqqq     | 2010-9-7   | anju     |       1234 | cha       | anju@gmail.com | 23456789121312 | Adfd    | 12345 |       12 | not a good |
      | 12344qqqqq  | 2010-9-7   | anju     | @#$        | cha       | anju@gmail.com | dfdsaf         | Adfd    | 12345 |       12 | not a good |
      | @#$%        | 2010-9-7   | anju     | anju       |       123 | anju@gmail.com | dsfsa345       | Adfd    | 12345 |       12 | not a good |
      | qqqqqqq     | 2010-9-7   | anju     | anju       |@#$%      | anju@gmail.com | 23456789121312 | Adfd    | 12345 |       12 | not a good |
      | 12344344234  | 2010-9-7   | anju     | anju       | cha       | anju@gmail.com | dfdsaf         | Adfd    | 12345 |       12 | not a good |
      