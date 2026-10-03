function processlength(text): string{
  
  const reg = /length\((?:([^\)]+)|"([^"]*)"|'([^']*)')\)/g;
  
  text = text.replace(reg, (match, txt, txt2, txt3) => {
    const resTxt = txt || txt2 || txt3;
    return resTxt.length;
  })
  return text;
  }
  
  /* console.log(processlength("length('Hello World')")) */
export { processlength };
