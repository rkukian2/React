# ToDo List Application

## Introduction

This is a simple and intuitive ToDo List application built using React. It allows users to add, edit, and delete tasks, with all tasks persisted in the browser's local storage.

## Features

- Add new tasks to your ToDo list.
- Edit existing tasks.
- Delete tasks.
- Persist tasks using local storage, so your list remains even after refreshing the page.

## Installation

- Clone the repository
- Navigate to the project directory
- Install dependencies using *npm install*
- Run the app using *npm run dev*

## Usage

- Add tasks: Type your task into the input field and click the add button
- Editing: Click the edit icon next to an item to edit it. This will remove the item and insert a new item with the updated val
- Deleting: Click the trash icon to remove an item

## Components
- App.jsx: 
    This is the main component that manages the state of the application, including the list of todos and the current value of the input field. It also handles adding, editing, and deleting todos.
- TodoInput.jsx: 
    This component contains the input field where users can type their tasks and the button to add tasks to the list.
- TodoList.jsx:
    This component renders the list of todos. It maps over the todos array and renders a TodoCard for each item.
- TodoCard.jsx
    This component represents an individual todo item. It displays the task and provides buttons to edit or delete the task.

## Styling
-The font used is 'Inter' for general text and 'Press Start 2P' for headers and buttons.
-The UI elements, like buttons and input fields, have a consistent design with rounded corners and hover effects.

