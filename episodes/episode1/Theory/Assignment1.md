<!-- It will be the detailed document of every topic - notes + assignment -->

- What is Emmet? <br/>
    - Emmet is a plug-in for text editors that improves the HTML & CSS workflow. 
    - Ex: When you type ! and press ENTER it will give you HTML boilerplate and similarly with other HTML elements. It also helps with nested html tags.

- Difference b/w Library & Framework <br/>
    - Library & Framework both are collections of pre-written code that developers ise to speed up the process of software development but purpose os different. <br/>
   `LIBRARY`
        - Dev has the control over the flow
        - More Flexible and allowing selective usage.
        - Ex: React <br/>
    `FRAMEWORK`
        - It controls the overall flow of application.
        - Its more rigid and strict convention & guidelines.
        - Ex: Angular

- What is CDN? Why do we use it? <br/>
    - CDN stands for Content Delivery Network. It is geogrpahically distributed group of servers that caches the content close to end users. CDN doesn't host content but it caches the content for better web performance, security, bandwidth cost and SEO Ranking.<br/>
    `Content can be`
        - HTML Page
        - JS Files
        - Images
        - Videos, etc
    - AWS is CDN service

- Why is React known as React? <br/>
    - React is called React because of it quick response. It quickly change the elements without reloading the whole page. It also introduce the concept of Virtual DOM which actually helps in doing things faster.

- What is crossorigin in script tag? <br/>
    - crossorigin attribute is used when a script on one domain is trying to fetch or interact with the resources from another domain.
    crossorigin = "anonymous" | crossorigin = "use-credentials"

- What is the difference between React and React DOM? <br/>
    - React is JS library which is being used to build user interface. It uses component based approach.
    - React DOM is a package that specifically handles the integration of React with DOM. It acts as bridge between REACT and BROWSER. It provide different methods for different purpose from which render() is one of the method to render any react element in any specific DOM element.

- What is difference between react.development.js and react.production.js files via CDN? <br/>
  `react.development.js` - This file's includes more warnings and error messages to help developer identify and fix issues. Its size is larger than the production file and it is optimised for providing the more detailed information. <br/>
  `react.production.js` - This file includes the minified code which doesn't contain the warning and error messages. Its size smaller and tuned for production use for better performance.

- What is async and defer?  <br/>
    Both are boolean attributes which are used in script tags to load the external scripts efficiently into our web page.
    
    Async - In Async, the script fetching starts during HTML parsing and once the scripts are fetched it blocks the HTML parsing and executes the script first and then again continues with HTML parsing.
    Async attribute don't follow the order of fetching the script and execution. And if scripts are dependent on each other it will throw error so in that case defer should be used because it follows the order.
    Async can be used when scripts are not dependent on each other like google analytics scripts.
    
    Defer - Here HTML parsing continues and scripts are fetching parallely and the script execution starts when whole parsing is completed. No render blocking time for user. It follows the order in scripts. So good to use when scripts are dependent on each other.
