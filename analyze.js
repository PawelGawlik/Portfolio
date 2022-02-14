$(document).ready(function(){
const analyze = function(data){
    let licznik = 0;
    while(licznik<data.length){
        data[licznik] = parseFloat(data[licznik]);
        licznik++;
    }
    const sum = function(){
        let result = 0;
        for(let i=0; i<data.length; i++){
            result += data[i];
        }
        return result;
    }
    const sredniaAryt = function(){
        let result2 = sum();
        return (result2/data.length);
    }
    const iloscProbek = function(){
        return data.length;
    }
    const mediana = function(){
        const tab1 = [];
        let i = data.length;
        for(i; i>0; i--){
            let min = data[0];
            let j = 1;
            let b = 0;
            while(j<data.length){
                if(data[j]<min){
                    min = data[j];
                    b = j;
                }
                j++;
            }
            tab1.push(min);
            data.splice(b, 1);
        }
        let med;
        if(tab1.length%2 !== 0){
            med = tab1[(tab1.length-1)/2];
        }else{
            med = (tab1[tab1.length/2]+tab1[tab1.length/2-1])/2;
        }
        return med;
    }
    const wariancja = function(){
        const a = sredniaAryt();
        let result3 = 0;
        for(let i=0; i<data.length; i++){
            result3 += (data[i]-a)**2;
        }
        return (result3/data.length);
     }
    const odchylenie = function(){
        const c = wariancja();
        const result4 = Math.sqrt(c);
        return result4;
    }
    const zaokr = function(par){
        let zaokr1 = par.toFixed(2);
        const zaokr2 = zaokr1.split(".");
        if(zaokr2[1].indexOf("00")===0){
            return par;
        }else{
            if(zaokr2[1].indexOf("0")!==1){
                return zaokr1;
            }else{
                zaokr1 = parseFloat(zaokr1);
                const zaokr3 = zaokr1.toFixed(1);
                return zaokr3;
            }
        }
    }
    const wyniki = document.querySelectorAll(".programst2>div");
    wyniki[0].innerHTML = iloscProbek();
    wyniki[1].innerHTML = sum();
    wyniki[2].innerHTML = zaokr(sredniaAryt());
    wyniki[3].innerHTML = zaokr(wariancja());
    wyniki[4].innerHTML = zaokr(odchylenie());
    wyniki[5].innerHTML = zaokr(mediana());
}
let wpisaneLiczby2;
let wpisaneLiczby1;
$(".programst .p1").keyup(function(){
    wpisaneLiczby1 = $(this).val();
    $(".programst .ukrycie").text(wpisaneLiczby1);
    wpisaneLiczby2 = wpisaneLiczby1.split(" ");
})
$(".programst>button").click(function(){
    analyze(wpisaneLiczby2);
})
$(".p1").focus(function(){
    $(".ukrycie").css("border-width", "5px");
})
$(".p1").blur(function(){
    $(".ukrycie").css("border-width", "2px");
})
})