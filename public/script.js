const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<button onclick="makePic()">Show Picture</button>);

function makePic() {
   const srcUrl = "flower.jpg";
   const altText = "Sunflower";

   root.render(<img src={srcUrl} alt={altText} />);
}
