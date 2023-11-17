## Phương thức `indexOf()`

### Cú pháp:

```js
const index = array.indexOf(element, startIndex);
```

### Mô tả:

- Phương thức `indexOf()` dùng để tìm vị trí đầu tiên của một phần tử cụ thể trong mảng.
- Khi gọi phương thức này, nó lặp qua các phần tử từ `startIndex` đến cuối mảng và so sánh chúng với element.
- Nếu phần tử được tìm thấy, phương thức trả về chỉ số của phần tử đầu tiên trùng khớp. Nếu không tìm thấy, nó trả về -1.

- Tham số:
  - `element`: Phần tử mà bạn muốn tìm kiếm trong mảng.
  - `startIndex` (tùy chọn): Vị trí bắt đầu tìm kiếm trong mảng. Mặc định là 0.

### Ví dụ:

- Ví dụ 1:

  ```js
  const fruits = ['apple', 'banana', 'orange', 'banana'];

  const index = fruits.indexOf('banana');

  console.log(index); // Output: 1

  `Tìm vị trí đầu tiên của string 'banana' trong array 'fruits' ?
   Vì element 'banana' đầu tiên xuất hiện ở chỉ số 1 trong array nên kết quả là 1.`;
  ```

- Ví dụ 2:

  ```js
  const numbers = [5, 10, 15, 20, 25, 30];

  const index = numbers.indexOf(15, 2);

  console.log(index); // Output: 2

  `Tìm vị trí đầu tiên của number 15 trong array numbers, bắt đầu tìm kiếm từ chỉ số 2? 
   Kết quả là 2, vì number 15 xuất hiện đầu tiên ở chỉ số 2 trong array.`;
  ```

- Ví dụ 3:

  ```js
  const animals = ['cat', 'dog', 'elephant', 'lion'];

  const index = animals.indexOf('tiger');

  console.log(index); // Output: -1

  `Tìm vị trí đầu tiên của string 'tiger' trong array animals ?
   Kết quả là -1, vì không tìm thấy string 'tiger' trong mảng 'animals'.`;
  ```
