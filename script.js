$("document").ready(function () {

    let images = ['images/p1.jpg', 'images/p2.jpg', 'images/p3.jpg', 'images/p4.jpg'];
    let next = $("#btnNext");
    let slides = $("#mySlides");
    let index = 0;


    // next.click(function () {
    //     let imagesLength = images.length;
    //     if (index < imagesLength - 1) {
    //         index++;
    //         slides.attr('src', images[index]);
    //     }
    //     else {
    //         if (index === imagesLength - 1) {
    //             index = 0;
    //             slides.attr('src', images[index]);
    //         }
    //     }
    // });
    
    let play = ()=>{
        let imagesLength = images.length;
        if (index < imagesLength - 1) {
            index++;
            slides.attr('src', images[index]);
        }
        else {
            if (index === imagesLength - 1) {
                index = 0;
                slides.attr('src', images[index]);
            }
        }
    }

    setInterval(play,1000);


})