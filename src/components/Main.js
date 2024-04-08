import React from "react";

export default function Main() {
  return (
    <main>
      <h1 className="main--title">Fun fact about React</h1>
      <ul className="main--facts">
        <li>Was first released on 2013</li>
        <li>Was originally crated by Jordan Walke</li>
        <li>
          React is a JavaScript library, but the fact remains that it has
          several characteristics of a framework.
        </li>
        <li>
          React.js uses a component-based architecture, allowing developers to
          build encapsulated components that manage their own state.
        </li>
        <li>
          React.js uses a virtual DOM, which is a lightweight copy of the actual
          DOM. This allows React to efficiently update and render UI components.
        </li>
        <li>Has well over 100k stars on GitHub</li>
        <li>
          React follows a unidirectional data flow, which means that data flows
          in one direction, making it easier to understand and predict how
          changes will affect the application state.
        </li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousand of enterprise app, including mobile app</li>
      </ul>
    </main>
  );
}
