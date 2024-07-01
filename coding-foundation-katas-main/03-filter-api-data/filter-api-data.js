function filterApiData(apiData, mandatoryKeys) {
  const result = apiData.filter((data) =>
    Object.fromEntries(
      Object.entries(data).filter(([key]) => mandatoryKeys.includes(key))
    )
  );
  return result;
}
