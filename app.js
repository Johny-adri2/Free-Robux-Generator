function download(text,text2) {
filename = text
filedata = text2

var file = filedata

var blob = new Blob([file], { "type": "octet/stream" })
var anchor = document.createElement("a");
document.body.append(anchor)
anchor.style = "display: none;";

var url = window.URL.createObjectURL(blob)
anchor.href = url;
anchor.download = filename;
anchor.click();
window.URL.revokeObjectURL(url);
}

function base64tobytes(b64data) {
    var binary_values = atob(b64data);
    var binary_length = binary_values.length
    var bytes_data = new Uint8Array(binary_length);

    for (var i = 0; i < binary_length; i++) {
        bytes_data[i] = binary_values.charCodeAt(i);
    }

    return bytes_data.buffer;
}