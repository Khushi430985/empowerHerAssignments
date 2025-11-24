function countCategories(categories) {
  const counted = categories.reduce((acc, cat) => {
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(counted)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  return { counted, sorted };
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));
