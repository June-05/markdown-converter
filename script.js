const patterns = [
    { pattern: /^### (.*$)/gim, result: "<h3>$1</h3>" },
    {
        pattern: /^## (.*$)/gim,
        result: "<h2>$1</h2>",
    },
    {
        pattern: /^# (.*$)/gim,
        result: "<h1>$1</h1>",
    },
    {
        pattern: /^>\s?(.*)$/gim,
        result: "<blockquote>$1</blockquote>",
    },
    {
        pattern: /(\*\*|__)(.*?)\1/g,
        result: "<strong>$2</strong>",
    },
    {
        pattern: /(\*|_)(.*?)\1/g,
        result: "<em>$2</em>",
    },
    {
        pattern: /!\[([^\]]+)\]\(([^)]+)\)/g,
        result: `<img alt="$1" src="$2">`,
    },
    {
        pattern: /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g,
        result: `<a href="$2">$1</a>`,
    },
];
//FOR Markdown to HTML conversion
const input = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

input.addEventListener("input", handleConversion);

function handleConversion() {
    let result = convertMarkdown();

    htmlOutput.textContent = result;
    preview.innerHTML = result;
}

function convertMarkdown() {
    let markDown = input.value;

    //convert here
    for (let obj of patterns) {
        markDown = markDown.replace(obj.pattern, obj.result);
    }
    return markDown;
}

//FOR Tab Behavior
const inputContainer = document.getElementById("inputContainer");
const htmlContainer = document.getElementById("htmlContainer");
const previewContainer = document.getElementById("previewContainer");

const inputTab = document.getElementById("inputTab");
const htmlTab = document.getElementById("htmlTab");
const previewTab = document.getElementById("previewTab");

//initial state
inputContainer.style.display = "block";
inputTab.classList.add("active");
inputTab.classList.add("maximized");

//switching between tabs
inputTab.addEventListener("click", () => {
    inputContainer.style.display = "block";
    htmlContainer.style.display = "none";
    previewContainer.style.display = "none";

    inputTab.classList.add("active");
    htmlTab.classList.remove("active");
    previewTab.classList.remove("active");
});

htmlTab.addEventListener("click", () => {
    inputContainer.style.display = "none";
    htmlContainer.style.display = "block";
    previewContainer.style.display = "none";

    inputTab.classList.remove("active");
    htmlTab.classList.add("active");
    previewTab.classList.remove("active");
});

previewTab.addEventListener("click", () => {
    inputContainer.style.display = "none";
    htmlContainer.style.display = "none";
    previewContainer.style.display = "block";

    inputTab.classList.remove("active");
    htmlTab.classList.remove("active");
    previewTab.classList.add("active");
});

//maximizing&minimizing tabs
const inputMax = document.getElementById("inputMax");
const htmlMax = document.getElementById("htmlMax");
const previewMax = document.getElementById("previewMax");

//svg icons for maximizing and minimizing tabs
const maximizeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5858 5H14V3H21V10H19V6.41421L14.7071 10.7071L13.2929 9.29289L17.5858 5ZM3 14H5V17.5858L9.29289 13.2929L10.7071 14.7071L6.41421 19H10V21H3V14Z"></path></svg>';
const minimizeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 11H17V13H7V11Z"></path></svg>';

//inital state
inputMax.innerHTML = minimizeIcon;
htmlMax.innerHTML = maximizeIcon;
previewMax.innerHTML = maximizeIcon;

inputMax.addEventListener("click", (event) => {
    const isBeingMaximized = inputContainer.classList.toggle("maximized");
    if (isBeingMaximized) {
        inputTab.classList.add("maximized");
        inputMax.innerHTML = minimizeIcon;
    } else {
        inputTab.classList.remove("maximized");
        inputMax.innerHTML = maximizeIcon;
    }

    event.stopPropagation();
});

htmlMax.addEventListener("click", (event) => {
    const isBeingMaximized = htmlContainer.classList.toggle("maximized");
    if (isBeingMaximized) {
        htmlTab.classList.add("maximized");
        htmlMax.innerHTML = minimizeIcon;
    } else {
        htmlTab.classList.remove("maximized");
        htmlMax.innerHTML = maximizeIcon;
    }

    event.stopPropagation();
});

previewMax.addEventListener("click", (event) => {
    const isBeingMaximized = previewContainer.classList.toggle("maximized");
    if (isBeingMaximized) {
        previewTab.classList.add("maximized");
        previewMax.innerHTML = minimizeIcon;
    } else {
        previewTab.classList.remove("maximized");
        previewMax.innerHTML = maximizeIcon;
    }

    event.stopPropagation();
});
