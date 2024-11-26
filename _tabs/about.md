---
title: "About"
layout: page
permalink: /about/
---

It is currently <span id="current-time"></span> in your area.

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const currentTime = new Date().toLocaleTimeString([], options);
    document.getElementById('current-time').innerText = currentTime;
  });
</script>
