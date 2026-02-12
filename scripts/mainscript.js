const ToMainPageElement = document.getElementById("ToMainPage")

const MainPageLink = "index.html";

const GithubLink = "https://github.com/HiFirsty999";
const YoutubeLink = "https://www.youtube.com/@Firsty_TheProgrammer";
const TiktokLink = "https://www.tiktok.com/@fcfirstyboy";
const ChessLink = "https://www.chess.com/member/hello_firsty";
const AccountsLink = "accounts.html";
const ProjectsLink = "projects.html";

const EmailSendLink = "email-send.html";

const ClickerGameLink = "https://hifirsty999.github.io/ClickerGame/";
const MyFirstCalculatorLink = "https://hifirsty999.github.io/MyFirstCalculator/";

//View Accounts

function ViewAccounts() {
    window.location.href = AccountsLink;
}

//Accounts

function ChangeToGithub() {
    window.open(GithubLink);
}

function ChangeToYoutube() {
    window.open(YoutubeLink);
}

function ChangeToTiktok() {
    window.open(TiktokLink);
}

function ChangeToChess() {
    window.open(ChessLink);
}

//Projects And Games

function ViewProjects() {
    window.location.href = ProjectsLink;
}

function ToMainPage() {
    window.location.href = MainPageLink;

    ToMainPageElement.innerHTML = "Please wait...";
    ToMainPageElement.style.opacity = "0.5";
    ToMainPageElement.style.pointerEvents = "none"

    setTimeout(function() {
        ToMainPageElement.innerHTML = "To main page";
        ToMainPageElement.style.opacity = "1";
        ToMainPageElement.style.pointerEvents = "auto"
    }, 1000);
}

function ToClickerGame() {
    window.open(ClickerGameLink);
}

function ToMyFirstCalculator() {
    window.open(MyFirstCalculatorLink);
}

//Others

function ToGmail(ElementId) {
    const UIElement = document.getElementById(ElementId);

    window.location.href = EmailSendLink;
    UIElement.innerHTML = "Please wait...";
    UIElement.style.pointerEvents = "none";
    UIElement.style.opacity = "0.5";

    setTimeout(function() {
        UIElement.innerHTML = "Contact Me";
        UIElement.style.pointerEvents = "auto";
        UIElement.style.opacity = "1";
    }, 1000)
}