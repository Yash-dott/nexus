import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "@/components/global";

const Index = lazy(() => import("../pages/Index"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const Features = lazy(() => import("../pages/Features"));
const UseCases = lazy(() => import("../pages/UseCases"));
const Pricing = lazy(() => import("../pages/Pricing"));
const CourseDetail = lazy(() => import("../pages/CourseDetail"));

const AppNavigation = () => {
    return (<>

        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/use-cases" element={<UseCases />} />
                    <Route path="/pricing" element={<Pricing />} />
                    <Route path="/individual" element={<Index />} />
                    <Route path="/corporate" element={<Index />} />
                    <Route path="/education" element={<Index />} />
                    <Route path="/courses/:departmentId/:courseSlug" element={<CourseDetail />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </>);
}
export default AppNavigation;