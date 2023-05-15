const db = require('sqlite3');

function getAll(db){
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM classes ORDER BY id ASC', (err, rows) => {
            if(err){
                reject(err);
            }
            resolve(rows);
        })
    })
}

function post(db, params){
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO classes (class_title, teacher_id) VALUES (?, ?)",params , (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Success")
            }
        })
    })
}

function get(db, class_id){
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM classes WHERE id= ?', [class_id], (err, rows) => {
            if(err){
                reject(err);
            }
            resolve(rows);
        })
    })
}

function put(db, params) {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        const sqlQuery =
          "UPDATE classes SET class_title = ?, teacher_id = ? WHERE id = ?";
  
        db.run(sqlQuery, params, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve("Turma atualizada");
          }
        });
      });
    });
  }

function remove(db, class_id){
return new Promise((resolve, reject) => {
    db.all('DELETE FROM classes WHERE id= ?', [class_id], (err, rows) => {
        if(err){
            reject(err);
        }
        resolve("Turma deletada");
    })
})
}

module.exports = {
    getAll,
    post,
    get,
    put,
    remove
}