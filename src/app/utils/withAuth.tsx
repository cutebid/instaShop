import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch, setLoading } from "../store";
import { ToastContainer, toast } from "react-toastify";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.user);

    useEffect(() => {
      dispatch(setLoading(true));
      if (!user || !user.email || !user.basicInfo || !user.confirmDetails) {
        toast.error("Please Complete your profile");

        setTimeout(() => {
          dispatch(setLoading(false)); 
          router.push("/getStarted");
        }, 1000);
      } else {
        dispatch(setLoading(false));
        toast.success("Logged in Successfully");
      }
    }, [user, router, dispatch]);

    return (
      <>
        {user && user.email && user.basicInfo && user.confirmDetails ? (
          <WrappedComponent {...props} />
        ) : null}
        <ToastContainer autoClose={5000} />
      </>
    );
  };

  // Set the display name for better debugging
  AuthenticatedComponent.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return AuthenticatedComponent;
};

export default withAuth;
