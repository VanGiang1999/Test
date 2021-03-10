$(document).ready(function() {
    $('button').click(function(event) {
        $('h1').animate({
            marginLeft: 500
        }, 400)
    });
});

//selector -> Chọn cái nào.
//event -> Sự kiện gì sẻ sảy ra với selector.
//animate -> Hiệu ứng.