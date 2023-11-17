# Các bài tập về vòng lặp `for`

---

### Đề bài: Print the numbers from 1 to n (In các số từ 1 đến n)

- **Gợi ý**: Sử dụng vòng lặp for để duyệt qua các số từ 1 đến n, và in mỗi số ra màn hình.

- [Đáp án](./exercise/print.js)

### Đề bài: Sum of numbers from 1 to n (Tổng các số từ 1 đến n)

- **Gợi ý**: Khai báo một biến `total` để lưu tổng. Sử dụng vòng lặp `for` để duyệt qua các số từ `1` đến `n`, cộng mỗi số vào biến `total`. Cuối cùng, in giá trị của `total`.

- [Đáp án](./exercise/sum.js)

### Đề bài: Print multiplication table (In bảng cửu chương)

- **Gợi ý**: Sử dụng hai vòng lặp `for` lồng nhau. Vòng lặp bên ngoài sẽ duyệt qua các số từ `1` đến `n` (dòng), và vòng lặp bên trong sẽ duyệt qua các số từ `1` đến `n` (cột) để tính và in kết quả nhân của dòng và cột tương ứng.

- [Đáp án](./exercise/multiplication.table.js)

### Đề bài: Calculate factorial (Tính giai thừa)

- **Gợi ý**: Sử dụng vòng lặp `for` để duyệt qua các số từ `1` đến `n`, nhân mỗi số vào biến `factorial` (khai báo từ đầu). Kết quả cuối cùng sẽ là giá trị của biến `factorial`.

- [Đáp án](./exercise/factorial.js)

### Đề bài: Reverse string (Đảo ngược chuỗi)

- **Gợi ý**: Duyệt chuỗi từ cuối về đầu bằng vòng lặp `for`, và cộng mỗi ký tự vào một biến kết quả (có kiểu chuỗi). Khi hoàn thành vòng lặp, biến kết quả chứa chuỗi đảo ngược.

- [Đáp án](./exercise/reverse.string.js)

### Đề bài: Checking for primes (Kiểm tra số nguyên tố)

- **Gợi ý**: Sử dụng vòng lặp `for` để duyệt qua các số từ `2` đến căn bậc hai của số cần kiểm tra. Kiểm tra xem số có chia hết cho bất kỳ số nào trong khoảng này không. Nếu không có số nào chia hết, thì đó là số nguyên tố.

- [Đáp án](./exercise/check.prime.js)

### Đề bài: Print array in reverse (In ngược mảng)

- **Gợi ý**: Duyệt qua mảng từ cuối về đầu bằng vòng lặp `for`, và cộng mỗi phần tử vào một mảng kết quả (khai báo từ đầu). Khi hoàn thành vòng lặp, mảng kết quả chứa các phần tử trong thứ tự ngược lại.

- [Đáp án](./exercise/reverse.array.js)

### Đề bài: Find the largest element in the array (Tìm phần tử lớn nhất trong mảng)

- **Gợi ý**: Khai báo một biến `max` và gán giá trị của phần tử đầu tiên trong mảng. Sử dụng vòng lặp `for` để duyệt qua các phần tử trong mảng, so sánh mỗi phần tử với giá trị của biến `max`. Nếu phần tử hiện tại lớn hơn `max`, cập nhật giá trị của `max`. Kết quả cuối cùng là giá trị lớn nhất trong mảng.

- [Đáp án](./exercise/largest.element.1.js)

### Đề bài: Check array contains even number (Kiểm tra mảng có chứa số chẵn)

- **Gợi ý**: Sử dụng vòng lặp `for` để duyệt qua từng phần tử trong mảng. Kiểm tra xem có phần tử nào là số chẵn không bằng cách kiểm tra phần dư của phần tử khi chia cho 2. Nếu tìm thấy ít nhất một phần tử chẵn, trả về `true`, ngược lại trả về `false`.

- [Đáp án](./exercise/check.even.js)

### Đề bài: Find the 2nd largest element in the array (Tìm phần tử lớn thứ 2 trong mảng)

- **Gợi ý**: Để tìm phần tử lớn thứ hai trong mảng, bạn có thể sử dụng một vòng lặp `for` để duyệt qua mảng và theo dõi hai biến: `firstMax` để lưu phần tử lớn nhất và `secondMax` để lưu phần tử lớn thứ 2. Khi tìm thấy một phần tử mới lớn hơn `firstMax`, hãy đẩy `firstMax` thành `secondMax` và cập nhật `firstMax`. Khi tìm thấy một phần tử mới lớn hơn `secondMax` nhưng nhỏ hơn `firstMax`, hãy cập nhật `secondMax`.

- [Đáp án](./exercise/largest.element.2.js)
