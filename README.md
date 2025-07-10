# generator-node-project

Yeoman generator สำหรับสร้าง **Node.js Project** โครงสร้างมาตรฐาน (TypeScript, TypeORM, Express, Swagger และ Docker) ให้พร้อมพัฒนาต่อทันที

---

## 🔗 Clone และติดตั้ง

1. **Clone Repository**

   ```bash
   git clone https://github.com/AmnadTaowsoam/generator-node-project.git
   cd generator-node-project
   ```

2. **ติดตั้ง Dependencies ของ Generator**

   ```bash
   npm install           # หรือ yarn install
   ```

3. **ลงทะเบียน Generator (สำหรับใช้งาน)**

   * แบบ develop (แก้โค้ดอยู่ในเครื่อง):

     ```bash
     npm link
     ```
   * แบบติดตั้งจาก Git URL (global):

     ```bash
     npm install -g git+https://github.com/AmnadTaowsoam/generator-node-project.git
     ```

4. **ยืนยันการติดตั้ง**

   ```bash
   yo --version         # ควรเห็นเวอร์ชัน Yeoman
   yo node-project --help  # แสดงคำอธิบาย generator
   ```

---

## 🚀 สร้างโปรเจกต์ใหม่

1. **ไปยังโฟลเดอร์เปล่า** (ไม่ใช่โฟลเดอร์ generator)

   ```bash
   mkdir my-node-app
   cd my-node-app
   ```

2. **รัน Generator**

   ```bash
   yo node-project
   ```

3. **ตอบ Prompt ตามที่ระบบถาม**

   * *Project name* → ชื่อโฟลเดอร์และโปรเจกต์ (e.g. `economic-service`)
   * *Port to run on* → พอร์ตสำหรับรัน
   * (สามารถเพิ่ม prompt อื่นได้ตามการ config)

4. **ตรวจสอบผลลัพธ์**

   * โครงสร้างโฟลเดอร์ `db/`, `src/`, สคริปต์ Docker, `.env.example` ฯลฯ พร้อมไฟล์ **stub** รอพัฒนา

---

## 🛠️ เริ่มพัฒนาโปรเจกต์

ภายในโฟลเดอร์โปรเจกต์ใหม่ (`my-node-app`):

1. **ติดตั้ง dependency (หากยังไม่ได้ติดตั้ง)**

   ```bash
   npm install        # หรือ yarn install
   ```

2. **รันโหมดพัฒนา**

   ```bash
   npm run dev        # เรียก ts-node-dev หรือคำสั่งที่กำหนดไว้ใน package.json
   ```

3. **เข้าถึง API**

   * **Health check**: `GET /health`
   * **Swagger UI**: `http://localhost:<port>/api-docs`
   * **Endpoint หลัก**: `http://localhost:<port>/api/economic-data`

4. **รันใน Docker (ถ้ามี)**

   ```bash
   docker build -t my-node-app .
   docker run -p <port>:<port> my-node-app
   ```

---

## 🔄 การทดสอบ Generator

ในโฟลเดอร์ `generator-node-project` รัน:

```bash
npm test
```

* ใช้ `yeoman-test` & `yeoman-assert` ตรวจว่า generator สร้างไฟล์ตาม spec

---

## 📦 Versioning & Changelog

* ใช้ **Semantic Versioning**
* ก่อนปล่อยเวอร์ชันใหม่ ให้ปรับ `CHANGELOG.md` ตาม [Keep a Changelog](https://keepachangelog.com/)
* รัน:

  ```bash
  npm version patch   # หรือ minor/major
  git push --follow-tags
  ```

---

## 🤝 Contributing

1. Fork repository
2. สร้าง branch ใหม่ (`git checkout -b feature/YourFeature`)
3. พัฒนา code + เพิ่ม unit tests
4. รัน `npm test` ให้ผ่าน
5. สร้าง PR และรอ review

---

## 📄 License

MIT © AmnadTaowsoam
