var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    username  : { type: 'string', unique: true,},
    email     : { type: 'email',  unique: true },
    name      : { type: 'string'},
    picture   : { type: 'string'},
    passports : { collection: 'Passport', via: 'user' },
    diagrams  : { collection: 'Diagram', via: 'owner' }
  }
};

module.exports = User;
