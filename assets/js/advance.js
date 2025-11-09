//Advanced Features
//Lazy Loading Images

// Intersection Observer for lazy loading
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll("img[data-src]");
    lazyImages.forEach((img) => imageObserver.observe(img));
  });
}

//Offline Detection Script

document.addEventListener("DOMContentLoaded", function () {
  const offlineModal = document.getElementById("offline-modal");
  const retryBtn = document.getElementById("retry-connection");

  function showOfflineModal() {
    offlineModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideOfflineModal() {
    offlineModal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  function checkOnlineStatus() {
    if (!navigator.onLine) {
      showOfflineModal();
    } else {
      hideOfflineModal();
    }
  }

  // Check initial status
  checkOnlineStatus();

  // Listen for online/offline events
  window.addEventListener("online", function () {
    console.log("Back online!");
    hideOfflineModal();
  });

  window.addEventListener("offline", function () {
    console.log("Gone offline!");
    showOfflineModal();
  });

  // Retry button functionality
  retryBtn.addEventListener("click", function () {
    if (navigator.onLine) {
      hideOfflineModal();
    } else {
      // Force a connection check
      fetch(window.location.href, { method: "HEAD", cache: "no-cache" })
        .then(() => {
          hideOfflineModal();
        })
        .catch(() => {
          // Still offline, show a message
          alert("Still offline. Please check your internet connection.");
        });
    }
  });

  // Close modal when clicking outside
  offlineModal.addEventListener("click", function (e) {
    if (e.target === offlineModal) {
      // Only close if online
      if (navigator.onLine) {
        hideOfflineModal();
      }
    }
  });
});

// Service Worker for Offline Capability

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/sw.js").then(
      function (registration) {
        console.log("ServiceWorker registration successful");
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
