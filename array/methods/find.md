## Phương thức `find()`

### Cú pháp:

```js
const foundElement = array.find(callback(currentValue, index, array));
```

### Mô tả:

- Phương thức `find()` được sử dụng để tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện được chỉ định bởi hàm callback. Hàm callback nhận vào ba tham số:

  - `currentValue`: Giá trị của phần tử đang được xem xét trong mảng.
  - `index`: Chỉ số của phần tử hiện tại trong mảng.
  - `array`: Mảng mà phương thức find() được gọi.

### Ví dụ:

- Ví dụ 1:

  ```js
  const numbers = [10, 20, 30, 40, 50];
  const foundNumber = numbers.find((num, index) => {
    return num > 25 && index % 2 === 0;
  });
  console.log(foundNumber); // Output: 30

  `Trong ví dụ trên, hàm callback kiểm tra xem số đó lớn hơn 25 và có chỉ số chẵn không. Phần tử đầu tiên thỏa mãn điều kiện này là 30.`;
  ```

- Ví dụ 2:

  ```js
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 },
  ];

  const expensiveProduct = products.find((product) => product.price > 600);
  console.log(expensiveProduct); // Output: { id: 1, name: 'Laptop', price: 1000 }

  `Trong ví dụ này, phương thức find() tìm sản phẩm đầu tiên có giá lớn hơn 600 trong mảng products.`;
  ```

- Ví dụ 3:

  ```js
  const names = ['Alice', 'Bob', 'Charlie'];
  const nameStartingWithB = names.find((name) => name.startsWith('B'));
  console.log(nameStartingWithB); // Output: 'Bob'

  `Trong ví dụ này, phương thức find() tìm và trả về tên đầu tiên trong mảng names bắt đầu bằng ký tự 'B'.`;
  ```
