export const fetchQuestions = async (limit: number) => {
    const res = await fetch("/data.json");
    const json = await res.json();
    return json
}
