/* @flow */

import utils from '../utils'

const name = 'once'
const key = `__${name}__`

export default {
  init (vuet: Object) {
    utils.set(vuet, key, {})
    Object.keys(vuet.store).forEach(k => {
      utils.set(vuet[key], k, false)
    })
  },
  rule ({ path }: RuleOptions) {
    return {
      beforeCreate () {
        if (this.$vuet[key][path] === false) {
          this.$vuet.fetch(path, { current: this }).then(() => {
            this.$vuet[key][path] = true
          })
        }
      }
    }
  }
}
