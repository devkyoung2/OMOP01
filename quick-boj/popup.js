const MAX_RECENT = 10;
const STORAGE_KEYS = {
  recent: "quickBojRecent",
};

const form = document.getElementById("jump-form");
const input = document.getElementById("problem-id");
const statusEl = document.getElementById("status");
const recentList = document.getElementById("recent-list");
const recentEmpty = document.getElementById("recent-empty");
const clearRecentButton = document.getElementById("clear-recent");

let recentNumbers = [];

function getStorage(keys) {
  return new Promise((resolve) => {
    chrome.storage.local.get(keys, resolve);
  });
}

function setStorage(data) {
  return new Promise((resolve) => {
    chrome.storage.local.set(data, resolve);
  });
}

function normalizeNumber(value) {
  const trimmed = value.trim();
  if (!/^[0-9]+$/.test(trimmed)) {
    return "";
  }
  return String(Number(trimmed));
}

function openProblem(number) {
  const url = `https://www.acmicpc.net/problem/${number}`;
  if (chrome?.tabs?.create) {
    chrome.tabs.create({ url }, () => {
      if (chrome.runtime.lastError) {
        window.open(url, "_blank", "noopener");
      }
    });
    return;
  }
  window.open(url, "_blank", "noopener");
}

function setStatus(message) {
  statusEl.textContent = message;
}

function updateEmptyState() {
  recentEmpty.style.display = recentNumbers.length ? "none" : "block";
}

function createListItem(number) {
  const li = document.createElement("li");
  li.className = "list-item";

  const link = document.createElement("button");
  link.type = "button";
  link.className = "list-link";
  link.textContent = `#${number}`;
  link.addEventListener("click", () => openProblem(number));

  li.append(link);
  return li;
}

function renderLists() {
  recentList.innerHTML = "";

  recentNumbers.forEach((number) => {
    recentList.appendChild(createListItem(number));
  });

  updateEmptyState();
}

async function addRecent(number) {
  recentNumbers = [number, ...recentNumbers.filter((item) => item !== number)];
  if (recentNumbers.length > MAX_RECENT) {
    recentNumbers = recentNumbers.slice(0, MAX_RECENT);
  }
  await setStorage({ [STORAGE_KEYS.recent]: recentNumbers });
}

async function clearRecent() {
  recentNumbers = [];
  await setStorage({ [STORAGE_KEYS.recent]: [] });
  renderLists();
}

async function handleSubmit(event) {
  event.preventDefault();
  setStatus("");
  const normalized = normalizeNumber(input.value);
  if (!normalized) {
    setStatus("숫자만 입력해주세요.");
    return;
  }
  openProblem(normalized);
  await addRecent(normalized);
  renderLists();
  input.value = "";
}

async function init() {
  const data = await getStorage([STORAGE_KEYS.recent]);
  recentNumbers = data[STORAGE_KEYS.recent] || [];
  renderLists();
  input.focus();
}

input.addEventListener("input", () => {
  input.value = input.value.replace(/[^0-9]/g, "");
});

form.addEventListener("submit", handleSubmit);
clearRecentButton.addEventListener("click", clearRecent);

init();
