
type Person = {
    firstName: string;
    lastName: string;
};


function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}
const individual: Person = { firstName: "John", lastName: "Doe" };

export {};
