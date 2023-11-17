# Phương thức `sort()`

### Cú pháp:

```js
array.sort(compareFunction);
```

### Mô tả:

- Phương thức `sort()` được sử dụng để sắp xếp các phần tử trong mảng dựa trên một hàm so sánh (hoặc mặc định là theo thứ tự Unicode). Nó thay đổi mảng gốc và trả về mảng đã sắp xếp.

- Tham số:

  - `compareFunction` (tùy chọn): Một hàm so sánh tùy chọn mà xác định cách sắp xếp các phần tử trong mảng. Hàm này nhận vào hai phần tử và trả về giá trị dương, âm hoặc 0 tương ứng với sự so sánh giữa chúng.

### Ví dụ:

- Ví dụ 1:

  ```js
  const numbers = [4, 2, 8, 1, 5];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // Output: [1, 2, 4, 5, 8]

  `Array 'numbers' được sắp xếp theo thứ tự tăng dần bằng cách truyền hàm so sánh vào phương thức 'sort()'.`;
  ```

- Ví dụ 2:

  ```js
  const fruits = ['apple', 'banana', 'pear', 'orange'];
  fruits.sort(); // Sắp xếp theo thứ tự Unicode mặc định
  console.log(fruits); // Output: ['apple', 'banana', 'orange', 'pear']

  `Array 'fruits' được sắp xếp theo thứ tự Unicode mặc định.`;
  ```

- Ví dụ 3:

  ```js
  const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
  ];

  products.sort((a, b) => a.price - b.price);
  console.log(products);
  /* Output:
  [
    { name: 'Tablet', price: 300 },
    { name: 'Phone', price: 500 },
    { name: 'Laptop', price: 1000 }
  ]
  */

  `Array 'products' chứa các đối tượng sản phẩm được sắp xếp theo giá tăng dần bằng cách,
   => truyền hàm so sánh vào phương thức 'sort()'.`;
  ```
