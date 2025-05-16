import { type FC } from 'react';
import { SignUp } from '@clerk/clerk-react'

const Signup: FC = () => {
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <SignUp
                signInUrl="/login"
            />
        </div>
    </>);
}
export default Signup;