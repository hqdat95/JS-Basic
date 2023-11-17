# Phương thức `forEach()`

### Cú pháp:

```js
array.forEach(callback(currentValue, index, array));
```

### Mô tả:

- Phương thức `forEach()` được sử dụng để lặp qua từng phần tử trong mảng và thực thi một hàm callback cho mỗi phần tử. Điều này cho phép bạn thực hiện các hành động cụ thể trên mỗi phần tử mà không cần tạo ra mảng mới.

- Phương thức `forEach()` không trả về giá trị nào và chỉ sử dụng để thực hiện tác vụ với từng phần tử.

- Tham số:
  - `callback`: Một hàm chứa mã để thực thi cho mỗi phần tử trong mảng. Hàm callback nhận ba tham số:
  - `currentValue`: Giá trị của phần tử đang được xem xét.
  - `index`: Chỉ số của phần tử hiện tại trong mảng.
  - `array`: Mảng mà phương thức `forEach()` được gọi.

### Ví dụ:

- Ví dụ 1:

  ```js
  const numbers = [1, 2, 3, 4, 5];

  numbers.forEach((number, index) => {
    console.log(`Element at index ${index} is: ${number}`);
  });
  // Output:
  // Element at index 0 is: 1
  // Element at index 1 is: 2
  // Element at index 2 is: 3
  // Element at index 3 is: 4
  // Element at index 4 is: 5

  `Trong ví dụ này, mỗi phần tử trong mảng numbers được lặp qua và thông tin về mỗi phần tử cùng với chỉ số tương ứng được in ra.`;
  ```

- Ví dụ 2:

  ```js
  const fruits = ['apple', 'banana', 'orange'];

  fruits.forEach((fruit) => {
    console.log(`I love ${fruit}s`);
  });
  // Output:
  // I love apples
  // I love bananas
  // I love oranges

  `Trong ví dụ này, mảng fruits được lặp qua và câu thông điệp "I love [fruit]s" được in ra với mỗi giá trị của fruit.`;
  ```

- Ví dụ 3:

  ```js
  const prices = [10, 20, 30, 40];

  let totalPrice = 0;

  prices.forEach((price) => {
    totalPrice += price;
  });

  console.log(`Total price: ${totalPrice}`); // Output: Total price: 100

  `Trong ví dụ này, mảng prices được lặp qua và giá trị của từng phần tử được cộng vào totalPrice, sau đó totalPrice được in ra.`;
  ```
