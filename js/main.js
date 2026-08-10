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
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
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

  /* ---------- quote form -> mailto ---------- */
  var quoteForm = document.getElementById("quote-form");
  if (quoteForm) {
    quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = quoteForm.name.value.trim();
      var phone = quoteForm.phone.value.trim();
      var town = quoteForm.town.value.trim();
      var service = quoteForm.service.value.trim();
      var details = quoteForm.details.value.trim();

      var subject = "Quote Request: " + (service || "HVAC Service") + " - " + name;
      var bodyLines = [
        "Name: " + name,
        "Phone: " + phone,
        "Town/City: " + (town || "-"),
        "Service Needed: " + (service || "-"),
        "",
        "Details:",
        details || "-"
      ];
      var mailto = "mailto:abordeaumechanical@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      var status = document.getElementById("quote-status");
      if (status) {
        status.textContent = "Opening your email client to send this quote request to A. Bordeau Mechanical\u2026";
        status.classList.add("is-visible");
      }
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
})();
