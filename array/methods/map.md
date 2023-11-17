## Phương thức `map()`

### Cú pháp:

```js
const newArray = array.map((currentValue, index, array) => {
  // return new value
});
```

### Mô tả:

- Phương thức `map()` là một cách mạnh mẽ để tạo một mảng mới từ mảng ban đầu bằng cách áp dụng một hàm callback lên từng phần tử của mảng.

- Phương thức `map()` cho phép bạn thực hiện biến đổi từng phần tử của mảng thành một giá trị mới.

- Khi bạn sử dụng phương thức `map()`, nó sẽ lặp qua từng phần tử trong mảng gốc và gọi một hàm callback với ba tham số: `currentValue`, `index`, và `array`.

  - `currentValue`: Giá trị của phần tử hiện tại trong mảng. Hàm callback sẽ áp dụng biến đổi lên giá trị này.

  - `index`: Chỉ số của phần tử hiện tại trong mảng. Thường được sử dụng để theo dõi vị trí của phần tử.

  - `array`: Mảng đang được xử lý.

### Ví dụ:

- Tạo mảng mới với giá trị bình phương của các phần tử:

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = numbers.map((num, index, array) => {
    console.log(`currentValue: ${num}`); // currentValue: 1, currentValue: 2, ..., currentValue: 5
    console.log(`index: ${index}`); // index: 0, index: 1, ..., index: 4
    console.log(`array: [${array}]`); // array: [1,2,3,4,5], array: [1,2,3,4,5], ..., array: [1,2,3,4,5]
    return num * num;
  });
  console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
  ```

- Chuyển đổi mảng chứa tên thành mảng chứa chuỗi in hoa:

  ```js
  const names = ['Alice', 'Bob', 'Charlie'];
  const uppercaseNames = names.map((name, index, array) => {
    console.log(`currentValue: ${name}`); // currentValue: Alice, currentValue: Bob, currentValue: Charlie
    console.log(`index: ${index}`); // index: 0, index: 1, index: 2
    console.log(`array: [${array}]`); // array: [Alice,Bob,Charlie], array: [Alice,Bob,Charlie], array: [Alice,Bob,Charlie]
    return name.toUpperCase();
  });
  console.log(uppercaseNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

  * Cách viết ngắn gọn hơn trong hàm uppercaseNames :
  const uppercaseNames = names.map((name) => name.toUpperCase());
  ```
