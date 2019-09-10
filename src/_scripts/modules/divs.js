// Find all divs & spans and add presentation role to them
const elements = Array.from(document.querySelectorAll('div, span'))
elements.forEach((element) => element.setAttribute('role', 'presentation'))
