import{
    
}
export class Swipe{
    constructor(){
   
    }
    swipe(target){
        let start;
        let end;
        let result;

        setTimeout(()=>{
            return;
        },1000);
        
        $(target).on("touchstart",(e)=>{
            start = e.originalEvent.changedTouches[0].clientX;
        });
        $(target).on("touchend",(e)=>{
            end = e.originalEvent.changedTouches[0].clientX;
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
                return;
            }
        }); 
    }

}
