function showContent(name) {
    contents = ['home', 'projects', 'music', 'contact']
    for (const item of contents) {
        document.getElementById(item).style.display = "none";
    }
    document.getElementById(name).style.display = "block";
}