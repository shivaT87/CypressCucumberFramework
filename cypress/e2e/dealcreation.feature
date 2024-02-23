 
Feature: Integrating deals with customer and company details
 @Regression
 Scenario: Able to delete the customer created
    Given Create a new contact as customer
    When Open deals and create deals associate with company and customer created
    Then Verify deal created successfully