export const getUserAge = (date) => {
    const today = new Date();

    if (date !== undefined) {
        const currentDate = {
            year: today.getFullYear(),
            month: today.getMonth() + 1,
            day: today.getDate()
        };

        const dateOfBirthUser = {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
        };

        let calculatedAge = currentDate.year - dateOfBirthUser.year;
        if (
            currentDate.month < dateOfBirthUser.month ||
            (currentDate.month == dateOfBirthUser.month &&
                currentDate.day < dateOfBirthUser.day)
        ) {
            calculatedAge--;
        } else {
            return calculatedAge;
        }
        return calculatedAge;
    } else return "Please insert your date of birth"

};

export const getDateOfBirth = (date) => {

    const dateOfBirthUser = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()
    };
    const displayDateOfBirth = `${dateOfBirthUser.day}/${dateOfBirthUser.month}/${dateOfBirthUser.year}`
    return displayDateOfBirth;
}


