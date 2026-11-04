const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<h1>Rendering XML</h1>)
root.render(<button onClick={makePic}>Show Picture</button>);

function makePic() {
   const altText = "Sunflower Picture Not Shown";
   root.render(<img src="flower.jpg" alt={altText} />);
}
