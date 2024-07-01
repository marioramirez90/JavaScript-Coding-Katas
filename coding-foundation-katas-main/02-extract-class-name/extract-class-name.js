function extractClassName(sessionTitle) {
  if (sessionTitle.includes("Live-Session Class 2022 März")) {
    return "2022-03";
  } else if (sessionTitle.includes("Live-Session Class 2022 Maerz")) {
    return "2022-03";
  } else if (sessionTitle.includes("Live-Session Class 2022 September")) {
    return "2022-09";
  } else if (sessionTitle.includes("Live-Session Class 2023 Januar")) {
    return "2023-01";
  } else {
    return null;
  }
}
