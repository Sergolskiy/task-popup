
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

$(document).ready(function () {
    let today = moment()
    let lastDay = moment(today.format('MM/DD/YYYY'), "MM/DD/YYYY").add(10, 'days');

// $('.selected-data').html(moment().format('DD/MM/YYYY'))
// $('.selected-day').html(moment().format('dddd'))

    var picker = $('.daterange-input').daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "autoUpdateInput": true,
        "showCustomRangeLabel": false,
        "autoApply": true,
        "startDate": today.format('MM/DD/YYYY'),
        "minDate": today.format('MM/DD/YYYY'),
        "maxDate": lastDay.format('MM/DD/YYYY'),

        locale: {
            "format": 'MM/DD/YYYY',
            "applyLabel": "Ок",
            "cancelLabel": "Отмена",
            "fromLabel": "От",
            "toLabel": "До",
            "customRangeLabel": "Произвольный",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    });

    $('.daterange-input').val('')

    $('.daterangepicker').addClass('no-active')

    picker.on('apply.daterangepicker', function(ev, picker) {
        let money = $('.daterange-input[data-money]').attr('data-money')

        $('.daterangepicker').removeClass('no-active')
        $('.daterange-input').val(picker.startDate.format('DD/MM/YYYY'))

        if(today.format('YYYY-MM-DD') === picker.startDate.format('YYYY-MM-DD')){
            $('.select-money').html(money)
        } else {
            let diff = picker.startDate.diff(today, 'day') + 2
            $('.select-money').html(diff * parseInt(money))
        }

    });

    var picker2 = $('.daterange-input-2').daterangepicker({
        "singleDatePicker": true,
        "linkedCalendars": false,
        "autoUpdateInput": true,
        "showCustomRangeLabel": false,
        "autoApply": true,
        "startDate": today.format('MM/DD/YYYY'),
        "minDate": today.format('MM/DD/YYYY'),
        "maxDate": lastDay.format('MM/DD/YYYY'),

        locale: {
            "format": 'MM/DD/YYYY',
            "applyLabel": "Ок",
            "cancelLabel": "Отмена",
            "fromLabel": "От",
            "toLabel": "До",
            "customRangeLabel": "Произвольный",
            "daysOfWeek": [
                "Вс",
                "Пн",
                "Вт",
                "Ср",
                "Чт",
                "Пт",
                "Сб"
            ],
            "monthNames": [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ],
            "firstDay": 1
        }
    });
});