const GithubLink = "https://github.com/HiFirsty999";
const YoutubeLink = "https://www.youtube.com/@Firsty_TheProgrammer";
const TiktokLink = "https://www.tiktok.com/@fcfirstyboy";
const ProjectsLink = "projects.html";

function ChangeToGithub() {
    window.open(GithubLink);
}

function ChangeToYoutube() {
    window.open(YoutubeLink);
}

function ChangeToTiktok() {
    window.open(TiktokLink);
}

function ViewProjects() {
    window.location.href = ProjectsLink;
}

function PointerEnter(ElementName) {
    var UIElement = document.getElementById(ElementName);

    UIElement.style.backgroundColor = "red";
}

function PointerLeave(ElementName) {
    var UIElement = document.getElementById(ElementName);

    UIElement.style.backgroundColor = "orange";
}