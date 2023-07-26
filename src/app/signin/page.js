import { signIn } from "../Helpers";
import ChildSignInSide from "../sign_in_card";
export default function SignInSide() {
  async function signInFunc(data) {
    'use server'
    await signIn(data)
  }
  return (
   <ChildSignInSide signIn={signInFunc}/>
  );
}