# Universal Proxy Server (Node.js) 🚀

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mamedul/proxy/blob/main/LICENSE) &nbsp;&nbsp; [![GitHub stars](https://img.shields.io/github/stars/mamedul/proxy?style=social)](https://github.com/mamedul/proxy/stargazers) &nbsp;&nbsp; [![GitHub forks](https://img.shields.io/github/forks/mamedul/proxy?style=social)](https://github.com/mamedul/proxy/network/members) &nbsp;&nbsp; [![GitHub watchers](https://img.shields.io/github/watchers/mamedul/proxy?style=social)](https://github.com/mamedul/proxy/watchers) &nbsp;&nbsp; [![GitHub followers](https://img.shields.io/github/followers/mamedul?style=social)](https://github.com/mamedul?tab=followers)

**A fast, reliable, and no-CORS Node.js proxy server** that handles **all HTTP methods** (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD) and supports both **HTTP and HTTPS** targets.

Access any URL via a simple path-based proxy — perfect for bypassing CORS restrictions, testing APIs, and integrating third-party services seamlessly.

---

## 🚩 Features

- ✅ Supports **all HTTP methods** (GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD)
- ✅ Handles both **HTTP and HTTPS** target URLs transparently
- ✅ **No CORS restrictions** — adds permissive CORS headers automatically
- ✅ Proxy requests and responses are forwarded **exactly as-is**
- ✅ Easy-to-use URL format:  
```

[https://your-proxy.com/https://target-website.com/api](https://your-proxy.com/https://target-website.com/api)

````
- ✅ Built with popular, battle-tested libraries: **Express** and **cors-anywhere**
- ✅ Lightweight and fast — minimal dependencies for maximum performance
- ✅ Fully configurable via `.env` file (e.g., port settings)
- ✅ Handles CORS preflight `OPTIONS` requests gracefully
- ✅ Ready for production deployment on any Node.js hosting platform

---

## 🔥 Why Use This Node.js Proxy Server?

- Bypass cross-origin resource sharing (CORS) limitations in browsers
- Bypass Error: ```Access to fetch at 'https://target-website.com' from origin 'https://your-website.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.```
- Bypass Error: ```The page at 'https://your-website.com' was loaded over HTTPS, 
but requested an insecure resource 'http://target-website.com'. This request has been blocked; the content must be served over HTTPS.```
- Quickly test external APIs without setting up complicated proxies
- Proxy third-party services for web or mobile applications
- Simple URL pattern for easy integration into your frontend or backend
- Open-source and MIT licensed — customize and extend as you like!

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repo or download source code:

```bash
git clone https://github.com/mamedul/proxy.git
cd proxy
````

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root to configure the port:

```env
PORT=3000
```

4. Start the server:

```bash
npm run start
```

Or, for development with automatic restarts:

```bash
npm run dev
```

5. Open your browser or API client and use the proxy:

```
http://localhost:3000/https://example.com/api/data
```

---

## 📦 Project Structure

```
.
├── proxy.js         # Main proxy server script
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables (optional)
└── README.md        # This file
```

---

## 🛠️ How It Works

* The proxy listens for incoming requests matching `/http(s)://target-url/*`.
* It extracts the target URL from the request path.
* Uses `cors-anywhere` to forward the request to the target.
* Adds permissive CORS headers to all responses.
* Handles `OPTIONS` preflight requests immediately with no content.
* Returns the proxied response back to the client exactly as received.

---

## ⚙️ Customization

* Change the port in `.env` or default to 3000.
* Add custom headers or logging by editing `proxy.js`.
* Secure with authentication or rate limiting in production.

---

## 👨‍💻 Author & Hire Me
Hi! I'm [Mamedul Islam](https://mamedul.github.io/), a passionate Web Developer who builds modern web applications, E-commerce, PWAs, and fast, static, dynamic, responsive websites. Specializing in WooCommerce, Wordpress, PHP, MySQL, and modern web development. Creating exceptional digital experiences since 2017.

#### 📬 Connect With Me:
* [📱 WhatsApp](https://wa.me/8801847406830)
* [💼 Fiverr Profile](https://www.fiverr.com/mamedul)
* [👔 LinkedIn](https://www.linkedin.com/in/mamedul/)
* [💻 GitHub](https://github.com/mamedul)
* [🐦 X (Twitter)](https://www.x.com/mamedul)

I'm open for [freelance work](https://www.fiverr.com/mamedul), Woocommerce, E-commerce, Wordpress, PWA development, speed test apps, Firebase projects, websocket, PHP, MySQL and more. [Hire me](https://wa.me/8801847406830) to bring your ideas to life with clean, modern code!

---

## 📝 License
This project is licensed under the [MIT License](https://mit-license.org/) — feel free to use, modify, and distribute it freely.
⭐ Don't forget to star this repo if you like it!
© 2025 [Mamedul Islam](https://mamedul.github.io/)

---

## Keywords

Node.js proxy server, no CORS proxy, HTTP proxy, HTTPS proxy, API proxy, cross-origin proxy, Express proxy server, cors-anywhere, bypass CORS, open source proxy, Node.js API proxy, universal proxy


---

*Made with ❤️ using Node.js and Express.*


---
## ⭐ Show Your Support

If you find this extension useful, please consider giving it a star on GitHub! Your support helps motivate further development and improvements.

[![GitHub stars](https://img.shields.io/github/stars/mamedul/proxy?style=for-the-badge)](https://github.com/mamedul/proxy/stargazers) &nbsp; If you found this project helpful, give it a ⭐ on GitHub!