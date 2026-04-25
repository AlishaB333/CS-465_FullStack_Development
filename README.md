# CS-465

**Architecture**
In my project I used a couple of front-end development tools. Such as, "Express HTML" for server-side rendering and a Single-Page Application (SPA) with "React" for dynamic user interactions. The SPA provided a smoother, app-like feel by updating content without reloading the page while "Express" improved initial load times. For the backend I used a NoSQL MongoDB database because it's "schema-less" BSON design allows you to add or change data fields without complex migrations, making it ideal for Agile development and rapid prototyping.

**Functionality**
Our program uses both JSON and Javscript, which have different functions in a Full Stack project. JSON is a data format used to store and exchange data, whereas JavaScript is a programming language that can parse and manipulate that data. They work together in the project by the backend (Node.js) sending data as JSON, which the frontend (JavaScript) consumes and displays. During the full stack process I refactored the code a few times to improve it. I refactored API routes to remove redundant database queries, improving latency. I created a few Handlebar "partials" to create a component of HTML code with descriptions that I can reuse in several different pages if needed. Creating reusable components are very beneficial because they save time and ensure consistency. They reduce bugs because a change in the component updates the entire application, rather than requiring individual edits to every instance.

**Testing**
My testing focused on RESTful endpoints. I used "GET" to retrieve data, "POST" to create, "PUT" to update, and "DELETE" for removal. Testing with security involves verifying that only authorized users can access specific routes using JSON Web Tokens (JWT). The main difficulty in Testing with this security is in ensuring API keys are not exposed during testing.

**Reflection**
This course was a great help to me. It helped me bridge the gap between frontend design and backend structure, and I now have a better visualization of the entire process to create a website front to back. Through this course I have mastered CRUD operations (Create, Read, Update, Delete) with MongoDB/Express, built responsive React SPAs, and improved my understanding of secure API design, all of which make me a strong candidate for full-stack developer positions.
