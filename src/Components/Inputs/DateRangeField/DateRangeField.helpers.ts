export const findIndicesOfSpecialCharacters = (str) => {
  const formattedStr = str.replace(/ /g, "_");
  const indices = [];
  const specialCharRegex = /[^A-Za-z0-9\s]/g; // Regular expression to match any non-alphanumeric character

  let match;
  while ((match = specialCharRegex.exec(formattedStr)) !== null) {
    indices.push(match.index);
  }

  return indices;
};

export const inverseIndices = (indices, strLength) => {
  const ranges = [];

  // Add range from beginning to first index - 1
  if (indices[0] > 0) {
    ranges.push([0, indices[0] - 1]);
  }

  // Add ranges between consecutive indices
  for (let i = 0; i < indices.length - 1; i++) {
    if (indices[i] + 1 < indices[i + 1]) {
      ranges.push([indices[i] + 1, indices[i + 1] - 1]);
    }
  }

  // Add range from last index + 1 to end
  if (indices[indices.length - 1] < strLength - 1) {
    ranges.push([indices[indices.length - 1] + 1, strLength - 1]);
  }

  return ranges;
};
