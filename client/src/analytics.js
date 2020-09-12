const load = async (apiBase) => {
  await fetch(`${apiBase}/tracker`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ screenWidth: screen.width }),
  });
};

export { load };
