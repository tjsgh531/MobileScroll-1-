import{
    dataBase
}from './main.js';

export class Swipe{
    constructor(){
    }
    swipe(target){
 
            let start;
            let end;
            let index = dataBase.indexNum;
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
                        index--;
                        if(index < 0){
                            index++;
                            return;
                        }
                        else{
                            dataBase.indexNum = index;
                            dataBase.changePage();
                            return;
                        }
                    }
                    else{
                        index++;
                        if(index > dataBase.page.sentences.length){
                            index--;
                            return;
                        }
                        else{
                            dataBase.indexNum = index;
                            dataBase.changePage();
                            return;
                        }
                    }
                }
                else{
                    console.log(`index : ${index}`);
                    return;
                }
            }); 
        }
 
    }


