Feature: creating a end-to-end (e2e) tests for creating a gist.

Scenario: As a user, I want to create a public gist
  Given user login to gist homepage
  When user create new public gist
  Then user will see data new public gist

Scenario: As a user, I want to see my list of gists.
  When user go to list gist
  Then user will see list data new public gist

Scenario: As a user, I want to edit an existing gist
  When user edit data new public gist
  Then user will see updated gist

Scenario: As a user, I want to delete an existing gist
  When user delete data new public gist
  Then show notification success deleted
  