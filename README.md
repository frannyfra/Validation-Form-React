# React Form with Validation - React Hooks 

!![Screenshot from 2021-03-02 22-41-19](https://user-images.githubusercontent.com/46782373/109725229-be28d000-7ba8-11eb-9845-6c60535b0607.png)
[](https://i.imgur.com/hcX0NFT.png)



## About the form
The form contains five inputs field where user can type a name, surname, email, telephone number and date of birth.

The **form validation** is manual and the logic is built using JavaScript and React, no external libraries have been used for validation, a part from **react-phone-number-input** which has been implemented for international phone validation.
I also have used **React Date Picker**, a simple and reusable Datepicker component for React which offer an easy and tasteful calendar used by the user in order to select a birth date.

### The logic of the app


The app has been built in **two steps logic**.

On the first step there could be different scenarios.
1. the user **does not fill up** the input fields and press the check button, in this case an error message will appear and remind that the fields are required;
2. the user **fill up the form but wrongly**, therefore the validation is not successful, in this case the user will get an error message related to the field that has not be filled correctly;
3. the user fill up correctly the form;

The validation is made against a logic built using Regex patterns for email, name and surname. Phone is validated with the library.

On the first two scenarios the user will not be able to proceed further and visualize the resume info card till all the inputs are filled and correct, in the third case, when the user press the check button it will appear a resume of all the information that the user typed inside the input fields.

At this stage the user can read the informations and if happy can finally submit the form.

The submit form will trigger an age check which will end up with a **successful submition** if the user age is between 18 and 99 and (unfortunately) **unsuccessful** if the user is younger than 18.

A popup message will show the message for the user.

### The architecture of the app

The form is composed from different components. The idea behind is to modularize the app and creat components which can be easily reused.

![](https://i.imgur.com/PyBRHdK.png)

### Steps 

The project has been created using the command **npx create-react-app my-app** which creates a frontend build pipeline and under the hood, it uses Babel and webpack. It doesn’t handle backend logic or database but it is possible to add them to it.

**React-numeric-input** and **react-datepicker** have been install with Node Package Manager.
 
The form has been styled using **Less**.


---


Here' s the link for the deployed form:

*https://frannyfra.github.io/Validation-Form-React/*

Alternatively clone it locally and run: `npm install` and after `npm start`

**Have fun!!!**
