// For the mobile-phone layout (navbar {side bar})

var navLinks = document.getElementById("navLinks");

function showmenu() {
  navLinks.style.right = "0px";
}

function hidemenu() {
  navLinks.style.right = "-200px";
}

// For the scroll Menu active part code:

$(document).ready(function (e) {
  $("a[href*=#]").bind("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000,
        function () {
          location.hash = target;
        }
      );
    return false;
  });
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();


  const form = document.getElementById("contact-form");
const nameField = form.elements["name"];
const emailField = form.elements["email"];
const messageField = form.elements["message"];
const submitButton = form.elements["submit"];

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (validateName() && validateEmail() && validateMessage()) {
    submitButton.disabled = true;

    const xhr = new XMLHttpRequest();
    xhr.open("POST", form.action);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          alert(xhr.responseText);
          form.reset();
          submitButton.disabled = false;
        } else {
          alert("There was an error sending your message. Please try again.");
          submitButton.disabled = false;
        }
      }
    };
    xhr.send(encodeFormData());
  }
});

function validateName() {
  const nameValue = nameField.value.trim();
  if (nameValue === "") {
    alert("Please enter your name.");
    nameField.focus();
    return false;
  }
  return true;
}

function validateEmail() {
  const emailValue = emailField.value.trim();
  if (emailValue === "") {
    alert("Please enter your email address.");
    emailField.focus();
    return false;
  } else if (!isValidEmail(emailValue)) {
    alert("Please enter a valid email address.");
    emailField.focus();
    return false;
  }
  return true;
}

function validateMessage() {
  const messageValue = messageField.value.trim();
  if (messageValue === "") {
    alert("Please enter your message.");
    messageField.focus();
    return false;
  }
  return true;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function encodeFormData() {
  const formData = new FormData(form);
  const encodedData = [];
  for (const pair of formData.entries()) {
    encodedData.push(encodeURIComponent(pair[0]) + "=" + encodeURIComponent(pair[1]));
  }
  return encodedData.join("&");
}
