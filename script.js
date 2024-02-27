$( document ).ready(function() {
    
    $(".point").hover(function(){
        $(this).toggleClass("dots-blinking")
    });


    /// Cascais

    $(".point_cascais").mouseover(function(){
        $(".container").css({"background-color":"#d3d3d3"})
        $(".masked").css({"background-color":"#000080"})
        $(".location").css({"color":"#000080"})
        $("h1").css({"color":"#000080"})
        $(".location_name").html("<h1>Cascais</h1>")
        $(".location_name").css({"font-family": "'Trochut', sans-serif", "font-style":"italic"})
        $(".coordinates").html("<h3>38.6971° N, 9.4223° W</h3>")
    });

    $(".point_cascais").click(function(){
        $(".postcards").css({"right":"100"})
        $(".postcards").toggle()
        $(".card-cascais").toggle()
        $('.point > div').not(this).toggle();
    });


    

    /// DUMBO

    $(".point_dumbo").hover(function(){
        $(".container").css({"background-color":"#065457"})
        $(".masked").css({"background-color":"#faed7a"})
        $(".location").css({"color":"#faed7a"})
        $(".location_name").css({"color":"#faed7a"})
        $(".location_name").html("<h1>DUMBO</h1>")
        $(".location_name").css({"font-family": "'prohibition', sans-serif" , "font-style":"normal"})
        $(".coordinates").html("<h3>40.7030° N, 73.9880° W</h3>")
    });

    $(".point_dumbo").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"450"})
        $(".card-dumbo").toggle()
        $('.point > div').not(this).toggle();
    });


    /// Venice

    $(".point_venice").hover(function(){
        $(".container").css({"background-color":"#FF00FF"})
        $(".masked").css({"background-color":"#ffdb58"})
        $(".location").css({"color":"#ffdb58"})
        $(".location_name").css({"color":"#ffdb58"})
        $(".location_name").html("<h1>Venice</h1>")
        $(".location_name").css({"font-family": "'p22-stickley-pro-caption', serif","font-style":"normal"})
        $(".coordinates").html("<h3>45.4408° N, 12.3155° E</h3>")
    });

    $(".point_venice").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-venice").toggle()
        $('.point > div').not(this).toggle();
    });


    /// Cartagena

    $(".point_cartagena").hover(function(){
        $(".container").css({"background-color":"#349ee0"})
        $(".masked").css({"background-color":"#85383e"})
        $(".location").css({"color":"#85383e"})
        $(".location_name").css({"color":"#85383e"})
        $(".location_name").html("<h1>Cartagena</h1>")
        $(".location_name").css({"font-family": "'sirenne-six-mvb-roman-small', serif","font-style":"normal"})
        $(".coordinates").html("<h3>10.3932° N, 75.4832° W</h3>")
        $(".card-cartagena").css({"visibility":"visible"})
    });

    $(".point_cartagena").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"450"})
        $(".card-cartagena").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Thailand

    $(".point_thailand").hover(function(){
        $(".container").css({"background-color":"#b1cee0"})
        $(".masked").css({"background-color":"#1f3d36"})
        $(".location").css({"color":"#1f3d36"})
        $(".location_name").css({"color":"#1f3d36"})
        $(".location_name").html("<h1>Koh Yao Noi</h1>")
        $(".location_name").css({"font-family": "'chill-script', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>7.9684° N, 98.5831° E</h3>")
        $(".card-thailand").css({"visibility":"visible"})
    });

    $(".point_thailand").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-thailand").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Asturias

    $(".point_asturias").hover(function(){
        $(".container").css({"background-color":"#9b69bf"})
        $(".masked").css({"background-color":"#66a13f"})
        $(".location").css({"color":"#66a13f"})
        $(".location_name").css({"color":"#66a13f"})
        $(".location_name").html("<h1>Asturias</h1>")
        $(".location_name").css({"font-family": "'Uncial Antiqua', system-ui","font-style":"normal"})
        $(".coordinates").html("<h3>43.2504° N, 5.9833° W</h3>")
        $(".card-asturias").css({"visibility":"visible"})
    });

    $(".point_asturias").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-asturias").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Paris

    $(".point_paris").hover(function(){
        $(".container").css({"background-color":"#d17206"})
        $(".masked").css({"background-color":"#87bdfa"})
        $(".location").css({"color":"#87bdfa"})
        $(".location_name").css({"color":"#87bdfa"})
        $(".location_name").html("<h1>Eiffel Tower</h1>")
        $(".location_name").css({"font-family": "'adobe-garamond-pro', serif","font-style":"normal"})
        $(".coordinates").html("<h3>48.8584° N, 2.2945° E</h3>")
        $(".card-paris").css({"visibility":"visible"})
    });

    $(".point_paris").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-paris").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Pula

    $(".point_pula").hover(function(){
        $(".container").css({"background-color":"#eda058"})
        $(".masked").css({"background-color":"#3f484d"})
        $(".location").css({"color":"#3f484d"})
        $(".location_name").css({"color":"#3f484d"})
        $(".location_name").html("<h1>Pula</h1>")
        $(".location_name").css({"font-family": "'sinete', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>44.8666° N, 13.8496° E</h3>")
        $(".card-pula").css({"visibility":"visible"})
    });

    $(".point_pula").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-pula").toggle()
        $('.point > div').not(this).toggle();
    });




    /// Hoch Ybrig

    $(".point_hochYbrig").hover(function(){
        $(".container").css({"background-color":"#fc0a0a"})
        $(".masked").css({"background-color":"#d5e5f7"})
        $(".location").css({"color":"#d5e5f7"})
        $(".location_name").css({"color":"#d5e5f7"})
        $(".location_name").html("<h1>Hoch Y-brig</h1>")
        $(".location_name").css({"font-family": "'garamond-premier-pro', serif","font-style":"italic"})
        $(".coordinates").html("<h3>47.0082° N, 8.7878° E</h3>")
        $(".card-hochYbrig").css({"visibility":"visible"})
    });

    $(".point_hochYbrig").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-hochYbrig").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Les Gets

    $(".point_lesgets").hover(function(){
        $(".container").css({"background-color":"#f09f8b"})
        $(".masked").css({"background-color":"#61748c"})
        $(".location").css({"color":"#61748c"})
        $(".location_name").css({"color":"#61748c"})
        $(".location_name").html("<h1>Les Gets</h1>")
        $(".location_name").css({"font-family": "'the-seasons', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>46.1586° N, 6.6700° E</h3>")
        $(".card-lesgets").css({"visibility":"visible"})
    });

    $(".point_lesgets").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-lesgets").toggle()
        $('.point > div').not(this).toggle();
    });



    /// St Moritz

    $(".point_stmoritz").hover(function(){
        $(".container").css({"background-color":"#ffffff"})
        $(".masked").css({"background-color":"#6b94d6"})
        $(".location").css({"color":"#6b94d6"})
        $(".location_name").css({"color":"#6b94d6"})
        $(".location_name").html("<h1>St.Moritz</h1>")
        $(".location_name").css({"font-family": "'rafaella', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>46.4906° N, 9.8355° E</h3>")
        $(".card-stmoritz").css({"visibility":"visible"})
    });

    $(".point_stmoritz").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-stmoritz").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Golden Gate

    $(".point_goldengate").hover(function(){
        $(".container").css({"background-color":"#f53722"})
        $(".masked").css({"background-color":"#eba157"})
        $(".location").css({"color":"#eba157"})
        $(".location_name").css({"color":"#eba157"})
        $(".location_name").html("<h1>GOLDEN GATE</h1>")
        $(".location_name").css({"font-family": "'Erica One', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>37.8199° N, 122.4786° W</h3>")
        $(".card-goldengate").css({"visibility":"visible"})
    });

    $(".point_goldengate").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-goldengate").toggle()
        $('.point > div').not(this).toggle();
    });





    /// Atenas Playa

    $(".point_atenas").hover(function(){
        $(".container").css({"background-color":"#ba6d02"})
        $(".masked").css({"background-color":"#5aa375"})
        $(".location").css({"color":"#5aa375"})
        $(".location_name").css({"color":"#5aa375"})
        $(".location_name").html("<h1>Atenas</h1>")
        $(".location_name").css({"font-family": "'josefin-sans', sans-serif","font-style":"italic"})
        $(".coordinates").html("<h3>36.3812° N, 6.1973° W</h3>")
        $(".card-atenas").css({"visibility":"visible"})
    });

    $(".point_atenas").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-atenas").toggle()
        $('.point > div').not(this).toggle();
    });




    /// Tenerife

    $(".point_tenerife").hover(function(){
        $(".container").css({"background-color":"#1b3154"})
        $(".masked").css({"background-color":"#ed8258"})
        $(".location").css({"color":"#ed8258"})
        $(".location_name").css({"color":"#ed8258"})
        $(".location_name").html("<h1>La Tarta</h1>")
        $(".location_name").css({"font-family": "'poleno', sans-serif","font-style":"normal"})
        $(".coordinates").html("<h3>28.2723° N, 16.6425° W</h3>")
        $(".card-tenerife").css({"visibility":"visible"})
    });

    $(".point_tenerife").click(function(){
        $(".postcards").toggle()
        $(".postcards").css({"left":"50"})
        $(".card-tenerife").toggle()
        $('.point > div').not(this).toggle();
    });



    /// Card toggle poster & image

    $(".card").click(function(){
        $(this).toggleClass("class-rotate")
        $(this).children().slideToggle()
    });

});
