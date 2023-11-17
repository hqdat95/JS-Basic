## Phương thức `concat()`

### Cú pháp:

```js
const newArray = array.concat(item1, item2, ..., itemN);
```

### Mô tả:

- Phương thức `concat()` được sử dụng để tạo một mảng mới bằng cách kết hợp các mảng hoặc phần tử đã cho.

- Tham số:

  item1, item2, ..., itemN: Các mảng hoặc phần tử muốn kết hợp vào mảng mới.

### Ví dụ:

- Kết hợp các mảng:

  ```js
  const fruits = ['apple', 'banana'];
  const moreFruits = ['orange', 'grape'];
  const allFruits = fruits.concat(moreFruits);
  console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']
  ```

- Kết hợp mảng với phần tử:

  ```js
  const initialArray = [1, 2];
  const newArray = initialArray.concat(3, 4, 5);
  console.log(newArray); // Output: [1, 2, 3, 4, 5]
  ```

### Cách gộp mảng khác :

- Kết hợp mảng sử dụng phương thức `...`:

  ```js
  const initialArray = [1, 2];
  const additionalItems = [3, 4, 5];
  const newArray = [...initialArray, ...additionalItems];
  console.log(newArray); // Output: [1, 2, 3, 4, 5]
  ```

- Trong ví dụ này, ta sử dụng phương thức `...` (spread operator) để kết hợp hai mảng initialArray và additionalItems thành một mảng mới.
