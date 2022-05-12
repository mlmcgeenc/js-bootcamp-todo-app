const paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function (paragraph) {
    if (paragraph.textContent.match("the")) {
        paragraph.remove()
    }
})