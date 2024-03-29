// Example type
const Example = {
  id: 0,
  inputText: "",
  outputText: "",
  explanation: undefined,
  img: undefined,
};

// Problem type
const Problem = {
  id: "",
  title: "",
  problemStatement: "",
  examples: [Example],
  constraints: "",
  order: 0,
  starterCode: "",
  handlerFunction: "",
  starterFunctionName: "",
};

// DBProblem type
const DBProblem = {
  id: "",
  title: "",
  category: "",
  difficulty: "",
  likes: 0,
  dislikes: 0,
  order: 0,
  videoId: undefined,
  link: undefined,
};

module.exports = { Example, Problem, DBProblem };
