# Domain Structure in Web Programming ( Cấu trúc miền trong lập trình web )

## Introduction (Giới thiệu)

- In web programming, a domain is represented by a string of characters that signifies the address of a website or application on the Internet. A domain follows a structure from right to left, consisting of the following components:

- Trong lập trình web, một tên miền được biểu thị bằng một chuỗi ký tự đại diện cho địa chỉ của một trang web hoặc ứng dụng trên Internet. Tên miền tuân theo một cấu trúc từ phải qua trái, gồm các thành phần sau:

  ```sh
   "sd": Phụ tên miền (Subdomain)
   "dn": Tên miền (Domain Name)
   "sld": Miền cấp 2 (Second Level Domain)
   "tld": Miền cấp cao nhất (Top Level Domain)
  ```

## Example (Ví dụ)

- For example, consider the domain `blog.dev.edu.vn`:
- Ví dụ, hãy xem xét tên miền `blog.f8.edu.vn`:

  ```sh
  "vn" là Miền cấp cao nhất (Top Level Domain)
  "edu" là Miền cấp 2 (Second Level Domain)
  "dev" là Tên miền (Domain Name)
  "blog" là Phụ tên miền (Subdomain)
  ```

## Structure Explanation (Giải thích cấu trúc)

- The domain structure is read from right to left. This means the higher-level components `TLD, SLD, Domain Name` appear first, followed by the `Subdomain`.

- Cấu trúc tên miền được đọc từ phải qua trái. Điều này có nghĩa là các thành phần cấp cao nhất `TLD, SLD, Domain Name` xuất hiện trước, theo sau là `phụ tên miền (Subdomain)`.

---
