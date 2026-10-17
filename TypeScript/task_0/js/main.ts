interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 22,
  location: 'San Francisco',
};

const student2: Student = {
  firstName: 'Sara',
  lastName: 'Smith',
  age: 24,
  location: 'New York',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tbody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
