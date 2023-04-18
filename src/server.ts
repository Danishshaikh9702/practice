import app from "./app";

const PORT: Number = 5051;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));