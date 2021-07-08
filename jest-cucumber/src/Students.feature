Feature: Evaluating a student's approval

    Scenario: Calculating final grade
        Given I have an array of grades
        When I have an average greater or equal to 5
        Then I should be declared approved