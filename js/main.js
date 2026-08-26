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

  /* ---------- shared Formspree submit handler ---------- */
  var SUBMIT_SUCCESS_HTML =
    "<strong>Thank You \u2014 Your Request Has Been Received.</strong><br>" +
    "A.Bordeau Mechanical will review your request and contact you as soon as possible.<br>" +
    "For immediate or 24/7 HVAC service, please call:<br>" +
    "<a href=\"tel:6033870156\">603-387-0156</a>";

  function wireFormspreeForm(formId, statusId, extraFieldsFn) {
    var form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var status = document.getElementById(statusId);
      var submitBtn = form.querySelector("button[type=submit]");

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (status) {
        status.innerHTML = "Sending your request\u2026";
        status.classList.add("is-visible");
      }

      var formData = new FormData(form);
      if (typeof extraFieldsFn === "function") extraFieldsFn(form, formData);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (status) status.innerHTML = SUBMIT_SUCCESS_HTML;
          } else {
            response.json().then(function (data) {
              var message = (data && data.errors)
                ? data.errors.map(function (err) { return err.message; }).join(", ")
                : "Something went wrong. Please call 603-387-0156 instead.";
              if (status) status.innerHTML = message;
            }).catch(function () {
              if (status) status.innerHTML = "Something went wrong. Please call 603-387-0156 instead.";
            });
          }
        })
        .catch(function () {
          if (status) status.innerHTML = "Something went wrong. Please call 603-387-0156 instead.";
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  /* ---------- quote form -> Formspree ---------- */
  wireFormspreeForm("quote-form", "quote-status", function (form, formData) {
    if (!form.urgent.checked) formData.set("urgent", "No");
  });

  /* ---------- contact form -> Formspree ---------- */
  wireFormspreeForm("contact-form", "contact-status");

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
