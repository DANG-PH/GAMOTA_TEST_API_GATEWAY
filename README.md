<p align="center">
  <img src="https://vcdn1-vnexpress.vnecdn.net/2025/03/20/GameMota-1742437039-1742437044.png?w=1200&h=0&q=100&dpr=1&fit=crop&s=kMyUCXVG9CE_B4dSdBIU6w" width="220" alt="">
</p>

<h2 align="center">GAMOTA INTERN TEST</h2>

<p align="center">
  Dự án test thực tập Backend tại <strong>GAMOTA / GABROS Studio</strong>,<br>
  xây dựng bằng <strong>NestJS Microservices</strong> và các công nghệ liên quan.
</p>

---

## 🚀 1. Tính năng chính

- Đăng ký tài khoản  
- Đăng nhập + xác thực 2 lớp (OTP)  
- Cấp JWT Access Token & Refresh Token  
- Update trạng thái player  
- RBAC – Role-based Access Control  

---

## 🧠 2. Công nghệ sử dụng

| Công nghệ | Mục đích |
|-----------|----------|
| NestJS | Backend core |
| gRPC | Giao tiếp giữa Microservices |
| Redis | Cache + KeyValue Store |
| RabbitMQ | Message Queue xử lý Email |
| JWT | Authentication |
| Docker | Chạy Redis & RabbitMQ |
| Swagger | API Testing |
| RBAC | Authorization |
| CORS, Helmet, Rate Limit | Security |

---

## 🏗 3. Kiến trúc hệ thống

- API_Gateway --> Auth_Service
- API_Gateway --> Player_Service
- Auth_Service --> Redis
- Auth_Service --> RabbitMQ
- RabbitMQ --> Email_Service

---

## 📦 4. Clone 4 Service

- `git clone https://github.com/DANG-PH/GAMOTA_TEST_API_GATEWAY`
- `git clone https://github.com/DANG-PH/GAMOTA_TEST_AUTH_SERVICE`
- `git clone https://github.com/DANG-PH/GAMOTA_TEST_PLAYER_SERVICE`
- `git clone https://github.com/DANG-PH/GAMOTA_TEST_EMAIL_SERVICE`

---

## 🐳 5. Chạy Redis & RabbitMQ 

### Redis
`docker run -d --name redis -p 6379:6379 redis`

### RabbitMQ 
`docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management`

### Link tải nếu không dùng Docker
| Phần mềm | Link tải |
|----------|----------|
| Redis (Windows → bản stable) | https://github.com/tporadowski/redis/releases |
| RabbitMQ (Windows) | https://www.rabbitmq.com/install-windows.html |
| Erlang (bắt buộc cho RabbitMQ) | https://www.erlang.org/downloads |


---

## ⚙ 6. Cài đặt

Vào từng project và chạy:

- `npm install`
- `cp .env.example .env`   # hoặc tự tạo file .env ở cùng cấp /src
- `npm run start:dev`

---

## 📌 7. Truy cập Swagger

`http://localhost:<PORT>/api-docs` #PORT của API GATEWAY

---

## 🧪 8. Flow Test API

| Step | API | Kết quả |
|------|-----|----------|
| Register | POST /api/auth/register | Tạo user |
| Login | POST /api/auth/login | Nhận sessionId |
| Verify OTP | POST /api/auth/verify-otp | Trả về JWT |
| Update Player | PUT /api/player/update | Update thông tin |

---


<p align="center"><b>Cảm ơn bạn đã trải nghiệm dự án!</b></p>
<p align="center">💬 Liên hệ: Phạm Hải Đăng – Email: dangph.ptit@gmail.com<i>(nếu cần)</i></p>