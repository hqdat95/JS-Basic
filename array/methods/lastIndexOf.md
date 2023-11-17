# Phương thức lastIndexOf()

### Cú pháp:

```js
const lastIndex = array.lastIndexOf(element, startIndex);
```

### Mô tả:

- Phương thức `lastIndexOf()` dùng để tìm vị trí cuối cùng của một element cụ thể trong array.
- Tương tự như `indexOf()`, khi gọi method này, nó lặp qua các element từ vị trí `startIndex` đến đầu array và so sánh chúng với element.
- Nếu element được tìm thấy, method trả về chỉ số của element cuối cùng trùng khớp.
- Nếu không tìm thấy, nó trả về -1.

- Tham số:
  - `element`: element muốn tìm kiếm trong array.
  - `startIndex` (tùy chọn): Vị trí bắt đầu tìm kiếm trong array. Mặc định là length của array.

### Ví dụ:

- Ví dụ 1:

  ```js
  const fruits = ['apple', 'banana', 'orange', 'banana'];

  const index = fruits.lastIndexOf('banana');

  console.log(index); // Output: 3

  `Tìm vị trí cuối cùng của string 'banana' trong array 'fruits' ?
   Kết quả là 3, vì element 'banana' cuối cùng xuất hiện ở chỉ số 3 trong array 'fruits'.`;
  ```

- Ví dụ 2:

  ```js
  const numbers = [5, 10, 15, 20, 15, 30];

  const lastIndex = numbers.lastIndexOf(15);

  console.log(lastIndex); // Output: 4

  `Tìm vị trí cuối cùng của number '15' trong array 'numbers'.
   Kết quả là 4, vì number '15' cuối cùng xuất hiện ở chỉ số 4 trong array 'numbers'.`;
  ```

- Ví dụ 3:

  ```js
  const animals = ['cat', 'dog', 'elephant', 'lion'];

  const lastIndex = animals.lastIndexOf('tiger');

  console.log(lastIndex); // Output: -1

  `Tìm vị trí cuối cùng của string 'tiger' trong array 'animals' ?
   Kết quả là -1, vì không tìm thấy string 'tiger' trong array 'animals'.`;
  ```
