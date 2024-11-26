# Welcome to my page!
I am Asmit Das, known online as asumito. `It is currently <span id="current-time"></span> in your area.

<script>
  const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  const currentTime = new Date().toLocaleTimeString([], options);
  document.getElementById('current-time').innerText = currentTime;
</script>
`

