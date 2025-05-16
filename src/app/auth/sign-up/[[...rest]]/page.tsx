import { SignUp } from '@clerk/nextjs'

const Signup = () => {
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <SignUp
                signInUrl="/auth/login"
            />
        </div>
    </>);
}
export default Signup;