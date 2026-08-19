const state = {
  discover: null,
  auth: { enabled: false, username: null },
  library: null,
  search: { query: "", page: 1, pageInfo: null },
  pending: 0,
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const elements = {
  authChip: $("#auth-chip"),
  brand: $("#brand"),
  discoverView: $("#discover-view"),
  libraryView: $("#library-view"),
  libraryBadge: $("#library-badge"),
  librarySubtitle: $("#library-subtitle"),
  libraryEmpty: $("#library-empty"),
  libraryGroups: $("#library-groups"),
  refreshLibrary: $("#refresh-library"),
  searchForm: $("#search-form"),
  searchInput: $("#search-input"),
  searchSection: $("#search-section"),
  searchTitle: $("#search-title"),
  searchResults: $("#search-results"),
  searchPagination: $("#search-pagination"),
  clearSearch: $("#clear-search"),
  discoverSections: $("#discover-sections"),
  seasonTitle: $("#season-title"),
  seasonalGrid: $("#seasonal-grid"),
  trendingGrid: $("#trending-grid"),
  popularGrid: $("#popular-grid"),
  loading: $("#loading"),
  toast: $("#toast"),
  detailsDialog: $("#details-dialog"),
  detailsContent: $("#details-content"),
  closeDetails: $("#close-details"),
};

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function plainText(value) {
  if (!value) return "";
  const doc = new DOMParser().parseFromString(String(value), "text/html");
  return doc.body.textContent?.trim() ?? "";
}

function prettyEnum(value) {
  return value
    ? String(value)
        .toLowerCase()
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    : "";
}

function beginLoading() {
  state.pending += 1;
  elements.loading.classList.remove("hidden");
}

function endLoading() {
  state.pending = Math.max(0, state.pending - 1);
  if (state.pending === 0) elements.loading.classList.add("hidden");
}

let toastTimer;
function toast(message, kind = "success") {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.dataset.kind = kind;
  elements.toast.classList.remove("hidden");
  toastTimer = setTimeout(() => elements.toast.classList.add("hidden"), 3200);
}

async function api(path, options) {
  const response = await fetch(path, options);
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.error || `Request failed with ${response.status}`);
  }

  return payload;
}

function mediaMeta(media) {
  return [
    media.format ? prettyEnum(media.format) : null,
    media.seasonYear ?? null,
    media.episodes ? `${media.episodes} eps` : null,
    media.averageScore ? `${media.averageScore}%` : null,
  ]
    .filter(Boolean)
    .join(" · ");
}

function cardMarkup(media, { listEntry } = {}) {
  const progress = listEntry
    ? `${listEntry.progress ?? 0}${media.episodes ? ` / ${media.episodes}` : ""} eps`
    : null;

  return `
    <article class="media-card" data-media-id="${media.id}">
      <button class="media-card-open" type="button" data-open-media="${media.id}">
        <div class="poster-wrap" style="--accent:${escapeHtml(media.accentColor || "#6175ff")}">
          ${
            media.coverImage
              ? `<img src="${escapeHtml(media.coverImage)}" alt="${escapeHtml(media.title)} cover" loading="lazy" />`
              : '<div class="poster-placeholder">No image</div>'
          }
          ${media.averageScore ? `<span class="score-chip">${media.averageScore}%</span>` : ""}
        </div>
        <div class="media-card-copy">
          <h3>${escapeHtml(media.title)}</h3>
          <p>${escapeHtml(progress || mediaMeta(media))}</p>
        </div>
      </button>
    </article>
  `;
}

function renderMedia(container, media, mode = "row") {
  container.className = mode === "grid" ? "media-grid" : "media-row";
  container.innerHTML = media.map((item) => cardMarkup(item)).join("");
}

function setupCardClicks(root = document) {
  root.querySelectorAll("[data-open-media]").forEach((button) => {
    button.addEventListener("click", () => void openDetails(Number(button.dataset.openMedia)));
  });
}

async function loadDiscover() {
  beginLoading();
  try {
    const data = await api("/api/discover");
    state.discover = data;
    state.auth = data.auth;

    elements.authChip.textContent = data.auth.enabled
      ? `Connected as ${data.auth.username}`
      : "Discovery mode";
    elements.authChip.classList.toggle("connected", data.auth.enabled);

    elements.seasonTitle.textContent = `${prettyEnum(data.season.name)} ${data.season.year}`;
    renderMedia(elements.seasonalGrid, data.seasonal.results);
    renderMedia(elements.trendingGrid, data.trending.results);
    renderMedia(elements.popularGrid, data.popular.results);
    setupCardClicks(elements.discoverSections);
  } catch (error) {
    toast(error.message, "error");
  } finally {
    endLoading();
  }
}

async function search(page = 1) {
  const query = elements.searchInput.value.trim();
  if (!query) return;

  beginLoading();
  try {
    const data = await api(`/api/search?q=${encodeURIComponent(query)}&page=${page}`);
    state.search = { query, page, pageInfo: data.pageInfo };

    elements.searchSection.classList.remove("hidden");
    elements.discoverSections.classList.add("hidden");
    elements.searchTitle.textContent = `Results for “${query}”`;
    renderMedia(elements.searchResults, data.results, "grid");
    setupCardClicks(elements.searchResults);
    renderSearchPagination();
  } catch (error) {
    toast(error.message, "error");
  } finally {
    endLoading();
  }
}

function renderSearchPagination() {
  const info = state.search.pageInfo;
  if (!info) {
    elements.searchPagination.replaceChildren();
    return;
  }

  elements.searchPagination.innerHTML = `
    <button type="button" data-search-page="${Math.max(1, info.currentPage - 1)}" ${info.currentPage <= 1 ? "disabled" : ""}>Previous</button>
    <span>Page ${info.currentPage}${info.lastPage ? ` of ${info.lastPage}` : ""}</span>
    <button type="button" data-search-page="${info.currentPage + 1}" ${!info.hasNextPage ? "disabled" : ""}>Next</button>
  `;

  elements.searchPagination.querySelectorAll("[data-search-page]").forEach((button) => {
    button.addEventListener("click", () => void search(Number(button.dataset.searchPage)));
  });
}

function clearSearch() {
  state.search = { query: "", page: 1, pageInfo: null };
  elements.searchInput.value = "";
  elements.searchSection.classList.add("hidden");
  elements.discoverSections.classList.remove("hidden");
  elements.searchResults.replaceChildren();
  elements.searchPagination.replaceChildren();
}

function detailStats(media) {
  const items = [
    ["Score", media.averageScore ? `${media.averageScore}%` : "—"],
    ["Episodes", media.episodes ?? "—"],
    ["Status", prettyEnum(media.status) || "—"],
    ["Format", prettyEnum(media.format) || "—"],
    ["Duration", media.duration ? `${media.duration} min` : "—"],
    ["Popularity", media.popularity?.toLocaleString?.() ?? "—"],
  ];

  return items
    .map(
      ([label, value]) => `
        <div class="stat">
          <span>${escapeHtml(label)}</span>
          <strong>${escapeHtml(value)}</strong>
        </div>
      `,
    )
    .join("");
}

function relationMarkup(relation) {
  const media = relation.media;
  return `
    <button class="relation-card" type="button" data-open-media="${media.id}">
      ${media.coverImage ? `<img src="${escapeHtml(media.coverImage)}" alt="" loading="lazy" />` : ""}
      <span>
        <small>${escapeHtml(prettyEnum(relation.relationType))}</small>
        <strong>${escapeHtml(media.title)}</strong>
      </span>
    </button>
  `;
}

function libraryControls(media) {
  if (!state.auth.enabled) {
    return `
      <div class="auth-callout">
        <strong>Want list management too?</strong>
        <span>Run the server with ANILIST_TOKEN and ANILIST_USERNAME to enable real AniList mutations.</span>
      </div>
    `;
  }

  const existing = state.library?.entries?.find((entry) => entry.mediaId === media.id);
  const status = existing?.status ?? "PLANNING";
  const progress = existing?.progress ?? 0;

  return `
    <form class="list-controls" data-list-form="${media.id}">
      <label>
        Status
        <select name="status">
          ${["PLANNING", "CURRENT", "COMPLETED", "PAUSED", "DROPPED", "REPEATING"]
            .map(
              (value) =>
                `<option value="${value}" ${value === status ? "selected" : ""}>${prettyEnum(value)}</option>`,
            )
            .join("")}
        </select>
      </label>
      <label>
        Progress
        <input name="progress" type="number" min="0" ${media.episodes ? `max="${media.episodes}"` : ""} value="${progress}" />
      </label>
      <button type="submit">${existing ? "Update AniList" : "Add to AniList"}</button>
    </form>
  `;
}

function renderDetails(media) {
  const description = plainText(media.description) || "No description available.";
  const airing = media.nextAiringEpisode?.airingAt
    ? `Episode ${media.nextAiringEpisode.episode} airs ${new Date(media.nextAiringEpisode.airingAt * 1000).toLocaleString()}`
    : null;

  elements.detailsContent.innerHTML = `
    <article class="details">
      <div class="details-hero" ${media.bannerImage ? `style="background-image:linear-gradient(to top,#101522 0%,rgba(16,21,34,.55) 55%,rgba(16,21,34,.12) 100%),url('${escapeHtml(media.bannerImage)}')"` : ""}>
        ${media.coverImage ? `<img class="details-poster" src="${escapeHtml(media.coverImage)}" alt="${escapeHtml(media.title)} cover" />` : ""}
        <div class="details-title">
          <p class="eyebrow">${escapeHtml([prettyEnum(media.season), media.seasonYear].filter(Boolean).join(" "))}</p>
          <h2>${escapeHtml(media.title)}</h2>
          <p>${escapeHtml(mediaMeta(media))}</p>
          ${airing ? `<span class="airing-chip">${escapeHtml(airing)}</span>` : ""}
        </div>
      </div>

      <div class="details-body">
        <div class="details-main">
          <section>
            <h3>Overview</h3>
            <p class="description">${escapeHtml(description)}</p>
          </section>

          ${media.genres?.length ? `<div class="tag-list">${media.genres.map((genre) => `<span>${escapeHtml(genre)}</span>`).join("")}</div>` : ""}

          <div class="stats-grid">${detailStats(media)}</div>

          ${
            media.studios?.length
              ? `<section><h3>Studios</h3><p>${media.studios.map((studio) => escapeHtml(studio.name)).join(" · ")}</p></section>`
              : ""
          }

          ${
            media.characters?.length
              ? `<section><h3>Characters</h3><div class="people-row">${media.characters
                  .map(
                    (character) => `
                      <div class="person">
                        ${character.image ? `<img src="${escapeHtml(character.image)}" alt="" loading="lazy" />` : ""}
                        <strong>${escapeHtml(character.name)}</strong>
                        <span>${escapeHtml(prettyEnum(character.role))}</span>
                      </div>`,
                  )
                  .join("")}</div></section>`
              : ""
          }

          ${
            media.relations?.length
              ? `<section><h3>Related titles</h3><div class="relations-row">${media.relations.map(relationMarkup).join("")}</div></section>`
              : ""
          }
        </div>

        <aside class="details-sidebar">
          ${libraryControls(media)}
          ${
            media.siteUrl
              ? `<a class="external-button" href="${escapeHtml(media.siteUrl)}" target="_blank" rel="noreferrer">Open on AniList</a>`
              : ""
          }
          ${
            media.externalLinks?.length
              ? `<div class="external-links"><strong>Watch / learn more</strong>${media.externalLinks
                  .slice(0, 8)
                  .map(
                    (link) =>
                      `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.site || "External link")}</a>`,
                  )
                  .join("")}</div>`
              : ""
          }
        </aside>
      </div>
    </article>
  `;

  setupCardClicks(elements.detailsContent);

  const listForm = elements.detailsContent.querySelector("[data-list-form]");
  if (listForm) {
    listForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = new FormData(listForm);
      await saveEntry(media.id, {
        status: form.get("status"),
        progress: Number(form.get("progress") ?? 0),
      });
      await loadLibrary({ quiet: true });
      renderDetails(media);
    });
  }
}

async function openDetails(id) {
  beginLoading();
  try {
    if (state.auth.enabled && !state.library) {
      await loadLibrary({ quiet: true });
    }

    const media = await api(`/api/anime/${id}`);
    renderDetails(media);

    if (!elements.detailsDialog.open) elements.detailsDialog.showModal();
    elements.detailsDialog.scrollTop = 0;
  } catch (error) {
    toast(error.message, "error");
  } finally {
    endLoading();
  }
}

async function saveEntry(mediaId, patch) {
  beginLoading();
  try {
    await api(`/api/library/media/${mediaId}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(patch),
    });
    toast("AniList entry updated.");
  } catch (error) {
    toast(error.message, "error");
    throw error;
  } finally {
    endLoading();
  }
}

async function removeEntry(entryId) {
  beginLoading();
  try {
    await api(`/api/library/entry/${entryId}`, { method: "DELETE" });
    toast("Removed from AniList.");
    await loadLibrary({ quiet: true });
  } catch (error) {
    toast(error.message, "error");
  } finally {
    endLoading();
  }
}

const statusOrder = ["CURRENT", "PLANNING", "PAUSED", "REPEATING", "COMPLETED", "DROPPED"];

function renderLibrary() {
  const entries = state.library?.entries ?? [];
  elements.libraryBadge.textContent = entries.length;
  elements.libraryBadge.classList.toggle("hidden", entries.length === 0);

  if (!state.auth.enabled) {
    elements.librarySubtitle.textContent = "Authentication is not configured for this server.";
    elements.libraryGroups.replaceChildren();
    elements.libraryEmpty.classList.remove("hidden");
    elements.libraryEmpty.innerHTML = `
      <h2>Connect an AniList account</h2>
      <p>Set <code>ANILIST_TOKEN</code> and <code>ANILIST_USERNAME</code> when starting the example. The token stays server-side; the browser never receives it.</p>
      <pre>ANILIST_TOKEN="..." ANILIST_USERNAME="..." bun run start</pre>
    `;
    return;
  }

  elements.librarySubtitle.textContent = `Synced from ${state.auth.username}'s AniList account.`;

  if (entries.length === 0) {
    elements.libraryGroups.replaceChildren();
    elements.libraryEmpty.classList.remove("hidden");
    elements.libraryEmpty.innerHTML = "<h2>Your anime list is empty.</h2><p>Open a title from Discover and add it to AniList.</p>";
    return;
  }

  elements.libraryEmpty.classList.add("hidden");
  const groups = new Map();
  for (const entry of entries) {
    const key = entry.status ?? "OTHER";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(entry);
  }

  const ordered = [...groups.entries()].sort(
    ([a], [b]) => statusOrder.indexOf(a) - statusOrder.indexOf(b),
  );

  elements.libraryGroups.innerHTML = ordered
    .map(
      ([status, items]) => `
        <section class="library-group">
          <div class="section-heading compact">
            <h2>${escapeHtml(prettyEnum(status))}</h2>
            <span>${items.length}</span>
          </div>
          <div class="library-list">
            ${items
              .map(
                (entry) => `
                  <article class="library-item">
                    <button class="library-open" type="button" data-open-media="${entry.mediaId}">
                      ${entry.media.coverImage ? `<img src="${escapeHtml(entry.media.coverImage)}" alt="" loading="lazy" />` : ""}
                      <span class="library-copy">
                        <strong>${escapeHtml(entry.media.title)}</strong>
                        <small>${escapeHtml(mediaMeta(entry.media))}</small>
                      </span>
                    </button>
                    <span class="progress-value">${entry.progress ?? 0}${entry.media.episodes ? ` / ${entry.media.episodes}` : ""}</span>
                    <div class="library-actions">
                      <button type="button" data-progress-entry="${entry.mediaId}" data-progress="${(entry.progress ?? 0) + 1}">+1 episode</button>
                      <button type="button" data-complete-entry="${entry.mediaId}" data-progress="${entry.media.episodes ?? entry.progress ?? 0}">Complete</button>
                      <button class="danger" type="button" data-remove-entry="${entry.id}">Remove</button>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  setupCardClicks(elements.libraryGroups);

  elements.libraryGroups.querySelectorAll("[data-progress-entry]").forEach((button) => {
    button.addEventListener("click", async () => {
      await saveEntry(Number(button.dataset.progressEntry), {
        status: "CURRENT",
        progress: Number(button.dataset.progress),
      });
      await loadLibrary({ quiet: true });
    });
  });

  elements.libraryGroups.querySelectorAll("[data-complete-entry]").forEach((button) => {
    button.addEventListener("click", async () => {
      await saveEntry(Number(button.dataset.completeEntry), {
        status: "COMPLETED",
        progress: Number(button.dataset.progress),
      });
      await loadLibrary({ quiet: true });
    });
  });

  elements.libraryGroups.querySelectorAll("[data-remove-entry]").forEach((button) => {
    button.addEventListener("click", () => void removeEntry(Number(button.dataset.removeEntry)));
  });
}

async function loadLibrary({ quiet = false } = {}) {
  if (!state.auth.enabled) {
    state.library = { entries: [] };
    renderLibrary();
    return;
  }

  if (!quiet) beginLoading();
  try {
    state.library = await api("/api/library");
    renderLibrary();
  } catch (error) {
    toast(error.message, "error");
  } finally {
    if (!quiet) endLoading();
  }
}

function switchView(view) {
  $$(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === view);
  });
  elements.discoverView.classList.toggle("active", view === "discover");
  elements.libraryView.classList.toggle("active", view === "library");

  if (view === "library") void loadLibrary();
}

$$('[data-view]').forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

elements.brand.addEventListener("click", () => switchView("discover"));
elements.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  void search(1);
});
elements.clearSearch.addEventListener("click", clearSearch);
elements.refreshLibrary.addEventListener("click", () => void loadLibrary());
elements.closeDetails.addEventListener("click", () => elements.detailsDialog.close());
elements.detailsDialog.addEventListener("click", (event) => {
  if (event.target === elements.detailsDialog) elements.detailsDialog.close();
});

await loadDiscover();
