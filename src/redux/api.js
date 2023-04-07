export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&type=single&lang=EN&amount=5"
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
