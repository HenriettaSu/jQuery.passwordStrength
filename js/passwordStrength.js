/*
 * passwordStrength
 * Version: 1.1.0
 *
 * A simple plugin that can test the strength of password
 *
 * https://github.com/HenriettaSu/passwordStrength
 *
 * License: MIT
 *
 * Released on: November 21, 2016
 */

$.fn.passwordStrength = function () {
    var ele = $(this);
    tester = new $.tester(ele);
    return tester;
}

$.tester = function (ele) {
    this.selector = ele;
    this.init(ele);
}

$.extend($.tester, {
    defaultRules: {
        number: {
            rule: /\d+/,
            method: true
        },
        lowercase: {
            rule: /[a-z]+/,
            method: true
        },
        uppercase: {
            rule: /[A-Z]+/,
            method: true
        },
        speChar: {
            rule: /[#@!~_\-%^&*()\\\/]/,
            method: true
        },
        len: {
            rule: /\S{12,}/,
            method: true
        },
        same: {
            rule: /^(.)\1{2,}$/,
            method: false
        }
    },
    prototype: {
        init: function (ele) {
            var rules = $.tester.defaultRules;
            ele.keyup(function () {
                var $this = $(this),
                    val = $this.val(),
                    strength = 0,
                    scroe,
                    per,
                    $progress = $this.parents('.password-box').find('.progress-bar'),
                    colorClass,
                    i,
                    rule,
                    method,
                    ruleLength = 0;
                for (i in rules) {
                    rule = rules[i].rule;
                    method = rules[i].method;
                    if (val.match(rule)) {
                        strength += (method === true) ? 1 : -1;
                    }
                    ruleLength += (method === true) ? 1 : 0;
                }
                scroe = 100 / ruleLength;
                per = strength * scroe;
                colorClass = (per < 30) ? 'bg-red' : (per > 30 && per < 90) ? 'bg-orange' : 'bg-green';
                $progress.css('width', per + '%');
                $progress.attr('class', 'progress-bar ' + colorClass);
            });
        },
        reset: function () {
            var selector = this.selector,
                $progress = $(selector).parents('.password-box').find('.progress-bar');
            $(selector).val('');
            $progress.css('width', '0');
            $progress.attr('class', 'progress-bar');
        }
    },
    addRules: function (settings) {
        $.extend($.tester.defaultRules, settings);
    }
});
