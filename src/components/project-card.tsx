import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Calendar } from "@/constant/icons";

type CardComponentProps = {
  src: string;
  project_link?: string;
  project_name: string;
  company_name: string;
  involvement_type:string;
  stack: string[];
  duration: string;
};

export const ProjectCard = ({
  src,
  project_link,
  project_name,
  company_name,
  involvement_type,
  duration,
}: CardComponentProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <Image
            src={src}
            alt={"image"}
            width={700}
            height={400}
            className="rounded-lg"
          />
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline justify-between">
            <div>
              <CardTitle>{project_name}</CardTitle>
              <CardDescription>{company_name}</CardDescription>
            </div>
            <Badge variant="outline">{involvement_type}</Badge>
          </div>
          <div className="flex gap-2 items-center">
            <Calendar />
            <p>{duration}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Badge className="bg-green-500 text-white">React</Badge>
        </CardFooter>
      </Card>
    </div>
  );
};
