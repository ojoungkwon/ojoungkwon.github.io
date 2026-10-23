(() => {
  "use strict";

  document.querySelectorAll("[data-copy-seminars]").forEach((button) => {
    button.addEventListener("click", async () => {
      const id = button.dataset.copySeminars;
      const contents = id === "all"
        ? [...document.querySelectorAll(".seminar-paste-content")]
        : [document.getElementById(id)?.querySelector(".seminar-paste-content")];
      const status = button.parentElement.querySelector(".seminar-copy-status");
      if (!contents.length || contents.some((content) => !content)) return;

      // Copy only the announcement, without navigation or transfer controls.
      const text = contents.map((content) => content.innerText.trim()).join("\n\n\n");
      const html = contents.map((content) => content.innerHTML).join("<hr>");
      try {
        if (window.ClipboardItem && navigator.clipboard?.write) {
          await navigator.clipboard.write([new ClipboardItem({
            "text/plain": new Blob([text], { type: "text/plain" }),
            "text/html": new Blob([html], { type: "text/html" }),
          })]);
        } else {
          await navigator.clipboard.writeText(text);
        }
        status.textContent = id === "all" ? "All talks copied." : "Talk copied.";
      } catch (error) {
        status.textContent = "Copy unavailable. Select the announcement text or use Download text.";
      }
    });
  });
})();
