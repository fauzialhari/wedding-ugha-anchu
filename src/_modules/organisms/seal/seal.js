import $ from 'jquery';

export default function setTextInvitedWhomAndWhere() {
    if ($('.value-from-qs').length > 0) {
        const params = new URLSearchParams(window.location.search);
        $('#name-to').text(params.get('whom') || $('#name-to').text);
        $('#location-to').text(params.get('at') || $('#location-to').text);
    }
}
