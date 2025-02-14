class LivroDao {
  constructor(db) {
    this._db = db;
  }

  lista() {
    return new Promise((resolve, reject) => {
      this._db.all(
        'SELECT * FROM livros',
        (erro, resultados) => {
          if (erro) return reject(erro)
          setTimeout(() => {
            return resolve(resultados)
          }, 5000);
        }
      )
    })
  }
}

module.exports = LivroDao;
