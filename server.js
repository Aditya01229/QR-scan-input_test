function onScanSuccess(decodedText, decodedResult) {
    // Handle the scanned code as you like, for example:
    document.getElementById('input-field').value = decodedText;
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}

// Create instance of the scanner. The first parameter is the ID of the HTML element to render the QR code scanner.
var html5QrCode = new Html5Qrcode("qr-reader");

// Start scanning. The first parameter is the function to call when a QR code is successfully scanned.
html5QrCode.start(
    { facingMode: "environment" }, // or use { facingMode: "user" } for front camera
    {
        fps: 10, // Frames per second to scan
        qrbox: 250 // Display box size
    },
    onScanSuccess
).catch(err => {
    console.log(`Unable to start scanning, error: ${err}`);
});
