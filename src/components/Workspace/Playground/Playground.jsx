import React from "react";
import PreferenceNav from "./preferenceNav/PreferenceNav";
import Split from "react-split";
import ReactCodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

const Playground = () => {
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
              value={"const a = 4"}
              theme={vscodeDark}
              // onChange={onChange}
              extensions={[javascript()]}
              style={{ fontSize: 16 }}
            />
          </div>
          <div className="h-full">Test cases</div>
        </Split>
      </div>
    </div>
  );
};

export default Playground;
