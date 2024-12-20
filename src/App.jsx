import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
// import Comments from './components/comments/Comments';

const SignupForm = lazy(() => import('./_auth/forms/SignupForm'));
const AuthLayout = lazy(() => import('./_auth/AuthLayout'));
const RootLayout = lazy(() => import('./_root/RootLayout'));
const LoginForm = lazy(() => import('./_auth/forms/LoginForm'));
const CreateNewAccount = lazy(() => import('./_auth/forms/CreateNewAccount'));
const ForgotPassword = lazy(() => import('./_auth/forms/ForgotPassword'));
const SetNewPassword = lazy(() => import('./_auth/forms/SetNewPassword'));
const VerifyCode = lazy(() => import('./_auth/forms/VerifyCode'));


const Home = lazy(() => import('./_root/pages/Home'));
const UserProfile = lazy(() => import('./_root/pages/UserProfile'));
const Profile = lazy(() => import('./_root/pages/Profile'));
const Follower = lazy(() => import('./_root/pages/Follower'));
const Following  = lazy(()=>import("./_root/pages/following")) ;
const Community = lazy(() => import('./_root/pages/Community'));
const Messages = lazy(() => import('./_root/pages/Messages'));
const ForYou = lazy(() => import('./_root/pages/ForYou'));
const NotFoundPage = lazy(() => import('./_root/pages/NotFoundPage'));
const CommentsPage = lazy(() => import('./components/comments/CommentsPage'));
const PostPage = lazy(() => import('./components/post/PostPage'));

function App() {
  const Loader = () => {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  };

  return (
    <Suspense
      fallback={
        // <div className="font-sora text-center mt-32 text-4xl font-semibold text-red-600">
        //   Loading...
        // </div>
        <Loader />
      }
    >
      <BrowserRouter>
        <Routes>
          {/* Auth layout wrapping nested routes */}
          <Route path="/" element={<AuthLayout />}>
            {/* Redirect the root path to /signup */}
            <Route index element={<Navigate to="/signup" replace />} />
            {/* Signup and login routes */}
            <Route path="signup" element={<SignupForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="/create-new-account" element={<CreateNewAccount />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/set-new-password" element={<SetNewPassword />} />
            <Route path="/verify-code" element={<VerifyCode />} />
          </Route>


          <Route path="/" element={<RootLayout />}>
            <Route index element={<Navigate to="/home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/follower" element={<Follower />} />
            <Route path="/following" element={<Following />} />
            <Route path="/community" element={<Community />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/forYou" element={<ForYou />} />
            <Route path="/comments" element={<CommentsPage />} />
            <Route path="/post" element={<PostPage />} />
          </Route>

          {/* 404 Not Found Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
