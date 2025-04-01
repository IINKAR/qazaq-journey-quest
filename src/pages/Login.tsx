
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const loginSchema = z.object({
  email: z.string().email("Жарамды электрондық пошта енгізіңіз"),
  password: z.string().min(6, "Құпия сөз кемінде 6 таңбадан тұруы керек"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { login } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      await login(data.email, data.password);
      toast({
        title: "Сәтті кіру!",
        description: "QazaqTourist-қа қош келдіңіз!",
      });
      navigate("/");
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Қате",
        description: "Кіру кезінде қате орын алды. Қайталап көріңіз.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12 min-h-screen flex flex-col items-center justify-center">
        <div className="w-full max-w-md space-y-8 p-8 bg-white shadow-lg rounded-lg">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-kazakh-night">Жүйеге кіру</h1>
            <p className="mt-2 text-gray-500">QazaqTourist аккаунтыңызға кіріңіз</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Электрондық пошта</FormLabel>
                    <FormControl>
                      <Input placeholder="name@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Құпия сөз</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          {...field}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-gray-500" />
                          ) : (
                            <EyeIcon className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-kazakh-blue" disabled={isLoading}>
                {isLoading ? "Жүктелуде..." : "Кіру"}
              </Button>
            </form>
          </Form>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Аккаунтыңыз жоқ па?{" "}
              <Link to="/register" className="text-kazakh-blue font-medium hover:underline">
                Тіркелу
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
