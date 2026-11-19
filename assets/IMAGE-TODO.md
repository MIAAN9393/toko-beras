# Panduan aset Toko Beras KIA

## Logo dan referensi visual

- Logo resmi dipakai langsung dari `assets/images/Logo KIA Grosir Beras dan Telur.png` di navbar dan footer.
- File PNG berukuran 2172 x 724, RGB dengan latar hitam solid (bukan transparan). Logo ditampilkan utuh tanpa pengubahan.
- Brief menyebut file spanduk KIA, tetapi spanduk tidak ditemukan di project saat redesign. Palet, bingkai emas, dan motif padi saat ini mengacu pada logo. Tambahkan file spanduk bila ingin penyelarasan detail yang lebih presisi.

## Foto sementara yang perlu diganti

| File | Lokasi penggunaan | Foto asli yang dibutuhkan |
| --- | --- | --- |
| `assets/images/kia-rice-hero.jpg` | Hero utama | Foto beras unggulan / karung beras KIA |
| `assets/images/kia-product-rice.jpg` | Kartu IR 42, Sokan, Sokan Merah, Anak Daro, Kuriak Kusuik | Foto masing-masing varietas |
| `assets/images/kia-product-eggs.jpg` | Hero pendukung dan kartu Telur | Foto telur yang dijual KIA |
| `assets/images/kia-product-oil.jpg` | Hero pendukung dan kartu Minyak goreng | Foto minyak goreng yang dijual KIA |
| `assets/images/placeholder-toko-kia.svg` | Tentang Kami (`.about-visual`) | Foto asli toko KIA; jangan gunakan placeholder ini setelah foto tersedia |
| `assets/images/placeholder-aktivitas-pengiriman.svg` | Layanan (`.delivery-feature`) | Foto aktivitas pengiriman KIA |

Komentar TODO di `index.html` menunjukkan lokasi gambar yang harus diganti. Foto produk saat ini hanya visual sementara, bukan foto barang aktual KIA. Placeholder toko dan pengiriman berupa panel instruksi, bukan foto toko rekaan.

## Placeholder dan informasi lainnya

- `assets/images/ornamen-padi-emas.svg` adalah ornamen dekoratif, tidak perlu diganti.
- SVG lama `placeholder-beras-ir42.svg`, `placeholder-beras-sokan.svg`, `placeholder-beras-sokan-merah.svg`, `placeholder-beras-anak-daro.svg`, `placeholder-beras-kuriak-kusuik.svg`, `placeholder-telur.svg`, `placeholder-minyak-goreng.svg`, dan `placeholder-hero-rice.svg` tidak dipakai di tampilan saat ini.
- Bagian lokasi menyediakan tautan Google Maps dan navigasi langsung untuk toko utama dan penggilingan.
- Nomor WhatsApp, email, nama lokasi, alamat, dan pesan awal dikelola di `assets/js/business-config.js`.
- Akun media sosial, jam operasional, harga, dan jangkauan pengiriman belum diberikan dan dapat ditambahkan saat tersedia.

## Konfigurasi informasi bisnis

Nomor WhatsApp utama dan alternatif, pesan awal, email, nama lokasi, alamat toko, alamat penggilingan, dan keterangan penggilingan tersimpan terpusat di `assets/js/business-config.js`. Tautan kontak dan Maps pada halaman diisi dari konfigurasi ini oleh `assets/js/main.js`.
