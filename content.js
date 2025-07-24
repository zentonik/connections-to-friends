// main
const startObserver = () => {
  const observer = new MutationObserver(() => {
    observer.disconnect();

    setTimeout(() => {
      replaceLabels();
      observer.observe(document.body, { childList: true, subtree: true });
    }, 0);
  });

  observer.observe(document.body, { childList: true, subtree: true });
};

// friends
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

  // add title if not there
  let title = document.querySelector('h1.friends-title');
  if (!title) {
    title = document.createElement('h1');
    title.className = 'friends-title';
    document.body.insertBefore(title, document.body.firstChild);
  }
  title.textContent = 'My Friends';

  // mutual friends
  document.querySelectorAll('span.mutual-friends-tooltip-label').forEach(el => {
    const current = el.textContent.trim();
    const updated = current
      .replace(/\bConnections\b/g, 'Friends')
      .replace(/\bConnection\b/g, 'Friend');

    if (current !== updated) el.textContent = updated;
  });

  // profile
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
}

// stop
replaceLabels();
startObserver();
