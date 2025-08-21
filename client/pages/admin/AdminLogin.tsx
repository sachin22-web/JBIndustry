import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

export default function AdminLogin() {
  const navigate = useNavigate();
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
      console.log("AdminLogin: Making login request with:", {
        email: email.trim(),
        password: "***", // Don't log actual password
      });

      // Make API call to backend
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

      console.log("AdminLogin: Response status:", response.status);
      console.log(
        "AdminLogin: Response headers:",
        Object.fromEntries(response.headers.entries()),
      );

      // Check if response is ok first
      if (!response.ok) {
        let errorMessage = "Invalid email or password";
        try {
          // Clone the response to avoid body stream issues
          const responseClone = response.clone();
          const errorData = await responseClone.json();
          errorMessage = errorData.message || errorMessage;
        } catch (parseError) {
          // If we can't parse the error response, use the default message
          console.warn("Could not parse error response:", parseError);
          errorMessage = `Request failed with status ${response.status}`;
        }
        setError(errorMessage);
        return;
      }

      // Parse successful response
      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error("Could not parse response JSON:", parseError);
        setError("Invalid response from server");
        return;
      }

      if (data.success) {
        // Store admin token/session if provided
        if (data.token) {
          localStorage.setItem("adminToken", data.token);
        }

        // Redirect to admin dashboard
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      console.error("AdminLogin: Caught error:", {
        message: err instanceof Error ? err.message : String(err),
        stack: err instanceof Error ? err.stack : undefined,
        err,
      });
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <Card className="relative backdrop-blur-sm bg-white/95 border-0 shadow-2xl shadow-blue-500/10">
          <CardHeader className="text-center space-y-6 pb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold text-slate-800 mb-2">
                Admin Panel Login
              </CardTitle>
              <CardDescription className="text-slate-600 text-base">
                Secure access to JB Industries dashboard
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Admin Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your admin email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 pr-11 h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <Alert
                  variant="destructive"
                  className="border-red-200 bg-red-50"
                >
                  <AlertDescription className="text-red-700">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-primary hover:opacity-90 text-white font-semibold text-base shadow-lg shadow-blue-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </div>
                ) : (
                  "Login"
                )}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
                <Shield className="w-4 h-4" />
                <span>Secured with enterprise-grade authentication</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-slate-500">
            © 2024 JB Industries. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
