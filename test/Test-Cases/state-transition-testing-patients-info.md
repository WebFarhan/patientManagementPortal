# State Transition Testing - Patients information access and update flow

## Test Case ID:
STT-001

## Related Requirements:
FR04 - User can access patients information  
FR05 - User can view patient's details
FR06 - User can view all recent appointments details  

FR07 - User can edit patient's information (Not Implemented)    
FR10 - User can delete patient from the list (Not Implemented)



## Title:
Validate state transitions to access patients list

## Objective:
Verify that the system correctly handles state transitions to access and perform operations on patients list.

## Preconditions:
- User is logged in on the demo site

## State Transitions:

| Current State      | Action                    | Next State            | Expected Result                  |
|------------------- |----------------------     |--------------------   |----------------------------------|
| User in dashboard  | Click on Patients tab     | Redirect to patients  | List of all the patients are     |     |
|                    | side nav bar              | list page             | displayed                        |
| User in patients   | Click on patient id       | Redirect to clicked   | User can view chosen patient's   |
| list page          |                           | patient's detail page | detail information               |
| User in patient    | Click on View all link of | Redirect to patient's | List of patients appointments    |
| details page       | Recent appointments box   | appointments page     | will be displayed                |                 |


## Postconditions:
- User can access patients information and view all recent appointments.