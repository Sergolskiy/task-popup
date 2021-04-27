
$('#newPopup').modal()

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
    if(!$(that).hasClass('active')){
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').hide()
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').prev().hide()
    } else {
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').show()
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').prev().show()
    }

}

function changeOptionType(that, type) {
    $('.taskPopup-top-action').removeClass('active')
    $(that).addClass('active')
    $('.taskPopup-canter-inner').removeClass('active')
    $('.taskPopup-canter-inner[data-center="'+type+'"]').addClass('active')
    $('.taskPopup-right-inner').removeClass('active')
    $('.taskPopup-right-inner[data-right="'+type+'"]').addClass('active')
}

function changeCreateType(that, type) {
    $('.taskPopup-create-item').removeClass('active')
    $(that).addClass('active')
    $('.taskPopup-create-task').removeClass('active')
    $('.taskPopup-create-task[data-task="'+type+'"]').addClass('active')
}