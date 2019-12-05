const db = require('../server/db')
const {Museum, Artwork} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const artwork = await Promise.all([
    Museum.create({
      name: "Metropolitan Museum of Art",
      location: "1000 5th Ave, New York, NY, 10028",
      active: true,
      image: "https://www.metmuseum.org/-/media/images/visit/met-fifth-avenue/fifthave_teaser.jpg"
    }),
    Museum.create({
      name: "Brooklyn Museum",
      location: "200 Eastern Pkwy, Brooklyn, NY 11238",
      active: false,
      image: "https://living-art-img.s3.amazonaws.com/brooklyn_museum.jpg",
    }),
    Museum.create({
      name: "MoMA",
      location: "11 W 53rd St, New York, NY 10019",
      active: false,
      image: "https://living-art-img.s3.amazonaws.com/moma.jpg",
    }),

    Artwork.create({
      name: "Sunflowers",
      imageUrl: "https://living-art-img.s3.amazonaws.com/sunflowers.jpg",
      gifUrl: "https://living-art-animations.s3.amazonaws.com/sunflowers_360.gif",
      artist: "Vincent van Gogh",
      description: "Van Gogh painted four still lifes of sunflowers in Paris in late summer 1887. There is an oil sketch for this picture (Van Gogh Museum, Amsterdam) as well as another painting of two sunflowers also signed and dated 1887 (Kunstmuseum Bern), and a larger canvas showing four sunflower heads (Kröller-Müller Museum, Otterlo). Paul Gauguin acquired the two smaller works, and until the mid-1890s, when he sold his most prized possessions to finance his South Seas voyage, they held pride of place above the bed in his Paris apartment.",
      date: "1887",
      descriptionSound: "https://living-art-sound.s3.us-east-2.amazonaws.com/sunflowersSound.m4a",
      VRUrl: "https://living-art-animations.s3.amazonaws.com/sunflowers_360.mp4",
      physicalWidth: null,
      location: "Gallery 825 (19th and early 20th Century European Paintings and Sculpture)",
      museumId: 1
    },
    Artwork.create({
      name: "Dust Storm, Fifth Avenue",
      imageUrl: "https://living-art-img.s3.amazonaws.com/dust-storms.jpg",
      gifUrl: "https://living-art-animations.s3.amazonaws.com/dust-storm.gif",
      artist: "John Sloan",
      description: "Living near New York’s famed Flatiron Building off Madison Square, John Sloan frequently found his subject matter in the neighborhood. This painting captures the mayhem of a June 10 afternoon, in which the Flatiron Building itself—the only skyscraper in a low-rise neighborhood—created the wind tunnel effect depicted by Sloan.",
      date: "1906",
      descriptionSound: "https://living-art-sound.s3.us-east-2.amazonaws.com/dustStormsSound.m4a",
      VRUrl: "https://living-art-animations.s3.amazonaws.com/dust-storm.mp4",
      physicalWidth: null,
      location: "Gallery 772 (The American Wing)",
      museumId: 1
    }),
    Artwork.create({
      name: "Wheatfield with Cypresses",
      imageUrl: "https://living-art-img.s3.amazonaws.com/cypress.jpg",
      gifUrl: "https://living-art-animations.s3.amazonaws.com/cypress.gif",
      artist: "Vincent Van Gogh",
      description: "Painted in 1889, wheat field with Cypresses by Vincent Van Gogh depicts golden fields of ripe wheat against the French mountainside. On the right, the tall dark cypress trees offer a powerful contrast to the prevailing horizontal clouds and mountain range. This oil painting was part of a wheat field series inspired by his view from a window at the asylum where he was once a patient. Van Gogh died just one year later in 1890.",
      date: "July 1889",
      descriptionSound: "https://living-art-sound.s3.us-east-2.amazonaws.com/cypressSound.m4a",
      VRUrl: "https://living-art-animations.s3.amazonaws.com/cypress.mp4",
      physicalWidth: null,
      location: "Gallery 822",
      museumId: 1
    }),
    Artwork.create({
      name: "Molly Wales Fobes",
      imageUrl: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/11040/33028/main-image",
      gifUrl: "https://living-art-animations.s3.amazonaws.com/molly-wales-fobes.gif",
      artist: "Rufus Hathaway",
      description: "Born in Massachusetts, Hathaway worked as an itinerant portrait painter before pursuing a career in medicine. This Portrait is his earliest known work and depicts Molly Wales Fobes of Raynham, Massachusetts. Fashionably dressed, Molly sits in a Chippendale-style chair surrounded by a fantastical array of “pets,” which were likely included as emblems of her beauty, loyalty, and affection. The flowers decorating her fan and bodice, combined with her French-inspired hairstyle, identify Molly as a refined and worldly woman.",
      date: "1790",
      descriptionSound: "https://living-art-sound.s3.us-east-2.amazonaws.com/mollySound.m4a",
      VRUrl: "https://living-art-animations.s3.amazonaws.com/molly-wales-fobes.mp4",
      physicalWidth: null,
      location: "Gallery 751 (The American Wing)",
      museumId: 1
    }),
    Artwork.create({
      name: "Houses on the Achterzaan",
      imageUrl: "https://living-art-img.s3.amazonaws.com/houses-on-the-achterzaan.jpg",
      gifUrl: "https://living-art-animations.s3.amazonaws.com/houses-on-the-achterzaan.gif",
      artist: "Claude Monet",
      description: "On the advice of the French painter Charles-François Daubigny, Claude Monet traveled to the Netherlands in 1871, where he painted this landscape of limpid waters and azure skies along the Achterzaan River in Zaandam. Using a limited palette of varying shades of green, Monet has captured the hazy atmosphere and light-dappled water of this picturesque Dutch port. Monet's Dutch landscapes were widely admired by other contemporary artists, especially Daubigny, whose own studies of light and water share an affinity.",
      date: "1871",
      descriptionSound: "https://living-art-sound.s3.us-east-2.amazonaws.com/housesSound.m4a",
      VRUrl: "https://living-art-animations.s3.amazonaws.com/houses-on-the-achterzaan.mp4",
      physicalWidth: null,
      location: "Gallery 957, (Robert Lehman Collection)",
      museumId: 1
    })
    )
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
