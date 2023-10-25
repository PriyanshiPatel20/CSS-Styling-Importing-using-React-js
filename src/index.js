

import React from "react";
import ReactDOM from "react-dom";
import './index.css';

const name =  "gallery";
const img1 = "https://picsum.photos/400/500";
const img2 = "https://picsum.photos/350/580";
const img3 = "https://picsum.photos/210/420";
const img4 = "https://picsum.photos/315/524";
const img5 = "https://picsum.photos/315/572";
const img6 = "https://picsum.photos/265/427";
const img7 = "https://picsum.photos/262/521";
const img8 = "https://picsum.photos/211/527";
const img9 = "https://picsum.photos/251/527";
const img10 = "https://picsum.photos/271/412";
const img11 = "https://picsum.photos/261/527";
const img12 = "https://picsum.photos/261/427";
const img13 = "https://picsum.photos/361/427";
const links ="https://www.youtube.com/watch?v=UUEJ-AnM_E8"

const heading = {
color: "black",
textTransform: "capitalize",
textAlign: "center",
fontWeight: "bold"

};

ReactDOM.render(
<>
<h1 style={heading}>  {name}</h1>

<div classname="img-div">
<img src={img1} alt="randomimages"/>
<img src={img2} alt="randomimages"/>
<a href={links} target="_blank">
<img src={img3} alt="randomimages"/>
<img src={img4} alt="randomimages"/>
<img src={img5} alt="randomimages"/>
<img src={img6} alt="randomimages"/>
<img src={img7} alt="randomimages"/>
<img src={img8} alt="randomimages"/>
<img src={img9} alt="randomimages"/>
<img src={img10} alt="randomimages"/>
<img src={img11} alt="randomimages"/>
<img src={img12} alt="randomimages"/>
<img src={img13} alt="randomimages"/>
</a>
</div>
</>,
document.getElementById("root")


); 