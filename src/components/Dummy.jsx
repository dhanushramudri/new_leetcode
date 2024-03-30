import ReactCodeMirror from "@uiw/react-codemirror";
import React, { useEffect, useState } from "react";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useRecoilStateLoadable } from "recoil";

const Dummy = () => {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("");
  useEffect(() => {
    console.log(code);
  }, [code]);

  const submitCode = () => {
    console.log(code);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          padding: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: language === "python" ? "black" : "white",
            color: language === "python" ? "white" : "black",
          }}
          onClick={() => {
            setLanguage("python");
          }}
        >
          Python
        </button>
        <button
          style={{
            backgroundColor: language === "java" ? "black" : "white",
            color: language === "java" ? "white" : "black",
          }}
          onClick={() => {
            setLanguage("java");
          }}
        >
          java
        </button>
        <button
          style={{
            backgroundColor: language === "cpp" ? "black" : "white",
            color: language === "cpp" ? "white" : "black",
          }}
          onClick={() => {
            setLanguage("cpp");
          }}
        >
          Cpp
        </button>
        <button
          onClick={submitCode}
          style={{
            backgroundColor: "orange",
            color: "white",
            padding: "5px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
      <ReactCodeMirror
        width="100%"
        height="100vh"
        onChange={(code) => setCode(code)}
        // value={boilerPlate}
        theme={vscodeDark}
        // onChange={onChange}
        extensions={[javascript()]}
        style={{ fontSize: 16 }}
      />
    </div>
  );
};

export default Dummy;
