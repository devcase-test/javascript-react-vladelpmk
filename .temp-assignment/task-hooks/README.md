> Sytac React-js-hooks task

# Sytac.io test assignment

## Introduction

With this test assignment we want to assess the candidates knowledge of react (hooks), and following implementation requirements. Please read carefully the project setup and the requirements bellow.

## Project setup

This project is made with a simple installation of `npx create-react-app` using typescript.

In `src/App.tsx` you can find a the structure of an 'advanced' :) todo react app. 

There are 3 main sections of the app: 

* At the top of the page you can find a `form` with `text input` and `submit button`. This is meant to be used as a form to add  a new toDo. 
* After that you can find a `label` and `button` used to sync all changes to the data with a reducer. 
* Bellow there are 3 columns, used to display all, completed and uncompleted todos.  

When a used adds a todo, it needs to appear as an uncompleted todo in all and uncompleted lists
When a todo is completed, (click on the complete todo `button`) the todo is completed and appears in all and completed list
Every action, adding a todo, completing a todo needs to be saved i a list of actions. The total number of actions need to be displayed in the label of the second section of the app (next to the sync all changes `button`).
When this is clicked all changes one by one need to be dispatched an removed form the list of pending actions.  

## Requirements

Your assignment is to create an implementation of all the necessary hooks to archive this functionality. Focus on the `hooks.ts` file and implement all the hooks in the return statement
