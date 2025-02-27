// let imgBox = document.querySelectorAll("img-box");
// let qrImage = document.getElementById("qrImage");
// let qrText = document.getElementById("qrText");

// function generateQR(){
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
// }

function generateQR() {
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    let text = qrText.value.trim(); // Remove extra spaces

    if (text === "") {
        alert("Input a URL"); // Show alert if input is empty
        return;
    }

    // Ensure the URL starts with "http://" or "https://"
    if (!text.startsWith("http://") && !text.startsWith("https://")) {
        text = "https://" + text;
    }

    // Generate QR Code
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text);

    // Clear input field after generating QR code
    qrText.value = "";
}

