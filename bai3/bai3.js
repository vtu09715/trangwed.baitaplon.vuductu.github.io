const list = [1, 2, 3];

function getAllSubsets(list) {
    const subsets = [];
    for (let i = 0; i < (1 << list.length); i++) {
        const subset = [];
        for (let j = 0; j < list.length; j++) {
            if ((i & (1 << j)) !== 0) {
                subset.push(list[j]);
            }
        }
        subsets.push(subset);
    }
    return subsets;
}

const resultElement = document.getElementById("result");
const subsets = getAllSubsets(list);

resultElement.innerHTML = `
    <ul>
        ${subsets.map(subset => `<li>${subset.join(", ")}</li>`).join("")}
    </ul>
`;
