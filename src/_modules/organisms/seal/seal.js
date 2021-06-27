import $ from 'jquery';

export default function setTextInvitedWhomAndWhere() {
    if ($('.value-from-qs').length > 0) {
        const params = new URLSearchParams(window.location.search);
        $('#name-to').text(params.get('whom') || $('#name-to').text);
        $('#location-to').text(params.get('at') || $('#location-to').text);
    }
}

export function onClickButtonConfirm() {
    if (!localStorage.getItem('confirmedOn')) {
        $('.seal .usability').removeClass('d-none');
        if ($('button.confirm')) {
            $('button.confirm').click(() => {
                localStorage.setItem('confirmedOn', new Date().toISOString());
                window.location.reload();
            });
        }
    }
}
