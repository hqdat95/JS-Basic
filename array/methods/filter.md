# Phương thức filter()

### Cú pháp:

```js
const newArray = array.filter((currentValue, index, array) => {
  // return true if you want to keep the element
});
```

### Mô tả:

- **Phương thức `filter()`** là một công cụ mạnh mẽ cho phép bạn tạo một mảng mới từ mảng ban đầu bằng cách lựa chọn các phần tử thỏa mãn một điều kiện cụ thể. Khi bạn sử dụng phương thức `filter()`, nó lặp qua từng phần tử trong mảng gốc và gọi một hàm callback cho mỗi phần tử. Hàm callback này được thực thi với ba tham số: `currentValue`, `index`, và `array`.

  - `currentValue`: Giá trị của phần tử hiện tại trong mảng. Hàm callback sẽ kiểm tra điều kiện cho giá trị này.

  - `index`: Chỉ số của phần tử hiện tại trong mảng. Thường được sử dụng để theo dõi vị trí của phần tử trong mảng.

  - `array`: Mảng đang được xử lý. Thường không cần thiết, nhưng có thể hữu ích trong một số trường hợp.

- Hàm callback của `filter()` trả về `true` nếu bạn muốn giữ lại phần tử trong mảng mới và `false` nếu bạn muốn loại bỏ phần tử.

### Ví dụ:

- Lọc ra các phần tử chứa ký tự `a`:

```js
const words = ['apple', 'banana', 'orange', 'grape'];
const wordsWithA = words.filter((word) => word.includes('a'));
console.log(wordsWithA); // Output: ['apple', 'banana', 'grape']

`Trong ví dụ này:

  currentValue: Là giá trị hiện tại trong mảng words, ví dụ: 'apple', 'banana',...
  index: Chỉ số của giá trị hiện tại, ví dụ: 0, 1,...
  array: Mảng đang được xử lý, tức là words.

  Hàm callback kiểm tra xem từng word có chứa ký tự 'a' hay không ?
  -> Nếu có, thì trả về true, và nó được bao gồm trong mảng wordsWithA. 
  -> Nếu không, trả về false, và word sẽ bị loại bỏ.

  Kết quả là wordsWithA chỉ chứa các từ trong mảng words có chứa ký tự 'a'. 
  Nên đầu ra là ['apple', 'banana', 'grape'].`;
```

- Lọc ra các số nguyên lẻ:

```js
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter((num) => num % 2 !== 0);
console.log(oddNumbers); // Output: [1, 3, 5]

`Trong ví dụ này:
  currentValue: Là giá trị hiện tại trong mảng numbers, ví dụ: 1, 2, 3,...
  index: Chỉ số của giá trị hiện tại, ví dụ: 0, 1, 2,...
  array: Mảng đang được xử lý, tức là numbers.
  Hàm callback trả về true nếu num % 2 !== 0, tức là số lẻ, và false nếu không phải số lẻ.`;
```
