<script>
  function navigate(e) {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    window.history.pushState(null, null, href);
  }
</script>

<div>
  <h1>Porsche</h1>
  <ul>
    <li>
      <a on:click={navigate} href="/product/taycan">Porsche Taycan</a>
    </li>
    <li>
      <a on:click={navigate} href="/product/718">Porsche 718</a>
    </li>
    <li>
      <a on:click={navigate} href="/product/911">Porsche 911</a>
    </li>
  </ul>
</div>
