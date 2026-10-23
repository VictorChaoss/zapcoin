// ============================================
// EDIT THESE TWO LINES WHEN YOU LAUNCH
// ============================================
const CONFIG = {
  contractAddress: "", // paste your $ZAP CA here
  pumpFunUrl: "https://pump.fun", // paste your coin's pump.fun page here
};
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const caEl = document.getElementById("ca-value");
  const copyBtn = document.getElementById("copy-btn");

  caEl.textContent = CONFIG.contractAddress || "Dropping at launch";

  document.querySelectorAll("[data-buy]").forEach((a) => {
    a.href = CONFIG.pumpFunUrl;
  });

  copyBtn.addEventListener("click", () => {
    if (!CONFIG.contractAddress) {
      copyBtn.textContent = "Soon";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1200);
      return;
    }
    navigator.clipboard.writeText(CONFIG.contractAddress).then(() => {
      copyBtn.textContent = "Copied ⚡";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    });
  });
});
