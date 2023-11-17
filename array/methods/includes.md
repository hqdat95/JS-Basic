## Phương thức includes()

### Cú pháp:

```js
const isIncluded = array.includes(value);
```

### Mô tả:

- Phương thức `includes()` được sử dụng để kiểm tra xem một giá trị có tồn tại trong mảng hay không.

- Tham số:

  value: Giá trị cần kiểm tra.

### Ví dụ:

- Kiểm tra sự tồn tại của số nguyên trong mảng:

  ```js
  const numbers = [1, 3, 5, 7, 9];
  const checkNumber = 5;
  const includesNumber = numbers.includes(checkNumber);
  console.log(includesNumber); // Output: true
  ```

- Kiểm tra sự tồn tại của chuỗi trong mảng:

  ```js
  const words = ['apple', 'banana', 'orange'];
  const checkWord = 'grape';
  const includesWord = words.includes(checkWord);
  console.log(includesWord); // Output: false
  ```
