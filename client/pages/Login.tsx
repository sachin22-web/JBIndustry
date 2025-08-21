import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Login attempt:", { email, password: "***" });

      // Check if it's admin credentials first
      if (email === "admin@jbindustries.com" && password === "admin123") {
        try {
          const response = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.trim(),
              password: password,
            }),
          });

          const data = await response.json();

          if (response.ok && data.success) {
            if (data.token) {
              localStorage.setItem("adminToken", data.token);
            }
            window.location.href = "/admin/dashboard";
            return;
          }
        } catch (apiError) {
          console.error("Admin API error:", apiError);
        }
      }

      // Try regular user login
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Store user token
        if (data.token) {
          localStorage.setItem("userToken", data.token);
        }

        // Store user info
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        // Success message
        alert(`Welcome back, ${data.user?.name || email}!`);

        // Redirect to home page
        window.location.href = "/";
        return;
      } else {
        // If user doesn't exist, show registration option
        if (data.message === "Invalid email or password") {
          const shouldRegister = confirm(
            "User not found. Would you like to create a new account?",
          );

          if (shouldRegister) {
            // Auto-register the user
            const name = prompt("Please enter your full name:");
            if (name) {
              const registerResponse = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email.trim(),
                  password: password,
                  name: name.trim(),
                }),
              });

              const registerData = await registerResponse.json();

              if (registerResponse.ok && registerData.success) {
                // Store tokens
                if (registerData.token) {
                  localStorage.setItem("userToken", registerData.token);
                }
                if (registerData.user) {
                  localStorage.setItem(
                    "user",
                    JSON.stringify(registerData.user),
                  );
                }

                alert(
                  `Welcome ${registerData.user?.name}! Your account has been created.`,
                );
                window.location.href = "/";
                return;
              } else {
                setError(registerData.message || "Failed to create account");
              }
            }
          }
        } else {
          setError(data.message || "Invalid email or password");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Sign in to your account
            </CardTitle>
            <CardDescription>
              Enter your email and password to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-gray-600">
                Enter any email/password to create a new account automatically
              </p>
              <p className="text-sm text-gray-600">
                Admin access: admin@jbindustries.com / admin123
              </p>
              <p className="text-xs text-gray-500 mt-2">
                New users will be saved to MongoDB Atlas - jb-industries
                collection
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
