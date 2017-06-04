Feature: Product listing -> filter by colour

  As a customer
  I would like to refine my search results based on color
  So that I can view the products of my liking

  Scenario: Example scenario
    When I am on the landing page
    Then I can see logo in navigation bar

  Scenario: Customer filters by colour
    Given I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
    And I select colour 'Black'
    When I apply these filters
    Then Filter button has 1 filter
    And Filter returns a product list

  Scenario: Customer filters by multiple colours
    Given I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
    And I select colour 'White'
    And I select colour 'Black'
    When I apply these filters
    Then Filter button has 1 filter
    And Filter returns a product list

  Scenario: Customer clears colour filters
    Given I am viewing product list tops
    And I filter the product list
    And I filter by option "Colour"
    And I select colour 'White'
    And I clear all filters
    When I apply these filters
    Then Filter button has no filter
    And Filter returns a product list
