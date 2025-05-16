import { type FC } from 'react';
// import { SignIn } from '@clerk/clerk-react';
import { SignIn } from '@clerk/nextjs';

const Login = () => {
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <SignIn
                signUpUrl="/auth/sign-up"
            />
        </div>
    </>);
}
export default Login;