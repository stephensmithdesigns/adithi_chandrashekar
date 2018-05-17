function pixflow_subscribe() {
    "use strict";

    $('.sc-subscribe').on('submit', '.send', function (e) {
        e.preventDefault();
        var $this = $(this),
            $form = $this.closest('.sc-subscribe').find('.mc4wp-form'),
            $textbox = $form.find('[type=email]'),
            index = $('.sc-subscribe').index($this.parent()),
            interval = null;
        $textbox.val($this.find('.subscribe-textbox').val());
        if (!$form.length) {
            $this.find('.subscribe-err').css('color', $this.find('.errorcolor').val()).html(themeOptionValues.mailchimpNotInstalled);
            return false;
        }
        $.ajax({
            method: "POST",
            url: window.location.href.split('?')[0],
            data: $form.serialize(),
            beforeSend: function () {
                $this.find('.subscribe-button').addClass('subscribe-button-animation');

                var bg = $this.find('.subscribe-button').css('background-color');
                $this.find('.subscribe-textbox').css({border: ''});
                $this.find('.subscribe-err').html('');
            }
        }).done(function (msg) {
            var $id = $(msg).find('.sc-subscribe:eq(' + index + ')');
            $this.find('.subscribe-button').removeClass('subscribe-button-animation');

            if ($id.find('.mc4wp-error').length || $id.find('.mc4wp-alert').length) {
                var text = $id.find('.mc4wp-error').length ? $id.find('.mc4wp-error').text() : $id.find('.mc4wp-alert').text();
                $this.find('.subscribe-err').css('color', $this.find('.errorcolor').val()).html(text);
                $this.find('.subscribe-textbox').css({border: '1px solid ' + $this.find('.errorcolor').val()});
            } else if ($id.find('.mc4wp-success').length) {
                $this.find('.subscribe-err').css('color', $this.find('.successcolor').val()).html($id.find('.mc4wp-success').text());
            }
        });
        return false;
    });


    $('.modern-subscribe').on('submit', '.send', function (e) {
        e.preventDefault();
        var $this = $(this),
            $form = $this.closest('.modern-subscribe').find('.mc4wp-form'),
            $email = $form.find('[type=email]'),
            $name = $form.find('[name="FNAME"]'),
            index = $('.modern-subscribe').index($this.parent()),
            interval = null;
        $email.val($this.find('.email-input').val());
        $name.val($this.find('.name-input').val());
        if (!$form.length) {
            $this.find('.subscribe-err').css('color', '#FF6A6A').html(themeOptionValues.mailchimpNotInstalled);
            return false;
        }
        $.ajax({
            method: "POST",
            url: window.location.href.split('?')[0],
            data: $form.serialize(),
            beforeSend: function () {
                $this.find('.subscribe-err').html('');
            }
        }).done(function (msg) {
            var $id = $(msg).find('.modern-subscribe:eq(' + index + ')');
            if ($id.find('.mc4wp-error').length || $id.find('.mc4wp-alert').length) {
                var text = $id.find('.mc4wp-error').length ? $id.find('.mc4wp-error').text() : $id.find('.mc4wp-alert').text();
                $this.find('.subscribe-err').css('color', '#FF6A6A').html(text);
                $this.find('.name-input,.email-input').css({borderBottom: '1px solid #FF6A6A'});
            } else if ($id.find('.mc4wp-success').length) {
                $this.find('.subscribe-err').css('color', '#74c374').html($id.find('.mc4wp-success').text());
            }
        });
        return false;
    });

    $('.business-subscribe').on('submit','.send',function(e){
        e.preventDefault();
        var $this = $(this),
            $form = $this.closest('.business-subscribe').find('.mc4wp-form'),
            $email = $form.find('[type=email]'),
            index = $('.business-subscribe').index($this.parent()),
            interval = null;
        $email.val($this.find('.email-input').val());
        if (!$form.length) {
            $this.find('.subscribe-err').css('color', '#FF6A6A').html(themeOptionValues.mailchimpNotInstalled);
            return false;
        }
        $.ajax({
            method: "POST",
            url: window.location.href.split('?')[0],
            data: $form.serialize(),
            beforeSend: function () {
                $this.find('.subscribe-err').html('');
            }
        }).done(function (msg) {
            var $id = $(msg).find('.business-subscribe:eq(' + index + ')');
            if ($id.find('.mc4wp-error').length || $id.find('.mc4wp-alert').length) {
                var text = $id.find('.mc4wp-error').length ? $id.find('.mc4wp-error').text() : $id.find('.mc4wp-alert').text();
                $this.find('.subscribe-err').css('color', '#FF6A6A').html(text);
                $this.find('.email-input').css({border: '1px solid #FF6A6A'});
            } else if ($id.find('.mc4wp-success').length) {
                $this.find('.subscribe-err').css('color', '#74c374').html($id.find('.mc4wp-success').text());
            }
        });
        return false;
    });
}
document_ready_functions.pixflow_subscribe = [];