import http from "../http-common.js";

class UserService {

  findPassByEmail(userEmail) {
    //return http.get(`/users/${userEmail}`);
    return http.get('/users/fetchUserName', {params: {email: userEmail}});
    //return http.get(`/users/605aae5068694537687f1a12`);
    //return http.get('/users/fetchUserName',emailObj);
  }

  //works as intended
  registerNewUser(studentObject){
    return http.post('/users/create-user', studentObject)
    .then(res => console.log(res.data));

  }

  findUserByID(id){
    return http.post('/users/fetchByID/:id',id);
  }

} 
export default new UserService();
