import Image from "next/image";
import RSVP from "./components/RSVP";
import guanajuato from "../../public/kiss.jpg";
import birchSunset from "../../public/sunset_view_from_venue.jpg";
import { GiBigDiamondRing } from "react-icons/gi";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="fixed w-full flex flex-col top-0 backdrop-blur">
        <div className="container mx-auto flex h-16 p-5">
          <div className="md:basis-1/4 font-[family-name:var(--font-pacifico)]">
            Penelope & Sofia&apos;s Wedding
          </div>
          <nav className="hidden md:flex basis-3/4 justify-end">
            <ul className="list-none items-center md:flex justify-end gap-5">
              <li>Wedding Details</li>
              <li>Accomodations</li>
              <li>Photo Gallery</li>
              <li>Registry</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="pb-20 pt-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-20 items-center sm:items-start">
          <section className="w-full">
            <div className="md:grid grid-cols-2">
              <div className="flex flex-col w-full items-center justify-center">
                <h1 className="text-center">
                  Penelope and Sofia{" "}
                  <span className="text-nowrap">are tying the knot</span>
                </h1>
                <p className="pb-3 md:p-4 text-center font-[family-name:var(--font-pacifico)]">
                  Join us in celebration
                </p>
              </div>
              <Image
                className="mx-auto w-2/3"
                src={guanajuato}
                alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
                priority
              />
            </div>
          </section>
          <section className="container mx-auto text-center py-8">
            <h1 className="text-4xl md:text-5xl">RSVP</h1>
            <RSVP />
          </section>
          <section className="container mx-auto text-center py-8">
            <h1>Venue Information</h1>
            <p className="p-0">Birch Aquarium</p>
            <p className="p-0">2300 Expedition Way, La Jolla, CA 92037</p>
            <p className="max-w-3xl mx-auto mt-4">
              Birch Aquarium is a public aquarium in La Jolla, a community of
              San Diego, California. It serves as the public outreach center for
              Scripps Institution of Oceanography at the University of
              California, San Diego, with over half a million people visiting
              the aquarium each year.
            </p>
            <Image
              className="mx-auto md:w-1/2 mt-6"
              src={birchSunset}
              alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
              priority
            />
          </section>
          <section className="container mx-auto py-8 text-center">
            <h1>Itinerary</h1>
            <div className="flex flex-col gap-8">
              <div>
                <h2>Thursday Night Dinner</h2>
                <p>Thursday, July 10 @ 7pm</p>
                <p>Ballast Point Brewing Company</p>
                <p>9045 Carroll Way</p>
              </div>
              <div>
                <h2>Wedding</h2>
                <p>Friday, July 11</p>
                <p>Cocktail Hour @ 6pm</p>
                <p>Ceremony @ 7pm</p>
                <p>Dinner @ 8pm</p>
                <p>Last Call @ 10pm</p>
                <p>Ends @ 11pm</p>
              </div>
              <div>
                <h2>After Party</h2>
                <p>Friday, Jully 11 @ 11pm</p>
                <p>Location TBD</p>
              </div>
              <div>
                <h2>Saturday Brunch</h2>
                <p>Saturday, July 12 @ 12pm</p>
                <p>Location TBD</p>
              </div>
              <div>
                <h2>Sunday Beach Day?</h2>
                <p>TBD</p>
              </div>
            </div>
          </section>
          <section className="container text-center mx-auto p-8">
            <h1>Where to stay</h1>
            <p className="max-w-3xl mx-auto">
              We&apos;ve reserved rooms for our out-of-town guests at the
              following hotels. Mention the Oseguera-Martin wedding when booking
              your room.
            </p>
          </section>
          <section className="container mx-auto text-center p-4">
            <h1>Things to do</h1>
            <ul>
              <li>San Diego Zoo</li>
              <li>Balboa Park</li>
              <li>UTC Mall</li>
            </ul>
          </section>
          <section className="container text-center mx-auto p-8">
            <h1>Registry</h1>
            <p className="max-w-3xl mx-auto">
              Your presence is the greatest &quot;irreplaceable&quot; gift, but
              if you&apos;d like to &quot;upgrade us&quot; here&apos;s where you
              can find some of the &quot;best things we never had&quot; :
            </p>
          </section>
        </main>
        <footer className="flex items-center justify-center">
          <Link
            href="/"
            className="cursor-pointer hover:underline hover:underline-offset-4"
          >
            Back to top &nbsp;
          </Link>
          <GiBigDiamondRing />
        </footer>
      </div>
    </div>
  );
}
