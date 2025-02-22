# Assignment
## Episode 2

1. **What is NPM?**
   - NPM is the world's largest software registry, which contains multiple packages for Node.js. It's an open source s/w registry which is being used from everyone in the world. (developers).
   - Developers can access it through CLI mode. npm alternative is yarn.
   - Cmd for initializing @npm?
     ```sh
     npm init
     ```

2. **What is Parcel/Webpack? Why do we need it?**
   - Parcel is a web application bundler which helps and is used for development and production level applications.
   - It offers various functionalities and features which make our application production-ready. It offers blazing fast performance utilizing multicore processing and requires zero configuration.
   - Webpack is also an application bundler.

3. **Parcel Features:**
   1. Code Splitting (Dynamic imports)
   2. Hot Module Replacement (HMR - automatically update modules in the browser at runtime without needing a whole page refresh)
   3. Tree shaking (Removing unused code)
   4. Minification of code
   5. Compression
   6. Image optimisation
   7. Making our app compatible with older browsers.
   8. Caching while development
   9. Consistent hashing algorithm
   10. HTTPS support in dev mode.

   - **Installation:**
     ```sh
     npm i -D parcel
     ```
     - D stands here as dev dependency.
   - We use parcel to make our app production-ready with beautiful features which make our web app powerful.

4. **What is 'parcel-cache'?**
   - Parcel cache is nothing but a directory which holds the information of the project. Whenever the build starts it stores the info and uses it that parcel-cache dir, it helps to reduce the build time during development. It doesn't have to re-parse or re-analyze everything from the scratch - hence fast in development mode.

5. **What is npx?**
   - NPX is a tool to EXECUTE node packages without even installing it.

6. **What is the difference b/w dependencies vs devDependencies?**
   - **Dependencies**: Dependencies are the external packages that the project relies on to operate successfully in a production environment. They include everything from frameworks to libraries that provide necessary functionalities to perform specific tasks in the application. These dependencies are not only just add-ons they are INTEGRAL parts of the project.
     - **Examples**: 
       - react 
       - react-dom

   - **DevDependencies**: These are a special category of npm packages that are only needed during the development phase of your project. DevDependencies are used for tasks like testing, building, and local development. They are not included when your project is deployed to a production environment.
     - **Examples**:
       - es-lint 
       - parcel 
       - webpack

7. **What is Tree Shaking?**
   - Tree shaking is a term commonly used in JavaScript to describe the removal of dead code (which is not being used).
   - It relies on the import and export statements to detect if code modules are exported or imported for use in JS files.
   - Nowadays bundlers do this tree shaking. (Parcel, webpack follow the concept of Tree Shaking)

8. **What is Hot Module Replacement?**
   - HMR - HMR is a feature that allows devs to update the module in a running application without reloading the page. It significantly speeds up the development process.
     - Retain application state which is lost during a full reload.
     - Save valuable development time by only updating what changed.
     - Instantly make changes to the browser once you save hit save on any CSS/JS file.

9. **List down your favorite 5 superpowers of parcel and describe any 3 of them in your own words.**
   1. HMR - speed up the development process by only updating the code which is changed.
   2. Caching while development - helps to create the build faster.
   3. Tree shaking - removing unused code using import & export statements.
   4. Image optimization.
   5. Compress, minify the code to make it production ready.

10. **What is gitignore? What should we add & not add in it?**
    - The gitignore is a text file that informs Git which files and folders to ignore and not commit it to the repository.
    - We can add whatever we don't want to commit to repo.
    - We should not add any crucial information (like any kind of keys).

11. **What is the difference b/w package.json and package-lock.json?**

    - **package.json**:
      - It contains the basic information about the project.
      - Mandatory for every node project.
      - Important metadata for the project.
      - It contains:
        - name
        - description
        - author
        - script
        - dependencies

    - **package-lock.json**:
      - It describes the exact version tree that was generated to ensure subsequent installs to have the identical tree.
      - It is automatically generated for those operations, where npm modifies either node_modules tree or package.json.
      - It allows future devs to install the same dependencies in the project.
      - It contains:
        - name
        - dependencies
        - locked version of project
        - version:
        - license:

12. **Why should I not modify package-lock.json?**
    - This file tracks the entire dependency tree and the exact version of dependency. It is automatically generated by npm to help for consistent versioning in dev team. Modifying the file may result to change application behavior on different machines.

13. **What is 'node-modules'? Is it a good idea to push modules on git?**
    - Node modules is the directory in Node.js to put modules that we installed locally for the project. Node-modules are heavy and can be accessed from the directory and can be generated again when needed directly.
    - We do 'npm i' so it is safe also too heavy to push it on git and waste memory space. So why to node modules?

14. **What is "dist" folder?**
    - The DIST folder contains the minified version of code when we build our project.
    - The code on production ENV. is served from this folder only.

15. **What is browserlist?**
    - Browserlist is a tool that allows and helps developers to specify the list of target browsers for their projects. It's a popular dependency for front-end libraries.
    - It uses caniuse data to find browsers and their support.
    - **Example**:
      - "last 2 versions"
