## Phương thức `splice()`

### Cú pháp:

```js
const removedElements = array.splice(start, deleteCount, item1, item2, ..., itemN);
```

### Mô tả:

- Phương thức `splice()` được sử dụng để thay đổi nội dung của mảng bằng cách loại bỏ, thêm hoặc thay thế phần tử.

- Tham số:

  `start`: Vị trí bắt đầu thực hiện thay đổi.

  `deleteCount`: Số lượng phần tử cần loại bỏ từ vị trí start.

  `item1, item2, ..., itemN`: Các phần tử muốn thêm vào sau khi loại bỏ.

### Ví dụ:

- Ví dụ 1:

  ```js
  const fruits = ['apple', 'banana', 'orange', 'grape'];
  const removedFruits = fruits.splice(1, 2, 'kiwi', 'melon');
  console.log(removedFruits); // Output: ['banana', 'orange']
  console.log(fruits); // Output: ['apple', 'kiwi', 'melon', 'grape']

  `Trong ví dụ trên, splice(1, 2, 'kiwi', 'melon') loại bỏ 2 phần tử (từ vị trí 1).`;
  `Và thêm 'kiwi' và 'melon' vào mảng.`;
  ```

- Ví dụ 2:

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const removed = numbers.splice(1, 2, 6, 7);
  console.log(removed); // Output: [2, 3]
  console.log(numbers); // Output: [1, 6, 7, 4, 5]

  `Trong ví dụ trên, splice(1, 2, 6, 7) loại bỏ 2 phần tử bắt đầu từ vị trí 1.`;
  `Và thêm 2 phần tử 6 và 7 vào mảng.`;
  ```
