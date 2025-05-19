# Equivalence Partitioning Test Case - Login

## Test Case ID:
EP-001

## Related Requirement:
REQ-001 - User must be able to log in with valid credentials  
REQ-002 - System must display an error message for invalid login attempts

## Title:
Login with valid and invalid users

## Objective:
Verify that the system allows login for valid users and rejects invalid users.

## Preconditions:
- run the command in terminal: npm run dev
- User is on the login page: http://localhost:5173/login

## Test Steps:
1. Enter the username and password.
2. Click the "Sign in" button.

## Input Partitions:
| Partition Type | Input Username      | Input Password | Expected Result                   |
|----------------|-----------------    |--------------- |-----------------------------------|
| Valid          | admin@example.com   |  admin123      | Redirected to the dashboard page  |
| Invalid        | admen@example.com   |  admin123      | Error message is displayed        |
| Invalid        | admin@example.com   |  wrong_pass    | Error message is displayed        |

## Postconditions:
- User is either logged in or sees an error message.