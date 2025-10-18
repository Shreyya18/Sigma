
use("CrudDb")
console.log(db)
db.createCollection("courses")

db.courses.insertOne({
    name:"NodeJS",
    price:100,
    assignment: true,
    projects:40
})
db.courses.insertOne({
    name:"React",
    price:50,
    assignment: true,
    projects:40
})

db.courses.insertMany(
    [
  {
    name: "React",
    price: 50,
    assignment: true,
    projects: 40
  },
  {
    name: "NodeJS",
    price: 45,
    assignment: false,
    projects: 35
  },
  {
    name: "MongoDB",
    price: 30,
    assignment: true,
    projects: 25
  },
  {
    name: "Express",
    price: 40,
    assignment: false,
    projects: 28
  },
  {
    name: "NextJS",
    price: 60,
    assignment: true,
    projects: 50
  },
  {
    name: "Angular",
    price: 55,
    assignment: false,
    projects: 38
  },
  {
    name: "Vue",
    price: 42,
    assignment: true,
    projects: 32
  },
  {
    name: "TypeScript",
    price: 48,
    assignment: true,
    projects: 36
  }
]

)

db.courses.insertOne({
    name: "Django",
    price: 70,
    assignment: true,
    projects: 45
})

// let a= db.courses.find({price:55})
// console.log(a.toArray())

let b=db.courses.findOne({price:55})
console.log(b)

db.courses.updateMany({price:55}, {$set:{price:0}})

db.courses.deleteOne({price:0 })

db.courses.deleteMany({price:50 })