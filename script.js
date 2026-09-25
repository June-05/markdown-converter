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

//maximizing tabs
const inputMax = document.getElementById("inputMax");
const htmlMax = document.getElementById("htmlMax");
const previewMax = document.getElementById("previewMax");

//inital state
inputContainer.classList.add("maximized");
inputMax.textContent = "Min";

inputMax.addEventListener("click", (event) => {
    const isBeingMaximized = inputContainer.classList.toggle("maximized");
    if(isBeingMaximized) {
      inputTab.classList.add("maximized");
      inputMax.textContent = "Min";
    } else {
      inputTab.classList.remove("maximized");
      inputMax.textContent = "Max";
    }

    event.stopPropagation();
});

htmlMax.addEventListener("click", (event) => {
    const isBeingMaximized = htmlContainer.classList.toggle("maximized");
    if(isBeingMaximized) {
      htmlTab.classList.add("maximized");
      htmlMax.textContent = "Min";
    } else {
      htmlTab.classList.remove("maximized");
      htmlMax.textContent = "Max";
    }

    event.stopPropagation();

});

previewMax.addEventListener("click", (event) => {
    const isBeingMaximized = previewContainer.classList.toggle("maximized");
    if(isBeingMaximized) {
      previewTab.classList.add("maximized");
      previewMax.textContent = "Min";
    } else {
      previewTab.classList.remove("maximized");
      previewMax.textContent = "Max";
    }

    event.stopPropagation();
});
