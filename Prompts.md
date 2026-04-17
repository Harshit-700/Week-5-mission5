# Prompts Documentation — Kanban Task Board

This document outlines the structured prompts used during the development of the React Kanban Task Board application. Each prompt focuses on implementing a specific functionality related to React components, state management, UI interaction, and persistent storage.

---

## 1. Project Initialization Using Vite

Initialize a new React project using Vite for fast development and optimized build performance. Configure the project structure to include a main entry file (`main.jsx`), a root component (`App.jsx`), and a global stylesheet.

Ensure that the application renders the main `App` component inside the root DOM element.

---

## 2. Kanban Board Layout

Design a Kanban board layout consisting of three primary columns:

* **To Do**
* **In Progress**
* **Done**

Use CSS Grid or Flexbox to create a responsive board layout that adapts across different screen sizes. Each column should act as a container for task cards.

---

## 3. Task Creation Functionality

Implement a feature that allows users to create a new task using a text input field and an Add button. When the user submits the task, it should be added to the **To Do** column.

Each task object should include the following properties:


Ensure that empty tasks cannot be added.

---

## 4. Task Deletion Feature

Add a delete button on each task card that allows users to remove a task from the board. When clicked, the corresponding task should be removed from the tasks state array.

The UI should update automatically after deletion using React state updates.

---

## 5. Task Movement Between Columns

Enable users to move tasks between columns using action buttons on each task card.

Example actions include:

* Move to **To Do**
* Move to **In Progress**
* Move to **Done**

Update the task’s `status` property accordingly so the task renders in the correct column.

---

## 6. Inline Task Editing

Allow users to edit a task directly on the board. When the user clicks on the task text, it should transform into an input field where the text can be modified.

The edited task should be saved when the input field loses focus.

Behavior:

* Click task → Enter edit mode
* Modify text
* Blur event → Save updated task

---

## 7. Priority System Implementation

Introduce a priority system for tasks with three levels:

* High
* Medium
* Low

Users should select the priority from a dropdown when creating a task. The priority should visually affect the task card by changing its border color.

Example priority styling:

* **High → Red Border**
* **Medium → Yellow Border**
* **Low → Green Border**

---

## 8. Persistent Storage with LocalStorage

Implement persistent task storage using the browser’s `localStorage`.

Requirements:

* Save the tasks array whenever the state updates.
* Retrieve saved tasks when the application loads.
* Ensure tasks remain visible after page refresh.

Use the `useEffect` hook to synchronize the tasks state with `localStorage`.

---

## 9. Drag and Drop Interaction

Implement drag-and-drop functionality that allows users to move tasks between columns by dragging the card and dropping it into another column.

Behavior requirements:

* Tasks should be draggable.
* Columns should accept dropped tasks.
* When a task is dropped, update its `status` to match the target column.

This interaction improves the usability and creates a more intuitive task management experience.

---
