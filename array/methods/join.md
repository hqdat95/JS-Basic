# Phương thức `join()`

### Cú pháp:

```js
const joinedString = array.join(separator);
```

### Mô tả:

- Phương thức `join()` cho phép bạn tạo chuỗi từ mảng với sự phân tách tuỳ chỉnh giữa các phần tử.

### Ví dụ:

- Kết hợp mảng thành chuỗi ngăn cách bằng dấu gạch ngang:

  ```js
  const animals = ['lion', 'tiger', 'leopard'];
  const animalString = animals.join('-');
  console.log(animalString); // Output: 'lion-tiger-leopard'
  ```

- Kết hợp mảng thành chuỗi với dấu phẩy và khoảng trắng:

  ```js
  const colors = ['red', 'green', 'blue'];
  const colorfulString = colors.join(', ');
  console.log(colorfulString); // Output: 'red, green, blue'
  ```
