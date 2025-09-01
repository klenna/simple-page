import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("EEEEE", e.target);

    const payload = {
      name: "Double Dee",
      email: "double.dee@gmail.com",
      phone: "081273616417",
      additional_field: {
        nip: "123456789",
        address: "123 Main St, Anytown, USA",
        birthday: "1990-01-01",
      },
    };

    AutoLogin(
      payload.name,
      payload.email,
      payload.phone,
      payload.additional_field
    );

    router.replace("/homepage");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="t sm:rounded-lg border-none w-full sm:max-w-[450px] h-full sm:max-h-[700px] pt-16 flex items-center flex-col relative">
        <CardHeader>
          <CardTitle className="text-center text-primary-base font-ft-1">
            <h2>Login</h2>
          </CardTitle>
          <CardDescription className="text-neutral-400">
            Login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="w-[90%] mx-auto">
          <section className="mt-8 sm:mt-2 w-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <Input
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
              <Input
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Button type="submit" variant="primary" className="mt-4">
                Submit
              </Button>
            </form>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
