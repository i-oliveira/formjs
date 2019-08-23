submitHandler: function (form) {

                $.post("https://www.site.com/aplex/Contato", $("#registration").serialize());
                $("form").hide();
                $('.mensaje').text('Agradecemos sua mensagem. Em breve a equipe entrará em contato.');

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'FormSubmit',
                    'FormName': 'LP Politicas'
                });
