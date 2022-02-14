$(document).ready(function(){
const liczbyPierwsze = function(parlp){
    const lp = parseFloat(parlp);
    let lp2 = 2;
    const lp7 = document.querySelector(".programlp2");
    while(lp2<=lp){
        let lp3 = lp;
        const lp4 = [];
        while(lp3>=1){
            if(lp2%lp3===0){
                lp4.push(lp3);
            }
            lp3--;
        }
        if(lp4.length===2){
            const lp5 = document.createElement("div");
            const lp6 = document.createTextNode(lp2);
            lp5.appendChild(lp6);
            lp7.appendChild(lp5);
        }
        lp2++;
    }
    const lp8 = lp7.children.length;
    if(lp8>40){
        let lp9 = 40;
        while(lp9<lp8){
            $(lp7.children[lp9]).hide();
            $(lp7.children[lp9]).addClass("hidden");
            lp9++;
        }
        const lp10 = document.createElement("button");
        const lp11 = document.createElement("button");
        const lp12 = document.createTextNode("<<");
        const lp13 = document.createTextNode(">>");
        lp10.appendChild(lp12);
        lp11.appendChild(lp13);
        lp7.appendChild(lp10);
        lp7.appendChild(lp11);
        $(lp10).hide();
        $(lp11).click(function(){
            const lp14 = $(".hidden:first").prevAll().length;
            let lp15 = lp14-40;
            const lp16 = $(lp7).children("div");
            while(lp15<=lp14+39){
                $(lp16[lp15]).toggle();
                if($(lp16[lp15]).hasClass("hidden")){
                   $(lp16[lp15]).removeClass("hidden");
                }
                if(lp15===lp16.length){
                    $(lp11).hide();
                    break;
                }
                lp15++;
            }
            $(lp10).show();
        })
        $(lp10).click(function(){
            $($(lp7).children("div")).filter(function(){
                return $(this).hasClass("visible");
            }).removeClass("visible");
            $($(lp7).children("div")).filter(function(){
                return (this).getAttribute("style")!=="display: none;";
            }).addClass("visible");
            const lp17 = $(".visible:first").prevAll("div").length;
            const lp20 = $(".visible:last").nextAll("div");
            let lp18 = 0;
            while(lp18<lp20.length){
                if(!$(lp20[lp18]).hasClass("hidden")){
                    $(lp20[lp18]).addClass("hidden");
                }
                lp18++;
            }
            $(".visible").addClass("hidden");
            $(".visible").hide();
            lp18 = lp17-40;
            const lp19 = $(lp7).children("div");
            while(lp18<lp17){
                $(lp19[lp18]).show();
                lp18++;
            }
            if(lp18===40){
                $(lp10).hide();
            }
            $(lp11).show();
        })
     }
}
let liczbyPierwsze1;
$(".programlp .p1").keyup(function(){
    liczbyPierwsze1 = $(this).val();
    $(".programlp .ukrycie").text(liczbyPierwsze1);
})
$(".programlp>button").click(function(){
    let liczbyPierwsze2 = 0;
    const liczbyPierwsze3 = document.querySelectorAll(".programlp2>div");
    while(liczbyPierwsze2<liczbyPierwsze3.length){
        liczbyPierwsze3[liczbyPierwsze2].remove();
        liczbyPierwsze2++;
    }
    liczbyPierwsze2 = 0;
    const liczbyPierwsze4 = document.querySelectorAll(".programlp2>button");
    while(liczbyPierwsze2<liczbyPierwsze4.length){
        liczbyPierwsze4[liczbyPierwsze2].remove();
        liczbyPierwsze2++;
    }
    liczbyPierwsze(liczbyPierwsze1);
})
})