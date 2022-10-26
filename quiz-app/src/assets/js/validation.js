console.log("test");

$(document).ready(function () {

    //login form validation
    $("#login_from").validate({
        rules: {
            login_email: {
                required: true,
                email: true,
            },
            login_password: {
                required: true,
            }
        },
        messages: {
            login_email: {
                required: "Please Enter the Email Address.",
                email: "Please Enter the Valid Email Addess.",
            },
            login_password: {
                required: "Please Enter the Password",
            }
        }
    });

    $("#user-login").on('click', function () {
        $("#login_from").valid();
    });

    //signup form validation
    $("#signup_from").validate({
        rules: {
            user_first_name: {
                required: true,
            },
            user_last_name: {
                required: true,
            },
            user_email: {
                required: true,
                email: true,
            },
            user_phone: "required",
            user_password: {
                required: true,
                minlength: 8,
                maxlength: 15,
            },
            user_password_c: {
                required: true,
                maxlength: 15,
                equalTo: "#user_password",
            }
        },
        messages: {
            user_first_name: {
                required: "Please Enter the First Name.",
            },
            user_last_name: {
                required: "Please Enter the Last Name.",
            },
            user_email: {
                required: "Please Enter the Email Address.",
                email: "Please Enter the Valid Email Addess.",
            },
            user_phone: "Please Enter the Phone Number.",
            user_password: {
                required: "Please Enter the Password",
                minlength: "Your Password Must Have 8 Characters.",
                maxlength: "Your Password Must Be Less Then 15 Characters.",
            },
            user_password_c: {
                required: "Please Enter the Password.",
                maxlength: "Your Password Must Be Less Then 15 Characters.",
                equalTo: "Please Enter the Same Password.",
            }
        }
    });

    $("#user-signup").on('click', function () {
        $("#signup_from").valid();
    });
});