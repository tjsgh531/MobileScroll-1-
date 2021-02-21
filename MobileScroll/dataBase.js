export class DataBase{
    constructor(){
        this.page ={
            sentences : ["자신이 고통 받았던 날들이 \<br\>자기인생의 최고의 날들이 였다고.\<br\>그때의 자신을 만들어 낸 시간이였으니까",
            "힘이들때 \<br\>더 힘내면\<br\>더힘들어",
            ],
            backgroundImg : ["./Image/background1.png","./Image/background2.png","./Image/background3.png"],

        }
    
        this.indexNum = 0;
    }

    changePage(){
        console.log(this.indexNum);
        $("#background").attr("src", this.page.backgroundImg[this.indexNum]);
        $(".sentence p").html(this.page.sentences[this.indexNum]);
    
    }
}