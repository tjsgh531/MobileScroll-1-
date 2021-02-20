
export class Swipe{
    constructor(){
   
    }
    swipe(target){
        let start;
        let end;
        let result;

        setTimeout(()=>{
            result = "N";
            return result;
        },1000);
        
        const swipe = new Promise((resolve)=>{
            $(target).on("touchstart",(e)=>{
                start = e.originalEvent.changedTouches[0].clientX;
            });
            $(target).on("touchend",(e)=>{
                end = e.originalEvent.changedTouches[0].clientX;
                resolve();
            });   
        });
        swipe.then(()=>{
            if(Math.abs(start-end) > 50){
                if(start-end < 0){
                    result="L";
                }
                else{
                    result="R";
                }
                return result;
            }
            else{
                result = "N";
                return result;
            }
        });
    }

}
