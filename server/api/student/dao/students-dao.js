import Promise from "bluebird";
import models from "../../../../models"

export default class studentsDao {

  static getById(_id) {
    return new Promise((resolve,reject)=>{
      models.Students.findAll({
        where: {
          id: _id
        }
      })
        .then(students=>{
          console.log("getbyid=",_id);
          resolve(students)
        },(error)=>{
          reject(error)
        })
    })
  }
  static getAll(res) {
    return new Promise((resolve, reject) => {
        models.Students.findAndCountAll({})
        .then(students => {
          console.log(students)
          resolve(students);
        }, (error) => {
          reject(error);
        });
    });
  }
  static createNew(req){
    return new Promise((resolve,reject) => {
      models.Students.create({
        sname: req.sname,
        ucolg: req.ucolg,
        sid: req.sid,
        saddress: req.saddress
      })
        .then(students => {
          console.log(students)
          resolve(students);
        }, (error) => {
          reject(error);
        });
    });
  }
  static deleteMember(id){
    return new Promise((resolve,reject) => {

      models.Students.destroy({
        where:
          {
            id: id
          }
      }).then(delstu => {
        resolve(delstu);
      },
        (error) => {
        reject(error);
        });
    });
  }
  static updateStudent(req,id){
    return new Promise((resolve,reject) => {
      models.Students.update(
        {
          ucolg: req.ucolg
        },
        {
          where:
            {
              id: id
            }
        })
        .then(updttudents => {
          resolve(updttudents);
        }, (error) => {
          reject(error);
        });
    });
  }

  static patchingStudent(req,id)
  {
    return new Promise((resolve,reject) => {
       models.Students.update({ucolg: req.ucolg},{where: {id: id}})
         .then(ps => {
           resolve (ps);
         }, (error) => {
           reject(error);
         });
    });
  }

  static getByName(_name){
    return new Promise((resolve,reject) => {
      models.Students.findOne({where: {sname: _name}})
        .then(gb => {
          resolve(gb);
        }, (error) => {
          reject(error);
        });
    });
  }
}
