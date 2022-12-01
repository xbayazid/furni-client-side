import React from "react";
import "./Blog.css";

const Blogs = () => {
  return (
    <div className="p-8  bg-teal-200">
      <h1 className="text-3xl blog-title mt-20 text-center ">Our Blogs</h1>
      <div className="xl:w-1/2 mx-auto my-24">
        <div
          tabIndex={0}
          className="collapse  collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <ul>
              <li>1. Local state</li>
              <li>2. Global state</li>
              <li>3. Server state</li>
              <li>4. URL state</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              The Prototypal Inheritance is a feature in javascript used to add
              methods and properties in objects. It is a method by which an
              object can inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box my-2"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              <span className="font-bold">Unit Test:</span> A unit test is a way
              of testing a unit - the smallest piece of code that can be
              logically isolated in a system. In most programming languages,
              that is a function, a subroutine, a method or property.
            </p>
            <br />
            <p>
              They enable you to catch bugs early in the development process.
              Automated unit tests help a great deal with regression testing.
              They detect code smells in your codebase. For example, if you're
              having a hard time writing unit tests for a piece of code, it
              might be a sign that your function is too complex.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              Vue provides higher customizability and hence is easier to learn
              than Angular or React. Further, Vue has an overlap with Angular
              and React with respect to their functionality like the use of
              components. Hence, the transition to Vue from either of the two is
              an easy option.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
