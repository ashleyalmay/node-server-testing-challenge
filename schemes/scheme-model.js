const db = require('../data/dbConfig.js');

module.exports ={
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find(){
    return db('schemes');
}

function findById(id){
    return db('schemes').where({id}).first();

}

function findSteps(id) {
    return db('steps')
      .where('steps.scheme_id', id)
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
  }
  
  function add(scheme) {
    return db('schemes').insert(scheme)
      .then((ids) => {
        return findById(ids[0])
      })
  }
  
  function update(changes, id) {
    return db('schemes').where("id", id).first().update(changes)
      .then(() => {
        return findById(id)
      })
  }
  
  function remove(id) {
        return db('schemes').where({id}).del()
      }
  