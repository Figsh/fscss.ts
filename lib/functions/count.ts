function subCountHelper(ntc:number,stc:number): number[]{
  return nu = Array(ntc).fill().map((_, i)=>(i+1)*stc);
} 
  function processCount(text:string):string{
    
    const reg=/count\((\d+)(?:(?:\s+)?,(?:\s+)?(\d+)?)?\)/g;
    
    text = text.replace(reg, (March, num:number, step?:number)=>{
      
      const stepValue = step? parseInt(step): 1;
      return subCountHelper(parseInt(num), stepValue).join(',');
      
    })
    return text;
  }
  
  /* console.log(processCount("count(3, 5)"));*/

  export { processCount }
