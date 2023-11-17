# Phương thức reduce()

### Cú pháp:

```js
const result = array.reduce((accumulator, currentValue, index, array) => {
  // return updated accumulator value
}, initialValue);
```

### Mô tả:

- Phương thức `reduce()` được sử dụng để tích luỹ các giá trị trong mảng thành một giá trị duy nhất.

- Phương thức `reduce()` cho phép bạn tích luỹ giá trị trong mảng thành một giá trị duy nhất, áp dụng các phép tính hoặc biến đổi tùy theo mục đích của bạn.

- Khi sử dụng phương thức `reduce()`, nó lặp qua từng phần tử trong mảng và gọi một hàm callback với bốn tham số: `accumulator`, `currentValue`, `index`, và `array`.

  - `accumulator`: Giá trị tích luỹ. Hàm callback sẽ cập nhật giá trị này trong mỗi vòng lặp.
  - `currentValue`: Giá trị của phần tử hiện tại trong mảng.
  - `index`: Chỉ số của phần tử hiện tại trong mảng.
  - `array`: Mảng đang được xử lý.

- `initialValue`: Giá trị khởi đầu của `accumulator`. Nó là giá trị mà `accumulator` sẽ có trước khi bắt đầu vòng lặp.

- Hàm callback của `reduce()` trả về giá trị mới cho `accumulator`.

### Ví dụ:

- Tính tổng của các số trong mảng:

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Output: 15

  `Giải thích
  Trong ví dụ này, có một mảng numbers chứa các số từ 1 đến 5.
  Muốn tính tổng của tất cả các số trong mảng này bằng cách sử dụng phương thức reduce().
  
  accumulator: Ban đầu, giá trị của accumulator là 0 (được truyền qua tham số thứ hai của reduce()).
  currentValue: Là giá trị của phần tử hiện tại trong mảng.
                Trong mỗi vòng lặp, cộng giá trị này vào accumulator.
  
  Kết quả cuối cùng của reduce() là tổng của tất cả các số trong mảng.
  
  Vậy kết quả sẽ là 15.`;
  ```

- Tích luỹ chuỗi từ mảng các từ:

  ```js
  const words = ['Hello', ' ', 'world', '!'];
  const concatenatedString = words.reduce((accumulator, currentValue) => accumulator + currentValue, '');
  console.log(concatenatedString); // Output: 'Hello world!'

  `Giải thích
  
  Đầu tiên, khai báo một mảng words chứa các phần tử chuỗi như 'Hello', ' ', 'world', và '!'.
  
  Sau đó, sử dụng phương thức reduce() để nối các phần tử trong mảng thành một chuỗi duy nhất.
  
  Trong hàm callback của reduce(), có hai tham số: accumulator và currentValue.
  
    accumulator: Ban đầu, giá trị của accumulator là chuỗi rỗng '' (được truyền qua tham số thứ hai của reduce()).
    currentValue: Là giá trị của phần tử hiện tại trong mảng words.
  
  Trong mỗi vòng lặp, giá trị của currentValue được nối vào giá trị hiện tại của accumulator. Điều này dẫn đến việc xây dựng chuỗi kết quả.
  
  Khi mọi phần tử trong mảng words đã được xử lý qua hàm callback, phương thức reduce() trả về chuỗi đã được nối thành một chuỗi duy nhất.
  
  Cuối cùng, chuỗi kết quả 'Hello world!' được in ra bằng console.log().
  
  Ví dụ này thể hiện cách sử dụng phương thức reduce() để nối các phần tử trong mảng thành một chuỗi duy nhất bằng cách tích luỹ các giá trị trong accumulator.`;
  ```

- Tính tổng các số chẵn trong mảng:

  ```js
  const numbers = [1, 2, 3, 4, 5, 6];
  const sumEvenNumbers = numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      return accumulator + currentValue;
    }
    return accumulator;
  }, 0);
  console.log(sumEvenNumbers); // Output: 12

  `Giải thích
  Đầu tiên, khai báo một mảng numbers chứa các số từ 1 đến 6.
  
  sử dụng phương thức reduce() để tính tổng các số chẵn trong mảng.
  
  Trong hàm callback của reduce(), có hai tham số: accumulator và currentValue.
  
    accumulator: Ban đầu, giá trị của accumulator là 0 (được truyền qua tham số thứ hai của reduce()).
    currentValue: Là giá trị của phần tử hiện tại trong mảng numbers.
  
  Trong mỗi vòng lặp, kiểm tra xem currentValue có phải là số chẵn không (kiểm tra bằng cách % 2 === 0).
  
  Nếu currentValue là số chẵn, cộng nó vào giá trị của accumulator.
  
  Kết quả cuối cùng của reduce() là tổng của các số chẵn trong mảng.
  
  Cuối cùng, tổng các số chẵn, trong trường hợp này là 2 + 4 + 6 = 12, được in ra bằng console.log().
  
  Ví dụ này minh họa cách sử dụng phương thức reduce() để tính tổng các số chẵn trong mảng bằng cách tích luỹ các giá trị trong accumulator.`;
  ```
