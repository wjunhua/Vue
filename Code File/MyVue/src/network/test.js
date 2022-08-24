import {request} from './require'

export function test() {
return request({
  url:'/home',
 method:'get'
})
}

export function selectAccount() {
  return request({
    url:'/selectAccount',
    method:'get'
  })
}

export function selectEnd() {
  return request({
    url:'/selectEnd',
    method:'get'
  })
}

export function selectGrade() {
  return request({
    url:'/selectGrade',
    method:'get'
  })
}

export function selectContent(ID) {
  return request({
    url:'/selectContent',
    method:'get',
    params:{ID},
  })
}

export function selectRandom(ID) {
  return request({
    url:'/selectRandom',
    method:'get',
    params:{ID},
  })
}

export function selectPoem(ID) {
  return request({
    url:'/selectPoem',
    method:'get',
    params:{ID},
  })
}

export function show(account) {
  return request({
    url:'/show',
    method:'get',
    params:{account},
  })
}

export function add(question,answer,choice1,choice2,choice3,choice4) {
return request({
  url:'/add',
  method:'get',
  params:{question,answer,choice1,choice2,choice3,choice4},
})
}

export function green(ID,shows) {
  return request({
    url:'/green',
    method:'get',
    params:{ID,shows},
  })
}

export function selectGreen(ID) {
  return request({
    url:'/selectGreen',
    method:'get',
    params:{ID},
  })
}

export function _changeGrade(grade) {
  return request({
    url:'/_changeGrade',
    method:'get',
    params:{grade},
  })
}

export function _changeGrade1(grade) {
  return request({
    url:'/_changeGrade1',
    method:'get',
    params:{grade},
  })
}

export function changeTheGrade(grade1,ID) {
  return request({
    url:'/changeTheGrade',
    method:'get',
    params:{grade1,ID},
  })
}

export function changeTheGrade2(grade2,ID) {
  return request({
    url:'/changeTheGrade2',
    method:'get',
    params:{grade2,ID},
  })
}

export function changeTheGrade3(grade3,ID) {
  return request({
    url:'/changeTheGrade3',
    method:'get',
    params:{grade3,ID},
  })
}

export function changeTheGrade4(grade4,ID) {
  return request({
    url:'/changeTheGrade4',
    method:'get',
    params:{grade4,ID},
  })
}

export function changeContent(shows,ID) {
  return request({
    url:'/changeContent',
    method:'get',
    params:{shows,ID},
  })
}

export function _addAccount(account) {
  return request({
    url:'/_addAccount',
    method:'get',
    params:{account},
  })
}

export function _delete(question) {
  return request({
    url:'/_delete',
    method:'get',
    params:{question},
  })
}

export function select(account) {
  return request({
    url:'/select',
    method:'get',
    params:{account},
  })
}

export function _change(question,answer,choice1,choice2,choice3,choice4) {
  return request({
    url:'/_change',
    method:'get',
    params:{question,answer,choice1,choice2,choice3,choice4},
  })
}

export function _change1(account,admin) {
  return request({
    url:'/_change1',
    method:'get',
    params:{account,admin},
  })
}

export function _change2(account,n_password) {
  return request({
    url:'/_change2',
    method:'get',
    params:{account,n_password},
  })
}

export function _register(account,password,admin) {
  return request({
    url:'/localhost',
    method:'get',
    params:{account,password,admin},
  })
}

export function _login(account,password) {
  return request({
    url:'/adminLogin',
    method:'get',
    params:{account,password},
  })
}
