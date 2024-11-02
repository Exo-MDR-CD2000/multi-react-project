# React Site Final Project: Week 4

Final site project based around cooking recipes using React and Typescript

## Description

This assignment is a month long final project based on React and Typescript. The foundation for this project has been made and is based around user created cooking recipes that is saved to a local backend with MockAPI. MockAPI has already been implemented.

For the fourth week, we had to implement an online API that can allow for all CRUD operations. I had already done this a few weeks ago with the use of MockAPI. There is a separate recipe service file with all of the routing logic to the mockup backend. useEffect hooks are implemented in their respective react pages where it is necessary to fetch data from the API. There is also other async functions for the other CRUD requirements in the Home Page and in the Recipe Page.

Styling was revamped again and other small changes were made. React router was refactored to use a Layout component which includes the Navbar, Footer, and a container for rendering child routes. The Outlet import is used to render child components (the other pages) which are in the App component. It's not exactly one-to-one with the video demonstration, but this implementation is simply one method of doing it. The bootstrap containers were re-worked so that each major div had its own container. This was done to implement a simple color gradient to certain divs or sections.

There's a lot of smaller components that were made to enhance the user experience like the toast notifications, loading messages, changing the document title in the tabs, etc.

## Project Requirements

1. No red errors/warnings in the console in the browser.
2. No type errors in VS Code.

At this point, your project must meet these new requirements:

- Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
- Using an online API of your choice
- Contain at least 10 custom components
- Allow for all CRUD operations via one or more APIs

As well as the requirements from last week:

- A user can create new items (the new items will all have the same data)
- A user can delete items
- A user can update at least one property on the items

## Usage

To get a local copy up and running follow these simple steps. This also assumes you have node installed to download npm packages. You can also click on the deployed link as well!

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

## Deployed Link

- [Netlify Deploy Link](WIP)

## Link/Source(s)

- [Bootstrap About Me Template](https://bootstrapbrain.com/demo/components/abouts/about-1/)
- [Site logo icon generated from ucraft](https://www.ucraft.com/ai-logo-generator/app)
- [Github Repo](https://github.com/Exo-MDR-CD2000/multi-react-project)
- Promineo Videos and Independent Research
- Instructor help from George Heeres about api config file use