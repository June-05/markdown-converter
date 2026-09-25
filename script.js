const patterns = [
  {pattern: /^### (.*$)/gim,
  result: "<h3>$1</h3>"},
  {
    pattern: /^## (.*$)/gim,
    result: "<h2>$1</h2>"
  },
  {
    pattern: /^# (.*$)/gim,
    result: "<h1>$1</h1>"
  },
  {
    pattern: /^>\s?(.*)$/gim,
    result: "<blockquote>$1</blockquote>"
  },
  {
    pattern: /(\*\*|__)(.*?)\1/g,
    result: "<strong>$2</strong>"
  },
  {
    pattern: /(\*|_)(.*?)\1/g, 
    result: "<em>$2</em>"
  },
  {
    pattern: /!\[([^\]]+)\]\(([^)]+)\)/g,
    result: `<img alt="$1" src="$2">`
  },
  {
    pattern: /(?<!!)\[([^\]]+)\]\(([^)]+)\)/g,
    result: `<a href="$2">$1</a>`
  }];


const input = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

input.addEventListener("input", handleConversion);

function handleConversion(){
  let result = convertMarkdown();

  htmlOutput.textContent = result;
  preview.innerHTML = result;
}


function convertMarkdown(){
  let markDown = input.value;
  
  //convert here
  for(let obj of patterns){
    markDown = markDown.replace(obj.pattern,obj.result);
  }
  return markDown;
}