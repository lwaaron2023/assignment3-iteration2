# Assignment 3 - React Form
*DUE: Friday, April 11 by 11:59pm. There is a 10 point penalty for submitting the assignment by Saturday, April 12 at 11:59pm.
This assignment is to be done in the same homework group of two as in the previous assignment.

**Enter both of your names below. If we cannot figure out who did the assignment, we cannot grade it!**
### Name: 
### Name: 
---
## Assignment Details
* Use Webstorm to clone this repository on your computer.
  * Close any currently open projects.
  * Click on `Get from VCS` and enter the URL of your GitHub assignment2b repo
  * Select the directory for the repository
* When you have completed the assignment, make sure to push your repository to your assignment3 GitHub repository by the deadline.
  It is the resposibility of the teammate who is not pushing to the repository to confirm that the assignment was properly
  submitted.

Create a blank Vite React.js project in Webstorm with Typescript enabled:  
Webstorm -> New Project -> Vite -> Template: react -> check Use TypeScript Template

Create `Form.tsx`, that is used in `App.tsx`, to create a simple medical device request web form that permits the
user to enter information and submit it. Create `Requests.tsx` to display the requests that have been entered into
the system. Place any additional TSX and TS files in the src folder. Note that this is a front-end application.
Instead of a database backend, you will just store the form data locally into a useState hook.  
See team coaching sessions for more information on forms. 

* `Form.tsx` contains a medical device request form which contains the following elements
  *	First and last names (2 separate attributes) of the employee making the request
  *	Priority of the request: Low, Medium, High, Emergency. 
  *	Name of the department. Just use a string for this assignment.
  *	Hospital location. Use a dropdown (selection) list that includes the following options:
    *	Brigham & Women’s Hospital Main Campus
    *	Chestnut Hill
    *	Faulkner Hospital
    *	Patriot Place
  *	Create two fields related to the medical device request system that is something other than a text input box or dropdown list.
    For example, checkbox, radio buttons, textarea, etc.
  *	Status of the request: Unassigned, Assigned, Working, and Done
  *	Submit button. When this button is pressed, the data in the form is saved into a useState.
* `Requests.tsx` displays the submitted medical device requests. The data does not need to be persistent between application invocations.
* Use `Form.tsx` and `Requests.tsx` in `App.tsx` to display a single page with the medical device request form, followed
  by a horizontal line, and then the list of requests.
  
