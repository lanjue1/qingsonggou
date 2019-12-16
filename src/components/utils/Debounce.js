export function Debounce(func,delay=300){

    let Delay=null
    return function (...args) {
      if(Delay){clearTimeout(Delay)}
      Delay=setTimeout(()=>{
        func.apply(this,args)
      },delay)
    }
  }
