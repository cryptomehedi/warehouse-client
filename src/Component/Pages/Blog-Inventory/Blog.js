import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Q. What is the Difference between javascript and nodejs ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Ans: </span>Node.js is a runtime environment built on Google's v8 engine, whereas JavaScript is a genuine high-level programming language used to develop web scripts.
                JavaScript is executed within the browser, however Node.js allows us to run JavaScript outside of the browser.
                JavaScript has the power to change the DOM and add HTML to it, but Node.js does not.
                JavaScript is mostly used to produce front-end web apps or client-side programming, whereas Node.js is utilized for server-side development.
                When building applications, JavaScript adheres to the JavaScript standard, but Node.js is built in C++ and uses the v8 engine to run JavaScript outside of the browser. </p>
            <h2 className="text-2xl mt-9 font-semibold tracking-tight text-gray-900">Q. When should you use nodejs and when should you use mongodb ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Ans:</span> Nodejs is a JavaScript engine that allows you to create whatever application you desire (using the JavaScript programming language). It executes JavaScript code. It is most typically used to create web servers, but it may also be used to create a variety of other sorts of programming.
                        MongoDB is a database management system. MongoDB is used by code within an application or server to save, query, and update data in a database. Many web servers are developed using NodeJS and then utilize MongoDB to store data.

                        Any project requires a programming environment and a runtime library that can build and/or understand your code and provides basic programming tools and assistance. Nodejs is a programming tool for the JavaScript language.
                        If your application requires the capacity to save data so that it can be effectively queried or updated later, you'll almost certainly need to utilize a database. There are several well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB, and Postgres.
                        </p>
            <h2 className="text-2xl mt-9 font-semibold tracking-tight text-gray-900">Q. What is the Differences between sql and nosql databases ?</h2>
            <p><span className="text-xl font-semibold tracking-tight">Ans:</span> SQL databases scale vertically, but NoSQL databases scale horizontally. NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based. SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.


                        Differences between sql and nosql databases.

                        Relational databases are SQL, while non-relational databases are NoSQL.

                        SQL databases have a specified schema and employ structured query language. For unstructured data, NoSQL databases use dynamic schemas.
                        SQL databases scale vertically, but NoSQL databases scale horizontally.

                        NoSQL databases are document, key-value, graph, or wide-column stores, whereas SQL databases are table-based.

                        SQL databases excel in multi-row transactions, while NoSQL excels at unstructured data like documents and JSON.</p>
            {/* <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Q. </h2>
            <p><span className="text">Ans:</span> </p> */}
        </div>
    );
};

export default Blog;