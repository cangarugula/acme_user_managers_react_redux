const Sequelize = require('sequelize')

const db = new Sequelize(process.env.DATABASE_URL, {logging: false});

const User = db.define('user',{
  name: Sequelize.STRING
})

User.belongsTo(User, {as: 'manager'})

const syncAndSeed = async () => {
  try{
    await db.sync({force:true})
    const [moe,larry,curly,shep] = await Promise.all([
      User.create({name: 'moe'}),
      User.create({name: 'larry'}),
      User.create({name: 'curly'}),
      User.create({name: 'shep'})
    ])

    larry.setManager(moe)
    curly.setManager(larry)
    shep.setManager(larry)

    await Promise.all([moe,larry,curly,shep].map(user => user.save()))
    console.log('synced and seeded')
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  User,
  syncAndSeed
}
