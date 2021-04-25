
// $('#newPopup').modal()

function openNewPopup() {
    $('#newPopup').modal()
}

function openTableDesc(that) {
    $(that).toggleClass('open')
    $(that).next().slideToggle()
}

function changeTypeTask(type, that) {
    // $('.taskPopup-top-btn').removeClass('active')
    $(that).toggleClass('active')
    if($(that).hasClass('active')){
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').hide()
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').prev().hide()
    } else {
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').show()
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').prev().show()
    }

}