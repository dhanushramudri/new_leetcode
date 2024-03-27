import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Workspace from "../../components/Workspace/Workspace";

const ProblemPage = () => {
  return (
    <div>
      <Topbar problemPage />
      <Workspace />
    </div>
  );
};

export default ProblemPage;
