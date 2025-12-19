const WATCH_SITES = {
  hianime: (title) =>
    `https://hianime.to/search?keyword=${encodeURIComponent(title)}`,

  crunchyroll: (title) =>
    `https://www.crunchyroll.com/search?q=${encodeURIComponent(title)}`,

  google: (title) =>
    `https://www.google.com/search?q=watch+${encodeURIComponent(title)}`,
};

export function openExternalWatchSearch(title) {
  if (!title) return;

  const site = localStorage.getItem("watchSite") || "hianime";
  const resolver = WATCH_SITES[site] || WATCH_SITES.hianime;

  window.open(resolver(title), "_blank");
}
