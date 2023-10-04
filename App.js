
const heading = React.createElement("h1", 
        {id: "heading"},
        "Hello World from React!"
 );

 const parent = React.createElement("div", 
    {id: "parent"}, 
    [React.createElement("div", 
    {id: "child1"}, 
    [React.createElement("h1", 
    {id: "heading"}, 
    "I am a child1 h1 tag"), 
    React.createElement("h2", 
    {}, 
    "I am a child1 h2 tag")]
    ),
    React.createElement("div", 
    {id: "child2"}, 
    [React.createElement("h1", 
    {id: "heading"}, 
    "I am a child2 h1 tag"), 
    React.createElement("h2", 
    {}, 
    "I am a child2 h2 tag")]
    )
    ]
    );
 
console.log(parent); //object

// Bye React.createElement, will not be using you again ;)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);