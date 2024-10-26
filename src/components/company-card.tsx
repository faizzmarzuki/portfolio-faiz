import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CardComponentProps = {
    src: string,
    fallback: string,
    companyName: string,
    position: string,
    location: string,
    duration: string,
}

export const CompanyCard = ({src, fallback, companyName, position, location, duration}:CardComponentProps) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <div className="flex items-center gap-5">
            <Avatar>
              <AvatarImage src={src} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle>{companyName}</CardTitle>
              <CardDescription>{position}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex gap-2 items-center">
          <Avatar className="h-5 w-5">
            {location === "Remote" ? (
              <AvatarImage src="https://uxwing.com/wp-content/themes/uxwing/download/flags-landmarks/globe-icon.png" /> // Replace with the globe image URL
            ) : (
              <AvatarImage
                src="https://cdn.countryflags.com/thumbs/malaysia/flag-round-250.png"
                className="w-full h-full object-cover"
              />
            )}
            <AvatarFallback>
              {location === "Remote" ? "🌍" : "MY"}
            </AvatarFallback>
          </Avatar>
          <p className="font-semibold">{location}</p>
        </CardContent>
        <CardFooter>
          <p className="font-medium">{duration}</p>
        </CardFooter>
      </Card>
    </div>
  );
};
