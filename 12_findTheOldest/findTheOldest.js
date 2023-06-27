const findTheOldest = function(people) {
    return people.reduce((obj, person) => {
        let currentAge = 0;

        console.log(person.name, !person.yearOfDeath);
        if (!person.yearOfDeath) {
            const currentYear = new Date().getFullYear();
            currentAge = currentYear - person.yearOfBirth;
        } else {
            currentAge = person.yearOfDeath - person.yearOfBirth;
        }
        person.currentAge = currentAge;

        if (Object.keys(obj).length === 0) {
            return person;
        }

        if ((obj.currentAge < currentAge)  && !!(person.yearOfDeath)) {
            return person;
        }
        return obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
