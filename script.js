function changeColor() {
    const colors = ["red", "green", "blue", "pink", "yellow", "orange", "purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("body").style.backgroundColor = randomColor;
}

function goToNextPage() {
    window.location.href = "next.html";
}