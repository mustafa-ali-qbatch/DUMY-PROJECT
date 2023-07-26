import { signup } from '../Helpers'
import ChildSignUpSide from '../sign_up_card'

export default function SignUpSide() {
  async function signUpFunc(data) {
    'use server'
    await signup(data)
  }
  return <ChildSignUpSide signUp={signUpFunc} />
}
