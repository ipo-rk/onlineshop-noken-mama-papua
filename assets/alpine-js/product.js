function cartHandler() {
  return {
    activePage: 'dashboard',

// Login
loginEmail: '',
loginPassword: '',
isPasswordVisible: false,

login() {
  const storedEmail = localStorage.getItem('adminEmail') || 'rizaldoricky@gmail.com';
  const storedPassword = localStorage.getItem('adminPassword') || 'jayapura11';

  if (this.loginEmail === storedEmail && this.loginPassword === storedPassword) {
    Swal.fire({
      title: 'Login Berhasil!',
      text: 'Selamat datang di dashboard.',
      icon: 'success',
      confirmButtonText: 'Lanjut'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem('isLoggedIn', 'true'); // ✅ Simpan status login
        window.location.href = 'dashboard.html';
      }
    });
  } else {
    Swal.fire({
      title: 'Login Gagal!',
      text: 'Email atau password salah.',
      icon: 'error',
      confirmButtonText: 'Coba Lagi'
    });
  }
},


    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
    setAdminCredentials(email, password) {
      localStorage.setItem('adminEmail', email);
      localStorage.setItem('adminPassword', password);
    },

    // Data Produk ...
    products: [ 
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-kulit-kayu/10.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Kecil 2', price: 180000, diskon:  350000, image: 'assets/img/rajutan-kulit-kayu/16.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-kulit-kayu/11.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar', price: 250000, diskon: 400000, image: 'assets/img/rajutan-kulit-kayu/1.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 300000, diskon:  450000, image: 'assets/img/rajutan-kulit-kayu/4.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 1', price: 350000, diskon:  500000, image: 'assets/img/rajutan-kulit-kayu/12.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 2', price: 400000, diskon:  550000, image: 'assets/img/rajutan-kulit-kayu/13.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rotan 3', price: 400000, diskon:  550000, image: 'assets/img/rajutan-kulit-kayu/14.png' , descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false, qty: 1 }
    ],
    products2: [
      { name: 'Noken Kecil', price: 150000, diskon:  300000, image: 'assets/img/rajutan-benang/3.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar 1', price: 250000, diskon: 40000, image: 'assets/img/rajutan-benang/5.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Besar 2', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/6.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-benang/7.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Motiv PNG 1', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/8.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Motiv PNG 2', price: 250000, diskon: 350000, image: 'assets/img/rajutan-benang/9.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/17.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/18.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/19.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Rajutan', price: 200000, diskon:  350000, image: 'assets/img/rajutan-benang/22.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 },
      { name: 'Noken Anyaman', price: 180000, diskon:  350000, image: 'assets/img/rajutan-benang/23.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false, qty: 1 }
    ],
    products3: [ 
      { name: 'Anting anting Bia', price: 150000, diskon:  350000, image: 'assets/img/aksesoris/2.png', descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 },
      { name: 'Koteka Coklat', price: 250000, diskon:  350000, image: 'assets/img/aksesoris/20.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 },
      { name: 'Koteka Hitam', price: 200000, diskon:  350000, image: 'assets/img/aksesoris/21.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false, qty: 1 }

     ],

          events:[
      { name: 'Noken Kecil', price: 150000, diskon: 300000, image: 'assets/img/rajutan-kulit-kayu/10.png', descriptions:'Rajutan Kulit Kayu', category:'filter-staters', liked: false, inCart: false },
      { name: 'Noken Besar 2', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/6.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Rajutan', price: 200000, diskon: 350000, image: 'assets/img/rajutan-benang/22.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Noken Anyaman', price: 180000, diskon: 350000, image: 'assets/img/rajutan-benang/23.png' , descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },
      { name: 'Koteka Hitam', price: 200000, diskon: 350000, image: 'assets/img/aksesoris/21.png' , descriptions:'Aksesoris', category:'filter-specialty', liked: false, inCart: false },
      { name: 'Noken Motiv PNG 1', price: 150000, diskon: 300000, image: 'assets/img/rajutan-benang/8.png', descriptions:'Rajutan Benang', category:'filter-salads', liked: false, inCart: false },

     ],

    // Cart & Checkout ...
    cart: [],
    showSidebar: false,
    showForm: false,
    customerData: { name: '', address: '', phone: '' },

    get totalItems() {
      return this.cart.reduce((sum, item) => sum + item.qty, 0);
    },
    get totalPrice() {
      return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    },
    searchQuery: '',

    get allProducts() {
      // Gabungkan semua produk dari localStorage agar konsisten di dashboard & main site
      const getArr = (key, fallback) => {
        try {
          const arr = JSON.parse(localStorage.getItem(key));
          return Array.isArray(arr) ? arr : fallback;
        } catch {
          return fallback;
        }
      };
      // Recovery: jika data filter-staters hilang dari localStorage, reset ke default
      let p1 = getArr('products', this.products);
      if (!p1.some(p => p.category === 'filter-staters')) {
        localStorage.setItem('products', JSON.stringify(this.products));
        p1 = [...this.products];
      }
      const normalize = (arr, sourceName) => arr.map((p, i) => ({
        ...p,
        price: isNaN(Number(p.price)) ? 0 : Number(p.price),
        diskon: isNaN(Number(p.diskon)) ? 0 : Number(p.diskon),
        sourceArray: sourceName,
        realIndex: i
      }));
      const p2 = normalize(getArr('products2', this.products2), 'products2');
      const p3 = normalize(getArr('products3', this.products3), 'products3');
      return [...normalize(p1, 'products'), ...p2, ...p3];
    },
    get filteredProducts() {
      const query = this.searchQuery.toLowerCase();
      const all = this.allProducts;
      return all.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.descriptions.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    },
    addToCart(product) {
      // Cek login user
      if (localStorage.getItem('isUserLoggedIn') !== 'true') {
        // Simpan produk yang ingin di-add ke pendingAddToCart
        localStorage.setItem('pendingAddToCart', JSON.stringify(product));
        window.location.href = 'loginUser.html';
        return;
      }
      const found = this.cart.find(p => p.name === product.name);
      if (found) {
        found.qty++;
      } else {
        this.cart.push({ ...product, qty: 1, inCart: true });
        this.setInCartStatus(product.name, true);
        // Update inCart di allProducts jika ada
        if (this.allProducts && Array.isArray(this.allProducts)) {
          const prod = this.allProducts.find(p => p.name === product.name);
          if (prod) prod.inCart = true;
          // Set timeout untuk reset ikon centang ke cart setelah 2 detik
          setTimeout(() => {
            prod.inCart = false;
            this.setInCartStatus(product.name, false);
            this.saveToLocalStorage();
          }, 2000);
        }
      }
      this.saveToLocalStorage();
    },
    increaseQty(product) { 
      product.qty++; 
      this.setInCartStatus(product.name, true);
      if (this.allProducts && Array.isArray(this.allProducts)) {
        const prod = this.allProducts.find(p => p.name === product.name);
        if (prod) prod.inCart = true;
      }
      this.saveToLocalStorage(); 
    },
    decreaseQty(product) {
      if (product.qty > 1) {
        product.qty--;
      } else {
        this.cart = this.cart.filter(item => item.name !== product.name);
        this.setInCartStatus(product.name, false);
        if (this.allProducts && Array.isArray(this.allProducts)) {
          const prod = this.allProducts.find(p => p.name === product.name);
          if (prod) prod.inCart = false;
        }
      }
      this.saveToLocalStorage();
    },

    // Tambahkan fungsi untuk set status inCart pada produk sumber
    setInCartStatus(name, status) {
      const all = [this.products, this.products2, this.products3];
      all.forEach(arr => {
        const prod = arr.find(p => p.name === name);
        if (prod) prod.inCart = status;
      });
    },

    checkout() {
      // Validasi cart tidak kosong
      if (this.cart.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'Keranjang kosong!',
          text: 'Silakan tambahkan produk ke keranjang sebelum checkout.',
        });
        return;
      }
      // Tampilkan form data diri
      this.showForm = true;
    },

    submitOrder() {
      // Validasi data customer
      if (!this.customerData.name || !this.customerData.address || !this.customerData.phone) {
        Swal.fire({
          icon: 'warning',
          title: 'Data belum lengkap!',
          text: 'Mohon lengkapi data diri Anda sebelum checkout.',
        });
        return;
      }

      // Validasi nomor HP
      const phone = String(this.customerData.phone);
      if (phone.length < 9 || phone.length > 13 || phone.startsWith('0')) {
        Swal.fire({
          icon: 'warning',
          title: 'Nomor HP tidak valid!',
          text: 'Nomor HP harus tanpa angka 0 di depan dan hanya angka setelah +62. Contoh: 81234567890',
        });
        return;
      }

      const formattedPhone = phone.startsWith('+62') ? phone : `+62${phone}`;
      const newTransaction = {
        id: Date.now(),
        customer: {
          name: this.customerData.name,
          address: this.customerData.address,
          phone: formattedPhone,
          email: localStorage.getItem('userEmail') || '-'
        },
        items: this.cart.map(item => ({
          name: item.name,
          price: item.price,
          qty: item.qty,
          subtotal: item.price * item.qty
        })),
        totalItems: this.totalItems,
        totalPrice: this.totalPrice,
        date: new Date().toISOString()
      };

      // Simpan transaksi ke localStorage
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      transactions.push(newTransaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));

      // Tampilkan resi pesanan
      let itemsHtml = newTransaction.items.map(item =>
        `<tr><td>${item.name}</td><td>${item.qty}</td><td>Rp ${item.price.toLocaleString('id-ID')}</td><td>Rp ${(item.price * item.qty).toLocaleString('id-ID')}</td></tr>`
      ).join('');
      let html = `
        <div style='text-align:left; max-width:360px; margin:auto; font-size:13px;'>
          <h4 style='text-align:center; font-size:16px; margin-bottom:8px;'>Resi Pesanan Noken Shop</h4>
          <p><b>Nama:</b> ${newTransaction.customer.name}</p>
          <p><b>Alamat:</b> ${newTransaction.customer.address}</p>
          <p><b>No HP:</b> ${newTransaction.customer.phone}</p>
          <p><b>Email:</b> ${newTransaction.customer.email}</p>
          <p><b>Tanggal:</b> ${new Date(newTransaction.date).toLocaleString('id-ID')}</p>
          <hr>
          <table style='width:100%;border-collapse:collapse;font-size:12px;'>
            <thead>
              <tr><th>Produk</th><th>Qty</th><th>Harga</th><th>Subtotal</th></tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
            <tfoot>
              <tr><td colspan='3' style='text-align:right;'><b>Total</b></td><td><b>Rp ${newTransaction.totalPrice.toLocaleString('id-ID')}</b></td></tr>
            </tfoot>
          </table>
          <hr>
          <p style='text-align:center;'>Terima kasih telah berbelanja di Noken Shop Mama Papua!</p>
          <p style='text-align:center;'>Pesanan Akan segeran di proses Ke Alamat anda!</p>
        </div>
      `;
      Swal.fire({
        title: 'Checkout Berhasil!',
        html: html,
        icon: 'success',
        confirmButtonText: 'OK',
        width: 380,
      }).then(() => {
        // Kosongkan keranjang dan reset form
        this.cart.forEach(item => this.setInCartStatus(item.name, false));
        this.cart = [];
        this.showSidebar = false;
        this.showForm = false;
        localStorage.removeItem('cart');
        this.saveToLocalStorage();
        window.location.reload();
      });
    },

    // ===================== CRUD USER & TRANSAKSI UNTUK SINKRONISASI DASHBOARD =====================
    users: [],
    transactions: [],
    loadUsers() {
      this.users = JSON.parse(localStorage.getItem('users')) || [];
    },
    deleteUser(email) {
      Swal.fire({
        title: 'Hapus Pengguna?',
        text: 'Data tidak dapat dikembalikan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Ya, hapus'
      }).then((result) => {
        if (result.isConfirmed) {
          let users = JSON.parse(localStorage.getItem('users')) || [];
          users = users.filter(u => u.email !== email);
          localStorage.setItem('users', JSON.stringify(users));
          this.loadUsers();
          Swal.fire('Dihapus!', 'Pengguna berhasil dihapus.', 'success');
        }
      });
    },
    loadTransactions() {
      const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      this.transactions = transactions.map(trx => ({
        ...trx,
        customer: {
          ...trx.customer,
          phone: trx.customer.phone && trx.customer.phone.startsWith('+62') ? trx.customer.phone : `+62${trx.customer.phone}`
        }
      }));
    },
    // ===================== LAPORAN & KPI =====================
    get totalRevenue() {
      return this.transactions.reduce((sum, trx) => {
        const total = Number(trx.totalPrice);
        return sum + (isNaN(total) ? 0 : total);
      }, 0);
    },
    registerPasswordVisible: false,


    // Register & Login User
    registerEmail: '',
    registerPassword: '',
    registerPasswordConfirm: '',
    userEmail: '',
    userPassword: '',
    loggedInUserName: '', // Tambahkan properti untuk menyimpan nama pengguna yang sedang login
    userLoginPasswordVisible: false,
    showUserLoginModal: true,
    registerName: '',

userRegister() {
  // Validasi input tidak boleh kosong
  if (!this.registerName || !this.registerEmail || !this.registerPassword || !this.registerPasswordConfirm) {
    Swal.fire({
      icon: 'warning',
      title: 'Data belum lengkap!',
      text: 'Mohon lengkapi semua field sebelum mendaftar.'
    });
    return;
  }
  // Validasi sederhana
  if (!this.registerEmail || !this.registerPassword || !this.registerPasswordConfirm) {
    Swal.fire('Error', 'Semua field harus diisi!', 'error');
    return;
  }
  if (this.registerPassword !== this.registerPasswordConfirm) {
    Swal.fire('Error', 'Password dan konfirmasi tidak sama!', 'error');
    return;
  }
  let users = JSON.parse(localStorage.getItem('users')) || [];
  if (users.some(u => u.email === this.registerEmail)) {
    Swal.fire('Error', 'Email sudah terdaftar!', 'error');
    return;
  }
  users.push({ 
    name: this.registerName,
    email: this.registerEmail, 
    password: this.registerPassword, 
    registeredAt: new Date().toISOString(),
    role: 'user'
  });
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('loggedInUserName', this.registerName); // Simpan nama pengguna
  this.loggedInUserName = this.registerName; // Perbarui nama pengguna di aplikasi
  Swal.fire('Berhasil', 'Registrasi berhasil! Silakan login.', 'success').then(() => {
    window.location.href = 'loginUser.html';
  });
},

userLogin() {
  // Login user biasa
  // Validasi input tidak boleh kosong
      if (!this.userEmail || !this.userPassword) {
        Swal.fire({
          icon: 'warning',
          title: 'Data belum lengkap!',
          text: 'Mohon lengkapi email dan password.'
        });
        return;
      }
  let users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === this.userEmail && u.password === this.userPassword);
  if (user) {
    localStorage.setItem('isUserLoggedIn', 'true');
    localStorage.setItem('userEmail', this.userEmail);
    localStorage.setItem('loggedInUserName', user.name); // Simpan nama pengguna
    this.loggedInUserName = user.name; // Perbarui nama pengguna di aplikasi
    // Simpan data login ke browser
    localStorage.setItem('savedLogin', JSON.stringify({
      email: this.userEmail,
      password: this.userPassword
    }));
    Swal.fire('Berhasil', 'Login berhasil!', 'success').then(() => {
      // Jika ada pending add to cart, tambahkan ke cart
      const pending = localStorage.getItem('pendingAddToCart');
      if (pending) {
        try {
          const prod = JSON.parse(pending);
          const found = this.cart.find(p => p.name === prod.name);
          if (found) {
            found.qty++;
          } else {
            this.cart.push({ ...prod, qty: 1, inCart: true });
            this.setInCartStatus(prod.name, true);
          }
          this.saveToLocalStorage();
        } catch {}
        localStorage.removeItem('pendingAddToCart');
      }
      // Hanya redirect jika belum di index.html
      const path = window.location.pathname.split('/').pop();
      if (path !== 'index.html' && path !== '') {
        window.location.href = 'index.html';
      }
    });
  } else {
    Swal.fire('Error', 'Email atau password salah!', 'error');
  }
},

    // === ISOTOPE & SWIPER INTEGRASI ALPINE ===
    isotopeInstance: null,
    currentFilter: '*',
    initIsotope() {
      if (window.Isotope) {
        // Tunggu DOM Alpine selesai render
        setTimeout(() => {
          this.isotopeInstance = new Isotope(document.querySelector('.isotope-container'), {
            itemSelector: '.isotope-item',
            layoutMode: 'masonry',
            filter: this.currentFilter,
            sortBy: 'original-order'
          });
        }, 300);
      }
    },
    filterIsotope(filter) {
      this.currentFilter = filter;
      if (this.isotopeInstance) {
        this.isotopeInstance.arrange({ filter });
        // Update active class pada filter menu
        document.querySelectorAll('.menu-filters li').forEach(li => {
          li.classList.remove('filter-active');
          if (li.getAttribute('data-filter') === filter) li.classList.add('filter-active');
        });
      }
      // Trigger ulang Isotope jika Alpine update DOM
      setTimeout(() => {
        if (this.isotopeInstance) this.isotopeInstance.layout();
      }, 300);
    },
    swiperInstance: null,
    initSwiper() {
      if (window.Swiper) {
        document.querySelectorAll('.init-swiper').forEach((el) => {
          // Ambil config dari script.swiper-config jika ada
          let config = {
            loop: false,
            speed: 600,
            autoplay: { delay: 5000 },
            slidesPerView: 'auto',
            pagination: { el: el.querySelector('.swiper-pagination'), type: 'bullets', clickable: true }
          };
          const configEl = el.querySelector('.swiper-config');
          if (configEl) {
            try { config = { ...config, ...JSON.parse(configEl.innerHTML) }; } catch {}
          }
          this.swiperInstance = new Swiper(el, config);
        });
      }
    },

    openCartSidebar() {
      if (localStorage.getItem('isUserLoggedIn') !== 'true') {
        window.location.href = 'loginUser.html';
        return;
      }
      this.showSidebar = true;
    },

    closeSidebar() {
      this.showSidebar = false;
    },

    // === SIMULASI TRANSAKSI ADMIN ===
    showSimulasiModal: false,
    simulasiData: { name: '', address: '', phone: '', totalPrice: '' },
    openSimulasiModal() {
      this.simulasiData = { name: '', address: '', phone: '', totalPrice: '' };
      this.showSimulasiModal = true;
    },
    closeSimulasiModal() {
      this.showSimulasiModal = false;
    },
    submitSimulasiTransaksi() {
      // Validasi
      if (!this.simulasiData.name || !this.simulasiData.address || !this.simulasiData.phone || !this.simulasiData.totalPrice) {
        Swal.fire('Error', 'Semua field harus diisi!', 'error');
        return;
      }
      const phone = String(this.simulasiData.phone);
      if (phone.length < 8 || phone.length > 13 || phone.startsWith('0')) {
        Swal.fire('Error', 'Nomor HP tidak valid!', 'error');
        return;
      }
      // Push transaksi ke localStorage
      let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      const newId = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
      const newTransaction = {
        id: newId,
        items: [], // Kosong, karena simulasi
        customer: {
          name: this.simulasiData.name,
          address: this.simulasiData.address,
          phone: this.simulasiData.phone
        },
        totalPrice: Number(this.simulasiData.totalPrice),
        date: new Date().toISOString()
      };
      transactions.push(newTransaction);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      this.loadTransactions();
      this.closeSimulasiModal();
      Swal.fire('Sukses', 'Transaksi simulasi berhasil ditambahkan!', 'success');
    },

    loggedInRole: localStorage.getItem('loggedInRole') || 'USER',
    loggedInUserEmail: localStorage.getItem('loggedInUserEmail') || 'user@example.com',

    init() {
      this.loadUsers();
      this.loadTransactions();
      // Jangan isi allProducts di sini!
      this.userEmail = '';
      this.userPassword = '';
      this.registerEmail = '';
      this.registerPassword = '';
      this.registerPasswordConfirm = '';
      if (!localStorage.getItem('loggedInRole')) {
        localStorage.setItem('loggedInRole', 'USER');
      }
      if (!localStorage.getItem('loggedInUserEmail')) {
        localStorage.setItem('loggedInUserEmail', 'user@example.com');
      }
      this.loggedInUserName = localStorage.getItem('loggedInUserName') || '';
      this.loggedInRole = localStorage.getItem('loggedInRole');
      this.loggedInUserEmail = localStorage.getItem('loggedInUserEmail');
      console.log('Alpine.js loggedInRole:', this.loggedInRole);
      console.log('Alpine.js loggedInUserEmail:', this.loggedInUserEmail);
    },

    // === PRODUK CRUD LOCALSTORAGE & SINKRONISASI DASHBOARD ===
    allProducts: [],
    newProduct: { name: '', price: '', diskon: '', image: '', descriptions: '', category: '' },
    editIndex: null,
    /**
     * Fungsi utama untuk load produk dari localStorage (hasil CRUD dashboard),
     * jika kosong maka isi dari data default (products, products2, products3).
     * Selalu gunakan fungsi ini di x-init pada index.html!
     */
    loadFromLocalStorage() {
      // Ambil semua produk dari localStorage (products, products2, products3)
      const getArr = (key, fallback) => {
        try {
          const arr = JSON.parse(localStorage.getItem(key));
          return Array.isArray(arr) ? arr : fallback;
        } catch {
          return fallback;
        }
      };
      const combine = (arr, sourceName) => arr.map((p, i) => ({ ...p, sourceArray: sourceName, realIndex: i }));
      const p1 = combine(getArr('products', this.products), 'products');
      const p2 = combine(getArr('products2', this.products2), 'products2');
      const p3 = combine(getArr('products3', this.products3), 'products3');
      // Hapus duplikat berdasarkan nama, kategori, dan gambar
      const all = [...p1, ...p2, ...p3];
      const unique = [];
      const seen = new Set();
      for (const prod of all) {
        const key = prod.name + '|' + prod.category + '|' + prod.image;
        if (!seen.has(key)) {
          unique.push(prod);
          seen.add(key);
        }
      }
      this.allProducts = unique;
      // Sinkronkan status inCart
      [this.products, this.products2, this.products3].forEach(arr => {
        arr.forEach(prod => {
          prod.inCart = this.cart.some(item => item.name === prod.name);
        });
      });
    },
    // CRUD produk hanya update localStorage dan allProducts
    loadProducts() {
      const p = localStorage.getItem('products');
      this.allProducts = p ? JSON.parse(p) : [];
    },
    saveProducts() {
      localStorage.setItem('products', JSON.stringify(this.allProducts));
      this.loadProducts();
    },
    createProduct() {
      const { name, price, diskon, image, descriptions, category } = this.newProduct;
      let key = '';
      if (category.includes('filter-staters')) key = 'products';
      else if (category.includes('filter-salads')) key = 'products2';
      else if (category.includes('filter-specialty')) key = 'products3';
      if (key) {
        const arr = JSON.parse(localStorage.getItem(key)) || this[key];
        arr.push({ ...this.newProduct });
        localStorage.setItem(key, JSON.stringify(arr));
      }
      this.loadFromLocalStorage();
      this.resetProductForm();
      Swal.fire('Sukses', 'Produk berhasil ditambahkan!', 'success');
    },
    startEditProduct(idx) {
      this.editIndex = idx;
      const p = this.allProducts[idx];
      this.newProduct = { ...p };
    },
    updateProduct() {
      if (this.editIndex !== null) {
        const prod = this.allProducts[this.editIndex];
        let key = prod.category.includes('filter-staters') ? 'products' :
                  prod.category.includes('filter-salads') ? 'products2' :
                  prod.category.includes('filter-specialty') ? 'products3' : '';
        if (key) {
          const arr = JSON.parse(localStorage.getItem(key)) || this[key];
          // Cari index asli di array sumber
          const realIdx = arr.findIndex(p => p.name === prod.name && p.category === prod.category && p.image === prod.image);
          if (realIdx !== -1) {
            arr[realIdx] = { ...this.newProduct };
            localStorage.setItem(key, JSON.stringify(arr));
          }
        }
        this.loadFromLocalStorage();
        this.resetProductForm();
        this.editIndex = null;
        Swal.fire('Sukses', 'Produk berhasil diupdate!', 'success');
      }
    },
    deleteProduct(idx) {
      Swal.fire({
        title: 'Hapus Produk?',
        text: 'Data tidak dapat dikembalikan!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Ya, hapus'
      }).then((result) => {
        if (result.isConfirmed) {
          const prod = this.allProducts[idx];
          let key = prod.category.includes('filter-staters') ? 'products' :
                    prod.category.includes('filter-salads') ? 'products2' :
                    prod.category.includes('filter-specialty') ? 'products3' : '';
          if (key) {
            let arr = JSON.parse(localStorage.getItem(key)) || this[key];
            arr = arr.filter(p => !(p.name === prod.name && p.category === prod.category && p.image === prod.image));
            localStorage.setItem(key, JSON.stringify(arr));
          }
          this.loadFromLocalStorage();
          Swal.fire('Dihapus!', 'Produk berhasil dihapus.', 'success');
        }
      });
    },
    resetProductForm() {
      this.newProduct = { name: '', price: '', diskon: '', image: '', descriptions: '', category: '' };
      this.editIndex = null;
      if (this.$refs && this.$refs.fileInput) this.$refs.fileInput.value = '';
    },
    resetToDefaultProducts() {
      Swal.fire({
        title: 'Reset Produk?',
        text: 'Semua produk akan dikembalikan ke data default. Data produk yang sudah diubah akan hilang!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ya, Reset!'
      }).then((result) => {
        if (result.isConfirmed) {
          const defaultProducts = [
            ...this.products,
            ...this.products2,
            ...this.products3
          ];
          localStorage.setItem('products', JSON.stringify(defaultProducts));
          this.loadProducts();
          Swal.fire('Berhasil!', 'Produk berhasil direset ke default.', 'success');
        }
      });
    },

    // Tambahkan properti untuk email lupa password
    forgotPasswordEmail: '',

    // Tambahkan metode untuk menangani lupa password
    forgotPassword() {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === this.forgotPasswordEmail);

      if (user) {
        Swal.fire({
          title: 'Link Reset Terkirim!',
          text: 'Silakan cek email Anda untuk reset password.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.href = 'loginUser.html';
        });
      } else {
        Swal.fire({
          title: 'Email Tidak Ditemukan!',
          text: 'Email yang Anda masukkan tidak terdaftar.',
          icon: 'error',
          confirmButtonText: 'Coba Lagi'
        });
      }
    },

        printReceipt(transaction) {
      console.log('Data transaksi yang diterima:', transaction);
      if (!transaction) {
        Swal.fire({
          icon: 'error',
          title: 'Transaksi tidak ditemukan!',
          text: 'Pilih transaksi yang ingin dicetak resinya.'
        });
        return;
      }

      const receiptContent = `
        <div style="font-family: Arial, sans-serif; text-align: left;">
          <hr />
          <p><strong>Nama:</strong> ${transaction.customer?.name || '-'}</p>
          <p><strong>Email:</strong> ${transaction.customer?.email || '-'}</p>
          <p><strong>Alamat:</strong> ${transaction.customer?.address || '-'}</p>
          <p><strong>No HP:</strong> ${transaction.customer?.phone || '-'}</p>
          <p><strong>Total Harga:</strong> Rp ${Number(transaction.totalPrice || 0).toLocaleString()}</p>
          <p><strong>Tanggal:</strong> ${new Date(transaction.date).toLocaleString()}</p>
          <hr />
          <p style="text-align: center;">Terima kasih telah berbelanja!</p>
        </div>
      `;

      Swal.fire({
        title: 'Resi Transaksi',
        html: receiptContent,
        icon: 'info',
        confirmButtonText: 'Tutup',
        showCancelButton: true,
        cancelButtonText: 'Cetak',
        preConfirm: () => {
          // Tidak ada tindakan tambahan untuk tombol "Tutup"
        },
        preCancel: () => {
          const printWindow = window.open('', '_blank', 'width=400,height=600');
          printWindow.document.open();
          printWindow.document.write(`
            <html>
              <head>
                <title>Resi Transaksi</title>
              </head>
              <body onload="window.print(); window.close();">
                ${receiptContent}
              </body>
            </html>
          `);
          printWindow.document.close();
        }
      });
    },

    saveToLocalStorage() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
      localStorage.setItem('products', JSON.stringify(this.allProducts));
    },

    logout() {
      // Hapus status login user dan refresh halaman agar ikon logout hilang
      localStorage.removeItem('isUserLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('loggedInUserName');
      // Jika ingin juga hapus cart user saat logout:
      localStorage.removeItem('cart');
      window.location.reload();
    },

  }
}
window.cartHandler = cartHandler;

document.addEventListener('DOMContentLoaded', () => {
  if (window.Alpine && Alpine.store) {
    // Hapus pemanggilan Alpine.store('productStore').loadSharedProducts(); karena sudah tidak digunakan
  } else {
    console.error('Alpine.js store is not initialized.');
  }
});

// Recovery: jika data filter-staters hilang dari localStorage, reset ke default
    let p1 = JSON.parse(localStorage.getItem('products'));
    if (!Array.isArray(p1) || !p1.some(p => p.category === 'filter-staters')) {
      localStorage.setItem('products', JSON.stringify(this.products));
      p1 = [...this.products];
    }
    // Pastikan filteredProducts, allProducts, dsb, menggunakan p1 yang sudah direcovery
