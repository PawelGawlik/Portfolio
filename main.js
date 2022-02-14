$(document).ready(function(){
    //wyświetlanie i ukrywanie elementów
    const hide = function(){
        let licznik1 = 0;
        while(licznik1<arguments.length){
            $(arguments[licznik1]).hide();
            licznik1++;
        }
    }
    const show = function(arg1){
        $(arg1).show();
    }
    hide(".mojeprojekty",".zabawyzprog", ".statystyka",".programst",".liczbypierwsze", ".programlp");
    $(".ja").click(function(){
        show(".omnie");
       hide(".mojeprojekty",".zabawyzprog",".statystyka",".programst",".liczbypierwsze",".programlp");
    })
    $(".mp").click(function(){
        show(".mojeprojekty");
        hide(".omnie",".zabawyzprog",".statystyka",".programst",".liczbypierwsze",".programlp");
    })
    $(".zzp").click(function(){
        show(".zabawyzprog");
        hide(".mojeprojekty",".omnie",".statystyka",".programst",".liczbypierwsze",".programlp");
    })
    $(".st").click(function(){
        show(".statystyka");
        hide(".zabawyzprog");
    })
    $(".wp1").click(function(){
        show(".programst");
        hide(".statystyka");
    })
    $(".lp").click(function(){
        show(".liczbypierwsze");
        hide(".zabawyzprog");
    })
    $(".wp2").click(function(){
        show(".programlp");
        hide(".liczbypierwsze");
    })
    //wyśw. i ukr. elementów-koniec
    //ciasteczko-licznik
    let a = document.cookie.split("=");
    if(a.length===1){
        document.cookie = "b=1";
        
    }else{
        a[1]=parseInt(a[1])+1;
        let c = a.join("=");
        document.cookie = c;
    }
    const f = document.getElementsByClassName("f");
    f[0].innerHTML= "Odwiedziny: "+a[1];
    //ciasteczko-licznik-koniec
    //nawigacja po stronie
    let naw = 0;
    $(".menu").click(function(){
        naw++;
        const naw1 = $(".e").children();
        for(let naw2 of naw1){
            if($(naw2).hasClass(`visible${naw}`)){
               $(naw2).removeClass(`visible${naw}`);
               $(".doprzodu").hide();
            }
        }
        $(naw1).filter(function(){
            return $(this).attr("style") !== "display: none;"
        }).addClass(`visible${naw}`);
        $(".wtył").show();
    })
    $(".wtył").click(function(){
        $(`.visible${naw}`).hide();
        $(`.visible${naw-1}`).show();
        $(".doprzodu").show();
        naw--;
        if(naw===0){
            $(".wtył").hide();
        }
    })
    $(".doprzodu").click(function(){
        $(`.visible${naw}`).hide();
        $(`.visible${naw+1}`).show();
        $(".wtył").show();
        naw++;
        if(!$($(".e").children()).hasClass(`visible${naw+1}`)){
            $(".doprzodu").hide();
        }
    })
    //nawigacja po stronie-koniec
})