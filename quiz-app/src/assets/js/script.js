$(document).ready(function () {
    jQuery("#archive-blog").on("change", function () {
        let year = jQuery("#archive-blog").val();

        $.ajax({
            type: "GET",
            url: ajax_req.ajax_url,
            data: {
                action: "get_blogs",
                year: year,
            },
            success: function (response) {
                let html = "";

                JSON.parse(response).map(function (val) {
                    html += `<a href='${val.link}'> <b>></b> ${val.title} </a><br>`;
                });

                $(".show-archive-blog").html(html);
                $(".show-archive-blog").css({ display: "block" });
            },
            error: function (data) {
                console.log(data);
            },
        });
    });

    $("#user-signup").on("click", function (e) {
        e.preventDefault();

        if ($("#signup_from").valid()) {

            let u_email = $("#user_email").val();
            let form_data = $("#signup_from").serialize();

            if (isEmail(u_email)) {

                $.ajax({
                    type: "POST",
                    url: ajax_req.ajax_url,
                    data: 'action=reg_user&' + form_data,
                    success: function (response) {
                        console.log(response);
                        if (response === "1") {
                            // location.href = "dashboard.php";
                            console.log("signup");
                            $("#invalid_email").hide();
                            $("#valid_email").show();
                        } else {
                            // alert("Email Already Exist Use Different Email");
                            $("#valid_email").hide();
                            $("#invalid_email").show();
                        }
                    },
                    error: function (data) {
                        console.log(data);
                    }
                });
            }
        }

        function isEmail(email) {
            var EmailRegex =
                /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return EmailRegex.test(email);
        }
    });

    $("#user_email").keypress(function (e) {
        let temp = $("#user_email").val();
        if (temp.includes("@")) {
            $("#invalid_email").hide();
        }
    });
});
