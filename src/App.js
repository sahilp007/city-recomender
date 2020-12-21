import React, { useState } from "react";
import "./styles.css";

var buttonList = ["code", "docs", "webdev", "devops"];

var toolsBucket = {
  code: {
    tools: ["VSCode", "Atom", "Sublime", "Notepad++"],
    ratings: ["5/5", "4/5", "3.5/5", "3/5"]
  },

  docs: {
    tools: ["MDN", "stackoverflow", "W3Schools"],
    ratings: ["5/5", "4.5/5", "4/5"]
  },

  webdev: {
    tools: ["Chrome devtools", "codesandbox", "codepen", "Netlify"],
    ratings: ["5/5", "4.5/5", "4/5", "4/5"]
  },

  devops: {
    tools: ["Git", "Docker", "kubernetes"],
    ratings: ["5/5", "4.5/5", "4/5"]
  }
};

export default function App() {
  const [toolName, setToolName] = useState("webdev");

  function clickEventHandler(item) {
    // var tools = toolsBucket[item].tools
    // var ratings = toolsBucket[item].ratings
    // console.log("Tools :",  tools);
    // console.log("Ratings :", ratings);
    setToolName(item);
  }

  return (
    <div className="App">
      <div className="header">
        {" "}
        devTools
        <p>some recommended developer tools</p>
      </div>

      <main>
        <div className="leftPanel">
          {/* this is the left panel */}
          <p>Click to get started</p>

          {buttonList.map((item) => {
            return (
              <button
                className="leftPanelButton"
                key={item}
                onClick={() => clickEventHandler(item)}
              >
                {item}{" "}
              </button>
            );
          })}
        </div>

        <div className="rightPanel">
          {/* This is the right Panel */}

          <p>Recommendations: </p>

          <ul>
            {toolsBucket[toolName].tools.map(function (item, index) {
              return (
                <li key={item}>
                  {" "}
                  {item}
                  {/* access the ratings using index */}
                  <span> {toolsBucket[toolName].ratings[index]} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
