let interval = null;


export const isTokenValid= (expireAt) => {
    
    if(interval){
        clearInterval(interval)
    }

     interval =setInterval(() => {
        const  time = new Date()
        const currentTimestamp = Date.parse(time)/1000
        if ( currentTimestamp > expireAt){
            localStorage.removeItem("passport")
            clearInterval(interval)
        }
      
    },50000)
}
    
    
    