const express = require('express')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2002x',
  database: 'test'
})
//这里配置数据库地址账户密码

connection.connect()

const app = express()


const allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCors);


app.get('/home',(req,res)=>{
  connection.query('SELECT * FROM poem_choose',(err,res1)=>{
    if(err) throw err;
    res.send(res1)
  })

})

app.get('/show',(req,res)=>{
  console.log(req.query.account)
  connection.query('SELECT account,password,admin FROM admin_info WHERE account = ?',[req.query.account],(err,res1)=>{
    if(err) throw err;
    res.send(res1)
  })

})

app.get('/selectAccount',(req,res)=>{
    connection.query('SELECT * FROM account ORDER BY ID DESC LIMIT 1',(err,res1)=>{
        if(err) throw err;
        res.send(res1)
    })

})

app.get('/selectEnd',(req,res)=>{
  connection.query('SELECT * FROM account ORDER BY ID DESC LIMIT 1',(err,res1)=>{
    if(err) throw err;
    res.send(res1)
  })

})

app.get('/changeTheGrade',(req,result)=>{
  connection.query('UPDATE account SET grade1 = ? where ID = ?',[req.query.grade1,req.query.ID])
  result.send('1');
})

app.get('/changeTheGrade2',(req,result)=>{
  connection.query('UPDATE account SET grade2 = ? where ID = ?',[req.query.grade2,req.query.ID])
  result.send('1');
})

app.get('/changeTheGrade3',(req,result)=>{
  connection.query('UPDATE account SET grade3 = ? where ID = ?',[req.query.grade3,req.query.ID])
  result.send('1');
})

app.get('/changeTheGrade4',(req,result)=>{
  connection.query('UPDATE account SET grade4 = ? where ID = ?',[req.query.grade4,req.query.ID])
  result.send('1');
})

app.get('/selectGrade',(req,res)=>{
    connection.query('SELECT * FROM grade ORDER BY ID DESC LIMIT 1',(err,res1)=>{
        if(err) throw err;
        res.send(res1)
    })

})

app.get('/selectGreen',(req,result)=>{
    connection.query('SELECT * FROM green WHERE ID = ?',[req.query.ID],(err,res)=>{
        if(err){
            throw err;
        }
        result.send(res);
    })
})

app.get('/green',(req,result)=>{
    connection.query('UPDATE green SET shows = ? where ID = ?',[req.query.shows,req.query.ID],
        (err,res)=>{
            if(err){
                throw err;
            }
            result.send('1');
        }
    )
})

app.get('/selectRandom',(req,result)=>{
    connection.query('SELECT * FROM choose WHERE ID = ?',[req.query.ID],(err,res)=>{
        if(err){
            throw err;
        }
        result.send(res);
    })
})

app.get('/selectPoem',(req,result)=>{
  connection.query('SELECT * FROM poem_choose WHERE ID = ?',[req.query.ID],(err,res)=>{
    if(err){
      throw err;
    }
    result.send(res);
  })
})

app.get('/selectContent',(req,result)=>{
    connection.query('SELECT * FROM point WHERE ID = ?',[req.query.ID],(err,res)=>{
        if(err){
            throw err;
        }
        result.send(res);
    })
})

app.get('/localhost',(req,res)=>{
  const account = req.query.account
  const password = req.query.password
  const admin = req.query.admin
  connection.query('INSERT INTO admin_info (account,password,admin) VALUE(?,?,?)',[account,password,admin],err=>{
    if(err) throw err;
    res.send('1')
  })
})

app.get('/add',(req,result)=>{
  connection.query('INSERT INTO poem_choose (question,answer,choice1,choice2,choice3,choice4) VALUE(?,?,?,?,?,?)',
    [req.query.question,req.query.answer,req.query.choice1,req.query.choice2,req.query.choice3,req.query.choice4],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send('1');
    }
    )
})

app.get('/_changeGrade',(req,result)=>{
    connection.query('INSERT INTO grade (grade) VALUE(?)',[req.query.grade],
        (err,res)=>{
            if(err){
                throw err;
            }
            result.send('1');
        }
    )
})

app.get('/_changeGrade1',(req,result)=>{
  connection.query('INSERT INTO grade_2 (grade) VALUE(?)',[req.query.grade],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send('1');
    }
  )
})

app.get('/_addAccount',(req,result)=>{
    connection.query('INSERT INTO account (account) VALUE(?)',[req.query.account],
        (err,res)=>{
            if(err){
                throw err;
            }
            result.send('1');
        }
    )
})

app.get('/_delete',(req,result)=>{
  connection.query('DELETE FROM poem_choose WHERE question = ?',[req.query.question],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send('1');
    }
  )
})

app.get('/select',(req,result)=>{
  connection.query("SELECT * FROM account WHERE account = ?",[req.query.account],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send(res);
    }
  )
})

app.get('/_change',(req,result)=>{
  connection.query('UPDATE poem_choose SET answer = ?,choice1 = ?,choice2 = ?,choice3 = ?,choice4 = ? where question = ?',
    [req.query.answer,req.query.choice1,req.query.choice2,req.query.choice3,req.query.choice4,req.query.question],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send('1');
    }
  )
})

app.get('/_change1',(req,result)=>{
  connection.query('UPDATE admin_info SET admin = ? where account = ?',[req.query.admin,req.query.account],
    (err,res)=>{
      if(err){
        throw err;
      }
      result.send('1');
    }
  )
})

app.get('/_change2',(req,result)=>{
  connection.query('UPDATE admin_info SET password = ? where account = ?',[req.query.n_password,req.query.account])
      result.send('1');
})

app.get('/changeContent',(req,result)=>{
    connection.query('UPDATE point SET shows = ? where ID = ?',[req.query.shows,req.query.ID],
        (err,res)=>{
            if(err){
                throw err;
            }
            result.send('1');
        }
    )
})

app.get('/adminLogin', (req, result) => {
  const account = req.query.account
  const password = req.query.password
  let count = 0
  connection.query('SELECT * FROM admin_info', (err, res) => {
    if (err) throw err;
    for (let i in res) {
      if (res[i].account == account) {
        if (res[i].password == password) {
          count = 1
        }
      }
    }
    if (count == 0) {
      result.send('0')
    }
    if (count == 1) {
      result.send('1')
    }
  })
})


app.listen(3000, () => {
  console.log('runing 127.0.0.1:3000')
})
