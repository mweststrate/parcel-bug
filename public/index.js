import produce from "immer"

const val = produce({}, d => {
  d.x = 1
})

console.log(val.x)