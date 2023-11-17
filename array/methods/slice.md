## Phương thức `slice()`

### Cú pháp:

```javascript
const newArray = array.slice(start, end);
```

### Mô tả:

- Phương thức `slice()` được sử dụng để tạo một mảng mới chứa các phần tử từ vị trí start đến vị trí end (không bao gồm).

- Tham số:

  `start`: Vị trí bắt đầu sao chép.

  `end`: Vị trí kết thúc sao chép (không bao gồm).

### Ví dụ:

- Sao chép mảng từ vị trí bắt đầu:

  ```javascript
  const numbers = [1, 2, 3, 4, 5];
  const slicedNumbers = numbers.slice(2);
  console.log(slicedNumbers); // Output: [3, 4, 5]
  ```

- Sao chép mảng từ vị trí bắt đầu đến vị trí kết thúc:

  ```javascript
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const slicedFruits = fruits.slice(1, 3);
  console.log(slicedFruits); // Output: ['banana', 'orange']
  ```

- Sao chép mảng ban đầu để tạo mảng mới:

  ```javascript
  const originalArray = [1, 2, 3, 4, 5];
  const newArray = originalArray.slice();
  console.log(newArray); // Output: [1, 2, 3, 4, 5]
  ```
