function encodeURL() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  output.value = encodeURIComponent(input.value);
}

function decodeURL() {
  const input = document.getElementById("input");
  const output = document.getElementById("output");

  try {
    output.value = decodeURIComponent(input.value);
  } catch (e) {
    output.value = "Invalid input for URL decoding";
  }
}

function copyToClipboard() {
  const output = document.getElementById("output");
  output.select();
  document.execCommand("copy");
}
