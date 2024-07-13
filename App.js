// const heading = React.createElement("h1", { id: "heading" }, "hello world from react");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading);




const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag")
  ]), React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "iam h1 tag"),
    React.createElement("h2", {}, "iam h2 tag")
  ])
]

)


console.log(parent);


const root = ReactDOM.createRoot(document.getElementById("root"));

const root2 = ReactDOM.createRoot(document.getElementById("header"));

root.render(parent);

root2.render(parent);

