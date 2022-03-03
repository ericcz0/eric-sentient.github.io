function showContent(name) {
    contents = ['home', 'projects', 'music', 'contact']
    for (const item of contents) {
        document.getElementById(item).style.display = "none";
        document.getElementById('nav_'+item).classList.remove("active");
    }
    document.getElementById(name).style.display = "block";
    document.getElementById('nav_'+name).classList.add("active");
}