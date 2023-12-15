function calculateTorque() {
    const originalTorque = parseFloat(document.getElementById('originalTorque').value) || 0;
    const originalLength = parseFloat(document.getElementById('originalLength').value) || 0;
    const extensionLength = parseFloat(document.getElementById('extensionLength').value) || 0;
    const extensionAngle = parseFloat(document.getElementById('extensionAngle').value) || 0;

    const totalLength = originalLength + extensionLength;
    const extensionAngleRad = (extensionAngle * Math.PI) / 180; // Convert degrees to radians

    const torqueWithExtension = originalTorque * (totalLength / originalLength) * Math.cos(extensionAngleRad);

    document.getElementById('result').value = torqueWithExtension.toFixed(2);
}
