let interval = null;


export const isTokenValid= (expireAt) => {
    
    if(interval){
        clearInterval(interval)
    }

     interval =setInterval(() => {
        const  time = new Date()
        const currentTimestamp = Date.parse(time)/1000
        console.log(currentTimestamp)
        if ( currentTimestamp > expireAt){
            console.log("hemos entrado al if")
            localStorage.removeItem("passport")
            clearInterval(interval)
        }
      
    },50000)
}
    
    
    