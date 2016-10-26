/*
 * passwordStrength
 * Version: 1.0.0
 *
 * A simple plugin that can test the strength of password
 *
 * https://github.com/HenriettaSu/passwordStrength
 *
 * License: MIT
 *
 * Released on: October 26, 2016
 */

$.fn.passwordStrength = function () {
    var ele = $(this);
    ele.keyup(function () {
        var $this = $(this),
            val = $this.val(),
            strength = 0,
            number = /\d+/,
            words = /[a-zA-Z]+/,
            speChar = /[#@!~_\-%^&*\\\/]/,
            len = /\S{12,}/,
            same = /^(.)\1{2,}$/,
            $progress = $this.parents('.password-box').find('.progress-bar');
        if (val.match(number)) {
            strength += 10;
        }
        if (val.match(words)) {
            strength += 10;
        }
        if (val.match(speChar)) {
            strength += 10;
        }
        if (val.match(len)) {
            strength += 10;
        }
        if (val.match(same)) {
            strength -= 10;
        }
        switch (strength) {
            case 0:
                $progress.css('width', '0');
                $progress.attr('class', 'progress-bar bg-red');
                break;
            case 10:
                $progress.css('width', '25%');
                $progress.attr('class', 'progress-bar bg-red');
                break;
            case 20:
                $progress.css('width', '50%');
                $progress.attr('class', 'progress-bar bg-orange');
                break;
            case 30:
                $progress.css('width', '75%');
                $progress.attr('class', 'progress-bar bg-orange');
                break;
            case 40:
                $progress.css('width', '100%');
                $progress.attr('class', 'progress-bar bg-green');
                break;
            default:
                $progress.css('width', '0');
                $progress.attr('class', 'progress-bar');
                break;
        }
    });
}