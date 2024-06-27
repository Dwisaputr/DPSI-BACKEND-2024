const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;

// Setup multer for file upload
const upload = multer({ dest: 'uploads/' });

app.post('/users/uploadProfilePic', upload.single('profilePic'), (req, res) => {
  // Logika untuk mengunggah gambar profil
  if (!req.file) {
    return res.status(400).send('Tidak ada file yang diunggah.');
  }
  res.send('Gambar profil diunggah!');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
