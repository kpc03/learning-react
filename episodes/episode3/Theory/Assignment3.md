# Assignment - Episode 3

1. **What is JSX?**

   JSX stands for JavaScript XML. It's a HTML-like syntax where JavaScript can also be added using `{}` braces. Browser doesn't understand JSX, so different packages are used to make it understandable by browsers. Babel is one of the packages which helps in transpiling the JSX.

2. **SuperPower of JSX**
   - Biggest superpower is we can add JS code inside HTML and in between the HTML code using curly `{}` braces.
   - It makes our code more readable and manageable for developers.
   - Easy to design.
   - JSX sanitise the code as well before it actually appear on browser.

   **Example of JSX:**

   ```javascript
   const title = <h1> Hi I am JSX title </h1>;

3. **Difference between the following**

    - {TitleComponent} - This value describes that TitleComponent is a JS variable and it's called using curly braces inside HTML elements. {} is used to add JS expressions or variables in it.

    - <TitleComponent /> - This value represents that TitleComponent is a React component which is returning some JSX. Whenever we are calling any component, it is enclosed in <> angle brackets, and it is a self-closing tag.

    - <TitleComponent> </TitleComponent> - Here again, it's a React component but called in a non-self-closing tag. It is the same as the second one, but the only difference is that this can have the possibility of having children.

    **Example of Functional Component:**

    ```javascript
    const TitleComponent = () => {
        // component code here
    };

    **This TitleComponent can be called in all 3 ways mentioned and explained above.**
