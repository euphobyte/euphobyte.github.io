//let myCoolCode = document.createElement("script");
//myCoolCode.setAttribute("src", "https://www.kirupa.com/js/easing.js");
//document.body.appendChild(myCoolCode);

getText("test.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  let myCoolCode = document.createElement("script");
  myCoolCode.setAttribute("src", myText);
  //alert(myText);
  document.body.appendChild(myCoolCode);
}

