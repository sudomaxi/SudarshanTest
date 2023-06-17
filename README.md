1.)Mention the working of internet website in terms of front end and back end divisions.
The working of an Internet website typically involves two main divisions: the front end and the back end.
Front End:
The front end refers to the part of a website that is directly accessible to users and is responsible for presenting the website's content and user interface. It involves the technologies and languages that run in a user's web browser, such as HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. Here's how each component works:
HTML: HTML provides the structure and content of the web page using elements like headings, paragraphs, images, links, and forms. It defines the layout and hierarchy of the information presented.
CSS: CSS is used to style the HTML elements and control their appearance. It defines the colors, fonts, spacing, and other visual aspects of the website. CSS allows web developers to create visually appealing and consistent designs.
JavaScript: JavaScript is a programming language that enables dynamic and interactive elements on a website. It adds interactivity and behavior to web pages, allowing for features like form validation, animations, and content updates without requiring a page refresh.
Front-end development involves writing and organizing these components to create a responsive, user-friendly, and visually appealing website that users can interact with directly.
Back End:
The back end refers to the server-side of a website that handles the processing and storage of data, as well as the communication between the website and databases or external services. It involves the technologies and languages that run on the server and are responsible for the website's functionality. Here are some key components:
Server: The server is a computer or a network of computers that hosts the website and responds to user requests. It handles tasks such as receiving requests, processing them, and sending back responses.
Programming languages and frameworks: Back-end development often involves using programming languages like Python, Java, Ruby, or PHP, along with frameworks such as Django, Flask, Ruby on Rails, or Laravel. These languages and frameworks enable developers to build the logic and functionality of the website.
Databases: Websites often require persistent storage to store and retrieve data. Back-end developers use databases like MySQL, PostgreSQL, MongoDB, or SQLite to manage and organize data efficiently. Databases store information such as user profiles, blog posts, product listings, and more.
APIs (Application Programming Interfaces): APIs allow different software systems to communicate with each other. Back-end developers may create APIs to enable interaction between the website and external services or to provide data to other applications.
Security and authentication: Back-end developers implement security measures to protect user data, prevent unauthorized access, and handle user authentication and authorization. This involves techniques such as encryption, secure connections (HTTPS), and user authentication systems like username/password or OAuth

2.)What are the tags in HTML? Explain the each category of tags with an example. 

Heading Tags:

'<h1>': Represents the main heading.
'<h2>' to '<h6>': Represents subheadings of decreasing importance.
Paragraph Tags:

'<p>': Defines a paragraph of text.
Anchor Tags:

'<a>': Creates hyperlinks to other web pages or resources.
Image Tags:

'<img>': Inserts images into a web page.
List Tags:

'<ul>': Defines an unordered (bullet-point) list.
'<ol>': Defines an ordered (numbered) list.
'<li>': Represents a list item within <ul> or <ol>.
Table Tags:

'<table>': Represents a table structure.
'<tr>': Defines a table row.
'<th>': Represents a table header cell.
'<td>': Represents a table data cell.

3.)Explain the working procedure of virtual DOM.
The Virtual DOM is a concept used in frameworks like React to improve performance by minimizing direct manipulation of the browser's Document Object Model 
(DOM). It involves creating a lightweight virtual representation of the DOM, comparing it to the previous version, and selectively updating only the 
necessary parts of the actual DOM. This approach reduces unnecessary re-renders and improves the efficiency of updating the user interface.

4.)Mention some differences between mysql and nosql.
Data model: MySQL is a structured, relational database system with predefined schemas and relationships. NoSQL databases have flexible, schema-less or dynamic schema structures.
Scalability: MySQL scales vertically (increasing resources of a single server) and supports limited horizontal scaling. NoSQL databases are designed for 
horizontal scalability, distributing data across multiple servers.
Data structure: MySQL enforces rigid schemas, while NoSQL databases provide flexible data models suitable for unstructured or rapidly changing data.
Querying: MySQL uses SQL for complex queries, including JOINs and transactions. NoSQL databases have their query languages/APIs tailored to their data 
models.
ACID compliance: MySQL is ACID-compliant, ensuring data integrity and consistency. NoSQL databases prioritize scalability and
 performance, often relaxing ACID guarantees.

5.)Explain any one DBMS technology in your own word. 
MongoDB is a popular NoSQL (non-relational) database management system that focuses on flexibility, scalability, and performance. It differs from traditional relational databases like MySQL by using a document-oriented data model.
In MongoDB, data is stored in flexible, self-contained documents called BSON (Binary JSON) documents. BSON documents are similar to JSON objects and can contain varying sets of fields with different data types. This schema-less nature allows for easy handling of unstructured or evolving data.

MongoDB's key features include:
Scalability: MongoDB is designed for horizontal scalability, allowing you to distribute data across multiple servers and handle high traffic loads efficiently. It supports automatic sharding, which partitions data across different nodes, enabling seamless scalability as your application grows.
Flexibility: With MongoDB, you can store complex, nested data structures within a single document. This eliminates the need for complex JOIN operations often required in relational databases. Additionally, MongoDB's flexible schema allows for dynamic updates and schema evolution, making it suitable for agile development and rapid iteration.
Querying and Indexing: MongoDB provides a powerful querying language that supports a wide range of queries and aggregations. It also supports indexing, allowing you to optimize query performance by creating indexes on specific fields.
High Availability: MongoDB offers features like replica sets and automatic failover, ensuring high availability and fault tolerance. Replica sets maintain multiple copies of data across different servers, allowing for automatic failover in case of a primary node failure.
Integration: MongoDB provides robust APIs and drivers for various programming languages, making it easy to integrate into your application stack. It also supports geospatial queries and indexing, making it suitable for location-based applications.
MongoDB's versatility and scalability make it well-suited for applications that handle large volumes of unstructured or rapidly changing data, such as content management systems, real-time analytics, and mobile applications.


