const root = ReactDOM.createRoot(document.getElementById("root"));

function makePic() {
   const srcUrl = "flower.jpg";
   const altText = "Sunflower";

   root.render(<img src={srcUrl} alt={altText} />);
}