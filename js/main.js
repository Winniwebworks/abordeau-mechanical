(function () {
  "use strict";

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav toggle ---------- */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("nav-is-open", isOpen);
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-is-open");
      });
    });
  }

  /* ---------- generate gauge tick-rule dividers ---------- */
  document.querySelectorAll(".tick-rule").forEach(function (rule) {
    var count = 48;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
      frag.appendChild(document.createElement("span"));
    }
    rule.appendChild(frag);
  });

  /* ---------- services accordion: keep one panel open at a time ---------- */
  var serviceDetails = document.querySelectorAll(".service-detail");
  serviceDetails.forEach(function (detail) {
    detail.addEventListener("toggle", function () {
      if (detail.open) {
        serviceDetails.forEach(function (other) {
          if (other !== detail) other.removeAttribute("open");
        });
      }
    });
  });

  /* ---------- quote form -> Formspree ---------- */
  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var status = document.getElementById("quote-status");
      var submitBtn = quoteForm.querySelector("button[type=submit]");

      if (!quoteForm.checkValidity()) {
        quoteForm.reportValidity();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.textContent = "Sending your request\u2026";
        status.classList.add("is-visible");
      }

      var formData = new FormData(quoteForm);
      if (!quoteForm.urgent.checked) {
        formData.set("urgent", "No");
      }

      fetch(quoteForm.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            quoteForm.reset();
            if (status) {
              status.textContent = "Thanks! Your service request has been sent \u2014 Andrew will follow up soon.";
            }
          } else {
            response.json().then(function (data) {
              var message = (data && data.errors)
                ? data.errors.map(function (err) { return err.message; }).join(", ")
                : "Something went wrong. Please call 603-387-0156 instead.";
              if (status) status.textContent = message;
            }).catch(function () {
              if (status) status.textContent = "Something went wrong. Please call 603-387-0156 instead.";
            });
          }
        })
        .catch(function () {
          if (status) status.textContent = "Something went wrong. Please call 603-387-0156 instead.";
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* ---------- contact form -> mailto ---------- */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = contactForm.name.value.trim();
      var email = contactForm.email.value.trim();
      var message = contactForm.message.value.trim();

      var subject = "Website Question from " + name;
      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        "",
        "Message:",
        message || "-"
      ];
      var mailto = "mailto:abordeaumechanical@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      var status = document.getElementById("contact-status");
      if (status) {
        status.textContent = "Opening your email client to send this message to A. Bordeau Mechanical\u2026";
        status.classList.add("is-visible");
      }
    });
  }

  /* ---------- project photo galleries ---------- */
  document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
    var images = Array.prototype.slice.call(gallery.querySelectorAll(".project-media-img"));
    var dots = Array.prototype.slice.call(gallery.querySelectorAll(".gallery-dot"));
    var prevBtn = gallery.querySelector(".gallery-prev");
    var nextBtn = gallery.querySelector(".gallery-next");
    var current = 0;

    function show(index) {
      current = (index + images.length) % images.length;
      images.forEach(function (img, i) {
        img.classList.toggle("is-active", i === current);
      });
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    if (prevBtn) prevBtn.addEventListener("click", function (e) {
      e.preventDefault();
      show(current - 1);
    });
    if (nextBtn) nextBtn.addEventListener("click", function (e) {
      e.preventDefault();
      show(current + 1);
    });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function (e) {
        e.preventDefault();
        show(i);
      });
    });
  });
})();
