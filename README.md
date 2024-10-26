# React Site WIP Final Project: Week 3
React project based around cooking recipes.
## Description

This assignment is a month long final project based on React and Typescript. The foundation for this project has been made and will be based around user created cooking recipes that can be saved to a local backend like MockAPI. The example data has already been made and MockAPI is already in use. 

For the third week, we had to implement react forms. The forms are in working order and allow a user to create new recipes. The recipes are appended to the recipe list and have full CRUD operations via an update modal component. There is also a simple recipe search form function and a reset button to clear the search state to default values. 

Styling was revamped a bit and now all recipe cards have transition and hover effects. Recipe cards can now be collapsed with the current collapsed state managed by localstorage. Cards can maintain their collapsed state after page refresh. A scroll back to top button was added to account for longer recipe lists. The mockAPI key was moved into a separate config file instead of using environmental files. 

## Project Requirements

1. No red errors/warnings in the console in the browser.
2. No type errors in VS Code.

At this point, your project must meet these new requirements:

- It has either a create form or an update form with at least 2 inputs

As well as the requirements from last week:

- It has at least 3 React components
- It’s displaying the test data
- It’s using at least 1 prop

- A user can create new items (the new items will all have the same data)
- A user can delete items
- A user can update at least one property on the items

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
5. **API data is hosted on MockAPI and requires no further action**

## Link(s)

- Promineo Videos and Independent Research
- [Github Repo](https://github.com/Exo-MDR-CD2000/multi-react-project)