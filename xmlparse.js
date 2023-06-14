function parseXml() {
  let inputXml = document.getElementById("inputXml").value;
  let parser = new DOMParser();
  let xmlDoc = parser.parseFromString(inputXml, "text/xml");

  let urls = xmlDoc.getElementsByTagName("loc");
  let outputText = "";

  for (let i = 0; i < urls.length; i++) {
    outputText += urls[i].textContent + "\n";
  }

  document.getElementById("outputText").value = outputText;
}

function copyToClipboard() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
}
