const ToMainPageElement = document.getElementById("ToMainPage");

const MainPageLink = "/";

const GithubLink = "https://github.com/HiFirsty999";
const YoutubeLink = "https://www.youtube.com/@Firsty_TheProgrammer";
const TiktokLink = "https://www.tiktok.com/@fcfirstyboy";
const ChessLink = "https://www.chess.com/member/hello_firsty";
const AccountsLink = "accounts.html";
const ProjectsLink = "projects.html";

const EmailSendLink = "email-send.html";

const ClickerGameLink = "https://hifirsty999.github.io/ClickerGame/";
const MyFirstCalculatorLink = "https://hifirsty999.github.io/MyFirstCalculator/";
const ScreenSaver = "https://hifirsty999.github.io/ScreenSaver";

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
}

function ToClickerGame() {
    window.open(ClickerGameLink);
}

function ToMyFirstCalculator() {
    window.open(MyFirstCalculatorLink);
}

function ToScreenSaver() {
    window.open(ScreenSaver);
}

//Others

function ToGmail() {
    window.location.href = EmailSendLink;
}