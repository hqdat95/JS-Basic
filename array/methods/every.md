# Phương thức `every()`

### Cú pháp:

```js
const allMatch = array.every(callback);
```

### Mô tả:

- Phương thức `every()` là một công cụ quan trọng trong JavaScript để kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện cụ thể, được xác định bởi hàm callback, hay không. Phương thức này lặp qua từng phần tử trong mảng và thực thi hàm callback. Nếu tất cả các phần tử thỏa mãn điều kiện, thì phương thức `every()` trả về `true`, ngược lại trả về `false`.

- Tham số:
  - `callback`: Một hàm chứa mã để kiểm tra điều kiện cho từng phần tử. Hàm callback được gọi với ba tham số:
  - `currentValue`: Giá trị của phần tử đang được xem xét.
  - `index`: Chỉ số của phần tử hiện tại trong mảng.
  - `array`: Mảng mà phương thức `every()` được gọi.

### Ví dụ:

- Ví dụ 1:

  ```js
  const ages = [25, 30, 22, 28];
  const allAdults = ages.every((age) => age >= 18);
  console.log(allAdults); // Output: true

  `Kiểm tra xem tất cả các tuổi trong mảng 'ages' có lớn hơn hoặc bằng 18 hay không?
   Vì tất cả các tuổi đều thỏa mãn điều kiện, phương thức trả về true`;
  ```

- Ví dụ 2:

  ```js
  const numbers = [5, 10, 15, 20];
  const allPositive = numbers.every((num) => num > 0);
  console.log(allPositive); // Output: true

  `Kiểm tra xem tất cả các số trong mảng 'numbers' có lớn hơn 0 hay không?
   Vì tất cả các số thỏa mãn điều kiện, phương thức trả về true`;
  ```

- Ví dụ 3:

  ```js
  const marks = [85, 92, 78, 65];
  const allPassed = marks.every((mark) => mark >= 70);
  console.log(allPassed); // Output: false

  `Kiểm tra xem tất cả các điểm số trong mảng 'marks' có lớn hơn hoặc bằng 70 hay không?
   Vì có số điểm '65' không đạt điều kiện, phương thức trả về false`;
  ```
