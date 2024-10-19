# React Site WIP Final Project
Static React project based around cooking recipes.
## Description

This is assignment is a month long final project based on React and Typescript. The foundation for this project has been made and will be based around user created cooking recipes that can be saved to a local backend like MockAPI. The example data has already been made and MockAPI is already in use. 

For the second week, we have to implement all of the CRUD operations. I did went ahead a bit since my project makes use of forms and useEffects, but the static data is still present. I'm mainly using prop drilling to pass down the required data/functions necessary to make update and delete work. The example data shown in the video demo will not appear because an env file is used to hide the MockAPI key. I beleive this also makes the recipe form broken as well due to env file.

## Project Requirements

1. No red errors/warnings in the console in the browser.
2. No type errors in VS Code.

At this point, your project must meet these new requirements:

- A user can create new items (the new items will all have the same data)
- A user can delete items
- A user can update at least one property on the items

As well as the requirements from last week:

- It has at least 3 React components
- It’s displaying the test data
- It’s using at least 1 prop

## Usage

To get a local copy up and running follow these simple steps. This also assumes you have node installed to download npm packages.

1. **Clone the repo (SSH Method Below)**
    ```sh
    git clone git@github.com:Exo-MDR-CD2000/multi-react-project.git
    ```
2. **Checkout Branch into "main"**
    ```sh
    git checkout main
    ```
3. **Install required packages**
    ```sh
    npm install
    ```
4. **Open a second terminal in the project repo to start Vite**
    ```sh
    npm run dev
    ```
5. **Local API data is hosted on MockAPI and requires no further action**

## Link(s)

- Promineo Videos and Independent Research
- [Github Repo](https://github.com/Exo-MDR-CD2000/multi-react-project)