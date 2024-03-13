// Hàm tìm 4 số tự nhiên liên tiếp và có tổng là n
function findConsecutiveNumbers(n) {
    // Biến để lưu trữ kết quả
    let result = [];

    // Duyệt qua tất cả các số từ 1 đến n - 3
    for (let i = 1; i <= n - 3; i++) {
        // Kiểm tra xem tổng của 4 số liên tiếp từ i có bằng n hay không
        if (i + (i + 1) + (i + 2) + (i + 3) === n) {
            // Thêm 4 số liên tiếp vào kết quả
            result.push(i, i + 1, i + 2, i + 3);
        }
    }

    // Trả về kết quả
    return result;
}

// Lấy element HTML để hiển thị kết quả
const resultElement = document.getElementById("result");

// Gọi hàm tìm 4 số tự nhiên liên tiếp và có tổng là 20
const result = findConsecutiveNumbers(20);

// Hiển thị kết quả
if (result.length === 0) {
    resultElement.textContent = "Không có dãy số nào thỏa mãn";
} else {
    resultElement.textContent = `Dãy số thỏa mãn: ${result.join(", ")}`;
}
