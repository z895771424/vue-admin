import _ from 'lodash'

export function parseEnv(env: Record<string, any>) {
  const evns = _.cloneDeep(env)

  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      evns[key]=value==='true'? true:false
    }

    if (/^\d+$/.test(value)) {
      evns[key] = parseInt(value)
    }
  })

  return evns
}