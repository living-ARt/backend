const {db} = require('../server/db')
const {Museum, Artwork} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const artwork = await Promise.all([
    Artwork.create({
      name: "",
      artist: "",
      date: "",
      description: "",
      imageUrl: "",
      videoUrl: "",
      descriptionSound: "",
      museumId: 1
    }),

    Museum.create({
      name: "Metropolitan Museum of Art",
      location: "1000 5th Ave, New York, NY, 10028"
    })
  ])

}


async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
