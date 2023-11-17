# Phương thức `reverse()`

### Cú pháp:

```js
array.reverse();
```

### Mô tả:

- Phương thức `reverse()` là một công cụ mạnh mẽ trong JavaScript được sử dụng để đảo ngược thứ tự các phần tử trong mảng. Khi gọi phương thức này, thứ tự của các phần tử trong mảng sẽ bị đảo ngược, tức là phần tử cuối cùng sẽ trở thành phần tử đầu tiên và ngược lại. Mảng gốc sẽ bị thay đổi và phương thức không trả về giá trị nào.

### Ví dụ:

- Ví dụ 1:

  ```js
  const letters = ['a', 'b', 'c', 'd'];

  letters.reverse();

  console.log(letters); // Output: ['d', 'c', 'b', 'a']

  `Array 'letters' đã được đảo ngược thứ tự.`;
  ```

- Ví dụ 2:

  ```js
  const numbers = [1, 2, 3, 4, 5];

  numbers.reverse();

  console.log(numbers); // Output: [5, 4, 3, 2, 1]

  `Array 'numbers' đã bị đảo ngược thứ tự của các phần tử.`;
  ```
