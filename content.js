// main
let debounceTimeout;

const observer = new MutationObserver(() => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    replaceLabels();
  }, 50);
});

const startObserver = () => {
  if (!document.body) return;
  observer.observe(document.body, { childList: true, subtree: true });
};

function replaceLabels() {
  document.querySelectorAll('span.font-header-2.dynamic-ellipsis-item[title="Connect"]').forEach(el => {
    if (el.textContent.trim() === "Connect") {
      el.textContent = "Friends";
    }
  });

  document.querySelectorAll('h2').forEach(h2 => {
    h2.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.nodeValue.includes("Connections")) {
        node.nodeValue = node.nodeValue.replace(/Connections/g, "Friends");
      }
    });
  });

  let title = document.querySelector('h1.friends-title');
  if (!title) {
    title = document.createElement('h1');
    title.className = 'friends-title';
    document.body.insertBefore(title, document.body.firstChild);
  }
  title.textContent = 'My Friends';

  document.querySelectorAll('span.mutual-friends-tooltip-label').forEach(el => {
    const current = el.textContent.trim();
    const updated = current
      .replace(/\bConnections\b/g, 'Friends')
      .replace(/\bConnection\b/g, 'Friend');

    if (current !== updated) el.textContent = updated;
  });

  document.querySelectorAll('span.text-lead, span.profile-header-social-count-label').forEach(el => {
    if (el.textContent.trim() === "Connections") {
      el.textContent = "Friends";
    }
  });

  document.querySelectorAll(
    'span[ng-if="layout.renameFriendsToConnections"][ng-bind="\'Label.AddConnection\' | translate"]'
  ).forEach(el => {
    if (el.textContent.trim() === "Add Connection") {
      el.textContent = "Add Friend";
    }
  });

  // tooltip
  document.querySelectorAll('div.tooltip-inner').forEach(el => {
    if (el.textContent.includes("Connections are established")) {
      el.textContent = el.textContent.replace(
        "Connections are established when two Roblox users mutually agree to add each other.",
        "Friends are established when two Roblox users mutually agree to add each other."
      );
    }
  });

  document.querySelectorAll('span.friends-carousel-display-name').forEach(el => {
    if (el.textContent.trim() === "Connect") {
      el.textContent = "Add Friend";
    }
  });

  document.querySelectorAll('div.small.text.text-content span').forEach(el => {
    const text = el.textContent.trim();
    if (text.includes("Connection request")) {
      el.textContent = text.replace("Connection request", "Friend request");
    }
  });

  document.querySelectorAll('label[for="social-network-visibility-followers"]').forEach(el => {
    el.textContent = "Friends, followers & people I follow";
  });

  document.querySelectorAll('label[for="social-network-visibility-following"]').forEach(el => {
    el.textContent = "Friends & people I follow";
  });

  document.querySelectorAll('label[for="social-network-visibility-friends"]').forEach(el => {
    el.textContent = "Friends";
  });

  document.querySelectorAll('label[for="party-setting-friends"]').forEach(el => {
    el.textContent = "Friends";
  });

  document.querySelectorAll('label[for="group-party-setting-friends"]').forEach(el => {
    el.textContent = "Friends";
  });

  document.querySelectorAll('label[for="online-status-followers"]').forEach(el => {
    el.textContent = "Friends, followers & people I follow";
  });

  document.querySelectorAll('label[for="online-status-following"]').forEach(el => {
    el.textContent = "Friends & people I follow";
  });

  document.querySelectorAll('label[for="online-status-friends"]').forEach(el => {
    el.textContent = "Friends";
  });

  document.querySelectorAll('label[for="join-experience-followers"]').forEach(el => {
    el.textContent = "Friends, followers & people I follow";
  });

  document.querySelectorAll('label[for="join-experience-following"]').forEach(el => {
    el.textContent = "Friends & people I follow";
  });

  document.querySelectorAll('label[for="join-experience-friends"]').forEach(el => {
    el.textContent = "Friends";
  });

  document.querySelectorAll('span.web-blox-css-tss-1283320-Button-textContainer').forEach(el => {
    const text = el.textContent.trim();
    if (text.includes("Remove Connection")) {
      el.textContent = text.replace("Remove Connection", "Remove Friend");
    }
    if (text.includes("Add Connection")) {
      el.textContent = text.replace("Add Connection", "Add Friend");
    }
  });

}

replaceLabels();
startObserver();
