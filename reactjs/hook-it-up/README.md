# Hook It Up!
The purpose of this lab is to accommodate you with the React Hooks API available in versions 16.8 and higher, to continue practice interacting and displaying information from an API, and to show off how up-to-date you are with React!

## Steps
### Setup
* Create a new project with `create-react-app`
* Delete the `src` and `public` directories
* Create a new `public` directory with an `index.html` inside
* Make a basic html document using the `!` emmet command
* Make sure it has one div with any `id` value you want (`root` is commonly used)
* Create a new `src` directory with an `index.js` inside
* Code the entry point for your entire `<App />` in this file (just like what is initially generated)

### Building a Webapp
* **Design Constraint**: Only utilize `useState` and `useEffect` hooks, and code your webapp **without using any** class based components!!!
* Use https://jsonplaceholder.typicode.com/ as a default REST API, or find your own for this lab if you're adventurous. ;)
* Build a webapp using `react-router-dom` to have two routes
    - `'/'` the home route which will show a component with a preview list of all the objects in the endpoint of your choosing
    - `'/:id/details'` the details route which will show a component specialized in showing all the information for that object's `id`