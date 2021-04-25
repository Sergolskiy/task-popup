
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
        // switch (type) {
        //     case 'track':
        //         $('.taskPopup-canter-table tr[data-type="track"]').hide()
        //         break
        //     case 'notif':
        //         $('.taskPopup-canter-table tr[data-type="notif"]').hide()
        //         break
        //     case 'task':
        //         $('.taskPopup-canter-table tr[data-type="task"]').hide()
        //         break
        //     case 'recip':
        //         $('.taskPopup-canter-table tr[data-type="recip"]').hide()
        //         break
        // }
    } else {
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').show()
        $('.taskPopup-canter-table tr[data-type="'+type+'"]').prev().show()
        // switch (type) {
        //     case 'track':
        //         $('.taskPopup-canter-table tr[data-type="track"]').show()
        //         break
        //     case 'notif':
        //         $('.taskPopup-canter-table tr[data-type="notif"]').show()
        //         break
        //     case 'task':
        //         $('.taskPopup-canter-table tr[data-type="task"]').show()
        //         break
        //     case 'recip':
        //         $('.taskPopup-canter-table tr[data-type="recip"]').show()
        //         break
        // }
        // $('.taskPopup-canter-table tr[data-type="track"]').prev().show()
    }

}