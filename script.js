// Add Subject Button Functionality
document.getElementById('addSubject').addEventListener('click', function () {
    const marksContainer = document.getElementById('marksContainer');
    const numberOfSubjects = marksContainer.children.length + 1;

    const newInputGroup = document.createElement('div');
    newInputGroup.classList.add('input-group');

    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `marks${numberOfSubjects}`);
    newLabel.innerText = `Subject ${numberOfSubjects} Marks:`;

    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'number');
    newInput.setAttribute('id', `marks${numberOfSubjects}`);
    newInput.setAttribute('name', 'marks[]');
    newInput.setAttribute('required', true);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add('delete-subject-btn');
    deleteBtn.innerHTML = '&times;';
    deleteBtn.addEventListener('click', function () {
        marksContainer.removeChild(newInputGroup);
    });

    newInputGroup.appendChild(newLabel);
    newInputGroup.appendChild(newInput);
    newInputGroup.appendChild(deleteBtn);

    marksContainer.appendChild(newInputGroup);
});

// Calculate CGPA Functionality
document.getElementById('cgpaForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const marks = Array.from(document.getElementsByName('marks[]')).map(input => parseInt(input.value));

    if (marks.some(mark => isNaN(mark))) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const cgpa = totalMarks / marks.length / 10;

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `✨ Your CGPA is: <strong>${cgpa.toFixed(2)}</strong>`;

    if (cgpa >= 9) {
        resultElement.innerHTML += `<br>🎉 Excellent! Keep up the great work!`;
    } else if (cgpa >= 7) {
        resultElement.innerHTML += `<br>👍 Good job! Aim higher next time!`;
    } else {
        resultElement.innerHTML += `<br>✨ Don't lose hope! Focus on consistent improvement!`;
    }

    resultElement.classList.remove('hidden');
});
