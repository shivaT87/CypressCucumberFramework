
Feature: Create New contact as customer and add events, deals.

 @Regression
 Scenario: Able to Create new customer and verify the same
    Given Visit free crm website
    When Create a new customer
    Then Verify Created customer
 @Sanity
 Scenario: Able to add events to customer and verify the same
    Given Load the created customer
    When Add event to customer
    Then Verify event added successfully
 @Sanity
 Scenario: Able to add deals to customer and verify the same
    Given Reload the created customer
    When Open deals tab and create new deal
    Then Verify deal added successfully
