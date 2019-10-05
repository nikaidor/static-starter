const elements = Array.from(document.querySelectorAll('div, span'))
elements.forEach((element) => element.setAttribute('role', 'presentation'))
