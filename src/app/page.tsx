import Image from "next/image";
import RSVP from "./components/RSVP";
import guanajuato from "../../public/kiss.jpg";
import birchSunset from "../../public/sunset_view_from_venue.jpg";

export default function Home() {
  return (
    <div>
      <div className="fixed w-full backdrop-blur">
        <div className="flex p-5">
          <div className="basis-1/4 font-[family-name:var(--font-pacifico)]">
            Penelope & Sofia&apos;s Wedding
          </div>
          <nav className="basis-3/4">
            <ul className="list-none items-center md:flex justify-end gap-5">
              <li>Wedding Details</li>
              <li>Accomodations</li>
              <li>Photo Gallery</li>
              <li>Registry</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <section className="min-h-screen w-full">
            <div className="md:grid grid-cols-2">
              <div className="flex flex-col w-full items-center justify-center">
                <h1 className="text-center">
                  Penelope and Sofia are tying the knot
                </h1>
                <p className="p-4 text-center">Join us in celebration</p>
              </div>
              <Image
                className="mx-auto w-2/3"
                src={guanajuato}
                alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
                priority
              />
            </div>
          </section>
          <section className="container p-2 text-center mx-auto min-h-screen">
            <h1>RSVP</h1>
            <RSVP />
          </section>
          <section className="container mx-auto p-2 text-center min-h-screen">
            <h1>Venue Information</h1>
            <p>Birch Aquarium</p>
            <p>2300 Expedition Way, La Jolla, CA 92037</p>
            <p>
              Birch Aquarium is a public aquarium in La Jolla, a community of
              San Diego, California. It serves as the public outreach center for
              Scripps Institution of Oceanography at the University of
              California, San Diego, with over half a million people visiting
              the aquarium each year.
            </p>
            <Image
              className="mx-auto w-1/2"
              src={birchSunset}
              alt="Photo of Penelope and Sofia on vacation in Guanajuato, MX"
              priority
            />
          </section>
          <section className="container mx-auto p-2 text-center min-h-screen flex flex-col gap-8">
            <h1>Itinerary</h1>
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
          </section>
          <section className="container mx-auto p-2 min-h-screen">
            <h1>Where to stay</h1>
            <p>
              We&apos;ve reserved rooms for our out-of-town guests at the
              following hotels. Mention the Oseguera-Martin wedding when booking
              your room.
            </p>
          </section>
          <section className="container mx-auto p-2 text-center min-h-screen">
            <h1>Things to do</h1>
            <ul>
              <li>San Diego Zoo</li>
              <li>Balboa Park</li>
              <li>UTC Mall</li>
            </ul>
          </section>
          <section className="container mx-auto p-2 min-h-screen">
            <h1>Registry</h1>
            <p>
              Your presence is the greatest &quot;irreplaceable&quot; gift, but
              if you&apos;d like to &quot;upgrade us&quot; here&apos;s where you
              can find some of the &quot;best things we never had&quot; :
            </p>
          </section>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            English/Spanish
          </p>
          <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            Light/Dark
          </p>
          <p className="flex items-center gap-2 hover:underline hover:underline-offset-4">
            Back to top{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}
