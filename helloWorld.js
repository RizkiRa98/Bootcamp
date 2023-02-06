// console.info ('Hello World');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});
var validator = require('validator');

readline.question('Masukkan Nama : ', (name) => {
  readline.question('Masukkan Nomor : ', (number) =>{
    readline.question('Masukkan Email : ', (email) =>{
    if(!validator.isMobilePhone(number,'id-ID')){
      console.log("Nomor yang dimasukkan salah")
    }else if(!validator.isEmail(email)){
      console.log("Email yang dimasukkan tidak valid")
    }else{
      console.log(`Nama ${name}, dengan nomor hp ${number}, dan email ${email}`);
    }
      readline.close();
    });
  });
});
// console.log(fs);
// fs.writeFileSync('test.txt', 'Hello World Secara Synchronous');
// fs.readFile('test.txt', 'utf-8', (err,data) =>{
//   if (err) throw err;
//   console.log(data);
// });