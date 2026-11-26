Feature: OrangeHRM Login Functionality

  Background:
    Given user launches the application

  Scenario: TC_LOGIN_001 - Login page discovery
    Given user is on the Login page
    Then Login page should be displayed

  Scenario: TC_LOGIN_002 - Successful login
    Given user is on the Login page
    When user enters valid credentials
    And user clicks Login
    Then Dashboard should be displayed

  Scenario Outline: TC_LOGIN_INVALID - Invalid credentials
    Given user is on the Login page
    When user enters "<username>" and "<password>"
    And user clicks Login
    Then an invalid credentials message should be displayed

    Examples:
      | username         | password      |
      | nonexistent-user | wrong-pass    |
      | Admin            | WrongPassword |

  Scenario Outline: TC_LOGIN_REQUIRED - Required fields
    Given user is on the Login page
    When user enters "<username>" and "<password>"
    And user clicks Login
    Then required field validation should be displayed

    Examples:
      | username | password |
      |          |          |
      |          | admin123 |
      | Admin    |          |

  Scenario: TC_LOGIN_037 - Logout terminates session
    Given user logs in with valid credentials
    When user logs out
    And user navigates directly to the dashboard URL
    Then Login page should be displayed

  Scenario: TC_LOGIN_009 - Keyboard navigation
    Given user is on the Login page
    When user navigates controls using Tab
    Then login controls should receive visible focus in logical order

  Scenario: TC_LOGIN_011 - Password masking
    Given user is on the Login page
    When user enters the password
    Then Password field should mask the entered value
