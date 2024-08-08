//creating element is core concept of react
//this will give a react obj
const heading = React.createElement(
	//type
	"h1",
	//place give attributes
	{ id: "heading" },
	//children
	"Whatever we need to put inside h1"
);

// props=attributes+children

{
	/* <div>
    <div>
        <h1>Im a h1 tag</h1>
        <h2>Im a h2 tag</h2>
    </div>
</div> */
}
// reproducing above html in react obj
const parent = React.createElement(
	"div",
	{ id: "parent" },
	React.createElement(
		"div",
		{ id: "child" },
		//if more than 1 child we need to use array
		[
			React.createElement("h1", {}, "Im a h1 tag"),
			React.createElement("h2", {}, "Im a h2 tag"),
		]
	)
);

//react needs root for performing dom operations
const root = ReactDOM.createRoot(document.getElementById("root"));
//render will convert react obj to html that browser understands
// root.render(heading);
root.render(parent);
