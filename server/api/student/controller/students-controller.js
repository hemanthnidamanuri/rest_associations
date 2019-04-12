import studentsDao from "../dao/students-dao";

export default class studentsController {

  static getAll(req,res)
  {

    const query = req;
      studentsDao
        .getAll(query)
        .then(students =>{res.status(200).json(students)})
        .catch(error => {res.status(400).json(error)});
  }

  static getById(req,res)
  {
    console.log('in Controller');
    let _id = req.params.id;
    studentsDao.getById(_id).then((users) => {
        res.status(200).json(users).send(users);
      })
      .catch((error => res.json(error)))
  }

  static createNew(req,res)
  {
      let _req = req.body;
      studentsDao.createNew(_req).then((details)=>{
        res.status(200).json(details).send(details);
      })
        .catch((error => res.json(error)))
  }

  static deleteMember(req,res)
  {
    let _req = req.params.id;
    studentsDao.deleteMember(_req).then((deletestudent) => {
      res.status(200).json(deletestudent).send(deletestudent);
    })
      .catch(error => res.json(error))
  }

  static updateStudent(req,res)
  {
    let id = req.params.id;
    let _req = req.body;
    studentsDao.updateStudent(_req,id).then((us) => {
      res.status(200).json(us).send(us);
    })
      .catch(error => {res.status(400).json(error)})
  }

  static patchingStudent(req,res)
  {
    let id = req.params.id;
    let _req = req.body;
    studentsDao.patchingStudent(_req,id).then((ps) => {
      res.status(200).json(ps).send(ps);
    })
      .catch(error => {res.status(400).json(error)})
  }

  static  getByName(req,res)
  {
    let _name = req.params.name;
    studentsDao.getByName(_name).then((gbn) => {
      res.status(200).json(gbn).send(gbn);
    })
      .catch(error => {res.status(400).json(error)})
  }
}
