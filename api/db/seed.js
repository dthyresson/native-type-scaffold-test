/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
var faker = require('faker')

const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function main() {
  const data = Array.from({ length: 10 }).map(() => {
    return {
      title: `${faker.lorem.sentence()}-${faker.random.alphaNumeric()}`,
      lede: faker.lorem.sentence(),
      tagline: faker.lorem.word(10),
      content: faker.lorem.paragraph(),
      xml: `<xml><title>${faker.lorem.sentence()}</title><content>${faker.lorem.paragraph()}</content></xml>`,
    }
  })

  const result = await db.post.createMany({
    data,
  })

  console.log(`Created ${result.count} posts!`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.$disconnect()
  })
