var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : { type: 'string', unique: true, primaryKey: true},
    email     : { type: 'email',  unique: true },
    passports : { collection: 'Passport', via: 'user' },
    diagrams  : { collection: 'Diagram', via: 'Id' }
  }
};

module.exports = User;
