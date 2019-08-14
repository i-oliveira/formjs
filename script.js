<script>

    $(function () {
        $("form[name='registration']").validate({
            // Specify validation rules
            rules: {
                firstname: "required",
                lastname: "required",
                Telefone: "required",
                Cliente: "required",
                Mensagem: "required",
                Concordo: "required",
                Implementacao_prevista_para: "required",
                prazo_para_implementacao: "required",
                //Indústria: "required",
                //est_interessado_em: "required",
                //cnpj: {cnpj: true},
                Email: {
                    required: true,
                    // Specify that email should be validated
                    // by the built-in "email" rule
                    email: true
                }
            },
            messages: {
                firstname: "Favor inserir o nome",
                lastname: "Favor inserir o sobrenome",
                Telefone: "Favor inserir o telefone",
                Email: "Favor inserir um endereço de email válido",
                Cliente: "Favor inserir a empresa",
                Mensagem: "Favor inserir sua mensagem",
                Concordo: "",
                e_cliente_eset_: "Favor escolha uma opção",
                prazo_para_implementacao: "Favor escolha uma opção",
                Implementacao_prevista_para: "Favor escolha uma opção",
                antiv_rus_atual: "Favor escolha uma opção",
                Indústria: "Favor escolha uma opção",
                //cnpj: { cnpj: 'CNPJ inválido'},
                est_interessado_em: "Favor escolha uma opção"
            },
            submitHandler: function (form) {

                $.post("https://www.pages08.net/site/Contato/Contato", $("#registration").serialize());
                $("form").hide();
                $('.mensaje').text('Agradecemos sua mensagem. Em breve a equipe entrará em contato.');

                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'FormSubmit',
                    'FormName': 'LP Politicas'
                });
                
            }
        });
    });

    function fnredirect(url) {
        try {window.location.replace(url); }
        catch (e) {window.location = url; }
    }

    </script>
