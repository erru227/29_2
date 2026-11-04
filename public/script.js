const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<button onClick={makePic}>Show Picture</button>);

function makePic() {
   const altText = "Sunflower Picture Not Shown";
   root.render(<img src="flower.jpg" alt={altText}></img>);
}
