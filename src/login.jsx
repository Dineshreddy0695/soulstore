import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


const Login = () => {
  return (
    <div  className="p-6">
      <Card  className="w-full max-w-lg shadow-lg mx-auto mt-20">
        <CardHeader className="text-5xl font-serif font-stretch-95%">
            Login 
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" required />
            </div>
            <Button type="submit" className="w-full">Login</Button>
          </form>

        </CardContent>
        <p className="font-light  pb-2 text-center pr-15"> Doesn't have an account <Link to="/register" className="text-blue-700">Register Here</Link></p>
      </Card>
    </div>
  );
};
export default Login;