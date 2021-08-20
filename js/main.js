$(document).ready(function () {
    var currentfloor = 2;
    var floorPath = $(".home-image path");
    var counterUp = $(".counter-up");/*увеличение этажа*/ 
    var counterDown = $(".counter-down");/* уменьшение этада*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var flatPath = $(".modal-image path")
    var flatNumber = 0;
    var flatList = $(".flat-link");
    var viewFlatsButton = $(".view-flats");
    // при наведении
    floorPath.on('mouseover', function(){
        floorPath.removeClass("current-floor");/*удаление класса у этажа */
        currentfloor = $(this).attr("data-floor"); // получаем значение текущего этажа
        $(".counter").text(currentfloor); // записываем в счетчик справа
    });
    //при наведение на список
    flatList.on(`mouseover`, function(){
        flatNumber=$(this).attr("flat-number");
        flatList.removeClass("flatlinkon");
        flatPath.removeClass("flats-on");/*удаление класса у квартиры */
        $(`[flat-number=${flatNumber}]`).toggleClass("flats-on");
    });
    // при наведение на изображение
    flatPath.on('mouseover', function(){
        flatNumber=$(this).attr("flat-number");
        flatList.removeClass("flatlinkon");
        flatPath.removeClass("flats-on");/*удаление класса у квартиры */
        $(`[flat-number=${flatNumber}]`).toggleClass("flatlinkon");
    });
    floorPath.on('click', toggleModal); /*при клике вызвать окно */
    modalCloseButton.on('click', toggleModal);
    viewFlatsButton.on('click', toggleModal);
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
    function toggleModal(){ 
        // открыть-закрыть окно
        modal.toggleClass("is-open");
    }
});