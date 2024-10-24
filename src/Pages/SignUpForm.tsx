import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Alert, AlertDescription } from "@/Components/ui/alert";
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from 'firebase/auth';
import styles from "../Css/Signup.module.css";



const firebaseConfig = {
  apiKey: "AIzaSyBVfnPXmCj0UbHb3E-T9gXXJapRfZ-tL5U",
  authDomain: "havenhub-25bff.firebaseapp.com",
  projectId: "havenhub-25bff",
  storageBucket: "havenhub-25bff.appspot.com",
  messagingSenderId: "509978263150",
  appId: "1:509978263150:web:b28f8a0760f81eb45f307f",
  measurementId: "G-NNQHW1M4HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);





interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}



const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  //Sign In Form
  const [isSignIn, setIsSignIn] = useState(false);

  //track User Inputs
  const [formValues, setFormValues] = useState<FormValues>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  //handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  //handle validation
  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!isSignIn && !formValues.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (!isSignIn && formValues.password.length < 6) {
      errors.password = "Password needs to be 6 characters or more";
    }

    
    if (!isSignIn && !formValues.confirmPassword) {
      errors.confirmPassword = "Password is required";
    } else if (!isSignIn && formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };






  //handle submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

      try {
        let username = "";
        if (isSignIn){

          const userCredential = await signInWithEmailAndPassword(
            auth,
            formValues.email,
            formValues.password
          );
          console.log("Signed In User:", userCredential.user);
          username = userCredential.user.displayName || "";
          setSuccessMessage("Sign in successful");

        } else{
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formValues.email,
            formValues.password
          );

          await updateProfile(userCredential.user, {
            displayName: formValues.username,
          });

          console.log("Created User:", userCredential.user);
          username = formValues.username;
          setSuccessMessage("Account created");
        }

        setFormValues({
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        });

        alert(isSignIn ? "Sign in successful" : "Account created");
        navigate("/dashboard", {state: {username}});
      } catch (error: any) {
        //Specific Firebase erros
        let errorMessage = "An error occurred";

        switch (error.code) {
          case 'auth/email-already-in-use':
            errorMessage = "Email is already in use";
            break;
          case 'auth/invalid-email':
            errorMessage = "Email is invalid";
            break;
          case 'auth/operation-not-allowed':
            errorMessage = "Operation is not allowed";
            break;
          case 'auth/weak-password':
            errorMessage = "Password is too weak";
            break;
          case 'auth/user-not-found':
            errorMessage = "User not found";
            break;
          case 'auth/wrong-password':
            errorMessage = "Wrong password";
            break;
        default:
          errorMessage = error.message || "An error occurred during authentication";
        }
        setSubmitError(errorMessage);

      }finally {
        setIsSubmitting(false);
      }
    };

    const toggleMode =() => {
      setIsSignIn(!isSignIn);
      setFormValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setFormErrors({});
      setSubmitError("");
    }

    return (
      <div>
        <div className={styles.CardBackground}>
          <Card className={styles.CardContainer}>
            <CardHeader>
              <CardTitle className={styles.CardTitle}>
                {isSignIn ? "Sign In" : "Create Account"}
              </CardTitle>
            </CardHeader>
            <CardContent className={styles.CardContent}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <Alert variant="destructive">
                    <AlertDescription>{submitError}</AlertDescription>
                  </Alert>
                )}
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
                
                {!isSignIn && (
                  <div className={styles.UserInputContainer}>
                  <Label htmlFor="username" className={styles.CardLabel}>Username</Label>
                  <Input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                    className={formErrors.username ? "border-red-500" : ""}
                    placeholder="Username"
                  />
                  {formErrors.username && (
                    <p className="text-sm text-red-500">{formErrors.username}</p>
                  )}
                </div>
                )}
                <div className={styles.UserInputContainer}>
                  <Label htmlFor="email" className={styles.CardLabel}>Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={formErrors.email ? "border-red-500" : ""}
                    placeholder="Email"
                  />
                  {formErrors.email && (
                    <p className="text-sm text-red-500">{formErrors.email}</p>
                  )}
                </div>

                <div className={styles.UserInputContainer}>
                  <Label htmlFor="password" className={styles.CardLabel}>Password</Label>
                  <Input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                    className={formErrors.password ? "border-red-500" : ""}
                    placeholder="Password"
                  />
                  {formErrors.password && (
                    <p className="text-sm text-red-500">{formErrors.password}</p>
                  )}
                </div>

                {!isSignIn && (
                  <div className={styles.UserInputContainer}>
                  <Label htmlFor="confirmPassword" className={styles.CardLabel}>Confirm Password</Label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formValues.confirmPassword}
                    onChange={handleChange}
                    className={formErrors.confirmPassword ? "border-red-500" : ""}
                    placeholder="Confirm Password"
                  />
                  {formErrors.confirmPassword && (
                    <p className="text-sm text-red-500">{formErrors.confirmPassword}</p>
                  )}
                </div>
                )
                
                }

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="flex items-center justify-center">
                        <span className="absolute w-4 h-4 bg-white/30 rounded-full animate-ping" />
                        <span className="w-4 h-4 bg-white rounded-full" />
                      </span>
                      <span className="ml-2">Loading...</span>
                    </>
                  ) : (
                    isSignIn ? "Sign In" : "Create Account"
                  )}
                </Button>
                <Button
                  type="button"
                  className="w-full"
                  variant="outline"
                  onClick={toggleMode}
                >
                  {isSignIn ? "Dont Have an account? Sign Up" : "Already have an account? Sign In"}
                </Button>
              </form>
            </CardContent>
        </Card>
        </div>
      </div>
    
  );
};
export default SignUpForm;