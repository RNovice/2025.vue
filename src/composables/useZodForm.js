import { reactive } from 'vue'
import { z } from 'zod'

export function useZodForm(schema) {
  const form = reactive({})
  const errors = reactive({})

  const validate = () => {
    const result = schema.safeParse(form)

    if (!result.success) {
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })
      result.error.issues.forEach(issue => {
        errors[issue.path[0]] = issue.message
      })
      return false
    }
    return true
  }

  const validateField = (name) => {
    const rule = schema.shape[name]
    const single = z.object({ [name]: rule })

    errors[name] = ''

    const res = single.safeParse({ [name]: form[name] })


    if (['password', 'confirm'].includes(name) && form.confirm) {
      if (form.password !== form.confirm) {
        errors.confirm = '請確認密碼'
        if (name === 'password') errors[name] = ''
        return false
      } else {
        errors.confirm = ''
      }
    }

    if (!res.success) {
      errors[name] = res.error.issues[0].message
      return false
    }
    return true
  }

  return {
    form,
    errors,
    validate,
    validateField
  }
}
