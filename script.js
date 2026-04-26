function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function handleSubmit(e) {
    e.preventDefault();
    alert("Message sent!");
}