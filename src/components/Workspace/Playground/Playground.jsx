import React, { useDeferredValue, useEffect, useState } from "react";
import PreferenceNav from "./preferenceNav/PreferenceNav";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import EditorFooter from "./EditorFooter";

const Playground = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const boilerPlate = `function twoSum(nums,target){
    // Write your code here 
  };`;
  const executeCode = (value) => {
    try {
      const fn = new Function(value);
      fn();
    } catch (error) {
      console.error("Error executing code:", error);
    }
  };

  const handleRunCode = () => {
    executeCode(value);
  };

  return (
    <div className="flex flex-col bg-dark-layer-1 relative h-full">
      <div className="flex flex-col bg-dark-layer-1 relative overflow-x-hidden h-[calc(100vh-50px)]">
        {/* <PreferenceNav settings={settings} setSettings={setSettings} /> */}

        <Split
          className="h-full"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="w-full overflow-auto h-full">
            <ReactCodeMirror
              onChange={(value) => setValue(value)}
              // value={boilerPlate}
              theme={vscodeDark}
              // onChange={onChange}
              extensions={[javascript()]}
              style={{ fontSize: 16 }}
            />
          </div>
          <div className="w-full px-5 overflow-auto pb-20">
            {/* Test case heading */}
            <div className="flex h-10 items-center space-x-6">
              <div className="relative flex h0full flex-col justify-center cursor-pointer">
                <div className="text-sm font-medium leading-5 text-white">
                  TestCases
                </div>
                <hr className="absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white" />
              </div>
            </div>
            <div className="flex">
              {/* case1 */}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 1
                  </div>
                </div>
              </div>
              {/* case 2 */}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 2
                  </div>
                </div>
              </div>
              {/* Case 3 */}
              <div className="mr-2 items-start mt-2 text-white">
                <div className="flex flex-wrap items-center gap-y-4">
                  <div className="font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap">
                    Case 3
                  </div>
                </div>
              </div>
            </div>
            <div className="font-semibold my-4">
              <p className="text-sm font-medium mt-4 text-white">Input</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                nums:[2,7,11,15],target:9
              </div>
              <p className="text-sm font-medium mt-4 text-white">Output</p>
              <div className="w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2">
                [0,1]
              </div>
            </div>
            <button
              onClick={handleRunCode}
              style={{ backgroundColor: "beige" }}
            >
              Runn
            </button>
            {/* <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, accusamus pariatur nemo quae iste modi repellendus
              voluptatum quis ea corrupti temporibus maiores esse. Porro
              doloremque, excepturi quis magnam facilis eos.
            </div> */}
          </div>
          <EditorFooter onClickFunction={handleRunCode} />
        </Split>
      </div>
    </div>
  );
};

export default Playground;
