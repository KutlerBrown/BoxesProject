for(i=0; i<16; i++){
    $('#contentContainer').append('<div id="box"></div>');
}
$('#contentContainer').on('click', '#box', function(){
    $(this).toggleClass('colored');
})