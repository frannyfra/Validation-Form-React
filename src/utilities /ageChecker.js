export const ageChecker = (age) => {

    if (age !== undefined) {
        if (age > 99) {
            return <span>Submission Unsuccessful<br /> Required age is between 18 and 99 years older </span>;
        }
        if (age < 18) {
            return <span>Submission Unsuccessful<br /> Required age is 18 or older</span>;
        }
        if (age >= 18 && age < 99) {
            return <span>Success!<br />Thank you for submitting!</span>;
        }
    } else return;
};

