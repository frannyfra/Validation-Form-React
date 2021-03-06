export const textValidation = (text) => {
    let message;
    if (text !== undefined) {
        if (text === "" || text.trim() === "") {
            message = "Required Field";
        }
        if (/[^a-zA-Z -]/.test(text)) {
            message = "Invalid characters - please insert alphabetic characters";
        }
    }
    return message;
};



