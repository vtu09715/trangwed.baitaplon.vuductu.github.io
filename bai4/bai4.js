const tableCost = document.getElementById('table-cost');

// Tạo ma trận chi phí
const costMatrix = [
    [0, 10, 20, 30],
    [10, 0, 40, 50],
    [20, 40, 0, 60],
    [30, 50, 60, 0],
];

// Tìm hành trình tối ưu bằng thuật toán Brute-force
function findOptimalTour(costMatrix) {
    const n = costMatrix.length;
    let minTourCost = Infinity;
    let minTour = [];

    // Liệt kê tất cả các cách đi
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                for (let k = 0; k < n; k++) {
                    if (k !== i && k !== j) {
                        for (let l = 0; l < n; l++) {
                            if (l !== i && l !== j && l !== k) {
                                // Tính tổng chi phí
                                const tourCost =
                                    costMatrix[i][j] +
                                    costMatrix[j][k] +
                                    costMatrix[k][l] +
                                    costMatrix[l][i];

                                // Cập nhật hành trình tối ưu
                                if (tourCost < minTourCost) {
                                    minTourCost = tourCost;
                                    minTour = [i, j, k, l, i];
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return minTour;
}

// Hiển thị hành trình tối ưu
const optimalTour = findOptimalTour(costMatrix);
const optimalTourText = optimalTour
    .map((city) => String.fromCharCode(city + 65))
    .join(' - ');
document.querySelector('p.optimal-tour').textContent = optimalTourText;

// Hiển thị tổng chi phí
document.querySelector('p.total-cost').textContent = minTourCost;

