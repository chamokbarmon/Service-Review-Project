import React from 'react';

const Blog = () => {
    return (
        <div className='bg-red-600 text-white p-20'>

        <h3>1. Difference between SQL and NoSQL ?</h3> <br />
        <h4> Ans : SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL</h4>
          <br />
         <h3>2. What is JWT, and how does it work?</h3> <br />
          <h4>Ans : What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</h4>
           <br />
           <h3>3. What is the difference between javascript and NodeJS?</h3> <br />
           <h4>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h4>
           <br />
           <h3>4. How does NodeJS handle multiple requests at the same time?</h3> <br />
           <h4>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</h4>
        </div>
    );
};

export default Blog;