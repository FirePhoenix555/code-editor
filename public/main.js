window.onload = function() {
    const code = document.getElementById("code");

    const socket = io();
    socket.on("connect", () => {
        socket.emit("code-request", null);
    })
    socket.on("code-response", data => {
        code.textContent = data;
    })
}