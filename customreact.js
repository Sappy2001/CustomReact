//then  react has a render method that injects the reactElement in the root
//(what to inject,where to inject)
function customRender(reactElement, container) {
	//creation of element
	domElement = document.createElement(reactElement.type);
	//providing its inner content
	domElement.innerHTML = reactElement.children;
	//setting its properties
	for (let prop in reactElement.props) {
		//continue if there is any children in props
		if (prop === "children") continue;
		domElement.setAttribute(prop, reactElement.props[prop]);
	}
	//finnaly adding the reactElement in container
	container.appendChild(domElement);
}

//how react sees the code after compiling a reactElement
const custReactElement = {
	type: "a",
	props: {
		href: "https://google.com",
		target: "_blank",
	},
	children: "Click me to visit page",
};

const evalutedExpression = "any variable to insert ";
//this method is injected by babel default to create ReactObj
const react = React.createElement(
	//type
	"a",
	//props
	{
		hfref: "https://google.com",
		target: "_blank",
	},
	// children
	"click me to visit",
	//this are js added by us using {} in react comp
	evalutedExpression
);

const rootContainer = document.getElementById("root");

customRender(custReactElement, rootContainer);
