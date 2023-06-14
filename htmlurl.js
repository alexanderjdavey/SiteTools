function convertText() {
  let inputText = document.getElementById("inputText").value;
  let urls = inputText.split(/\s+/);
  let format = document.querySelector('input[name="format"]:checked').value;
  let div = document.getElementById("div").checked;
  let list = document.getElementById("list").checked;
  let target = document.getElementById("target").value;
  let outputText = list ? "<ul>\n" : "";

  urls.forEach((url) => {
    let hyperlink = `<a href="${url}"${
      target ? ` target="${target}"` : ""
    }>${url}</a>`;
    if (div) hyperlink = `<div>${hyperlink}</div>`;
    else if (list) hyperlink = `<li>${hyperlink}</li>`;
    outputText += hyperlink;
    if (format === "line") outputText += "\n";
    else if (format === "br") outputText += "<br>\n";
    else outputText += " ";
  });

  if (list) outputText += "</ul>";
  document.getElementById("outputText").value = outputText.trim();
}

function copyToClipboard() {
  let outputText = document.getElementById("outputText");
  outputText.select();
  document.execCommand("copy");
}
