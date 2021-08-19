$(document).ready(function () {
    var currentfloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");/*увеличение этажа*/ 
    var counterDown = $(".counter-down");/* уменьшение этада*/
    // при наведении
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor");/*удаление класса у этажа */
        currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentfloor); // записываем в счетчик справа
    });
    // стрелочка вверх
    counterUp.on('click', function(){
        if (currentfloor < 18){
            currentfloor++;
            usCurrentfloor = currentfloor.toLocaleString("en-US",{ minimumIntegerDigits: 2,
            useGrouping: false});// форматирование этажа
            $(".counter").text(usCurrentfloor);
            floorPath.removeClass("current-floor");//удаление класса
            $(`[data-floor=${usCurrentfloor}]`).toggleClass("current-floor");// добавление класса для подсветки этажа
        }
    });
    //стрелочка вниз
    counterDown.on('click', function(){
        if (currentfloor > 2){
            currentfloor--;
            usCurrentfloor = currentfloor.toLocaleString("en-US",{ minimumIntegerDigits: 2,
            useGrouping: false});
            $(".counter").text(usCurrentfloor);
            floorPath.removeClass("current-floor");//удаление класса
            $(`[data-floor=${usCurrentfloor}]`).toggleClass("current-floor");// добавление класса для подсветки этажа
        }
    });
   
});